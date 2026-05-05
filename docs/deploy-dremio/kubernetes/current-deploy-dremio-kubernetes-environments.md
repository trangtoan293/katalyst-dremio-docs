---
url: /deploy-dremio/kubernetes-environments
title: "Kubernetes Environments for Dremio | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64052.648588875
---

  * [Dremio Enterprise Home](/)
  * [Deploy Dremio](/deploy-dremio)
  * Kubernetes Environments

Version: current [26.x]
On this page
# Kubernetes Environments for Dremio
Dremio is designed to run Kubernetes environments, providing enterprise-grade data lakehouse capabilities. To successfully [deploy Dremio on Kubernetes](/deploy-dremio/deploy-on-kubernetes), you need a compatible hosted Kubernetes environment.
Dremio is tested and supported on the following Kubernetes environments:
  * Elastic Kubernetes Service (EKS)
  * Azure Kubernetes Service (AKS)
  * Google Kubernetes Engine (GKE)
  * Red Hat OpenShift


The sections on this page detail recommendations for AWS and Azure. Please use the information provided as a guide for your vendors' equivalent options.
If you're using a containerization platform built on Kubernetes that isn't listed here, please contact your provider and Dremio Account team to discuss compatibility and support options.
## Requirements[​](/deploy-dremio/kubernetes-environments#requirements "Direct link to Requirements")
### Versions[​](/deploy-dremio/kubernetes-environments#versions "Direct link to Versions")
Dremio requires regular updates to your Kubernetes version. You must be on an officially supported version, and preferably not one on extended support. See the following examples for AWS 
### Node Sizes[​](/deploy-dremio/kubernetes-environments#node-sizes "Direct link to Node Sizes")
See this table for resource request recommendations of the variours parts of the deployment, [Recommended Resources Configuration](/deploy-dremio/configuring-kubernetes#recommended-resources-configuration).
For a list of all Dremio engine sizes see, [Adding an Engine](/deploy-dremio/managing-engines-kubernetes#adding-an-engine). Engines will make up the lions share of any Dremio deployment.
The following sections suggest AWS and Azure machines that could be used to meet our production sizing. Dremio recommends having separate node groups for the different components of our services to allow each node group to autoscale independently.
#### Coordinators[​](/deploy-dremio/kubernetes-environments#coordinators "Direct link to Coordinators")
For [coordinators](/what-is-dremio/architecture#main-coordinator), Dremio recommends 32 CPUs and 64 GB of memory. Hence, a `c6i.8xlarge` or `Standard_F32s` is a good option. In the Helm charts, this would result in 30 CPUs and 60 GB of memory allocated to the Dremio pod. The high CPU count is important for high-throughput workloads.
The smallest supported production size is 8 CPUs and 16GB of Memory. Hence, a `c8i.2xlarge` or `Standard_F8s` is a viable option. In the Helm charts, this would result in 6 CPUs and 12 GB of memory allocated to the Dremio pod. Not all production workloads are created equal, and this configuration may not be suitable for yours. Please follow the guidance of the Dremio Support team.
#### Executors[​](/deploy-dremio/kubernetes-environments#executors "Direct link to Executors")
For [executors](/what-is-dremio/architecture#engines), Dremio recommends either:
  * 16 CPUs and 128 GB of memory, hence, a `r8gd.4xlarge` or `Standard_E16ds_v5` is a good option. In the Helm charts, this results in 14 CPUs and 120 GB of memory allocated to the Dremio pod. This is the standard configuration.
  * 32 CPUs and 128 GB of memory, hence, a `m8gd.8xlarge` or `Standard_E32ds_v5` is a good option. In the Helm charts, this results in 30 CPUs and 120 GB of memory allocated to the Dremio pod. This configuration is geared for high-throughput workloads.


The smallest supported production size must have 64 GB of memory. Hence, a `r5.2xlarge` or `Standard_E8s` is a viable option. In the Helm charts, this would result in 6 CPUs and 56 GB of memory allocated to the Dremio pod. Not all production workloads are created equal, and this configuration may not be suitable for yours. Please follow the guidance of the Dremio Support team.
####  [Open Catalog](/what-is-dremio/architecture#open-catalog) and [Semantic Search](/what-is-dremio/architecture#ai-enabled-semantic-search)[​](/deploy-dremio/kubernetes-environments#open-catalog-and-semantic-search "Direct link to open-catalog-and-semantic-search")
Catalog is made up of 4 key components: Catalog Service, Catalog Server, Catalog External, and MongoDB. Search has one key component, OpenSearch.
Each of these components needs between 2-4 CPUs and 4-16 GB of memory; hence, a `m5d.2xlarge` or `Standard_D8_v5` is a good option and could be used to host multiple containers that are part of these services.
#### ZooKeeper, NATS, Operators, and Open Telemetry[​](/deploy-dremio/kubernetes-environments#zookeeper-nats-operators-and-open-telemetry "Direct link to ZooKeeper, NATS, Operators, and Open Telemetry")
Each of these need between 0.5-1 CPUs and 0.5-1 GB, `m5d.large`, `t2.medium`, `Standard_D2_v5` or `Standard_A2_v2` are good options and could be used to host multiple containers that are part of these services.
#### Disk Storage Class[​](/deploy-dremio/kubernetes-environments#disk-storage-class "Direct link to Disk Storage Class")
Dremio recommends:
  * For AWS, GP3 or IO2 as the storage type for all nodes.
  * For Azure managed-premium as the storage type for all nodes.


Additionally, for [executors](/what-is-dremio/architecture#engines), you can further use local NVMe SSD storage for C3 and spill on executors. For more information on storage classes, see the following resources 
Storage size requirements are:
  * Coordinator volume #1: 128-512 GB (key-value store).
  * Coordinator volume #2: 16 GB (logs).
  * Executor volume #1: 128-512 GB (spilling).
  * Executor volume #2: 128-512 GB (C3).
  * Executor volume #3: 16 GB (logs).
  * MongoDB volume: 128-512 GB.
  * OpenSearch volume: 128 GB.
  * Zookeeper volume: 16 GB.


### EKS Add-Ons[​](/deploy-dremio/kubernetes-environments#eks-add-ons "Direct link to EKS Add-Ons")
The following add-ons are required for EKS clusters:
  * Amazon EBS CSI Driver
  * EKS Pod Identity Agent


Was this page helpful?
[Previous Deploy Dremio](/deploy-dremio)[Next Deploy on Kubernetes](/deploy-dremio/deploy-on-kubernetes)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Deploy Dremio](/deploy-dremio)[Next Deploy on Kubernetes](/deploy-dremio/deploy-on-kubernetes)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdeploy-dremio%2Fkubernetes-environments%2F&_biz_t=1777950373068&_biz_i=Kubernetes%20Environments%20for%20Dremio%20%7C%20Dremio%20Documentation&_biz_n=110&rnd=2322&cdn_o=a&_biz_z=1777950373068)
