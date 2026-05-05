---
url: /acceleration/manual-reflections/refreshing-reflections
slug: /acceleration/manual-reflections/refreshing-reflections
title: "Refresh Reflections | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64188.425032833
---

  * [Dremio Enterprise Home](/)
  * [Accelerate Queries](/acceleration)
  * [Manually Manage Reflections](/acceleration/manual-reflections)
  * Refresh Reflections

Version: current [26.x]
On this page
# Refresh Reflections
The data in a Reflection can become stale and may need to be refreshed. Refreshing a Reflection triggers two updates:
  * The data stored in the Apache Iceberg table for the Reflection is updated.
  * The metadata that stores details about the Reflection is updated.


Dremio does not refresh the data that external Reflections are mapped to.
See [`SYS.REFLECTION_REFRESH_SETTINGS`](/reference/sql/table-functions/reflection-refresh-settings) to return the refresh settings for a Reflection, including settings inherited from the datasets that the Reflection depends on.
## Types of Reflection Refresh​
How Reflections are refreshed depend on the format of the base table.
### Types of Refresh for Reflections on Apache Iceberg Tables and on Certain Types of Datasets in Filesystem Sources, AWS Glue Sources, and Hive Sources​
There are two methods that can be used to refresh Reflections that are defined either on Iceberg tables or on these types of datasets in filesystem, AWS Glue, and Hive sources:
  * Parquet datasets in Filesystem sources (on S3, Azure Storage, Google Cloud Storage, or HDFS)
  * Parquet datasets, Avro datasets, or non-transactional ORC datasets on AWS Glue or Hive (Hive 2 or Hive 3) sources


Iceberg tables in all supported file-system sources (Amazon S3, Azure Storage, Google Cloud Storage, and HDFS) and non-file-system sources (AWS Glue, Hive, and Nessie) can be refreshed with either of these methods.
  * Incremental refreshes
  * Full refreshes


#### Incremental Refreshes​
There are two types of incremental refreshes:
  * Incremental refreshes when changes to an anchor table are only append operations
  * Incremental refreshes when changes to an anchor table include non-append operations


  * Whether an incremental refresh can be performed depends on the outcome of an algorithm.
  * The initial refresh of a Reflection is always a full refresh.


##### Incremental Refreshes When Changes to an Anchor Table Are Only Append Operations​
Optimize operations on Iceberg tables are also supported for this type of incremental refresh.
This type of incremental refresh is used only when the changes to the anchor table are appends and do not include updates or deletes. There are two cases to consider:
  * When a Reflection is defined on one anchor table
When a Reflection is defined on an anchor table or on a view that is defined on one anchor table, an incremental refresh is based on the differences between the current snapshot of the anchor table and the snapshot at the time of the last refresh.
  * When a Reflection is defined on a view that joins two or more anchor tables
When a Reflection is defined on a view that joins two or more anchor tables, whether an incremental refresh can be performed depends on how many anchor tables have changed since the last refresh of the Reflection:
    * If just one of the anchor tables has changed since the last refresh, an incremental refresh can be performed. It is based on the differences between the current snapshot of the one changed anchor table and the snapshot at the time of the last refresh.
    * If two or more tables have been refreshed since the last refresh, then a full refresh is used to refresh the Reflection.


##### Incremental Refreshes When Changes to an Anchor Table Include Non-append Operations​
For Iceberg tables, this type of incremental refresh is used when the changes are DML operations that delete or modify the data (UPDATE, DELETE, etc.) made either through the Copy-on-Write (COW) or the Merge-on-Read (MOR) storage mechanism. For more information about COW and MOR, see [Row-Level Changes on the Lakehouse: Copy-On-Write vs. Merge-On-Read in Apache Iceberg](https://www.dremio.com/blog/row-level-changes-on-the-lakehouse-copy-on-write-vs-merge-on-read-in-apache-iceberg/).
For sources in filesystems or AWS Glue, non-append operations can include, for example:
  * In filesystem sources, files being deleted from Parquet datasets
  * In AWS Glue sources, DML-equivalent operations being performed on Parquet datasets, Avro datasets, or non-transactional ORC datasets


Both the anchor table and the Reflection must be partitioned, and the partition transforms that they use must be compatible.
There are two cases to consider:
  * When a Reflection is defined on one anchor table
When a Reflection is defined on an anchor table or one a view that is defined on one anchor table, an incremental refresh is based on Iceberg metadata that is used to identify modified partitions and to restrict the scope of the refresh to only those partitions.
  * When a Reflection is defined on a view that joins two or more anchor tables
When a Reflection is defined on a view that joins two or more anchor tables, whether an incremental refresh can be performed depends on how many anchor tables have changed since the last refresh of the Reflection:
    * If just one of the anchor tables has changed since the last refresh, an incremental refresh can be performed. It is based on Iceberg metadata that is used to identify modified partitions and to restrict the scope of the refresh to only those partitions.
    * If two or more tables have been refreshed since the last refresh, then a full refresh is used to refresh the Reflection.


Dremio uses Iceberg tables to store metadata for filesystem and AWS Glue sources.
For information about partitioning Reflections and applying partition transforms, see the section Horizontally Partition Reflections that Have Many Rows in [Best Practices for Creating Raw and Aggregation Reflections](/help-support/well-architected-framework/performance/).
For information about partitioning Reflections in ways that are compatible with the partitioning of anchor tables, see Partition Reflections to Allow for Partition-Based Incremental Refreshes in [Best Practices for Creating Raw and Aggregation Reflections](/help-support/well-architected-framework/performance/).
#### Full Refreshes​
In a full refresh, a Reflection is dropped, recreated, and loaded.
  * Whether a full refresh is performed depends on the outcome of an algorithm.
  * The initial refresh of a Reflection is always a full refresh.


#### Algorithm for Determining Whether an Incremental or a Full Refresh Is Used​
The following algorithm determines which refresh method is used:
  1. If the Reflection has never been refreshed, then a full refresh is performed.
  2. If the Reflection is created from a view that uses nested group-bys, unions, window functions, or joins other than inner or cross joins, then a full refresh is performed.
  3. If the Reflection is created from a view that joins two or more anchor tables and more than one anchor table has changed since the previous refresh, then a full refresh is performed.
  4. If the Reflection is based on a view and the changed anchor table is used multiple times in that view, then a full refresh is performed.
  5. If the changes to the anchor table are only appends, then an incremental refresh based on table snapshots is performed.
  6. If the changes to the anchor table include non-append operations, then the compatibility of the partitions of the anchor table and the partitions of the Reflection is checked:
     * If the partitions of the anchor table and the partitions of the Reflection are not compatible, or if either the anchor table or the Reflection is not partitioned, then a full refresh is performed.
     * If the partition scheme of the anchor table has been changed since the last refresh to be incompatible with the partitioning scheme of a Reflection, and if changes have occurred to data belonging to a prior partition scheme or the new partition scheme, then a full refresh is performed. To avoid a full refresh when these two conditions hold, update the partition scheme for Reflection to match the partition scheme for the table. You do so in the Advanced Reflection editor or through the ALTER DATASET SQL command.
     * If the partitions of the anchor table and the partitions of the Reflection are compatible, then an incremental refresh is performed.


Because this algorithm is used to determine which type of refresh to perform, you do not select a type of refresh for Reflections in the settings of the anchor table.
However, no data is read in the `REFRESH REFLECTION` job for Reflections that are dependent only on Iceberg, Parquet, Avro, non-transactional ORC datasets, or other Reflections and that have no new data since the last refresh based on the table snapshots. Instead, a "no-op" Reflection refresh is planned and a materialization is created, eliminating redundancy and minimizing the cost of a full or incremental Reflection refresh.
### Type of Refresh for Reflections on Delta Lake tables​
Only full refreshes are supported. In a full refresh, the Reflection being refreshed is dropped, recreated, and loaded.
### Types of Refresh for Reflections on All Other Tables​
  * **Incremental refreshes**
Dremio appends data to the existing data for a Reflection. Incremental refreshes are faster than full refreshes for large Reflections, and are appropriate for Reflections that are defined on tables that are not partitioned.
There are two ways in which Dremio can identify new records:
    * **For directory datasets in file-based data sources like S3 and HDFS:** Dremio can automatically identify new files in the directory that were added after the prior refresh.
    * **For all other datasets (such as datasets in relational or NoSQL databases):** An administrator specifies a strictly monotonically increasing field, such as an auto-incrementing key, that must be of type BigInt, Int, Timestamp, Date, Varchar, Float, Double, or Decimal. This allows Dremio to find and fetch the records that have been created since the last time the acceleration was incrementally refreshed.
Use incremental refreshes only for Reflections that are based on tables and views that are appended to. If records can be updated or deleted in a table or view, use full refreshes for the Reflections that are based on that table or view.
  * **Full refreshes**
In a full refresh, the Reflection being refreshed is dropped, recreated, and loaded.
Full refreshes are always used in these three cases:
    * A Reflection is partitioned on one or more fields.
    * A Reflection is created on a table that was promoted from a file, rather than from a folder, or is created on a view that is based on such a table.
    * A Reflection is created from a view that uses nested group-bys, joins, unions, or window functions.


## Best Practice: Time Reflection Refreshes to Occur After Metadata Refreshes of Tables​
Time your refresh Reflections to occur only after the metadata for their underlying tables is refreshed. Otherwise, Reflection refreshes do not include data from any files that were added to a table since the last metadata refresh, if any files were added.
For example, suppose a data source that is promoted to a table consists of 10,000 files, and that the metadata refresh for the table is set to happen every three hours. Subsequently, Reflections are created from views on that table, and the refresh of Reflections on the table is set to occur every hour.
Now, one thousand files are added to the table. Before the next metadata refresh, the Reflections are refreshed twice, yet the refreshes do not add data from those one thousand files. Only on the third refresh of the Reflections does data from those files get added to the Reflections.
## Setting the Refresh Policy for Reflections​
In the settings for a data source, you specify the refresh policy for refreshes of all Reflections that are on the tables in that data source. The default policy is period-based, with one hour between each refresh. If you select a schedule policy, the default is every day at 8:00 a.m. (UTC).
In the settings for a table that is not in the Iceberg or Delta Lake format, you can specify the type of refresh to use for all Reflections that are ultimately derived from the table. The default refresh type is **Full refresh**.
For tables in all supported table formats, you can specify a refresh policy for Reflection refreshes that overrides the policy specified in the settings for the table's data source. The default policy is the schedule set at the source of the table.
### Types of Refresh Policies​
Datasets and sources can set Reflections to refresh according to the following policy types:  
| Refresh policy type  | Description  |  
| --- | --- |  
| Never  | Reflections are not refreshed.  |  
| Period (default)  | Reflections refresh at the specified number of hours, days, or weeks. The default refresh period is one hour.  |  
| Schedule  | Reflections refresh at a specific time on the specified days of the week, in UTC. The default is every day at 8:00 a.m. (UTC).  |  
| Auto refresh when Iceberg table data changes  | Reflections automatically refresh for underlying Iceberg tables whenever new updates occur. Reflections under this policy type are known as Live Reflections. Live Reflections are also updated based on the minimum refresh frequency defined by the source-level policy. This refresh policy is only available for data sources that support the Iceberg table format.  |  
### Procedures for Setting and Editing the Refresh Policy​
To set the refresh policy on a data source:
  1. Right-click a data lake or external source.
  2. Select **Edit Details**.
  3. In the sidebar of the Edit Source window, select **Reflection Refresh**.
  4. When you are done making your selections, click **Save**. Your changes go into effect immediately.


To edit the refresh policy on a table:
  1. Locate the table.
  2. Hover over the row in which it appears and click ![The Settings icon](https://docs.dremio.com/images/cloud/settings-icon.png) to the right.
  3. In the sidebar of the Dataset Settings window, click **Reflection Refresh**.
  4. When you are done making your selections, click **Save**. Your changes go into effect immediately.


See [`SYS.REFLECTION_LINEAGE`](/reference/sql/table-functions/reflection-lineage) to return a list of the Reflections that will also be refreshed if a refresh is triggered for a particular Reflection.
## Manually Triggering a Refresh​
You can click a button to start the refresh of all of the Reflections that are defined on a table or on views derived from that table.
  1. Locate the table.
  2. Hover over the row in which it appears and click ![The Settings icon](https://docs.dremio.com/images/cloud/settings-icon.png) to the right.
  3. In the sidebar of the Dataset Settings window, click **Reflection Refresh**.
  4. Click **Refresh Now**. The message "All dependent Reflections will be refreshed." appears at the top of the screen.
  5. Click **Save**.


## Viewing the Refresh History for Reflections​
You can find out whether a refresh job for a Reflection has run, and how many times refresh jobs for a Reflection have been run.
### Procedure​
  1. Go to the space that lists the table or view from which the Reflection was created.
  2. Hover over the row for the table or view.
  3. In the **Actions** field, click ![The Settings icon](https://docs.dremio.com/images/cloud/settings-icon.png).
  4. In the sidebar of the Dataset Settings window, select **Reflections**.
  5. Click **History** in the heading for the Reflection.


### Result​
The Jobs page is opened with the ID of the Reflection in the search box, and only jobs related to that ID are listed.
When a Reflection is refreshed, Dremio runs a single job with two steps:
  * The first step writes the query results as a materialization to the distributed acceleration storage by running a `REFRESH REFLECTION` command.
  * The second step registers the materialization table and its metadata with the catalog so that the query optimizer can find the Reflection's definition and structure.


The following screenshot shows the `REFRESH REFLECTION` command used to refresh the Reflection named `Super-duper reflection`:
![Reflection refresh job listed on the Jobs page in the Dremio console](https://docs.dremio.com/images/sw_reflection_creation_command.png)
The Reflection refresh is listed as a single job on the Jobs page, as shown in the example below:
![Reflection refresh job listed on the Jobs page in the Dremio console](https://docs.dremio.com/images/sw_reflection_creation_single_job.png)
To find out which type of refresh was performed:
  1. Click the ID of the job that ran the `REFRESH REFLECTION` command.
  2. Click the **Raw Profile** tab.
  3. Click the **Planning** tab.
  4. Scroll down to the **Refresh Decision** section.


## Retry Policy for Reflection Refreshes​
When a Reflection refresh job fails, Dremio retries the refresh according to a uniform policy. This policy is designed to balance resource consumption with the need to keep Reflection data up to date. It prioritizes newly failed Reflections to reduce excessive retries on persistent failures and helps ensure that Reflection data does not become overly stale.
After a refresh failure, Dremio's default is to repeat the refresh attempt at exponential intervals up to 4 hours: 1 minute, 2 minutes, 5 minutes, 15 minutes, 30 minutes, 1 hour, 2 hours, and 4 hours. Then, Dremio continues trying to refresh the Reflection every 4 hours.
There are two optimizations for special cases:
  * **Long-running refresh jobs** : The backoff interval will never be shorter than the last successful duration.
  * **Small maximum retry attempts** : At least one 4-hour backoff attempt is guaranteed to ensure meaningful coverage of the retry policy.


Dremio stops retrying after 24 attempts—which tyically takes about 71 hours and 52 minutes—or when the 72-hour retry window is reached, whichever comes first.
## Triggering Refreshes by Using the Reflection API, the Catalog API, or an SQL Command​
You can refresh Reflections by using the Reflection API, the Catalog API, and the SQL commands `ALTER TABLE` and `ALTER VIEW`.
  * With the Reflection API, you specify the ID of a Reflection. See [Refresh a Reflection](/reference/api/reflections).
  * With the Catalog API, you specify the ID of a table or view that the Reflections are defined on. See [Refresh the Reflections on a Table](/reference/api/catalog/table) and [Refresh the Reflections on a View](/reference/api/catalog/view).
  * With the [`ALTER TABLE`](/reference/sql/commands/alter-table) and [`ALTER VIEW`](/reference/sql/commands/alter-view) commands, you specify the path and name of the table or view that the Reflections are defined on.


The refresh action follows this logic for the Reflection API:
  * If the Reflection is defined on a view, the action refreshes all Reflections that are defined on the tables and on downstream/dependent views that the anchor view is itself defined on.
  * If the Reflection is defined on a table, the action refreshes the Reflections that are defined on the table and all Reflections that are defined on the downstream/dependent views of the anchor table.


The refresh action follows similar logic for the Catalog API and the SQL commands:
  * If the action is started on a view, it refreshes all Reflections that are defined on the tables and on downstream/dependent views that the view is itself defined on.
  * If the action is started on a table, it refreshes the Reflections that are defined on the table and all Reflections that are defined on the downstream/dependent views of the anchor table.


For example, suppose that you had the following tables and views, with Reflections R1 through R5 defined on them:

```
         View2(R5)  
         /       \  
     View1(R3) Table3(R4)  
    /       \  
Table1(R1) Table2(R2)  

```

  * Refreshing Reflection R5 through the API also refreshes R1, R2, R3, and R4.
  * Refreshing Reflection R4 through the API also refreshes R5.
  * Refreshing Reflection R3 through the API also refreshes R1, R2, and R5.
  * Refreshing Reflection R2 through the API also refreshes R3 and R5.
  * Refreshing Reflection R1 through the API also refreshes R3 and R5.


Refreshing Reflections with the Reflection API, the Catalog API on views, and the SQL commands `ALTER TABLE` and `ALTER VIEW` is supported by Enterprise Edition only.
## Routing Refresh Jobs to Particular Queues​
You can use an SQL command to route jobs for refreshing Reflections directly to specified queues. See [Reflections](/reference/sql/commands/acceleration) in the SQL reference.
Was this page helpful?
[Previous Use Reflection Hints](/acceleration/manual-reflections/using-reflection-hints)[Next View Reflection Details](/acceleration/manual-reflections/viewing-info-about-reflections)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Use Reflection Hints](/acceleration/manual-reflections/using-reflection-hints)[Next View Reflection Details](/acceleration/manual-reflections/viewing-info-about-reflections)
