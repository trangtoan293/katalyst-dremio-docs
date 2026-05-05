---
url: /developer/data-formats/apache-iceberg/table-properties
title: "Supported Properties of Apache Iceberg Tables | Dremio Documentation"
depth: 4
crawled_at: 64777.11590175
---

  * [Dremio Enterprise Home](/)
  * [Developer Guide](/developer)
  * [File and Table Formats](/developer/data-formats)
  * [Apache Iceberg](/developer/data-formats/apache-iceberg)
  * Supported Properties of Apache Iceberg Tables

Version: current [26.x]
# Supported Properties of Apache Iceberg Tables
You can use the following table properties to configure aspects of Apache Iceberg tables when you [create](/reference/sql/commands/create-table) or [alter](/reference/sql/commands/alter-table) the table:  
| Property  | Default  | Description  |  
| --- | --- | --- |  
| commit.manifest.target-size-bytes  | `8 MB`  | The target size when merging manifest files.  |  
| commit.status-check.num-retries  | `3`  | The number of times to check whether a commit succeeded after a connection is lost before failing due to an unknown commit state.  |  
| compatibility.snapshot-id-inheritance.enabled  |  `false` (always `true` if the format version is &gt; 1)  | Enables committing snapshots without explicit snapshot IDs.  |  
| dremio.clustering.target_clustering_depth  | `3`  | The target clustering depth. Lower numbers indicate better organization.  |  
| dremio.clustering.target_cluster_size  | `3GB`  | The target size of the cluster.  |  
| dremio.clustering.minimal_cluster_size  | `64MB`  | The minimal size of the cluster.  |  
| dremio.clustering.maximal_input_data_file_count_per_run  | `10000`  | The maximal data file to process per iteration.  |  
| dremio.clustering.dremio.clustering.maximal_total_input_data_file_size_per_run  | `200GB`  | The maximal total data file sizes to rewrite per iteration run.  |  
| format-version  | `2`  | The table's format version is defined in the Spec. Options: `1` or `2`  |  
| history.expire.max-snapshot-age-ms  |  `432000000` (5 days)  | The maximum age of snapshots to keep while expiring snapshots.  |  
| history.expire.min-snapshots-to-keep  | `1`  | The minimum number of snapshots to keep while expiring snapshots.  |  
| write.delete.mode  | `copy-on-write`  | The table's method for handling row-level deletes. See [Row-Level Changes on the Lakehouse: Copy-On-Write vs. Merge-On-Read in Apache Iceberg](https://www.dremio.com/blog/row-level-changes-on-the-lakehouse-copy-on-write-vs-merge-on-read-in-apache-iceberg/) for more information on which mode is best for your table's DML operations. Options: `copy-on-write` or `merge-on-read`  |  
| write.merge.mode  | `copy-on-write`  | The table's method for handling row-level merges. See [Row-Level Changes on the Lakehouse: Copy-On-Write vs. Merge-On-Read in Apache Iceberg](https://www.dremio.com/blog/row-level-changes-on-the-lakehouse-copy-on-write-vs-merge-on-read-in-apache-iceberg/) for more information on which mode is best for your table's DML operations. Options: `copy-on-write` or `merge-on-read`  |  
| write.metadata.compression-codec  | `none`  | Metadata compression codec. Options: `none` or `gzip`  |  
| write.metadata.delete-after-commit.enabled  | `false`  | Controls whether to delete the oldest tracked version metadata files after the commit. This property has no impact on tables created in Nessie catalogs.  |  
| write.metadata.metrics.column.col1  | (not set)  | Metrics mode for column `col1` to allow per-column tuning. Options: `none`, `counts`, `truncate(length)`, or `full`  |  
| write.metadata.metrics.default  | `truncate(16)`  | Default metrics mode for all columns in the table. Options: `none`, `counts`, `truncate(length)`, or `full`  |  
| write.metadata.metrics.max-inferred-column-defaults  | `100`  | Defines the maximum number of top-level columns for which metrics are collected. The number of stored metrics can be higher than this limit for a table with nested fields.  |  
| write.metadata.previous-versions-max  | `100`  | The maximum number of previous version metadata files to keep before deleting after the commit.  |  
| write.parquet.compression-codec  | `zstd`  | The Parquet compression codec. Options: `zstd`, `gzip`, `snappy`, or `uncompressed`  |  
| write.parquet.compression-level  | `null`  | The Parquet compression level. Supported for `gzip` and `zstd`.  |  
| write.parquet.dict-size-bytes  |  `2097152` (2 MB)  | The Parquet dictionary page size. Ignores the `store.parquet.dictionary.page-size` support key.  |  
| write.parquet.page-row-limit  | `20000`  | The Parquet page row limit.  |  
| write.parquet.page-size-bytes  |  `1048576` (1 MB)  | The Parquet page size. Ignores the `store.parquet.page-size` support key.  |  
| write.parquet.row-group-size-bytes  |  `134217728` (128 MB)  | Parquet row group size. Dremio uses this property as a target file size since it writes one row-group per Parquet file. Ignores the `store.parquet.block-size` and `dremio.iceberg.optimize.target_file_size_mb` support keys.  |  
| write.summary.partition-limit  | `0`  | Includes partition-level summary stats in snapshot summaries if the changed partition count is less than this limit.  |  
| write.target-file-size-bytes  |  `536870912` (512 MB)  | Controls the size of files generated to target about this many bytes.  |  
| write.update.mode  | `copy-on-write`  | The table's method for handling row-level updates. See [Row-Level Changes on the Lakehouse: Copy-On-Write vs. Merge-On-Read in Apache Iceberg](https://www.dremio.com/blog/row-level-changes-on-the-lakehouse-copy-on-write-vs-merge-on-read-in-apache-iceberg/) for more information on which mode is best for your table's DML operations. Options: `copy-on-write` or `merge-on-read`  |  
In cases where Dremio has a support key for a feature covered by a table property, Dremio uses the table property instead of the support key.
Dremio also uses the Iceberg default value for table properties that are not set. See Iceberg's documentation for the full list of [SHOW TBLPROPERTIES](/reference/sql/commands/show-table-properties).
Was this page helpful?
[Previous Rolling Back Tables](/developer/data-formats/apache-iceberg/rolling-back)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Rolling Back Tables](/developer/data-formats/apache-iceberg/rolling-back)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdeveloper%2Fdata-formats%2Fapache-iceberg%2Ftable-properties%2F&_biz_t=1777951098358&_biz_i=Supported%20Properties%20of%20Apache%20Iceberg%20Tables%20%7C%20Dremio%20Documentation&_biz_n=1519&rnd=686127&cdn_o=a&_biz_z=1777951098358)
