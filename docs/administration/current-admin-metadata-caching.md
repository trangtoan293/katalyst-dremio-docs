---
url: /admin/metadata-caching
slug: /admin/metadata-caching
title: "Refreshing Metadata | Dremio Documentation"
depth: 4
crawled_at: 64770.430417666
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Advanced Topics](/help-support/advanced-topics)
  * Refreshing Metadata

Version: current [26.x]
On this page
# Refreshing Metadata
Dremio gathers metadata information for tables from external sources at regular intervals in order to accelerate queries. When a query is submitted, Dremio uses stored metadata immediately to start query planning and to process functions.
The metadata refresh process runs in parallel across the execution engine’s nodes for faster refresh and operates incrementally where possible for more efficient refreshes.
Information gathered for each table includes:
  * The dataset's table schema including columns, data types, etc.
  * The dataset's table partition layout
  * The list of files that are a part of the dataset table (Data Lake sources only)


Moreover, you can issue queries for which Dremio processes any number of data splits. Unlimited splits are enabled by default for the following source types:
  * FileSystem sources (S3, Azure Storage, GCS, HDFS) using:
    * Parquet formatted tables
    * Iceberg formatted tables
    * Delta Lake formatted tables
  * Hive sources (Hive 2 and Hive 3) using:
    * Parquet formatted tables
    * Avro formatted tables
    * ORC formatted tables (non-transactional only)


If you are using Hive datasets, we recommend that you enable the `store.accurate.partition_stats` support key, which improves the accuracy of partition statistics. See [Support Settings](/help-support/support-settings/) for the steps. Using these support keys enables new functionalities in Dremio that might cause unexpected behaviors with your existing datasets.
Metadata refreshes [take place automatically](/help-support/advanced-topics/metadata-caching/), [are scheduled](/help-support/advanced-topics/metadata-caching/), or [are triggered manually](/help-support/advanced-topics/metadata-caching/).
As the [Dremio Shared Responsibility Models](https://www.dremio.com/responsibility) outline, metadata is a shared responsibility between Dremio and you. The Shared Responsibility Models lay out Dremio's responsibilities for enabling data source configurations and your responsibilities for managing metadata.
## When Automatic Refreshes Happen[​](/help-support/advanced-topics/metadata-caching/)
During query runtime, if Dremio discovers that the metadata has either expired or became invalid, a metadata refresh is triggered and the query restarts after the refresh.
By default, Dremio refreshes metadata when the service discovers that the metadata has expired or metadata is identified as invalid during a query's execution. In these circumstances, Dremio automatically performs a metadata refresh.
## Scheduling Metadata Refreshes[​](/help-support/advanced-topics/metadata-caching/)
Metadata is automatically refreshed at fixed time intervals, such as once every hour. You can set the schedule on the **Metadata** tab of the Settings dialog for the desired source.
Scheduling metadata refreshes is done from the _Advanced Options_ tab of the Settings page for a desired source. You need only select the scope of the refresh (all datasets, a single dataset, or as-needed) and when the refresh should occur or expire.
For more information about Metadata settings for specific data sources, see each [data source's help page](/data-sources).
## Triggering Metadata Refreshes Manually[​](/help-support/advanced-topics/metadata-caching/)
You can manually trigger an immediate metadata refresh by executing the SQL command `ALTER TABLE `table` REFRESH METADATA`.
To ensure a new recently-written metadata is identified by Dremio, run the [ALTER TABLE](/reference/sql/commands/alter-table) SQL command in an on-demand basis, which guarantees that the most-recent metadata changes are identified. Using [the syntax specified here](/reference/sql/commands/alter-table), you may also refresh metadata for [individual partitions](/help-support/advanced-topics/metadata-caching/).
For example, refreshing metadata for a table could be done manually with the following command:
Refresh table metadata

```
ALTER TABLE table1 REFRESH METADATA;  

```

This forces a manual refresh of the `table1` table's metadata.
The first time Dremio performs a metadata refresh, it may run slowly. The reason for this is that Dremio is preparing the existing metadata for future refreshes by incrementing existing data. Once this initial refresh "setup" is completed, subsequent refreshes are significantly faster.
### Refreshing Partition Metadata[​](/help-support/advanced-topics/metadata-caching/)
In instances where a table is partitioned and those partitions updated since the last refresh is known, the performance of metadata refresh can be accelerated further by refreshing only the changed partitions. This is particularly useful on large datasets containing numerous files, since it reduces the number of subdirectories that need to be scanned.
To refresh individual partitions, add the `PARTITIONS` clause to the [ALTER TABLE](/reference/sql/commands/alter-table) statement described here. The example below limits refresh to just the partitions requested.
Refresh partition metadata

```
ALTER TABLE <tableName> REFRESH METADATA FOR PARTITIONS ( "<partitionName>" = '<value>' );  

```

  * You cannot refresh metadata for only changed partitions when you are working with CSV or JSON datasets. With datasets of these types, only refreshes of all partitions is possible. For example, suppose that a CSV dataset has 100,000 partitions. Metadata about this dataset is collected, and the number of partitions is recorded to be 100,000. After the metadata is collected, two partitions are added. If you try to refresh only the two new partitions with the `ALTER TABLE `tableName` REFRESH METADATA FOR PARTITIONS` statement, all 100,002 partitions are refreshed.


## Limitations in How Metadata is Refreshed[​](/help-support/advanced-topics/metadata-caching/)
  * The **Dataset Discovery** option is not available for FileSystem sources, such as HDFS and NAS.
  * Datasets are limited to a maximum width of 800 columns (as of Dremio v3.1.3). Datasets exceeding the limit might not be queryable after their metadata is refreshed.


Was this page helpful?
[Previous Ranger-Based Authorization](/help-support/advanced-topics/hive-ranger)[Next Runtime Filtering](/help-support/advanced-topics/runtime-filtering)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Ranger-Based Authorization](/help-support/advanced-topics/hive-ranger)[Next Runtime Filtering](/help-support/advanced-topics/runtime-filtering)
!!
