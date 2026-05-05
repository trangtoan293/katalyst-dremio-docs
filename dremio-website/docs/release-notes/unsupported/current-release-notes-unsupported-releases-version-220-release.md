---
url: /release-notes/unsupported-releases/version-220-release
title: "22.x Release Notes | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64385.223151666
---

  * [Dremio Enterprise Home](/)
  * [Release Notes](/release-notes)
  * [Unsupported Releases](/release-notes/unsupported-releases)
  * 22.x Release Notes

Version: current [26.x]
On this page
# 22.x Release Notes
Releases are listed in reverse order, starting with the latest release of Dremio 22.x.
## 22.2.3 (January 2024) Enterprise[​](/release-notes/unsupported-releases/version-220-release#2223-january-2024-enterprise "Direct link to 2223-january-2024-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-220-release#whats-new "Direct link to What's New")
  * Added the option to force parallelism in write queries by using a round-robin exchange before the writer, even when input is only single-threaded. Enable this option by enabling the support key `planner.writer.round_robin`. 
DX-64388


### Issues Fixed[​](/release-notes/unsupported-releases/version-220-release#issues-fixed "Direct link to Issues Fixed")
  * Changing the size of an existing EC2 engine in Dremio's AWS Edition no longer resets the engine type. 
DX-54590
  * Split assignment for tables in Delta Lake format no longer result in a NullPointerException. 
DX-60247
  * Fixed an issue that was causing the error `Gandiva code generation is handled during build` for CASE WHEN queries that contain nested Java/Gandiva functions. 
DX-62402
  * Row-level runtime filtering is disabled for Reflection refresh jobs so that views no longer return incorrect results due to an incorrect match to a single Starflake Reflection. 
DX-68144
  * Fixed an issue with node endpoint checks that could cause coordinators to restart. 
DX-83120
  * C3 system stats for storage_plugins, mount_points, datasets, and objects were missing due to an internal error. They have been enabled again. 
DX-83172
  * To increase coordinator stability, plan cache size is decreased to 1k (from 10k) and time duration is decreased to 8 hours (from 10 hours). 
DX-83190
  * Fixed an issue that could cause a `BSONRecordReader` crash for MongoDB data sources. 
DX-83263
  * Dremio now reads indices with date fields formatted in either Joda-Time or java.time without the use of a prefix. 
DX-83727
  * Removed an errant dependency check that prevented some engines from starting or scaling replicas. 
DX-84081
  * Fixed an issue when selecting the appropriate correlated field for correlated sub-queries. 
DX-85193
  * Resolved a path travel security issue that bypassed folder-level role-based access control (RBAC). 
DX-84516
  * Updated Dremio and Dremio's Hive 3 package to consume Avro 1.11.3 to address a potential security issue [CVE-2023-39410]. 
DX-84620
  * Updated snappy-java to 1.10.5 to address a potential security issue [CVE-2023-43642]. 
DX-84755


## 22.2.2 (October 2023) Enterprise[​](/release-notes/unsupported-releases/version-220-release#2222-october-2023-enterprise "Direct link to 2222-october-2023-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-220-release#whats-new-1 "Direct link to What's New")
  * When run by `PUBLIC` users, the data returned by the `apiv2/user/`userid`` internal API is limited to only information that is required to search users and assign privileges. 
DX-82605
  * Added support for full outer joins that resolve to a `true` join condition. 
DX-59222


### Issues Fixed[​](/release-notes/unsupported-releases/version-220-release#issues-fixed-1 "Direct link to Issues Fixed")
  * Metadata on AWS Glue sources was not being refreshed according to the schedule defined on the source. In some cases, new data was only seen after running `ALTER TABLE `table` REFRESH METADATA`. 
DX-82900
  * In some cases, running `ALTER TABLE `table_path` FORGET METADATA` against a view could result in the view being deleted instead of the command failing with an error. 
DX-68202
  * Some views were matching incorrectly to a single starflake Reflection and returning incorrect results. If the Reflection was disabled, the same query would return the correct results. 
DX-68144
  * Dremio queries in some Tableau executors would start failing after the access token had expired and been renewed. 
DX-68133
  * Fixed an issue in C3 recovery logic that was causing C3 to be disabled at startup on some nodes. 
DX-67436
  * Invalid SQL comparison syntaxes were occurring in SQL Server queries if nested `CASE` statements were encountered. 
DX-67183
  * Fixed an issue that was causing slow execution, due to a single-threaded phase, by adding round robin exchanges to every child of a `UnionAll`. 
DX-67138
  * The Dremio vectorized reader could not read invalid Parquet files where a dictionary page offset was used if no dictionary page was present. 
DX-64608
  * Fixed an issue that was causing increased startup time for the jobs service when the jobs history table was very large. 
DX-64792
  * Some queries that contained large `IN` conditions were failing with a stack overflow error. 
DX-62755
  * Fixed the following issues with acceleration information in job profiles when the plan cache was used: acceleration information was missing for a prepared query, plan cache usage was missing for a prepared query, acceleration information was missing when the query was not accelerated but Reflections were considered, and canonicalized user query alternatives were missing. Additionally, matching hints were missing for Reflections that were only considered. 
DX-64636
  * Deleting a space or folder that contained a user-defined function was resulting in an error. 
DX-59151
  * Fixed an issue that was causing certain queries to fail when using hash joins, leading to an unexpected restart of an executor. 
DX-63029
  * Dremio was generating unnecessary exchanges with multiple unions, and changes have been made to set the proper parallelization width on JDBC operators and reduce the number of exchanges. 
DX-55300
  * Fixed an issue that could result in duplicate column names being written by the planner when an expression in the project included a field named `*`. 
DX-47931
  * Removed stack trace information from REST API payload JSON parsing error message. 
DX-71937
  * Fixed an issue with the default Jobs results cleanup path that was resulting in disk space issues and unexpected restarts on some cluster nodes. 
DX-41291


## 22.2.1 )July 2023) Enterprise[​](/release-notes/unsupported-releases/version-220-release#2221-july-2023-enterprise "Direct link to 2221-july-2023-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-220-release#whats-new-2 "Direct link to What's New")
  * This release includes some changes to improve logical planning performance and query planning times in certain scenarios.


  * Dremio will avoid a full data scan for simple aggregations on partition columns, reading the manifest metadata instead, which improves performance for queries on very large tables.


  * For Azure Blob Storage and Data Lake Gen 2 sources, you can now enable checksum-based verification to ensure data integrity during network transfers. To enable this option, set the `store.azure.checksum` support key to `true`.


### Issues Fixed[​](/release-notes/unsupported-releases/version-220-release#issues-fixed-2 "Direct link to Issues Fixed")
  * Resolved a frequent internal hash collision in the C3 eviction path that disabled the cloud columnar cache (C3), potentially causing performance degradation. Dremio now expands this internal range to make this collision extremely rare. In addition, C3 service is always kept operational in spite of this extremely rare scenario.


  * Privilege changes for entities via SQL were not being captured in the audit log.


  * `GRANT` commands on catalog entities were failing with `Role/User `ID` not found` if existing user or role grantees were no longer present in the system.


  * If a Hive source connection was slow, Dremio was repeatedly pinging the source to add databases.


  * Some queries that included multiple levels of nested fields were failing.


  * For some queries on Oracle sources, an interval of time was being processed incorrectly, resulting in the following error: `(full) year must be between -4713 and +9999`


  * If a corrupted or malformed checkpoint file was encountered during metadata refresh, queries would fail with a `Metadata read Failed` error.


  * At times, using the `CONCAT` function with non-string operands would yield results that were truncated incorrectly.


  * Queries that utilized external Reflections were not being logged in `queries.json`.


  * Fixed query concurrency issues that could lead to "Selected table has no columns" errors.


  * In some cases, queries against a table that was promoted from text files containing Windows (CRLF) line endings were failing or producing an `Only one data line detected` error.


  * For some queries, all available memory was getting consumed in the planning phase, resulting in allocation failures and causing all other queries to fail.


## 22.2.0 (June 2023) Enterprise[​](/release-notes/unsupported-releases/version-220-release#2220-june-2023-enterprise "Direct link to 2220-june-2023-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-220-release#issues-fixed-3 "Direct link to Issues Fixed")
  * Added more security around DML permission checks to ensure that users can access data only according to their privileges. 
DX-64746 
  * Improved permission validation around view-based query execution. 
DX-64688 
  * In this release, the plan cache is user-specific for increased security, and it will be utilized when the same query is executed by the same user. 
DX-63531 


## 22.1.30 (April 2023) Enterprise[​](/release-notes/unsupported-releases/version-220-release#22130-april-2023-enterprise "Direct link to 22130-april-2023-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-220-release#issues-fixed-4 "Direct link to Issues Fixed")
  * Pushdowns were not working for `UUID` data types on a PostgresSQL source. This change maps PostgresSQL's `UUID` type to Dremio's `VARCHAR`. Comparison operators (=, &gt;, &lt;, &lt;=, &gt;=, !=) between a UUID and a UUID and between a `UUID` and a `VARCHAR` will now be pushed down. 
DX-62978 
  * In some cases, using the `CONCAT` function with non-string operands would yield results that were truncated incorrectly. 
DX-61914 
  * When querying `INFORMATION_SCHEMA` tables as a non-admin user from JDBC/ODBC applications, the query was taking much longer than when performed by an admin user. 
DX-61168 
  * Queries were failing against views and time series collections on MongoDB sharded collections. 
DX-60691 
  * When unlimited splits were enabled, partition pruning was failing due to complex filter conditions that were unable to transform a query to its normalized form using CNF. 
DX-60604 
  * In some cases, allocator information was not being included in the profile for queries that failed due to out of memory errors. 
DX-62731 
  * A Zookeeper class was missing from the JDBC jar in some earlier releases, resulting in a _ClassNotFound_ exception. 
DX-56584 
  * When adding a column masking policy to a table, the policy would only be applied if the modified column was specified in lowercase characters, despite the query returning a successful status message. 
DX-56459 
  * Fixed an issue in Yarn-based deployments where certain properties that were meant for customizing Dremio executor containers were also being passed on to the Application main container. 
DX-55630 
  * When unlimited splits were enabled and running incremental metadata refreshes on a file-based table, running subsequent raw Reflections would fail with a `DATA_READ` error. 
DX-51394 
  * When using the `GROUP BY` expression with an aliased column of the same name as the original column, a validation error was indicating that the column was not being grouped. 
DX-48015 
  * Reflections having zero rows were not available for substitution. 
DX-20318 


## 22.1.20 (March 2023) Enterprise[​](/release-notes/unsupported-releases/version-220-release#22120-march-2023-enterprise "Direct link to 22120-march-2023-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-220-release#whats-new-3 "Direct link to What's New")
  * This release adds support for reading `TIME` and `TIMESTAMP` microseconds in Parquet files. Microseconds are truncated and the value is stored as milliseconds. 
DX-34989 
  * Added support for `timestamp` to `bigint` coercion in Hive-Parquet tables. 
DX-60456 


### Issues Fixed[​](/release-notes/unsupported-releases/version-220-release#issues-fixed-5 "Direct link to Issues Fixed")
  * Following the upgrade to Dremio 22.1.7, Power BI Desktop and Gateway may not have been able to connect to Dremio via Azure Active Directory. 
DX-60942 
  * In some cases, XML responses from AWS Glue were not being handled properly and causing queries to fail. 
DX-60928 
  * Fixed an issue that was causing slow query performance if the query contained an `ORDER BY` clause. 
DX-58777 
  * Users were able to upload files outside of their home space. File uploads are only permitted from a user's home space or from any folders in the home space. 
DX-60398 
  * Fixed an issue with Decimal functions that was leading to bad results when `exec.preferred.codegenerator` was set to `java`. 
DX-60099 
  * Incorrect values were being returned for `boolean` columns during filtering at Parquet scan. 
DX-60059 
  * Fixed some issues that were causing performance degradation with the `REGEXP_LIKE` SQL function. 
DX-59182 
  * In some cases, a `MERGE` query with an `INSERT` clause was inserting columns in the wrong order. 
DX-57546 
  * Fixed an issue with the Jobs page that could lead to high heap memory usage when the content of the SQL query was unusually large. 
DX-54831 
  * Dremio now performs coercion to compatible types (such as `INT` and `BIGINT` to `BIGINT`), instead of strict matching, to address an issue with Elasticsearch mappings forgotten during refresh. 
DX-57304 
  * If a subquery expression was used after an aggregate and the same expression was duplicated in a `WHERE` clause, a validation exception was being encountered. 
DX-56541 
  * Fixed an issue that was resulting in repeated role lookups during privilege checks and causing performance issues. 
DX-56347 
  * Metadata refresh queries that were cancelled because metadata was already available no longer show as failed. 
DX-37150 


## 22.1.7 (December 2022) Enterprise[​](/release-notes/unsupported-releases/version-220-release#2217-december-2022-enterprise "Direct link to 2217-december-2022-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-220-release#issues-fixed-6 "Direct link to Issues Fixed")
  * Fixed an issue that was affecting fragment scheduling efficiency under heavy workloads, resulting in high sleep times for some queries. 
DX-57579 
  * After offloading a column with type `DOUBLE` and offloading again to change the type to `VARCHAR`, the column type was still `DOUBLE` and read operations on the table failed with an exception. 
DX-58410 
  * The `ALTER TABLE` command, when used with a column-masking or row-filtering policy, returned an error when the table contained field names that would require quoting, such as those containing spaces or corresponding to reserved keywords. 
DX-58186 
  * Heap usage on some coordinator nodes was growing over time, requiring a periodic restart to avoid out of memory errors. 
DX-57398 
  * The AWSE activation page was no longer showing the expiration date for a license key. 
DX-53755 


## 22.1.5 (November 2022) Enterprise[​](/release-notes/unsupported-releases/version-220-release#2215-november-2022-enterprise "Direct link to 2215-november-2022-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-220-release#issues-fixed-7 "Direct link to Issues Fixed")
  * The `queries.log` file was showing zero values for `inputRecords`, `inputBytes`, `outputRecords`, `outputBytes`, and `metadataRetrieval`, even though valid values were included in the job profile. 
DX-58499 
  * For Parquet sources on Amazon S3, files were being automatically formatted/promoted even though the auto-promote setting had been disabled. 
DX-58451 
  * When saving a view, datalake sources were showing up as a valid location for the view, but such sources should not have been allowed as a destination when saving a view. 
DX-58125 
  * Improved reading of double values from ElasticSearch to maintain precision. 
DX-57534 
  * An error in schema change detection logic was causing refresh metadata jobs for Hive tables to be triggered at all times, even if there were no changes in the table. 
DX-56251 
  * This release includes performance improvements for incremental metadata refreshes on partitioned Parquet tables. 
DX-56250 
  * Dremio was generating unnecessary exchanges with multiple unions, and changes have been made to set the proper parallelization width on JDBC operators and reduce the number of exchanges. 
DX-55300 
  * On catalog entities, ownership granted to a role was not being inherited by users in that role. 
DX-55002 
  * In some environments, Dremio was unable to read a Parquet statistics file in Hive during logical planning, and the query was cancelled because planning phase exceeded 60 seconds. 
DX-54312 
  * Some queries using a filter condition with `flatten` field under a multi-join were generating a NullPointerException. 
DX-54266 
  * When a materialization took too long to deserialize, the job updating the materialization cache entry could hang and block all Reflection refreshes. 
DX-54194 
  * When trying to use some custom garbage collection value in JVM options, the option was being switched to `UseParallelGC`, which would cause performance degradation. 
DX-54165 
  * `CONVERT_FROM()` did not support all ISO 8601 compliant date and time formats. 
DX-54030 
  * An aggregate Reflection that matched was not being chosen due to a cost difference generated during pre-logical optimization. 
DX-53174 
  * Fixed an issue causing the error "Offset vector not large enough for records" when copying list columns. 
DX-50944 
  * Fixed an issue that was affecting the accuracy of cost estimations for DeltaLake queries (i.e., some queries where showing very high costs). 
DX-50219 
  * If Dremio was stopped while a metadata refresh for an S3 source was in progress, some datasets within the source were getting unformatted/deleted. 
DX-40512 
  * Frequent, consecutive requests to the Job API endpoint to retrieve a Job's status could result in an `UNKNOWN` StatusRuntimeException error. 
DX-32370 
  * Fixed an issue where Glue tables with large numbers of columns and partitions would not return results for all partitions in the table. The fix requires table metadata to be refreshed via `ALTER TABLE REFRESH METADATA` to take effect. 
DX-28211 
  * Updated `org.apache.parquet:parquet-format-structures` to address a potential security vulnerability [CVE-2021-41561]. 
DX-55460 


## 22.1.4 (October 2022) Enterprise[​](/release-notes/unsupported-releases/version-220-release#2214-october-2022-enterprise "Direct link to 2214-october-2022-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-220-release#issues-fixed-8 "Direct link to Issues Fixed")
  * In some cases, queries against a table that was promoted from text files containing Windows (CRLF) line endings were failing or producing an `Only one data line detected` error. 
DX-57713 
  * Following the upgrade to Dremio 22.1.2, when promoting JSON files to tables and building views from those tables, queries against the views were failing with a `NullPointerException`. 
DX-57406 
  * In Dremio 22.1.1, some queries that included a `WHERE` clause were failing with a `NullPointerException` during the planning phase. 
DX-56410 
  * Reflection footprint was 0 bytes when created on a view using the `CONTAINS` function on an Elasticsearch table. The Reflection could not be used in queries and `sys.reflection` output showed `CANNOT_ACCELERATE_SCHEDULED`. 
DX-56336 
  * In Dremio 22.0.x, users who were not assigned the `ADMIN` role were getting 0-byte files when attempting to download query results, while downloads were working as expected in previous releases. 
DX-54247 
  * Fixed an issue that was causing certain queries to fail with a `Max Rel Metadata call count exceeded` error. 
DX-53818 
  * After changing the engine configuration, some queries were failing with an `IndexOutOfBoundsException` error. 
DX-53358 
  * JDBC clients could not see parent objects (folders, spaces, etc.) unless they had explicit `SELECT` privileges on those objects, even if they had permissions on a child object. 
DX-40559 


## 22.1.2 (October 2022) Enterprise[​](/release-notes/unsupported-releases/version-220-release#2212-october-2022-enterprise "Direct link to 2212-october-2022-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-220-release#whats-new-4 "Direct link to What's New")
  * Added a new Admin CLI command, `dremio-admin remove-duplicate-roles`, that will remove duplicate LDAP groups or local roles and consolidate them into a single role. For more information, see [Remove Duplicate Roles](/reference/admin-cli/remove-roles). 
SW Only DX-51484 


### Issues Fixed[​](/release-notes/unsupported-releases/version-220-release#issues-fixed-9 "Direct link to Issues Fixed")
  * After upgrading to Dremio 22.1.1, some coordinator nodes failed to start due to a failure in connecting to S3-compatible storage (sources or distributed storage configuration) that required path style access. 
DX-57044 
  * Following the upgrade to Dremio 22, Support Keys of type `DOUBLE` would no longer accept decimal values. 
DX-56918 
  * Field size for CSV files was limited to 65536 characters, and setting the `limits.single_field_size_bytes` Support Key to a higher value than the limit was not being honored. 
DX-56696 
  * Fixed an issue that was causing `REFRESH REFLECTION` and `REFRESH DATASET` jobs to hang when reading Iceberg metadata using Avro reader. 
DX-56556, DX-56244 
  * The `LENGTH` function was returning incorrect results for Teradata sources. 
DX-56487 
  * Fixed an issue that was causing the status of a cancelled job to show as RUNNING or PLANNING. 
DX-55680 
  * In some deployments, using a large number of REST API-based queries that return large result sets can create memory issues and lead to cluster instability. 
DX-55385 
  * Following the upgrade to Dremio 22, some queries to Hive 2 metastore external tables with data in S3 were running considerably slower than before. 
DX-55218 
  * During the Reflection matching phase, for the filter pattern in some queries the planner could generate row expression nodes exponentially and exhaust heap memory. 
DX-54670 
  * Fixed an issue that was causing a `GandivaException: Failed to make LLVM module due to Function double abs(double) not supported yet` for certain case expressions used as input arguments. 
DX-54273 
  * This release includes a number of fixes that resolve potential security issues. 
DX-54176, DX-54174, DX-54214 
  * In rare cases, an issue in the planning phase could result in the same query returning different results depending on the query context. 
DX-53740 
  * When skipping the current record from any position, Dremio was not ignoring line delimiters inside quotes, resulting in unexpected query results. 
DX-53211 
  * Following the upgrade to Dremio 21.2, some Delta Lake tables could not be queried, and the same tables could not be formatted again after being unpromoted. 
DX-53061 
  * Fixed an issue that was causing failures in Microsoft SQL Server queries that contained a boolean filter set to `true`. 
DX-53038 
  * In some cases, deleted Reflections were still being used to accelerate queries if the query plan had been cached previously. 
DX-52602 
  * Clicking **Edit Original SQL** for a view in the SQL editor was producing a generic `Something went wrong` error. 
DX-52392 
  * Some queries were failing with `INVALID_DATASET_METADATA ERROR: Unexpected mismatch of column names` if duplicate columns resulted from a join because Dremio wasn't specifying column names. 
DX-51540 
  * In some cases, queries using the `<` operator would fail when trying to decode a timestamp column in a Parquet file. 
DX-40891 
  * Parentheses were missing when generating the SQL for a view when the query contained `UNION ALL` in a subquery, and the query failed to create the view. 
DX-22966 


## 22.1.1 (August 2022)[​](/release-notes/unsupported-releases/version-220-release#2211-august-2022 "Direct link to 22.1.1 \(August 2022\)")
### What's New[​](/release-notes/unsupported-releases/version-220-release#whats-new-5 "Direct link to What's New")
DX-32718 
  * Dremio now supports connecting to Amazon S3 sources using an AWS PrivateLink URL. For more information, see [Amazon S3](/data-sources/object/s3).
  * In this release, embedded Nessie historical data that is not used by Dremio is purged on a periodic basis to improve performance and avoid future upgrade issues. The maintenance interval can be modified with the `nessie.kvversionstore.maintenance.period_minutes` [support key](/help-support/support-settings/#support-keys), and you can perform maintenance manually using the `nessie-maintenance` [admin CLI](/reference/admin-cli/nessie-maintenance) command. 
DX-53159 


DX-52574, DX-49394 
  * If OAuth sign-in for Tableau is enabled, all newly generated TDS files will use OAuth for authentication. If disabled, username/password authentication will be used.
  * Users with the `CREATE ROLE` privilege will now have access to the **Roles** tab under Settings, allowing them to add new roles. 
DX-50542 


DX-49988 
  * Improved the error message that is displayed when trying to run DML commands that are not supported on views saved from Iceberg tables.


DX-45895 
  * This release enables non-partition column runtime filters with row level pruning.


### Issues Fixed[​](/release-notes/unsupported-releases/version-220-release#issues-fixed-10 "Direct link to Issues Fixed")
  * The `fields` parameter was not returned for tables in external sources when fetching table details via `/api/v3/catalog{id}` if the table had not been queried. 
DX-50330 
  * Dremio was failing to parse queries on a view when the query originated from Power BI, or another JDBC/ODBC client, that had the `quoting` connection property set to a non-default value. 
DX-52443 


DX-54938 
  * In some scenarios, invalid metadata about partition statistics was leading to inaccurate rowcount estimates for tables. The result was slower than expected query execution or out of memory issues. For each table included in a query where this behavior appears, perform an `ALTER TABLE <table-name> FORGET METADATA`, then re-promote the resulting file or folder to a new table. This will ensure that the table is created with the correct partition statistics.


DX-54122 
  * For some users, when clicking on certain items on the **Settings** page, they were being redirected to the Dremio home screen.
  * Automatic Reflection refreshes were failing with the following error: `StatusRuntimeException: UNAVAILABLE: Channel shutdown invoked`
DX-53757 
  * Profiles for some Reflection refreshes included unusually long setup times for `WRITER_COMMITTER`. 
DX-53735 
  * Wait time for `WRITER_COMMITTER` was excessive for some Reflection refreshes, even though no records were affected. 
DX-53734 


  * In Dremio's AWS Edition, upgrades from any 21.x.x version to version 22 were failing.
  * Metadata queries (queries using the `TABLE_FILES()` function) that were run on tables that had been altered were failing or returning incorrect results. 
DX-53281 


SW Only DX-53054 
  * Some database sources, such as Snowflake, Databricks Spark, and MSAccess, were showing up under Object Storage when adding a source, and they could not be browsed or managed in the Datasets page.
  * Some queries on Parquet datasets in an ElasticSearch source were failing with a `SCHEMA_CHANGE` error, though there had been no changes to the schema. 
DX-52652 
  * `dremio-admin clean` is now limited to only temporary dataset versions during cleanup. 
DX-52061 


DX-51567 
  * Fixed an issue that was causing metadata refresh on some datasets to fail continuously.


DX-51465 
  * Objects whose names included non-latin characters were not behaving as expected in Dremio. For example, folders could not be promoted and views were not visible in the home space.
  * When unlimited splits were enabled and running incremental metadata refreshes on a file-based table, running subsequent raw Reflections would fail with a `DATA_READ` error. 
DX-51394 
  * `INSERT`, `MERGE`, `UPDATE`, `TRUNCATE`, and `DELETE` queries in the SQL Runner were failing with an `Invalid path` error when using a partial key/path. 
DX-49941 


DX-49932 
  * In some cases, the number of records returned by CTAS or DML operations did not match the number reported in the query summary below the SQL Editor.
  * `GROUP BY` queries that used `GROUPING SETS` were failing with `AssertionError`. 
DX-48951 


DX-48273 
  * If issues were encountered when running queries against a view, Dremio was returning an error that was unhelpful. The error returned now includes the root cause and identifies the specific view requiring attention.


DX-47602 
  * When adding a new S3 source, the **Encrypt connection** option was not enabled by default, though it was enabled for other sources.
  * `CONVERT_FROM` queries were returning errors if they included an argument that was an empty binary string. This issue has been fixed, and such queries have been optimized for memory utilization. 
DX-47568 
  * When using the Catalog API to create a folder in a space, if the folder already existed in the space, the API was returning the `HTTP/1.1 500 Internal Server Error` instead of `HTTP/1.1 409 Conflict`. 
DX-47372 
  * Reflection refreshes on a MongoDB source table were failing with the following error: `unknown top level operator: $not`
SW Only DX-46790 
  * The ODBC driver was ignoring the `StringColumnLength` with `STRUCT` data types, resulting in truncated results. 
DX-46633 


DX-46632 
  * Row count estimates for some Delta Lake tables were changing extensively, leading to single-threaded execution plans.


DX-45671 
  * In environments with high memory usage, if an expression contained a large number of splits, it could eventually lead to a heap outage/out of memory exception.
  * When a Hive source was added or modified, shared library files created in a new directory under `/tmp` were not being cleaned up and leading to disk space issues. 
DX-44588 


DX-44563 
  * Fixed an issue that was causing slow query performance against Redshift datasources.
  * JDBC clients could not see parent objects (folders, spaces, etc.) unless they had explicit `SELECT` privileges on those objects, even if they had permissions on a child object. 
DX-40559 
  * Fixed an issue in the scanner operator that could occur when a parquet file had multiple row-groups, resulting in a query failure and the following system error: `Illegal state while reusing async byte reader`
DX-40130 
  * Fixed an issue that could cause the Arrow Flight endpoint performing long queries to encounter a `gRPC GOAWAY` code. 
DX-50242 


## 22.0.3 (July 2022) Enterprise[​](/release-notes/unsupported-releases/version-220-release#2203-july-2022-enterprise "Direct link to 2203-july-2022-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-220-release#whats-new-6 "Direct link to What's New")
DX-53574 
  * Amazon OpenSearch is now supported as a source on Dremio's AWS Edition. For more information, see [Amazon OpenSearch Service](/data-sources/databases/opensearch).


DX-51733 
  * Azure Data Lake Storage (ADLS) Gen1 is now supported as a source on Dremio's AWS Edition. For more information, see [Azure Data Lake Storage Gen1](/data-sources/object/azure-data-lake-store).


DX-51828 
  * Elasticsearch is now supported as a source on Dremio's AWS Edition. For more information, see [Elasticsearch](/data-sources/databases/elasticsearch).


## 22.0.0 (June 2022)[​](/release-notes/unsupported-releases/version-220-release#2200-june-2022 "Direct link to 22.0.0 \(June 2022\)")
### What's New[​](/release-notes/unsupported-releases/version-220-release#whats-new-7 "Direct link to What's New")
  * This release adds support for SQL scalar [user-defined functions](/reference/sql/commands/functions) (UDFs), which are callable routines that make it easier for you to write and reuse SQL logic across queries. UDFs let you extend the capabilities of Dremio SQL, provide a layer of abstraction to simplify query construction, encapsulate business logic, and support row and column policies for access control.
  * Dremio now supports [row-access and column-masking policies](/data-products/govern/row-column-policies-udf) for row and column controls over user query access to sensitive tables, views, and columns. This allows administrators to dynamically exclude or mask private data at the column and row levels prior to query execution and without physically altering the original values.
  * This release adds to existing Iceberg DML capabilities allows users to run `DELETE`, `UPDATE`, `MERGE`, and `TRUNCATE` statements against Iceberg tables. See [SQL Commands for Apache Iceberg Tables](/reference/sql/commands/apache-iceberg-tables) for more information.
  * You can now add Azure Data Explorer (ADX) as a database source in Dremio. For more information, see [Azure Data Explorer](/data-sources/databases/azure-data-explorer).


DX-48667 
  * Autocomplete is now available in the SQL Editor. When enabled, autocomplete lets you view and insert possible completions in the editor using the mouse or the arrow keys with **Tab** or **Enter**. Autocomplete can provide suggestions for SQL keywords, catalog objects, and functions while you are constructing SQL statements. Suggestions depend on the current context. The autocomplete feature can be enabled or disabled for all users under **Settings &gt; SQL**.
  * The SQL Runner now allows you to save your SQL as a script. See [Querying Your Data](/query-manage/querying-data) for more information.
    * Script owners are indicated with a small orange flag next their username. Script owners cannot be removed or have their privileges changed.
    * You can share scripts with others in your organization by adding users and assigning privileges to **View** , **Modify** , **Manage Grants** , or **Delete**.
    * When adding or modifying script privileges, the `View` privilege is enabled automatically if any of the other privileges are enabled
    * The option to save a script will be disabled if the user already has 100 scripts, which is the maximum per user.
  * Added support for internal schema using SQL commands, which lets the user override the data type of a column instead of using the type that Dremio automatically detected.


DX-50572 
  * Iceberg is the default CTAS format for all filesystem sources in Dremio 22.0.0+.
  * The `DATEDIFF` and `ADD_MONTHS` Hive functions are supported in queries.


DX-49126 
  * The option to enable **Arrow caching** in advanced Reflection settings has been removed because Arrow caching is not supported with unlimited splits.
  * `ALTER TABLE` commands are now supported to add, drop, or modify columns in MongoDB sources. 
DX-37643 


DX-40409 
  * Users can now resize the Data panel when viewing the SQL Editor on the Datasets or SQL Runner page.


DX-41560 
  * The Zookeeper version used in Kubernetes deployments has been upgraded to 3.8.0 to address known security vulnerabilities. As part of any upgrade, it is best practice to back up configuration files and stateful volumes.
  * Fields in MongoDB tables can be converted to `VARCHAR` using internal schema (`ALTER` commands) and incompatible data types will fall back to `VARCHAR` instead of failing when querying MongoDB tables. 
DX-41888 


DX-42003 
  * If the user tried to cancel a completed job, Dremio was returning an internal server error. The message now indicates that the job may have already completed and cannot be cancelled.


DX-42062 
  * Improved logging and now providing a more meaningful error message when invalid characters are encountered in a password or PAT.


DX-50957 
  * In this release, we have updated various elements of the Dremio UI to provide a more uniform and intuitive user experience.


DX-42523 
  * In this release, many messages provided in Dremio have been updated to provide information that is more accurate and more helpful.


DX-43287 
  * Iceberg now supports metadata functions for inspecting a table’s history, snapshots, and manifests.
  * New commands are available for `ALTER` keyword. By issuing the `ALTER FOLDER` or `ALTER SPACE` command, user can now set Reflection refresh routing at folder and space level. 
DX-43417 
  * Users can now add a primary key to a table or drop a primary key with the following commands:  
`alter table <table name> add primary key (col1, ...)`  
`alter table <table name> drop primary key`
DX-43545 
  * Dremio's OAuth config now supports `access_token` as a valid token type to provide identity when authenticating via OpenID Connect SSO. 
DX-44315 


DX-44328 
  * Dremio now supports OIDC + LDAP mode, which allows the use of OpenID Connect (OIDC) for authentication while still using LDAP for user and groups lookup.


DX-27908 
  * Updated to ElasticSearch 6.8.23 client libraries to address 


DX-45936 
  * In this release, json-smart was upgraded to version 2.4.8 to address 


DX-48627 
  * Updated WildFly OpenSSL to 1.1.3.Final to address 


DX-48818 
  * Updated the Postgres JDBC driver from version 42.2.18 to version 42.3.4 to address 


DX-47531 
  * In this release, the Apache Arrow version has been upgraded to 8.0.0 to address issues with some current functions and add support for new functions.


DX-47706 
  * FasterXML/Jackson was upgraded to version 2.13.2 in Parquet to address a number of vulnerabilities.


DX-46276 
  * This release includes a new consent page where you can permit Tableau to access resources on your behalf when connecting via Tableau SSO.
  * Along with ROW and ARRAY keywords, STRUCT and LIST keywords are now supported to represent complex data types:  
`STRUCT < x : BIGINT, y : LIST < BIGINT >>, LIST <STRUCT < x : INT >>`
DX-47171 
  * This release adds support for the `MODIFY` privilege on `SYSTEM` that will allow non-admin users to manage Node Activity, Engines, Queues, Engine Routing, and Support Keys. 
DX-47236 
  * Dremio now supports `MODIFY COLUMN` on MongoDB sources, and the internal schema changes will not be erased by metadata refresh. 
DX-47305 
  * The `SELECT` privilege can be granted to users and roles on specific system tables, allowing those users to view the specified tables. 
DX-47390 


DX-47481 
  * In the job details page, the automatic truncation message will appear in the job summary if a query's output was truncated.
  * Dremio admins can allow or disable the creation of local users by adding the `services.coordinator.security.permission.local-users.create.enabled:`flag`` setting to `dremio.conf`. Set the flag to `true` to allow local users or `false` to disable the creation of local users. 
DX-47657 
  * Added the `UPLOAD` privilege, letting non-admin users upload files to their home space. This privilege can be overridden if the `ui.upload.allow` support key is disabled. 
DX-47775 


DX-48013 
  * Added a plus button to the upper-right corner of the page for spaces that allows users to quickly add a new folder, table, or view. For user home spaces, the button also allows you to upload files.


DX-48328 
  * Dremio now supports SSO authentication from Tableau. See [Tableau](/client-applications/tableau) for more information about supported versions and configuration steps.


DX-48365 
  * If the context is truncated in the SQL Editor, you can now hover the cursor over the field and the full context will be displayed in a tooltip.


DX-48714 
  * User can now see the wiki for a folder if they can access the folder, even if implicitly via a shared dataset that is nested inside.
  * This release includes a new argument for the `dremio-admin clean` CLI command to purge dataset version entries that are not linked to existing jobs. See [Clean Metadata](/reference/admin-cli/metadata-cleanup) for more information. 
DX-49772 
  * Users who have been granted the `CREATE ROLE` privilege can view and update role members. 
DX-50981 


### Issues Fixed[​](/release-notes/unsupported-releases/version-220-release#issues-fixed-11 "Direct link to Issues Fixed")
  * Fixed a number of issues that could cause the _"An Unexpected Error Occurred"_ dialog box to be displayed in Dremio, providing no potential solution except to call Dremio Support. 
DX-43130 
  * Running `ALTER PDS` to refresh metadata on a Hive source was resulting in the following error: `PLAN ERROR: NullPointerException`
DX-36544 
  * Some queries were taking longer than expected because Dremio was reading a `STRUCT` column when only a single nested field needed to be read. 
DX-40232 


DX-41504 
  * On first run, some queries were failing with an assertion error at the planning stage when a complex type was defined within a view.
  * Following the upgrade from Dremio 20.x to 21.0.0 and if Nessie was in use, metadata refreshes were failing with `Unknown type ICEBERG_METADATA_POINTER`. 
DX-42897 


DX-42909 
  * The **Tableau** and **PowerBI** buttons were not showing up or remaining hidden as expected, and they are now enabled all the time in the SQL Editor.
  * After enabling Iceberg, files with `:` in the path or name were failing with a `Relative path in absolute URI` error. 
DX-43201 


DX-44445 
  * Reflection refresh jobs were consuming too much peak memory on each executor node.
  * `CAST` operations were added to pushed down queries for RDBMS sources to ensure consistent data types, and specifically for numeric types where precision and scale were unknown. In some cases, however, adding `CAST` operations at lower levels of the query was disabling the use of indexes in `WHERE` clauses in some databases. Dremio now ensures that `CAST` operations are added as high up in the query as possible. 
DX-44619 
  * Following an upgrade, queries with `TO_NUMBER(_Column_,'###')` were failing. 
DX-44848 


DX-45671 
  * In environments with high memory usage, if an expression contained a large number of splits, it could eventually lead to a heap outage/out of memory exception.
  * Fixed an issue that was causing the following error when trying to open a view in the Dataset page: `Some virtual datasets are out of date and need to be manually updated.`
DX-46371 


DX-46377 
  * When using Postgres as the data source, expressions written to perform subtraction between doubles and integers, or subtraction between floats and integers, would incorrectly perform an addition instead of the subtraction.
  * When running a specific query with a `HashJoin`, executor nodes were stopping unexpectedly with the following error: `SYSTEM ERROR: ExecutionSetupException`
DX-47112 


DX-47361 
  * At times, in Dremio's AWS Edition, the preview engine was going offline and could not be recovered unless a reboot was performed.


DX-48275 
  * Dremio was generating a NullPointer Exception when performing a metadata refresh on a Delta Lake source if there was no checkpoint file.


DX-50005 
  * Partition expressions were not pushed down when there was a type mismatch in a comparison, resulting in slow queries compared to prior Dremio versions.


DX-51811 
  * Fixed an issue that was causing large spikes in direct memory usage on coordinator nodes, which could result in a reboot.


DX-48002 
  * When Iceberg features were enabled, the location in the API was incorrect for some tables in S3 sources.


### Known Issues[​](/release-notes/unsupported-releases/version-220-release#known-issues "Direct link to Known Issues")
  * Azure Data Explorer and Microsoft Azure Synapse Analytics sources are not supported and cannot be added in the MapR edition of Dremio 22. 
DX-51248 
  * When multiple SQL statements are executed in the SQL Runner, any jobs that may have failed are not listed in the job summary below the SQL Editor. 
DX-51534 
  * The `fields` parameter is not returned for tables in external sources when fetching table details via `/api/v3/catalog{id}` if the table has not been queried. _Fixed in 22.1.1._
DX-50330 
  * Dremio fails to parse queries on a view when the query originates from Power BI, or another JDBC/ODBC client, that has the `quoting` connection property set to a non-default value. _Fixed in 22.1.1._
DX-52443 


Was this page helpful?
[Previous 23.x Release Notes](/release-notes/unsupported-releases/version-230-release)[Next 21.x Release Notes](/release-notes/unsupported-releases/version-210-release)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous 23.x Release Notes](/release-notes/unsupported-releases/version-230-release)[Next 21.x Release Notes](/release-notes/unsupported-releases/version-210-release)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Frelease-notes%2Funsupported-releases%2Fversion-220-release%2F&_biz_t=1777950703960&_biz_i=22.x%20Release%20Notes%20%7C%20Dremio%20Documentation&_biz_n=745&rnd=426002&cdn_o=a&_biz_z=1777950703960)
