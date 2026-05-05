---
url: /admin/admin-dremio-kubernetes/upgrade
slug: /admin/admin-dremio-kubernetes/upgrade
title: "Upgrade Dremio on Kubernetes | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64188.659322291
---

  * [Dremio Enterprise Home](/)
  * [Administration](/admin)
  * [Dremio on Kubernetes](/admin/admin-dremio-kubernetes)
  * Upgrade Dremio

Version: current [26.x]
On this page
# Upgrade Dremio on Kubernetes
This guide covers upgrading Dremio on Kubernetes for two different scenarios:
  * [Upgrade Dremio 26.0+](/admin/admin-dremio-kubernetes/upgrade/) - For those who are already in Dremio 26.0+ and want to upgrade to a newer 26 version.
  * [Upgrade from Dremio 24/25 to 26.0+](/admin/admin-dremio-kubernetes/upgrade/) - For those who are in version 24 or 25 and want to upgrade to Dremio 26.0+.


Choose the appropriate section below based on your current Dremio version.
## Upgrade Dremio 26.0+[​](/admin/admin-dremio-kubernetes/upgrade/)
### Prerequisites[​](/admin/admin-dremio-kubernetes/upgrade/)
Before upgrading Dremio, make sure that all engines are stopped. For more information, see [Stopping All Engines](/deploy-dremio/managing-engines-kubernetes).
### Upgrade Procedure[​](/admin/admin-dremio-kubernetes/upgrade/)
To upgrade the Dremio platform, there are two procedures to be undertaken:
  1. Update CRDs - Dremio makes use of multiple CRDs. These require a different upgrade procedure than the Dremio application itself. Not all releases will require this step; consult the [release notes](/release-notes) to understand if this is required. CRD updates must be done first.
  2. Update the Helm chart - Every Dremio release, there will be a Helm chart release where the image tags for the various services are updated. Thus, to upgrade to the latest version of Dremio, you need only provide the latest version of the charts. For a list of all changes, including which Helm chart release corresponds to which Dremio version, see the [release notes](/release-notes). There will be Dremio's Helm chart releases that do not upgrade Dremio but instead update another component. Enterprise customers can view a list of all Helm charts and image tags on 


During the upgrade process, existing pods are terminated, and new pods are created with the new images. After all the newly created pods are restarted and running, your Dremio cluster is upgraded.
If you do not know your Helm chart release name, use `helm list` to list the Helm deployments in a selected namespace.
To upgrade CRDs:
  1. Download the latest version of Dremio's Helm charts locally, see [Downloading Dremio's Helm Charts](/deploy-dremio/configuring-kubernetes) for instructions. This will result in a new directory, by default named `dremio-helm`.
  2. Dremio utilizes sub-charts, which must be downloaded as well. To do this, run:

```
helm dependency update dremio-helm  

```

This will download three additional sets of charts, landing them in `dremio-helm/charts`.
  3. To extract the CRDs from this now completed chart, use our provided bash script. Click here to download the script. Its content can also be reviewed below:
extract-crds script

```
   #!/usr/bin/env bash  
   #  
   # Extracts all CRDs from a Helm chart (including nested subcharts)  
   # into a user-supplied output directory for manual kubectl apply.  
   #  
   # Usage:  
   #   ./extract-crds.sh <output-dir>  
   #  
   # Example:  
   #   ./extract-crds.sh /tmp/crds  
   #  
   # The script:  
   #   • Finds all crds/ directories under the chart (one level deep).  
   #   • Unpacks dependency archives in charts/ and collects their CRDs.  
   #   • Writes all CRD YAMLs to <output-dir>.  
   #  
  
  
   set -euo pipefail  
  
  
   OUTPUT_DIR="${1:-}"  
   if [[ -z "${OUTPUT_DIR}" ]]; then  
     echo "Usage: $0 <output-dir>"  
     exit 1  
   fi  
  
  
   CHART_DIR="$(pwd)"  
   mkdir -p "${OUTPUT_DIR}"  
  
  
   echo "🔍 Scanning chart tree under: ${CHART_DIR}"  
   echo "📂 Output directory: ${OUTPUT_DIR}"  
   echo  
  
  
   # --------------------------------------------------------------------  
   # Step 1: Copy static CRDs from crds/ directories (recursive)  
   # --------------------------------------------------------------------  
   find "${CHART_DIR}" -type d -name crds | while read -r CRD_DIR; do  
     echo "📦 Found crds/: ${CRD_DIR}"  
     find "${CRD_DIR}" -maxdepth 1 -type f \( -name "*.yaml" -o -name "*.yml" \) -exec cp {} "${OUTPUT_DIR}" \;  
   done  
  
  
   # --------------------------------------------------------------------  
   # Step 2: Unpack dependency archives (charts/*.tgz) and collect CRDs  
   # --------------------------------------------------------------------  
   CHARTS_DIR="${CHART_DIR}/charts"  
   if [[ -d "${CHARTS_DIR}" ]]; then  
     for archive in "${CHARTS_DIR}"/*.tgz; do  
       [[ -f "${archive}" ]] || continue  
       echo "🧩 Inspecting dependency archive: ${archive}"  
       tmp_dir="$(mktemp -d)"  
       tar -xzf "${archive}" -C "${tmp_dir}"  
       find "${tmp_dir}" -type d -name crds | while read -r dep_crd_dir; do  
         echo "  ↳ Found dependency CRDs: ${dep_crd_dir}"  
         find "${dep_crd_dir}" -maxdepth 1 -type f \( -name "*.yaml" -o -name "*.yml" \) -exec cp {} "${OUTPUT_DIR}" \;  
       done  
       rm -rf "${tmp_dir}"  
     done  
   fi  
  
  
   # --------------------------------------------------------------------  
   # Step 3: Deduplicate by filename (optional)  
   # --------------------------------------------------------------------  
   cd "${OUTPUT_DIR}"  
   shopt -s nullglob  
   for f in *.yaml *.yml; do  
     [[ -f "$f" ]] || continue  
     yq e '.metadata.name' "$f" >/dev/null 2>&1 || continue  
     name=$(yq e '.metadata.name' "$f")  
     if [[ -n "$name" ]]; then  
       mv "$f" "${name}.yaml" 2>/dev/null || true  
     fi  
   done  
   shopt -u nullglob  
  
  
   echo  
   echo "✅ Done. Extracted CRDs are in ${OUTPUT_DIR}"  
   echo "👉 To install them manually:"  
   echo "   kubectl apply -f ${OUTPUT_DIR}"  

```

Execute the script from **inside** the `dremio-helm` directory, providing an output path. This will copy every CRD from the charts into the specified directory.

```
{path-to-script}/extract-crds.sh <path-to-output-dir>  

```

  4. The extracted YAML can now be reviewed before applying it. Take this opportunity to also compare these CRDs to the ones already installed in your cluster. To get a list of all CRDs currently installed, run:

```
kubectl get crd <crd_name>  

```

To view the raw YAML of a given CRD run:

```
kubectl get crd <crd_name> -o yaml  

```

  5. Once the review is complete, apply the updates to the CRDs by running:

```
kubectl apply -f <path-to-output-dir>  

```



In the unlikely event a rollback is needed, simply reapply the older version of the CRDs. Older versions of the CRDs can be downloaded by pulling an older version of the Helm charts and repeating the process detailed above. The YAML from step four could also be set aside and reapplied if needed.
To upgrade Dremio:
  1. Ensure that your Dremio is backed up. For more information, see the Admin CLI reference documentation on [Back Up Dremio](/reference/admin-cli/backup).
  2. Ensure that no queries are running on the cluster, as any running queries will fail when services start terminating.
  3. Review your `values-overrides.yaml` against the new chart version's default values. Configuration keys can be added, removed, or renamed between Helm chart versions. Helm does not warn you when an override key no longer exists in the base chart. To compare your overrides with the new defaults:
    1. Pull the new chart version locally:
Pull the new Helm chart version

```
helm pull oci://quay.io/dremio/dremio-helm --version <new-desired-version> --untar  

```

    2. Compare your `values-overrides.yaml` with the `values.yaml` in the extracted chart directory to identify keys that have been removed or renamed.
    3. Update your `values-overrides.yaml` to remove obsolete keys and adopt any renamed or restructured keys. See [Configuring Your Values to Deploy Dremio to Kubernetes](/deploy-dremio/configuring-kubernetes) for configuration options and consult the [release notes](/release-notes) for details on configuration changes.
Helm silently ignores override keys that do not exist in the base chart. If you skip this step, removed or renamed configuration values in your `values-overrides.yaml` will have no effect after the upgrade, which can cause unexpected behavior.
  4. Run the following `helm upgrade` command:
Upgrade Dremio using Helm

```
helm upgrade <chart-release-name> oci://quay.io/dremio/dremio-helm -f <your-local-path>/values-overrides.yaml --version <new-desired-version>  

```

  5. Pods will begin restarting with the new images and, once finished, Dremio will be accessible.


The job results cleanup optimization uses a secondary index to optimize the results cleanup, which implies a one-time reindexing of the jobs table during the upgrade.
The reindexing duration depends on the total number of jobs stored in the KV store. In environments with a large volume of jobs, this can increase the overall upgrade time.
## Upgrade from Dremio 24/25 to 26.0+[​](/admin/admin-dremio-kubernetes/upgrade/)
For Enterprise customers, version Dremio 26 brought the v3 Helm charts with it. The former v2 Helm charts, distributed via the 
It is possible to upgrade an existing deployment. However, Enterprise customers need to migrate from the v2 Helm charts to the v3 Helm charts before any upgrade can take place. The v3 Helm charts are distributed via 
Customers must move the relevant content from their existing `value.yaml` (and any other deployment-specific configurations like Identity Provider authentication) into the new `values-overrides.yaml` configuration file, as detailed in [Configure your Values](/deploy-dremio/configuring-kubernetes).
Some configurations can be left behind. For example, the new UI experience has superseded the executor configuration in the charts. For more information, see [Managing Engines in Kubernetes](/deploy-dremio/managing-engines-kubernetes).
Skip the next paragraph if you did not use the Executor HPA and node life cycle policy.
Before upgrading to Dremio 26.0+, if you intend to continue to use [Classic Engines](/deploy-dremio/configuring-kubernetes), the no longer supported node life cycle policy should be disabled. To check for this option, look at the executor section in your old Helm Charts `values.yaml`, and see if `node_lifecycle_service_enabled: true` is set. If it's set to `true`, change it to `false` and redeploy Dremio. If it's not present, that is the same as `false`. Despite this, if post upgrade you note the Executors of a Classic Engine marked as paused on the node activity panel, you can resolve this with a call to Dremio's Blacklist API (see [Allow All Nodes](/reference/api)).
Once the new `values-overrides.yaml` configuration file for 26+ and other deployment configurations are prepared, you can proceed with the upgrade.
For help with this process, please reach out to Dremio Support and your Account Executive. More detailed guides and help from Dremio's professional services team can be provided.
To upgrade Dremio:
  1. Ensure you have created a new `values-overrides.yaml` configuration file with relevant values from your existing deployment ported over per [Configure your Values](/deploy-dremio/configuring-kubernetes)
  2. Ensure that your Dremio is backed up. For more information, For more information, see the Admin CLI reference documentation on [Back Up Dremio](/reference/admin-cli/backup).
  3. Ensure that no queries are running on the cluster, as any running queries will fail when services start terminating.
  4. Uninstall your existing Dremio deployment:

```
helm uninstall <chart-release-name>  

```

This will delete existing pods and remove other elements of the existing Dremio deployment. Crucially, it will not delete the `dremio-master-0` volume, which contains the KV store and Dremio's state.
The term `master` is a legacy label. We now refer to this as the main coordinator pod.
  5. Confirm the `dremio-master-0` volume still exists in the namespace you want to reinstall Dremio. This can be confirmed with:

```
kubectl get pvc --namespace <dremio-install-namespace>  

```

Each of your executors should have left behind two volumes, but the main executor should have left only one.
  6. We're now ready to install Dremio 26.0+. Follow the instructions in [Deploying Dremio to Kubernetes](/deploy-dremio/deploy-on-kubernetes) to complete the installation.


Dremio must be deployed to the same location as the previous version to mount the `dremio-master-0` volume. It's the content of this volume that is being upgraded.
The job results cleanup optimization uses a secondary index to optimize the results cleanup, which implies a one-time reindexing of the jobs table during the upgrade.
The reindexing duration depends on the total number of jobs stored in the KV store. In environments with a large volume of jobs, this can increase the overall upgrade time.
Was this page helpful?
[Previous Dremio on Kubernetes](/admin/admin-dremio-kubernetes)[Next Licensing](/admin/licensing)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Dremio on Kubernetes](/admin/admin-dremio-kubernetes)[Next Licensing](/admin/licensing)
!
