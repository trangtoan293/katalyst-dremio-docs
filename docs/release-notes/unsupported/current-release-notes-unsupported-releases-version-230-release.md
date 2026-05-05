---
url: /release-notes/unsupported-releases/version-230-release
slug: /release-notes/unsupported-releases/version-230-release
title: "23.x Release Notes | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64385.261394166
---

  * [Dremio Enterprise Home](/)
  * [Release Notes](/release-notes)
  * [Unsupported Releases](/release-notes/unsupported-releases)
  * 23.x Release Notes

Version: current [26.x]
On this page
# 23.x Release Notes
Releases are listed in reverse order, starting with the latest release of Dremio 23.x.
## 23.2.4 (January 2024) Enterprise​
### What's New​
  * Added the option to force parallelism in write queries by using a round-robin exchange before the writer, even when input is only single-threaded. Enable this option by enabling the support key `planner.writer.round_robin`. 
DX-64388


### Issues Fixed​
  * Changing the size of an existing EC2 engine in Dremio's AWS Edition no longer resets the engine type. 
DX-54590
  * Split assignment for tables in Delta Lake format no longer result in a NullPointerException. 
DX-60247
  * Fixed an issue that was causing the error `Gandiva code generation is handled during build` for CASE WHEN queries that contain nested Java/Gandiva functions. 
DX-62402
  * Row-level runtime filtering is disabled for Reflection refresh jobs so that views no longer return incorrect results due to an incorrect match to a single Starflake Reflection. 
DX-68144
  * Impersonation users who do not have access to a remote table cannot view local versions of the remote table that are created by Reflections. 
DX-69553
  * Cancelled queries now immediately stop reading data from data sources. 
DX-69759
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
  * Resolved a path travel security issue that bypassed folder-level role-based access control (RBAC). 
DX-84516
  * Updated snappy-java to 1.10.5 to address a potential security issue [CVE-2023-43642]. 
DX-84755
  * `LIMIT` queries can now be executed in parallel rather than using only one thread for execution. 
DX-83289
  * Removed an errant dependency check that prevented some engines from starting or scaling replicas. 
DX-84081


## 23.2.3 (October 2023) Enterprise​
### What's New​
  * When run by `PUBLIC` users, the data returned by the `apiv2/user/`userid`` internal API is limited to only information that is required to search users and assign privileges. 
DX-82605
  * In this release, the `NOT IN` clause is supported with correlated subqueries. 
DX-57298


### Issues Fixed​
  * In some cases, if a deployment had a large number of sources, the SQL Runner was considerably unresponsive when loading the page or typing in the editor. 
DX-72618
  * Removed stack trace information from REST API payload JSON parsing error message. 
DX-71937
  * In some cases, running `ALTER TABLE `table_path` FORGET METADATA` against a view could result in the view being deleted instead of the command failing with an error. 
DX-68202
  * Dremio queries in some Tableau executors would start failing after the access token had expired and been renewed. 
DX-68133
  * Top-level `CASE` statements intended to return a boolean were not being rewritten correctly, resulting in an error for some SQL Server queries. 
DX-67527
  * Fixed an issue in C3 recovery logic that was causing C3 to be disabled at startup on some nodes. 
DX-67436
  * Incorrect dates were returned when passing a date that was prior to the start of the Gregorian calendar using `TO_DATE` and referencing a data source. 
DX-66663
  * Fixed an issue that was causing increased startup time for the Jobs service when the jobs history table was very large. 
DX-64792
  * Fixed the following issues with acceleration information in job profiles when the plan cache was used: acceleration information was missing for a prepared query, plan cache usage was missing for a prepared query, acceleration information was missing when the query was not accelerated but Reflections were considered, canonicalized user query alternatives were missing, and matching hints were missing for Reflections that were only considered. 
DX-64636
  * Fixed an issue that was causing certain queries to fail when using hash joins, leading to an unexpected restart of an executor. 
DX-63029
  * Some queries that contained large `IN` conditions were failing with a stack overflow error. 
DX-62755
  * In Dremio versions later than v20, casting `+Infinity` was returning an error. 
DX-61115
  * Fixed a number of issues that were affecting proper handling of inferred partition columns, specifically `FOR PARTITIONS (...)` was not working for inferred partition columns. 
DX-60565
  * Deleting a space or folder that contained a user-defined function was resulting in an error. 
DX-59151
  * Fixed an issue with the default Jobs results cleanup path that was resulting in disk space issues and unexpected restarts on some cluster nodes. 
DX-41291


## 23.2.2 (July 2023) Enterprise​
### What's New​
  * Added support for full outer joins that resolve to a `true` join condition. 
DX-59222


### Issues Fixed​
  * Top-level `CASE` statements intended to return a boolean were not being rewritten correctly, resulting in an error for some SQL Server queries. 
DX-67527
  * Fixed an issue that was causing invalid SQL comparison syntaxes in SQL Server queries if nested `CASE` statements were encountered. 
DX-67183
  * The Dremio vectorized reader could not read invalid Parquet files where a dictionary page offset was used if no dictionary page was present. 
DX-64608
  * Fixed a single-stream processing issue and improved execution times when using `UNION ALL` with `planner.unionall_distribute_all_children` set to "true". 
DX-67138
  * When unlimited splits were enabled, partition pruning was failing due to complex filter conditions that were unable to transform a query to its normalized form using CNF. 
DX-60604
  * Fixed query concurrency issues that could lead to "Selected table has no columns" errors. 
DX-59967
  * Dremio was generating unnecessary exchanges with multiple unions, and changes have been made to set the proper parallelization width on JDBC operators and reduce the number of exchanges. 
DX-55300
  * When unlimited splits were enabled and running incremental metadata refreshes on a file-based table, running subsequent raw Reflections would fail with a `DATA_READ` error. 
DX-51394
  * Fixed an issue that could result in duplicate column names being written by the planner when an expression in the project included a field named `*`. 
DX-47931


## 23.2.1 (July 2023) Enterprise​
### What's New​
  * The `COL_LIKE` SQL function has been updated to improve performance. 
DX-66586 
  * This release includes some changes to improve logical planning performance and query planning times in certain scenarios. 
DX-66473 
  * For Azure Blob Storage and Data Lake Gen 2 sources, you can now enable checksum-based verification to ensure data integrity during network transfers. To enable this option, set the `store.azure.checksum` support key to `true`. 
DX-63026 


### Issues Fixed​
  * Privilege changes for entities via SQL were not being captured in the audit log. 
DX-66643 
  * Made an update to ensure that custom (whitelabel) logos will be left-aligned on the Dremio login page. 
DX-65948 
  * `GRANT` commands on catalog entities were failing with `Role/User `ID` not found` if existing user or role grantees were no longer present in the system. 
DX-65364 
  * Adding a `CAST` to an Oracle index column was leading to a missed partition key and resulting in an expensive and slow query. 
DX-64979 
  * Fixed an issue that was causing an exception in the BRIDGE_FILE_READER_RECEIVER SQL operator for some queries. 
DX-64687 
  * If a Hive source connection was slow, Dremio was repeatedly pinging the source to add databases. 
DX-64495 
  * Some queries that included multiple levels of nested fields were failing. 
DX-64106 
  * For some queries on Oracle sources, an interval of time was being processed incorrectly, resulting in the following error: `(full) year must be between -4713 and +9999`
DX-63742 
  * If a corrupted or malformed checkpoint file was encountered during metadata refresh, queries would fail with a `Metadata read Failed` error. 
DX-62568 
  * Queries that utilized external Reflections were not being logged in `queries.json`. 
DX-61654 
  * Fixed an issue that was causing `Failed to decode column` and `uncompressed_page_size` errors during Reflection refresh. 
DX-61622 
  * When parsing CSV, Dremio now allows multi-character strings to be used as field delimiter, quote, quote escape, and comment. Previously, only single characters were supported for these. 
DX-60794 
  * Fixed query concurrency issues that could lead to "Selected table has no columns" errors. 
DX-59967 
  * In some cases, Dremio nodes could reboot unexpectedly due to queries that contained deeply nested functions. 
DX-57773 
  * Resolved a frequent internal hash collision in the C3 eviction path that disabled the cloud columnar cache (C3), potentially causing performance degradation.
DX-66251


## 23.2.0 (June 2023) Enterprise​
### Issues Fixed​
  * Added more security around DML permission checks to ensure that users can access data only according to their privileges. 
DX-64746 
  * Improved permission validation around view-based query execution. 
DX-64688 
  * In this release, the plan cache is user-specific for increased security, and it will be utilized when the same query is executed by the same user. 
DX-63531 


## 23.1.50 (April 2023) Enterprise​
### Issues Fixed​
  * In some cases, the JVM's direct memory allocator was triggering garbage collection when there was sustained and high usage of direct memory, which was causing performance issues. 
DX50135
  * Container probes have been updated to support Kubernetes versions greater than 1.20. Dremio V2 helm charts did not have `timeoutSeconds` configured for readiness probes and were failing if the check took more than one second. 
DX-49122 
  * When using the `ui.whitelabel.url` support key to apply a custom logo in Dremio, the logo was not being displayed in the side navigation bar. 
DX-64491 
  * Pushdowns were not working for `UUID` data types on a PostgresSQL source. This change maps PostgresSQL's `UUID` type to Dremio's `VARCHAR`. Comparison operators (=, &gt;, &lt;, &lt;=, &gt;=, !=) between a `UUID` and a `UUID` and between a `UUID` and a `VARCHAR` will now be pushed down. 
DX-62978 
  * At times, using the `CONCAT` function with non-string operands would yield results that were truncated incorrectly. 
DX-61914 
  * Expression operator names were being used as intermediate field names. In some queries, the multiplication operator `*` was later treated as a `SELECT *` statement, which was causing physical planning to fail to find the field. 
DX-61572 
  * When querying `INFORMATION_SCHEMA` tables as a non-admin user from JDBC/ODBC applications, the query was taking much longer than when performed by an admin user. 
DX-61168 
  * When unlimited splits were enabled, partition pruning was failing due to complex filter conditions that were unable to transform a query to its normalized form using CNF. 
DX-60604 
  * If a view used in a raw Reflection contained the `CONVERT_FROM()` function, trying to access the view would result in a planning error. 
DX-59542 
  * In some cases, removing and adding privileges for a user on a space was failing with a "_Failed to create SPACE with: Role not found_ " error. 
DX-59527 
  * Fixed some issues that were causing performance issues with the `REGEXP_LIKE` SQL function. 
DX-59182 
  * Some queries were performing poorly if the query contained an `ORDER BY` clause. 
DX-58777 
  * A Zookeeper class was missing from the JDBC jar in some earlier releases, resulting in a _ClassNotFound_ exception. 
DX-56584 
  * When using the `GROUP BY` expression with an aliased column of the same name as the original column, a validation error was indicating that the column was not being grouped. 
DX-48015 
  * Reflections that had zero rows were not available for substitution. 
DX-20318 


### Known Issues​
  * In some cases, if a deployment has a large number of sources, the SQL Runner can be considerably unresponsive when loading the page or typing in the editor. 
DX-72618


## 23.1.40 (March 2023) Enterprise​
### Issues Fixed​
  * Fixed an issue where the planner would attempt to add implicit casting for identical data types, causing an error. 
DX-62799 
  * In some cases, allocator information was not being included in the profile for queries running into out of memory errors. 
DX-62731 
  * Following the upgrade to Dremio 22.1.7, Power BI Desktop and Gateway may not have been able to connect to Dremio via Azure Active Directory. 
DX-60942 
  * Queries were failing against views and time series collections on MongoDB sharded collections. 
DX-60691 
  * When unlimited splits were enabled, partition pruning was failing due to complex filter conditions that were unable to transform a query to its normalized form using CNF. 
DX-60604 
  * When configuring Azure Active Directory for Power BI, added an additional field for User Claim Mapping due to a change in the AAD token version Dremio supports. For more information, see [Microsoft Power BI](/security/authentication/application-authentication/power-bi-aad-config). 
DX-55064 


## 23.1.30 (March 2023) Enterprise​
### What's New​
  * This release includes a new SQL function, `COL_LIKE`, which tests whether an expression column matches a pattern column. For more information, see [COL_LIKE](/reference/sql/sql-functions). 
DX-60811 
  * In this release, Dremio supports reading Parquet files using ZSTD compression. 
DX-61332 
  * This release adds support for reading `TIME` and `TIMESTAMP` microseconds in Parquet files. Microseconds are truncated and the value is stored as milliseconds. 
DX-34989 


### Issues Fixed​
  * When trying to share a SQL script with another user in Dremio's AWS Edition, sharing failed with a generic _"Something went wrong"_ error. 
DX-61254 
  * In some cases, XML responses from AWS Glue were not being handled properly and causing queries to fail. 
DX-60928 
  * Fixed an issue that was causing queries failed if certain expression splits contained `CAST AS UNION`. 
DX-60607 
  * If a subquery expression was used after an aggregate and the same expression was duplicated in a `WHERE` clause, a validation exception was being encountered. 
DX-56541 
  * Fixed an issue with the Jobs page that could lead to high heap memory usage when the content of the SQL query was unusually large. 
DX-54831 
  * Metadata refresh queries that were cancelled because metadata was already available no longer show as failed. 
DX-37150 
  * Fixed an issue that was causing slow query performance if the query contained an `ORDER BY` clause. 
DX-58777 


## 23.1.2 (January 2023) Enterprise​
### What's New​
  * Added support for `timestamp` to `bigint` coercion in Hive-Parquet tables. 
DX-60456 


### Issues Fixed​
  * Some queries using multiple `CONVERT_FROM` functions on different JSON data type columns were failing to read with an `Unable to find the referenced field` error. 
DX-61434 
  * In some queries, the `ConvertFromJson` operator was invoked multiple times on the same column, resulting in slow query performance. 
DX-60345 
  * Fixed an issue with Decimal functions that was leading to bad results when `exec.preferred.codegenerator` was set to `java`. 
DX-60099 
  * In some cases, with the Arrow Flight SQL ODBC driver, users were getting an error when testing the connection to Microsoft Excel in the ODBC Administrator on Windows. 
DX-60176 
  * Fixed an issue causing incorrect values to be returned for boolean columns during filtering at parquet scan. 
DX-60059 
  * Some queries were failing for MongoDB v4.9+ sharded collections because MongoDB would use UUID instead of namespace. 
DX-59457 
  * When opening a Reflection to view details under Settings &gt; Reflections, an error indicating that the Reflection did not exist could be displayed, even though the Reflection was valid. 
DX-59291 
  * When copying a view definition and pasting into the SQL editor, the pasted SQL was incorrect because newlines were not being retained. 
DX-59275 
  * After offloading a column with type `DOUBLE` and offloading again to change the type to `VARCHAR`, the column type was still `DOUBLE` and read operations on the table failed with an exception. 
DX-58410 
  * `LIKE` was returning null results when using `ESCAPE` if the escaped character was one of the Perl Compatible Regular Expressions (PCRE) special characters. 
DX-57934 
  * For tables created from a folder of files, the jobs count on the Datasets page was incorrect as it always showed 0. 
DX-57774 
  * Fixed an issue that was causing queries against `sys.reflections` to fail with a `FlightRuntimeException` error. 
DX-57735 
  * In some cases, a `MERGE` query with an `INSERT` clause was inserting columns in the wrong order. 
DX-57546 
  * Fixed an issue that was affecting fragment scheduling efficiency under heavy workloads, resulting in high sleep times for some queries. 
DX-57579 
  * Heap usage on some coordinator nodes was growing over time, requiring a periodic restart to avoid out of memory errors. 
DX-57398 
  * Fixed an issue that was creating a race condition, causing `REFRESH REFLECTION` and `REFRESH DATASET` jobs to hang when reading Iceberg metadata. 
DX-57123 
  * Moved from strict matching of types to coercion to compatible types such as `INT` and `BIGINT` -&gt; `BIGINT`, to address an issue with forgotten Elasticsearch mappings during refresh. 
DX-57304 
  * Fixed an issue that was resulting in repeated role lookups during privilege checks and causing performance issues. 
DX-56347 
  * Updated org.apache.calcite.avatica:avatica-core to version 1.22.0 to address potential security issues [CVE-2022-36364]. 
DX-55302 


## 23.1.0 (November 2022)​")
### What's New​
  * Table location (`locationUri`) for Hive and Glue sources is now supported for Iceberg Tables. See [Creating Apache Iceberg Tables](/reference/sql/commands/create-table) for more information. 
DX-55376 
  * This release includes a new SQL function, `ARRAY_CONTAINS` which returns whether a list contains a given value. For more information, see [ARRAY_CONTAINS](/reference/sql/sql-functions).
  * In this release, a new source connector allows you to query data from other Dremio clusters. For more information, see [Connecting to Another Dremio Enterprise Cluster](/data-sources/databases/dremio).
  * This release adds support for a new connector that allows querying data from Snowflake data warehouses. If you previously installed the community connector from Dremio Hub, you must remove it and the existing driver. For more information, see [Snowflake](/data-sources/databases/snowflake).
  * If you specify an alias for a column or expression in the `SELECT` clause, you can now refer to that alias elsewhere in the query. For more information, see [Table SQL Statements](/reference/sql/commands/tables).
  * `SELECT` statements now support a new `QUALIFY` clause, which allows you to filter the results of window functions. For more information, see [SELECT](/reference/sql/commands).
  * This release includes performance improvements for incremental metadata refreshes on partitioned Parquet tables. 
DX-56250 


### Issues Fixed​
  * The `queries.log` file was showing zero values for `inputRecords`, `inputBytes`, `outputRecords`, `outputBytes`, and `metadataRetrieval`, even though valid values were included in the job profile. 
DX-58499 
  * For Parquet sources on Amazon S3, files were being automatically formatted/promoted even though the auto-promote setting had been disabled. 
DX-58451 
  * When saving a view, datalake sources were showing up as a valid location for the view, but such sources should not have been allowed as a destination when saving a view. 
DX-58125 
  * Following the upgrade to Dremio 20.x, `is_member(table.column)` was returning zero results on views that used row-level security. 
DX-57690 
  * Improved reading of double values from ElasticSearch to maintain precision. 
DX-57534 
  * Fixed an issue that was causing queries to fail when adding or subtracting an integer to `TIMESTAMP`. 
DX-57507 
  * Following the upgrade to Dremio 22.1.2, when promoting JSON files to tables and building views from those tables, queries against the views were failing with a `NullPointerException`. 
DX-57406 
  * The width of the Tag field for datasets has been expanded to ensure that the full name of a tag will be displayed. 
DX-57296 
  * Reflection footprint was 0 bytes when created on a view using the `CONTAINS` function on an Elasticsearch table. The Reflection could not be used in queries and `sys.reflection` output showed `CANNOT_ACCELERATE_SCHEDULED`. 
DX-56336 
  * To address potential security concerns, AWSE CloudFormation now enforces IMDSv2, HTTP tokens are now required, and endpoints are enabled. 
DX-56300 
  * An error in schema change detection logic was causing refresh metadata jobs for Hive tables to be triggered at all times, even if there were no changes in the table. 
DX-56251 
  * Updated org.apache.parquet:parquet-format-structures to address a potential security vulnerability [CVE-2021-41561]. 
DX-55460 
  * Dremio was generating unnecessary exchanges with multiple unions, and changes have been made to set the proper parallelization width on JDBC operators and reduce the number of exchanges. 
DX-55300 
  * Fixed an issue that was causing `COALESCE` queries containing `NULLIF` calls to not get pushed down to Oracle. 
DX-55270 
  * On catalog entities, ownership granted to a role was not being inherited by users in that role. 
DX-55002 
  * If you clicked on a job to view details, your position on the page was reset when clicking the **Back** button or the **Jobs** link on the page header. Your position on the main Jobs page is now maintained in these scenarios. 
DX-54834 
  * Some queries using a filter condition with `flatten` field under a multi-join were generating a NullPointerException. 
DX-54266 
  * In Dremio 22.0.x, users who were not assigned the `ADMIN` role were getting 0-byte files when attempting to download query results, while downloads were working as expected in previous releases. 
DX-54247 
  * `CONVERT_FROM()` did not support all ISO 8601 compliant date and time formats. 
DX-54030 
  * The AWSE activation page was no longer showing the expiration date for a license key. 
DX-53755 
  * An aggregate Reflection that matched was not being chosen due to a cost difference generated during pre-logical optimization. 
DX-53174 
  * Fixed an issue that was affecting the accuracy of cost estimations for queries against Delta tables (i.e., some queries where showing very high costs). 
DX-50219 
  * Fixed an issue that was causing an error when using the Tableau OAuth sign-in method when using the "oauth+ldap" mode. 
DX-49466 
  * Formatting and comments in a view definition were not being preserved as they had been entered in the SQL Editor. 
DX-49162 
  * If Dremio was stopped while a metadata refresh for an S3 source was in progress, some datasets within the source were getting unformatted/deleted. 
DX-40512 
  * Fixed an issue where Glue tables with large numbers of columns and partitions would not return results for all partitions in the table. Before this fix will take effect, you will need to refresh metadata via `ALTER TABLE REFRESH METADATA`. 
DX-28211 


### Breaking Changes​
  * If you previously installed the community Snowflake connector from Dremio Hub, you must remove it and the existing driver. For more information, see [Snowflake](/data-sources/databases/snowflake).


## 23.0.1 (October 2022)​")
### Issues Fixed​
  * In some cases, queries against a table that was promoted from text files containing Windows (CRLF) line endings were failing or producing an `Only one data line detected` error. 
DX-57713 


## 23.0.0 (October 2022)​")
### What's New​
  * This release of Dremio supports a semi-structured `MAP` data type that allows you to query map data from Apache Parquet files, Apache Iceberg, and Delta Lake. The `MAP` data type is a collection of key-value pairs and is useful for holding sparse data. See [Data Types](/reference/sql/data-types) for more information. 
DX-44950 
  * Dremio now supports `LISTAGG`, which is an aggregate function that concatenates a list of strings and places a separator between them. See [LISTAGG](/reference/sql/sql-functions) for more information. 
DX-47463 
  * The Jobs Profile page includes a number of enhancements so you can quickly find the most expensive execution steps in a query, understand details of each execution step and its impact on query time, memory consumption, data volume, and the effect on upstream and downstream data volume upstream, and identify system or data issues that are causing a query to be slow or expensive. See [Viewing Query Profiles](/admin/monitoring/jobs/viewing-query-profiles) for more information. 
DX-29840 
  * Azure Data Lake Storage (ADLS) Gen1 is now supported as a source on Dremio's AWS Edition. For more information, see [Azure Data Lake Storage Gen1](/data-sources/object/azure-data-lake-store). 
DX-51733 
  * Elasticsearch is now supported as a source on Dremio's AWS Edition. For more information, see [Elasticsearch](/data-sources/databases/elasticsearch). 
DX-51828 
  * In this release, embedded Nessie historical data that is not used by Dremio is purged on a periodic basis to improve performance and avoid future upgrade issues. You can perform maintenance manually using the `nessie-maintenance` [admin CLI](/reference/admin-cli/nessie-maintenance) command. 
DX-53159 


DX-51980: Time travel queries by `TIMESTAMP` are now supported on Iceberg tables. See [Querying Apache Iceberg Tables](/reference/sql/commands) for more information. 
DX-46373 
  * Dremio now supports wide tables. See [Creating and Querying Wide Tables](/help-support/advanced-topics/wide-tables) for more information and limitations.
  * Added a new Admin CLI command, `dremio-admin remove-duplicate-roles`, that will remove duplicate LDAP groups or local roles and consolidate them into a single role. For more information, see [Remove Duplicate Roles](/reference/admin-cli/remove-roles). 
DX-51484 


DX-32718 
  * Dremio now supports connecting to Amazon S3 sources using an AWS PrivateLink URL. For more information, see [Amazon S3](/data-sources/object/s3).
  * Similar to [Encrypting the LDAP Bind Password](/security/authentication/ldap), Dremio now supports the same encryption mechanism for wire encryption setup for the following fields in `dremio.conf`: `keyStorePassword`, `keyPassword`, and `trustStorePassword`
DX-37191 


DX-52677 
  * Iceberg tables written with positional deletes are now supported.
  * Starting in Dremio 23.0.0, customers who select `dremio/dremio-ee` docker image will receive an Eclipse Temurin based image for JDK, either JDK 8 or JDK 11. Dremio will no longer provide docker images based on `openjdk:jdk-8` for future Dremio versions since it has been officially deprecated. Older `dremio/dremio-ee` image versions will remain available. 
DX-57009 


DX-47275 
  * Added a button that allows you to quickly copy the ID of a job on the job details page.


### Issues Fixed​
DX-52271 
  * When multiple metadata refresh jobs ran concurrently on the same dataset, one or more jobs could fail with `ConcurrentModificationException`.


DX-49945 
  * Added table snapshot ID in the plan digest for Iceberg table scans so that the planner can distinguish between two different versions of the same table.


DX-44451 
  * Added validation to the REST endpoint so that Reflections cannot be configured to expire more quickly than the refresh period.


DX-41475 
  * When promoting Iceberg tables, Dremio now correctly previews underlying table content for the latest snapshot, excluding delete files.
  * When promoting Iceberg tables backed by external catalogs, users would see an unhelpful `Failed to get iceberg metadata` error. The message now provides more information about using a data source configured for the catalog. 
DX-52662 


DX-57044 
  * After upgrading to Dremio 22.1.1, some coordinator nodes failed to start due to a failure in connecting to S3-compatible storage (sources or distributed storage configuration) that required path style access.
  * Following the upgrade to Dremio v22, Support Keys of type `DOUBLE` would no longer accept decimal values. 
DX-56918 
  * Fixed an issue that was causing `REFRESH REFLECTION` and `REFRESH DATASET` jobs to hang when reading Iceberg metadata using Avro reader. 
DX-56556, DX-56244 


DX-55680 
  * Fixed an issue that was causing the status of a cancelled job to show as RUNNING or PLANNING.


DX-55630 
  * Fixed a bug in Yarn-based deployments where certain properties that were meant for customizing Dremio executor containers were also being passed on to the Application main container.


DX-55385 
  * In some deployments, using a large number of REST API-based queries that return large result sets can create memory issues and lead to cluster instability.


DX-55218 
  * Following the upgrade to Dremio 22, some queries to Hive 2 metastore external tables with data in S3 were running considerably slower than before.
  * In some scenarios, invalid metadata about partition statistics was leading to inaccurate rowcount estimates for tables. The result was slower than expected query execution or out of memory issues. For each table included in a query where this behavior appears, perform an `ALTER TABLE <table-name> FORGET METADATA`, then re-promote the resulting file or folder to a new table. This will ensure that the table is created with the correct partition statistics. 
DX-54938 


DX-54670 
  * During the Reflection matching phase, for the filter pattern in some queries the planner could generate row expression nodes exponentially and exhaust heap memory.
  * Fixed an issue with concurrent metadata refresh requests that could result in the following error: `StatusRuntimeException: ABORTED: Tried to create a dataset that already exists.`
DX-54644 


DX-54468 
  * Changes made to the columns displayed on the Jobs page, or the order of the columns, were not being saved after leaving the page.


DX-54312 
  * In some environments, Dremio was unable to read a Parquet statistics file in Hive during logical planning, and the query was cancelled because planning phase exceeded 60 seconds.
  * Fixed an issue that was causing the error `GandivaException: Failed to make LLVM module due to Function double abs(double) not supported yet` for certain case expressions used as input arguments. 
DX-54273 


DX-54194 
  * When a materialization took too long to deserialize, the job updating the materialization cache entry could hang and block all Reflection refreshes.


DX-54176, DX-54174, DX-54214 
  * This release includes a number of fixes that resolve potential security issues.


DX-54122 
  * For some users, when clicking on certain items on the **Settings** page, they were being redirected to the Dremio home screen.
  * Automatic Reflection refreshes were failing with the following error: `StatusRuntimeException: UNAVAILABLE: Channel shutdown invoked`
DX-53757 


DX-53740 
  * In rare cases, an issue in the planning phase could result in the same query returning different results depending on the query context.
  * Profiles for some Reflection refreshes included unusually long setup times for `WRITER_COMMITTER`. 
DX-53735 
  * Wait time for `WRITER_COMMITTER` was excessive for some Reflection refreshes, even though no records were affected. 
DX-53734 
  * After changing the engine configuration, some queries were failing with an `IndexOutOfBoundsException` error. 
DX-53358 


DX-53211 
  * When skipping the current record from any position, Dremio was not ignoring line delimiters inside quotes, resulting in unexpected query results.


DX-53061 
  * Following the upgrade to Dremio 21.2, some Delta Lake tables could not be queried, and the same tables could not be formatted again after being unpromoted.
  * Fixed an issue handling `CONVERT_FROM` during Reflection matching when the materialization cache was enabled. 
DX-52993 
  * On occasion, projecting complex data types would result in a `Schema change exception`. 
DX-52840 
  * Some queries on Parquet datasets in an ElasticSearch source were failing with a `SCHEMA_CHANGE` error, though there had been no changes to the schema. 
DX-52652 


DX-52602 
  * In some cases, deleted Reflections were still being used to accelerate queries if the query plan had been cached previously.
  * Reflection refreshes were failing on ElasticSearch views that used the `CONTAIN` keyword. 
DX-52595 


DX-52553 
  * When a query that used a Reflection was executed multiple times, some of the jobs used the Reflection and some did not.
  * Clicking **Edit Original SQL** for a view in the SQL editor was producing a generic `Something went wrong` error. 
DX-52392 
  * Fixed issue that was causing the `LENGTH` function to return incorrect results. 
DX-52352 


DX-51567 
  * Fixed an issue that was causing metadata refresh on some datasets to fail continuously.
  * Some queries were failing with `INVALID_DATASET_METADATA ERROR: Unexpected mismatch of column names` if duplicate columns resulted from a join because Dremio wasn't specifying column names. 
DX-51540 
  * When unlimited splits were enabled, users were seeing an `Access denied` error for queries run against Parquet files if impersonation was enabled on the source. 
DX-51166 


DX-50944 
  * Fixed an issue causing the error "Offset vector not large enough for records" when copying list columns.
  * Some queries that used the `FLATTEN()` function were showing results for a Preview, but no data was returned when using Run. 
DX-50906 


DX-50488 
  * Removed the ‘unsafe-eval’ directive from the content security policy.


DX-50225 
  * Dremio no longer includes server name and version in the response header.


DX-49615 
  * Fixed an issue with external LDAP group name case sensitivity, which was preventing users from accessing Dremio resources to which they had been given access via their group/role membership.


DX-48273 
  * If issues were encountered when running queries against a view, Dremio was returning an error that was unhelpful. The error returned now includes the root cause and identifies the specific view requiring attention.
  * When using the Catalog API to create a folder in a space, if the folder already existed in the space, the API was returning the `HTTP/1.1 500 Internal Server Error` instead of `HTTP/1.1 409 Conflict`. 
DX-47372 


DX-46632 
  * Row count estimates for some Delta Lake tables were changing extensively, leading to single-threaded execution plans.
  * When a Hive source was added or modified, shared library files created in a new directory under `/tmp` were not being cleaned up and leading to disk space issues. 
DX-44588 


DX-40891 
  * In some cases, queries using the `<` operator would fail when trying to decode a timestamp column in a Parquet file.
  * JDBC clients could not see parent objects (folders, spaces, etc.) unless they had explicit `SELECT` privileges on those objects, even if they had permissions on a child object. 
DX-40559 
  * Fixed an issue in the scanner operator that could occur when a parquet file had multiple row-groups, resulting in a query failure and the following system error: `Illegal state while reusing async byte reader`
DX-40130 
  * When promoting a folder using the REST API, incremental refresh settings were not being returned in the `POST` response. 
DX-36644 
  * Frequent, consecutive requests to the Job API endpoint to retrieve a Job's status could result in an `UNKNOWN` StatusRuntimeException error. 
DX-32370 
  * Parentheses were missing in the generated SQL for a view when the query contained `UNION ALL` in a subquery, and the query failed to create the view. 
DX-22966 


DX-47498 
  * Upgraded 3rd party XML parsing library stax2-api dependency (used while parsing XML responses from S3) from 3.1.4 to 4.2 as required by woodstox-core:5.2.1.


DX-56334 
  * Updated the PostgreSQL JDBC Driver to version 42.4.1 to address 


DX-54219 
  * Updated com.squareup.okhttp3:okhttp to version 4.9.2.


DX-51757 
  * Updated the Freemarker library to version 2.3.31. While Dremio was not subject to any vulnerabilities in the previous version, the version was updated to comply with security and development best practices.


DX-51756 
  * Updated the Apache Xerces Java library to version 2.12.2.


DX-50708 
  * Updated com.google.protobuf:protobuf-java to version 3.19.4.


DX-50707 
  * Updated com.google.code.gson:gson to version 2.9.0.


### Breaking Changes​
DX-43049 
  * Dremio 23.0.0+ supports **only** MapR 6.2.0. If you are running MapR 5.2.x or 6.1.x, you must upgrade to MapR 6.2.0 before upgrading to Dremio 23. Dremio releases up to and including 22.x do not support MapR 6.2.0, only MapR 5.2.x and 6.1.x are supported in releases prior to Dremio 23.
**NOTE:** MapR 6.2.0 supports only **JDK 11**. JDK8 is not supported.
  * Dremio can now read `MAP` data from Parquet files. You must run `ALTER TABLE `table_name` FORGET METADATA` on tables containing `MAP` data that you have previously queried. This feature is enabled by default. If you prefer the previous behavior of representing `MAP` data as `STRUCT`, set `dremio.data_types.map.enabled` to **OFF** under **Settings &gt; Support &gt; Support Keys**.
  * A preview job is no longer automatically triggered when you click on a dataset. If you have permissions to edit the dataset, you will see the original SQL in the SQL Editor. If you do not have permissions to edit the dataset, you will continue to see a `SELECT *` statement pre-populated in the SQL Editor. 
DX-47450 
  * In previous releases, Dremio supported a maximum of 800 leaf columns in a table, though that value was configurable with the support key `store.plugin.max_metadata_leaf_columns`. If you used this support key and have upgraded to v23.0, reset the key so that you can use the maximum of 6,400 that is enabled with wide table support. See [Creating and Querying Wide Tables](/help-support/advanced-topics/wide-tables) for more information and limitations.


### Known Issues​
  * In this release, Dremio does not support Iceberg tables written with equality deletes. 
DX-52677 
  * DML operations (`INSERT`, `UPDATE`, `DELETE`, `MERGE`) are not supported on tables with `MAP` columns. `CTAS` **is** supported on tables with `MAP` columns. 
DX-57005
  * If a user was actively logged in to Dremio during the upgrade to version 23.0.0, pages under **Settings** will throw an `Unexpected Error` until the user logs out and logs back in. 
DX-56632 


DX-55884 - expanded view and default Reflections
Was this page helpful?
Previous 24.x Release Notes[Next 22.x Release Notes](/release-notes/unsupported-releases/version-220-release)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
Previous 24.x Release Notes[Next 22.x Release Notes](/release-notes/unsupported-releases/version-220-release)
!
