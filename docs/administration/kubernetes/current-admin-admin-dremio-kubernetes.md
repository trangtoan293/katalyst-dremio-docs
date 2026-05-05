---
url: /admin/admin-dremio-kubernetes
slug: /admin/admin-dremio-kubernetes
title: "Administer Dremio on Kubernetes | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64018.991038916
---

  * [Dremio Enterprise Home](/)
  * [Administration](/admin)
  * Dremio on Kubernetes

Version: current [26.x]
On this page
# Administer Dremio on Kubernetes
This section includes topics about administering Dremio on supported Kubernetes environments, including information about monitoring logs, scaling pods, changing configurations, performing basic administrative tasks such as backing up, restoring, cleaning, and upgrading Dremio.
### Monitoring Logs and Usage[​](/admin/admin-dremio-kubernetes/)
Monitoring the cluster's resource usage (e.g., heap and direct memory, CPU, disk I/O, etc.) is crucial to maintaining long-term stability as the system scales. For this reason, Dremio recommends setting up a monitoring stack, such as Prometheus and Grafana. For a detailed setup tutorial and an overview of which metrics to track, see [Dremio Monitoring in Kubernetes](https://www.dremio.com/wp-content/uploads/2024/01/Dremio-Monitoring-in-Kubernetes.pdf). For more information, see this PDF guide on the Dremio Enterprise (Software) Shared Responsibility Model.
### Managing Workloads[​](/admin/admin-dremio-kubernetes/)
Most workloads can be handled with a Large (8 executors) or X-Large (12 executors) engine, each with 32 CPUs per executor. Larger engine sizes may be required for certain workloads. Over-parallelization of queries can cause performance degradation. Thus, packing workloads of all shapes or sizes onto a few very large engines is ill-advised. Workloads should be divided into high-cost and low-cost queries, and dedicated queues should be configured for tasks such as Reflections, metadata refresh, and table optimization jobs. These can then be divided between right-sized engines. For more information, see [Dremio's Well-Architected Framework](/help-support/well-architected-framework).
### Changing Your Configuration[​](/admin/admin-dremio-kubernetes/)
If you need to update your configuration, you can do so after the installation by editing the configuration files and then upgrading using an upgrade command, for example:

```
helm upgrade <chart release name> oci://quay.io/dremio/dremio-helm -f <your-local-path>/values-overrides.yaml --version <helm-chart-version>  

```

The upgrade process pushes your changes to all pods in your Kubernetes cluster and restarts the pods.
For example, to permanently change the resources of your coordinator pod:
  1. Edit the `values-overrides.yaml` file and change the resources specified for the coordinator. In this example, `memory` is `32Gi `and `cpu` is `8`.

```
coordinator:  
    resources:  
      limits:  
        memory: 32Gi  
      requests:  
        cpu: 8  
        memory: 32Gi  

```

  2. Run the upgrade command. Replacing the template values:

```
helm upgrade <chart release name> oci://quay.io/dremio/dremio-helm -f <your-local-path>/values-overrides.yaml --version <helm-chart-version>  

```

If the command takes longer than a few minutes to finish, check the status of the pods with the `kubectl get pods` command. If the pods are pending scheduling due to limited memory or CPU, adjust the values you specified for the properties in the `values-overrides.yaml` file or add more resources to your Kubernetes cluster.


### Using Support Keys[​](/admin/admin-dremio-kubernetes/)
Use [support keys](/help-support/support-settings/) only when instructed by Dremio Support. If misused, they can alter the application's behavior and lead to unexpected failures.
### Using the Dremio Admin CLI on Kubernetes[​](/admin/admin-dremio-kubernetes/)
The [Dremio Admin CLI](/reference/admin-cli) is the mechanism to back up, restore, add internal users, etc. For more information on the various commands the see CLI reference previously linked. In order to run the CLI commands you need to access either the `dremio-master-0` or `dremio-admin` pod. This requires the use of the `kubectl` command line tool and access to the Kubernetes cluster and namespace where Dremio is deployed.
The term `master` is a legacy label used in this command. We now refer to this as the main coordinator pod.
Some CLI commands like [Back Up Dremio](/reference/admin-cli/backup) require Dremio to be **online**. This means Dremio must be deployed normally per [Deploying Dremio to Kubernetes](/deploy-dremio/deploy-on-kubernetes). When inspecting Dremio's pods, `dremio-master-0` must be present and `RUNNING` to be considered **online**.
Some CLI commands like Clean require Dremio to be **offline**. To use them, Dremio must be deployed and running in admin mode. If not, you must redeploy Dremio in admin mode. The requirements section for each command will note whether Dremio should be online or offline. If it is not mentioned, then the command will work in either case.
To redeploy Dremio in admin mode, you must run a `helm upgrade` command where the `DremioAdmin` flag is set to `true`. Here is a templated example command:

```
helm upgrade <chart-release-name> oci://quay.io/dremio/dremio-helm -f <your-local-path>/values-overrides.yaml --version <helm-chart-version> --set DremioAdmin=true  

```

This command will cause the shutdown of the Coordinators and Executors. In their place will start the `dremio-admin` pod. Crucially, this pod will mount the `dremio-master-0` volume allowing for operations on the constituent KV store.
To get command line access to the `dremio-master-0`, `dremio-admin`, or any pod for that matter, you would use the `kubectl exec` command. Here is an example using the `-it` option for interactive, and the `-- bash` option to enter a bash session:

```
kubectl exec -it <pod-name> -- bash  

```

Once you've entered the pod, you can run typical shell commands to explore the file system and execute commands. For more information, see `dremio-admin` utility is within the `/opt/dremio/bin` directory of both the main and admin pods and can be used to execute the various [Dremio Admin CLI](/reference/admin-cli) commands.
To exit Dremio admin mode and restart the normal service, you must redeploy Dremio again using the command above and setting only `DremioAdmin=false`.
Was this page helpful?
[Previous Administration](/admin)[Next Upgrade Dremio](/admin/admin-dremio-kubernetes/upgrade)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Administration](/admin)[Next Upgrade Dremio](/admin/admin-dremio-kubernetes/upgrade)
!
