---
url: /deploy-dremio/other-options/standalone/install
slug: /deploy-dremio/other-options/standalone/install
title: "Installing and Upgrading | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64215.630357875
---

  * [Dremio Enterprise Home](/)
  * [Deploy Dremio](/deploy-dremio)
  * [Other Options](/deploy-dremio/other-options)
  * Dremio with Your Infrastructure
  * Installing and Upgrading

Version: current [26.x]
On this page
# Installing and Upgrading
Installation and upgrading instructions are specific to either RPM or Tarball packages:
  * Installing and Upgrading via RPM
  * Installing and Upgrading via Tarball


## Upgrade Notes: 25.0.0​
As of Dremio 25.0.0, the Hive 3 plugin serves both Hive 2 and Hive 3 data sources. For this reason, if you have a Hive 2 data source, you must follow the instructions in this section when upgrading to Dremio 25.0.0. We recommend that you invest extra time to test Hive 2 use cases in a test environment before deploying to production.
### Before Upgrading to 25.0.0​
Back up the `<dremio-root>/plugins/connectors/hive2.d/` (Dremio Community/OSS) or `<dremio-root>/plugins/connectors/hive2-ee.d/` (Dremio Enterprise) directory of hive2-ee.d directory.
### After Upgrading to 25.0.0​
Migrate the contents of those directories by following these steps on every node of your Dremio cluster:
  1. Create the following directory:  
`<dremio-root>/plugins/connectors/<hive-plugin-id>.d/`  
where:
     * `<dremio-root>` is the root directory of the Dremio instance.
     * `<hive-plugin-id>` is either of these values:
       * If you are using Dremio Community/OSS: `hive3`
       * If you are using Dremio Enterprise: `hive3-ee`
  2. Move these items from the `<dremio-root>/plugins/connectors/hive2.d/` (Dremio Community/OSS) or `<dremio-root>/plugins/connectors/hive2-ee.d/` (Dremio Enterprise) directory into the new directory:
     * Each JAR file
     * Each resource directory
We recommend thoroughly reviewing any configuration files in the `hive2.d` or `hive2-ee.d` directory, such as `hive-site.xml`, to confirm whether the Hive 2 configuration files are usable in Hive 3. If you have both Hive 2 and Hive 3 data sources, you might have configuration files in the existing `hive2.d`/`hive2-ee.d` and `hive3`/`hive3-ee` directories. In this case, you must merge the content into a single configuration file in a single `hive3`/`hive3-ee` directory.
  3. Ensure the new directory and its contents are readable by the Dremio process user.


Was this page helpful?
Previous Dremio with Your InfrastructureNext RPM
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
Previous Dremio with Your InfrastructureNext RPM
