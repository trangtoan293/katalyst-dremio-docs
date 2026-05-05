---
url: /help-support/knowledge-base/k8s-trouble
title: "Kubernetes Troubleshooting | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64223.91983925
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Knowledge Base](/help-support/knowledge-base)
  * Kubernetes Troubleshooting

Version: current [26.x]
On this page
# Kubernetes Troubleshooting
This topic discusses Kubernetes troubleshooting scenarios as they pertain to Azure AKS and Amazon EKS environments.
## Why are my edits to files in the **config** directory not being applied?[​](/help-support/knowledge-base/k8s-trouble/#why-are-my-edits-to-files-in-the-config-directory-not-being-applied "Direct link to why-are-my-edits-to-files-in-the-config-directory-not-being-applied")
**Problem**  
I'm making changes to the configuration files in the **config** directory, but the changes are not showing up on the pods.
**Explanation**  
The **config** directory cannot have any binary files.
In the process of deployment, the contents of the **config** directory are copied to all the pods at the **/opt/dremio/conf** location, and then the configmap is created and made available on the pod.
If binary files exist in the **config** directory, then the creation of the configmap fails.
**Solution**  
Ensure that there are no binary files in the **config** directory and re-deploy.
## Why are my pods still not being provisioned for lack of CPU/memory?[​](/help-support/knowledge-base/k8s-trouble/#why-are-my-pods-still-not-being-provisioned-for-lack-of-cpumemory "Direct link to Why are my pods still not being provisioned for lack of CPU/memory?")
**Problem**  
I asked for 5 executors and have 5 nodes in my Kubernetes cluster that should be able to satisfy the CPU/memory requirements, but I'm still running into lack of CPU/Memory issues.
**Explanation**  
Along with the executor pods, the deployment also creates the following pods which need to be accounted for when calculating CPU/memory requirements for the Dremio cluster.
  * Dremio main coordinator pod (requires an allocated node)
  * Zookeeper pods (requires a small amount of resources)


The number of allocated nodes in the cluster must be equivalent to the number of Dremio executors plus one (1) for the Dremio main coordinator.
**Solution**  
Allocate an additional node (1 node) in the cluster for the Dremio main coordinator pod.
## Why is data from an old deployment still around?[​](/help-support/knowledge-base/k8s-trouble/#why-is-data-from-an-old-deployment-still-around "Direct link to Why is data from an old deployment still around?")
**Problem**  
I deleted my Dremio deployment (`helm delete <helm-release>`), but when I install a new release, data from the old deployment is still around.
**Explanation**  
The helm chart uses scalesets for Dremio pods. In Kubernetes, any associated persistent volume with a pod in a scaleset is not deleted when you delete the scaleset.
**Solution**  
To completely delete the data, you need to delete the persistent volumes. For example:
Delete persistent volumes

```
kubectl get pvc  
kubectl delete pvc dremio-master-volume-dremio-master-0  

```

Was this page helpful?
[Previous Implementing Garbage-First (G1) Garbage Collection](/help-support/knowledge-base/g1-garbage-collection)[Next Kerberos Setup and Troubleshooting](/help-support/knowledge-base/kerberos-trouble)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Implementing Garbage-First (G1) Garbage Collection](/help-support/knowledge-base/g1-garbage-collection)[Next Kerberos Setup and Troubleshooting](/help-support/knowledge-base/kerberos-trouble)
