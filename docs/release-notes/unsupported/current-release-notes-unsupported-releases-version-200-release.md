---
url: /release-notes/unsupported-releases/version-200-release
title: "20.x Release Notes | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64381.489848416
---

[Skip to main content](/release-notes/unsupported-releases/version-200-release#__docusaurus_skipToContent_fallback)
[![Dremio Documentation Home Page](https://docs.dremio.com/images/Dremio-wordmark-light.svg) **Documentation**](/)
[](/dremio-cloud)
[](/)
[current [26.x]](/release-notes/unsupported-releases/version-200-release)
  * [current [26.x]](/release-notes/unsupported-releases/version-200-release)
  * [25.x](/25.x)


[Start for Free](https://www.dremio.com/get-started/)
Search`⌘``K`
  * [Overview](/)
  * [Get Started with Dremio](/get-started)
  * [What is Dremio?](/what-is-dremio)
  * [Deploy Dremio](/deploy-dremio)
  * [Manage Sources](/data-sources)
  * [Load Data](/load-data)
  * [Build Data Products](/data-products)
  * [Connect Client Applications](/client-applications)
  * [Accelerate Queries](/acceleration)
  * [Security and Compliance](/security)
  * [Administration](/admin)
  * [Developer Guide](/developer)
  * [Reference](/reference)
  * [Help and Support](/help-support)
  * [Release Notes](/release-notes)
    * [26.x Release Notes](/release-notes/version-260-release)
    * [25.x Release Notes](/release-notes/version-250-release)
    * [Arrow Flight SQL JDBC Release Notes](/release-notes/arrow-flight-sql-jdbc)
    * [Arrow Flight SQL ODBC Release Notes](/release-notes/arrow-flight-sql-odbc)
    * [Legacy Dremio JDBC Release Notes](/release-notes/jdbc)
    * [Dependencies and Licenses](/release-notes/dependencies)
    * [Unsupported Releases](/release-notes/unsupported-releases)
      * [24.x Release Notes](/release-notes/unsupported-releases/version-240-release)
      * [23.x Release Notes](/release-notes/unsupported-releases/version-230-release)
      * [22.x Release Notes](/release-notes/unsupported-releases/version-220-release)
      * [21.x Release Notes](/release-notes/unsupported-releases/version-210-release)
      * [20.x Release Notes](/release-notes/unsupported-releases/version-200-release)
      * [19.x Release Notes](/release-notes/unsupported-releases/version-1900-release-notes)
      * [18.x Release Notes](/release-notes/unsupported-releases/version-1800-release-notes)
      * [17.x Release Notes](/release-notes/unsupported-releases/version-1700-release-notes)


  * [Dremio Enterprise Home](/)
  * [Release Notes](/release-notes)
  * [Unsupported Releases](/release-notes/unsupported-releases)
  * 20.x Release Notes

Version: current [26.x]
On this page
# 20.x Release Notes
Releases are listed in reverse order, starting with the latest release of Dremio 20.x.
## 20.9.0 (June 2023) Enterprise[​](/release-notes/unsupported-releases/version-200-release#2090-june-2023-enterprise "Direct link to 2090-june-2023-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-200-release#issues-fixed "Direct link to Issues Fixed")
  * Improved permission validation around view-based query execution. 
DX-64688
  * In this release, the plan cache is user-specific for increased security, and it will be utilized when the same query is executed by the same user. 
DX-63531


## 20.8.0 (November 2022) Enterprise[​](/release-notes/unsupported-releases/version-200-release#2080-november-2022-enterprise "Direct link to 2080-november-2022-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-200-release#whats-new "Direct link to What's New")
  * Added support key `store.parquet.async.enable_timestamp_check` with the default value set to `true`. Setting this key to `false` disables the timestamp check for asynchronous reads. 
DX-46882


### Issues Fixed[​](/release-notes/unsupported-releases/version-200-release#issues-fixed-1 "Direct link to Issues Fixed")
  * Following the upgrade to Dremio 20.x, `is_member(table.column)` was returning zero results on views that used row-level security. 
DX-57690
  * Improved reading of double values from ElasticSearch to maintain precision. 
DX-57534
  * If Dremio was stopped while a metadata refresh for an S3 source was in progress, some datasets within the source were getting unformatted/deleted. 
DX-40512


## 20.7.0 (October 2022) Enterprise[​](/release-notes/unsupported-releases/version-200-release#2070-october-2022-enterprise "Direct link to 2070-october-2022-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-200-release#issues-fixed-2 "Direct link to Issues Fixed")
DX-57713
  * In some cases, queries against a table that was promoted from text files containing Windows (CRLF) line endings were failing or producing an `Only one data line detected` error.


DX-56556, DX-56244
  * Fixed an issue that was causing `REFRESH REFLECTION` and `REFRESH DATASET` jobs to hang when reading Iceberg metadata using Avro reader.


DX-56336
  * Reflection footprint was 0 bytes when created on a view using the `CONTAINS` function on an Elasticsearch table. The Reflection could not be used in queries and `sys.reflection` output showed `CANNOT_ACCELERATE_SCHEDULED`.


DX-55446
  * Following the upgrade to Dremio v20.3, the Admin CLI `remove-duplicate-roles` command was failing, and output was empty for dry runs.


DX-54176, DX-54174, DX-54214
  * This release includes a number of fixes that resolve potential security issues.


DX-52392
  * Clicking **Edit Original SQL** for a view in the SQL editor was producing a generic `Something went wrong` error.


DX-51540
  * Some queries were failing with `INVALID_DATASET_METADATA ERROR: Unexpected mismatch of column names` if duplicate columns resulted from a join because Dremio wasn't specifying column names.


DX-51166
  * When unlimited splits were enabled, users were seeing an `Access denied` error for queries run against Parquet files if impersonation was enabled on the source.


DX-48002
  * When Iceberg features were enabled, the location in the API was incorrect for some tables in S3 sources.


DX-39503
  * If unlimited splits and Iceberg features were enabled and a table contained a null column, metadata refresh jobs and queries were failing.


DX-37600
  * Following upgrades to Dremio 18, promotion of HDFS-based datasets was failing if both unlimited splits and the use of Iceberg tables were enabled.


## 20.6.0 (August 2022) Enterprise[​](/release-notes/unsupported-releases/version-200-release#2060-august-2022-enterprise "Direct link to 2060-august-2022-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-200-release#issues-fixed-3 "Direct link to Issues Fixed")
DX-54176, DX-54174
  * This release includes two fixes to resolve potential security issues.


DX-54016
  * Fixed an issue with adding incremental partitions on a MapR-FS source.


DX-52652
  * Some queries on Parquet datasets in an ElasticSearch source were failing with a `SCHEMA_CHANGE` error, though there had been no changes to the schema.


DX-52595
  * Reflection refreshes were failing on ElasticSearch views that used the `CONTAIN` keyword.


DX-51465
  * Objects whose names included non-latin characters were not behaving as expected in Dremio. For example, folders could not be promoted and views were not visible in the home space.


DX-48275
  * Dremio was generating a NullPointer exception when performing a metadata refresh on a Delta Lake source if there was no checkpoint file.


DX-36794
  * In some cases, after adding a new file to a promoted folder on an HDFS source, the file was not reflected in new queries following a refresh.


## 20.5.0 (July 2022) Enterprise[​](/release-notes/unsupported-releases/version-200-release#2050-july-2022-enterprise "Direct link to 2050-july-2022-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-200-release#whats-new-1 "Direct link to What's New")
DX-51484
  * Added a new Admin CLI command, `dremio-admin remove-duplicate-roles`, that will remove duplicate LDAP groups or local roles and consolidate them into a single role. For more information, see [Remove Duplicate Roles](/reference/admin-cli/remove-roles).


### Issues Fixed[​](/release-notes/unsupported-releases/version-200-release#issues-fixed-4 "Direct link to Issues Fixed")
DX-52061
  * The `dremio-admin clean` CLI parameter `-d` (or `--delete-orphan-datasetversions`) was deleting named dataset versions during clean-up. With this release, only temporary `tmp.UNTITLED` dataset versions will be deleted.


DX-47568
  * `CONVERT_FROM` queries were returning errors if they included an argument that was an empty binary string. This issue has been fixed, and such queries have been optimized for memory utilization.


DX-46632
  * Row count estimates for some Delta Lake tables were changing extensively, leading to single-threaded execution plans.


DX-40559
  * JDBC clients could not see parent objects (folders, spaces, etc.) unless they had explicit `SELECT` privileges on those objects, even if they had permissions on a child object.


## 20.4.2 (December 2022) Enterprise[​](/release-notes/unsupported-releases/version-200-release#2042-december-2022-enterprise "Direct link to 2042-december-2022-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-200-release#issues-fixed-5 "Direct link to Issues Fixed")
DX-57579
  * Fixed an issue that was affecting fragment scheduling efficiency under heavy workloads, resulting in high sleep times for some queries.


## 20.4.1 (June 2022) Enterprise[​](/release-notes/unsupported-releases/version-200-release#2041-june-2022-enterprise "Direct link to 2041-june-2022-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-200-release#issues-fixed-6 "Direct link to Issues Fixed")
DX-52061
  * The `dremio-admin clean` CLI parameter `-d` (or `--delete-orphan-datasetversions`) was deleting named dataset versions during clean-up. With this release, only temporary `tmp.UNTITLED` dataset versions will be deleted.


## 20.4.0 (May 2022) Enterprise[​](/release-notes/unsupported-releases/version-200-release#2040-may-2022-enterprise "Direct link to 2040-may-2022-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-200-release#whats-new-2 "Direct link to What's New")
DX-49772
  * This release includes a new argument for the `dremio-admin clean` CLI command to purge dataset version entries that are not linked to existing jobs. See [Clean Metadata](/reference/admin-cli/metadata-cleanup) for more information.


DX-47557
  * The `-j` argument of the `dremio-admin clean` CLI command has been extended to purge temporary dataset versions associated with deleted jobs. See [Clean Metadata](/reference/admin-cli/metadata-cleanup) for more information.


### Issues Fixed[​](/release-notes/unsupported-releases/version-200-release#issues-fixed-7 "Direct link to Issues Fixed")
DX-48818
  * Updated the Postgres JDBC driver from version 42.2.18 to version 42.3.4 to address 


DX-48627
  * Updated WildFly OpenSSL to 1.1.3.Final to address 


DX-49417
  * Some IdPs were missing the `expires_in` field in the /token endpoint response. Dremio will fall back to the `exp` claim in the JWT. If this claim is missing from the JWT, the default expiration timeout will be set to 3600 seconds.


DX-49373
  * Floats and float lists were not being handled correctly when forcing `float` fields to `double` in ElasticSearch.


DX-48001
  * Fixed an upgrade issue related to RBAC that was generating an unknown error when clicking the **Privileges** tab on a file system source.


DX-47572
  * A `NULL` constant in Reflection definition was causing a type mismatch while expanding the materialization.


DX-43201
  * After enabling Iceberg, files with `:` in the path or name were failing with a `Relative path in absolute URI` error.


DX-42389
  * Plan serialization time was not being accounted for in the Sql-To-Rel conversion phase, resulting in planning time missing from profiles as well as longer than usual planning times.


DX-42388
  * An issue with plan serialization was causing longer than usual planning times.


DX-36355
  * When attempting to download certain query results as JSON or Parquet files, the downloaded file size was zero bytes and resulted in an `IndexOutofBounds` exception.


## 20.3.1 (May 2022) Enterprise[​](/release-notes/unsupported-releases/version-200-release#2031-may-2022-enterprise "Direct link to 2031-may-2022-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-200-release#issues-fixed-8 "Direct link to Issues Fixed")
DX-48001
  * Fixed an upgrade issue related to RBAC that was generating an unknown error when clicking the **Privileges** tab on a file system source.


DX-49373
  * Floats and float lists were not being handled correctly when forcing `float` fields to `double` in ElasticSearch.


DX-49417
  * Some IdPs were missing the `expires_in` field in the /token endpoint response. Dremio will fall back to the `exp` claim in the JWT. If this claim is missing from the JWT, the default expiration timeout will be set to 3600 seconds.


## 20.3.0 (May 2022) Enterprise[​](/release-notes/unsupported-releases/version-200-release#2030-may-2022-enterprise "Direct link to 2030-may-2022-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-200-release#issues-fixed-9 "Direct link to Issues Fixed")
DX-48914
  * When a `CASE` was used in a `WHERE` filter with an `AND` or an `OR`, it would be incorrectly wrapped in a `CAST`, resulting in the following error: `DATA_READ ERROR: Source 'sqlGrip' returned error 'Incorrect syntax near the keyword 'AS'.'`


DX-47931
  * Fixed an issue that could result in duplicate column names being written by the planner when an expression in the project included a field named `*`.


DX-47820
  * The `is_member` SQL function was failing with `UnsupportedOperationException` when concatenating with a table column.


DX-47361
  * At times, in Dremio's AWS Edition, the preview engine was going offline and could not be recovered unless a reboot was performed.


DX-47076
  * Resolved an issue with dropping `float` columns for ElasticSearch data sources when **Force Double Precision** was enabled.


DX-46377
  * When using Postgres as the data source, expressions written to perform subtraction between doubles and integers, or subtraction between floats and integers, would incorrectly perform an addition instead of the subtraction.


DX-46202
  * In some cases, out of memory errors on Delta Lake tables were occurring if `commitInfo` was the last line of the JSON, resulting in incorrect file estimates for netFilesAdded, netBytesAdded, and netOutputRows.


DX-45936
  * In this release, json-smart was upgraded to version 2.4.8 to address 


DX-45096
  * A query with `not in` was returning incorrect result if more than two values were in predicate for certain Hadoop and Hive datasets.


DX-44848
  * Following an upgrade, queries with `TO_NUMBER(_Column_,'###')` were failing.


DX-44619
  * `CAST` operations were added to pushed down queries for RDBMS sources to ensure consistent data types, and specifically for numeric types where precision and scale were unknown. In some cases, however, adding `CAST` operations at lower levels of the query was disabling the use of indexes in `WHERE` clauses in some databases. Dremio now ensures that `CAST` operations are added as high up in the query as possible.


DX-41109
  * Intermittent jobs were failing with an `IndexOutOfBounds` exception while preparing operator details information for runtime filters.


DX-40232
  * Some queries were taking longer than expected because Dremio was reading a `STRUCT` column when only a single nested field needed to be read.


DX-36544
  * Running `ALTER PDS` to refresh metadata on a Hive source was resulting in the following error: `PLAN ERROR: NullPointerException`*


## 20.2.3 (April 2022) Enterprise[​](/release-notes/unsupported-releases/version-200-release#2023-april-2022-enterprise "Direct link to 2023-april-2022-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-200-release#issues-fixed-10 "Direct link to Issues Fixed")
DX-47931
  * Fixed an issue that could result in duplicate column names being written by the planner when an expression in the project included a field named `*`.


DX-48001
  * Fixed an upgrade issue related to RBAC that was generating an unknown error when clicking the **Privileges** tab on a filesystem-based source.


## 20.2.2 (March 2022) Enterprise[​](/release-notes/unsupported-releases/version-200-release#2022-march-2022-enterprise "Direct link to 2022-march-2022-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-200-release#issues-fixed-11 "Direct link to Issues Fixed")
DX-47112
  * When running a specific query with a `HashJoin`, executor nodes were stopping unexpectedly with the following error: `SYSTEM ERROR: ExecutionSetupException`


DX-47076
  * Resolved an issue with dropping `float` columns for ElasticSearch data sources when **Force Double Precision** was enabled.


## 20.2.1 (March 2022) Enterprise[​](/release-notes/unsupported-releases/version-200-release#2021-march-2022-enterprise "Direct link to 2021-march-2022-enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-200-release#issues-fixed-12 "Direct link to Issues Fixed")
DX-39697
  * The `IS_MEMBER()` function was not working with internal roles, returning `false` when it should have been returning `true`.


DX-39442
  * Accelerated queries were not being written to queries.json.


## 20.2.0 (March 2022) Enterprise[​](/release-notes/unsupported-releases/version-200-release#2020-march-2022-enterprise "Direct link to 2020-march-2022-enterprise")
### What's New[​](/release-notes/unsupported-releases/version-200-release#whats-new-3 "Direct link to What's New")
DX-42480
  * In this release, Dremio is now pushing down computation for extra hash join conditions.


### Issues Fixed[​](/release-notes/unsupported-releases/version-200-release#issues-fixed-13 "Direct link to Issues Fixed")
DX-42552
  * After upgrading from 18.x or 19.x to 20.x, users encountered the error `Failed to get iceberg metadata` when querying datasets. This issue occurred because of how the user's metadata had been stored in Iceberg prior to the upgrade.


DX-42795
  * Fixed a column index issue in RelMetadata that was resulting in some queries on views failing with `VALIDATION ERROR: Using CONVERT_FROM(*, 'JSON')`.


DX-45756
  * Fixed an issue that was causing sockets to remain in a `CLOSE_WAIT` state while running metadata refresh on an ORC dataset. This resulted in `Too Many Open File` errors and the cluster had to be restarted to resolve the condition.


DX-44330
  * Following the upgrade to v20.0, and if **Force Double Precision** was enabled on an Elasticsearch source (Advanced Options), Dremio was trying to coerce non-float fields to `double`.


DX-43678, DX-44801, DX-45671
  * In environments with high memory usage, if an expression contained a large number of splits, it could eventually lead to a heap outage/out of memory exception.


DX-43645
  * In previous versions of Dremio, for some relational sources that did not support `boolean` type, using the `CAST` function to expand a boolean value to a boolean expression was resulting in an `Incorrect syntax near the keyword 'AS’` error.


DX-17845
  * In some cases, certain 'SELECT' queries that included an 'ORDER BY' statement were returning the following error: `Serialization is only allowed for SelectionVectorMode.NONE`


DX-42158
  * In some queries, window expressions were not getting normalized after substitution, resulting in a `Cannot convert RexNode to equivalent Dremio expression` error.


DX-40217
  * Queries that worked in previous versions of Dremio were failing with the following error: `Job was cancelled because the query went beyond system capacity during query planning. Please simplify the query`


DX-44431
  * Some complex join filters were getting dropped, resulting in incorrect query results.


DX-42576
  * The same `SELECT` query, using the `IS_MEMBER()` function, was returning different results in different versions of Dremio.


DX-46105
  * When formatting GCS data at a folder level into a table or when selecting data from an existing table built on GCS, if any data values in the partitioning field included a space, the action would fail with: `RuntimeException: the specified key does not exist`


## 20.1.0 (January 2022)[​](/release-notes/unsupported-releases/version-200-release#2010-january-2022 "Direct link to 20.1.0 \(January 2022\)")
### What's New[​](/release-notes/unsupported-releases/version-200-release#whats-new-4 "Direct link to What's New")
DX-40944
  * `PageHeaderWithOffset` objects will be excluded from the heap when reading Dremio Parquet files. Instead, column indexes will be used to optimize performance and reduce heap usage when generating page headers and stats.


DX-39489
  * This release adds a new support key, `authorizer.auth.cache.expiration_ms`, for overriding the default authorization expiry for sources using a Table Authorizer plugin. For sources that support impersonation, the global default expiration is 24 hours and can be changed in the UI. For plugins that do not support impersonation, however, the new support key is the only way to modify the authorization expiry.


### Issues Fixed[​](/release-notes/unsupported-releases/version-200-release#issues-fixed-14 "Direct link to Issues Fixed")
DX-42893
  * In some cases, if a Parquet file in a Delta Lake table had many row groups, `count(*)` queries were failing due to a `divide by 0` exception.


DX-42437
  * When using a Hive 2.x data source in an HDP environment with storage based authentication, queries on any Hive tables were resulting in a null pointer exception.


DX-42352
  * In cases involving multiple tables in joins along with filters, RDBMS query pushdowns could result in queries that ambiguously reference columns, resulting in `invalid identifier` errors.


DX-42112
  * If every value in one column of a MongoDB table was an empty array, queries were failing with a `Schema change detected` error. To address this issue, Dremio properly eliminates columns that would result in a `NULL` data type when doing schema inference from the Mongo records.


DX-41406
  * Running `select *` on some system tables was failing with the following error: `UNAVAILABLE: Channel shutdown invoked`


DX-40507
  * When Parquet files contained too many row groups, Parquet metadata was using too much memory and causing outages on the Executor. To avoid this issue, Dremio limits reuse of the Parquet footer when Parquet files contain too many row groups.


DX-40116
  * Non-admin users who had been granted view permissions for job history could view jobs from other users, but the **User** filter was not available. In this release, non-admin users with permission to view job history can access the **User** filter on the Jobs page.


### Known Issues[​](/release-notes/unsupported-releases/version-200-release#known-issues "Direct link to Known Issues")
DX-42552
**Issue:**  
After upgrading from 18.x or 19.x to 20.1, users encountered the error "Failed to get iceberg metadata" when querying datasets. This issue occurs because of how the user's metadata was stored in Iceberg prior to the upgrade.
**Workaround:**  
After the upgrade to 20.1 is complete, do the following for all affected datasets:
  1. Use `ALTER PDS` to forget the metadata for affected datasets (see [Forgetting Table Metadata](/reference/sql/commands/datasets#forgetting-table-metadata)).
  2. Use `ALTER PDS` to refresh the metadata for affected datasets (see [Refreshing Table Metadata](/reference/sql/commands/datasets#refreshing-table-metadata)).


## 20.0.0 (December 2021)[​](/release-notes/unsupported-releases/version-200-release#2000-december-2021 "Direct link to 20.0.0 \(December 2021\)")
### What's New[​](/release-notes/unsupported-releases/version-200-release#whats-new-5 "Direct link to What's New")
### Elasticsearch Connector - Does not require documentation
  * Audit Logging: 
DX-24075
: For organizations subject to compliance and regulation where auditing is regularly required, Dremio now offers [full audit logging](/security/auditing). With this log file, all user activities performed within Dremio are tracked and traceable via the `audit.*.json`. Each time a user performs an action within Dremio, such as logging in or creating a view, the audit log captures the user's ID and username, object(s) affected, action performed, event type, SQL statements used, and more.


By default, audit logging is enabled and stored in the same location as all other log files.
  * Aggregation Spilling in All Cases (Preview): 
DX-15811
Previously, Dremio spilled to disk when performing all aggregation operations, with two exceptions: 1) when calculating the approximate count distinct of a column and 2) when a minimum or maximum was applied to a string column. If you processed more data than could be handled by the system's available memory, customer queries would fail due to a lack of sufficient memory needed to complete the query.


These calculations, min/max on string column (generally available) and `NDV()` (preview), have been moved to the vectorized hash aggregation spill operator. Now, in the event of a query requiring more memory than is presently available in the system, the operator containing these calculations will spill data to disk as needed, thus allowing the query to continue processing and ultimately complete.
To use the `NDV()` function with the vectorized hash aggregation spill operator, enable the support key: `exec.operator.vectorized_spill.ndv`.
  * Support for Authenticating through Azure Active Directory from Power BI: 
DX-38370
Support now exists for [using an organization's Power BI credentials](/security/authentication/application-authentication/power-bi-aad-config) with Azure Active Directory (AAD) as an identity provider (IdP). As part of this functionality, AAD gives the Dremio service a JSON web token (JWT) at the end of the Azure AD OAuth flow, after which Dremio verifies the token and authorizes a user session until its associated expiration. 
  * Ranger Row Filtering & Column-Masking: 
DX-39582
For Hive sources with Apache Ranger authorization configured, Dremio now offers full support of [external column-masking and row-filtering via Ranger security policies](/security/integrations/row-column-policies-ranger#using-apache-ranger-security-policies). This functionality offers row and column controls over the previous whole-table/view access controls, local row permissions, and column-masking in queries offered historically. Using the Ranger external security service, Dremio now enforces external policies at query runtime. 


The following filtering/masking options are supported:
  * **Row Filtering**
    * Valid `WHERE` clauses on the table 
  * **Column-Masking**
    * **Redact -** Replaces all alphabetic characters with `x` and all numeric characters with `n`.
    * **Partial mask: show last 4 -** Displays only the last four characters of the full column value's.
    * **Partial mask: show first 4 -** Displays only the first four characters of the full column value's.
    * **Hash -** Replaces all characters with a hash of the entire cell's value.
    * **Nullify -** Replaces all characters in the cell with a `NULL` value.
    * **Unmasked (retain original value) -** No masking is applied to the cell.
    * **Date: show only year -** Displays the year portion of a date string, defaulting the month and day to `01/01`.
    * **Custom -** Specifies a custom column masked value or valid Dremio expression. Custom masking may not use 


DX-41416
  * Microsoft Azure Synapse Analytics Support: An ARP connector is now available on Dremio that allows for integration with Azure Synapse Analytics dedicated SQL pools. This option is available for immediate use by adding a new [External Source](/data-sources/databases/azure-synapse-analytics) from the Dremio interface.


DX-41070
*Logback was updated to v1.2.9 to mitigate CVE-2021-44228. This utilizes a new version of the library, which disables certain JNDI features known to cause issues with log4j 2.x. While Dremio is not vulnerable due to logback configurations being inaccessible externally and not using JNDI/JDBC features, this was done as a general security best practice.
DX-24075
  * As of v20.0, Dremio now supports JDK 11 for on-premise installations. YARN and AWSE are not supported. Docker images will be available for both JDK 8 and 11. 
DX-38972
  * When deleting a user from Dremio, the username or email address associated with the record will display in the confirmation message. 
DX-31272


CS-9357
  * When reading data from MongoDB, users may now set the batch size for reading data via the **Sample Size** source setting. Simply enter a custom value to indicate the number of documents Dremio must sample to determine the schema. Additionally, users may also specify if the sample should occur from the beginning or end of the collection.


DX-37092
  * Dremio users may now create [nested roles](/security/rbac/roles#roles-tab), or child roles assigned to a parent role. These nested roles inherit of the privileges set at the parent level in addition to those granted specifically to the nested role. This allows for even more fine-grain access management for users based on role type. Currently, this may only be done via the SQL editor using the [GRANT ROLE TO ROLE command](/reference/sql/commands/roles#grant-role-to-role). 
DX-37770
  * For organizations using ADLS v2 sources, Dremio now supports adding whitelisted containers using AAD credentials without the need for Azure role-based access control (IAM role). Only permissions to access the container (read and write) must be set. From the source's **Settings** dialog, under the **Advanced Options** tab, users may set a specific directory inside a container using AAD credentials wherein subdirectories of that path may be accessed using only read permissions or read/write access (read/write must be granted at the container levels at minimum, or also the end directory to add sources). The path must follow the format of `container_name/dir0/.../dir_name`. 
DX-34486
  * Dremio now offers an expression splitting cache, which helps to avoid performing splitting work for the same expression repeatedly. This allows for the separation of actual data from the instructions regarding how to handle these splits, the main benefit being to reduce your bandwidth significantly. This cache may be enabled or disabled using the `exec.expression.splits_cache.enabled` support key. By default, this functionality is enabled for all organizations that upgrade to 20.0. 
DX-35053


CS-10324
  * A new column is available on the Job Profile page under the Phase section, which now allows you to see peak memory consumed by incoming buffers. 
DX-39514


CS-10324
  * Support has been added for [Apache Iceberg metadata tables](/developer/data-formats/apache-iceberg) using AWS Glue catalogs. 
DX-35518, removed from 20.0


* Support has been added for `UserAdmin` role assignment using SCIM APIs. Organizations may use this role to provision users and groups without requiring admin status in Dremio.
DX-40509
CS-10324
  * Added a new [environment variable](/deploy-dremio/other-options/standalone/dremio-config/dremio-env) to the `dremio-env` file (`DREMIO_GC_LOG_TO_CONSOLE="no"`) to configure whether garbage collection sends messages only to the console or logs. If set to `"yes"`, the `DREMIO_LOG_DIR` environmental variable is ignored and GC logs are sent only to the console. If set to `no`, logs are instead sent to the log file. 
DX-39471
  * Updated Dremio's supported version of the `Azure.Storage.Common` library to v12.14.1, at the recommendation of Microsoft. Organizations using older versions of Azure storage libraries occasionally encountered data corruption issues, which is addressed with the newer SDK version.


### Issues Fixed[​](/release-notes/unsupported-releases/version-200-release#issues-fixed-15 "Direct link to Issues Fixed")
DX-38496
CS-11765
**_Users attempting to obtain Oracle row counts noticed a significant delay._**  
This issue has been addressed so that the Oracle RDBMS source will now use table statistics to determine the row count of a table, provided this information is present and not stale. If this fails, then Dremio will revert to the slower `COUNT(*)` query.
DX-37036
CS-12757
**_Users encountered error messages with MongoDB and Elasticsearch plugins due to nodes being unable to copy._**  
This issue has been addressed so that users may now copy nodes without triggering error messages.
DX-36270
CS-10990
**_Users attempted to run queries with a join clause on an Oracle datasource, but JDBC read them as individual queries for each table despite the clause._**  
This issue has been addressed by pushing down `TO_DATE(timestamp)` and `TO_CHAR(numeric, formatStr)` for RDBMS sources.
DX-31052
CS-10919
CS-11108
**_When attempting to query the`sys.privileges` table with large catalogs, users encountered an error about Dremio being unable to get the profile for the job._**  
This issue has been addressed so that users may now successfully query the `sys.privileges` table.
DX-24184
CS-6143
**_For customers using PostgreSQL, users encountered the error`ERROR: collations are not supported by type "char"` when selecting columns of the `CHAR` data type._**  
This issue has been addressed so that when selecting columns of the `CHAR` data type with PostgreSQL, users will no longer receive an error about unsupported collations.
DX-23664
CS-5815
**_When querying Oracle, customers received an error stating`Invalid row type` due to an inability to detect the data type._**  
This issue has been addressed so that retrieving the Oracle `ROWID` columns will no longer trigger an error, but properly retrieve it as `VARCHAR`.
DX-22240
CS-4967
**_Dremio would return the error`DATA_READ ERROR: Failure while attempting to read from database` when a query was submitted with unsigned integer types._**  
This issue has been addressed so that MySQL unsigned integer types are now mapped as `bigint` to allow for the full range of possible values.
DX-37194
CS-8782
**_Customers couldn't query min/max variable length fields on datasets due to query failure. These failures were caused by insufficient memory due to the group by clauses being unable to spill._**   
This issue has been addressed by adding variable length fields to the vectorized hash aggregator operator, which allows spills.
DX-37152
CS-8782
**_Users encountered issues with splits in aggregates when encountering an expression blocked by agg-join pushdowns._**   
This issue has been addressed by adding a normalizer rule that better-matches aggregate Reflections against queries grouped by expressions.
DX-28298
CS-11370
**_User queries encountered Gandiva exceptions indicating that Dremio “could not allocate memory for output string._**   
This issue has been addressed by fixing an unexpected behavior within the SPLIT_PART function.
DX-33355
CS-10404
**_Users encountered issues where converting`OR` and `IN` clauses caused issues when expressions were used._**   
This issue has been addressed by adding support to handle cases of converting `OR`/`IN` clauses with expressions.
DX-36237
**_Organizations using JSON sources encountered errors when a`NULL` field was encountered._**   
This has been addressed by not projecting any fields in Dremio with a `NULL` value.
DX-36237
**_Organizations with 1000+ users encountered noticeable load delays when attempting to use the user filter drop-down from the Jobs screen._**   
This has been addressed by optimizing the drop-down so that users are loaded rapidly without any performance issues.
### Breaking Changes[​](/release-notes/unsupported-releases/version-200-release#breaking-changes "Direct link to Breaking Changes")
  * The `sys.dependencies` system table, which contains metadata for Reflection dependencies in Dremio, has been renamed to `sys.reflection_dependencies`.


DX-25875
  * A new `logback.xml` file is included as part of Dremio 20.0's new structured logging functionality. This file is included with every Dremio installation/upgrade files and is typically skipped during installation. However, with Dremio 20.0 your original `logback.xml` file **must be overwritten** with the file provided in the installer. If you do not use the new file provided with the upgrade, then Audit Logging will not work and `queries.json` will remain empty.


  * Mixed Types Support Key Disabled: 
DX-37357
CS-9544
[In v18.0](/release-notes/version-1800-release-notes), support for mixed data types became deprecated. However, the support key to continue using mixed types was left active for users to prepare more fully for this transition. As of Dremio 20.0, the support key for mixed data types is disabled and may no longer be used from the Support Keys page.


### Known Issues[​](/release-notes/unsupported-releases/version-200-release#known-issues-1 "Direct link to Known Issues")
DX-42552
**Issue:**  
After upgrading from 18.x or 19.x to 20.0, users encountered the error "Failed to get iceberg metadata" when querying datasets. This issue occurs because of how the user's metadata was stored in Iceberg prior to the upgrade.
**Workaround:**  
After the upgrade to 20.0 is complete, do the following for all affected datasets:
  1. Use `ALTER PDS` to forget the metadata for affected datasets (see [Forgetting Table Metadata](/reference/sql/commands/datasets#forgetting-table-metadata)).
  2. Use `ALTER PDS` to refresh the metadata for affected datasets (see [Refreshing Table Metadata](/reference/sql/commands/datasets#refreshing-table-metadata)).


Was this page helpful?
[Previous 21.x Release Notes](/release-notes/unsupported-releases/version-210-release)[Next 19.x Release Notes](/release-notes/unsupported-releases/version-1900-release-notes)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous 21.x Release Notes](/release-notes/unsupported-releases/version-210-release)[Next 19.x Release Notes](/release-notes/unsupported-releases/version-1900-release-notes)
  * [20.9.0 (June 2023) Enterprise](/release-notes/unsupported-releases/version-200-release#2090-june-2023-enterprise)
    * [Issues Fixed](/release-notes/unsupported-releases/version-200-release#issues-fixed)
  * [20.8.0 (November 2022) Enterprise](/release-notes/unsupported-releases/version-200-release#2080-november-2022-enterprise)
    * [What's New](/release-notes/unsupported-releases/version-200-release#whats-new)
    * [Issues Fixed](/release-notes/unsupported-releases/version-200-release#issues-fixed-1)
  * [20.7.0 (October 2022) Enterprise](/release-notes/unsupported-releases/version-200-release#2070-october-2022-enterprise)
    * [Issues Fixed](/release-notes/unsupported-releases/version-200-release#issues-fixed-2)
  * [20.6.0 (August 2022) Enterprise](/release-notes/unsupported-releases/version-200-release#2060-august-2022-enterprise)
    * [Issues Fixed](/release-notes/unsupported-releases/version-200-release#issues-fixed-3)
  * [20.5.0 (July 2022) Enterprise](/release-notes/unsupported-releases/version-200-release#2050-july-2022-enterprise)
    * [What's New](/release-notes/unsupported-releases/version-200-release#whats-new-1)
    * [Issues Fixed](/release-notes/unsupported-releases/version-200-release#issues-fixed-4)
  * [20.4.2 (December 2022) Enterprise](/release-notes/unsupported-releases/version-200-release#2042-december-2022-enterprise)
    * [Issues Fixed](/release-notes/unsupported-releases/version-200-release#issues-fixed-5)
  * [20.4.1 (June 2022) Enterprise](/release-notes/unsupported-releases/version-200-release#2041-june-2022-enterprise)
    * [Issues Fixed](/release-notes/unsupported-releases/version-200-release#issues-fixed-6)
  * [20.4.0 (May 2022) Enterprise](/release-notes/unsupported-releases/version-200-release#2040-may-2022-enterprise)
    * [What's New](/release-notes/unsupported-releases/version-200-release#whats-new-2)
    * [Issues Fixed](/release-notes/unsupported-releases/version-200-release#issues-fixed-7)
  * [20.3.1 (May 2022) Enterprise](/release-notes/unsupported-releases/version-200-release#2031-may-2022-enterprise)
    * [Issues Fixed](/release-notes/unsupported-releases/version-200-release#issues-fixed-8)
  * [20.3.0 (May 2022) Enterprise](/release-notes/unsupported-releases/version-200-release#2030-may-2022-enterprise)
    * [Issues Fixed](/release-notes/unsupported-releases/version-200-release#issues-fixed-9)
  * [20.2.3 (April 2022) Enterprise](/release-notes/unsupported-releases/version-200-release#2023-april-2022-enterprise)
    * [Issues Fixed](/release-notes/unsupported-releases/version-200-release#issues-fixed-10)
  * [20.2.2 (March 2022) Enterprise](/release-notes/unsupported-releases/version-200-release#2022-march-2022-enterprise)
    * [Issues Fixed](/release-notes/unsupported-releases/version-200-release#issues-fixed-11)
  * [20.2.1 (March 2022) Enterprise](/release-notes/unsupported-releases/version-200-release#2021-march-2022-enterprise)
    * [Issues Fixed](/release-notes/unsupported-releases/version-200-release#issues-fixed-12)
  * [20.2.0 (March 2022) Enterprise](/release-notes/unsupported-releases/version-200-release#2020-march-2022-enterprise)
    * [What's New](/release-notes/unsupported-releases/version-200-release#whats-new-3)
    * [Issues Fixed](/release-notes/unsupported-releases/version-200-release#issues-fixed-13)
  * [20.1.0 (January 2022)](/release-notes/unsupported-releases/version-200-release#2010-january-2022)
    * [What's New](/release-notes/unsupported-releases/version-200-release#whats-new-4)
    * [Issues Fixed](/release-notes/unsupported-releases/version-200-release#issues-fixed-14)
    * [Known Issues](/release-notes/unsupported-releases/version-200-release#known-issues)
  * [20.0.0 (December 2021)](/release-notes/unsupported-releases/version-200-release#2000-december-2021)
    * [What's New](/release-notes/unsupported-releases/version-200-release#whats-new-5)
    * [Issues Fixed](/release-notes/unsupported-releases/version-200-release#issues-fixed-15)
    * [Breaking Changes](/release-notes/unsupported-releases/version-200-release#breaking-changes)
    * [Known Issues](/release-notes/unsupported-releases/version-200-release#known-issues-1)


