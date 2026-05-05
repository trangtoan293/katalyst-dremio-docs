---
url: /deploy-dremio/other-options/standalone/dremio-config
title: "Cluster Configuration | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64209.106618583
---

  * [Dremio Enterprise Home](/)
  * [Deploy Dremio](/deploy-dremio)
  * [Other Options](/deploy-dremio/other-options)
  * [Dremio with Your Infrastructure](/deploy-dremio/other-options/standalone)
  * Cluster Configuration

Version: current [26.x]
On this page
# Cluster Configuration
Dremio has two main sets of configurations that control its behavior and settings:
  1. [Dremio Services](/deploy-dremio/other-options/standalone/dremio-config) configs: Dremio cluster settings, core system configurations, and node roles are defined in `dremio.conf`.
  2. [Environment](/deploy-dremio/other-options/standalone/dremio-config/dremio-env) properties: Dremio environment settings dealing mainly with Java options, logging, and system performance and memory tuning are created in `dremio-env`.


These two sets of configurations allow administrators to fine-tune Dremio for different deployment scenarios, whether for a standalone setup or a distributed cluster.
## Starting Dremio[​](/deploy-dremio/other-options/standalone/dremio-config#starting-dremio "Direct link to Starting Dremio")
To start Dremio on each node in your cluster depending on your installation (RPM vs Tarball). This assumes Dremio is configured as a service.
Tarball: `$ sudo <DREMIO-HOME>/bin/dremio start`
RPM: `$ sudo service dremio start`
**Completing Setup**
Open a browser and navigate to `http://`COORDINATOR_NODE`:9047`.
  1. Create your first Admin user (the Dremio UI walks you through this process).
  2. Click the **Admin** button (at the top-right of the page) to confirm that each of the Dremio nodes that you set up during the install are functioning properly.


Each node's hostname or IP address should be listed, along with a green status light.
Was this page helpful?
[Previous Tarball](/deploy-dremio/other-options/standalone/install/standalone-tarball)[Next Services](/deploy-dremio/other-options/standalone/dremio-config)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Tarball](/deploy-dremio/other-options/standalone/install/standalone-tarball)[Next Services](/deploy-dremio/other-options/standalone/dremio-config)
