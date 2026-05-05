---
url: /developer/data-formats/apache-iceberg/table-maintenance-optimization/optimizing
title: "Optimize Tables | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64216.593894791
---

  * [Dremio Enterprise Home](/)
  * [Developer Guide](/developer)
  * [File and Table Formats](/developer/data-formats)
  * [Apache Iceberg](/developer/data-formats/apache-iceberg)
  * [Table Maintenance and Optimization](/developer/data-formats/apache-iceberg/table-maintenance-optimization)
  * Optimize Tables

Version: current [26.x]
On this page
# Optimize Tables
Dremio integrates support for [Apache Iceberg](/developer/data-formats/apache-iceberg) tables, an open-source data lakehouse table format designed for petabyte-scale tables. Iceberg tables bring the reliability and simplicity of SQL tables to the data lakehouse. Iceberg tables also function in a fully-open and accessible manner that allows multiple engines (such as Dremio, Spark, etc.) to operate on the same dataset. As these tables are being written to and updated, the number of data files and metadata files accumulates. This accumulation of files can impact query performance, and to remedy this impact, Dremio suggests running [OPTIMIZE TABLE](/reference/sql/commands/apache-iceberg-tables/optimize-table) as part of your table management workflow. These SQL statements can be run for all [Iceberg tables](/developer/data-formats/apache-iceberg#how-dremio-uses-iceberg-tables) and [catalogs](/developer/data-formats/apache-iceberg#iceberg-catalogs-in-dremio) in Dremio.
## How Dremio Optimizes an Iceberg Table[​](/developer/data-formats/apache-iceberg/table-maintenance-optimization/optimizing#how-dremio-optimizes-an-iceberg-table "Direct link to How Dremio Optimizes an Iceberg Table")
The `OPTIMIZE TABLE` command combines small files or splits large files into an optimal file size to reduce metadata overhead and runtime file open costs. This functionality also enables you to repartition the data when a table's partition has changed.
### Sub-optimal File Sizes[​](/developer/data-formats/apache-iceberg/table-maintenance-optimization/optimizing#sub-optimal-file-sizes "Direct link to Sub-optimal File Sizes")
Iceberg tables that are constantly being updated can have data files of various sizes. As a result, query performance can be negatively affected by sub-optimal file sizes. The optimal file size in Dremio is 256 MB. The optimize functionality logically combines smaller files and splits larger ones to 256 MB (see the following graphic), helping to reduce metadata overhead and costs related to opening and reading files.
![Optimizing file sizes in Dremio.](https://docs.dremio.com/images/file-sizes3.png)
### Clustered Iceberg Tables[​](/developer/data-formats/apache-iceberg/table-maintenance-optimization/optimizing#clustered-iceberg-tables "Direct link to Clustered Iceberg Tables")
The `OPTIMIZE TABLE` command should be used to optimize Iceberg tables. However, its behavior differs based on whether or not tables are clustered.
For clustered tables, `OPTIMIZE TABLE` incrementally reorders data to achieve the optimal data layout and manages file sizes. This mechanism may take longer to run on newly loaded or unsorted tables. Additionally, you may be required to run multiple `OPTIMIZE TABLE` commands to converge on an optimal file layout.
For [unclustered tables](/developer/data-formats/apache-iceberg/table-maintenance-optimization/optimizing#how-dremio-optimizes-an-iceberg-table), `OPTIMIZE TABLE` combines small files or splits large files to achieve an optimal file size, reducing metadata overhead and runtime file open costs. We recommend enabling automated table maintenance to eliminate the need to run optimizations for clustered Iceberg tables manually.
### Evolving Partition Scheme[​](/developer/data-formats/apache-iceberg/table-maintenance-optimization/optimizing#evolving-partition-scheme "Direct link to Evolving Partition Scheme")
To improve read or write performance, you can partition data based on the values of a table's columns. If the columns used in a partition evolve over time, query performance can be impacted when the queries are not aligned with the current segregations of the partition. Optimizing a table identifies and rewrites the data files if they do not follow the most recent partition specification.
You can optimize selected partitions using the [partition filter clause](/reference/sql/commands/apache-iceberg-tables/optimize-table). Use this SQL command:
  * When select partitions are queried more often or are of more importance (than others) and it's not necessary to optimize the entire table.
  * When select partitions are more active and are constantly being updated, and optimization should only occur when activity is low or paused.


### Rewriting Manifest Files[​](/developer/data-formats/apache-iceberg/table-maintenance-optimization/optimizing#rewriting-manifest-files "Direct link to Rewriting Manifest Files")
Iceberg uses metadata files (or manifests) to track point-in-time snapshots by maintaining all deltas as a table. This metadata layer functions as an index over a table’s data and the manifest files contained in this layer speed up query planning and prune unnecessary data files. For Iceberg tables that are constantly being updated (such as the ingestion of streaming data or users performing frequent DML operations), the number of manifest files that are sub-optimal in size can grow over time. Additionally, the clustering of metadata entries in these files may not be optimal. As a result, sub-optimal manifests can impact the time it takes to plan and execute a query.
Dremio provides the capability for you to rewrite these manifest files based on a size criteria. Such rewrites occur quickly and use minimal resources since it only affects the manifest files. This operation results in the optimization of the metadata, helping to reduce query planning time.
The target size for a manifest file is based on the Iceberg table's property. If a default size is not set, Dremio defaults to 8 MB. For the target size, Dremio considers the range from 0.75x to 1.8x, inclusive, to be optimal. Manifest files exceeding the 1.8x size will be split while files smaller than the 0.75x size will be compacted.
### Optimizing Tables with Position Delete Files[​](/developer/data-formats/apache-iceberg/table-maintenance-optimization/optimizing#optimizing-tables-with-position-delete-files "Direct link to Optimizing Tables with Position Delete Files")
Iceberg v2 added the ability for delete files to be encoded to rows that have been deleted in existing data files. This enables you to delete or replace individual rows in immutable data files without the need to rewrite those files.   
| `file_path`  | `pos`  |  
| --- | --- |  
| `file:/Users/test.user/Downloads/gen_tables/orders_with_deletes/data/2021/2021-00.parquet`  | `6`  |  
| `file:/Users/test.user/Downloads/gen_tables/orders_with_deletes/data/2021/2021-00.parquet`  | `16`  |  
Dremio can optimize Iceberg tables containing position delete files. This is beneficial to do because when data files are read, the associated delete files are stored in memory. Also, one data file can be linked to several delete files, which can impact read time.
When you optimize a table in Dremio, the position delete files are removed and the data files that are linked to them are rewritten. Data files are rewritten if any of the following conditions are met:
  * The file size is not within the optimum range.
  * The partition's specification is not current.
  * The data file has an attached delete file.


When optimizing a table using the MIN_INPUT_FILES option, consider the minimum number of qualified files needed for compaction. Delete files count towards determining whether the minimum threshold is reached.
You only need to optimize an Iceberg table once to remove the delete files. Dremio does not write delete files, even when performing DML operations. As a result, optimizing an Iceberg table containing delete files just once can improve read performance.
For guidance on using the optimize functionality in your queries, see [OPTIMIZE TABLE](/reference/sql/commands/apache-iceberg-tables/optimize-table).
## Routing Optimization Jobs[​](/developer/data-formats/apache-iceberg/table-maintenance-optimization/optimizing#routing-optimization-jobs "Direct link to Routing Optimization Jobs")
You can route jobs that run `OPTIMIZE TABLE` to specific queues by using a routing rule that uses the `query_label()` condition. For more information, see [Workload Management](/admin/workloads/workload-management).
## Limitations[​](/developer/data-formats/apache-iceberg/table-maintenance-optimization/optimizing#limitations "Direct link to Limitations")
  * You can run only one optimize query at a time on the selected Iceberg table partition.
  * The optimize functionality does not support sort ordering.


Was this page helpful?
[Previous Table Cleanup with Vacuum](/developer/data-formats/apache-iceberg/table-maintenance-optimization/table-cleanup-vacuum)[Next Transforming Data on Load](/developer/data-formats/apache-iceberg/copy-into-transformations)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Table Cleanup with Vacuum](/developer/data-formats/apache-iceberg/table-maintenance-optimization/table-cleanup-vacuum)[Next Transforming Data on Load](/developer/data-formats/apache-iceberg/copy-into-transformations)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdeveloper%2Fdata-formats%2Fapache-iceberg%2Ftable-maintenance-optimization%2Foptimizing%2F&_biz_t=1777950536776&_biz_i=Dremio%20Documentation&_biz_n=417&rnd=531898&cdn_o=a&_biz_z=1777950536777)
