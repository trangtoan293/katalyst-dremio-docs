---
url: /data-sources/lakehouse-catalogs/hive
title: "Hive | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64047.115748125
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Lakehouse Catalogs](/data-sources/lakehouse-catalogs)
  * Hive

Version: current [26.x]
On this page
# Hive
This topic describes Hive data source considerations and Dremio configuration.
## Dremio and Hive[​](/data-sources/lakehouse-catalogs/hive#dremio-and-hive "Direct link to Dremio and Hive")
Dremio supports the following:
  * Hive 2.1
  * Hive 3.x


⚠️Deprecation
Hive 2 is deprecated with Dremio Enterprise 26.0 and later. Support for Hive 2 will be removed in the next major release of Dremio Enterprise.
### Data Sources[​](/data-sources/lakehouse-catalogs/hive#data-sources "Direct link to Data Sources")
The following data sources are supported:
  * HDFS
  * Azure Storage
  * S3 - See [S3 on Amazon EMR Configuration](/help-support/advanced-topics/hive-s3) for more information about S3-backed Hive tables on Amazon EMR.
  * Hive external tables backed by HBase storage handler


### Formats[​](/data-sources/lakehouse-catalogs/hive#formats "Direct link to Formats")
The following formats are supported:
  * Apache Avro
  * Apache Iceberg
  * Apache Parquet
  * Delta Lake
  * ORC
  * RCFile
  * SequenceFile
  * Text, including CSV (Comma-separated values)


In addition, the following interfaces and reading file formats are supported:
  * Hive table access using Hive's out-of-the-box SerDes interface, as well as custom SerDes or InputFormat/OutputFormat.
  * Hive-supported reading file format using Hive's own readers -- even if Dremio does not support them natively.
Dremio does _**not**_ support Hive views. However, you can create and query [views](/what-is-dremio/key-concepts#tables-and-views) instead.


## Hive Configuration[​](/data-sources/lakehouse-catalogs/hive#hive-configuration "Direct link to Hive Configuration")
This section provides information about Hive configuration.
### Adding additional elements to Hive plugin classpaths[​](/data-sources/lakehouse-catalogs/hive#adding-additional-elements-to-hive-plugin-classpaths "Direct link to Adding additional elements to Hive plugin classpaths")
Hive plugins can be extended to use additional resource files and classes. The plugins can be added as either directories or JAR files. Note that any resources that are part of the server's classpath are not exposed to the Hive plugin.
To add additional classpath elements, follow these steps on every node of your Dremio cluster:
  1. Create the following directory:  
`<dremio-root>/plugins/connectors/<hive-plugin-id>.d/`  
where:
     * `<dremio-root>` is the root directory of the Dremio instance.
     * `<hive-plugin-id>` is either of these values:
       * If you are using Dremio Community/OSS and either Hive 2 or Hive 3: `hive3`
       * If you are using Dremio Enterprise and either Hive 2 or Hive 3: `hive3-ee`
  2. Either place each JAR file in the new directory or add a symlink to each JAR file from the new directory.
  3. Either place a copy of each resource directory in the new directory or add a symlink to each resource directory from the new directory.
  4. Ensure the directory and its contents are readable by the Dremio process user.


### Configuration Files[​](/data-sources/lakehouse-catalogs/hive#configuration-files "Direct link to Configuration Files")
Hive plugins do not use elements present in the main Dremio server classpath. This includes any Hadoop/Hive configuration files such as core-site.xml and hive-site.xml that the user may have added themselves.
You can add these files to the Hive plugin classpath by following the instructions above.
For example you can create conf files here: `<dremio-root>/plugins/connectors/**hive3-ee.d**/conf` for the Hive 3 plugin in Enterprise mode.
An easy way to use the same configuration as Dremio is to use a symlink. From `<dremio-root>`:
Use symlink

```
ln -s conf plugins/connectors/hive3-ee.d/conf  

```

### Impersonation[​](/data-sources/lakehouse-catalogs/hive#impersonation "Direct link to Impersonation")
If you are using Ranger-based authorization for your Hive source, refer to [Disabling Impersonation for Ranger-Based Authorization](/data-sources/lakehouse-catalogs/hive#disabling-impersonation-for-ranger-based-authorization).
To grant the Dremio service user the privilege to connect from any host and to impersonate a user belonging to any group, modify the **core-site.xml** file with the following values:
Grant user impersonation privileges

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
Grant more restrictive user impersonation privileges

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

#### Disabling Impersonation for Ranger-Based Authorization[​](/data-sources/lakehouse-catalogs/hive#disabling-impersonation-for-ranger-based-authorization "Direct link to Disabling Impersonation for Ranger-Based Authorization")
If you are using Ranger-based authorization, we recommend that you disable impersonation for your Hive source:
  1. In the Dremio console, open the **Source Settings** for the Hive source and click **Advanced Options**.
  2. Under **Connection Properties** , add the property `hive.server2.enable.doAs` in the **Name** field and add the setting `false` in the **Value** field.
  3. Click **Save**.


### Table Statistics[​](/data-sources/lakehouse-catalogs/hive#table-statistics "Direct link to Table Statistics")
By default, Dremio utilizes its own estimates for Hive table statistics when planning queries.
However, if you want to use Hive's own statistics, do the following:
  1. Set the `store.hive.use_stats_in_metastore` parameter to true.  
Example: `true`: `store.hive.use_stats_in_metastore`
  2. Run the `ANALYZE TABLE COMPUTE STATISTICS` command for relevant Hive tables in Hive. This step is required so that all of the tables (that Dremio interacts with), have up-to-date statistics.

ANALYZE TABLE COMPUTE STATISTICS command

```
ANALYZE TABLE <Table1> [PARTITION(col1,...)] COMPUTE STATISTICS;  

```

### Hive Metastores[​](/data-sources/lakehouse-catalogs/hive#hive-metastores "Direct link to Hive Metastores")
If you are using a Hive source and an HA metastore (multiple Hive metastores), then you need to specify the following `hive.metastore.uris` parameter and value in the **hive-site.xml** file.
Specify hive.metastore.uris

```
<name>hive.metastore.uris</name>  
<value>thrift://metastore1:9083,thrift://metastore2:9083</value>  

```

## Configuring Hive as a Source[​](/data-sources/lakehouse-catalogs/hive#configuring-hive-as-a-source "Direct link to Configuring Hive as a Source")
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Metastores** , select **Hive 2.x** or **Hive 3.x**.


### General Options[​](/data-sources/lakehouse-catalogs/hive#general-options "Direct link to General Options")
  * **Name** -- Hive source name. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
  * **Connection** -- Hive connection and security
    * Hive Metastore Host -- IP address. Example: 123.123.123.123
    * Port -- Port number. Default: 9083
    * Enable SASL -- Box to enable SASL. If you enable SASL, specify the Hive Kerberos Principal.
  * **Authorization** -- Authorization type for the client. When adding a new Hive source, you have the following client options for Hive authorization:
    * Storage Based with User Impersonation -- A storage-based authorization in the Metastore Server which is commonly used to add authorization to metastore server API calls. Dremio utilizes user impersonation to implement Storage Based authorization
      * When **Allow VDS-based Access Delegation** is enabled (default), the owner of the view is used as the impersonated username.
      * When **Allow VDS-based Access Delegation** is disabled (unchecked), the query user is used as the impersonated username.
    * SQL Based -- **Not Currently Supported**
    * Ranger Based -- An Apache Ranger plug-in that provides a security framework for authorization.
      * Ranger Service Name - This field corresponds to the security profile in Ranger. Example: `hivedev`
      * Ranger Host URL - This field is the path to the actual Ranger server. Example: `http://yourhostname.com:6080`


### Advanced Options[​](/data-sources/lakehouse-catalogs/hive#advanced-options "Direct link to Advanced Options")
The following options allow you to specify either impersonsation users and Hive connection properties.
For example, to add a new Hive source, you can specify a single metastore host by adding a `hive.metastore.uris` parameter and value in the Hive connection properties. This connection property overrides the value specified in the Hive source.
**Multiple Hive Metastore Hosts:** If you need to specify multiple Hive metastore hosts, update the **hive-site.xml** file. See [Hive Metastores](/data-sources/lakehouse-catalogs/hive#hive-metastores) for more information.
  * **Impersonation User Delegation** -- Specifies whether an impersonation username is As is (Default), Lowercase, or Uppercase
  * **Connection Properties** -- Name and value of each Hive connection property.
  * **Credentials** -- Name and hidden value of each Hive connection property for which you want to keep the value secret.


![Dremio Advanced Options](https://docs.dremio.com/assets/images/hive-adv-options-700333cdd76fb673870898376d244a26.png)
#### Kerberized Hive[​](/data-sources/lakehouse-catalogs/hive#kerberized-hive "Direct link to Kerberized Hive")
To connect to a Kerberized Hive source, add the following connection property in the Advanced Options:  
| Property  | Description  | Value  |  
| --- | --- | --- |  
| yarn.resourcemanager.principal  | Name of the Kerberos principal for the YARN resource manager.  | ``user`/`localhost`@<YOUR-REALM.COM>`  |  
### Reflection Refresh[​](/data-sources/lakehouse-catalogs/hive#reflection-refresh "Direct link to Reflection Refresh")
  * Never refresh -- Specifies how often to refresh based on hours, days, weeks, or never.
  * Never expire -- Specifies how often to expire based on hours, days, weeks, or never.


### Metadata[​](/data-sources/lakehouse-catalogs/hive#metadata "Direct link to Metadata")
#### Dataset Handling[​](/data-sources/lakehouse-catalogs/hive#dataset-handling "Direct link to Dataset Handling")
  * Remove dataset definitions if underlying data is unavailable (Default).  
If this box is _not_ checked and the underlying files under a folder are removed or the folder/source is not accessible, Dremio does not remove the dataset definitions. This option is useful in cases when files are temporarily deleted and put back in place with new sets of files.


#### Metadata Refresh[​](/data-sources/lakehouse-catalogs/hive#metadata-refresh "Direct link to Metadata Refresh")
  * **Dataset Discovery** -- Refresh interval for top-level source object names such as names of DBs and tables.
    * Fetch every -- Specify fetch time based on minutes, hours, days, or weeks. Default: 1 hour
  * **Dataset Details** -- The metadata that Dremio needs for query planning such as information needed for fields, types, shards, statistics, and locality.
    * Fetch mode -- Specify either Only Queried Datasets, or All Datasets. Default: Only Queried Datasets
      * Only Queried Datasets -- Dremio updates details for previously queried objects in a source.  
This mode increases query performance because less work is needed at query time for these datasets.
      * All Datasets -- Dremio updates details for all datasets in a source. This mode increases query performance because less work is needed at query time.
    * Fetch every -- Specify fetch time based on minutes, hours, days, or weeks. Default: 1 hour
    * Expire after -- Specify expiration time based on minutes, hours, days, or weeks. Default: 3 hours
  * **Authorization** -- Used when impersonation is enabled. Specifies the maximum of time that Dremio caches authorization information before expiring.
    * Expire after - Specifies the expiration time based on minutes, hours, days, or weeks. Default: 1 day


### Privileges[​](/data-sources/lakehouse-catalogs/hive#privileges "Direct link to Privileges")
On the Privileges tab, you can grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges. All privileges are optional.
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Updating a Hive Source[​](/data-sources/lakehouse-catalogs/hive#updating-a-hive-source "Direct link to Updating a Hive Source")
To update a Hive source:
  1. On the Datasets page, under **Metastores** in the panel on the left, find the name of the source you want to edit.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see [Configuring Hive as a Source](/data-sources/lakehouse-catalogs/hive#configuring-hive-as-a-source).
  4. Click **Save**.


## Deleting a Hive Source[​](/data-sources/lakehouse-catalogs/hive#deleting-a-hive-source "Direct link to Deleting a Hive Source")
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete a Hive source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Metastores** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
## For More Information[​](/data-sources/lakehouse-catalogs/hive#for-more-information "Direct link to For More Information")
See [Hive Data Types](/reference/sql/data-types/mappings/hive) for information about mapping to Dremio data types.
Was this page helpful?
[Previous Iceberg REST Catalog](/data-sources/lakehouse-catalogs/iceberg-rest-catalog)[Next Nessie](/data-sources/lakehouse-catalogs/nessie)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Iceberg REST Catalog](/data-sources/lakehouse-catalogs/iceberg-rest-catalog)[Next Nessie](/data-sources/lakehouse-catalogs/nessie)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdata-sources%2Flakehouse-catalogs%2Fhive%2F&_biz_t=1777950366890&_biz_i=Hive%20%7C%20Dremio%20Documentation&_biz_n=98&rnd=543509&cdn_o=a&_biz_z=1777950366890)
