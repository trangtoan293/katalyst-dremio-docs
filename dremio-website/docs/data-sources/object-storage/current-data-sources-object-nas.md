---
url: /data-sources/object/nas
title: "NAS | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64047.450558375
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Object Storage](/data-sources/object)
  * NAS

Version: current [26.x]
On this page
# NAS
## Working with files and folders in your NAS[​](/data-sources/object/nas#working-with-files-and-folders-in-your-nas "Direct link to Working with files and folders in your NAS")
If your Dremio cluster is connected to your NAS, you can query folders and files stored in this data source.
All nodes in your Dremio cluster should be able to connect to your NAS.
## Configuring NAS as a Source[​](/data-sources/object/nas#configuring-nas-as-a-source "Direct link to Configuring NAS as a Source")
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Object Storage** , select **NAS**.


### General[​](/data-sources/object/nas#general "Direct link to General")
  * **Name** -- Enter the name to identify the data source in Dremio. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
  * **Mount Path** -- Path on the filesystem to use as the root for the source. Needs to be accessible on all nodes.


### Advanced Options[​](/data-sources/object/nas#advanced-options "Direct link to Advanced Options")
![](https://docs.dremio.com/data-sources/object/nas) !
  * Enable exports into the source (CTAS and DROP).


### Reflection Refresh[​](/data-sources/object/nas#reflection-refresh "Direct link to Reflection Refresh")
![](https://docs.dremio.com/assets/images/hdfs-refresh-policy-9ae71114907887b859a9d01425390739.png) !
  * Never refresh -- Specifies how often to refresh based on hours, days, weeks, or never.
  * Never expire -- Specifies how often to expire based on hours, days, weeks, or never.


### Metadata[​](/data-sources/object/nas#metadata "Direct link to Metadata")
![](https://docs.dremio.com/assets/images/nas-metadataD-404041022ad0b766a1ab8584df7b0668.png) !
#### Dataset Handling[​](/data-sources/object/nas#dataset-handling "Direct link to Dataset Handling")
  * Remove dataset definitions if underlying data is unavailable (Default).  
If this box is _not_ checked and the underlying files under a folder are removed or the folder/source is not accessible, Dremio does not remove the dataset definitions. This option is useful in cases when files are temporarily deleted and put back in place with new sets of files.
  * Automatically format files into tables when users issue queries. If this box is checked and a query runs against the un-promoted table/folder, Dremio automatically promotes using default options. If you have CSV files, especially with non-default options, it might be useful to _not_ check this box.


#### Metadata Refresh[​](/data-sources/object/nas#metadata-refresh "Direct link to Metadata Refresh")
  * **Dataset Details** -- The metadata that Dremio needs for query planning such as information needed for fields, types, shards, statistics, and locality.
    * Fetch mode -- Specify either Only Queried Datasets, All Datasets, or As Needed. Default: Only Queried Datasets
      * Only Queried Datasets -- Dremio updates details for previously queried objects in a source.  
This mode increases query performance because less work is needed at query time for these datasets.
      * All Datasets -- Dremio updates details for all datasets in a source. This mode increases query performance because less work is needed at query time.
      * As Needed -- Dremio updates details for a dataset at query time. This mode minimized metadata queries on a source when not used, but might lead to longer planning times.
    * Fetch every -- Specify fetch time based on minutes, hours, days, or weeks. Default: 1 hour
    * Expire after -- Specify expiration time based on minutes, hours, days, or weeks. Default: 3 hours


### Privileges[​](/data-sources/object/nas#privileges "Direct link to Privileges")
On the Privileges tab, you can grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges. All privileges are optional.
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Updating an NAS Source[​](/data-sources/object/nas#updating-an-nas-source "Direct link to Updating an NAS Source")
To update an NAS source:
  1. On the Datasets page, under **Object Storage** in the panel on the left, find the name of the source you want to edit.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see [Configuring NAS as a Source](/data-sources/object/nas#configuring-nas-as-a-source).
  4. Click **Save**.


## Deleting an NAS Source[​](/data-sources/object/nas#deleting-an-nas-source "Direct link to Deleting an NAS Source")
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete an NAS source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Object Storage** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
Was this page helpful?
[Previous HDFS](/data-sources/object/hdfs)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous HDFS](/data-sources/object/hdfs)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdata-sources%2Fobject%2Fnas%2F&_biz_t=1777950368027&_biz_i=NAS%20%7C%20Dremio%20Documentation&_biz_n=103&rnd=651645&cdn_o=a&_biz_z=1777950368027)
