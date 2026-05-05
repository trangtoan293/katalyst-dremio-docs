---
url: /help-support/advanced-topics/custom-arp
title: "Upgrading with Custom Sources | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64222.427688166
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Advanced Topics](/help-support/advanced-topics)
  * Upgrading with Custom Sources

Version: current [26.x]
On this page
# Upgrading with Custom Sources
Upgrading Dremio to enable new features may have unexpected behaviors upon your instance for users operating with their own custom Advanced Relational Pushdown (ARP) source, or written source, such as Netezza. If your environment utilizes external query (which is only supported via ARP sources), then you will need to complete the following steps to safely enable functionality in newer versions of Dremio for your environment:
  1. Download the desired version of Dremio.
  2. Back up your custom source.
  3. Update the custom source to build using the new Dremio version.
  4. Perform the activities associated with upgrading Dremio, but stop before actually upgrading the application.
  5. Copy the rebuilt custom source `JAR` files.
  6. Run the Dremio upgrade.


### Step 1: Download the desired version of Dremio[​](/help-support/advanced-topics/custom-arp/#step-1-download-the-desired-version-of-dremio "Direct link to Step 1: Download the desired version of Dremio")
Obtain a copy of the desired version of Dremio for upgrade purposes. The file type will vary based on your current environmental needs. Once you've downloaded the version you wish to upgrade to, continue to the next step.
**Do not execute the new Dremio installer before completing this outlined process.**
### Step 2: Back up your custom source[​](/help-support/advanced-topics/custom-arp/#step-2-back-up-your-custom-source "Direct link to Step 2: Back up your custom source")
As part of the upgrade process, we highly recommend that you back up your custom source to preserve the current state of your data. Upgrading Dremio may have an unexpected impact on the accessibility or structure of your source, so we always recommend backing up your sources.
This may be done either by copying and pasting the entire source to another location on your host computer, or by creating a branch with a version control tool.
A common practice is to also back up your instance of Dremio prior to an upgrade with features that hold an application-wide impact. For information on how to back up Dremio, review [the Backup Dremio help topic](/reference/admin-cli/backup).
### Step 3: Update the custom source to build using the new Dremio version[​](/help-support/advanced-topics/custom-arp/#step-3-update-the-custom-source-to-build-using-the-new-dremio-version "Direct link to Step 3: Update the custom source to build using the new Dremio version")
Due to the nature of custom-written sources, you must update the `pom.xml` file from your Maven repository to reference the new Dremio version used post-upgrade. This file is typically found in the dremio-sqllite-connector folder, but may vary based on the structure of your repository.
On line 29, update the value found between the `<version.dremio>` tags to reflect the downloaded version of Dremio you will be upgrading to. This should look similar to the following example:

```
  <properties>  
    <version.dremio>16.0.0-202105120132280783-b6a3f06a</version.dremio>  
  </properties>  

```

Then you must update the value on line 36 with the same value as on line 29. The existing value may appear as follows:

```
<version>${version.dremio}</version>  

```

Once completed, you may begin the process of upgrading your instance of Dremio.
### Step 4: Perform the activities associated with upgrading Dremio[​](/help-support/advanced-topics/custom-arp/#step-4-perform-the-activities-associated-with-upgrading-dremio "Direct link to Step 4: Perform the activities associated with upgrading Dremio")
Before initiating the upgrade process for Dremio, you'll need to complete a series of activities in preparation to the upgrade. Follow the steps documented on these pages, but **stop before the command to begin the upgrade.**
The steps to upgrade ultimately depend on the method by which you've previously installed Dremio: [RPM](/deploy-dremio/other-options/standalone/install/standalone-rpm) or [tarball](/deploy-dremio/other-options/standalone/install/standalone-tarball).
Again, stop prior to initiating the actual Dremio upgrade as you must complete one more activity for your source.
### Step 5: Copy the rebuilt custom source `JAR` files[​](/help-support/advanced-topics/custom-arp/#step-5-copy-the-rebuilt-custom-source-jar-files "Direct link to step-5-copy-the-rebuilt-custom-source-jar-files")
Compile any custom source connector files created as part of the ARP-based plugin. This includes the storage pluigin configuration and the plugin ARP (YAML) file.
Follow the same process you completed for backing up the custom source, only now with your connector files. These are typically `.jar` files and are located in the `/dremio/jars` folder in Dremio.
### Step 6: Run the Dremio upgrade[​](/help-support/advanced-topics/custom-arp/#step-6-run-the-dremio-upgrade "Direct link to Step 6: Run the Dremio upgrade")
Now you are ready to upgrade Dremio and enable new Dremio functionality. Depending on your environment, use one of the following methods to initiate the upgrade:
  * [Tarball](/deploy-dremio/other-options/standalone/install/standalone-tarball)
  * [RPM](/deploy-dremio/other-options/standalone/install/standalone-rpm)


Was this page helpful?
[Previous Start, Stop, and Status](/help-support/advanced-topics/start-stop)[Next Knowledge Base](/help-support/knowledge-base)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Start, Stop, and Status](/help-support/advanced-topics/start-stop)[Next Knowledge Base](/help-support/knowledge-base)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fhelp-support%2Fadvanced-topics%2Fcustom-arp%2F&_biz_t=1777950541399&_biz_i=Upgrading%20with%20Custom%20Sources%20%7C%20Dremio%20Documentation&_biz_n=423&rnd=171827&cdn_o=a&_biz_z=1777950541399)
