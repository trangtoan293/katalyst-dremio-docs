---
url: /developer/data-formats/apache-iceberg/copying-data-into-tables
title: "Copying Data Into Apache Iceberg Tables | Dremio Documentation"
depth: 4
crawled_at: 64776.514703375
---

  * [Dremio Enterprise Home](/)
  * [Developer Guide](/developer)
  * [File and Table Formats](/developer/data-formats)
  * [Apache Iceberg](/developer/data-formats/apache-iceberg)
  * Copying Data Into Apache Iceberg Tables

Version: current [26.x]
On this page
# Copying Data Into Apache Iceberg Tables
You can load data from CSV, JSON, and Parquet files into existing Iceberg tables. The copy operation loads data into columns in the target table that match corresponding columns represented in the data.
Performing analytics at scale on data that is in CSV or JSON files is not ideal. You can get much faster response times for your queries by querying data in Apache Iceberg tables, which use the column-oriented Parquet file format. This format is column-oriented, and supports efficient data storage and data retrieval at very high volumes and concurrencies. Even the performance of queries on Parquet files can be significantly improved upon by loading their data into Iceberg tables. When your data is in Iceberg tables, you can then make use of all of the features in Dremio's support of such tables.
The copy operation is supported on Iceberg tables in the following types of catalogs:
  * AWS Glue Data Catalog
  * Hive Metastore
  * Nessie Catalog


The storage location can be in the following types of object storage:
  * Azure Storage
  * Google Cloud Storage
  * HDFS
  * NAS
  * Amazon S3


The copy operation verifies that at least one column in the target table matches a column represented in the data files. It then follows these rules:
  * If a match is found, the values in the data files are loaded into the column or columns.
  * If additional non-matching columns are present in the data files, the values in these columns are not loaded.
  * If additional non-matching columns are present in the target table, the operation inserts `NULL` values into these columns.
  * If no column in the target table matches any column represented in the data files, the operation fails.


The copy operation ignores case when comparing column names.
To perform this operation, use the `COPY INTO `table`` [SQL command](/reference/sql/commands/apache-iceberg-tables/copy-into-table).
When a copy operation adds new Parquet files to an existing Iceberg table, the operation compresses those files using the codec defined by the `write.parquet.compression-codec` table property. If you have not configured this property, the operation uses the default Zstandard (`zstd`) codec to compress the files. For details, see [Supported Properties of Apache Iceberg Tables](/developer/data-formats/apache-iceberg/table-properties).
## Routing to Specific Queues[​](/developer/data-formats/apache-iceberg/copying-data-into-tables#routing-to-specific-queues "Direct link to Routing to Specific Queues")
You can route jobs that run the `COPY INTO `table`` command to specific queues by using a routing rule that uses the `query_label()` condition. For more information, see [Workload Management](/admin/workloads/workload-management).
## Requirements[​](/developer/data-formats/apache-iceberg/copying-data-into-tables#requirements "Direct link to Requirements")
  * At least one column in the target table must match a column represented in every data file.
  * Do not duplicate column names in files. The operation throws an error if it finds duplicate names.
  * CSV data files must have a header line at the start of the file.


## Type Coercion[​](/developer/data-formats/apache-iceberg/copying-data-into-tables#type-coercion "Direct link to Type Coercion")
For a list of the type coercions used by the copy operation when copying data from CSV and JSON files, see [Type Coercion When Copying Data from CSV or JSON Files Into Apache Iceberg Tables](/reference/sql/data-types/coercions#type-coercion-when-copying-data-from-csv-or-json-files-into-apache-iceberg-tables).
For the type coercions used by the copy operation when copying data from Parquet files, refer to this table: ![Supported and Unsupported Coercions for File-formatted Sources](https://docs.dremio.com/assets/images/table-supported-coercions-b78a45f7e4abe4fb3348514afe2845f8.png)
## Column Nullability Constraints[​](/developer/data-formats/apache-iceberg/copying-data-into-tables#column-nullability-constraints "Direct link to Column Nullability Constraints")
A column's nullability constraint defines whether the column can contain `NULL` values, because you can specify that each column is either:
  * `NULL` — Allows `NULL` values, which is useful for optional or unknown data.
  * `NOT NULL` — Requires a value for every row; `NULL` values are not allowed.


When running `COPY INTO` with `ON_ERROR` set to 'continue' or 'skip_file', the command will not fail on nullability conflicts. Instead, it skips the problematic file or record.
However, if `ON_ERROR` is set to 'abort' (or left unspecified), the command will fail if any row violates the table’s `NOT NULL` constraints.
Was this page helpful?
[Previous Concurrency in Iceberg Tables](/developer/data-formats/apache-iceberg/concurrency)[Next Expiring Snapshots of Apache Iceberg Tables](/developer/data-formats/apache-iceberg/expiring-snapshots)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Concurrency in Iceberg Tables](/developer/data-formats/apache-iceberg/concurrency)[Next Expiring Snapshots of Apache Iceberg Tables](/developer/data-formats/apache-iceberg/expiring-snapshots)
