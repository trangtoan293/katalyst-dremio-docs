---
url: /data-sources/object/hdfs
title: "HDFS | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64047.539869708
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Object Storage](/data-sources/object)
  * HDFS

Version: current [26.x]
On this page
# HDFS
This topic describes HDFS data source considerations and Dremio configuration.
## HBase[​](/data-sources/object/hdfs#hbase "Direct link to HBase")
HBase is an open-source, non-relational database that is built on top of HDFS and enables real-time analysis of data.
Although HBase is no longer officially supported by Dremio as a source connection, you can still add HBase as a Dremio source by using a 
## Files stored in HDFS[​](/data-sources/object/hdfs#files-stored-in-hdfs "Direct link to Files stored in HDFS")
You can query files and folders stored in your HDFS cluster. Dremio supports a number of different file formats. See [Formatting Data to a Table](/developer/data-formats/table) for more information.
## Co-location[​](/data-sources/object/hdfs#co-location "Direct link to Co-location")
Co-locating Dremio nodes with HDFS datanodes can lead to noticeably reduced data transfer times and more performant query execution.
## Parquet File Performance[​](/data-sources/object/hdfs#parquet-file-performance "Direct link to Parquet File Performance")
When HDFS data is stored in the Parquet file format, then optimal performance is achieved by storing one Parquet row group per file, with a file size less than or equal to the HDFS block size. Parquet files that overrun the HDFS block size can negatively impact query times by incurring a considerable amount of filesystem overhead.
Ensure that your Dremio cluster has access to the appropriate ports for each node of your HDFS source. By default, this should be port 8020 for an HDFS NameNode (which should be the one specified when adding the source), and either port 50010 or port 9866 for HDFS DataNodes (dfs.datanode.address, used internally for data transfer).
## HDFS Configuration[​](/data-sources/object/hdfs#hdfs-configuration "Direct link to HDFS Configuration")
This section provides HDFS configuration.
### Impersonation[​](/data-sources/object/hdfs#impersonation "Direct link to Impersonation")
To grant the Dremio service user the privilege to connect from any host and to impersonate a user belonging to any group, modify the **core-site.xml** file with the following values:
User impersonation settings for core-site.xml file

```
<property>  
    <name>hadoop.proxyuser.dremio.hosts</name>  
    <value>*</value>  
</property>  
  
<property>  
    <name>hadoop.proxyuser.dremio.groups</name>  
    <value>*</value>  
</property>  
<property>  
    <name>hadoop.proxyuser.dremio.users</name>  
    <value>*</value>  
</property>  

```

To modify the properties to be more restrictive by passing actual hostnames and group names, modify the **core-site.xml** file with the following values:
More restrictive user impersonation settings for core-site.xml file

```
 <property>  
     <name>hadoop.proxyuser.super.hosts</name>  
     <value>10.222.0.0/16,10.113.221.221</value>  
   </property>  
   <property>  
     <name>hadoop.proxyuser.dremio.users</name>  
     <value>user1,user2</value>  
   </property>  

```

### Impersonation and Privilege Delegation[​](/data-sources/object/hdfs#impersonation-and-privilege-delegation "Direct link to Impersonation and Privilege Delegation")
You can enable user-specific file access permissions by turning on impersonation in HDFS sources (check the 'impersonation' box in the source connection dialog). Users who access data stored on an HDFS source with impersonation enabled will have their access mediated by the HDFS privileges associated with their Dremio login name, rather than the ones associated with the Dremio daemon.
For example, let's say a Dremio user named `bobsmith` has been granted read access to the file `/accounts/CustomerA.txt` under the same username in HDFS. However, the `dremio` system user (the user that the Dremio daemon runs as) does not have read access to this file. Unless impersonation was enabled when this HDFS source was added to Dremio, `bobsmith` will be unable to query the file.
Enabling impersonation also permits a kind of behavior called 'privilege delegation.' Under privilege delegation, HDFS data which is subject to restricted access can be shared with any other Dremio users via the creation of a view in a public (non-Home) space.
### NameNode HA Configuration[​](/data-sources/object/hdfs#namenode-ha-configuration "Direct link to NameNode HA Configuration")
If you have configured a secondary NameNode and a Dremio HA configuration, you must configure Dremio to reconnect with the secondary NameNode in the event the first NameNode goes down.
To configure a secondary NameNode:
  1. Ensure that `fs.defaultFs` parameter and value is specified in the **core-site.xml** file _without_ the port number. (The port is already specified in the URI.)

Specify fs.defaultFs parameter and value

```
<name>fs.defaultFS</name>  
<value>hdfs://xyzcluster</value>  

```

  1. Configure the NameNode HA parameters via one of the following methods:
     * Copy/symlink the Hadoop **core-site.xml** file to the Dremio **conf** folder if you haven't already done so.
     * Add the following parameters and values to the HDFS source in the Dremio UI under Advanced Options.
HDFS source parameters and values

```
dfs.nameservices - (say this value is my cluster)  
dfs.ha.namenodes.mycluster - (say this value is nn1, nn2)  
dfs.namenode.rpc-address.mycluster.nn1  
dfs.namenode.rpc-address.mycluster.nn2  
dfs.client.failover.proxy.provider.mycluster  

```

  2. (Optional) Configure your distributed storage to **hdfs** in the `dremio.conf` file.


For more information on NameNode HA in Cloudera or Hortonworks, see:
## Configuring HDFS as a Source[​](/data-sources/object/hdfs#configuring-hdfs-as-a-source "Direct link to Configuring HDFS as a Source")
The HDFS source is usually configured when you are adding a new source, especially the name and connection parameters. However, additional options can be changed or added by editing an existing source.
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Object Storage** , select **HDFS**.


### General[​](/data-sources/object/hdfs#general "Direct link to General")
  * **Name** -- HDFS Name for the source. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
  * **Connection** -- HDFS connection and impersonation
    * NameNode Host
      * No HA - HDFS NameNode hostname.
      * HA - value for `dfs.nameservices` from `hdfs-site.xml`.
    * NameNode Port -- HDFS NameNode port
    * Enable Impersonation -- When enabled, Dremio executes queries against HDFS on behalf of the user.
      * When **Allow VDS-based Access Delegation** is enabled (default), the owner of the view is used as the impersonated username.
      * When **Allow VDS-based Access Delegation** is disabled (unchecked), the query user is used as the impersonated username.


### Advanced Options[​](/data-sources/object/hdfs#advanced-options "Direct link to Advanced Options")
The advanced options tab has the following values:
  * Enable exports into the source (CTAS and DROP)
  * Root Path -- Root path for the HDFS source
  * Short-Circuit Local Reads -- Implementation of short-circuit local reads on which clients directly open the HDFS block files.
    * HDFS Default
    * Enabled
    * Disabled (Default)
  * Impersonation User Delegate -- Specifies whether an impersonation username is one of the following:
    * As is (Default)
    * Lowercase
    * Uppercase
  * Connection Properties -- A list of additional HDFS connection properties.
  * Cache Options
    * Enable local caching when possible -- Selected by default, along with asynchronous access for cloud caching, local caching can improve query performance. See [Cloud Columnar Cache](/what-is-dremio/architecture#cloud-columnar-cache) for details.
    * Max percent of total available cache space to use when possible. Default: 100


### Reflection Refresh[​](/data-sources/object/hdfs#reflection-refresh "Direct link to Reflection Refresh")
  * Never refresh -- Specifies how often to refresh based on hours, days, weeks, or never.
  * Never expire -- Specifies how often to expire based on hours, days, weeks, or never.


### Metadata[​](/data-sources/object/hdfs#metadata "Direct link to Metadata")
#### Dataset Handling[​](/data-sources/object/hdfs#dataset-handling "Direct link to Dataset Handling")
  * Remove dataset definitions if underlying data is unavailable (Default).  
If this box is _not_ checked and the underlying files under a folder are removed or the folder/source is not accessible, Dremio does not remove the dataset definitions. This option is useful in cases when files are temporarily deleted and put back in place with new sets of files.
  * Automatically format files into tables when users issue queries. If this box is checked and a query runs against the un-promoted table/folder, Dremio automatically promotes using default options. If you have CSV files, especially with non-default options, it might be useful to _not_ check this box.


#### Metadata Refresh[​](/data-sources/object/hdfs#metadata-refresh "Direct link to Metadata Refresh")
  * **Dataset Details** -- The metadata that Dremio needs for query planning such as information needed for fields, types, shards, statistics, and locality.
    * Fetch mode -- Specify either Only Queried Datasets, All Datasets, or As Needed. Default: Only Queried Datasets
      * Only Queried Datasets -- Dremio updates details for previously queried objects in a source.  
This mode increases query performance because less work is needed at query time for these datasets.
      * All Datasets -- Dremio updates details for all datasets in a source. This mode increases query performance because less work is needed at query time.
      * As Needed -- Dremio updates details for a dataset at query time. This mode minimized metadata queries on a source when not used, but might lead to longer planning times.
    * Fetch every -- Specify fetch time based on minutes, hours, days, or weeks. Default: 1 hour
    * Expire after -- Specify expiration time based on minutes, hours, days, or weeks. Default: 3 hours
  * **Authorization** -- When impersonation is enabled, the maximum amount of time that Dremio will cache authorization information.


### Privileges[​](/data-sources/object/hdfs#privileges "Direct link to Privileges")
On the Privileges tab, you can grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges. All privileges are optional.
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Updating an HDFS Source[​](/data-sources/object/hdfs#updating-an-hdfs-source "Direct link to Updating an HDFS Source")
To update an HDFS source:
  1. On the Datasets page, under **Object Storage** in the panel on the left, find the name of the source you want to edit.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see [Configuring HDFS as a Source](/data-sources/object/hdfs#configuring-hdfs-as-a-source).
  4. Click **Save**.


## Deleting an HDFS Source[​](/data-sources/object/hdfs#deleting-an-hdfs-source "Direct link to Deleting an HDFS Source")
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete an HDFS source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Object Storage** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
Was this page helpful?
[Previous Google Cloud Storage (GCS)](/data-sources/object/gcs)[Next NAS](/data-sources/object/nas)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Google Cloud Storage (GCS)](/data-sources/object/gcs)[Next NAS](/data-sources/object/nas)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdata-sources%2Fobject%2Fhdfs%2F&_biz_t=1777950368253&_biz_i=HDFS%20%7C%20Dremio%20Documentation&_biz_n=104&rnd=270023&cdn_o=a&_biz_z=1777950368253)
