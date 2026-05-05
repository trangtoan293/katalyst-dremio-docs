---
url: /release-notes/unsupported-releases/version-240-release
title: "24.x Release Notes | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64385.61650825
---

  * [Dremio Enterprise Home](/)
  * [Release Notes](/release-notes)
  * [Unsupported Releases](/release-notes/unsupported-releases)
  * 24.x Release Notes

Version: current [26.x]
On this page
# 24.x Release Notes
Releases are listed in reverse order, starting with the latest release of Dremio 24.x.
## 24.3.21 (August 2025) Enterprise[​](/release-notes/unsupported-releases/version-240-release#24321-august-2025-enterprise "Direct link to 24321-august-2025-enterprise")
### Improvements and Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#improvements-and-issues-fixed "Direct link to Improvements and Issues Fixed")
  * Queries no longer fail due to a ConcurrentModificationException when runtime filters are present. 
DX-91670


## 24.3.20 (June 2025) Enterprise[​](/release-notes/unsupported-releases/version-240-release#24320-june-2025-enterprise "Direct link to 24320-june-2025-enterprise")
### Improvements and Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#improvements-and-issues-fixed-1 "Direct link to Improvements and Issues Fixed")
#### General Updates[​](/release-notes/unsupported-releases/version-240-release#general-updates "Direct link to General Updates")
  * Resolved an issue with row count estimates in Delta Lake tables that could lead to suboptimal query plans. 
DX-103030
  * Added the `delete-source` command to the `dremio-admin` CLI to delete a source. 
DX-102752


## 24.3.19 (April 2025) Enterprise[​](/release-notes/unsupported-releases/version-240-release#24319-april-2025-enterprise "Direct link to 24319-april-2025-enterprise")
### Improvements and Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#improvements-and-issues-fixed-2 "Direct link to Improvements and Issues Fixed")
  * CVE-2025-30065 has been fixed by backporting the related fix from the Apache parquet-java project to Dremio's internal fork and using this latest build in the Dremio release. 
DX-102461


## 24.3.16 (December 2024) Enterprise[​](/release-notes/unsupported-releases/version-240-release#24316-december-2024-enterprise "Direct link to 24316-december-2024-enterprise")
### Improvements and Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#improvements-and-issues-fixed-3 "Direct link to Improvements and Issues Fixed")
  * Fixed an issue where a duplicated table schema could be written to its metadata file. 
DX-97502
  * Fixed an issue that could occur due the fact that non-default support key settings cannot be read/validated in the executor, causing Nessie sources not to work intermittently. During plugin startup, the support key validation now occurs only in the coordinator. 
DX-97157
  * Fixed an issue with a permanent query slot loss in multi-coordinator setups that could gradually lose query concurrency slots on Workload Management (WLM) queues at very high loads when a client application pushes more queries to a particular WLM queue than the configured concurrency, causing the client application to time out and close its connection. Before the fix, restarting the coordinators was the only way to fix this issue. 
DX-98355


## 24.3.15 (November 2024) Enterprise[​](/release-notes/unsupported-releases/version-240-release#24315-november-2024-enterprise "Direct link to 24315-november-2024-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-240-release#whats-new "Direct link to What's New")
  * Added a new SQL function `TRY_CONVERT_FROM` to support converting a JSON to a user-specified type. `NULL` is returned when the JSON cannot be converted. 
DX-94338
  * The SQL function `CONVERT_FROM` for JSON now supports nested fields in `ROW` and `STRUCT` data types as input. 
DX-94336


### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed "Direct link to Issues Fixed")
  * Creating a Parquet table containing a mixed type column with a typeless child list no longer fails with an `IndexOutOfBoundsException`. Before writing the Parquet table, typeless child lists in mixed-type columns are now filtered out, because Parquet requires all lists to be strongly typed. 
DX-89811
  * Changed dataset owners now correctly appear in the Details panel. 
DX-97037
  * Fixed a rare issue where decorrelating a subquery with an `EXISTS` statement and an empty `GROUP BY` clause could result in incorrect data. 
DX-96652, DX-96946
  * Fixed an issue that could cause `ALTER TABLE` to fail with a "Schema change detected" error when using the SQL command to drop and re-add a column with an incompatible type. Reporting has also improved for any instance where data cannot be coerced to the user-defined column type. 
DX-87232
  * Fixed an issue that could return a `null` value for a `SELECT` query on a column when schema learning is disabled and the column type is incompatible with the column values. When the table schema is inconsistent with the data, an error will now be reported to recommend that you enable schema learning so Dremio can properly manage the schema based on the data. 
DX-88577


## 24.3.14 (October 2024) Enterprise[​](/release-notes/unsupported-releases/version-240-release#24314-october-2024-enterprise "Direct link to 24314-october-2024-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-1 "Direct link to Issues Fixed")
  * Fixed an issue where queries could be stuck in planning and accumulate until a coordinator restart is required. 
DX-94146
  * Incompatible runtime filters are now ignored so as to avoid an `UnsupportedOperationException` while setting up Parquet readers. 
DX-90910


## 24.3.13 (October 2024) Enterprise[​](/release-notes/unsupported-releases/version-240-release#24313-october-2024-enterprise "Direct link to 24313-october-2024-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-2 "Direct link to Issues Fixed")
  * Fixed an issue that could cause an "Unable to find the reference field" error during query planning due to Common Subexpression Elimination (CSE). 
DX-90660
  * Fixed an issue that could cause some queries against INFORMATION_SCHEMA tables to fail when filtering columns by LOWER, UPPER, LCASE, or UCASE expressions. 
DX-93900
  * Fixed an issue that could cause duplicate or triplicate result sets to be returned when querying against MongoDB sources. 
DX-96251


## 24.3.12 (September 2024) Enterprise[​](/release-notes/unsupported-releases/version-240-release#24312-september-2024-enterprise "Direct link to 24312-september-2024-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-240-release#whats-new-1 "Direct link to What's New")
  * SELECT queries in CREATE TABLE AS and INSERT/SELECT statements now use Reflections to accelerate the queries. 
DX-94311


### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-3 "Direct link to Issues Fixed")
  * The option to enable single sign-on for Tableau is now disabled by default. 
DX-93910
  * Fixed a performance issue for Iceberg tables that could occur when Dremio reads [position delete files](/developer/data-formats/apache-iceberg/table-maintenance-optimization/optimizing#optimizing-tables-with-position-delete-files). Previously, a position delete file could be accessed multiple times by different scan threads. Now all delete rows are read once and joined with the data files. 
DX-92450
  * Fixed the NullPointerException in RowGroups querying Parquet files with incomplete stats. 
DX-95188
  * Fixed the rare NullPointerException in NamespaceTable$1.getRowCount() that could occur during incremental metadata refresh. 
DX-94944


## 24.3.11 (August 2024) Enterprise[​](/release-notes/unsupported-releases/version-240-release#24311-august-2024-enterprise "Direct link to 24311-august-2024-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-4 "Direct link to Issues Fixed")
  * Fixed an issue that could cause VACUUM CATALOG to fail with a `ContainerNotFoundException` exception. Also fixed a bug that could cause VACUUM CATALOG to fail with `IllegalArgumentException` if a view is created in a Nessie catalog. 
DX-93461, DX-94427
  * Added limits for option manager cache size and set expiration for items in the cache. 
DX-91244


## 24.3.10 (August 2024) Enterprise[​](/release-notes/unsupported-releases/version-240-release#24310-august-2024-enterprise "Direct link to 24310-august-2024-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-240-release#whats-new-2 "Direct link to What's New")
  * Dremio now assigns `999` as the group ID (GID) and user ID (UID) for dremio:dremio at Docker image build time. 
DX-94444


### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-5 "Direct link to Issues Fixed")
  * Fixed an issue that could prevent partition columns from being applied in INSERT and CREATE TABLE AS statements. 
DX-83067
  * Fixed an issue when reading Delta Lake checkpoint files for partitioned tables that could result in 0 rows returned. 
DX-92976


## 24.3.9 (August 2024) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2439-august-2024-enterprise "Direct link to 2439-august-2024-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-240-release#whats-new-3 "Direct link to What's New")
  * Dremio now supports the newline character `\n` in regular expression (regex) matching for the [LIKE](/reference/sql/sql-functions) SQL function. 
DX-82992


### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-6 "Direct link to Issues Fixed")
  * Queries no longer fail if an underlying default raw Reflection becomes invalid for substitution against the view. 
DX-85139
  * Reflections with complex type fields no longer show an unavailable status after a successful refresh. 
DX-93493
  * Fixed a bug for complex queries that could result in an error message about the code being too large. 
DX-90491
  * The [`dremio-admin backup`](/reference/admin-cli/backup) argument `-a, --accept-all` now allows requests to secure deployments with self-generated certificates and ignores invalid and untrusted certificates. 
DX-92358
  * Accessing nested fields from a complex-type field no longer results in slow performance. 
DX-92588
  * Fixed a performance issue that affected queries that contain many GET calls for large arrays. 
DX-61308
  * The MongoDB driver now uses server selection timeout on cluster settings rather than connect and read timeouts on socket settings to prevent timeout exception errors. 
DX-85189
  * Fixed an issue with unlimited splits that could result in duplicate metadata entries for Parquet files. 
DX-91849
  * Usernames in Arrow Flight JDBC/ODBC and Legacy JDBC/ODBC jobs are now shown in the same consistent case regardless of the case in the connection URL. 
DX-41303
  * Fixed an issue that could result in incorrect row group pruning when the statistics are empty for Parquet files. 
DX-90854
  * Dremio now reads only the required fields from complex structure-type columns. For example, if column1 in tableA is type `{'a':1, 'b':2}` and you run the query `SELECT column1.a from tableA`, Dremio only reads field `a` from column1. 
DX-93643


## 24.3.8 (July 2024) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2438-july-2024-enterprise "Direct link to 2438-july-2024-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-240-release#whats-new-4 "Direct link to What's New")
  * Added a new Dataset API endpoint, `POST /dataset/{id}/reflection/recommendation/{type}`, for retrieving Reflection recommendations by Reflection type for a dataset. 
DX-89497


### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-7 "Direct link to Issues Fixed")
  * The query planner no longer fails for queries that use experimental settings related to the bushy join optimizer. 
DX-91859
  * To prevent unexpected out-of-memory errors, the Parquet vectorized reader allocates only the necessary amount of memory for scanning deeply nested structures. 
DX-90471
  * Fixed the NullPointerException (NPE) in logging while refreshing metadata for Delta Lake tables. 
DX-89302
  * Fixed an issue that prevented Hive sources that use assumed roles from running asynchronous queries via the "Enable asynchronous access for Parquet datasets" option. 
DX-84153
  * Exiting the Reflections tab in Settings for tables and views no longer results in an unsaved-changes warning. 
DX-91719
  * Fixed an issue that could result in a NullPointerException when running a DML statement on an accelerated table. 
DX-91682
  * You can now enable the `planner.enhanced_filter_join_guardrail` support key to prevent an infinite loop as a guardrail for EnhancedFilterJoinRule. 
DX-91532
  * The CONVERT_TIMEZONE SQL function now works properly for Druid data sources. 
DX-90669
  * Fixed a bug that could cause the default selected columns for raw Reflections to fail to include all columns of a dataset. 
DX-89497
  * In the Dremio console, resolved an issue that could prevent spaces from expanding to display their contents in the Datasets panel. 
DX-87317 DX-92284
  * Fixed a rare NPE that could occur when accessing large Delta Lake tables in metastore sources. 
DX-67629
  * In the Workload Management API, the default rule is now included in responses to requests to [retrieve all rules](/reference/api/wlm/rule#retrieve-all-rules) for new clusters. 
DX-90072
  * Fixed an issue that could cause queries to fail during planning with the error "Job was canceled because the query is too complex". 
DX-92283


## 24.3.7 (June 2024) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2437-june-2024-enterprise "Direct link to 2437-june-2024-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-8 "Direct link to Issues Fixed")
  * Updated the following library to address potential security issues: 
DX-91055
    * org.postgresql:postgresql to version 42.4.5 [CVE-2024-1597]
  * Reduced the logging level of an internal catalog class to prevent server logs from being flooded with spurious messages. 
DX-88784
  * For Iceberg tables in Hive data sources, table properties are now saved properly. 
DX-90551
  * For MongoDB tables, Dremio now adds an exclusive projection to queries if no projection exists and properly excludes dropped fields from queries. This resolves issues involving maximum field size and leaf nodes and potentially improves performance. 
DX-85874
  * Reading a Delta Lake table no longer results in an error about an invalid Parquet file. 
DX-79957
  * When a Reflection with manual refresh status fails to refresh because it is not available for acceleration, users will now see a red failure icon instead of a yellow warning icon in the Dremio console. 
DX-71027
  * Reflections no longer produce incorrect results due to incorrectly matching into queries that include the ROLLUP option. 
DX-90879


## 24.3.6 (May 2024) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2436-may-2024-enterprise "Direct link to 2436-may-2024-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-9 "Direct link to Issues Fixed")
  * For MapR deployments, removed configuration properties `MAPR_MAX_RA_STREAMS` and `MAPR_IMPALA_RA_THROTTLE` from the `dremio start` script and from the code responsible for Yarn configuration. 
DX-88701
  * Fixed a bug that could result in an "out of memory" error when running `dremio-admin clean -o`. 
DX-90073
  * Fixed `FileNotFoundException` for unlimited splits. 
DX-90924
  * Fixed an issue where the `TO_DATE` function was used with invalid options. 
DX-90413
  * Fixed an error where planning a query could fail with a "Cannot add expression to different types of set" message. 
DX-90032
  * Updated Oracle to use OJDBC8 driver for Dremio 24.3.x versions. 
DX-90906
  * Nested boolean fields are no longer pushed down to a MongoDB source under particular circumstances. 
DX-90105


## 24.3.5 (April 2024) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2435-april-2024-enterprise "Direct link to 2435-april-2024-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-10 "Direct link to Issues Fixed")
  * When users update a Reflection using the Reflections API, the `createdAt` value is no longer updated. 
DX-89278
  * The view owner is now properly listed in the Dremio console when it is changed. 
DX-88705
  * Fixed an issue with case-sensitivity that caused delayed processing of inherited privileges. 
DX-88683
  * Promoted datasets with inconsistent partition depth no longer occasionally throw an `ArrayIndexOutOfBoundsException` when filtering against deeper partitions. 
DX-88365
  * Dremio now uses multiple writers in parallel for non-partitioned table optimization. The small files generated during the writing are combined by another round of writing with a single writer. 
DX-88174
  * `OPTIMIZE TABLE` statements ending with semicolons are now supported in the SQL Runner. 
DX-85903
  * Dremio field size limits now apply properly for the output of the `ARRAY_AGG` SQL function. 
DX-87000
  * (AWSE only) Fixed an issue that resulted in an `UnsupportedOperationException` error when users clicked to query a dataset. 
DX-89390


## 24.3.4 (March 2024) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2434-march-2024-enterprise "Direct link to 2434-march-2024-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-240-release#whats-new-5 "Direct link to What's New")
  * Dremio is compatible with Arrow Flight JDBC 15. You can download it from the [JDBC driver downloads page](https://www.dremio.com/drivers/jdbc/).
DOCS-1319


### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-11 "Direct link to Issues Fixed")
  * SQL functions now work properly in queries on system tables. 
DX-52626
  * When you open a table from the SQL Runner by clicking ![](https://docs.dremio.com/images/icons/go-to-table.png), Dremio now displays the correct table definition. 
DX-87438
  * On the Queues page under **Settings** &gt; **Queues** , alphabetical sorting for the Engine Name column now works properly. 
DX-87086
  * Fixed a row-count estimation issue that could result in a NullPointerException when an estimate cannot be provided. 
DX-69646
  * To reduce cache contention with other query workloads, C3 caching is disabled when loading Parquet source files via the COPY operation. 
DX-85365
  * Reflections with user-defined functions (UDFs) that contain context-sensitive functions can no longer be created. 
DX-86078
  * Performance is improved and memory consumption is reduced for some INFORMATION_SCHEMA queries that filter on TABLE_NAME or TABLE_SCHEMA. 
DX-87580
  * Users who do not belong to the `ADMIN` role cannot view the User filter or the list of users on the Jobs page. 
DX-87660
  * Fixed an issue that caused the details of jobs not to be updated in the Dremio console when jobs were running. 
DX-86983
  * Fixed an issue in the SQL Runner where expanding the large data field by using the ellipsis (...) caused the results to be unresponsive when the data included DateTime objects. 
DX-86541
  * Fixed incorrect column mapping within MERGE statements that could lead to incorrect merge results. 
DX-86919
  * Fixed an issue with snapshot-based incremental Reflection refresh for unlimited-split datasets on Hive that could result in excessive heap usage due to metadata access during Reflection refresh. 
DX-88194
  * The Add Folder icon now displays properly when the `ui.upload.allow` support key is turned off. 
DX-88148
  * Fixed a bug that prevented script names from being saved after users rename a tab and edit the SQL content. 
DX-86751
  * For folders that contain views that were created or updated using the `CREATE OR REPLACE` SQL command, users can now open the folders in the Dremio console even if the view's name has changed. 
DX-86125
  * Save As View now works properly after saving the view previously in the SQL editor. 
DX-85904
  * Background threads no longer run when a query in the SQL Runner is cancelled or fails. 
DX-85812
  * Navigating between datasets using the lineage graph in the Dremio console no longer results in a message about unsaved changes. 
DX-87876
  * To get a count of the number of rows in a table, Dremio now requests an 
DX-88043


  * Authentication with a secret resource URL now works properly for Amazon Redshift, Oracle, and PostgreSQL data sources. 
DX-88293


## 24.3.3 (February 2024) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2433-february-2024-enterprise "Direct link to 2433-february-2024-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-240-release#whats-new-6 "Direct link to What's New")
  * The [ARRAY_INSERT](/reference/sql/sql-functions) SQL function is now supported. 
DX-86130


### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-12 "Direct link to Issues Fixed")
  * Creating user-defined functions (UDFs) that reference UDFs outside of the root context no longer fails with the error `UnsupportedOperationException: Failed to match SQL Operators for: `UDF_NAME``. 
DX-86836
  * [Automatic Nessie maintenance and the manual `dremio-admin nessie-maintenance` command](/reference/admin-cli/nessie-maintenance) are now available in Dremio AWSE. 
DX-56534
  * When a user executes the [COPY INTO](/reference/sql/commands/apache-iceberg-tables/copy-into-table) SQL command but does not have the necessary privileges, Dremio now raises an exception that indicates the source-storage location or source file on which the user lacks privileges. 
DX-85977
  * Dremio now reduces scan-column output when possible. 
DX-86355
  * The planning of queries on views that use an `INTERVAL` data type no longer fails. 
DX-86315
  * Fixed an issue that could cause RocksDB to consume too much storage space when you add, update, or delete datasets. 
DX-86414
  * Query-planning times are now shorter during the metadata-validation phase. 
DX-86504
  * Row-type matching of EmptyRel nodes now works properly. 
DX-85401
  * Switching between tabs in the SQL Runner no longer results in a dialog that indicates a failed query. 
DX-85401
  * Queries that reference multiple nullable columns in OR conditions no longer return incorrect results. 
DX-85581
  * Dremio now optimizes how `LIMIT 0` and filters that evaluate to `false` are represented in query plans. 
DX-74000
  * The values in VALUES clauses are now honored at the precision defined in the query, rather than being deserialized with only DOUBLE or BIGINT precision. 
DX-84406
  * The performance of health checks for AWS Glue Data Catalog sources has been improved with checks of the state of the metastore and attempts to retrieve databases with a specified maximum result limit for 1. 
DX-85641
  * Cancelled queries now immediately stop reading data from data sources. 
DX-69759
  * Queries against Iceberg tables with positional deletes no longer fail with an error such as `The current delta should always be larger than the amount of values to skip.`
DX-85123
  * If a query used in a Reflection contains a user-defined function (UDF), Reflection refreshes no longer fail with a plan-serialization error. 
DX-66628
  * Fixed an issue that caused queries to fail with the error `IllegalArgumentException: No decimal present`. 
DX-85876


## 24.3.2 (January 2024)[​](/release-notes/unsupported-releases/version-240-release#2432-january-2024 "Direct link to 24.3.2 \(January 2024\)")
### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-13 "Direct link to Issues Fixed")
  * The [known issue for AWSE deployments](/release-notes/version-240-release#known-issues-3) described in the 24.3.1 release notes is now resolved. 
DX-86442
  * In the [`sys.jobs_recent`](/reference/sql/system-tables) system table, the `error_msg` column now contains any applicable error summaries. Also, the `final_state_epoch_millis` and `final_state_ts` columns contain the correct values for jobs that reach a final state. 
DX-83529
DX-85751
  * If you run a subset of queries in the SQL Runner, and any of the queries in the subset fails, Dremio now properly identifies the queries that fail with a red wavy underline. 
DX-85901
  * Unneeded columns are now trimmed from JDBC pushdowns. 
DX-85187
  * Fixed an issue that could occur when an appropriate correlated field was selected for correlated sub-queries. 
DX-85193
  * To improve per-engine configurability for executor autoscaling, you can now configure a graceful termination period for each engine to allow time for any running queries to complete before the engine shuts down and cancels the running queries. 
DX-86012
  * Dremio now removes expired snapshots of metadata tables when using [unlimited splits](/admin/metadata-caching). 
DX-69752


## 24.3.1 (January 2024) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2431-january-2024-enterprise "Direct link to 2431-january-2024-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-14 "Direct link to Issues Fixed")
  * Reflections now accelerate properly after upgrade. 
DX-85167
  * Reflections with the `UNIX_TIMESTAMP` SQL function no longer result in an exception. 
DX-85994
  * The Go to Table (![](https://docs.dremio.com/images/icons/go-to-table.png)) icon now appears on the Datasets page for tables and views when the **Query on click** preference is disabled. 
DX-85964
  * Fixed an issue where queries containing correlated subqueries in the join condition could return duplicate rows. 
DX-83748
  * Queries no longer fail on MongoDB collections that contain a field with both double and decimal128 type values. 
DX-85679
  * Resolved a path travel security issue that bypassed folder-level role-based access control (RBAC). 
DX-84516
  * Fixed an issue that caused subqueries with a `SINGLE_VALUE` aggregate to fail with AssertionError `Cannot add expression of different type to set`. 
DX-85208
  * Row-level runtime filtering is disabled for Reflection refresh jobs so that views no longer return incorrect results due to an incorrect match to a single Starflake Reflection. 
DX-68144


### Known Issues[​](/release-notes/unsupported-releases/version-240-release#known-issues "Direct link to Known Issues")
  * Creating user-defined functions (UDFs) that reference UDFs outside of the root context fails with the error `UnsupportedOperationException: Failed to match SQL Operators for: `UDF_NAME``.
  * For **AWSE deployments** , if you upgrade to 24.3.1 from any 24.2.x release, you may encounter the following error:
Error Message: AWSE Deployments Upgrading from a 24.2.x Release

```
Completed EFS mounting  
Completed EFS attachment to EC2  
Starting Services  
Failed to start Services. Failure while starting services. Failure reading configuration file. The following properties were invalid: paths.copyintoerrors  

```

**Before you upgrade**
To avoid the error, remove the following line from `/opt/dremio/conf/dremio.conf` before you run the AWSE upgrade:

```
paths.copyintoerrors = "dremioS3:///dremio-xxxxxxxxxx/dremio/copyintoerrors"  

```

**Resolve the error if you already upgraded**
If you already upgraded and encountered the error, follow these steps:
    1. Restore your AWSE 24.2.x installation.
    2. Remove the following line from `/opt/dremio/conf/dremio.conf`:

```
paths.copyintoerrors = "dremioS3:///dremio-xxxxxxxxxx/dremio/copyintoerrors"  

```

    3. Stop Dremio and re-run the AWSE upgrade to 24.3.1.
If you do not have a backup, contact Dremio technical support to discuss the steps outlined in the knowledge-base article [AWSE upgrade fails with "The following properties were invalid: paths.copyintoerror"](https://support.dremio.com/hc/en-us/articles/21994393029659-AWSE-upgrade-fails-with-The-following-properties-were-invalid-paths-copyintoerror-).


## 24.3.0 (December 2023)[​](/release-notes/unsupported-releases/version-240-release#2430-december-2023 "Direct link to 24.3.0 \(December 2023\)")
### What's New[​](/release-notes/unsupported-releases/version-240-release#whats-new-7 "Direct link to What's New")
  * The new system table `sys.jobs_recent` shows the metadata for jobs that ran in the Dremio instance during the previous number of days specified by the support key `jobs.max.age_in_days`. For more information, see [SYS.JOBS_RECENT](/reference/sql/system-tables). 
DX-51926
  * You can now use the `ON_ERROR` option in the `COPY INTO` command to specify what to do (abort or continue) if an error is encountered during the loading process when you are loading data from CSV or JSON files. 
DX-59094
  * You can use table properties to configure many aspects of Iceberg tables. The full list of table properties is [create](/reference/sql/commands/create-table) or [alter](/reference/sql/commands/alter-table) an Iceberg table. To view the properties that are set for a table, use the SQL command [SHOW TBLPROPERTIES](/reference/sql/commands/show-table-properties).
DX-61128
  * A row group filter has been added to scans of Parquet tables, which helps with the pruning row groups. 
DX-61349
  * Dremio is now capable of reading Parquet V2 files with the vectorized reader, which significantly decreases the scanning time of such files. Writing Parquet V2 files is also available by using the support option "store.parquet.writer.version". The available values are "v1 and "v2". The default value is "v1". 
DX-63377
  * The `VACUUM CATALOG` command removes expired snapshots and orphaned metadata files for all Iceberg tables in the specified Nessie catalog source. 
DX-63380
DX-67847
  * This release includes a number of changes to improve performance and row count estimates when working with Delta Lake tables. 
DX-65077
  * If a query returns limited results in the SQL Runner, there will be a warning notification above the results table. The number of rows will indicate a range rather than an exact number and have a tooltip to explain the limited results. 
DX-65151
  * When using operations like CTAS, `INSERT`, and `MERGE` (and others) on Iceberg tables that have a sort column, the data is written to the table in the order defined by that column. You can define one or more sort columns by using the LOCALSORT BY clause. 
DX-65553
  * This release adds support for the following SQL functions: `ARRAY_AGG`, `ARRAY_CAT`, `ARRAY_COMPACT`, `ARRAY_DISTINCT`, `ARRAY_GENERATE_RANGE`, `ARRAYS_OVERLAP`, `ARRAY_POSITION`, `ARRAY_REMOVE_AT`, `ARRAY_SIZE`, `ARRAY_TO_STRING`, `SET_UNION`, `ARRAY_APPEND`, `ARRAY_PREPEND`, `ARRAY_SLICE`. 
DX-66446
DX-67713
DX-68083
DX-71570
DX-68793
DX-68082
DX-68069
DX-68612
  * Dremio can automatically choose incremental refresh or full refresh for Reflections that are defined on these types of datasets filesystem, Glue, and Hive sources: 
    * Parquet datasets in Filesystem sources (on S3, ADLS, GCS, or HDFS)
    * Parquet datasets, Avro datasets, or non-transactional ORC datasets on Glue or Hive (Hive 2 or Hive 3) sources 
DX-67226
  * Dictionary encoding is now enabled by default for Parquet files. 
DX-67234
  * Snapshots of Reflections that are refreshed incrementally are automatically deleted when they are no longer used. 
DX-67756
  * Planning time with Reflections has been significantly improved. Acceleration profile now contains a detailed breakdown of Reflection normalization and substitution times. 
DX-68120
  * Dremio now recommends partition columns for Reflections in the Advanced Reflections editor. 
DX-68214
  * When a Reflection cannot be recommended for a query, the ID of the job that ran the query is included in the error message. 
DX-68571
  * The `COPY INTO` command now supports Parquet files. 
DX-68624
  * The `COPY INTO` command supports two new format options for CSV source files: `EXTRACT_HEADER` and `SKIP_LINES`. 
DX-68717
  * Support has been added for offset values greater than 1 for the LEAD and LAG window functions. 
DX-68730
  * Improved the visual profiler by including information, such as data skew, estimation accuracy, and disk spilling, that can be useful for diagnostics. 
DX-68851
  * You can now use [tabs](/query-manage/querying-data/#6-sql-editor) in the SQL Runner to work on multiple tasks simultaneously. All of your work in each tab is autosaved. 
DX-68951
  * You can [see a view definition](/data-products/develop#retrieve-a-view-definition) or [Nessie table definition](/data-sources/lakehouse-catalogs/nessie#retrieving-a-table-definition) if you have the `SELECT` privilege, although [editing a view definition](/data-products/develop#edit-a-view) requires further privileges. 
DX-68952
  * Support has been added for `SHOW CREATE VIEW` to see a view definition and `SHOW CREATE TABLE` to see a table definition. For more information, see [SHOW CREATE VIEW](/reference/sql/commands/show-create-view) and [SHOW CREATE TABLE](/reference/sql/commands/show-create-table). 
DX-68952
  * The support key `Reflection.manager.auto_refresh_failed` for rebuilding the materialization of Reflections after an upgrade is no longer needed and has been removed. 
DX-71973
  * Dremio Arctic and all of its related features are no longer in preview mode. 
DX-82613
  * You can now see syntax errors in your SQL query as you enter the query into the SQL editor. Each error is automatically detected with a red wavy underline and contains information about the type of error. For more information, see [Syntax Error Highlighting](/query-manage/querying-data/#syntax-error-highlighting). 
DX-82679
  * The dataset details panel in the SQL runner no longer overlays the right side of the SQL runner and the catalog page. Whenever it is opened, the width of the page is reduced so that controls are not hidden. 
DX-82691
  * The `COPY INTO` command now supports specifying which Nessie branch or reference the target table is in. 
DX-83269
  * The **Save As View** dialog now allows you to create a folder while saving a view. 
DX-83562
  * New in `dremio-cloud-tools`: 
    * Dremio executor nodes now have new two configuration variables for use only in the context of autoscaling on Kubernetes:  
| Variable  | Default  |  
| --- | --- |  
| `node_lifecycle_service_enabled`  | False  |  
| `dremio.termination_grace_period_seconds`  | 5  |  
Enabling the lifecycle service forces the executor to continue to process existing in-flight queries even after a SIGTERM is received. It continues for a duration up to the value specified by `dremio.termination_grace_period_seconds`. This ensures clean completion of work in the event of executor scale down.
DC-58905
    * A larger PVC volume is now used for the KVStore by default.
DX-85624
    * Changes were made to the Liveliness probe to work around a bug in the source ZooKeeper image. The bug is reported 
DX-85280
  * These terms were added to the list of reserved keywords: `JSON_ARRAY`, `JSON_ARRAYAGG`, `JSON_EXISTS`, `JSON_OBJECT`, `JSON_OBJECTAGG`, `JSON_QUERY`, and `JSON_VALUE`.


### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-15 "Direct link to Issues Fixed")
  * Dremio now reads invalid values in date and timestamp partition columns as null in conformity with Hive. 
DX-24014
  * Fixed an issue with the default Jobs results cleanup path that was resulting in disk space issues and unexpected restarts on some cluster nodes. 
DX-41291
  * Changing the size of an existing EC2 engine on Dremio's AWS Edition was resetting the engine type. 
DX-54590
  * If a source owner is removed from Dremio, another user with permission to the source can now promote datasets and change the source configuration in place of the owner that was removed. 
DX-58562
  * Fixed a number of issues that were affecting proper handling of inferred partition columns, specifically `FOR PARTITIONS (...)` was not working for inferred partition columns. 
DX-60565
  * Using `AES_DECRYPT` with an incorrect key was causing Dremio to restart unexpectedly instead of providing an error with a clear description of the issue. 
DX-61688
  * Some queries that contained large `IN` conditions were failing with a stack overflow error. 
DX-62755
  * Fixed an issue that was causing certain queries to fail when using hash joins, leading to an unexpected restart of an executor. 
DX-63029
  * Fixed the following issues with acceleration information in job profiles when the plan cache was used: acceleration information was missing for a prepared query, plan cache usage was missing for a prepared query, acceleration information was missing when the query was not accelerated but Reflections were considered, and canonicalized user query alternatives were missing. Additionally, matching hints were missing for Reflections that were only considered. 
DX-64636
  * The space overhead of metadata for Text, JSON, and Excel datasets has been reduced. 
DX-65640
  * Fixed an issue with partitions on these types of datasets. Metadata refresh could be triggered even when nothing had changed. 
    * Parquet datasets in Filesystem sources (on S3, ADLS, GCS, or HDFS)
    * Parquet datasets, Avro datasets, or non-transactional ORC datasets on Glue or Hive (Hive 2 or Hive 3) sources 
DX-66548
  * Plans for queries containing `CONVERT_FROM` could not be cached. 
DX-66675
  * Fixed a few issues with acceleration info in job profile when plan cache is used. 
DX-66930
  * The `AES_ENCRYPT` and `AES_DECRYPT` functions will now return an error if the key length is not 16, 24, or 32 characters. 
DX-67209
  * Dremio was allowing invalid Parquet files to be promoted, resulting in a `DATA_READ ERROR: Failed to decode column` error when a `SELECT` was run against a file.
DX-67631
  * Upgraded io.netty:netty-handler to 4.1.96 to address a potential security issue [CVE-2023-34462]. 
DX-67936
  * Dremio queries in some Tableau executors would start failing after the access token had expired and been renewed. 
DX-68133
  * Row-level runtime filtering is disabled for Reflection refresh jobs so that views no longer return incorrect results due to an incorrect match to a single Starflake Reflection. 
DX-68144
  * In some cases, running `ALTER TABLE `table_path` FORGET METADATA` against a view could result in the view being deleted instead of the command failing with an error. 
DX-68202
  * Dremio can now format DeltaLake tables that have large schemas. 
DX-68667
  * Fixed an issue that caused incremental refreshes to fail when encountering the FLATTEN SQL function. 
DX-68750
  * Added support for the following regions in the AWS Glue source: 
    * ap-south-2: Asia Pacific (Hyderabad)
    * ap-southeast-3: Asia Pacific (Jakarta)
    * ap-southeast-4: Asia Pacific (Melbourne)
    * eu-south-2: EU (Spain)
    * eu-central-2: EU (Zurich)
    * me-central-1: Middle East (UAE) 
DX-69347
  * For some browsers, an interruption in connectivity can cause a failure in updating the status of long-running queries. 
DX-69909
  * AWSE backups were failing when a custom created EBS volume was manually attached to a Dremio instance. 
DX-70889
  * Fixed an issue with spillable hash join where left join with extra condition was giving incorrect results. 
DX-79862
  * Metadata on AWS Glue sources was not being refreshed according to the schedule defined on the source. In some cases, new data was only seen after running `ALTER TABLE `table` REFRESH METADATA`. 
DX-82900
  * Reflection and query plan caches are now cleared when they are disabled to ensure that queries do not use a deprecated Reflection. 
DX-83117
  * Fixed an issue with node endpoint checks that could cause restart of coordinators in certain cases. 
DX-83120
  * It was possible for `LIMIT` queries to use only one thread for execution. 
DX-83289
  * Dremio was unable to read and query AWS Glue table partitions if partition column names or partition values contained spaces or other special characters. 
DX-83517
  * Fixed the issue of inserting large number of values, which was hitting stack issues, by constructing a balanced Union subtree. 
DX-83775
  * Upgrading to 24.3.0 from earlier versions of Dremio (24.1.4 and 24.2.0 through 24.2.4) could result in Glue regions changing within sources. 
DX-83895
  * In some circumstances, it was not possible to access the **Save** button when creating or editing a MongoDB source. 
DX-83897
  * Disable the functionality that metadata refresh jobs on Parquet tables gradually remove expired snapshots from the distributed store. This functionality could be enabled manually by enabling the support key. 
DX-84083
  * User will now see blank instead of error message for "Last Refresh from Table" in the raw profile UI when that information is missing from a profile. 
DX-84115
  * Fixed an issue where multiple Oracle scans were not being parallelized. 
DX-84246
  * Updated Dremio and Dremio's Hive 3 package to consume Avro 1.11.3 to address 
DX-84620
  * Added the Queue filter to jobs listing page. 
DX-84511
  * Updated snappy-java to 1.10.5. 
DX-84755
  * Fixes an issue with the Druid connector where a Preview query times out when querying tables with large amounts of data. 
DX-84983
  * Fixes an issue where an incorrect timeout value was being used in the MongoDB driver. 
DX-85189
  * Fixed in `dremio-cloud-tools`: Resolved incorrect calculations of the amount of memory on executor nodes.
DX-60356


### Known Issues[​](/release-notes/unsupported-releases/version-240-release#known-issues-1 "Direct link to Known Issues")
  * If you have the **Query on click** preference disabled, the Go to Table (![](https://docs.dremio.com/images/icons/go-to-table.png)) icon is missing from the Datasets page for tables and views. To query the dataset, click the ellipsis (...) and select Query, or go directly to the SQL Runner by clicking ![](https://docs.dremio.com/images/sql-runner-icon.png) in the left navigation panel.
  * The following words were incorrectly made reserved keywords: `ABSENT`, `CONDITIONAL`, `ENCODING`, `ERROR`, `FORMAT`, `PASSING`, `RETURNING`, `SCALAR`, `UNCONDITIONAL`, `UTF8`, `UTF16`, `UTF32`.
  * Creating user-defined functions (UDFs) that reference UDFs outside of the root context fails with the error `UnsupportedOperationException: Failed to match SQL Operators for: `UDF_NAME``.


## 24.2.11 (April 2024) Enterprise[​](/release-notes/unsupported-releases/version-240-release#24211-april-2024-enterprise "Direct link to 24211-april-2024-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-16 "Direct link to Issues Fixed")
  * In the Dremio console, when you run a query in the SQL runner, the page no longer briefly displays the previous query's results. 
DX-83509
  * Promoted datasets with inconsistent partition depth no longer occasionally throw an `ArrayIndexOutOfBoundsException` when filtering against deeper partitions. 
DX-88365
  * Users who do not belong to the `ADMIN` role cannot view the User filter or the list of users on the Jobs page. 
DX-87660


## 24.2.10 (January 2024) Enterprise[​](/release-notes/unsupported-releases/version-240-release#24210-january-2024-enterprise "Direct link to 24210-january-2024-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-17 "Direct link to Issues Fixed")
  * [Automatic Nessie maintenance and the manual `dremio-admin nessie-maintenance` command](/reference/admin-cli/nessie-maintenance) are now available in Dremio AWSE. 
DX-56534
  * In the Dremio console, when you navigate to the SQL Runner page, clicking the browser's back button now returns to the previous page from which you navigated to SQL Runner. 
DX-64993
DX-85405


## 24.2.8 (January 2024) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2428-january-2024-enterprise "Direct link to 2428-january-2024-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-18 "Direct link to Issues Fixed")
  * Unneeded columns are now trimmed from JDBC pushdowns. 
DX-85187
  * Fixed an issue that caused queries to fail with the error `IllegalArgumentException: No decimal present`. 
DX-85876


## 24.2.7 (January 2024) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2427-january-2024-enterprise "Direct link to 2427-january-2024-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-19 "Direct link to Issues Fixed")
  * Changing the size of an existing EC2 engine in Dremio's AWS Edition no longer resets the engine type. 
DX-54590
DX-71086
  * Cancelled queries now immediately stop reading data from data sources. 
DX-69759
  * Fixed an issue with node endpoint checks that could cause coordinators to restart. 
DX-83120
  * Fixed an issue when selecting the appropriate correlated field for correlated sub-queries. 
DX-85193
  * Fixed an issue that caused subqueries with a `SINGLE_VALUE` aggregate to fail with AssertionError `Cannot add expression of different type to set`. 
DX-85208
  * `IS_MEMBER` queries no longer result in a null pointer exception when using Azure Active Directory (AAD). 
DX-85614
  * Queries no longer fail on MongoDB collections that contain a field with both double and decimal128 type values. 
DX-85679
  * Resolved a path travel security issue that bypassed folder-level role-based access control (RBAC). 
DX-84516


## 24.2.6 (November 2023) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2426-november-2023-enterprise "Direct link to 2426-november-2023-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-20 "Direct link to Issues Fixed")
  * Metadata refresh queries now succeed for Parquet tables that contain one or more columns whose names include a dot character, such as `column.name`. 
DX-66623
  * Resolved an issue that caused missing manifest files when using [unlimited splits](/admin/metadata-caching). 
DX-84083
  * Fixed a performance issue that affected queries that contain many GET calls for large arrays. 
DX-61308
  * When using the SQL editor, users can now leave the browser tab where the SQL editor is running, return after several minutes of inactivity, and continue using the SQL editor without refreshing the tab. 
DX-83340
  * Fixed an issue where queries containing JDBC scans were not properly parallelized. 
DX-84246
  * Updated Dremio and Dremio's Hive 3 package to consume Avro 1.11.3 to address a potential security issue [CVE-2023-39410]. 
DX-84620
  * Updated snappy-java to 1.10.5 to address a potential security issue [CVE-2023-43642]. 
DX-84755


## 24.2.5 (November 2023) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2425-november-2023-enterprise "Direct link to 2425-november-2023-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-240-release#whats-new-8 "Direct link to What's New")
  * Improved the ability to delegate to sources the processing of predicates in queries on Iceberg tables when the predicates include date-time filters that use functions that reference a column. 
DX-65078
  * Added the option to force parallelism in write queries by using a round-robin exchange before the writer, even when input is only single-threaded. Enable this option by enabling the support key `planner.writer.round_robin`. 
DX-64388


### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-21 "Direct link to Issues Fixed")
  * Upgrading from Dremio `19.0.0` to `24.2.0` could cause duplicate and triplicate results from MongoDB. 
DX-83100
  * Upgrading from early Dremio `24.x.x` versions to Dremio AWSE `24.2.2` caused Glue source regions to change. 
DX-83895
  * C3 system stats for storage_plugins, mount_points, datasets, objects were missing due to an internal error. They have been enabled again. 
DX-83172
  * Fixed an issue where queries containing correlated subqueries in the join condition could return duplicate rows. 
DX-83748
  * Disabled the functionality that caused metadata refresh jobs on Parquet tables to gradually remove expired snapshots from the distributed store. This functionality can be enabled manually by enabling the support key `Dremio.unlimited_splits.metadata.clean.enabled`. 
DX-84083
  * Fixed a row count estimation issue that could result in a NullPointerException when an estimate cannot be provided. 
DX-69646


## 24.2.3 (October 2023) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2423-october-2023-enterprise "Direct link to 2423-october-2023-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-240-release#whats-new-9 "Direct link to What's New")
  * In this release, Reflection and query plan caches are cleared when they are disabled to ensure that queries do not use a deprecated Reflection. 
DX-83117


### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-22 "Direct link to Issues Fixed")
  * Fixed an issue that was causing certain queries to fail when using hash joins, leading to an unexpected restart of an executor. 
DX-63029
  * Dremio was unable to read and query AWS Glue table partitions if partition column names or partition values contained spaces or other special characters. 
DX-83517
  * Metadata on AWS Glue sources was not being refreshed according to the schedule defined on the source. In some cases, new data was only seen after running `ALTER TABLE `table` REFRESH METADATA`. 
DX-82900
  * Fixed a number of issues that were affecting proper handling of inferred partition columns, specifically `FOR PARTITIONS (...)` was not working for inferred partition columns. 
DX-60565
  * When run by `PUBLIC` users, the data returned by the `apiv2/user/`userid`` internal API is limited to only information that is required to search users and assign privileges. 
DX-82605
  * Dremio queries in some Tableau executors would start failing after the access token had expired and been renewed. 
DX-68133
  * Fixed an issue with the default Jobs results cleanup path that was resulting in disk space issues and unexpected restarts on some cluster nodes. 
DX-41291
  * Updated the `com.squareup.okio:okio` package in Dremio's Hadoop 3.3.2 version to address CVE-2023-3635. 
DX-69726


## 24.2.1 (September 2023) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2421-september-2023-enterprise "Direct link to 2421-september-2023-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-23 "Direct link to Issues Fixed")
  * Following the upgrade to Dremio 24.2.0, an issue with external group membership evaluation when using Azure Active Directory was preventing users from accessing some datasets if more than 100 direct or indirect groups were in use. 
DX-79881
  * In some cases, if a deployment had a large number of sources, the SQL Runner was considerably unresponsive when loading the page or typing in the editor. 
DX-72618
  * When trying to run only a selected portion of a query in the SQL Runner, an error was generated because the full contents of the editor were executed instead of what was selected. 
DX-71689
  * At times, users were unable to scroll to the bottom of the Settings &gt; Node Activity page. 
DX-69449
  * Fixed an issue that was causing an error and a blank profile to be returned after trying to download a profile that had been deleted. 
DX-68279
  * Dremio was allowing invalid Parquet files to be promoted, resulting in a `DATA_READ ERROR: Failed to decode column` error when running a `SELECT` against the file. 
DX-67631
  * Fixed an issue in C3 recovery logic that was causing C3 to be disabled at startup on some nodes. 
DX-67436
  * Changed from `ping` to `netcat` for the readiness check on coordinators and executors to avoid an issue with some nodes hanging during initialization. 
DX-67219
  * Fixed an issue that was causing the use of `GRANT ALL` on a project to fail with an "invalid project privilege" error. 
DX-65571
  * Fixed an issue that was causing increased startup time for the jobs service when the jobs history table was very large. 
DX-64792
  * Updated Helm charts to use a Temurin-based image for ZooKeeper to address some potential vulnerabilities. 
DX-61258
  * Updated Helm charts to enable autoscan by default for logback. 
DX-56702


## 24.2.2 (September 2023)[​](/release-notes/unsupported-releases/version-240-release#2422-september-2023 "Direct link to 24.2.2 \(September 2023\)")
### What's New[​](/release-notes/unsupported-releases/version-240-release#whats-new-10 "Direct link to What's New")
  * This release includes a number of changes to improve performance and row count estimates when working with Delta Lake tables. 
DX-65077
  * Plans for queries containing `CONVERT_FROM(JSON)` can now be cached. 
DX-82619


### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-24 "Direct link to Issues Fixed")
  * When run by PUBLIC users, the data returned by the internal API `apiv2/user/`userid`` is limited to only information that is required to search users and assign privileges. 
DX-82783
  * Following the upgrade to 24.2.0, results from MongoDB sources were being returned in duplicate or triplicate. 
DX-82628
  * Following the upgrade to 24.1.3, if `planner.enable_trim_join_branch` was enabled, join trimmer failed to remove joins for queries that didn't read a column from either side of the join. 
DX-72602
  * In some cases, following the upgrade to previous 24.2.x Dremio versions, exception errors were getting logged during Reflection materialization plan expansion. 
DX-71973
  * For some customers using Reflections, coordinator startup times had increased after upgrading to a previous 24.2.x version. 
DX-71973
  * For some browsers, an interruption in connectivity can cause a failure in updating the status of long-running queries. 
DX-69909
  * To address a `CONCURRENT_MODIFICATION` error on concurrent metadata refresh queries on Parquet tables, if the query is submitted by scheduler, failures will be ignored. If the query is submitted by users, the failed query will be retried until it succeeds. 
DX-69749
  * In some cases, running `ALTER TABLE `table_path` FORGET METADATA` against a view could result in the view being deleted instead of the command failing with an error. 
DX-68202
  * Fixed an issue that was preventing users from creating aggregation Reflections without dimensions via SQL, even though such Reflections could be created in the Dremio console. 
DX-67967


## 24.2.1 (September 2023) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2421-september-2023-enterprise-1 "Direct link to 2421-september-2023-enterprise-1")
### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-25 "Direct link to Issues Fixed")
  * Following the upgrade to Dremio 24.2.0, an issue with external group membership evaluation when using Azure Active Directory was preventing users from accessing some datasets if more than 100 direct or indirect groups were in use. 
DX-79881
  * In some cases, if a deployment had a large number of sources, the SQL Runner was considerably unresponsive when loading the page or typing in the editor. 
DX-72618
  * When trying to run only a selected portion of a query in the SQL Runner, an error was generated because the full contents of the editor were executed instead of what was selected. 
DX-71689
  * At times, users were unable to scroll to the bottom of the Settings &gt; Node Activity page. 
DX-69449
  * Fixed an issue that was causing an error and a blank profile to be returned after trying to download a profile that had been deleted. 
DX-68279
  * Dremio was allowing invalid Parquet files to be promoted, resulting in a `DATA_READ ERROR: Failed to decode column` error when running a `SELECT` against the file. 
DX-67631
  * Fixed an issue in C3 recovery logic that was causing C3 to be disabled at startup on some nodes. 
DX-67436
  * Changed from `ping` to `netcat` for the readiness check on coordinators and executors to avoid an issue with some nodes hanging during initialization. 
DX-67219
  * Fixed an issue that was causing the use of `GRANT ALL` on a project to fail with an "invalid project privilege" error. 
DX-65571
  * Fixed an issue that was causing increased startup time for the jobs service when the jobs history table was very large. 
DX-64792
  * Updated Helm charts to use a Temurin-based image for ZooKeeper to address some potential vulnerabilities. 
DX-61258
  * Updated Helm charts to enable autoscan by default for logback. 
DX-56702


## 24.2.0 (September 2023)[​](/release-notes/unsupported-releases/version-240-release#2420-september-2023 "Direct link to 24.2.0 \(September 2023\)")
### What's New[​](/release-notes/unsupported-releases/version-240-release#whats-new-11 "Direct link to What's New")
  * This release adds support for the following SQL functions:
    * [APPROX_PERCENTILE](/reference/sql/sql-functions)
DX-62151
    * [ARRAY_AVG](/reference/sql/sql-functions)
DX-65324
    * [ARRAY_MAX](/reference/sql/sql-functions)
DX-65324
    * [ARRAY_MIN](/reference/sql/sql-functions)
DX-65324
    * [ARRAY_REMOVE](/reference/sql/sql-functions)
DX-65324
    * [ARRAY_SUM](/reference/sql/sql-functions)
DX-65324
    * [NORMALIZE_STRING](/reference/sql/sql-functions)
DX-68631
  * Clicking on a linked job in the [execution state](/query-manage/querying-data/#9-execution-state) opens the Job Details page in a new tab. 
DX-65146
  * The [lineage graph](/data-products/govern/lineage) now includes the name and type for data sources. 
DX-65146
  * [Dataset settings](/get-started/quick_tour/#opening-datasets) has been added to the edit dataset page. Clicking ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) opens a dialog for editing the format, Reflections, Reflection refresh, and privileges of the dataset. 
DX-65146
  * This release provides performance improvements in the [Jobs listing page](/admin/monitoring/jobs), and any user with sufficient privileges can now view Reflection jobs in the table. 
DX-64196
  * Autocomplete has been improved to provide better and faster context-aware suggestions for [SQL keywords](/query-manage/querying-data/#7-sql-editor), catalog objects, and functions while you are constructing SQL statements. 
DX-53191
  * [Reflection hints](/reflections/using-reflection-hints) are now available to control which Reflections are considered, excluded, and chosen for a query or session. 
DX-67225
  * You can use [partition transforms in Reflections](/help-support/well-architected-framework/performance/#horizontally-partition-reflections-that-have-many-rows) to specify transformations to apply to partition columns to produce partition values. For example, if you choose to partition on a column of timestamps, you can set partition transforms that produce partition values that are the years, months, days, or hours in those timestamps. 
DX-64015
  * This release includes a new table function, `SYS.RECOMMEND_REFLECTIONS`, that recommends aggregation Reflections to accelerate existing SQL queries. For more information, see [Reflection Recommendations](/reflections/reflection-recommendations). 
DX-61857
  * Snapshot-based incremental refresh of Reflections are now supported when the base table is Apache Iceberg and is updated by appends. Additionally, a new algorithm is supported for determining which method of refresh to use for such Reflections. For more information, see [Horizontally Partition Reflections that Have Many Rows](/reflections/best-practices/#horizontally-partition-reflections-that-have-many-rows). 
DX-61855
  * Partition-based incremental refresh of Reflections are now supported when the base table is Apache Iceberg and is updated by DML operations. Additionally, a new algorithm is supported for determining which method of refresh to use for such Reflections. For more information, see [Horizontally Partition Reflections that Have Many Rows](/reflections/best-practices/#horizontally-partition-reflections-that-have-many-rows). 
DX-54576
  * You can now build Reflections on versioned tables and views in a Nessie source. For more information, see [Using Reflections in Nessie Source Branches](/reflections/using-nessie-branches-with-reflections). 
DX-55148
  * This release includes support for `ARRAY` literal syntax. For more information, see [LIST](/reference/sql/data-types#list). 
DX-62152
  * Added a new Credentials property list to all [Hive sources](/data-sources/lakehouse-catalogs/hive), found under Advanced Options when configuring the source. The Credentials list mimics the behavior of the Connection Properties list, enabling users to insert masked name:value pairs for Hive sources. 
DX-65187
  * Additional events are now captured in audit logs, including engine configuration, workload management queues, and support key changes. For more information, see [Events and Actions Tracked](/security/auditing#events-and-actions-tracked). 
DX-64423
  * Hive 2 dependent plugins have been upgraded to Hive 3 for communicating with Hive 2 sources to mitigate vulnerabilities in Hive 2. See [24.2.0 Upgrade Notes](/deploy-dremio/other-options/standalone/standalone-install-upgrade#2420-upgrade-notes) for more information. 
DX-65446
  * Row-level access, column masking, and cell-level security are now supported in [AWS Lake Formation](/security/integrations/lake-formation). 
DX-65106
  * This release includes updates that can reduce planning times for complex queries and Reflections. 
DX-68463
  * Dremio automatically optimizes incremental Reflection file size to improve Reflection performance. 
DX-61779
  * The `UNNEST` operator is now supported, which takes an array and returns a table, with one row for each element in the array. 
DX-64370
  * In this release, the plan cache is user-specific for increased security, and it will be utilized when the same query is executed by the same user. 
DX-66499
  * Dremio now supports transparent secret rotation for Azure Key Vault Secrets for Azure Storage v2 
DX-65376
  * This release includes changes to reduce planning time for large and complex SQL queries. 
DX-61559
  * Metadata refresh jobs on Parquet tables will gradually remove expired snapshots from the distributed store. 
DX-65274
  * This release adds a cache for partition stats to improve logical planning times. 
DX-60812
  * Time travel is now supported on Delta Lake tables, including timestamp and snapshot based queries. Metadata history is supported via `table_snapshot` and `table_history` functions. 
DX-63136
  * This release mitigates a number of flagged vulnerabilities related to Hive 3 and dependent libraries. 
DX-65510
  * This release includes a number of changes to improve the performance of metadata refresh on Delta Lake tables. 
DX-65076
  * After DML operations against unpartitioned Iceberg tables, Dremio now compacts the data files written by the DML operation to improve future read performance. 
DX-58884
  * This release includes changes that reduce metadata retrieval times during certain table validation scenarios. 
DX-67536
  * The IDs of datasets used in a query are captured in `queries.json` if the number of datasets used is less than 50. If the number of datasets used is 50 or more, IDs are not captured to avoid performance issues. 
DX-64722
  * Created a new ProxyConfig class in the JDBC driver for Tableau Desktop to handle proxy configuration. You can now pass in `socksProxyHost`, `socksProxyPort`, `socksProxyUsername`, and `socksProxyPassword` as JDBC properties. 
DX-63234
  * A Copy button is now available when hovering over a job's SQL on the Jobs page. 
DX-54837
  * This release adds a new connector for querying data from Apache Druid. For more information, see [Apache Druid](/data-sources/databases/apache-druid). 
DX-46607


### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-26 "Direct link to Issues Fixed")
  * In some cases, default raw Reflection matching was not working as expected for users not assigned to the `ADMIN` role. 
DX-70893
  * At times, users were unable to scroll to the bottom of the Settings &gt; Node Activity page. 
DX-69449
  * Deleted roles and users were being improperly cached during the same session for space and source privilege management, which could result in errors when trying to create new objects. 
DX-68405
  * In some cases, the Delete button was not available in the "Delete Token" confirmation dialog when trying to delete a personal access token. 
DX-68400
  * Trying to run `SHOW FUNCTIONS` was generating an exception error. 
DX-68041
  * Updated the Snowflake connector to fix an error caused by leaving the database field blank. 
DX-67959
  * At times, the `DAY()` function was returning either integer or timestamp, depending on how the query was written. 
DX-67793
  * Top-level `CASE` statements intended to return a boolean were not being rewritten correctly, resulting in an error for some SQL Server queries. 
DX-67527
  * `AES_ENCRYPT` and `AES_DECRYPT` functions will now return an error if the key length is not 16, 24, or 32 characters. 
DX-67209
  * Fixed an issue that was causing slow execution, due to a single-threaded phase, by adding round robin exchanges to every child of a `UnionAll`. 
DX-67138
  * Plans for queries containing `CONVERT_FROM` could not be cached. 
DX-66675
  * Fixed an issue with the `LEFT()` SQL function on Oracle sources for queries with dates. 
DX-67036
  * If a query used in a Reflection contained a user-defined function, Reflection refreshes were failing with a plan serialization error. 
DX-66628
  * Fixed an issue that was causing errors in some queries containing `WHERE x = ANY()`. 
DX-66321
  * If a dataset name or the name of a parent folder contained a space or ampersand (&) character, clicking on the dataset would populate the SQL Runner with a truncated `SELECT` statement. 
DX-66366
  * Fixed an issue that was causing an index out of bounds exception during planning (PLAN ERROR: 6) for certain queries. 
DX-65984
  * Some date subtraction queries were not getting pushed down for Oracle sources. 
DX-65396
  * The Dremio vectorized reader could not read invalid Parquet files where a dictionary page offset was used if no dictionary page was present. 
DX-64608
  * Fixed an issue with slow execution (caused by single threaded phase) by adding round robin exchanges to every children of a UnionAll. 
DX-64339
  * In planning, nested `CASE` statements are converted from relational node to SQL (for external sources) in a manner where each nested expression was increasing planning time. To address this issue, the nested CASE expressions will be flattened when possible. 
DX-64228
  * The Jobs page indicated that some metadata refresh jobs were still running after a long period of time, even though the coordinator had been restarted. Clicking for details on these jobs resulted in a "profile not found" error. 
DX-63723
  * Calling `FLATTEN()` on an empty list was causing an exception error. 
DX-63452
  * Some queries that contained large `IN` conditions were failing with a stack overflow error. 
DX-62755
  * For some queries that included the `IS_MEMBER` function and utilized Active Directory group lookups, planning time was excessively long or queries were timing out. 
DX-61801
  * Using `AES_DECRYPT` with an incorrect key was causing Dremio to restart unexpectedly instead of providing an error with a clear description of the issue. 
DX-61688
  * Some Reflections on views based on MySQL sources were failing with timeout errors. 
DX-61201
  * In Dremio versions later than v20, casting `+Infinity` was returning an error. 
DX-61115
  * In some cases, Dremio nodes could reboot unexpectedly due to queries that contained deeply nested functions. 
DX-57773
  * In this release, the `NOT IN` clause is supported with correlated subqueries. 
DX-57298
  * Fixed an issue that was causing the `CONCURRENT_MODIFICATION` error during concurrent metadata refresh queries on Parquet tables. Errors from queries submitted by the scheduler will be ignored, and failed queries submitted by users will be retried until the query succeeds. 
DX-56431
  * Dremio was generating unnecessary exchanges with multiple unions, and changes have been made to set the proper parallelization width on JDBC operators and reduce the number of exchanges. 
DX-55300
  * Fixed an issue that caused degraded query performance for deployments configured with LDAP when a query was made on a view owned by a user who had been deleted from the LDAP server. 
DX-56397
  * When skipping the current record from any position, Dremio was not ignoring line delimiters inside quotes, resulting in unexpected query results. 
DX-53211
  * Updated io.netty:netty-handler to 4.1.96 to address a potential security issue [CVE-2023-34462]. 
DX-67936
  * Updated org.apache.hadoop:hadoop-common to address potential security issues [CVE-2022-25168]. 
DX-60428


### Known Issues[​](/release-notes/unsupported-releases/version-240-release#known-issues-2 "Direct link to Known Issues")
  * Due to changes made in the Dremio query optimizer, you may observe an increased number of Reflections being marked for refresh after upgrading to this release. You may wish to manually trigger some Reflections to refresh in case their specified refresh period is large and a Reflection has been marked as "cannot accelerate" (fixed in 24.2.2). 
DX-71973


## 24.1.4 (August 2023) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2414-august-2023-enterprise "Direct link to 2414-august-2023-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-240-release#whats-new-12 "Direct link to What's New")
  * This release supports the relocation of distributed storage and metadata for Parquet tables (internal Iceberg tables). For more information, see [Relocating Distributed Storage and Metadata](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/dist-store-config#relocating-distributed-storage-and-metadata). 
DX-64615
  * Added support for the following regions to the AWS Glue source:
    * ap-south-2: Asia Pacific (Hyderabad)
    * ap-southeast-3: Asia Pacific (Jakarta)
    * ap-southeast-4: Asia Pacific (Melbourne)
    * eu-south-2: EU (Spain)
    * eu-central-2: EU (Zurich)
    * me-central-1: Middle East (UAE) 
DX-69347


## 24.1.3 (July 2023) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2413-july-2023-enterprise "Direct link to 2413-july-2023-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-240-release#whats-new-13 "Direct link to What's New")
  * The `COL_LIKE` SQL function has been updated to improve performance. 
DX-66586
  * Dremio will avoid a full data scan for simple aggregations on partition columns, reading the manifest metadata instead, which improves performance for queries on very large tables. 
DX-66029


### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-27 "Direct link to Issues Fixed")
  * Fixed an issue that was causing an occasional memory leak during planning for queries that used partition stats. 
DX-68518
  * The use of the `WHERE` clause in queries against Delta Lake tables in Hive sources is now supported. 
DX-67647
  * Fixed an issue that was causing invalid SQL comparison syntaxes in SQL Server queries if nested `CASE` statements were encountered. 
DX-67183


## 24.1.2 (July 2023) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2412-july-2023-enterprise "Direct link to 2412-july-2023-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-240-release#whats-new-14 "Direct link to What's New")
  * This release includes some changes to improve logical planning performance and query planning times in certain scenarios. 
DX-66473
  * The `/sql` REST API endpoint now supports specifying version references on a per-source basis. 
DX-61908


### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-28 "Direct link to Issues Fixed")
  * `GRANT` commands on catalog entities were failing with `Role/User `ID` not found` if existing user or role grantees were no longer present in the system. 
DX-65364
  * Fixed an issue that was causing an exception in the `BRIDGE_FILE_READER_RECEIVER` SQL operator for some queries. 
DX-64687
  * Some queries that included multiple levels of nested fields were failing. 
DX-64106
  * If a corrupted or malformed checkpoint file was encountered during metadata refresh, queries would fail with a `Metadata read Failed` error. 
DX-62568
  * Queries that utilized external Reflections were not being logged in `queries.json`. 
DX-61654
  * Updated xalan:serializer to version 2.7.3 to address potential security issues [CVE-2022-34169]. 
DX-60647


## 24.1.1 (June 2023) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2411-june-2023-enterprise "Direct link to 2411-june-2023-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-29 "Direct link to Issues Fixed")
  * In Dremio 24.1.0, an issue with Tableau Desktop using OAuth and Power BI SSO was leading to authentication failures.


## 24.1.0 (June 2023)[​](/release-notes/unsupported-releases/version-240-release#2410-june-2023 "Direct link to 24.1.0 \(June 2023\)")
### What's New[​](/release-notes/unsupported-releases/version-240-release#whats-new-15 "Direct link to What's New")
  * Dremio now supports Nessie as a source to manage your Iceberg tables and views. Nessie also enables a Git-like experience for easier data collaboration, quality assurance, and multi-statement transactions on the data lake. For more information about using Nessie as a source, see [Nessie](/query-manage/managing-data/nessie).
Limitations when using Nessie as a source in this initial release:
DX-56331 
    * Dremio audit logs are not available for tables and views that are created in a Nessie source. Some of this information is available directly in the Nessie commit history. 
DX-64988 
    * You cannot use the [Catalog API](/reference/api/catalog) to retrieve or manage a Nessie source. 
DX-64994 
  * In this release, Apache Iceberg table optimization supports partition column filters, compliance with Iceberg v2 tables containing positional deletes, and support for rewriting manifests. For more information, see [Optimizing Tables](/developer/data-formats/apache-iceberg/table-maintenance-optimization/optimizing).
  * Tag-based policies in Ranger-based authorization for Hive data sources are now supported. For more information, see [Ranger-Based Authorization](/data-sources/lakehouse-catalogs/hive/hive-ranger). 
DX-62889 
  * This release includes the following new SQL functions:
    * `ST_GEOHASH` returns the corresponding geohash for given latitude and longitude coordinates (see [ST_GEOHASH](/reference/sql/sql-functions)).
    * `ST_FROMGEOHASH` returns the latitude and longitude coordinates of the center of a given geohash (see [ST_FROMGEOHASH](/reference/sql/sql-functions)). 
DX-63077 
    * `REGEXP_COL_LIKE` returns `true` when the specified regular expression matches values in a column. Otherwise, returns `false`. Use this function if your regular expression is a column (see [REGEXP_COL_LIKE](/reference/sql/sql-functions)). 
DX-64209 
    * `CARDINALITY` returns the number of elements in a map or list (see [CARDINALITY](/reference/sql/sql-functions)). 
DX-63782 
  * In this release, Dremio supports Zstandard (`zstd`) compression for reading and writing Parquet files. 
DX-61800 
  * You can use the `table_partitions()` function to return partition-related statistics for Apache Iceberg tables. See [Querying a Table’s Partition Metadata](/reference/sql/commands#querying-a-tables-partition-metadata). 
DX-61957
  * You can remove snapshots and their associated files that you no longer need using the `VACUUM` command with `EXPIRE SNAPSHOTS`. For more information, see [Expiring Snapshots of Apache Iceberg Tables](/developer/data-formats/apache-iceberg/expiring-snapshots). 
DX-58057 
  * You can provide the URI for an Azure Key Vault secret to authenticate when configuring an Azure Storage source. Dremio connects to Azure Key Vault to fetch the secret and use it as the client secret. Dremio does not store the fetched secret. For more information, see [Azure Storage](/data-sources/object/azure-storage). 
DX-53262 
  * In this release, Dremio supports tabular user-defined functions. For more information, see [User-Defined Functions](/reference/sql/commands/functions). 
DX-56570 
  * The **Settings** page now includes an option to manage preferences for the Dremio console. **SQL Autocomplete** settings are now available on this page, as well as **Copy or download results** and **Query dataset on click**. For more information, see [Dremio Preferences](/help-support/advanced-topics/dremio-preferences).
    * **Copy or download results** lets you enable or disable the options to download or copy query results from the SQL Runner. 
DX-56766 
    * **Query dataset on click** lets you configure the default behavior in the Dremio console when clicking on a dataset to either open the SQL Runner with a default `SELECT` statement on the dataset or open the Datasets page. 
DX-63898 
  * The metadata card for datasets includes a number of additions, including a link to the lineage graph and links to launch a BI tool. For more information about the metadata card, see [Viewing the Metadata of a Dataset](/data-products/discover/metadata).
  * Improved permission validation around view-based query execution. 
DX-64688 
  * Added more security around DML permission checks to ensure that users can access data only according to their privileges. 
DX-64746 
  * In this release, the plan cache is user-specific for increased security, and it will be utilized when the same query is executed by the same user. 
DX-63531 
  * Improved handling of multiple `COUNT(DISTINCT)` functions with grouping set. 
DX-39786 
  * Views represented in the lineage graph now contain a direct link to edit the dataset. Additionally, if you have edit permissions on a view, the dataset metadata card will display the edit icon instead of the Go to Dataset icon. 
DX-59776 
  * Incrementally refreshed raw Reflections containing filters or aggregates can now be used as default raw Reflections. 
DX-61854 
  * In this release, Delta Lake is a supported table format in AWS Glue sources. 
DX-59481 
  * Upgraded the MongoDB driver to support MongoDB 5. 
DX-59363 
  * Namespace entities fetched from the KV store are now cached in memory during query planning to improve planning performance. 
DX-60814 
  * Added support for full outer joins that resolve to a `true` join condition. 
DX-59222 
  * When a column type cannot be coerced during Parquet file scanning, the name of the file containing the issue is now included in the error message to assist users in resolving the problem. 
DX-57987 
  * You can now save scripts that contain up to 250,000 characters. 
DX-59839 
  * When parsing CSV, Dremio now allows multi-character strings to be used as field delimiter, quote, quote escape, and comment. Previously, only single characters were supported for these. 
DX-60794 


### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-30 "Direct link to Issues Fixed")
  * Made an update to ensure that custom (whitelabel) logos will be left-aligned on the Dremio login page. 
DX-65948 
  * Fixed an issue where Helm charts could terminate the coordinator before start up completed due to large KV stores. To help address this issue and enable more flexible tuning, `readinessProbe` and `startupProbe` variables are now configurable in `values.yaml`. 
DX-65864 
  * In some cases, invalid partition stats were causing the row count estimate for a table to come back as 1. 
DX-64986 
  * Adding a `CAST` to an Oracle index column was leading to a missed partition key and resulting in an expensive and slow query. 
DX-64979 
  * Resolved an internal hash collision in the columnar cloud cache (C3) eviction path that disabled C3, which could cause performance degradation. This internal range has been expanded to avoid the issue and the C3 service will remain operational even if the issue were to occur. 
DX-64898 
  * If a Hive source connection was slow, Dremio would repeatedly ping the source to get databases. 
DX-64495 
  * Fixed an issue that avoids single stream processing and improves execution times when using `UNION ALL` with `planner.unionall_distribute_all_children` set to "true". 
DX-64339 
  * In planning, nested `CASE` statements are converted from relational node to SQL (for external sources) in a manner where each nested expression was increasing planning time. To address this issue, the nested `CASE` expressions will be flattened when possible. 
DX-64228 
  * For some queries on Oracle sources, an interval of time was being processed incorrectly, resulting in the following error: `(full) year must be between -4713 and +9999`
DX-63742 
  * Dremio did not support Delta Lake tables with multi-part checkpoints, causing inaccurate row estimates and highly inconsistent query performance when running the same query. 
DX-63599 
  * Fixed an issue in planner optimization that was causing errors in certain queries with count aggregates. 
DX-62998 
  * In some cases, allocator information was not being included in the profile for queries that failed due to out of memory errors. 
DX-62731 
  * At times, using the `CONCAT` function with non-string operands would yield results that were truncated incorrectly. 
DX-61914 
  * In some cases, XML responses from AWS Glue were not being handled properly and causing queries to fail. 
DX-60928 
  * Users who have not been assigned to the `ADMIN` role can no longer get details for another user via the REST API unless they are granted specific privileges. 
DX-60480 
  * Fixed query concurrency issues that could lead to "Selected table has no columns" errors. 
DX-59967 
  * Following the upgrade to Dremio v20.3, the Admin CLI `remove-duplicate-roles` command was failing, and output was empty for dry runs. 
DX-59799 
  * If a view used in a raw Reflection contained the `CONVERT_FROM()` function, trying to access the view would result in a planning error. 
DX-59542 
  * In some cases, removing and adding privileges for a user on a space was failing with a "Failed to create SPACE with: Role not found" error. 
DX-59527 
  * In some cases, Dremio nodes could reboot unexpectedly due to queries that contained deeply nested functions. 
DX-57773 
  * Fixed an error that occurred when validating very wide text fields in a CSV file, which resulted in Dremio reporting more than 65536 columns found. 
DX-56768 
  * A Zookeeper class was missing from the JDBC jar in some earlier releases, resulting in a _ClassNotFound_ exception. 
DX-56584 
  * For some queries on views using `OR` or `IN`, unnecessary subquery scans were not removed, causing inconsistent results. 
DX-56085 
  * Default raw Reflections can now be used in `REFRESH REFLECTION` jobs. 
DX-55898 
  * Dremio was not auditing SSO logins using OpenID identity providers. 
DX-53874 
  * The Dremio Helm chart admin pod will now use the coordinator service account by default, if configured, to run backup, restore, and other admin tasks that require access. 
DX-51964 
  * Dremio was not generating correct partition statistic information for column names that contained spaces. 
DX-49736 
  * When using the `GROUP BY` expression with an aliased column of the same name as the original column, a validation error was indicating that the column was not being grouped. 
DX-48015 
  * Dremio was not able to read Delta Lake datasets that used a plus sign '+' in their path or in partition columns. 
DX-46732 
  * In some cases, datetime functions that used a filter condition with a string datetime literal added to the query were producing incorrect results. 
DX-25085 
  * Reflections having zero rows were not available for substitution. 
DX-20318 
  * Dremio now supports ASCII 128-256 and multiple character delimiters in CSV files. 
DX-16749 
  * Added argument validation for `DATE_TRUNC` and made improvements to some error messages. 
DX-9637 
  * The [`EXTRACT`](/reference/sql/sql-functions) function now correctly extracts `HOUR`, `MINUTE`, or `SECOND` from a `DATE` query that does does not contain a time parameter. 
DX-60188 
  * Deleting a space or folder that contained a user-defined function was resulting in an error. 
DX-59151
  * Updated the following libraries to address potential security issues:
    * com.amazonaws:aws-java-sdk-core to version 1.12.400 [CVE-2022-31159]. 
DX-58428, DX-62448 
    * commons-net:commons-net to version 3.9 [CVE-2021-37533]. 
DX-63800 
    * com.fasterxml.woodstox:woodstox-core to 5.4.0 [CVE-2022-40151]. 
DX-60426 
    * com.fasterxml.jackson.core:jackson-databind to 2.14.2 [CVE-2022-42003]. 
DX-60494 
    * protobuf-java core to version 3.21.9 [CVE-2022-3171]. 
DX-60170 


### Known Issues[​](/release-notes/unsupported-releases/version-240-release#known-issues-3 "Direct link to Known Issues")
  * In Dremio 24.1.0, there is an issue with Tableau Desktop using OAuth and Power BI SSO, which is leading to authentication failures (fixed in Dremio 24.1.1).


## 24.0.3 (June 2024) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2403-june-2024-enterprise "Direct link to 2403-june-2024-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-31 "Direct link to Issues Fixed")
  * Fixed an issue that could cause the Reflection summary page in the Dremio console to load incorrectly. 
DX-62949


## 24.0.2 (May 2023) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2402-may-2023-enterprise "Direct link to 2402-may-2023-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-32 "Direct link to Issues Fixed")
  * In Dremio 24.0.0 AWS Edition, if _core-site.xml_ was used to specify distributed storage, restoring a backup was resulting in an exception. 
DX-63776 


## 24.0.1 (March 2023) Enterprise[​](/release-notes/unsupported-releases/version-240-release#2401-march-2023-enterprise "Direct link to 2401-march-2023-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-240-release#whats-new-16 "Direct link to What's New")
  * This release includes a new SQL function, `COL_LIKE`, which tests whether an expression column matches a pattern column. For more information, see [COL_LIKE](/reference/sql/sql-functions). 
DX-60811 
  * This release adds support for reading `TIME` and `TIMESTAMP` microseconds in Parquet files. Microseconds are truncated and the value is stored as milliseconds. 
DX-34989 
  * Added support of complex types (`MAP`, `LIST`, `STRUCT`) for the following Hive input formats: _RCFile_ , _Text_ , _SequenceFile_
DX-61981 


### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-33 "Direct link to Issues Fixed")
  * Pushdowns were not working for UUID data types on a PostgresSQL source. This change maps PostgresSQL's UUID type to Dremio's VARCHAR. Comparison operators (=, &gt;, &lt;, &lt;=, &gt;=, !=) between a UUID and a UUID and between a UUID and a VARCHAR will now be pushed down. 
DX-62978 
  * Fixed an issue that was causing the planner to attempt to add implicit casting for identical data types, causing an error. 
DX-62799 
  * In some cases, allocator information was not being included in the profile for queries that failed due to out of memory errors. 
DX-62731 
  * Ordering was not working as expected when comparing `COUNT` and `COUNT DISTINCT` in a `GROUP BY` clause. 
DX-61655 
  * Expression operator names were being used as intermediate field names. In some queries, the multiplication operator (*) was later treated as `SELECT *`, which was causing physical planning to fail to find the field. 
DX-61572 
  * When trying to share a SQL script with another user in Dremio's AWS Edition, sharing failed with a generic _"Something went wrong"_ error. 
DX-61254 
  * When querying `INFORMATION_SCHEMA` tables as a non-admin user from JDBC/ODBC applications, the query was taking much longer than when performed by an admin user. 
DX-61168 
  * In some cases, XML responses from AWS Glue were not being handled properly and causing queries to fail. 
DX-60928 
  * Queries were failing against views and time series collections on MongoDB sharded collections. 
DX-60691 
  * Fixed an issue that was causing queries to fail if certain expression splits contained `CAST AS UNION`. 
DX-60607 
  * In some cases, removing and adding privileges for a user on a space was failing with a _"Failed to create SPACE with: Role not found"_ error. 
DX-59527 
  * Fixed some issues that were causing poor performance with the `REGEXP_LIKE` SQL function. 
DX-59182 
  * Some queries were performing poorly if the query contained an `ORDER BY` clause. 
DX-58777 
  * If a subquery expression was used after an aggregate and the same expression was duplicated in a `WHERE` clause, a validation exception was being encountered. 
DX-56541 
  * For some queries on views using `OR` or `IN`, unnecessary subquery scans were not removed, causing inconsistent results. 
DX-56085 
  * Fixed an issue with the Jobs page that could lead to high heap memory usage when the content of the SQL query was unusually large. 
DX-54831 
  * The Dremio Helm chart admin pod will now use the coordinator service account by default, if configured, to run backup, restore, and other admin tasks that require access. 
DX-51964 
  * Upgraded com.google.protobuf:protobuf-java to version 3.21.9 to mitigate CVE-2022-3171. 
DX-60439 


## 24.0.0 (February 2023)[​](/release-notes/unsupported-releases/version-240-release#2400-february-2023 "Direct link to 24.0.0 \(February 2023\)")
### What's New[​](/release-notes/unsupported-releases/version-240-release#whats-new-17 "Direct link to What's New")
  * This release adds support for Sign-On (SSO) with Microsoft Power BI. For more information, see [Enabling Single Sign-On](/client-applications/microsoft-power-bi/working-from-datasets/administrators/administering-connectivity#enabling-single-sign-on).
  * You can optimize Iceberg tables to maximize the speed and efficiency of data retrieval. Rewrite data files using a compaction process to combine small files into larger files or split large files to reduce metadata overhead and runtime file open costs. For more information, see [Optimizing Tables](/developer/data-formats/apache-iceberg/table-maintenance-optimization/optimizing). 
DX-55479 
  * You can roll back to a previous state of an Iceberg table using either a snapshot ID or a timestamp reference. For more information, see [Rolling Back Tables](/developer/data-formats/apache-iceberg/rolling-back). 
DX-54159 
  * Dremio’s new `COPY INTO` SQL command makes it even easier and faster to load data into Apache Iceberg tables, which are a foundational component data lakehouses. With one command, you can now copy data from CSV and JSON stored in Amazon S3, Azure Data Lake Storage (ADLS), HDFS, and other supported data sources into Apache Iceberg tables using the columnar Parquet file format for performance. Dremio efficiently distributes the copy operation across the entire engine to load data more quickly. For more information, see [Copying Data Into Apache Iceberg Tables](/developer/data-formats/apache-iceberg/copying-data-into-tables). 
DX-46107 
  * In the SQL editor, you can now format your SQL using the _Format SQL_ shortcut (Cmd + Shift + f or Ctrl + Shift + f). As long as the current syntax is valid, the SQL formatter applies a conventional style to your query by aligning commands for readability. For more information, see [SQL Editor](/query-manage/querying-data/#7-sql-editor). 
DX-40727 
  * This release supports the use of `BROADCAST` hints in queries to distribute data across all executor nodes. For more information, see [Distributing Data Evenly Across Executor Nodes During Joins](/reference/sql/commands#distributing-data-evenly-across-executor-nodes-during-joins). 
DX-56572 
  * The `LIKE` SQL function now supports the `ANY`, `SOME`, and `ALL` keywords. For more information, see [LIKE](/reference/sql/sql-functions). 
DX-56364 
  * If you specify an alias for a column or expression in the `SELECT` clause, you can now refer to that alias elsewhere in a query. For more information, see [Table SQL Statements](/reference/sql/commands/tables). 
DX-56363 
  * This release implements a new operator for vectorized hash-join that supports spilling to disk if a query runs out of memory. Spill support for hash-join queries can be turned on by enabling the `exec.op.join.spill` [support key](/help-support/support-settings/#support-keys). 
DX-37267 
  * Dremio now includes a new connector for adding IBM Db2 databases as sources. For more information, see [IBM DB2](/data-sources/databases/ibm-db2). 
DX-45152 
  * The [MongoDB](/data-sources/databases/mongo) source configuration contains a new setting under Advanced Options to treat field names as case insensitive. When enabled, Dremio will record all known variations of a field name when learning the schema and use all known variations when pushing an operation down to Mongo. 
DX-34571 
  * The Reflections page under **Settings &gt; Reflections** now provides real-time observability for Reflections, including status, refresh, and usage information. You can use this page to monitor Reflections in real time and take advantage of usage metrics to identify and trim Reflections that are not accelerating queries. 
DX-56576 
  * In this release, [Delta Lake](/developer/data-formats/delta-lake) is a supported table format in Hive sources. Dremio identifies Delta Lake tables if they are created with `STORED BY 'io.delta.hive.DeltaStorageHandler'`. 
DX-54325 
  * Dremio now supports parentheses around `JOIN` subclauses to handle queries from some 3rd party tools. 
DX-58414 
  * This version of Dremio supports sub-queries in user defined functions (UDFs). 
DX-51656 
  * Added support for `timestamp` to `bigint` coercion in Hive-Parquet tables. 
DX-60456 


  * Password/Secrets encryption in Dremio Enterprise config files DX-47701


### Issues Fixed[​](/release-notes/unsupported-releases/version-240-release#issues-fixed-34 "Direct link to Issues Fixed")
  * In some cases, the JVM's direct memory allocator was triggering garbage collection when there was sustained and high usage of direct memory, which was causing performance issues. 
DX50135 
  * Following the upgrade to Dremio 22.1.7, Power BI Desktop and Gateway may not have been able to connect to Dremio via Azure Active Directory. 
DX-60942 
  * In some cases, a `MERGE` query with an `INSERT` clause was inserting columns in the wrong order. 
DX-60560 
  * Fixed an issue with runtime filter evaluation in cases where columns having a physical data type of `timestamp` were represented as `bigint` at the table level. 
DX-60740 
  * In some cases, with the Arrow Flight SQL ODBC driver, users were getting an error when testing the connection to Microsoft Excel in the ODBC Administrator on Windows. 
DX-60176 
  * Fixed an issue with Decimal functions that was leading to bad results when `exec.preferred.codegenerator` was set to `java`. 
DX-60099 
  * In some cases, incorrect values were being returned for `boolean` columns during filtering at Parquet scan. 
DX-60059 
  * Some queries were failing for MongoDB v4.9+ sharded collections because MongoDB would use UUID instead of namespace. 
DX-59457 
  * Fixed some issues that were causing poor performance when using the `REGEXP_LIKE` SQL function. 
DX-59182 
  * Some queries were performing poorly if they contained an `ORDER BY` clause. 
DX-58777 
  * After offloading a column with type `DOUBLE` and offloading again to change the type to `VARCHAR`, the column type was still `DOUBLE` and read operations on the table failed with an exception. 
DX-58410 
  * Dremio was generating unnecessary exchanges with multiple unions, and changes have been made to set the proper parallelization width and reduce the number of exchanges. 
DX-58348 
  * The `ALTER TABLE` command, when used with a column-masking or row-filtering policy, returned an error when the table contained field names that would require quoting, such as those containing spaces or corresponding to reserved keywords. 
DX-58186 
  * `LIKE` was returning null results when using `ESCAPE` if the escaped character was one of the Perl Compatible Regular Expressions (PCRE) special characters. 
DX-57934 
  * Fixed an issue that was affecting fragment scheduling efficiency under heavy workloads, resulting in high sleep times for some queries. 
DX-57579 
  * In some cases, a `MERGE` query with an `INSERT` clause was inserting columns in the wrong order. 
DX-57546 
  * Heap usage on some coordinator nodes was growing over time, requiring a periodic restart to avoid out of memory errors. 
DX-57398 
  * Moved from strict matching of types to coercion to compatible types such as `INT` and `BIGINT` -&gt; `BIGINT`, to address an issue with forgotten Elasticsearch mappings during refresh 
DX-57304 
  * Updated the apiVersion for `PodDisruptionBudget` to `policy/v1` in Helm charts v2 due to the decommissioning of Kubernetes version 1.20. 
DX-57143 
  * Fixed an issue that was causing a `DATA_READ ERROR: Failed to initialize Hive record reader` error when trying to read ORC tables. 
DX-56952 
  * If a query contained `CONVERT_FROM()` on a large json literal string, the query was failing with an `OutOfMemoryException` error. 
DX-56538 
  * Fixed an issue that was resulting in repeated role lookups during privilege checks and causing performance issues. 
DX-56347 
  * The manifest list table function was causing performance issues for some queries. 
DX-52997 
  * The Dremio Helm chart admin pod will now use the coordinator service account by default, if configured, to run backup, restore, and other admin tasks that require access. 
DX-51964 
  * Dremio no longer includes server name and version in the response header. 
DX-50225 
  * Updated the following libraries to address potential security issues:
    * protobuf-java core to version 3.21.9 [CVE-2022-3171]. 
DX-60170 
    * com.amazonaws:aws-java-sdk-core version to 1.12.261 [CVE-2022-31159]. 
DX-58432 
    * org.yaml:snakeyaml to version 1.30 [CVE-2022-25857]. 
DX-56239 
    * org.apache.calcite.avatica:avatica-core to version 1.22.0 [CVE-2022-36364]. 
DX-55302 
    * com.fasterxml.jackson.core:jackson-databind to version 2.13.0 [CVE-2020-36518]. 
DX-54034 
    * org.curioswitch.curiostack:protobuf-jackson to version 1.1.8 [CVE-2020-7768]. 
DX-49001 


### Breaking Changes[​](/release-notes/unsupported-releases/version-240-release#breaking-changes "Direct link to Breaking Changes")
#### Mixing Implicit and Explicit Joins[​](/release-notes/unsupported-releases/version-240-release#mixing-implicit-and-explicit-joins "Direct link to Mixing Implicit and Explicit Joins")
If you mix implicit and explicit joins, only the last of the implicitly joined tables can be in the `ON` clause. Otherwise you will receive a "Table not found" error. For example, the following query results in the error `Table 'c' not found`.

```
select *  
from  
        NAS2."customer.parquet" c,  
        NAS2."nation.parquet" n  
        left join  
        NAS2."orders.parquet" as o  
 on c.c_custkey = o.o_custkey  

```

The solution is to replace the comma with an explicit `cross join` like this:

```
select *  
from  
        NAS2."customer.parquet" c  
        cross join  
        NAS2."nation.parquet" n  
        left join  
        NAS2."orders.parquet" as o  
 on c.c_custkey = o.o_custkey  

```

This is functionally equivalent since implicit joins implement a cross product of the two tables.
#### Broadcast Table Hints[​](/release-notes/unsupported-releases/version-240-release#broadcast-table-hints "Direct link to Broadcast Table Hints")
Dremio v24 supports `BROADCAST` hints in queries. Hints must be entered as `/*+ `hint` */`, which is standard across data warehouses. In previous versions of Dremio, text enclosed in `/*  */` was treated as a comment. Dremio will continue to treat text enclosed in `/*  */` as a comment unless the first character is `+`. The use of unrecognized hints will result in an error. For more information, see [Distributing Data Evenly Across Executor Nodes During Joins](/reference/sql/commands#distributing-data-evenly-across-executor-nodes-during-joins).
### Known Issues[​](/release-notes/unsupported-releases/version-240-release#known-issues-4 "Direct link to Known Issues")
  * This version of Dremio does not support Iceberg tables written with equality deletes. 
DX-52677
  * DML operations (`INSERT`, `UPDATE`, `DELETE`, `MERGE`) are not supported on tables with `MAP` columns. `CTAS` **is** supported on tables with `MAP` columns. 
DX-57005
  * Currently, Dremio cannot read timestamp microseconds from Parquet files which have been written with dictionary encoding. Queries involving a microsecond column will not return any data (fixed in Dremio 24.0.1). 
DX-19162


Was this page helpful?
[Previous Unsupported Releases](/release-notes/unsupported-releases)[Next 23.x Release Notes](/release-notes/unsupported-releases/version-230-release)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Unsupported Releases](/release-notes/unsupported-releases)[Next 23.x Release Notes](/release-notes/unsupported-releases/version-230-release)
