---
url: /release-notes/version-250-release
slug: /release-notes/version-250-release
title: "25.x Release Notes | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64076.326659
---

  * [Dremio Enterprise Home](/)
  * [Release Notes](/release-notes)
  * 25.x Release Notes

Version: current [26.x]
On this page
# 25.x Release Notes
Releases are listed in reverse order, starting with the latest release of Dremio 25.x.
## 25.2.25 (March 2026)​")
### Improvements and Fixes​
  * Fixed a resource leak in S3 sources when reading multi-file Parquet tables that could cause nodes to crash with out-of-memory errors. 
DX-115436
  * Fixed an issue where the end time of a job was not being persisted under a specific scenario, which could impact any downstream process dependent on a job's completion time. The end time is now consistently recorded. 
DX-115412
  * Improved job status message handling on the results table in the SQL Runner. 
DX-105940
  * Fixed an issue where temporary files created during job profile downloads were not cleaned up, which could lead to disk space exhaustion in high-usage environments. Profile download files are now automatically deleted after the download completes successfully or fails. 
DX-95088
  * Fixed a resource leak where connections to AWS STS were not properly released when using temporary AWS credentials in S3 sources. 
DX-113416
  * Updated `mssql-jdbc` [CVE-2025-59250] to address potential security issues. 
DX-113163
  * Fixed a race condition in MongoDB source metadata caching that caused intermittent "column already exists" or "column not present" errors when rapidly adding and dropping columns on a collection. 
DX-109012
  * Fixed a race condition in RocksDB that could cause Java virtual machine (JVM) crashes when iterator access raced with a delete operation. 
DX-113228
  * Resolved an issue that could lead to a Dremio process abort during query execution. 
DX-100619
  * Fixed an issue where CTAS incorrectly wrote v1 manifest files in Apache Iceberg v2 tables, causing format version inconsistencies. 
DX-115585
  * Fixed an issue where the `total-file-size` field in Iceberg table metadata was incorrectly set to zero, which could cause compatibility issues with external tools like Databricks. 
DX-112784
  * Fixed an issue with long planning times and SQL commands with many joins. This problems occurs despite planner statistics being disabled. 
DX-116947
  * Fixed an intermittent issue where query results could be corrupted during join operations when the build side contained a `STRUCT` data type. 
DX-115467
  * Fixed an intermittent issue where query results could be corrupted when a hash join involved columns with `LIST` or `MAP` data types. 
DX-115281
  * Fixed an issue where an `IllegalArgumentException` could be thrown when processing datasets containing `LIST` of `LIST` with `NULL` values. 
DX-115221
  * Fixed an issue where queries with large, complex `WHERE` clauses containing many nested conditions could hang indefinitely during planning and could not be canceled. 
DX-112873
  * Fixed an issue during `REFRESH DATASET` operations caused by concurrent access to internal statistics maps. 
DX-116438
  * Removed `COLLATE LATIN1_GENERAL_BIN2` being added to literals in Microsoft SQL Server sources, which could cause incorrect pushdown behavior when the code page standard differed from the source default. 
DX-91868
  * Fixed an issue where users with non-US English keyboard layouts (such as German) were unable to comment or uncomment lines in the SQL editor. A new keyboard shortcut has been added: **Ctrl+Alt+C** (Windows) or **Cmd+Option+C** (Mac). 
DX-101147
  * Fixed a bug where inline metadata refresh queries could cause all coordinator queries to stall indefinitely during planning. 
DX-114871
  * Fixed memory alignment issues that could cause intermittent crashes during query execution. 
DX-113970
  * Fixed a leak on coordinator nodes where memory was accumulating outside the heap memory. 
DX-99713


## 25.2.24 (February 2026) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed an issue where extra entries could be created in Hive sources if an extra space was erroneously included in the table path during a metadata refresh. 
DX-112914
  * Improved cleanup of old jobs by the background jobs cleaner and the `dremio-admin` CLI clean command. 
DX-112302


#### API​
  * Fixed an issue where the `GET /api/v3/job/{id}/results` endpoint could fail with deserialization errors for result files larger than 2 GB. 
DX-110160


#### SQL​
  * Fixed an issue where Parquet filter pushdown incorrectly dropped negative and zero values when converting `DOUBLE` filters to `FLOAT`, causing silent incorrect query results. 
DX-113966
  * Fixed an issue where the `ARRAY_TO_STRING` function on `MAP` and `STRUCT` data types threw an `IllegalArgumentException`. 
DX-113949
  * Resolved an issue where the hash join operator could produce extra rows in `RIGHT` and `FULL` joins when spilling occurred during the probe phase. The operator now avoids spilling during probe for these join types, preventing previously matched rows from being incorrectly emitted as unmatched. 
DX-113795


## 25.2.23 (January 2026) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed a reference-counting bug that caused `S3AsyncClient` instances not to be properly closed and the resources they owned not to be properly released. Fixed a synchronization bug in internal reference-counting wrapper classes. 
DX-101300
  * Fixed a C3 cache eviction issue that prevented older entries from being removed. 
DX-100570


#### SQL​
  * Fixed an issue where queries on complex data types (structs, lists, and unions) could return `NULL` values. 
DX-113610
  * Fixed an issue where queries on Parquet files with nested struct fields containing dots in their names would fail with an `IllegalStateException` in Dremio’s vectorized Parquet file reader. 
DX-113492


## 25.2.22 (January 2026) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed an issue where S3 connections using an HTTP proxy could ignore the proxy or use the wrong scheme/port due to incorrect proxy SSL configuration handling. 
DX-106030
  * Fixed support for querying legacy indexes from versions 6 and 7 in Elasticsearch 9. 
DX-112491
  * Improved error handling when cleaning up jobs. 
DX-95516
  * Fixed a rare issue where certain completed jobs were not cleaned up. 
DX-97429
  * Fixed a `NullPointerException` (NPE) that caused the cleanup of results to fail for some jobs. This issue also prevented some abandoned jobs from being terminated. 
DX-99736, DX-104173


#### SQL​
  * Queries with too many expressions in `WHERE` clauses or `CASE` statements now return a clear error message instead of failing unexpectedly. 
DX-62938
  * Improved the performance of queries with `IS NULL` and `IS NOT NULL` filters by pruning Iceberg metadata and data files. 
DX-111734
  * Fixed the `SUBSTR(string_expression varchar, pattern varchar) → varchar` function so that the behavior matches the [`SUBSTR`](/reference/sql/sql-functions) documentation. Now `SUBSTRING(string_expression varchar, pattern varchar) → varchar` function has a clearer error message that it is not supported. 
DX-105174
  * Fixed an issue where the presence of multiple `LEAD` functions partitioned on the same columns could lead to incorrect results. 
DX-111114
  * Fixed a compilation error in Snowflake sources when using `ILIKE` function with an escape character. 
DX-109787
  * Fixed unexpected errors from the `LISTAGG` function. 
DX-96761
  * Fixed an issue to preserve sort ordering when row-access and column-masking policies are present. 
DX-111686


## 25.2.21 (December 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed a 400 error that could occur when using range operators in Elasticsearch 9. 
DX-111844
  * Key-pair authentication on Snowflake sources now supports custom connection properties. 
DX-111644


#### SQL​
  * Fixed an issue with runtime filters on `DECIMAL` columns incorrectly filtering out values. 
DX-111953
  * Fixed an issue where filters on `VARBINARY` columns could produce inconsistent results. 
DX-101663
  * Fixed an instance of Dremio process abort when complex data type columns are involved in a hash join query. 
DX-89072
  * Fixed an issue where the position delete files for Apache Iceberg v2 tables were not sorted by 'file_path' and 'pos' during merge-on-read `DELETE` operations on tables with an Iceberg-defined sort order. 
DX-111304
  * Fixed an issue where a false condition with aggregate functions was returning non-empty results. 
DX-110651


## 25.2.20 (October 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Improved upgrade performance when many Reflections or infinite split metadata entries are present.
DX-109388
  * Elastic plugin now supports Elasticsearch versions 8 and 9 in version 7 compatibility mode. New features from versions 8 and 9 are not supported. 
DX-106873
  * Fixed an issue where dataset operations could fail with a `NullPointerException` error when retrieving Iceberg file information. 
DX-105108
  * Fixed an issue where user-defined function names and IDs were missing from `audit.json` files. 
DX-105030
  * Resolved an issue where certain queries that qualified for a hash join were incorrectly executed using a nested loop join. 
DX-97727


#### APP​
  * Added a **Reset filters** button to the Jobs page, allowing users to reset the filters back to default. 
DX-109977


#### SQL​
  * Fixed an issue where downloading query results were not respecting the `ORDER BY` clause in the original SQL, and downloaded results were out of order. You will now be able to download query results, in order, if your original SQL preserves the ordering.
DX-102107
  * Fixed an issue where `MERGE INTO` queries could unexpectedly remove records from an Iceberg table if the source table was backed by a JDBC source. 
DX-106895
  * Fixed a issue where queries with a `SORT` operator took too long to successfully cancel. 
DX-105511


## 25.2.19 (October 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Improved query results cleanup in PDFS for queries that run on executors by reducing unnecessary network calls. 
DX-106968
  * Eliminated a PDFS broadcast storm from the coordinators to all executors when executing queries such as `ALTER TABLE... REFRESH DATASET` if the query results were stored in PDFS. This enhancement particularly benefits enterprise environments with multiple query execution engines running frequent `ALTER` operations. 
DX-106936
  * Added the following metadata fields for Workload Management (WLM): `rule_name`, `rule_content` and `rule_action` to `queries.json`, `sys.jobs`, and `sys.jobs_recent`. 
DX-108263
  * Updated the following library to address potential security issues:
    * Jetty to 9.4.57 
DX-104605


## 25.2.18 (August 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Resolved an issue where queries could hang indefinitely when writing to the results cache on S3-backed storage. Added configurable timeouts to S3 operations to allow queries to be cancelled properly. 
DX-106679
  * Fixed an issue with the MongoDB plugin where, when Dremio starts up and is unable to reach a previously configured MongoDB source, a connection resource leak would oftentimes lead to high resource usage. 
DX-107034
  * Fixed a bug where window functions like `AVG` and `STDDEV_POP` were returning indeterminate results. 
DX-105597
  * Fixed a performance regression seen in ranking window functions. 
DX-105693


#### APP​
  * Fixed an issue where a user with a non-US English keyboard layout couldn't comment in/out a line of code in the SQL editor. A new keyboard shortcut has been added: **Ctrl+Alt+C** (Windows) or **Cmd+Option+C** (Mac). 
DX-101147


## 25.2.17 (August 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed an issue with the JDBC driver, where queries returned incorrect values for column type precision and scale. 
DX-106400
  * Fixed an issue with the JDBC driver, where queries with zero rows with null columns failed with a `NullPointerException`. 
DX-104076


## 25.2.16 (July 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed an issue in `IcebergDeleteFileAggTableFunction` that caused `equalityId`'s to be `null`, resulting in failures when tables included both position and equality deletes. The function now correctly handles mixed delete file types. 
DX-106012
  * Fixed a rare issue where a connection closes due to network flakiness in the middle of a query execution, and if the close connection event comes after the open connection event on a given executor, the executing query can become blocked (until the executor restarts) instead of raising an error due to the connection failure. Queries will now fail with the correct error message instead of becoming blocked. 
DX-105091
  * Fixed an issue where, after restoring a backup, new backups would fail with a checksum error. 
DX-102352
  * The [results cache](/acceleration) is now turned off by default. 
DX-103702
  * Fixed memory buffer and decimal scale issues between MongoRecordReader and BsonReader that were causing validation errors and infinite loops. 
DX-102712
  * Fixed an issue when a query could not be cancelled under heavy cluster load when the housekeeping thread responsible for handling read task timeouts became unresponsive due to thread starvation. 
DX-105512
  * Fixed an issue where queries would fail with the error `Unable to coerce from the file's data type "null" to the column's data type` when reading MongoDB collections if schema discovery was disabled and fields containing empty arrays were found. 
DX-105466
  * Fixed a race condition between spilling during memory pressure and writing a [Parquet file](/developer/data-formats/parquet), which led to an `IndexOutOfBoundsException`. 
DX-101016
  * Fixed a `NullPointerException` (NPE) encountered in reading [Delta Lake](/developer/data-formats/delta-lake) tables without column mappings that had undergone schema evolution. The NPE occurred when selecting an array column's element using an index. For example, `[0]` or alike. 
DX-105935
  * Fixed a `NullPointerException` that could occur when querying a table in [AWS Glue Data Catalog](/data-sources/lakehouse-catalogs/aws-glue-catalog) with an empty `SerDeInfo` field. 
DX-106113
  * Added schema filtering to [Amazon Redshift](/data-sources/databases/redshift) to reduce unnecessary metadata queries and improve performance due to Redshift connection limitations. 
DX-99422
  * Improved the Dremio engine to handle a large number of expressions efficiently. 
DX-34931


#### APP​
  * Improved the responsiveness of the query cancellation, even in cases of queries with a large number of expressions. 
DX-105803
  * Fixed an issue that caused the Dremio console to become unresponsive. 
DX-104748
  * Fixed the tooltips shown when hovering over errors in the SQL editor to have a similar appearance to other tooltips in the Dremio console. 
DX-58337


## 25.2.15 (June 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed an issue for scripts created through the Dremio API so that they don't have their content overwritten when opened in the SQL editor. 
DX-104226


#### APP​
  * Fixed an issue where the query duration timer would continue ticking after a query was completed. 
DX-105185
  * Fixed an issue where users couldn't use the sidebar navigation when on the old version of the Job Details page. 
DX-101394


#### SQL​
  * Added a `DRY RUN` mode to `VACUUM CATALOG`, which will be able to identify the files to be deleted without taking any action. 
DX-105120
  * Fixed an issue that dramatically slowed down Data Manipulation Language (DML) queries that contained both a target and source table. 
DX-105365
  * Fixed issue when casting a `DECIMAL` from `VARCHAR` where, in some cases, caused a SIGSEGV error if the value was not a number. 
DX-97570


## 25.2.14 (June 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Reduced the frequency of status checks for certain source types. 
DX-105266
  * Timeout for source health checks is now configurable. 
DX-102156
  * Fixed a rare issue with Iceberg Data Manipulation Language (DML) queries writing null results on some rows that shouldn't, which happened with DML statements that contained a target and source table. This issue occurred on either Merge on Read (MoR) or Copy on Write (CoW) DMLs configurations. 
DX-105013
  * Removed the `NOLOCK` statement from the query responsible for loading tables so external tables can be shown in Azure Synapse sources. 
DX-104652
  * Fixed issues related to the `READ METADATA` privilege so that it follows the correct privilege inheritance chain as documented in [Privileges](/security/rbac/privileges). 
DX-104406
  * Fixed an issue where queries were not being canceled after a coordinator restart, causing them to remain stuck. 
DX-104173
  * Fixed an issue where Dremio incorrectly applied equality deletes on Iceberg tables, which caused incomplete results to be returned. 
DX-104150
  * Fixed an issue with metadata refresh when promoting a table with **Ignore other file formats** enabled in [Formatting a File or Folder as a Table](/developer/data-formats/table). 
DX-103973
  * Added the `delete-source` command to the `dremio-admin` CLI to delete a source. 
DX-102752
  * Reduced unnecessary computation by tuning the target file sizes for the internal `OPTIMIZE` jobs that run against Reflections. 
DX-102747
  * Fixed a pivoted buffer overrun with a join query that caused the Dremio daemon process to abort. 
DX-101154
  * Reduced the coordinator heap usage for planning queries with Reflections anchored on complex views. 
DX-98021
  * Fixed an issue with a refresh query failing with "Query was cancelled because it exceeded the memory limits set by the administrator." 
DX-97947


#### APP​
  * Fixed an issue with the execution of multiple queries when the `sqlrunner.tabs_ui` setting was disabled, which caused only the first query to be executed, and the subsequent queries were not executed. 
DX-104388
  * Prevented saving views with duplicate column names (for example, `SELECT 1 AS col, 2 AS col`) with a validation error to ensure that views will not fail when used in downstream queries (for example, `SELECT * FROM `view``). 
DX-100977
  * Improved the error message to be clear when there is a cycle in a view. 
DX-89182


#### SQL​
  * Fixed an issue that caused certain queries to fail when the `HASH_JOIN` operator spilled to disk and triggered an `IndexOutOfBoundsException`. 
DX-104899
  * Fixed user-defined functions with a null full path to have a valid full path. 
DX-104745


## 25.2.12 (May 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed a memory leak on the coordinator when queries using Arrow Flight are canceled. 
DX-102833


## 25.2.11 (May 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed an issue where duplicate upstream refreshes could happen when refreshing a Reflection that scans the upstream table multiple times. 
DX-102260
  * Fixed an issue where Reflections based on views containing deeply nested expressions might not be able to be used even if the refresh job succeeded. 
DX-93284
  * Fixed an issue where some Reflections were not accelerating SQL client queries but were accelerating Dremio UI queries. 
DX-97572
  * Fixed an array index out-of-bound issue with query planning for views that do not project `ORDER BY` columns. 
DX-99095
  * Previously, users couldn't create a new tab because they had hidden/orphaned up to 1000 scripts. Users should now be able to add tabs as expected and not have hidden/orphaned unsaved scripts. 
DX-103534
  * Fixed an issue that caused the execution of a script to fail with the "No queries found" error when the user has the `VIEW` privilege. 
DX-102553
  * Fixed the issue where large case expressions were causing the planner to hang. 
DX-101299


#### SQL​
  * Fixed an issue with `REFRESH METADATA FOR PARTITIONS` for transactional Hive tables. 
DX-102376
  * Fixed an issue where queries against tables with equality deletes could fail if the fields used in the deletes had capital letters. 
DX-103866
  * Fixed an issue where a query containing `ORDER BY ... LIMIT ...` failed when using more than 500 million in the `LIMIT` clause. 
DX-103907
  * Fixed an issue where tables with the same name in different folders would throw an error when added to the include / exclude list for `VACUUM CATALOG` queries. 
DX-103559
  * Fixed an issue related to `CREATE TABLE AS SELECT` statements for Parquet datasets with the error message "Multiple entries with same key: $file=$file: Utf8 and $file=$file: Utf8". 
DX-104033


## 25.2.10 (May 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Resolved an issue with row count estimates in Delta Lake tables that could lead to suboptimal query plans. 
DX-103030
  * Fixed a `NullPointerException` (NPE) with handling of unset engine name field that can sometimes leave jobs in a non-terminal state after a coordinator restart. 
DX-101519
  * Fixed an `IllegalStateException` for certain queries with rollup aggregations. 
DX-101395
  * Fixed an issue where an `OversizedAllocationException` could occur for collections of variable-length values due to unnecessary data buffer reallocations. 
DX-103035
  * Removed a schema parameter from the Snowflake source definition. 
DX-100555
  * Fixed time travel on Unity and Snowflake Catalogs by resolving timestamp-based requests via updated snapshot provider logic. 
DX-98200
  * Fixed an issue that could cause Gandiva-related crashes due to stack space corruption. 
DX-90468


#### SQL​
  * Fixed an issue that could cause a NPE when querying `INFORMATION_SCHEMA.SCHEMATA`. 
DX-103489
  * Fixed an issue in the `VACUUM CATALOG` SQL command where live manifest files with the s3a scheme were incorrectly deleted. 
DX-103051
  * Fixed an issue where adding more than one item to the `EXCLUDE` list, without specifying the reference, for the `VACUUM CATALOG` SQL command would show a syntax error in the Dremio console. 
DX-102938
  * Added an option to whitelist tables for the `VACUUM CATALOG` SQL command using the `INCLUDE` option. 
DX-102711


## 25.2.9 (April 2025) Enterprise​
### Improvements and Issues Fixed​
#### SQL​
  * Resolved an issue when using `LEAD` or `LAG` SQL functions with an `OFFSET` parameter (offset 1 as well as offset 2+) that could cause incorrect results. 
DX-102591


## 25.2.8 (April 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * "Failed to open file" error messages for Iceberg now reference an input file by the file path's location instead of the object ID. 
DX-102345
  * Fixed an issue that could occur during the execution of very large queries, where Dremio log files would grow rapidly and eventually lead to "disk full" situations. 
DX-102345
  * Join keys over 128 KB are now handled correctly. 
DX-99636
  * Fixed an issue where a query could fail with a `NoSuchElementException` error. 
DX-101821
  * Improved error message handling for missing manifest files when reading Iceberg tables. 
DX-92081
  * CVE-2025-30065 has been fixed by backporting the related fix from the Apache parquet-java project to Dremio's internal fork and using this latest build in the Dremio release. 
DX-102461


#### APP​
  * Fixed an issue in which the **Save as** option for views returned an error when the dataset version history for the view had been corrupted. 
DX-101506


#### SQL​
  * Improved support for displaying query results containing `ARRAY<MAP<string,string>>` complex types in the Dremio console. Rewrote the `View.getField` to correctly handle nested types, ensuring accurate representation of complex schemas. 
DX-92117


## 25.2.7 (April 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed a sporadic issue where a Reflection was not used immediately after refresh. Improved performance of Reflection management so that materializations are available for use sooner. Added additional Reflection debug logging for support. 
DX-97572
  * Fixed a defect where we could get wrong data in a Reflection when an extremely large amount of data files are present. 
DX-101552
  * Reduced the jobs metadata size by no longer persisting the Reflection matching plans into `REFRESH REFLECTION` jobs. 
DX-98022
  * Queries now scan only the required fields from complex structure type columns to prevent errors in query execution. 
DX-93643
  * Updated the Dremio HTTP endpoints to respond with a `405 Method Not Allowed` error when handling unexpected HTTP methods. While these methods are typically reserved for internal debugging and diagnostics, this change helps strengthen security by preventing potential misuse by those attempting to exploit the web server. 
DX-97052


#### APP​
  * Fixed an issue in which loading the Catalog Usage tab on the Monitoring page could lead to high heap memory usage and potentially cause the coordinator to restart. 
DX-101919


#### SQL​
  * Addressed an issue where the `NESTED_LOOP_JOIN` operator produced incorrect results in certain cases when used with a `HASH_JOIN` or a `PROJECT` operator containing a computed column. 
DX-97524
  * Fixed an issue where the `LEAD()` function returned incorrect values for the last row in a partition, where `NULL` was expected. 
DX-102071


## 25.2.6 (March 2025)​")
### Improvements and Issues Fixed​
#### General Updates​
  * Reduced noise in the logs generated when reading data from Parquet files by changing the log level of certain messages from `WARNING` to `DEBUG`. 
DX-101258
  * Changed automated backup not to reuse a backup destination folder. On every backup, a new folder with the pattern ``distStore`/backups/dremio_backup_`timestamp`-`dremio_version`` is now created. 
DX-95898


#### SQL​
  * Fixed an issue that could cause a `CompileException` error when using a large number of columns in a ` ORDER BY` clause. 
DX-99689


## 25.2.5 (March 2025)​")
### What's New​
#### APP​
  * Added a new **Rerun query on download** option to the Preferences page in the Dremio console. When enabled, Dremio reruns the query before downloading the results. 
DX-101308


### Improvements and Issues Fixed​
#### General Updates​
  * Re-added a compatibility layer for older indices. 
DX-101257


#### SQL​
  * Fixed a bug where queries using `ROW` types may fail with the error "DremioSqlValidator is a dummy SqlValidator to adapt to upstream API changes". 
DX-100331


## 25.2.4 (March 2025)​")
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed an issue where query phase timeouts would not impact Reflection matching. 
DX-98080
  * Fixed an issue that could cause an "Unable to find the reference field" error during query planning due to Common Subexpression Elimination (CSE). 
DX-90660
  * Adjusted metadata collection methods to reduce the load of queries to a MongoDB instance. 
DX-85654
  * Fixed an issue that could cause higher resource utilization on the coordinators due to the incorrect scheduling of a background task that deletes old jobs. 
DX-95235
  * Fixed an issue that could occur when a routing rule with a `query_label()` condition would not work as expected for queries triggered using Arrow Flight client applications. 
DX-99808
  * Fixed an issue where merge-on-read DML operations could fail on Apache Iceberg tables with partition transforms. 
DX-99569
  * Fixed an issue where high setup times could be seen when running queries against Iceberg tables. 
DX-100856
  * Fixed an issue where the snapshot ID for a table could stop refreshing and cause a Reflection to continuously refresh. 
DX-99311
  * Fixed an issue where queries utilizing Reflections could fail or reference stale materializations. 
DX-100896
  * Removed a `batch` label from the `coordinator.userRpc.time` metric to reduce the cardinality of buckets being created and prevent overloading of the metrics database. 
DX-96739
  * Updated the following libraries to address potential security issues:
    * AsyncHttpClient to 3.0.1 [CVE-2024-53990] 
DX-98578
    * Elasticsearch client library to 8.14.2 and removed support for Elasticsearch clusters of old versions before 7 
DX-100797
  * Updated the Snowflake driver to 3.19.0 to resolve 
DX-92315


#### SQL​
  * Resolved an issue with job state inconsistencies where CTAS jobs remained stuck in a running state and could not be canceled properly.
DX-96997
  * Fixed an issue that could cause [`VACCUM CATALOG`](/reference/sql/commands/nessie/vacuum-catalog) to use synchronous readers for metadata JSON files, which might cause memory leak issues. Now `VACUUM CATALOG` uses asynchronous readers instead. 
DX-98605
  * Fixed a nested [user-defined function](/reference/sql/commands/functions) issue where a UDF was unable to call other UDFs. 
DX-95612
  * Fixed an issue where a schema error could be thrown if a user ran an [`INSERT`](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-insert) SQL command with a subset of the columns in an Iceberg table. 
DX-92442
  * Fixed the [`PARSE_URL`](/reference/sql/sql-functions) SQL function to handle URLs longer than 256 characters. 
DX-100691
  * Fixed an issue that could occur with class compilation when using a literal value in a [window function](/reference/sql/sql-functions). 
DX-100466
  * Resolved an issue for [`SELECT`](/reference/sql/commands) queries when using the [`LAG`](/reference/sql/sql-functions) SQL function with an `OFFSET` parameter that could cause incorrect results. 
DX-99536
  * Fixed a stack overflow issue with queries containing a long list of constants in a `WHERE IN` clause. 
DX-98414


## 25.2.3 (January 2025)​")
### Improvements and Issues Fixed​
#### General Updates​
  * Better handling of personal access tokens for deactivated users on an identity provider. 
DX-96754
  * Fixed an issue that could prevent the retry policy for Reflection refreshes from working in all cases. 
DX-99314
  * Updated the following libraries to address potential security issues:
    * Aircompressor from 0.10 to 0.27 [CVE-2024-36114]
DX-96853
    * Apache Avro library [CVE-2024-47561] 
DX-99132
  * Fixed a memory leak issue during table scans that could lead to a query abort. 
DX-98634


#### SQL​
  * Fixed an issue that could cause a query with a `LIMIT` clause to not be accelerated due to miscalculated row adjustments. 
DX-96246
  * Fixed an issue that could cause `VACCUM CATALOG` to use synchronous readers for metadata JSON files, which might cause memory leak issues. Now `VACUUM CATALOG` uses asynchronous readers instead. 
DX-98605


## 25.2.2 (December 2024)​")
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed an issue with a permanent query slot loss in multi-coordinator setups that could gradually lose query concurrency slots on Workload Management (WLM) queues at very high loads when a client application pushes more queries to a particular WLM queue than the configured concurrency, causing the client application to time out and close its connection. Before the fix, restarting the coordinators was the only way to fix this issue. 
DX-98355
  * Fixed an issue that could cause garbage collection logs to not be accessible. 
DX-98240
  * Enabled Reflections for cases when there is an equivalent row and column access control (RCAC) filter on all children of a view that is the union of two or more datasets. 
DX-95563
  * Fixed an issue that could cause a `REFRESH REFLECTION` job to not pull new data for an external query, causing stale data to be returned when using the Reflection. 
DX-98107
  * Fixed an issue where `Reflection REFRESH` jobs could fail for Reflections involving joins in the query plan if field-based incremental refresh was configured on the underlying datasets. These Reflection refreshes will now succeed using full refreshes. 
DX-97085
  * Fixed an issue that could cause reading tables from the AWS Glue Data Catalog to be slow. 
DX-96290
  * Disabled all TRACE web requests, which now return `405(NOT_ALLOWED)` error codes. 
DX-97052


#### API​
  * Fixed an issue that could prevent admin users from updating a script owner's privileges via the Scripts API. 
DX-97879


#### APP​
  * Fixed an issue that could cause the SQL Runner to display the view definition of the last executed preview instead of the saved view definition. 
DX-96707


#### SQL​
  * You can now exclude specific tables directly in the catalog source when running the [`VACUUM CATALOG`](/reference/sql/commands/nessie/vacuum-catalog) SQL command. 
DX-96734
  * Fixed a NullPointerException (NPE) when querying the same table using different quoted identifiers. 
DX-98253
  * Fixed an issue that could cause `ALTER TABLE` to fail with a "Schema change detected" error when using the SQL command to drop and re-add a column with an incompatible type. Reporting has also improved for any instance where data cannot be coerced to the user-defined column type. 
DX-87232
  * Fixed an issue that could return a `null` value for a `SELECT` query on a column when schema learning is disabled and the column type is incompatible with the column values. When the table schema is inconsistent with the data, an error will now be reported to recommend that you enable schema learning so Dremio can properly manage the schema based on the data. 
DX-88577
  * `LIMIT` and `OFFSET` cannot exceed the maximum integer value. The query is gracefully blocked if the sum (or individual values) of `LIMIT` and `OFFSET` exceeds maximum value for a signed integer. 
DX-97963, DX-18632
  * Updated the `VACUUM CATALOG` SQL command to allow table exclusion. 
DX-97940
  * Fixed an issue in some cases that could prevent runtime filtering if the `CONVERT_FROM` SQL function was used in the query. 
DX-93179
  * Added a new SQL function `TRY_CONVERT_FROM` to support converting a JSON to a user-specified type. `NULL` is returned when the JSON cannot be converted. 
DX-94338
  * Fixed an issue in some cases where filters on the date column with `COALESCE` were preventing the partition filter from being pushed down. 
DX-97665
  * Fixed an issue that could cause an OutOfMemoryException(OOM) to be ignored in a `HASH_JOIN` operator, which is now explicitly thrown to prevent unexpected behavior with the `HASH_JOIN`. 
DX-94029
  * Removed unsupported pushdown operations with `VARCHAR` data types from PostgreSQL advanced relational pushdown (ARP) connectors. 
DX-98093
  * Fixed an issue where certain filters were not pushed down to table scans for Unity Catalog and Polaris (Preview) Catalog sources. 
DX-98653


## 25.2.1 (November 2024)​")
### Improvements and Issues Fixed​
#### General Updates​
  * Older user-defined functions may store a null full path, which could cause a NullPointerException (NPE). We've mitigated the issue by preventing the NPE and logging a warning. 
DX-97341
  * Updated the following library to address potential security issues:
    * Avro from 1.11.3 to 1.11.4 within Dremio's packaged version of Hive [CVE-2024-47561] 
DX-96442
  * Improved query performance for queries creating self joins with row policies by adding an option to disable value generation during query decorrelation. 
DX-97370
  * Improved filter pushdown phase timing for queries with too many union clauses. 
DX-96563
  * Added the ability to set the Azure Client ID that Dremio should use for Azure Key Vault requests to disambiguate between multiple Azure user-assigned managed identities on Azure VMs or AKS deployments. 
DX-94967
  * Fixed an issue where a duplicated table schema could be written to its metadata file. 
DX-97502


#### APP​
  * Changed dataset owners now correctly appear in the Details panel. 
DX-97037
  * Fixed an issue that could cause the Appearance tab not to appear on the Account Settings page. 
DX-97330
  * Fixed an issue that could prevent users from being able to run or preview a query in the SQL Runner after viewing the History tab for the query on the Datasets page. 
DX-96139
  * Navigating to the wiki of a dataset from the SQL Runner will no longer cause **(edited)** to appear next to the dataset name. 
DX-96470


#### SQL​
  * Fixed an issue with the ASCII function that could return an incorrect sign for values greater than 127 on Graviton. 
DX-90311
  * You can now use columns with a `VARCHAR` data type in a `SELECT` subquery of a `SELECT` statement. 
DX-83189
  * Fixed a rare issue where decorrelating a subquery with an `EXISTS` statement and an empty `GROUP BY` clause could result in incorrect data. 
DX-96652, DX-96946
  * Fixed an issue where `CLUSTER` and `CLUSTERING` were accidentally added as reserved keywords. They are no longer treated as reserved. 
DX-97918


## 25.2.0 (October 2024)​")
### What's New​
  * Dremio can connect to Databricks [Unity Catalog](/data-sources/lakehouse-catalogs/unity) service as a source and read Delta Lake Universal Format (UniForm) tables. Unity Catalog is a unified and open governance solution for data and AI that provides centralized access control, auditing, lineage, and data discovery capabilities across workspaces. 
DX-92614
  * Dremio can connect to Snowflake's [Polaris Catalog](/data-sources/lakehouse-catalogs/iceberg-rest-catalog) service as a source for Apache Iceberg tables. Polaris Catalog is built on top of open community-run standards and integrates seamlessly with Apache Iceberg to enhance metadata management, cataloging, and governance. 
DX-93402
  * You can now connect to [Vertica](/data-sources/databases/vertica) as a source in Dremio. Designed for scalability and efficiency, Vertica is a database that delivers unified analytics while enabling lower costs and minimizing server requirements. 
DX-45154


  * Dark Mode is now available in Dremio! You can now choose between light mode, dark mode, or system settings. Try it out by going to **Account Settings** &gt; **Appearance**. 
DX-93591
  * [Managed access spaces](/security/rbac) centralize the administration of access privileges in shared spaces to a limited sets of users and roles, including the space owner. By limiting privilege grant authority, managed access spaces help ensure consistent and controlled access policies and reduce the risk of unauthorized access. 
DX-91614


### Improvements and Issues Fixed​
#### General Updates​
  * Fixed an issue where queries could be stuck in planning and accumulate until a coordinator restart is required. 
DX-94146
  * Added an option to specify a list of allowed namespaces in Iceberg REST based sources. Whether or not to include the whole subtree of namespaces under such a specified namespace can be toggled with a checkbox on the Source Settings page. Namespace separator regex sequence can be adjusted by the `plugins.restcatalog.allowed.ns.separator` support option (by default it's a dot character). 
DX-91768, DX-93527
  * Reduced coordinator memory footprint due to interim query telemetry updates, thereby improving reliability. There will be a slight increase (~2MB per query) in transient disk space as these interim updates are now stored on disk. This additional storage space will be freed once the query finishes. 
DX-90141
  * Fixed an issue that could prevent async Azure reads due to a time zone issue in locations east from Greenwich Mean Time (GMT). 
DX-93739
  * Reduced internal page size to minimize heap pressure while handling multiple jobs for system table requests parallelly. 
DX-96686
  * Fixed an issue that could prevent users from seeing files that were deeply nested because their access was denied. 
DX-96147
  * Updated the following libraries to address potential security issues: Ranger client in Dremio was upgraded from version 1.1 to 1.2. 
DX-93529
  * Fixed an issue with Helm charts that could cause partial logging to be created when setting `writeLogsToFile` to `true`. 
DX-96480
  * Resolved an inconsistency with environment variables in Helm charts. 
DX-96410
  * Incompatible runtime filters are now ignored so as to avoid an `UnsupportedOperationException` while setting up Parquet readers. 
DX-90910


#### APP​
  * Added a Software License and Service Agreement page as part of the Dremio login process. 
DX-93796
  * You can now open the Details Panel from the options menu on the Datasets page. 
DX-94365
  * On the Datasets page, using **Group By** to measure **Variance** now works as expected to generate SQL. 
DX-43387
  * Dremio will now notify you when a view's metadata is out-of-date due to schema changes in the underlying views or tables. The notification will appear on the Data panel in the SQL Runner and in the Details and Lineage tabs on the Datasets page. 
DX-90209
  * Creating a new tab while a script is executing will now cause a confirmation dialog to appear in the SQL Runner. 
DX-95364
  * Fixed an issue that prevented non-admin users from saving a view when using the Save as View button in the SQL Runner. 
DX-96278
  * Fixed an issue that could cause query results to appear in a new tab when cached results are loading in the SQL Runner. 
DX-95354
  * The Visual Profile tab on the Jobs page will now show the correct error message when a visual profile cannot be generated. 
DX-94991, DX-95237
  * Fixed an issue where certain jobs with a Reflection do not have a creation time present. 
DX-96664
  * When hovering over the tooltip for a Reflection score on the Reflections page, the daily query accelerated value will be rounded to the nearest integer. 
DX-94803


#### SQL​
  * Fixed an issue that could occur when complex types are returned when splitting a function such as ARRAY_COMPACT. 
DX-94387
  * Fixed an issue with the ASCII function that could return an incorrect sign for values greater than 127 on Graviton. 
DX-90311
  * Added null handling logic for SUBSTRING and REGEXP_LIKE functions. If one of the arguments is NULL, the function will return NULL. 
DX-94388
  * Fixed an issue where IN queries with NULL could lead to a type mismatch exception. 
DX-84660
  * Fixed a NullPointerException (NPE) that could cause VACUUM jobs for Reflections to fail. 
DX-96262
  * A new vacuum log file will now capture detailed information about scanning and deletion through VACUUM commands. 
DX-94493


### Known Issues​
  * These terms were accidentally added to the list of reserved keywords: `CLUSTER` and `CLUSTERING`. 
DX-88785


## 25.1.11 (May 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed a memory leak on the coordinator when queries using Arrow Flight are canceled. 
DX-102833
  * Resolved an issue with row count estimates in Delta Lake tables that could lead to suboptimal query plans. 
DX-103030
  * Fixed an issue related to (background) metadata refresh so that it does not remove shared folders from Dremio’s object store even if they don’t have child datasets. It also does not remove stale folders if the “Remove dataset definitions if underlying data is unavailable” setting is toggled off, i.e., it does not remove stale datasets from Dremio’s object store. 
DX-98837
  * Timeout for source health checks is now configurable. 
DX-103689


#### APP​
  * When saving an existing view into a new view (Save as View), the owner used to be the owner of the existing view. This fix changed the owner to be the user who created the new view. 
DX-102562


## 25.1.10 (April 2025)​")
### Improvements and Issues Fixed​
#### General Updates​
  * Improved error message handling for missing manifest files when reading Iceberg tables. 
DX-92081
  * CVE-2025-30065 has been fixed by backporting the related fix from the Apache parquet-java project to Dremio's internal fork and using this latest build in the Dremio release. 
DX-102461


## 25.1.9 (March 2025)​")
### Improvements and Issues Fixed​
#### General Updates​
  * Reduced noise in the logs generated when reading data from Parquet files by changing the log level of certain messages from `WARNING` to `DEBUG`. 
DX-101258
  * Fixed an issue where high setup times could be seen when running queries against Iceberg tables. 
DX-100856


#### APP​
  * Fixed an issue in which the **Save as** option for views returned an error when the dataset version history for the view had been corrupted. 
DX-101506
  * Fixed an issue on the Jobs page where some jobs with Reflections are shown without creation times. 
DX-96664
  * Added a new **Rerun query on download** option to the Preferences page in the Dremio console. When enabled, Dremio reruns the query before downloading the results. 
DX-101308
  * Fixed an issue that prevented users from removing tables in their home space that were created by uploading files. 
DX-101969


#### SQL​
  * Resolved an issue with job state inconsistencies where CTAS jobs remained stuck in a running state and could not be canceled properly.
DX-99699, DX-96997
  * Started using system tables to retrieve tables sizes for Snowflake sources, instead of running `COUNT(*)` on each table, to resolve an issue with incorrect row count estimates. 
DX-87198


## 25.1.8 (February 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Enhanced the `flight.client.readiness.timeout.millis` support key to allow the timeout to be set up to 8 hours. 
DX-97193


#### SQL​
  * Fixed an issue that could occur with class compilation when using a literal value in a [window function](/reference/sql/sql-functions). 
DX-100466


## 25.1.7 (January 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Enabled Reflections for cases when there is an equivalent row and column access control (RCAC) filter on all children of a view that is the union of two or more datasets. 
DX-95563
  * Fixed a memory leak issue during table scans that could lead to a query abort. 
DX-98634


## 25.1.6 (January 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed an issue with a permanent query slot loss in multi-coordinator setups that could gradually lose query concurrency slots on Workload Management (WLM) queues at very high loads when a client application pushes more queries to a particular WLM queue than the configured concurrency, causing the client application to time out and close its connection. Before the fix, restarting the coordinators was the only way to fix this issue. 
DX-98355
  * Fixed a slow resource leak on the coordinator that can slow down queries and fill the heap memory for idle Workload Management (WLM) queues that are tied to engines. The leak is proportional to the number of idling WLM queues and may fix itself when a query is submitted to those queues. 
DX-88418
  * Reduced internal page size to minimize heap pressure during parallel job execution against the `sys.jobs_recent` system table. 
DX-96686
  * Updated the following libraries to address potential security issues:
    * Aircompressor from 0.10 to 0.27 [CVE-2024-36114] 
DX-96853
    * Avro from 1.11.3 to 1.11.4 within Dremio's packaged version of Hive [CVE-2024-47561] 
DX-96442
  * Disabled all `TRACE` web requests, which now return `405(NOT_ALLOWED)` error codes. 
DX-97052


#### SQL​
  * Fixed an issue that could return a `null` value for a `SELECT` query on a column when schema learning is disabled and the column type is incompatible with the column values. When the table schema is inconsistent with the data, an error will now be reported to recommend that you enable schema learning so Dremio can properly manage the schema based on the data. 
DX-88577
  * Fixed an issue that could cause `ALTER TABLE` to fail with a `Schema change detected` error when using the SQL command to drop and re-add a column with an incompatible type. Reporting has also improved for any instance where data cannot be coerced to the user-defined column type. 
DX-87232
  * Added a new SQL function [`TRY_CONVERT_FROM`](/reference/sql/sql-functions) to support converting a JSON type to a user-specified type. `null` is returned when the JSON cannot be converted. 
DX-94338
  * The SQL function `CONVERT_FROM` for JSON now supports nested fields in `ROW` and `STRUCT` data types as input. 
DX-94336
  * Fixed an issue in some cases that could prevent runtime filtering if the `CONVERT_FROM` SQL function was used in the query. 
DX-93179
  * Fixed an issue that could cause an OutOfMemoryException(OOM) to be ignored in a `HASH_JOIN` operator, which is now explicitly thrown to prevent unexpected behavior with the `HASH_JOIN`. 
DX-94029
  * Removed unsupported pushdown operations with `VARCHAR` data types from PostgreSQL advanced relational pushdown (ARP) connectors. 
DX-98093


## 25.1.5 (December 2024) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Older user-defined functions may store a null full path, which could cause a NullPointerException (NPE). We've mitigated the issue by preventing the NPE and logging a warning. 
DX-97341
  * Fixed an issue that could prevent admin users from updating a script owner's privileges via the Scripts API. 
DX-97879
  * Fixed an issue where a duplicated table schema could be written to its metadata file. 
DX-97502
  * Improved filter pushdown phase timing for queries with too many union nodes. 
DDX-96563


#### APP​
  * Fixed an issue that could prevent users from seeing deeply nested files in a source's subfolders on the Datasets page because their access was denied. 
DX-96147


#### SQL​
  * Fixed a rare issue where decorrelating a subquery with an `EXISTS` statement and an empty `GROUP BY` clause could result in incorrect data. 
DX-96652, DX-96946


## 25.1.4 (October 2024) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed an issue where queries could be stuck in planning and accumulate until a coordinator restart is required. 
DX-94146
  * Fixed an issue that could cause an "Unable to find the reference field" error during query planning due to performing Common Subexpression Elimination (CSE). 
DX-90660
  * Incompatible runtime filters are now ignored so as to avoid an `UnsupportedOperationException` while setting up Parquet readers. 
DX-90910
  * Improved the planning time in the filter pushdown phase for a query with too many joins. 
DX-96044
  * Fixed an SSL negotiation issue when connecting to Dremio servers through secure connections. 
DX-96640


#### SQL​
  * Fixed an issue with the ASCII function that could return an incorrect sign for values greater than 127 on Graviton. 
DX-90311
  * Fixed a NullPointerException (NPE) that could cause VACUUM jobs for Reflections to fail. 
DX-96262


## 25.1.3 (October 2024) Enterprise​
### What's New​
  * Added the ability to set the Azure Client ID that Dremio should use for [Azure Key Vault requests](/security/secrets-management/azure-key-vault) to disambiguate between multiple Azure user-assigned managed identities on Azure VMs or AKS deployments. 
DX-94964, DX-94967
  * Added support for custom environment variables in `dremio-cloud-tools` Helm charts. 
DX-94964, DX-95698


### Issues Fixed​
  * Fixed an issue where file handles (and HTTP connections) were left opened after reading JSON commit logs for Delta tables within a Hive source or AWS Glue Data Catalog. 
DX-95340


## 25.1.1 (September 2024)​")
### What's New​
  * When no new data is read during REFRESH Reflection jobs, the snapshot IDs of the datasets and Reflections that they depend on are shown in the Refresh Decision section of the query profile. 
DX-94785
  * Improved rendering of objects in the dataset tree on the SQL Runner page. 
DX-93474
  * Decouple the logic that skips checking the validity within a configured timeframe from the seamless metadata refresh feature support key. 
DX-94779


### Issues Fixed​
  * Fixed the NullPointerException in RowGroups querying Parquet files with incomplete stats. 
DX-95188
  * The result summary table now sorts cached query results in the summary table on the SQL Runner page in the order that the queries are executed. 
DX-95178
  * Fixed an issue that could prevent a Reflection score from being provided when running USE to set the query context. 
DX-94786
  * Fixed an issue where a failed Reflection could show an incorrect record count and size in the `sys.reflections` system table. 
DX-94304
  * Fixed an issue that could cause ANALYZE TABLE to fail when table column names contained reserved keywords. 
DX-62870
  * Fixed an issue that could cause the CURRENT_TIME function to return incorrect data when a user's timezone is defined. 
DX-94348
  * Fixed the issue of missing mount devices on large executor types in AWSE. 
DX-89512
  * Fixed the IndexOutOfBoundsException that could occur during attempts to cache query results that include complex columns that contain all null values. 
DX-94855
  * Fixed an issue in Community Edition (CE) that caused users to see an `unexpected error` when they clicked on the Scripts tab in the SQL Runner. 
DX-95455


## 25.1.0 (September 2024)​")
### What's New​
#### Access Control​
  * The [Privileges](/security/rbac/privileges) dialog is improved for managing sources, views, tables, and folders. 
DX-88582, DX-90927, DX-90926
  * On the Jobs page in the Dremio console, users who do not have the privileges VIEW JOB HISTORY and either CREATE USER or CREATE ROLE can no longer view the users filter. 
DX-92150
  * The user avatar at the bottom of the left navigation bar now shows the user's first and last initials instead of the first two letters of their username. 
DX-92060,DX-91263
  * Dremio now assigns `999` as the group ID (GID) and user ID (UID) for dremio:dremio at Docker image build time. 
DX-94444
  * User impersonation is now supported for Microsoft SQL Server, Oracle, and Teradata sources. 
DX-94366, DX-86351
  * Dremio now supports Java SE 17 (JDK 17) and offers new Docker images for Java SE 17. 
DX-91359, DX-91848, DX-90803


#### Administration​
  * AWS Graviton, a family of ARM-based processors, is now supported. AWS Graviton processors deliver high performance, energy efficiency, and cost savings for cloud workloads.
  * Out-of-the-box observability metrics are now available to admins for system resources such as memory usage, number of running executors, and more. See the **Settings &gt; Monitor** page to see these metrics. 
DX-86945
  * You can now migrate from Dremio AWS Edition (AWSE) to Dremio Enterprise Edition on Kubernetes using the `dremio-admin` command line interface (CLI). See Migrate AWSE to Kubernetes.  
Dremio provides additional tools to migrate from AWSE to Dremio Cloud. Please contact your Dremio account executive or Dremio Support for details. 
DX-88600
  * You can now cache results sets that are smaller than 20 MB to boost throughput and reduce response times for queries that are repeatedly used, such as dashboard-style queries. 
DX-69614
  * Added [seamless metadata refresh](/developer/data-formats/apache-iceberg) to ensure that you always query the latest versions of your Iceberg tables with minimal query planning overhead, no matter which data source contains the tables. 
DX-94488, DX-69312
  * DML and CTAS are now supported for the `query_label` workload management rule. 
DX-83628
  * Apache Arrow's Gandiva native library is now built and packaged for arm64 architecture. 
DX-84485


#### API​
The Catalog API Privileges endpoint is deprecated. We expect to remove it by July 2025. In place of the Privileges endpoint, use the Catalog API [Grants](/reference/api/catalog/grants) endpoint to retrieve privileges and grantees on specific catalog objects.
The `POST /api/v3/reflection/recommendations` endpoint is deprecated. In place of this endpoint, use the [job-based and usage-based Reflection recommendation endpoints](/reference/api/reflections/reflection-recommendations). 
DX-86120
  * You can now use the [Scripts API](/reference/api/scripts) to manage scripts from API clients for migration, management during owner offboarding, and other purposes. 
DX-86946
  * You can now create and manage [user-defined functions (UDFs) by API](/reference/api/catalog/user-defined-function). 
DX-90285
  * Added API endpoints for [job-based and usage-based Reflection recommendations](/reference/api/reflections/reflection-recommendations). Also increased the default maximum number of allowed jobs for the [SYS.RECOMMEND_Reflections table function](/reference/api/reflections/reflection-recommendations) and corresponding APIs from 10 to 100 and added new columns to the output for the SYS.RECOMMEND_Reflections table function: reflection_score, average_improvement_factor, and average_improvement_ms. 
DX-86120


#### Data Management​
  * Dremio can now connect to [Azure Storage](/data-sources/object/azure-storage) or [Google Cloud Storage](/data-sources/object/gcs) when Nessie is used as a source. 
DX-84214
  * Clicking on a dataset on the Datasets page or clicking the **Open Results** link on the Job Details page creates a new tab that is not automatically saved as a script. 
DX-93508
  * Dremio now supports bulk delete for scripts. 
DX-90177
  * When formatting a file or folder as a table, you can now enable an option to ignore all non-Parquet files in the related folder structure so that the promoted table works as if only Parquet files are in the folder structure. 
DX-88038
  * Added limits to prevent expression compilation failure for expressions beyond a certain level of complexity. 
DX-88037
  * Dremio now supports writes using merge-on-read in Apache Iceberg table properties, which creates positional delete files and optimizes DML operations. 
DX-85892, DX-91124, DX-68735, DX-83536, DX-83535
  * [AWS Glue Data Catalog](/data-sources/lakehouse-catalogs/aws-glue-catalog) data sources can now pull and use Lake Formation tag policies. By default, this feature is turned off. 
DX-87856
  * Users can now invalidate [AWS Glue Lake Formation](/security/integrations/lake-formation) permission cache on demand using [ALTER SOURCE](/reference/sql/commands/alter-source) or the [Source API](/reference/api/source). Lake Formation tag policy support is also enabled by default. 
DX-93068, DX-88976, DX-68918
  * You can now use the key-pair option as an authentication method for Snowflake data sources. 
DX-92525, DX-65029
  * Query planning time for over-partitioned tables with complex partition filters is improved. 
DX-86331, DX-90469
  * Added a rule that pushes an aggregate below a join if the grouping key is also a join key. 
DX-68253
  * You can use [autoingest pipes](/load-data/autoingestion) to set up and deploy event-driven data ingestion pipelines directly in Dremio. This feature is in preview and supports Amazon S3 as a source. 
DX-84400


#### Deployments​
  * Improved the security contexts in Helm charts. 
DX-94452


#### Monitoring​
  * You can [download cluster logs](/admin/monitoring/) directly from the Dremio console.


#### Reflections​
  * [Reflection recommendations](/reference/api/reflections/reflection-recommendations) automatically generate for the top 10 most effective default raw Reflections based on query patterns from the last 7 days. You can view these recommendations on the Reflections page in the Dremio console. 
DX-86697, DX-86888, DX-89183
  * For Reflections on Iceberg tables, a new [type of refresh policy](/acceleration/manual-reflections/refreshing-reflections) is available. You can now automatically refresh Reflections for underlying tables that are in Iceberg format when new snapshots are created after an update. 
DX-86348
  * For a given query with views, the Reflection recommender now provides an aggregation Reflection recommendation if possible instead of only default raw Reflection recommendations. 
DX-89655, DX-83086
  * When a Reflection refresh job fails, Dremio now retries the refresh according to a [uniform policy](/acceleration/manual-reflections/refreshing-reflections). 
DX-91430, DX-89551
  * A [Reflection score](/acceleration/manual-reflections/viewing-info-about-reflections) shows the value that a Reflection provides to your workloads based on the jobs that have been executed in the last 7 days. 
DX-89559
  * SELECT queries in CREATE TABLE AS and INSERT/SELECT statements now use Reflections to accelerate the queries. 
DX-94311
  * In the Job Details page, the Age column is renamed to Last Refresh from Table and now correctly calculates the maximum age of the data in a used Reflection. 
DX-94230
  * Row-access and column-masking policies are now strongly consistent with default raw Reflection matching. 
DX-90079


#### SQL​
  * You can now use decimals in ARRAY_REMOVE and ARRAY_CONTAINS functions. 
DX-89265
  * Dremio now supports the newline character `\n` in regular expression (regex) matching for the [LIKE](/reference/sql/sql-functions) SQL function. 
DX-82992, DX-87862
  * Added a timestamp pushdown for MAX and MIN SQL functions. 
DX-89397
  * [OPTIMIZE TABLE](/reference/sql/commands/apache-iceberg-tables/optimize-table) now supports Iceberg tables with equality deletes. 
DX-88786, DX-90056, DX-92120, DX-68735
  * New SQL commands have been added for autoingest pipes: [CREATE PIPE](/reference/sql/commands/create-pipe), [ALTER PIPE](/reference/sql/commands/alter-pipe), [DESCRIBE PIPE](/reference/sql/commands/describe-pipe), and [DROP PIPE](/reference/sql/commands/drop-pipe). 
DX-84400
  * [`sys.pipes`](/reference/sql/system-tables/pipes) is a new system table that contains the metadata for autoingest pipes. 
DX-89358
  * [`sys.pipe_summary`](/reference/sql/system-tables) is a new system table that summarizes high-level statistics for autoingest pipes. The table is only accessible to members of the ADMIN role. 
DX-89808
  * Added a MAP_CONSTRUCT function to support the [MAP data type](/reference/sql/data-types). 
DX-84305
  * You can now specify a column as a MAP data type in [CREATE TABLE](/reference/sql/commands/create-table). 
DX-90264


### Issues Fixed​
  * Updated Dremio's packaged version of Hadoop from 3.3.2 to 3.3.6 [CVE-2022-25168]. 
DX-87587
  * In AWS Edition (AWSE), fixed an issue that could cause some sources to be in bad state after upgrading. The issue affects only AWSE version 25+. 
DX-93002
  * Added limits for option manager cache size and set expiration for items in the cache. 
DX-91244
  * Fixed an issue that could prevent Reflections with a row-access or column-masking policy from accelerating queries after an upgrade. 
DX-93126
  * Fixed a bug that could cause VACUUM jobs on Reflections to fail when using HDFS for distributed storage. 
DX-92985
  * Fixed an issue that could cause VACUUM CATALOG to fail with a `ContainerNotFoundException` exception. Also fixed a bug that could cause VACUUM CATALOG to fail with `IllegalArgumentException` if a view is created in a Nessie catalog. 
DX-93461, DX-94427
  * Reflections with complex type fields no longer show an unavailable status after a successful refresh. 
DX-93493
  * Exiting the Reflections tab in Settings for tables and views no longer results in an unsaved-changes warning. 
DX-91719
  * Fixed an issue that could cause Reflections to not be created for queries that contain an OVER clause with a specified RANGE. 
DX-93800
  * Queries no longer fail if an underlying default raw Reflection becomes invalid for substitution against the view. 
DX-85139
  * In the Reflections editor, the **Refresh Now** button no longer appears for a failed Reflection. 
DX-93968
  * Reflection recommendations are now generated when plan regeneration is required and the name of the dataset is not fully qualified and contains a period (for example, `"arctic1"."@username@dremio.com".v1`). 
DX-91895
  * Dremio no longer creates duplicate default raw Reflection recommendations when querying a view that contains joins. 
DX-90602
  * When an incremental refresh materialization is deprecated, job history no longer lists a DROP TABLE job. Instead, the Reflection data is synchronously cleaned up as part of Reflection management. 
DX-86800
  * Reflection refresh jobs no longer show zero planning time when the refresh is incremental. 
DX-87548
  * In the output for the `sys.Reflection.lineage` function output, dataset name now shows both the path and the name of the dataset. Also, error messages for the `sys.Reflection.lineage` function are enhanced to clarify that external Reflections are not supported. 
DX-93972, DX-93971
  * For Iceberg tables that are created from Parquet files that do not contain column IDs, Dremio now uses the table property `schema.name-mapping.default` to accurately locate and display these table columns instead of displaying `null`. When Parquet files do not contain column IDs, you can enable the support key `dremio.iceberg.fallback_to_name_based_reader` to use name-based reading. 
DX-88490, DX-39653
  * Fixed a performance issue for Iceberg tables that could occur when Dremio reads [position delete files](/developer/data-formats/apache-iceberg/table-maintenance-optimization/optimizing). Previously, a position delete file could be accessed multiple times by different scan threads. Now all delete rows are read once and joined with the data files. 
DX-92450
  * Added a client pool for more performant concurrent Hive metastore operations. Use the `store.hive3.client_pool_size` support key to control pool size (set to 0 to disable pooling). 
DX-89821
  * Improved Dremio memory usage and fixed an issue that caused a memory leak exception. 
DX-91437, DX-90445
  * To prevent unexpected out-of-memory errors, the Parquet vectorized reader allocates only the necessary amount of memory for scanning deeply nested structures. 
DX-90471
  * Reduced memory usage when SELECT statements are run from the information schema by adjusting the page size parameter for pagination. 
DX-88389
  * The CSV reader now uses direct memory instead of heap memory. 
DX-87586
  * Fixed an issue that could cause queries to fail during planning with the error "Job was canceled because the query is too complex". 
DX-92283
  * Queries now succeed even if telemetry storage fails. While a query is running, the executors and the coordinator send telemetry about the query execution to the JTS, which is written to a persistent store when the query completes or fails. This incomplete telemetry is indicated in the Job Details page for transparency. [`is_profile_incomplete`](/reference/sql/system-tables/jobs) has been added in the `system.project.jobs` table to indicate the profile status and incomplete data. 
DX-86907
  * Fixed an issue that could cause queries to fail with a `ConcurrentModificationException` error when using Java virtual machine (JVM) 17. 
DX-92029
  * Reading a Delta Lake table no longer results in an error about an invalid Parquet file. 
DX-79957
  * The schema for Delta Lake tables is now captured correctly, resolving the issue that could cause a NullPointerException and failure to query the table. 
DX-92477
  * Fixed a rare NPE that could occur when accessing large Delta Lake tables in metastore sources. 
DX-67629
  * Fixed an issue when reading Delta Lake checkpoint files for partitioned tables that could result in 0 rows returned. 
DX-92976
  * The query planner no longer fails for queries that use experimental settings related to the bushy join optimizer. 
DX-91859
  * `MIN_REPLICAS` and `MAX_REPLICAS` are no longer considered reserved keywords for SQL queries. 
DX-93664
  * Correlated subqueries no longer generate plans with indexing issues. 
DX-90745
  * For MongoDB tables, Dremio now adds an exclusive projection to queries if no projection exists and properly excludes dropped fields from queries. This resolves issues involving maximum field size and leaf nodes and potentially improves performance. 
DX-85874
  * Fixed an issue that prevented Hive sources that use assumed roles from running asynchronous queries via the "Enable asynchronous access for Parquet datasets" option. 
DX-84153
  * Queries no longer fail due to a ConcurrentModificationException when runtime filters are present. 
DX-91670
  * The flow of queries is no longer coupled with query telemetry, which meant that failure scenarios in the flow could affect query completion rates. Queries now succeed despite any failures with query telemetry processing or JTS availability, even in case of incomplete profile information. 
DX-90237
  * Queries no longer hang on coordinator startup when the materialization cache takes a long time to start up. 
DX-92627
  * Fixed a bug for complex queries that could result in an error message about the code being too large. 
DX-90491
  * Fixed a performance issue that affected queries that contain a [window function](/reference/sql/sql-functions) and a large number of batches. 
DX-93506
  * Switching between scripts while a job is running no longer causes the job to appear in other tabs. 
DX-92260
  * Running a subset of a script now highlights the appropriate queries when switching between results tabs. 
DX-92143
  * Opening a script and applying a transformation on a saved job now works as expected. 
DX-92754
  * The current owner of a script is now correctly displayed in the Dremio console. 
DX-91531
  * Fixed issues that could result in an incorrect script count after deleting all scripts or deleting a temporary script. 
DX-93518, DX-93507
  * For MapR deployments, removed configuration properties `MAPR_MAX_RA_STREAMS` and `MAPR_IMPALA_RA_THROTTLE` from the `dremio start` script and from the code responsible for Yarn configuration. 
DX-88701
  * Fixed a ClassCastException bug in the MongoDB data source connector. 
DX-88468
  * Fixed a bug that could leak unclosed data source connections in Dremio, Microsoft SQL Server, and Oracle ARP connectors. 
DX-88468
  * Dremio now throws a concurrent error message if metadata refresh fails due to a Nessie exception. 
DX-54677
  * COPY INTO error handling now provides record position information for coercion errors with Parquet input files. 
DX-91421
  * Fixed the issue with incorrect dataset version sorting that could result in "not found" error messages when listing datasets in the Dremio console. 
DX-91598
  * Fixed an issue that could result in a NullPointerException when running a DML statement on an accelerated table. 
DX-91682
  * ORDER BY expressions in a subquery should be removed automatically as long as the query does not have LIMIT or OFFSET parameters, although the returned sort order cannot be guaranteed. In this example, `ORDER BY deptno` should be removed:

```
SELECT *  
  FROM emp  
  JOIN (SELECT * FROM dept ORDER BY deptno) USING (deptno)  

```

Some databases like Postgres and Oracle support ORDER BY expressions, so you may see different results depending on the target of your query. 
DX-90962
  * Improved query performance for VACUUM TABLE when using EXPIRE SNAPSHOTS. 
DX-64906
  * `OPTIMIZE TABLE` statements that end with semicolons are now supported in the SQL Runner. 
DX-85903
  * Fixed an issue that could prevent partition columns from being applied in INSERT and CREATE TABLE AS statements. 
DX-83067
  * You can now clear the context for the query session by running the [USE](/reference/sql/commands/use) command without any parameters. 
DX-90731
  * Fixed issue that could prevent the spillable hash join operator from being chosen despite having a large number of rows. 
DX-89967
  * Fixed an issue that could cause the ARRAY_AGG function to return incorrect results when performed on a variable width column that contains intermittent NULL values. 
DX-90449
  * LEAD and LAG functions with the window set to a value that is greater than 1 no longer produce incorrect results. 
DX-91557
  * Dremio now resolves user-defined functions (UDFs) correctly whether a function is fully qualified and even when the view is opened in a different session path context than the function. 
DX-93580
  * Indexing into the CONVERT_FROM SQL function for the same JSON no longer produces incorrect results. 
DX-90636
  * Fixed an issue where the `TO_DATE` function was used with invalid options. 
DX-90413
  * Dremio now honors workload management rules that contain the `QUERY_LABEL` function. 
DX-83628
  * Fixed an issue that could result in incorrect row group pruning when the statistics are empty for Parquet files. 
DX-90854
  * Fixed an issue with concurrent metadata refreshes that could result in duplicate metadata entries for Parquet files.
DX-91849
  * To create sessions for Arrow Flight JDBC/ODBC connections, Dremio now uses the username from the registered upstream (Mongo store/LDAP) instead of the username passed in the connection URL. 
DX-89745
  * Fixed an issue that could result in a leak from an unclosed connection in Microsoft SQL Server, Oracle, or Dremio cluster data sources. 
DX-94504
  * Usernames in Arrow Flight JDBC/ODBC and Legacy JDBC/ODBC jobs are now shown in consistent case regardless of the username case in the connection URL. 
DX-89743, DX-41303
  * To prevent conflicts between SLF4J 1.x and 2.x, the Dremio JDBC driver no longer exposes the SLF4J API and uses the `java.util.logging` (JUL) framework to log messages. The application can be configured for the parent logger for the driver by using `java.sql.Driver#getParentLogger()` or directly using `java.util.logging.Logger#getLogger("com.dremio.jdbc")`. 
DX-56164
  * Fixed an issue that could introduce duplicate rows in the results for RIGHT and FULL joins with non-equality conditions and join conditions that use calculations.
DX-92155
  * Joins with non-equality conditions and join conditions that use calculations no longer introduce duplicate rows (while respecting desired filtering properties) into the result set. 
DX-90720
  * Fixed an issue with long calls to an AWS Glue data source that could result in a deadlock, preventing the Glue database from appearing as a source in the Dremio console and privileges granted to roles and users from applying properly to that source. 
DX-92480
  * Fixed an issue that could occur if AWS Lake Formation tag policies are present, but no Lake Formation tags are defined on a certain table. 
DX-89519
  * The AWS Lake Formation tag authorizer now considers database-level tags. 
DX-90618
  * Improved messaging that originates from the Hive3 plugin engine for cases in which other source types are served, such as Hive 2.x or AWS Glue. 
DX-87596
  * In the Workload Management API, the default rule is now included in responses to requests to [retrieve all rules](/reference/api/wlm/rule) for new clusters. 
DX-90072
  * Folder naming requirements are now consistent between the Dremio console and the Catalog API. Folder names cannot include the following special characters: `/`, `:`, `[`, `]`, or `"`. 
DX-90489
  * Listing catalog objects with the Catalog API no longer times out due to a very large number of catalog objects. To address the issue, optional [`pageToken`](/reference/api) and [`maxChildren`](/reference/api) parameters have been added to the API endpoints for getting catalog objects with children by ID or by path. 
DX-90461
  * The [lineage](/data-products/govern/lineage) graph no longer lists identical parent objects multiple times. 
DX-92481
  * In the Dremio console, ideographic spaces now display as regular spaces in the results. 
DX-64971
  * Disabling **Download Query Profiles** now properly restricts users from downloading profiles. 
DX-91661
  * Tooltips on the Catalog page now display correctly in Firefox. 
DX-90884
  * The option to enable single sign-on for Tableau is now disabled by default. 
DX-93910
  * Fixed an issue with filter pushdown that could result in failure to properly create empty subtrees. 
DX-92490
  * The `dremio-admin restore` CLI command now properly terminates after restore finishes. 
DX-20513
  * For EC2 instances, Dremio now appends the bind mount record to `/etc/fstab` for persistence, which prevents issues with sources in a bad state after rebooting EC2 instances. 
DX-94264
  * Values that contain UNICODE characters like 'á' no longer result in incorrect splitting. 
DX-89965


### Known Issues​
  * Reflections created in Dremio 20.0.x and previous versions may be less performant in 25.1.0. Regenerate the Reflections to improve performance. 
DX-84453
  * If you are upgrading from Dremio version 25.0.0 through 25.0.4 and you previously set the support key `store.dataset.versions.limit` to a large number like `100000` to prevent trimming versions, we recommend resetting the value to `50` (the default). 
DX-92449
  * If you are upgrading from Dremio version 22.1.5 or earlier, we recommend reindexing your data. 
DX-91833


## 25.0.17 (April 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Reduced noise in the logs generated when reading data from Parquet files by changing the log level of certain messages from `WARNING` to `DEBUG`. 
DX-101258
  * Fixed a memory leak issue during table scans that could lead to a query abort. 
DX-98634
  * CVE-2025-30065 has been fixed by backporting the related fix from the Apache parquet-java project to Dremio's internal fork and using this latest build in the Dremio release. 
DX-102461


## 25.0.16 (April 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * "Failed to open file" error messages for Iceberg now reference an input file by the file path's location instead of the object ID. 
DX-102345


#### APP​
  * Fixed an issue that prevented users from removing tables in their home space that were created by uploading files. 
DX-101969


## 25.0.15 (March 2025) Enterprise​
### Improvements and Issues Fixed​
  * Fixed a memory leak issue during table scans that could lead to a query abort. 
DX-98634


## 25.0.14 (December 2024) Enterprise​
### Improvements and Issues Fixed​
  * Fixed a slow resource leak on the coordinator that can slow down queries and fill the heap memory for idle Workload Management (WLM) queues that are tied to engines. The leak is proportional to the number of idling WLM queues and may fix itself when a query is submitted to those queues. 
DX-88418
  * Fixed an issue with a permanent query slot loss in multi-coordinator setups that could gradually lose query concurrency slots on Workload Management (WLM) queues at very high loads when a client application pushes more queries to a particular WLM queue than the configured concurrency, causing the client application to time out and close its connection. Before the fix, restarting the coordinators was the only way to fix this issue. 
DX-98355
  * Updated the following library to address potential security issues:
    * Avro from 1.11.3 to 1.11.4 within Dremio's packaged version of Hive [CVE-2024-47561] 
DX-96442
  * Fixed an issue that could cause the SQL Runner to display the view definition of the last executed preview instead of the saved view definition. 
96707
  * Fixed an issue that could cause a `REFRESH REFLECTION` job to not pull new data for an external query, causing stale data to be returned when using the Reflection. 
DX-98107
  * Fixed an issue that could cause garbage collection logs to not be accessible. 
DX-98240


## 25.0.13 (December 2024) Enterprise​
### Improvements and Issues Fixed​
  * Fixed an issue that could occur when runtime filter is used with another pushdown filter on VARCHAR columns. 
DX-97228
  * Fixed an issue where pushdown filters on Parquet V2 files could produce incorrect results. 
DX-98029


## 25.0.12 (November 2024) Enterprise​
### What's New​
  * The SQL function `CONVERT_FROM` for JSON now supports nested fields in `ROW` and `STRUCT` data types as input. 
DX-94336


### Improvements and Issues Fixed​
  * Fixed an issue where a duplicated table schema could be written to its metadata file. 
DX-97502


## 25.0.11 (October 2024) Enterprise​
### Improvements and Issues Fixed​
  * Fixed an issue where queries could be stuck in planning and accumulate until a coordinator restart is required. 
DX-94146
  * Reduced internal page size to minimize heap pressure during parallel job execution against the system table. 
DX-96686
  * Incompatible runtime filters are now ignored so as to avoid an `UnsupportedOperationException` while setting up Parquet readers. 
DX-90910
  * Improved filter pushdown phase timing for queries with too many union nodes. 
DDX-96563


## 25.0.10 (October 2024) Enterprise​
### Issues Fixed​
  * Fixed an issue where file handles (and HTTP connections) were left opened after reading JSON commit logs for Delta tables within a Hive source or AWS Glue Data Catalog. 
DX-95340


## 25.0.9 (September 2024) Enterprise​
### Issues Fixed​
  * Fixed the NullPointerException in RowGroups querying Parquet files with incomplete stats. 
DX-95188
  * Fixed an issue that could cause the CURRENT_TIME function to return incorrect data when a user's timezone is defined. 
DX-94348
  * Fixed an issue when reading Delta Lake checkpoint files for partitioned tables that could result in 0 rows returned. 
DX-92976
  * Fixed a performance issue for Iceberg tables that could occur when Dremio reads [position delete files](/developer/data-formats/apache-iceberg/table-maintenance-optimization/optimizing). Previously, a position delete file could be accessed multiple times by different scan threads. Now all delete rows are read once and joined with the data files. 
DX-92450


## 25.0.8 (August 2024) Enterprise​
### Issues Fixed​
  * In AWS Edition (AWSE), fixed an issue that could cause some sources to be in bad state after upgrading. The issue affects only AWSE version 25+. 
DX-93002
  * Memory tracking issues that could cause queries to be cancelled due to exceeding the memory limits are fixed (with Memory Arbiter enabled and high memory utilization on the node). 
DX-89359
  * Dremio now uses multiple writers in parallel for non-partitioned table optimization. The small files generated during writing are combined by another round of writing with a single writer. 
DX-88174
  * Fixed an issue that could affect Java virtual machine (JVM) memory calculations. 
DX-87463
  * Usernames in Arrow Flight JDBC/ODBC and Legacy JDBC/ODBC jobs are now shown in the same consistent case regardless of the case in the connection URL. 
DX-41303
  * Dremio now uses a key generation algorithm that follows industry best practices without causing a slowdown during upgrade in some environments. 
DX-92906
  * The [lineage](/data-products/govern/lineage) graph no longer lists identical parent objects multiple times. 
DX-92481
  * Fixed an issue with unlimited splits that could result in duplicate metadata entries for Parquet files. 
DX-91849
  * Fixed an issue that could result in incorrect row group pruning when the statistics are empty for Parquet files. 
DX-90854


## 25.0.7 (July 2024) Enterprise​
### Issues Fixed​
  * In AWS Edition (AWSE), fixed an issue that could cause some sources to be in bad state after upgrading. The issue affects only AWSE version 25+. 
DX-93002


## 25.0.6 (July 2024) Enterprise​
### Issues Fixed​
  * Fixed an issue that could affect Java virtual machine (JVM) memory calculations. 
DX-87463


## 25.0.5 (July 2024) Enterprise​
### What's New​
  * Added a new [Dataset API](/reference/api/datasets) endpoint, `POST /dataset/{id}/reflection/recommendation/{type}`, for retrieving Reflection recommendations by Reflection type for a dataset. 
DX-89497
  * You can use the `export.tableau.extra-flight-connection-properties` support key to disable certificate verification, for example in .tds files.
DX-91831


### Issues Fixed​
  * You can now generate suggestions for aggregate Reflections by clicking a button in the Reflections tab in the Dremio console. Dremio no longer automatically collects statistics and generates a suggestion when you open the Reflections tab. 
DX-89306
  * The schema for Delta Lake tables is now captured correctly, resolving the issue that could cause a NullPointerException and failure to query the table. 
DX-92477
  * Fixed an issue that could result in a NullPointerException when running a DML statement on an accelerated table. 
DX-91682
  * Fixed an issue that could cause queries to fail during planning with the error "Job was canceled because the query is too complex". 
DX-92283
  * The profile manager now renders successfully in the Dremio console even when the accelerationDetails field is skipped. 
DX-92066
  * Fixed a bug that could cause the default selected columns for raw Reflections to fail to include all columns of a dataset. 
DX-89497
  * Fixed a ClassCastException bug in the MongoDB data source connector. 
DX-88468
  * Dremio field size limits now apply properly for the output of the `ARRAY_AGG` SQL function. 
DX-87000
  * For MongoDB tables, Dremio now adds an exclusive projection to queries if no projection exists and properly excludes dropped fields from queries. This resolves issues involving maximum field size and leaf nodes and potentially improves performance. 
DX-85874
  * When a Reflection with a refresh status of type Manual is not available for acceleration and fails to refresh, users will now see a red failure icon instead of a yellow warning icon in the Dremio console. 
DX-71027


## 25.0.4 (June 2024) Enterprise​
### What's New​
  * Dremio now supports HashiCorp Vault's Kubernetes authentication method for retrieving secret references to use for connecting to data sources and listing secrets in Dremio configuration files. Read [Using HashiCorp Vault for Secrets Management](/security/secrets-management/hashicorp-vault) for more information. 
DX-84473 DX-89104
  * The results of previously run queries now load much more quickly. After you open a saved script in the SQL Runner, the results are automatically displayed in a summarized format if at least one job in the script has successfully completed. To load the results of a specific query, select the query tab above the results table. 
DX-90110 DX-90627
  * For MapR deployments, removed configuration properties `MAPR_MAX_RA_STREAMS` and `MAPR_IMPALA_RA_THROTTLE` from the `dremio start` script and from the code responsible for Yarn configuration. 
DX-88701
  * Dremio now introduces cache before calling the AWS and Azure credentials API, which improves performance by reducing excessive `CredentialsService.lookup()` calls. 
DX-90965
  * The `dremio-admin backup` and `dremio-admin restore` CLI commands now include the `security` folder. Manual backups of the `security` folder are no longer needed. 
DX-90705
  * Improved handling of the ROLLUP aggregate SQL function. 
DX-83225


### Issues Fixed​
  * Updated the following libraries to address potential security issues: 
DX-91055 DX-91138
    * org.postgresql:postgresql to version 42.4.5 [CVE-2024-1597]
    * com.amazon.redshift,redshift-jdbc42 to version 2.1.0.28 [CVE-2024-32888]
  * Correlated subqueries that include a filter that doesn't match any rows no longer result in an error message. 
DX-91553
  * Reflections that contain temporal functions no longer skip refreshing. 
DX-90966
  * Fixed an issue that prevented Hive sources that use assumed roles from running asynchronous queries via the "Enable asynchronous access for Parquet datasets" option. 
DX-84153
  * Indexing into the CONVERT_FROM SQL function for the same JSON no longer produces incorrect results. 
DX-90636
  * The TYPEOF SQL function now returns the precise type for nested members in complex types. 
DX-89806
  * To prevent unexpected out-of-memory errors, the Parquet vectorized reader allocates only the necessary amount of memory for scanning deeply nested structures. 
DX-90471
  * Restoring now works properly for AWSE deployments. 
DX-90389
  * Using autocomplete in the SQL Runner no longer causes issues with overflow. 
DX-87864
  * In the Dremio console, ideographic spaces now display as regular spaces in the results. 
DX-64971
  * An error message no longer appears when loading results of multiple jobs that are executed on different engines. 
DX-91291
  * When using an IAM role and attempting to add an AWS Glue source, you no longer see an error message about loader constraint violation due to AWS Glue authentication. 
DX-91213
  * Reflections no longer produce incorrect results due to incorrectly matching into queries that include the ROLLUP option. 
DX-90879
  * Fixed an issue where the `TO_DATE` function was used with invalid options. 
DX-90413
  * Creating a new script while on a script that displays an error message no longer causes the error message to persist. 
DX-90122
  * Fixed an error where planning a query could fail with a "Cannot add expression to different types of set" message. 
DX-90032
  * Switching between the tabs in the SQL editor now correctly displays the job type. 
DX-89787
  * Memory tracking issues that would cause queries to be cancelled due to exceeding the memory limits are fixed (with Memory Arbiter enabled and high memory utilization on the node). 
DX-89359
  * Query profiles no longer show planning phases twice. 
DX-89262
  * Reading a Delta Lake table no longer results in an error about an invalid Parquet file. 
DX-79957
  * Reflections with row and column access control (RCAC) now produce the correct results when algebraically matched. 
DX-90178
  * Fixed an issue that could introduce duplicate rows in the results for RIGHT and FULL joins with non-equality conditions and join conditions that use calculations.
DX-92155
  * View schema learning now occurs only for queries that are issued from the Dremio console or Reflection refresh jobs. 
DX-91903
  * The query planner no longer fails for queries that use experimental settings related to the bushy join optimizer. 
DX-91859
  * Fixed the issue with incorrect dataset version sorting that could result in "not found" error messages when listing datasets in the Dremio console. 
DX-91598
  * Reading an Iceberg table with equality deletes via Glue or Hive no longer results in an error. 
DX-90377
  * Fixed the NullPointerException (NPE) in logging while refreshing metadata for Delta Lake tables. 
DX-89302
  * LEAD and LAG functions with the window set to a value that is greater than 1 no longer produce incorrect results. 
DX-91557
  * In the Dremio console, you can now properly schedule Reflection refreshes. 
DX-90145
  * Dremio now throws a concurrent error message if metadata refresh fails due to a Nessie exception. 
DX-54677


## 25.0.3 (May 2024) Enterprise​
### Issues Fixed​
  * Joins with non-equality conditions and join conditions that use calculations no longer introduce duplicate rows (while respecting desired filtering properties) into the result set. 
DX-90720


## 25.0.0 (April 2024)​")
The [backup](/reference/admin-cli/backup) and [restore](/reference/admin-cli/restore) procedures for Dremio 25.0.0 include steps for preserving the `security` folder and updating certain permissions on it. These steps are required so that source connection does not fail during Dremio startup. Follow the backup and restore procedures carefully when upgrading to Dremio 25.0.0.
### What's New​
  * Enabled the memory arbiter by default in order to monitor the usage of four key operators: HASH_AGGREGATE, HASH_JOIN, EXTERNAL_SORT, and TOP_N_SORT. This usage is monitored across all queries running on an executor to improve how the executor utilizes its direct memory and to reduce OutOfMemoryException errors. 
DX-48798
    * If the memory arbiter detects that the memory usage is too high, then the memory usage will be reduced in these two ways: 
      * Starting with the biggest consumers, some of these operators will need to reduce their memory usage mainly by spilling to disk.
      * Memory allocations will be blocked.
  * Changes to the logback configuration are now automatically applied without requiring a restart. To ensure that this feature is enabled when you upgrade to Dremio 25.0.0, take care to avoid replacing the installed `conf/logback.xml` file with your backup copy. 
DX-56684
  * Enabled HASH_JOIN to spill to disk by default when the memory allocated for a query is fully utilized. 
DX-48798
  * Out-of-the-box observability metrics are now available for user activity and jobs such as most active users, longest running jobs, most queried datasets, and more. See the Settings &gt; Monitor page to see these metrics. 
DX-86592 DX-83785
  * Improved the robustness of the embedded metadata pointer store. 
DX-85034
  * Added support for column mapping within Delta Lake tables, effectively supporting minReaderVersion 2.
DX-62046 DX-87465
  * Enabled checksum-based verification for Azure Blob Storage and Data Lake Gen 2 sources to ensure data integrity during network transfers. 
DX-66932
  * Added support for the ARRAY_FREQUENCY SQL function. It takes an array as input and produces MAP with array values as keys and corresponding frequencies as values.
DX-67298
  * You can use the Recommendations API to submit job IDs of jobs that ran SQL queries, and receive recommendations for aggregation Reflections that can accelerate those queries. See [Recommendations](/reference/api/reflections/reflection-recommendations) for more information.
DX-68447
  * Added support for creating Reflections on views and tables with row-access and column-masking policies defined on any of the underlying anchor datasets. [See more information](/data-products/govern/row-column-policies-udf). 
DX-68923 DX-89495
  * Added support for configuring Reflection refreshes to occur on a schedule. 
DX-68532
  * Added the configuration option `services.coordinator.web.auth.login_additional_latency_millis` for ensuring that login successes and failures take about the same amount of time. This makes all login requests (successful or not) slower, which makes brute force attacks harder. This configuration option can be turned off. It is on by default. 
DX-83373
  * Added the SKIP_FILE option to the COPY INTO SQL command. The SKIP_FILE option specifies that the COPY INTO operation should stop processing the input file at the first error it encounters.
DX-84448
  * You can now [refresh Reflections](/acceleration/manual-reflections/refreshing-reflections) by using an API method, `ALTER TABLE`, and `ALTER VIEW`. You can also refresh Reflections on views by using the Catalog API. 
DX-84529
  * Added support for getting recommendations about what default raw Reflections to create. 
DX-84616
  * Added support for showing the date and time that a Reflection's data was last refreshed. If the refresh is running, failing, or disabled, the value is 12/31/1969 23:59:59. The date and time are available in the Dremio console and via the Reflection API. 
DX-84702
  * Added two new ways for starting the refresh of a Reflection:
    * On the Settings &gt; Reflections page, hover over the row about the Reflection and click the refresh icon.
    * In the Advanced view of the Reflections editor, click the refresh icon above the table that describes the content of the Reflection. 
DX-84774
  * Added support for reading Apache Iceberg tables with equality deletes. 
DX-84522
  * Added support for Hive on GCS. 
DX-84898
  * Added a new refresh status: Pending. This status means that the refresh of a Reflection will begin after the refreshes of its anchor and all downstream tables and views are finished. 
DX-84941
  * Added support for ZooKeeper 3.5.6 and later. 
DX-53228
  * Disabled C3 caching during the loading of Parquet source files via the COPY INTO operation, thereby reducing cache contention with other query workloads. 
DX-85365
  * Improved Dremio's capabilities for [concurrent DML operations on Iceberg tables](/developer/data-formats/apache-iceberg/concurrency) and improved error messaging for concurrent load failures. 
85437
  * Added to Reflection Summary objects of the Reflection API and the SYS.PROJECT.Reflections table the error message that explains the most recent failure of a refresh of a Reflection. No message appears if no refresh has yet been attempted, no failure has occurred, or a successful refresh has followed a failed one. 
DX-85499
  * Added support for performing [incremental refreshes](/acceleration/manual-reflections/refreshing-reflections) on Reflections that are defined on views that use joins. 
DX-84768
DX-85818
  * Changed the tabs in the SQL runner to display the most recent results of a query, if the results are available from the job history, without the user having to run the query again.
DX-85843
  * Added support for copy_errors() table function on Parquet tables. 
DX-87332
  * Removed the following support keys because they were enabled by default over several major releases:
    * `dremio.deltalake.enabled` (introduced in 14.0, enabled by default in 17.0)
    * `store.deltalake.hive_support.enabled` (introduced as enabled by default in 24.0)
    * `store.deltalake.spark_support.enabled` (introduced as enabled by default in 24.1)
    * `dremio.deltalake.time_travel.enabled` (introduced as enabled by default in 24.2)
    * `dremio.execution.support_unlimited_splits` (introduced as enabled by default in 21.0)
    * `dremio.iceberg.enabled` (introduced in 11.0, enabled by default in 21.0)
    * `dremio.iceberg.ctas.enabled` (introduced as enabled by default in 22.0)
    * `dremio.iceberg.rollback.enabled` (enabled by default in 24.0) 
DX-87789 DX-87491 DX-53796 DX-87898
  * Added support for limiting access to specified databases on Glue sources. 
DX-87812 DX-88223 DX-88420 DX-87811
  * Upgraded Netty libraries to version 4.1.104. 
DX-86156
  * Added daily catalog maintenance tasks to trim history of views to a maximum of 50 records per view. This limits the storage needed for datasetVersions records in the KV store. 
DX-86156 DX-87549
  * To improve Reflection observability, in the Reflection tab in the settings, the Dataset column is now wider and truncates after two lines. Also, users now receive a notification if the materialization cache is uninitialized for Reflections as well as a message when hovering on the status icon for Reflections whose caches are initializing. 
DX-86891 DX-86890
  * In the Reflection tab in the settings, users can now retry a refresh on all unavailable Reflections. 
DX-86889
  * Reflection recommendations are now associated with the corresponding job IDs. 
DX-86726 DX-86672
  * Improved reliability and memory efficiency for Dremio coordinators. 
DX-86245 DX-86675
  * Privilege changes are processed more quickly in the Dremio console. 
DX-87547
  * To improve performance, users can now push filters past sort operations. 
DX-88119
  * No data is read in the REFRESH Reflection job for Reflections that are dependent only on Iceberg, Parquet, Avro, non-transactional ORC datasets, or other Reflections **and** have no new data since the last refresh. 
DX-86353


### Issues Fixed​
  * Fixed the handling of SQL functions, such as LOWER, UPPER, and REVERSE, in queries on system tables. 
DX-52626
  * Reduced the heap memory used by the SORT operator. 
DX-53594
  * TCP-DS queries no longer fail with an error that says the table or column is not found. 
DX-87797
  * AWSE upgrades no longer fail with the error `Unexpected global state`. 
DX-88393
  * Fixed gRPC exceptions in the Dremio console due to improper handling of transient server errors. 
DX-25300
  * The [APPROX_COUNT_DISTINCT](/reference/sql/sql-functions) function now properly calculates the approximate count distinct rather than the exact count distinct. 
DX-84197
  * The _Save_ button for Reflections defined on views in spaces would be enabled for public users who have only SELECT, EDIT, and VIEW Reflection privileges. Such users still were correctly prevented from modifying Reflections, as clicking _Save_ did nothing. 
DX-84684
  * Discontinued the hive-universal build. As of this change, Hive 2.x sources are driven by Hive 3 plugin in the main build. Hive 2 libraries and artifacts (and the Hive 2 Dremio plugin itself) are omitted from the installation directory. 
DX-85203
  * Added the `dremio-job-id` property to the metadata for Iceberg tables in Glue sources. 
DX-85379
  * Fixed an issue where certain queries returned incorrect results when multiple Nullable columns were referenced in conditions with OR operators.
DX-85581
  * Added a check to determine whether users running the COPY INTO command have SELECT privileges on either the source storage location specified in the FROM clause or on each individual source file mentioned in the FILES clause. 
DX-85977
  * Fixed an issue that allowed Reflections to be created when their definitions included UDFs that contained context-sensitive functions. 
DX-86078
  * Dremio no longer caches CURRENT_DATE_UTC and CURRENT_DATE during query planning, which was causing incorrect results. As a result, queries that use CURRENT_DATE_UTC and CURRENT_DATE have some performance latency in favor of accurate results. 
DX-86078
  * Fixed an issue that caused an aggregation Reflection sometimes to be created automatically when a raw Reflection was created. 
DX-85098
  * Fixed an issue that caused a message about a failed query to appear after the switch from one SQL tab to another. 
DX-86514
  * Fixed an issue in the SQL Runner where expanding the large data field by using the ellipsis (...) caused the results to be unresponsive when the data included DateTime objects.
DX-86541
  * Fixed an issue that caused the SQL function APPROX_COUNT_DISTINCT to return null instead of 0 in some cases. 
DX-86597
  * Ensured that group policy grants are respected in AWS Lake formation when Dremio is used with Okta. 
DX-86923
  * Fixed an issue that occurred if "All tables" was selected during AWS Lake formation and the granting of a new permission that was meant to apply to all tables within the selected database. 
DX-86925
  * Fixed an issue that caused the details of jobs not to be updated in the Dremio console when jobs were running.
DX-86983
  * Fixed an issue that caused the creation of a new branch to update the context of the SQL Runner automatically. 
DX-87039
  * Fixed an issue that could cause the `skip_file` option of the `COPY INTO` SQL command not to handle Parquet file corruption issues if they are in the first page of a row group. 
DX-87884
  * Reduced the severity of log messages about function lookup for Hive functions so that they are no longer listed as errors. 
DX-83930
  * The Settings button is now shown at the top-right of the page when navigating to a Nessie source. 
DX-88053
  * Authentication with a secret resource URL now works properly for Amazon Redshift, Oracle, and PostgreSQL data sources. 
DX-88293
  * In Kubernetes environments, the Dremio load balancer service now remains active during dremio-admin operations. 
DX-85396
  * In Kubernetes environments, you can now 
DX-68047
  * Reading Iceberg tables with positional deletes no longer causes an IndexOutOfBoundsException. 
DX-87252
  * The Details panel is no longer blank when opened from the menu in a Nessie source. 
DX-87923
  * The commit history for MERGE commands run in the Dremio console no longer show the user ID instead of the user email. 
DX-88377
  * Creating a raw Reflection on a dataset on which no Reflections are already defined no longer creates an aggregation Reflection. 
DX-86098
  * The Go to Table (!) button now appears on the Datasets page for tables and views when the **Query on click** preference is disabled. The button also appears on lineage graphs for tables. 
DX-85964 DX-84694
  * You can disable analytics data from being sent to Intercom using the `dremio.ui.outside_communication_disabled` support key. 
DX-86316
  * Fixed a bug that was causing sub-optimal query plans for queries with partition column filters. 
DX-86309


### Breaking Changes​
  * Dremio no longer supports Java 8. A Java 11 SE JDK is now required. Failing to install a Java 11 SE JDK will result in an error at startup. In your `dremio-env` config files, you may need to remove any Java command line options that are not supported by Java 11 from the `DREMIO_GC_OPTS` and `DREMIO_JAVA*EXTRA_OPTS` variables. Yarn users may need to change the engine configuration to provide the path to a valid Java 11 environment by setting the `JAVA_HOME` environment in the engine properties. 
DX-86534
  * ZooKeeper 3.4 has reached end-of-life and is no longer supported. Using ZooKeeper 3.4 will result in an error at startup. Dremio recommends ZooKeeper 3.6 or later. 
DX-88450
  * Queries with ambiguous columns, including queries for creating views, are no longer supported and will result in an error. To prevent this, make sure the same column name is not listed twice, for example: 
DX-83702 DX-86763

```
SELECT * FROM (SELECT id, 2 AS id FROM (VALUES (1, 'one')) AS t(id, name))  

```



To resolve the issue, rewrite the query to change one of the column names and remove the ambiguity. In this example, the first `id` is changed to `id0`:

```
SELECT * FROM (SELECT id, 2 AS id0 FROM (VALUES (1, 'one')) AS t(id, name))  

```

You must also recreate any previous views that were created using ambiguous columns.
  * The `24.2-hive-universal` package is deprecated in 25.0.0. If you have a Hive 2 data source, follow the instructions for upgrading to 25.0.0. We recommend that you invest extra time to test Hive 2 use cases in a test environment before deploying to production. 
DX-86273
  * Renamed support key `planner.writer.round_robin'` to `planner.writer.round_robin`. 
DX-85350


### Known Issues​
  * As of version 25.0.0, Dremio supports encrypted data source credentials. For this reason, when you upgrade to Dremio 25.0.0, if you want RocksDB to contain only encrypted credentials for your existing data sources, you must clear the RocksDB cache using the following steps:
    1. Run `dremio-admin upgrade`.
    2. Run `dremio start` and wait for Dremio to start up.
    3. Run `dremio stop`.
    4. Run `dremio-admin clean --compact`.
    5. Run `dremio start`.
To confirm that all existing data source credentials were encrypted successfully, check the server log from step 2 for messages like these:

```
2024-03-19 18:17:02,209 [main] INFO  c.dremio.exec.catalog.PluginsManager - Successfully migrate the source [s3]. Took 4531 milliseconds.  
2024-03-19 18:17:02,236 [main] INFO  c.dremio.exec.catalog.PluginsManager - Successfully migrate the source [glue]. Took 26 milliseconds.  
2024-03-19 18:17:02,236 [main] INFO c.dremio.exec.catalog.PluginsManager - Did not need to migrate the source [<source_name>]. Took 26 milliseconds.  
2024-03-19 18:17:02,236 [main] INFO  c.dremio.exec.catalog.PluginsManager - Completed sources migration. Total: 4611 milliseconds.  

```

  * Issues may occur when reading Apache Iceberg tables with equality deletes from Hive or Glue sources. To resolve this issue, upgrade to version 25.0.4. 
DX-90377
  * Incorrect dataset version sorting can result in "not found" error messages when listing datasets in the Dremio console. To resolve this issue, upgrade to version 25.0.4.
    * If you cannot upgrade to version 25.0.4, mitigate this issue by setting `store.dataset.versions.limit option` to a high number, such as `100000`. This prevents version trimming but increases database size. When you upgrade to 25.0.4, you must restore the `store.dataset.versions.limit option` setting to the default value, `50`, to control database size. 
DX-91598


DX-85812 was already added to the release notes for 24.0.0.
DX-85812 was already added to the release notes for 24.0.0.
DX-84620 was already added to the release notes for 24.0.0.
DX-65078 was already added to the release notes for 24.2.5.
DX-85901 was already added to the release notes for 24.3.2.
DX-74000 was already added to the release notes for 24.3.3.
DX-85123 was already added to the release notes for 24.3.3.
DX-56534 was already added to the release notes for 24.3.3.
DX-69759 was already added to the release notes for 24.3.3.
DX-86414 was already added to the release notes for 24.3.3.
DX-88043 was already added to the release notes for 24.3.4.
DX-87086 was already added to the release notes for 24.3.4.
DX-87660 was already added to the release notes for 24.3.4.
DX-86125 was already added to the release notes for 24.3.4.
DX-87876 was already added to the release notes for 24.3.4.
DX-87580 was already added to the release notes for 24.3.4.
DX-88194 was already added to the release notes for 24.3.4.
DX-86919 was already added to the release notes for 24.3.4.
Was this page helpful?
[Previous 26.x Release Notes](/release-notes/version-260-release)[Next Arrow Flight SQL JDBC Release Notes](/release-notes/arrow-flight-sql-jdbc)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous 26.x Release Notes](/release-notes/version-260-release)[Next Arrow Flight SQL JDBC Release Notes](/release-notes/arrow-flight-sql-jdbc)
