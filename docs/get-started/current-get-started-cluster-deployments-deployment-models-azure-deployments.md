---
url: /get-started/cluster-deployments/deployment-models/azure-deployments
slug: /get-started/cluster-deployments/deployment-models/azure-deployments
title: "Deploy Dremio on Kubernetes | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64216.655739375
---

  * [Dremio Enterprise Home](/)
  * [Deploy Dremio](/deploy-dremio)
  * Deploy on Kubernetes

Version: current [26.x]
On this page
# Deploy Dremio on Kubernetes
You can follow these instructions to deploy Dremio on Kubernetes provisioned through a cloud provider or running in an on-premises environment.
If you are using an **Enterprise Edition free trial** , go to [Get Started with the Enterprise Edition Free Trial](/get-started/kubernetes-trial).
## Prerequisites[​](/deploy-dremio/deploy-on-kubernetes)
Before deploying Dremio on Kubernetes, ensure you have the following:
  * A hosted Kubernetes environment to deploy and manage the Dremio cluster.  
Each Dremio release is tested against 
  * Helm 3 installed on your local machine to run Helm commands. For installation instructions, refer to 
  * A local kubectl configured to access your Kubernetes cluster. For installation instructions, refer to 
  * Object Storage: Amazon S3 (including S3-compatible, e.g., MinIO), Azure Storage, or Google Cloud Storage (GCS).
  * Storage classes that support ReadWriteOnce (RWO) access mode and ideally can create expandable volumes.
  * The ability to connect to 


### Additional Prerequisites for the Enterprise Edition[​](/deploy-dremio/deploy-on-kubernetes)
For the Enterprise Edition, you must:
  * Create an account on   
To get access, contact your Dremio account executive or Dremio Support.
If your internet access doesn't allow reaching Dremio's OCI repository in Quay.io, consider using a private mirror to fetch Dremio's Helm chart images.
  * Get a valid license key issued by Dremio to put in the Helm chart. To obtain the license, refer to [Licensing](/admin/licensing).


### Additional Prerequisites for the OpenShift[​](/deploy-dremio/deploy-on-kubernetes)
Before deploying Dremio onto OpenShift, you additionally need the following:
  * Have the OpenShift `oc` CLI command configured and authenticated. For the installation instructions, see 


#### Node Tuning for OpenSearch on OpenShift[​](/deploy-dremio/deploy-on-kubernetes)
OpenSearch requires the `vm.max_map_count` kernel parameter to be set to at least **262144**.
This parameter controls the maximum number of memory map areas a process can have, and OpenSearch uses memory-mapped files extensively for performance.
Without this setting, OpenSearch pods will fail to start with errors related to virtual memory limits.
Since the Helm chart sets `setVMMaxMapCount: false` for OpenShift compatibility (to avoid privileged init containers), you need to configure this kernel parameter at the node level. The **recommended way** to do it is a Node Tuning Operator. This Operator ships with OpenShift and provides a declarative way to configure kernel parameters.
Create a `Tuned` resource to configure the required kernel parameter:
The `tuned-opensearch.yaml` configuration file

```
apiVersion: tuned.openshift.io/v1  
kind: Tuned  
metadata:  
  name: openshift-opensearch  
  namespace: openshift-cluster-node-tuning-operator  
spec:  
  profile:  
  - data: |  
      [main]  
      summary=Optimize systems running OpenSearch on OpenShift nodes  
      include=openshift-node  
      [sysctl]  
      vm.max_map_count=262144  
    name: openshift-opensearch  
  recommend:  
  - match:  
    - label: tuned.openshift.io/opensearch  
      type: pod  
    priority: 20  
    profile: openshift-opensearch  

```

This YAML should be saved locally and applied to any cluster you intend to deploy Dremio:

```
oc apply -f tuned-opensearch.yaml  

```

## Step 1: Deploy Dremio[​](/deploy-dremio/deploy-on-kubernetes)
To deploy the Dremio cluster in Kubernetes, do the following:
  1. Configure your values to deploy Dremio to Kubernetes in the file `values-overrides.yaml`. For that, go to [Configuring Your Values to Deploy Dremio to Kubernetes](/deploy-dremio/configuring-kubernetes) and get back here to continue with the deployment.
  2. On your terminal, start the deployment by installing Dremio's Helm chart:
     * Standard Kubernetes
     * OpenShift
Run the following command for any Kubernetes environment except for OpenShift:

```
helm install <your-dremio-install-release> oci://quay.io/dremio/dremio-helm \  
--values <your-local-path>/values-overrides.yaml \  
--version <optional-helm-chart-version> \  
--set-file <optional-config-files> \  
--wait  

```

Where:
     * `<your-dremio-install-release>` - The name that identifies your Dremio installation. For example, `dremio-1-0`.
     * `<your-local-path>` - The path to reach your `values-overrides.yaml` configuration file.
     * (Optional) `--version <optional-helm-chart-version>` - The version of Dremio's Helm chart to be used. If not provided, defaults to the latest.
     * (Optional) `--set-file <optional-config-file>` - An optional configuration file for deploying Dremio. For example, an [Identity Provider](/security/authentication/identity-providers) configuration file, which is not defined in the `values-overrides.yaml` and can be provided here through this option.
For OpenShift, the command requires an additional `--values` option with the path to the OpenShift-specific `values-openshift-overrides.yaml` configuration file. This additional option must be placed before the `--values` option with the `values-overrides.yaml` configuration file, resulting in its substitution first.
Run the following command for OpenShift:

```
helm install <your-dremio-install-release> oci://quay.io/dremio/dremio-helm \  
--values <your-local-path1>/values-openshift-overrides.yaml \  
--values <your-local-path2>/values-overrides.yaml \  
--version <optional-helm-chart-version> \  
--set-file <optional-config-files> \  
--wait  

```

Where:
     * `<your-dremio-install-release>` - The name that identifies your Dremio installation. For example, `dremio-1-0`.
     * `<your-local-path1>` - The path to reach your `values-openshift-overrides.yaml` configuration file. Only required for OpenShift.
     * `<your-local-path2>` - The path to reach your `values-overrides.yaml` configuration file.
     * (Optional) `--version <optional-helm-chart-version>` - The version of Dremio's Helm chart to be used. If not provided, defaults to the latest.
     * (Optional) `--set-file <optional-config-file>` - An optional configuration file for deploying Dremio. For example, an [Identity Provider](/security/authentication/identity-providers) configuration file, which is not defined in the `values-overrides.yaml` and can be provided here through this option.
  3. Monitor the deployment using the following commands:
     * Standard Kubernetes
     * OpenShift
Run the following command for any Kubernetes environment except for OpenShift:

```
kubectl get pods  

```

For OpenShift, run the following command:

```
oc get pods  

```

When all of the pods are in the `Ready` state, the deployment is complete.
     * If a pod remains in `Pending` state for more than a few minutes, run the following command to view its status to check for issues, such as insufficient resources for scheduling:

```
kubectl describe pods <pod-name>  

```

     * If the events at the bottom of the output mention insufficient CPU or memory, do one of the following:
       * Adjust the values in the `values-overrides.yaml` configuration file and redeploy.
       * Add more resources to your Kubernetes cluster.
     * If a pod returns a failed state (especially `dremio-master-0`, the most important pod), use the following commands to collect the logs:
       * Standard Kubernetes
       * OpenShift
Run the following command for any Kubernetes environment except for OpenShift:

```
kubectl logs dremio-master-0  

```

For OpenShift, run the following command:

```
oc logs deployment/dremio-master  

```



## Step 2: Connecting to Dremio[​](/deploy-dremio/deploy-on-kubernetes)
Now that you've installed the Helm chart and deployed Dremio on Kubernetes, the next step is connecting to Dremio, where you have the following options:
  * Dremio Console
  * OpenShift Route
  * BI Tools via ODBC/JDBC
  * BI Tools via Apache Arrow Flight


To connect to Dremio via the Dremio console, run the following command to use the `services dremio-client` in Kubernetes to find the host for the Dremio console:

```
$ kubectl get services dremio-client  
NAME            TYPE           CLUSTER-IP      EXTERNAL-IP       PORT(S)                          AGE  
...             ...            ...             ...               ...                              ...  

```

  * If the value in the `TYPE` column of the output is `LoadBalancer`, access the Dremio console through the address in the `EXTERNAL_IP` column and port **9047**.  
For example, in the output below, the value under the `EXTERNAL-IP` column is `8.8.8.8`. Therefore, access the Dremio console through 

```
$ kubectl get services dremio-client  
NAME            TYPE           CLUSTER-IP      EXTERNAL-IP       PORT(S)                          AGE  
dremio-client   LoadBalancer   10.99.227.180   8.8.8.8           31010:32260/TCP,9047:30620/TCP   2d  

```

If you want to change the exposed port on the load balancer, change the value of the setting `coordinator.web.port` in the file `values-overrides.yaml`.
  * If the value in the `TYPE` column of the output is `NodePort`, access the Dremio console through 


To expose Dremio externally using OpenShift Routes, do the following:

```
$ oc expose service dremio-client --port=9047 --name=dremio-ui  
  
$ oc get route dremio-ui -o jsonpath='{.spec.host}'  

```

To connect your BI tools to Dremio via ODBC/JDBC, run the following command to use the `services dremio-client` in Kubernetes to find the host for ODBC/JDBC connections by using the following command:

```
$ kubectl get services dremio-client  
NAME            TYPE           CLUSTER-IP      EXTERNAL-IP       PORT(S)                          AGE  
...             ...            ...             ...               ...                              ...  

```

  * If the value in the `TYPE` column of the output is `LoadBalancer`, access Dremio using ODBC/JDBC through the address in the `EXTERNAL_IP` column and port **31010**.  
For example, in the output below, the value under the `EXTERNAL-IP` column is `8.8.8.8`. Therefore, access Dremio using ODBC/JDBC on port 31010 through 

```
$ kubectl get services dremio-client  
NAME            TYPE           CLUSTER-IP      EXTERNAL-IP       PORT(S)                          AGE  
dremio-client   LoadBalancer   10.99.227.180   8.8.8.8           31010:32260/TCP,9047:30620/TCP   2d  

```

If you want to change the exposed port on the load balancer, change the value of the setting `coordinator.client.port` in the file `values-overrides.yaml`.
  * If the value in the `TYPE` column of the output is `NodePort`, access Dremio using ODBC/JDBC through 


To connect your BI tools to Dremio via Apache Arrow Flight, run the following command to use the `services dremio-client` in Kubernetes to find the host for Apache Arrow Flight connections by using the following command:

```
$ kubectl get services dremio-client  
NAME            TYPE           CLUSTER-IP      EXTERNAL-IP       PORT(S)                          AGE  
...             ...            ...             ...               ...                              ...  

```

  * If the value in the `TYPE` column of the output is `LoadBalancer`, access Dremio using Apache Arrow Flight through the address in the `EXTERNAL_IP` column and port **32010**.  
For example, in the output below, the value under the `EXTERNAL-IP` column is `8.8.8.8`. Therefore, access Dremio using Apache Arrow Flight through 

```
$ kubectl get services dremio-client  
NAME            TYPE           CLUSTER-IP      EXTERNAL-IP       PORT(S)                          AGE  
dremio-client   LoadBalancer   10.99.227.180   8.8.8.8           31010:32260/TCP,9047:30620/TCP   2d  

```

If you want to change the exposed port on the load balancer, change the value of the setting `coordinator.flight.port` in the file `values-overrides.yaml`.
  * If the value in the `TYPE` column of the output is `NodePort`, access Dremio using Apache Arrow Flight through 


Was this page helpful?
[Previous Kubernetes Environments](/deploy-dremio/kubernetes-environments)[Next Configuring Your Values](/deploy-dremio/configuring-kubernetes)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Kubernetes Environments](/deploy-dremio/kubernetes-environments)[Next Configuring Your Values](/deploy-dremio/configuring-kubernetes)
!
