---
url: /developer/data-formats/parquet
title: "Parquet | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64216.852102833
---

  * [Dremio Enterprise Home](/)
  * [Developer Guide](/developer)
  * [File and Table Formats](/developer/data-formats)
  * Parquet

Version: current [26.x]
On this page
# Parquet
This topic provides general information and recommendations for Parquet files.
## Reading Parquet Files[​](/developer/data-formats/parquet#reading-parquet-files "Direct link to Reading Parquet Files")
Dremio's vectorized Parquet file reader improves parallelism on columnar data, reduces latencies, and enables more efficient resource and memory usage. The Parquet reader also improves [Reflection](/acceleration#reflections) performance.
Dremio supports offheap memory buffers for reading Parquet files.
## Parquet Limitations[​](/developer/data-formats/parquet#parquet-limitations "Direct link to Parquet Limitations")
Take into consideration the following limitations when generating and configuring Parquet files. Failure to adhere to these restrictions may cause errors to trigger when using Parquet files with Dremio.
  * **Maximum nested levels are restricted to 16.** Multiple structs may be defined up to a total nesting level of 16. Exceeding this results in a failed query.
  * **Maximum allowable elements in an array are restricted to 128.** The maximum allowable number of elements in an array may not exceed this quantity. Additional elements beyond the allowed 128 results in a query failure.
  * **Maximum footer size is restricted to 16MB.** The footer consists of metadata. This includes information about the version of the format, the schema, extra key-value pairs, and metadata for columns in the file. When the footer exceeds this size, a query failure occurs.


## Recommended Configuration[​](/developer/data-formats/parquet#recommended-configuration "Direct link to Recommended Configuration")
When using other tools to generate Parquet files for consumption in Dremio, we recommend the following configuration:  
| Type  | Implementation  |  
| --- | --- |  
| Row Groups  | Implement your row groups using the following: A single row group per file, and a target of 1MB-25MB column stripes for most datasets (ideally). By default, Dremio uses 256 MB row groups for the Parquet files that it generates.  |  
| Pages  | Implement your pages using the following: Snappy compression, and a target of ~100K page size. Use a recent Parquet library to avoid bad statistics issues.  |  
| Statistics  | Use a recent Parquet library to avoid bad statistics issues.  |  
## Using Parquet for Apache Iceberg Tables[​](/developer/data-formats/parquet#using-parquet-for-apache-iceberg-tables "Direct link to Using Parquet for Apache Iceberg Tables")
When writing to Iceberg tables (via [Iceberg DML and OPTIMIZE](/reference/sql/commands/apache-iceberg-tables)), Dremio will honor the values defined in the `write.target-file-size-bytes` and `write.parquet.row-group-size-bytes` Iceberg table properties set when writing to underlying Parquet files.
If no values for `write.target-file-size-bytes` and `write.parquet.row-group-size-bytes` have been set on the table, then Dremio will use the Iceberg default values (512 MB and 128 MB, respectively) when writing to Parquet files.
Note that if you use Dremio to [create an Iceberg table](/reference/sql/commands/create-table), then Dremio will set `write.target-file-size-bytes` to 128 MB, as this is optimal for Dremio's performance.
Was this page helpful?
[Previous Transforming Data on Load](/developer/data-formats/apache-iceberg/copy-into-transformations)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Transforming Data on Load](/developer/data-formats/apache-iceberg/copy-into-transformations)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdeveloper%2Fdata-formats%2Fapache-iceberg%2Fconcurrency%2F&_biz_t=1777950536645&_biz_i=Concurrency%20in%20Iceberg%20Tables%20%7C%20Dremio%20Documentation&_biz_n=415&rnd=888992&cdn_o=a&_biz_z=1777950536695)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdeveloper%2Fdata-formats%2Fparquet%2F&_biz_t=1777950536695&_biz_i=Parquet%20%7C%20Dremio%20Documentation&_biz_n=416&rnd=147543&cdn_o=a&_biz_z=1777950536695)
