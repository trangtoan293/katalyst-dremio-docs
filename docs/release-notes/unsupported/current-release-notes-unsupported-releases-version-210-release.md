---
url: /release-notes/unsupported-releases/version-210-release
slug: /release-notes/unsupported-releases/version-210-release
title: "21.x Release Notes | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64385.491082791
---

  * [Dremio Enterprise Home](/)
  * [Release Notes](/release-notes)
  * [Unsupported Releases](/release-notes/unsupported-releases)
  * 21.x Release Notes

Version: current [26.x]
On this page
# 21.x Release Notes
Releases are listed in reverse order, starting with the latest release of Dremio 21.x.
## 21.8.3 (October 2023) Enterprise​
### Issues Fixed​
  * Metadata on AWS Glue sources was not being refreshed according to the schedule defined on the source. In some cases, new data was only seen after running `ALTER TABLE `table` REFRESH METADATA`. 
DX-82900
  * Removed stack trace information from REST API payload JSON parsing error message. 
DX-71937
  * Fixed an issue in C3 recovery logic that was causing C3 to be disabled at startup on some nodes. 
DX-67436
  * Fixed the following issues with acceleration information in job profiles when the plan cache was used: acceleration information was missing for a prepared query, plan cache usage was missing for a prepared query, acceleration information was missing when the query was not accelerated but Reflections were considered, and canonicalized user query alternatives were missing. Additionally, matching hints were missing for Reflections that were only considered. 
DX-64636
  * Fixed an issue that was causing certain queries to fail when using hash joins, leading to an unexpected restart of an executor. 
DX-63029
  * Some queries that contained large `IN` conditions were failing with a stack overflow error. 
DX-62755
  * Changing the size of an existing EC2 engine on Dremio's AWS Edition was resetting the engine type. 
DX-71086, DX-54590


## 21.8.2 (August 2023) Enterprise​
### What's New​
  * Improved error logging while writing to `queries.json`. In the case of errors, entries are written with partial details. 
DX-64515


### Issues Fixed​
  * The Dremio vectorized reader could not read invalid Parquet files where a dictionary page offset was used if no dictionary page was present. 
DX-64608
  * Fixed query concurrency issues that could lead to "Selected table has no columns" errors. 
DX-59967
  * Dremio was generating unnecessary exchanges with multiple unions, and changes have been made to set the proper parallelization width on JDBC operators and reduce the number of exchanges. 
DX-55300


## 21.8.1 (July 2023) Enterprise​
### What's New​
  * This release includes some changes to improve logical planning performance and query planning times in certain scenarios.


  * For Azure Blob Storage and Data Lake Gen 2 sources, you can now enable checksum-based verification to ensure data integrity during network transfers. To enable this option, set the `store.azure.checksum` support key to `true`.


### Issues Fixed​
  * In this release, the plan cache is user-specific for increased security, and it will be utilized when the same query is executed by the same user.


  * Privilege changes for entities via SQL were not being captured in the audit log.


  * Expression operator names were being used as intermediate field names. In some queries, the multiplication operator `*` was later treated as a `SELECT *` statement, which was causing physical planning to fail to find the field.


  * `GRANT` commands on catalog entities were failing with `Role/User `ID` not found` if existing user or role grantees were no longer present in the system.


  * If a Hive source connection was slow, Dremio was repeatedly pinging the source to add databases.


  * For some queries on Oracle sources, an interval of time was being processed incorrectly, resulting in the following error: `(full) year must be between -4713 and +9999`


  * If a corrupted or malformed checkpoint file was encountered during metadata refresh, queries would fail with a `Metadata read Failed` error.


  * Queries that utilized external Reflections were not being logged in `queries.json`.


  * For some queries on views using `OR` or `IN`, unnecessary subquery scans were not removed, causing inconsistent results.


## 21.7.20 (April 2023) Enterprise​
### Issues Fixed​
  * In some cases, the JVM's direct memory allocator was triggering garbage collection when there was sustained and high usage of direct memory, which was causing performance issues. 
DX-50135 
  * Pushdowns were not working for `UUID` data types on a PostgresSQL source. This change maps PostgresSQL's `UUID` type to Dremio's `VARCHAR`. Comparison operators (=, &gt;, &lt;, &lt;=, &gt;=, !=) between a `UUID` and a `UUID` and between a `UUID` and a `VARCHAR` will now be pushed down. 
DX-62978 
  * In some cases, allocator information was not being included in the profile for queries that failed due to out of memory errors. 
DX-62731 
  * At times, using the `CONCAT` function with non-string operands would yield results that were truncated incorrectly. 
DX-61914 
  * When querying `INFORMATION_SCHEMA` tables as a non-admin user from JDBC/ODBC applications, the query was taking much longer than when performed by an admin user. 
DX-61168 
  * Queries were failing against views and time series collections on MongoDB sharded collections. 
DX-60691 
  * Fixed a bug in Yarn-based deployments where certain properties that were meant for customizing Dremio executor containers were also being passed on to the Application main container. 
DX-55630 
  * On catalog entities, ownership granted to a role was not being inherited by users in that role. 
DX-55002 
  * Fixed an issue that was causing certain queries to fail with a `Max Rel Metadata call count exceeded` error. 
DX-53818 
  * When using the `GROUP BY` expression with an aliased column of the same name as the original column, a validation error was indicating that the column was not being grouped. 
DX-48015 
  * For some queries, all available memory was getting consumed in the planning phase, resulting in allocation failures and causing all other queries to fail. 
DX-46989 


## 21.7.1 (Februrary 2023) Enterprise​
### Issues Fixed​
  * Fixed an issue with the Jobs page that could lead to high heap memory usage when the content of the SQL query was unusually large. 
DX-54831 
  * In some cases, Power BI Desktop and Gateway may not have been able to connect to Dremio via Azure Active Directory. 
DX-60942 
  * When unlimited splits were enabled, partition pruning was failing due to complex filter conditions that were unable to transform a query to its normalized form using CNF. 
DX-60604 
  * Fixed an issue with Decimal functions that was leading to bad results when `exec.preferred.codegenerator` was set to `java`. 
DX-60099 
  * Some queries were failing for MongoDB v4.9+ sharded collections because MongoDB would use UUID instead of namespace. 
DX-59457 
  * For Parquet sources on Amazon S3, files were being automatically formatted/promoted even though the auto-promote setting had been disabled. 
DX-58451 
  * After offloading a column with type `DOUBLE` and offloading again to change the type to `VARCHAR`, the column type was still `DOUBLE` and read operations on the table failed with an exception. 
DX-58410 
  * `LIKE` was returning null results when using `ESCAPE` if the escaped character was one of the Perl Compatible Regular Expressions (PCRE) special characters. 
DX-57934 
  * Fixed an issue that was affecting fragment scheduling efficiency under heavy workloads, resulting in high sleep times for some queries. 
DX-57579 
  * Heap usage on some coordinator nodes was growing over time, requiring a periodic restart to avoid out of memory errors. 
DX-57398 
  * Moved from strict matching of types to coercion to compatible types such as `INT` and `BIGINT` -&gt; `BIGINT`, to address an issue with forgotten Elasticsearch mappings during refresh 
DX-57304 
  * Fixed an issue that was causing a `DATA_READ ERROR: Failed to initialize Hive record reader` error when trying to read ORC tables. 
DX-56952 
  * If a subquery expression was used after an aggregate and the same expression was duplicated in a WHERE clause, a validation exception was being encountered. 
DX-56541 
  * Fixed an issue that was resulting in repeated role lookups during privilege checks and causing performance issues. 
DX-56347 
  * To address potential security concerns, AWSE CloudFormation now enforces IMDSv2, HTTP tokens are now required, and endpoints are enabled. 
DX-56300 


## 21.7.0 (November 2022) Enterprise​
### What's New​
  * This release includes performance improvements for incremental metadata refreshes on partitioned Parquet tables. 
DX-56250 


### Issues Fixed​
  * The `queries.log` file was showing zero values for `inputRecords`, `inputBytes`, `outputRecords`, `outputBytes`, and `metadataRetrieval`, even though valid values were included in the job profile. 
DX-58499 
  * When saving a view, datalake sources were showing up as a valid location for the view, but such sources should not have been allowed as a destination when saving a view. 
DX-58125 
  * Following the upgrade to Dremio 20.x, `is_member(table.column)` was returning zero results on views that used row-level security. 
DX-57690 
  * Improved reading of double values from ElasticSearch to maintain precision. 
DX-57534 
  * Reflection footprint was 0 bytes when created on a view using the `CONTAINS` function on an ElasticSearch table. The Reflection could not be used in queries and `sys.reflection` output showed `CANNOT_ACCELERATE_SCHEDULED`. 
DX-56336 
  * An error in schema change detection logic was causing refresh metadata jobs for Hive tables to be triggered at all times, even if there were no changes in the table. 
DX-56251 
  * Some queries using a filter condition with `flatten` field under a multi-join were generating a NullPointerException. 
DX-54266 
  * When a materialization took too long to deserialize, the job updating the materialization cache entry could hang and block all Reflection refreshes. 
DX-54194 
  * When trying to use some custom garbage collection value in JVM options, the option was being switched to `UseParallelGC`, which would cause performance degradation. 
DX-54165 
  * `CONVERT_FROM()` did not support all ISO 8601 compliant date and time formats. 
DX-54030 
  * After changing the engine configuration, some queries were failing with an `IndexOutOfBoundsException` error. 
DX-53358 
  * In some cases, deleted Reflections were still being used to accelerate queries if the query plan had been cached previously. 
DX-52602 
  * Some queries that used the `FLATTEN()` function were showing results for a Preview, but no data was returned when using Run. 
DX-50906 
  * Fixed an issue that was affecting the accuracy of cost estimations for DeltaLake queries (i.e., some queries where showing very high costs). 
DX-50219 
  * When attempts to list tables failed during metadata refresh for JDBC-based sources, Hive, and ElasticSearch, datasets and corresponding Reflections would intermittently be deleted. 
DX-40684 
  * If Dremio was stopped while a metadata refresh for an S3 source was in progress, some datasets within the source were getting unformatted/deleted. 
DX-40512 
  * Fixed an issue in the scanner operator that could occur when a Parquet file had multiple row-groups, resulting in a query failure and the following system error: `Illegal state while reusing async byte reader`
DX-40130 


## 21.6.2 (October 2022) Enterprise​
### Issues Fixed​
  * In some cases, queries against a table that was promoted from text files containing Windows (CRLF) line endings were failing or producing an `Only one data line detected` error. 
DX-57713 


## 21.6.0 (October 2022) Enterprise​
### Issues Fixed​
  * Queries against datasets backed by Parquet files were failing with a `Failed to decode column` error. 
  * Fixed an issue that was causing `REFRESH REFLECTION` and `REFRESH DATASET` jobs to hang when reading Iceberg metadata using Avro reader. 
  * Fixed an issue that was causing the error `GandivaException: Failed to make LLVM module due to Function double abs(double) not supported yet` for certain case expressions used as input arguments. 
  * When skipping the current record from any position, Dremio was not ignoring line delimiters inside quotes, resulting in unexpected query results. 
  * Clicking **Edit Original SQL** for a view in the SQL editor was producing a generic `Something went wrong` error. 
  * Parentheses were missing in the generated SQL for a view when the query contained `UNION ALL` in a subquery, and the query failed to create the view. 


## 21.5.0 (September 2022) Enterprise​
### Issues Fixed​
  * For some queries on views using `OR` or `IN`, unnecessary subquery scans were not removed from query plans eventually selected, causing inconsistent results.


  * Fixed an issue that was causing the status of a cancelled job to show as RUNNING or PLANNING.


  * In some deployments, using a large number of REST API-based queries that returned large result sets could create memory issues and lead to cluster instability.


  * In some scenarios, invalid metadata about partition statistics was leading to inaccurate rowcount estimates for tables. The result was slower than expected query execution or out of memory issues. For each table included in a query where this behavior appears, perform an `ALTER TABLE <table-name> FORGET METADATA`, then re-promote the resulting file or folder to a new table. This will ensure that the table is created with the correct partition statistics.


  * At times, performing Dremio backups was behaving inconsistently and could result in coordinator restarts in some cases.


  * In rare cases, an issue in the planning phase could result in the same query returning different results depending on the query context.


  * Incremental refreshes of multiple Reflections on a single table could fail, resulting in zero-byte Reflections and errors in the server log.


  * When unlimited splits were enabled, users were seeing an `Access denied` error for queries run against Parquet files if impersonation was enabled on the source.


  * If an accelerated query was amended to include an extra column in the `SELECT` statement, the query would fail with an `Offset vector not large enough for records` error.


  * In some cases, queries using the `<` operator would fail when trying to decode a timestamp column in a Parquet file.


  * Following upgrades to Dremio 18, promotion of HDFS-based datasets was failing if both unlimited splits and the use of Iceberg tables were enabled.


  * Frequent, consecutive requests to the Job API endpoint to retrieve a Job's status could result in an `UNKNOWN` StatusRuntimeException error.


## 21.4.1 (August 2022) Enterprise​
### Issues Fixed​
DX-54938 
  * In some scenarios, invalid metadata about partition statistics was leading to inaccurate rowcount estimates for tables. The result was slower than expected query execution or out of memory issues. For each table included in a query where this behavior appears, perform an `ALTER TABLE <table-name> FORGET METADATA`, then re-promote the resulting file or folder to a new table. This will ensure that the table is created with the correct partition statistics.


## 21.4.0 (August 2022) Enterprise​
### What's New​
DX-53159 
  * In this release, embedded Nessie historical data that is not used by Dremio is purged on a periodic basis to improve performance and avoid future upgrade issues. The maintenance interval can be modified with the `nessie.kvversionstore.maintenance.period_minutes` [support key](/help-support/support-settings/), and you can perform maintenance manually using the `nessie-maintenance` [admin CLI](/reference/admin-cli/nessie-maintenance) command.


### Issues Fixed​
DX-54176, DX-54174 
  * This release includes two fixes to resolve potential security issues.


DX-53757 
  * Automatic Reflection refreshes were failing with the following error: `StatusRuntimeException: UNAVAILABLE: Channel shutdown invoked`


DX-53735 
  * Profiles for some Reflection refreshes included unusually long setup times for `WRITER_COMMITTER`.


DX-53734 
  * Wait time for `WRITER_COMMITTER` was excessive for some Reflection refreshes, even though no records were affected.


DX-53061 
  * Following the upgrade to Dremio 21.2, some Delta Lake tables could not be queried, and the same tables could not be formatted again after being unpromoted.


DX-52652 
  * Some queries on Parquet datasets in an ElasticSearch source were failing with a `SCHEMA_CHANGE` error, though there had been no changes to the schema.


DX-51465 
  * Objects whose names included non-latin characters were not behaving as expected in Dremio. For example, folders could not be promoted and views were not visible in the home space.


DX-51394 
  * When unlimited splits were enabled and running incremental metadata refreshes on a file-based table, running subsequent raw Reflections would fail with a `DATA_READ` error.


DX-48002 
  * When Iceberg features were enabled, the location in the API was incorrect for some tables in S3 sources.


## 21.3.0 (July 2022) Enterprise​
### What's New​
DX-51733 
  * Azure Data Lake Storage (ADLS) Gen1 is now supported as a source on Dremio's AWS Edition. For more information, see [Azure Data Lake Storage Gen1](/data-sources/object/azure-data-lake-store).


DX-51828 
  * Elasticsearch is now supported as a source on Dremio's AWS Edition. For more information, see [Elasticsearch](/data-sources/databases/elasticsearch).


### Issues Fixed​
DX-52061 
  * The `dremio-admin clean` CLI parameter `-d` (or `--delete-orphan-datasetversions`) was deleting named dataset versions during clean-up. With this release, only temporary `tmp.UNTITLED` dataset versions will be deleted.


DX-51811 
  * Fixed an issue that was causing large spikes in direct memory usage on coordinator nodes, which could result in a reboot.


DX-50583 
  * At times, in Dremio's AWS Edition, if the preview engine went offline it could fail to restart with a port binding error.


DX-48273 
  * If issues were encountered when running queries against a view, Dremio was returning an error that was unhelpful. The error returned now includes the root cause and identifies the specific view requiring attention.


DX-47568 
  * `CONVERT_FROM` queries were returning errors if they included an argument that was an empty binary string. This issue has been fixed, and such queries have been optimized for memory utilization.


DX-51567 
  * Fixed an issue that was causing metadata refresh on some datasets to fail continuously.


DX-47361 
  * At times, in Dremio's AWS Edition, the preview engine was going offline and could not be recovered unless a reboot was performed.


DX-46790 
  * Reflection refreshes on a MongoDB source table were failing with the following error: `unknown top level operator: $not`


DX-46632 
  * Row count estimates for some Delta Lake tables were changing extensively, leading to single-threaded execution plans.


DX-40559 
  * JDBC clients could not see parent objects (folders, spaces, etc.) unless they had explicit `SELECT` privileges on those objects, even if they had permissions on a child object.


## 21.2.2 (June 2022) Enterprise​
### Issues Fixed​
DX-51811 
  * Fixed an issue that was causing large spikes in direct memory usage on coordinator nodes, which could result in a reboot.


DX-52061 
  * The `dremio-admin clean` CLI parameter `-d` (or `--delete-orphan-datasetversions`) was deleting named dataset versions during clean-up. With this release, only temporary `tmp.UNTITLED` dataset versions will be deleted.


## 21.2.1 (June 2022) Enterprise​
### Issues Fixed​
DX-50583 
  * At times, in Dremio's AWS Edition, if the preview engine went offline it could fail to restart with a port binding error.


## 21.2.0 (May 2022) Enterprise​
### What's New​
DX-49772 
  * This release includes a new argument for the `dremio-admin clean` CLI command to purge dataset version entries that are not linked to existing jobs. See Clean Metadata for more information.


DX-47557 
  * The `-j` argument of the `dremio-admin clean` CLI command has been extended to purge temporary dataset versions associated with deleted jobs. See Clean Metadata for more information.


DX-43417 
  * New commands are available for the `ALTER` keyword. By using the `ALTER FOLDER` or `ALTER SPACE` command, you can now set Reflection refresh routing at the folder or space level.


#### Issues Fixed​
DX-48818 
  * Updated the Postgres JDBC driver from version 42.2.18 to version 42.3.4 to address 


DX-48627 
  * Updated WildFly OpenSSL to 1.1.3.Final to address 


DX-45936 
  * In this release, json-smart was upgraded to version 2.4.8 to address 


DX-50005 
  * Partition expressions were not pushed down when there was a type mismatch in a comparison, resulting in slow queries compared to prior Dremio versions.


DX-49615 
  * Fixed an issue with external LDAP group name case sensitivity, which was preventing users from accessing Dremio resources to which they had been given access via their group/role membership.


DX-49417 
  * Some IdPs were missing the `expires_in` field in the /token endpoint response. Dremio will fall back to the `exp` claim in the JWT. If this claim is missing from the JWT, the default expiration timeout will be set to 3600 seconds.


DX-48914 
  * When a `CASE` was used in a `WHERE` filter with an `AND` or an `OR`, it would be incorrectly wrapped in a `CAST`, resulting in the following error: `DATA_READ ERROR: Source '`source`' returned error 'Incorrect syntax near the keyword 'AS'.'`


DX-48847 
  * For some deployments, the upgrade to 21.1.0 or 21.1.1 was taking longer than expected.


DX-48778 
  * An unknown error was being generated when attempting to remove a Reflection from the Acceleration dialog and saving the change, and the error would continue to be displayed.


DX-48275 
  * Dremio was generating a NullPointer Exception when performing a metadata refresh on a Delta Lake source if there was no checkpoint file.


DX-47572 
  * A `NULL` constant in Reflection definition was causing a type mismatch while expanding the materialization.


DX-46377 
  * When using Postgres as the data source, expressions written to perform subtraction between doubles and integers, or subtraction between floats and integers, would incorrectly perform an addition instead of the subtraction.


DX-46371 
  * Fixed an issue that was causing the following error when trying to open a view in the Dataset page: `Some virtual datasets are out of date and need to be manually updated.`


DX-44195 
  * When viewing job details, from the Jobs page or the **Run** link in the SQL Runner, the status of some jobs was incorrect in the case of multiple query attempts.


DX-43201 
  * After enabling Iceberg, files with `:` in the path or name were failing with a `Relative path in absolute URI` error.


DX-40232 
  * Some queries were taking longer than expected because Dremio was reading a `STRUCT` column when only a single nested field needed to be read.


DX-36544 
  * Running `ALTER PDS` to refresh metadata on a Hive source was resulting in the following error: `PLAN ERROR: NullPointerException`


## 21.1.2 (May 2022) Enterprise​
### Issues Fixed​
DX-48847 
  * For some deployments, the upgrade to 21.1.1 was taking longer than expected.


## 21.1.0 (April 2022)​")
### What's New​
DX-43298 
  * You can now specify Iceberg as the format when creating a table with `CTAS`. For example: `create table hello store as (type=>'iceberg') as select * from "file.parquet"`


DX-42523 
  * In this release, many UI messages have been updated to provide information that is more accurate and more helpful.


DX-42062 
  * Improved logging and now providing a more meaningful error message when invalid characters are encountered in a password or PAT.


### Issues Fixed​
DX-42552 
  * If you were running 20.x and had unlimited splits/Iceberg support keys enabled, after the upgrade to 21.0.0 you may have seen the error "Failed to get iceberg metadata" when querying datasets. This issue occurred because of how metadata was stored in Iceberg prior to the upgrade.


DX-47820 
  * The `is_member` SQL function was failing with `UnsupportedOperationException` when concatenating with a table column.


DX-46133 
  * When viewing the Execution profile for a job that had multiple query attempts, a `Profile Fragment is Empty` error was being displayed.


DX-46129 
  * **Max Peak Memory** and **Phase 00** memory were displaying different memory usage for the same job profile.


DX-44195 
  * When viewing job details from the Jobs page, the status of some jobs was incorrect in the case of multiple query attempts.


DX-42897 
  * If unlimited splits were enabled in 20.x and Reflections had been created on existing datasets, users may have seen Reflection jobs failing with the following error after the upgrade to 21.0.0: `Bad Request (HTTP/400): Unknown type ICEBERG_METADATA_POINTER`


## 21.1.1 (April 2022)​")
### Issues Fixed​
DX-48847 
  * For some deployments, the upgrade to 21.1.0 was taking longer than expected.


DX-48778 
  * An unknown error was being generated when attempting to remove a Reflection from the Acceleration dialog and saving the change, and the error would continue to be displayed.


DX-45936 
  * In this release, json-smart was upgraded to version 2.4.8 to address 


## 21.0.0 (March 2022)​")
### What's New​
  * Support for Apache Arrow Flight SQL: 
DX-45145 
You can use Apache Arrow Flight SQL client-server protocol to develop client applications that access your data through Dremio. For more information, see [Developing Arrow Flight SQL Client Applications for Dremio](/developer/arrow-flight-sql). 
  * Common Sub-Expression Elimination: 
DEV: DX-33668 
DOC: DX-46331 
Dremio's query engine has been enhanced to better-handle repeating sub-expressions in a query. With this change, common sub-expressions are now computed once per query, and the results made available as needed with each reference in a single query. Previously, Dremio would compute these sub-expressions each time a query referenced them, causing additional resource consumption. 
  * Native Vectorized Copiers: 
DEV: DX-38605 
DOC: DX-46333 
Native copiers are now available with Dremio Enterprise and Community Edition for 2-byte, 4-byte, 6-byte, and conditional 6-byte selection vectors. This replaces the original Java-based field buffer copiers with a more efficient copy mechanism for primitive data types, such as bigInt, bool, string, among others. Faster vectorized copiers allows for measurable overall performance improvements, such as more efficient system throughput, reduced CPU usage, and shorter query times. 


This functionality is [enabled by default](/admin/support-settings) for operators that copy memory.
DX-26935 
  * This release includes a number of UI changes and enhancements, as well as query performance improvements.


DX-37132 
  * Apache Arrow has been upgraded to 7.0.0. The upgrade fixes a number of general query and query performance issues.


DX-41783 
  * To improve performance, the default fraction of cores considered by Dremio executors during query execution planning has been increased from 0.7 to 0.75. This change may cause a slight increase in memory usage for some queries due to the increased parallelism.


DEV: DX-36670 
DOC: DX-46332 
  * [Unlimited splits](/admin/metadata-caching/) for FileSystem and Hive sources is now enabled by default.


DX-45678 
  * The peak memory usage shown in the operator profile has been updated to show the maximum of memory reserved and memory used.


DX-44019 
  * The query engine has been enhanced to identify and eliminate identical sub-expressions within a query.


DX-43287 
  * Iceberg now supports metadata functions for inspecting a table’s history, snapshots, and manifests.


DX-42062 
  * Improved logging and now providing a more meaningful error message when invalid characters are encountered in a password or PAT.


DX-41329 
  * This release includes two new system tables, `sys."tables"` and `sys.views`, which contain metadata for tables and views in Dremio. To see table or view information, run `select * from sys."tables"` or `select * from sys.views`.
The name of the table (`sys."tables"`) must be encapsulated in quotes so that it is parsed as the table name instead of the reserved keyword `tables`.


DX-40944 
  * PageHeaderWithOffset objects will be excluded from the heap when reading Dremio Parquet files. Instead, column indexes will be used to optimize performance and reduce heap usage when generating page headers and stats.


DX-40075 
  * Changes to roles (create, update, delete) are now captured in the audit log.


DX-38159 
  * Ownership can now be granted on all catalog items to a user or role using `GRANT OWNERSHIP ON `object` TO <user or role>`.
DX-41269 
If a role owns a view that queries data in a Hadoop source, and if the source has impersonation disabled, the query will fail because only users can be used to connect to impersonation-enabled sources.


DX-37612 
  * Improved type coercion by performing an implicit cast, where possible, when data types differ, allowing for better relation between different data types. Some examples include union of types `numeric` and `varchar`, casting `varchar` to `date`, and join of types types `numeric` and `varchar`.


DX-42480 
  * In this release, Dremio is now pushing down computation for extra hash join conditions.


DX-25642 
  * SQL Server and other ARP sources will now have boolean expressions expanded to numeric expressions when they do not support true boolean values.


DX-30630 
  * The query plan cache is now enabled by default.


### Issues Fixed​
DX-45096 
  * A query with `not in` was returning incorrect results if more than two values were in predicate for certain Hadoop and Hive datasets.


DX-45671 
  * In environments with high memory usage, if an expression contained a large number of splits, it could eventually lead to a heap outage/out of memory exception.


DX-45198 
  * At times, the Jobs page became unresponsive when selecting the **User** filter. The list of users will now be limited to 50 names, and users can filter with the embedded search box to find a maximum of 1000 users.


DX-44722 
  * Previous Dremio versions allowed ACLs that used the username as the userid, which would result in invalid ACLs. In this release, such ACLs will be pruned and not displayed to users.


DX-44575 
  * Fixed an issue that was causing sockets to remain in a `CLOSE_WAIT` state while running metadata refresh on an ORC dataset. This resulted in `Too Many Open File` errors and the cluster had to be restarted to resolve the condition.


DX-44431 
  * Some complex join filters were getting dropped, resulting in incorrect query results.


DX-44164 
  * Fixed an issue with metadata refresh that could result in incorrect results or query exceptions due to an expected row count mismatch.


DX-43796 
  * Queries with `except` (LogicalMinus) were failing/not being handled correctly in the plan serializer.


DX-43645 
  * In previous versions of Dremio, for some relational sources that did not support `boolean` type, using the `CAST` function to expand a boolean value to a boolean expression was resulting in an `Incorrect syntax near the keyword 'AS’` error.


DX-43552 
  * The links to details were not working for some of the jobs under the **history &gt;&gt;** link for Reflections.


DX-42893 
  * In some cases, if a Parquet file in a Delta Lake table had many row groups, `count(*)` queries were failing due to a divide by 0 exception.


DX-42795 
  * Fixed a column index issue in RelMetadata that was resulting in some queries on views failing with `VALIDATION ERROR: Using CONVERT_FROM(*, 'JSON')`.


DX-42704 
  * In the Query Visualizer Execution tab, **Max Batches** and **Max Memory** have been changed to **Records Processed** and **Memory Processed**.


DX-42576 
  * The same `SELECT` query, using the `IS_MEMBER()` function, was returning different results in different versions of Dremio.


DX-42352 
  * In cases involving multiple tables in joins along with filters, RDBMS query pushdown could result in queries that ambiguously reference columns, resulting in `invalid identifier` errors.


DX-42205 
  * In some cases, the idle timeout was being interpreted as milliseconds instead of seconds, leading to excessive cleanup of connections.


DX-42158 
  * In some queries, window expressions were not getting normalized after substitution, resulting in a `Cannot convert RexNode to equivalent Dremio expression` error.


DX-42112 
  * If every value in one column of a MongoDB table was an empty array, queries were failing with a `Schema change detected` error. To address this issue, Dremio properly eliminates columns that would result in a `NULL` data type when doing schema inference from the Mongo records.


DX-41406 
  * Running `select *` on some system tables was failing with the following error: `UNAVAILABLE: Channel shutdown invoked`


DX-40507 
  * When Parquet files contained too many row groups, Parquet metadata was using too much memory and causing outages on the Executor. To avoid this issue, Dremio limits reuse of the Parquet footer when Parquet files contain too many row groups.


DX-40391 
  * The setting for Nessie retries (nessie.kvversionstore.max_retries) has been removed. There is a new setting for the amount of time to allow for retries (nessie.kvversionstore.commit_timeout_ms). The new setting is in milliseconds.


DX-40217 
  * Queries that worked in previous versions of Dremio were failing with the following error: `Job was cancelled because the query went beyond system capacity during query planning. Please simplify the query`


DX-39697 
  * The `IS_MEMBER()` function was not working with internal roles, returning `false` when it should have been returning `true`.


DX-39644 
  * The `split_part` function was causing a memory allocation error when the first result was empty.


DX-10972 
  * Added support for pushing down DATE_ADD and DATE_SUB scalar functions to RDBMS sources.


### Breaking Changes​
#### 1. Partition Value Format Difference from Dremio 20.x​
Partition format resulting from `CTAS` operations is different in Dremio 21.0.0 than in Dremio 20.x. `CTAS` creates partition folders named `prefix_partitionValue` and writes the column `dir0` with `value` = `partitionValue` in the parquet files. A parquet file will have the same value for the partition column in all row groups.
Partition format is done the same way with or without unlimited splits, which are enabled by default in Dremio 21.0.0, but these tables are interpreted differently depending on whether or not unlimited splits is enabled. When disabled, the table is treated as partitioned because:
  * There are intermediate directories between the root folder and the parquet files.
  * All values of one or more columns in individual parquet files are the same.
  * The partition value is equal to `value_in_parquet_file`.


Such columns are called implicit partition columns.
With unlimited splits enabled, Dremio doesn’t recognize implicit partition columns. A table is partitioned if there are intermediate directories and the partition values are equal to the directory names.
As an example, note the results of the same CTAS operation in Dremio 20.x versus Dremio 21.0.0: `create table $scratch.date_partition1 partition by (dir0) as select * from `data_source` `  
| SQL  | 20.x Result  | 21.0.0 Result  |  
| --- | --- | --- |  
| `select dir0 from $scratch.date_partition1`  | date_col=2022-03-29  | 0_date_col_2022_03_29  |  
In 20.x, `dir0` values are date_col=yyyy-mm-dd from parquet files. In Dremio 21.0.0, `dir0` values are directory names.
##### Under what conditions will this issue occur?​
This issue will occur with `CTAS` on FileSystem datasets that have `dir0` columns and `CTAS` uses `partition by` on these `dir0` columns. Tables created this way will have different `dir0` column data from the source dataset because Dremio 21.0.0 is using directory names for values instead of values from parquet files.
##### Are there any workarounds?​
  1. Since the new value is a variation of `number_old-value`, you can create a view to parse the new value and extract the old value.
  2. Recreate the `CTAS` statement and rename the partition column to avoid conflict with `dir0` from both data file and directory name.
  3. Recreate existing datasets using Iceberg format, and note that `CTAS` also needs to use Iceberg format.


Performance can be negatively impacted by the first two workarounds.
#### 2. PDFS is not supported for distributed storage in versions 21.0.0 and above.​
Additionally, with this change, the Helm chart no longer supports using the “local” distributed storage option.
### Known Issues​
The following known issues apply to all 21.x releases.
DX-50077 
  * Dremio does not currently support Arrow Caching when Unlimited Splits are enabled -- Unlimited Splits are enabled by default starting with Dremio 21.0.0. You can view the Arrow Caching setting in advanced settings for a Reflection: 
    1. Go to **Settings &gt; Reflections** and click **Details** for a Reflection, or open a dataset that uses a Reflection and click the **Reflections** tab.
    2. Click **Advanced**.
    3. Click the settings (gear) icon on an enabled Reflection.
    4. In the settings dialog, ensure the **Arrow caching** slider is set to **Off**.


DX-43519 
  * Following the upgrade to 21.x, values for `grantee` and `object` in `sys.privileges` may initially be set to `null`. This issue will resolve itself after metadata is refreshed automatically. To resolve immediately, run the following: `alter table sys.privileges refresh metadata`


DX-47152 
  * If unlimited splits are enabled, performance can be negatively impacted if datasets contain parquet files with many row groups that are small in size. If this is the case for most parquet datasets, you can set the `exec.parquet.split-size` support key to 128MB or smaller.


DX-46183 
  * CTAS and Reflections that use interval data types are not supported.


DX-37150, DX-47457 
  * If multiple users are trying to promote the same dataset concurrently, a `CONCURRENT_MODIFICATION_ERROR: Metadata refresh failed` error is displayed, even though the promotion is successful. Additionally, on the Jobs page, concurrent metadata queries may show up as failed, even though the metadata is in place.


Was this page helpful?
[Previous 22.x Release Notes](/release-notes/unsupported-releases/version-220-release)Next 20.x Release Notes
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous 22.x Release Notes](/release-notes/unsupported-releases/version-220-release)Next 20.x Release Notes
!
