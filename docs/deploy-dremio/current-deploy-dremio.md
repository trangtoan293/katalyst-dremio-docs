---
url: /deploy-dremio
slug: /deploy-dremio
title: "Deploy Dremio | Dremio Enterprise Documentation"
depth: 1
crawled_at: 64000.137173125
---

  * [Dremio Enterprise Home](/)
  * Deploy Dremio

Version: current [26.x]
On this page
# Deploy Dremio
This topic describes the deployment models. Dremio is a distributed system that can be deployed in a public cloud or on-premises. A Dremio cluster can be co-located with one of the data sources (Hadoop or NoSQL database) or deployed separately.
## Deploy on Kubernetes​
Kubernetes is the recommended deployment option for Dremio. For more information, see the following topics in this section:
  * [Kubernetes Environments](/deploy-dremio/kubernetes-environments) – Learn about the Kubernetes environments used to deploy Dremio.
  * [Deploying on Kubernetes](/deploy-dremio/deploy-on-kubernetes) – Deploy Dremio on your Kubernetes environment.
  * [Configuring Your Values](/deploy-dremio/configuring-kubernetes) – Understand the configuration of your deployments in more detail.
  * [Managing Engines](/deploy-dremio/managing-engines-kubernetes) – Manage Dremio engines to optimize query execution.


## Other Deployment Options​
Besides Kubernetes, Dremio provides other options for deployment described in this section.
### Shared Multi-Tenant Environment​
If you plan on using a shared multi-tenant environment, Dremio provides a model that uses YARN for deployment:
  * [**Hadoop using YARN**](/deploy-dremio/other-options/yarn-hadoop) - Dremio on Hadoop in YARN deployment. Dremio integrates with YARN ResourceManager to secure compute resources in a shared multi-tenant environment.


Co-locating Dremio with Hadoop/NoSQL: When Dremio is co-located with a Hadoop cluster (such as HDFS) or distributed NoSQL database (such as Elasticsearch or MongoDB), it is important to utilize containers (cgroups, Docker, and YARN containers) to ensure adequate resources for each process.
Dremio features a high-performance asynchronous engine that minimizes the number of threads and context switches under heavy load. So, unless containers are utilized, the operating system may over-allocate resources to other thread-hungry processes on the nodes.
### Standalone Cluster​
If you plan on creating a standalone cluster, Dremio provides the flexibility to deploy Dremio as a standalone on-premise cluster:
  * **Standalone Cluster** - Dremio on a standalone on-premise cluster. In this scenario, a Hadoop cluster is not available and the data is not in a single distributed NoSQL database.


Was this page helpful?
[Previous Architecture](/what-is-dremio/architecture)[Next Kubernetes Environments](/deploy-dremio/kubernetes-environments)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Architecture](/what-is-dremio/architecture)[Next Kubernetes Environments](/deploy-dremio/kubernetes-environments)
!!
