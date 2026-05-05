---
url: /help-support/well-architected-framework/cost/optimize-refresh
title: "Optimize Metadata Refresh Frequency | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64229.201480666
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Well-Architected Framework](/help-support/well-architected-framework)
  * [Cost Optimization](/help-support/well-architected-framework/cost)
  * Optimize Metadata Refresh Frequency

Version: current [26.x]
On this page
# Optimize Metadata Refresh Frequency
  * [What is Metadata](/help-support/well-architected-framework/cost/optimize-refresh/#what-is-metadata)
  * [The Importance of Refreshing Metadata](/help-support/well-architected-framework/cost/optimize-refresh/#the-importance-of-refreshing-metadata)
  * [Inline Metadata Refresh](/help-support/well-architected-framework/cost/optimize-refresh/#inline-metadata-refresh)
  * [Metadata for Iceberg Tables](/help-support/well-architected-framework/cost/optimize-refresh/#metadata-for-iceberg-tables)
  * [Metadata for Delta Lake Tables](/help-support/well-architected-framework/cost/optimize-refresh/#metadata-for-delta-lake-tables)
  * [Expiring Metadata](/help-support/well-architected-framework/cost/optimize-refresh/#expiring-metadata)
  * [Metadata Refresh Recommendations](/help-support/well-architected-framework/cost/optimize-refresh/#metadata-refresh-recommendations)


## What is Metadata?[​](/help-support/well-architected-framework/cost/optimize-refresh/#what-is-metadata "Direct link to What is Metadata?")
Metadata is information about a dataset, including high-level information like dataset name, schema, and partition layout, and low-level details like statistics, locality, shards, file information for file system sources, and so on.
## How Refreshing Metadata Works[​](/help-support/well-architected-framework/cost/optimize-refresh/#how-refreshing-metadata-works "Direct link to How Refreshing Metadata Works")
When a source metadata refresh is triggered, Dremio refreshes all the datasets in the source sequentially. Scheduled refreshes run in the background, and only one scheduled refresh can run at a time per source. A new scheduled refresh can start only after the previous source refresh has completed and the configured refresh interval has elapsed since the previous source refresh began.
If a source metadata refresh takes longer than the configured interval, subsequent refreshes are delayed and will not run on schedule. To reduce the time the source metadata refresh takes to complete, you can:
  * Forget datasets that you no longer query
  * Review the engine routing rules if you have Parquet datasets to ensure metadata refreshes use the appropriate engine


## The Importance of Refreshing Metadata[​](/help-support/well-architected-framework/cost/optimize-refresh/#the-importance-of-refreshing-metadata "Direct link to The Importance of Refreshing Metadata")
When you submit a query to Dremio, Dremio uses metadata to validate the query and generate an accurate and efficient query plan. When you initially promote a dataset, Dremio automatically collects metadata for the dataset.
For file system data sources like S3, HDFS, Azure Storage, or GCS, if a dataset's metadata is not up to date, Dremio queries cannot return the latest data. Even though new data may be available in data lake, Dremio is not aware of it if metadata has not been refreshed. For non-file system sources, stale our out of date metadata can result in inefficient query plans.
## Inline Metadata Refresh[​](/help-support/well-architected-framework/cost/optimize-refresh/#inline-metadata-refresh "Direct link to Inline Metadata Refresh")
If the metadata is expired on a table when a query is submitted against it, Dremio performs an inline metadata refresh. In this case, the submitted query is paused until the metadata refresh is complete. For large datasets and external datasets, inline metadata refresh can add considerable time to a query. To avoid extended query times due to expired metadata, you can refresh metadata before it expires.
When configuring metadata refresh in the Dremio console, make sure that expire frequency is larger than the refresh frequency.
## Metadata for Iceberg Tables[​](/help-support/well-architected-framework/cost/optimize-refresh/#metadata-for-iceberg-tables "Direct link to Metadata for Iceberg Tables")
You don't need to refresh metadata for Iceberg tables. When data is added or updated in an Iceberg table, the table's metadata is updated with DML operation, so no separate refresh is needed. Outside of DML capabilities, this is another great feature of using Iceberg tables -- your data is always up to date, with one specific exception noted below. **If all or majority of your datasets are Iceberg tables, no need to setup an isolated engine for metadata refresh as it can be underutilized.**
If your catalog type is HDFS and DML operations are performed by another engine like Spark, you need to refresh Iceberg table metadata using the [Alter Table](/reference/sql/commands/alter-table) command. This is lightweight operation performed only on the coordinator to store the latest snapshot file location.
## Metadata for Delta Lake Tables[​](/help-support/well-architected-framework/cost/optimize-refresh/#metadata-for-delta-lake-tables "Direct link to Metadata for Delta Lake Tables")
Metadata refresh is required for Delta Lake tables and is performed on the coordinator. For Delta Lake tables, metadata is read from the delta log and is a lightweight operation.
## Expiring Metadata[​](/help-support/well-architected-framework/cost/optimize-refresh/#expiring-metadata "Direct link to Expiring Metadata")
For non-Iceberg tables, when new files are added to the data lake, Dremio does not recognize the new files unless the metadata is refreshed. Dremio executes queries based on the current metadata. Set the frequency for metadata expiration according to your requirements, ensuring that users are not submitting queries based on stale metadata. If metadata expires before it is refreshed, Dremio performs an inline refresh, which can add latency to query execution times.
## Metadata Refresh Recommendations[​](/help-support/well-architected-framework/cost/optimize-refresh/#metadata-refresh-recommendations "Direct link to Metadata Refresh Recommendations")
### Adjusting Refresh Frequency[​](/help-support/well-architected-framework/cost/optimize-refresh/#adjusting-refresh-frequency "Direct link to Adjusting Refresh Frequency")
Dremio recommends reviewing the metadata refresh frequencies for all your data sources on a quarterly basis at a minimum, or any time you add a new data source. This scheduled review ensures that you can keep your refresh frequencies configured according to how often metadata is changing in the data source.
Metadata refresh settings should align with the frequency of changes or ingestion in your data sources and the trade-off between compute resources and resources needed for metadata refresh. If you are ingesting new data very frequently, you will need to decide on an acceptable period of time before metadata is refreshed. If you are ingesting data once a day, you only need to refresh metadata once a day. In this case, a higher refresh frequency would provide no benefit, but it could consume compute resources that are needed in query execution or add unnecessarily to operating costs.
### Scheduled Refresh[​](/help-support/well-architected-framework/cost/optimize-refresh/#scheduled-refresh "Direct link to Scheduled Refresh")
The Dremio console provides metadata refresh settings at the data source level. The default metadata refresh for new data sources is every hour. For most data sources, this is far too frequent. For example, if the data in a source is only updated once every six hours, it does not make sense to refresh metadata on an hourly basis. You should update the refresh schedule to match the frequency of data updates in your source. See [Scheduling Metadata Refreshes](/help-support/advanced-topics/metadata-caching/#scheduling-metadata-refreshes) in the Dremio docs.
If you have multiple datasets with different update frequencies at source level, consider creating an independent data source for each group of datasets to better align metadata refresh frequencies with ingestion frequency.
Scheduled metadata refresh is not supported at the table level.
### On Demand Refresh via PDS Override[​](/help-support/well-architected-framework/cost/optimize-refresh/#on-demand-refresh-via-pds-override "Direct link to On Demand Refresh via PDS Override")
Considering that metadata refresh can be scheduled at the data source level and overridden programmatically for individual tables, you should review each new data source to understand the best refresh method. For example, on data lake sources you might set a very long metadata refresh schedule on the source to ensure that scheduled refresh doesn't happen, but you can perform an `ALTER TABLE .. REFRESH METADATA` as part of the ETL process when data generation has completed. For relational sources, it might make sense to set a longer refresh schedule at the source level, but override those source settings on tables because they will be updated more frequently.
For datasets that are updated during overnight ETL runs, it doesn’t make sense to refresh metadata until you know the ETL process is finished. In these cases, you can create a script that [triggers the manual refresh](/help-support/advanced-topics/metadata-caching/#triggering-metadata-refreshes-manually) of each dataset at the end of the ETL process. The script can call the SQL REST API or run JDBC/ODBC queries to execute the `ALTER TABLE .. REFRESH METADATA` command. If the ETL process does not fully update an existing dataset but only changes partitions or creates new partitions, you can use the script to tell Dremio to only [refresh the changed or new partitions](/help-support/advanced-topics/metadata-caching/#refreshing-partition-metadata) -- this works only with Parquet and Iceberg datasets, not CSV or JSON.
For data sources that include a large number of datasets but only a small number have their structure changed or have new files added, scheduled refresh does not make sense. In this case, set the metadata to never refresh at the source and add scripts to that [trigger a manual refresh](/help-support/advanced-topics/metadata-caching/#triggering-metadata-refreshes-manually) on a specific dataset with `ALTER TABLE .. REFRESH METADATA`.
If you use on demand refresh, be sure that metadata at the data source level is set to never refresh and never expire, and trigger an on demand refresh for all datasets that have been updated.
If you don't schedule the metadata refresh and you don't refresh with a script, queries against stale or invalid metadata will trigger an inline refresh during the planning phase. Inline refresh can have a negative impact on the duration of query execution.
### Use a Dedicated Engine[​](/help-support/well-architected-framework/cost/optimize-refresh/#use-a-dedicated-engine "Direct link to Use a Dedicated Engine")
Dremio recommends using a dedicated engine for metadata refresh if executor nodes are processing a high number of metadata refresh jobs. Using a dedicated engine ensures that all metadata refresh activities on the executor are isolated from other workloads and keeps CPU and memory resources dedicated to business-critical workloads. For file-based sources with a high number of files (i.e., more than 1 million), it is better to use multiple small engine instances than a single scale-up instance because multiple instances can run refresh queries in parallel. Use the `query_type()` engine routing rule for metadata refresh jobs (`query_type() = 'Metadata Refresh'`).
Was this page helpful?
[Previous Cost Optimization](/help-support/well-architected-framework/cost)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Cost Optimization](/help-support/well-architected-framework/cost)
