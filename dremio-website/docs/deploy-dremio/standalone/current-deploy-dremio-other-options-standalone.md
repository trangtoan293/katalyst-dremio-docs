---
url: /deploy-dremio/other-options/standalone
title: "Deploying Dremio with Your Infrastructure | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64054.6390885
---

[Skip to main content](/deploy-dremio/other-options/standalone#__docusaurus_skipToContent_fallback)
[![Dremio Documentation Home Page](https://docs.dremio.com/images/Dremio-wordmark-light.svg) **Documentation**](/)
[](/dremio-cloud)
[](/)
[current [26.x]](/deploy-dremio/other-options/standalone)
  * [current [26.x]](/deploy-dremio/other-options/standalone)
  * [25.x](/25.x)


[Start for Free](https://www.dremio.com/get-started/)
Search`⌘``K`
  * [Overview](/)
  * [Get Started with Dremio](/get-started)
  * [What is Dremio?](/what-is-dremio)
  * [Deploy Dremio](/deploy-dremio)
    * [Kubernetes Environments](/deploy-dremio/kubernetes-environments)
    * [Deploy on Kubernetes](/deploy-dremio/deploy-on-kubernetes)
    * [Configuring Your Values](/deploy-dremio/configuring-kubernetes)
    * [Managing Engines](/deploy-dremio/managing-engines-kubernetes)
    * [Other Options](/deploy-dremio/other-options)
      * [Dremio with Hadoop](/deploy-dremio/other-options/yarn-hadoop)
      * [Dremio with Your Infrastructure](/deploy-dremio/other-options/standalone)
        * [Installing and Upgrading](/deploy-dremio/other-options/standalone/install)
        * [Cluster Configuration](/deploy-dremio/other-options/standalone/dremio-config)
        * [System Requirements](/deploy-dremio/other-options/standalone/system-requirements)
      * [AWS Edition (Deprecated)](/deploy-dremio/other-options/aws-edition)
  * [Manage Sources](/data-sources)
  * [Load Data](/load-data)
  * [Build Data Products](/data-products)
  * [Connect Client Applications](/client-applications)
  * [Accelerate Queries](/acceleration)
  * [Security and Compliance](/security)
  * [Administration](/admin)
  * [Developer Guide](/developer)
  * [Reference](/reference)
  * [Help and Support](/help-support)
  * [Release Notes](/release-notes)


  * [Dremio Enterprise Home](/)
  * [Deploy Dremio](/deploy-dremio)
  * [Other Options](/deploy-dremio/other-options)
  * Dremio with Your Infrastructure

Version: current [26.x]
On this page
# Deploying Dremio with Your Infrastructure
This topic describes deployment and configuration of Dremio standalone clusters.
## Development or Test Cluster[​](/deploy-dremio/other-options/standalone#development-or-test-cluster "Direct link to Development or Test Cluster")
Dremio recommends the following configuration for small dev and test clusters:
  * Coordinator node: A single node with the Dremio service configured with the main coordinator role.
  * Executors in one engine scaled according to the workload
  * A single embedded ZooKeeper on the coordinator node.


## Production Cluster[​](/deploy-dremio/other-options/standalone#production-cluster "Direct link to Production Cluster")
Dremio recommends the following for a typical production environment:
  * Two coordinators configured for high availability.
  * Multiple engines tuned to specific workload types such as Reflection refresh, metadata refresh, and low and high cost queries.
  * An external ZooKeep quorum.


Dremio's [Well Architected Framework](/help-support/well-architected-framework) contains many other recommendations and best practices for designing and operating a Dremio environment.
## For More Information[​](/deploy-dremio/other-options/standalone#for-more-information "Direct link to For More Information")
  * [Installing and Upgrading](/deploy-dremio/other-options/standalone/install)
  * [Cluster Configuration](/deploy-dremio/other-options/standalone/dremio-config)
  * [System Requirements](/deploy-dremio/other-options/standalone/system-requirements)


Was this page helpful?
[Previous Dremio with Hadoop](/deploy-dremio/other-options/yarn-hadoop)[Next Installing and Upgrading](/deploy-dremio/other-options/standalone/install)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Dremio with Hadoop](/deploy-dremio/other-options/yarn-hadoop)[Next Installing and Upgrading](/deploy-dremio/other-options/standalone/install)
  * [Development or Test Cluster](/deploy-dremio/other-options/standalone#development-or-test-cluster)
  * [Production Cluster](/deploy-dremio/other-options/standalone#production-cluster)
  * [For More Information](/deploy-dremio/other-options/standalone#for-more-information)


![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdeploy-dremio%2Fother-options%2Fstandalone%2F&_biz_t=1777950374368&_biz_i=Deploying%20Dremio%20with%20Your%20Infrastructure%20%7C%20Dremio%20Documentation&_biz_n=116&rnd=485530&cdn_o=a&_biz_z=1777950374368)
