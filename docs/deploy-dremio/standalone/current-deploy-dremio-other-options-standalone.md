---
url: /deploy-dremio/other-options/standalone
slug: /deploy-dremio/other-options/standalone
title: "Deploying Dremio with Your Infrastructure | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64054.6390885
---

Skip to main content
[![Dremio Documentation Home Page](https://docs.dremio.com/images/Dremio-wordmark-light.svg) **Documentation**](/)


[current [26.x]](/deploy-dremio/other-options/standalone)
  * [current [26.x]](/deploy-dremio/other-options/standalone)
  * 25.x


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
      * Dremio with Your Infrastructure
        * Installing and Upgrading
        * Cluster Configuration
        * System Requirements
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
## Development or Test Cluster​
Dremio recommends the following configuration for small dev and test clusters:
  * Coordinator node: A single node with the Dremio service configured with the main coordinator role.
  * Executors in one engine scaled according to the workload
  * A single embedded ZooKeeper on the coordinator node.


## Production Cluster​
Dremio recommends the following for a typical production environment:
  * Two coordinators configured for high availability.
  * Multiple engines tuned to specific workload types such as Reflection refresh, metadata refresh, and low and high cost queries.
  * An external ZooKeep quorum.


Dremio's [Well Architected Framework](/help-support/well-architected-framework) contains many other recommendations and best practices for designing and operating a Dremio environment.
## For More Information​
  * Installing and Upgrading
  * Cluster Configuration
  * System Requirements


Was this page helpful?
[Previous Dremio with Hadoop](/deploy-dremio/other-options/yarn-hadoop)Next Installing and Upgrading
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Dremio with Hadoop](/deploy-dremio/other-options/yarn-hadoop)Next Installing and Upgrading
  * Development or Test Cluster
  * Production Cluster
  * For More Information


!
