---
url: /release-notes/version-260-release
slug: /release-notes/version-260-release
title: "26.x Release Notes | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64076.224482625
---

  * [Dremio Enterprise Home](/)
  * [Release Notes](/release-notes)
  * 26.x Release Notes

Version: current [26.x]
On this page
# 26.x Release Notes
Releases are listed in reverse order, starting with the latest release of Dremio 26.x.
## 26.1.7 (May 2026) Enterprise​
### Improvements and Fixes​
  * Fixed 4 important vulnerabilities within Apache Polaris used by Dremio's Open Catalog:
    * CVE-2026-42809: Fixed an issue where an authenticated low-privileged user could abuse Polaris staged table creation to mint broad temporary storage credentials for an attacker-chosen location before Polaris validated that location. 
DX-119578
    * CVE-2026-42810: Fixed an issue where Polaris accepted literal `*` characters in namespace and table names. When Polaris later built temporary S3 access policies for delegated table access, those characters were reused unescaped in S3 IAM resource patterns and `s3:prefix` conditions. 
DX-119851
    * CVE-2026-42811: Fixed an issue where crafted namespace or table names could cause short-lived GCS credentials, which are intended to work only for one table's files, to work across the configured bucket instead. 
DX-119949
    * CVE-2026-42812: Fixed an issue where there was no protection on `write.metadata.path`, which could allow unauthorized metadata writes. 
DX-119952


## 26.1.6 (April 2026) Enterprise​
### Improvements and Fixes​
  * Fixed a memory leak in `TableFunctionPOP` where Apache Arrow buffers allocated during row processing were not released when a query was cancelled between output batches. 
DX-116853
  * Fixed an issue where writing an Apache Iceberg table with positional deletes to a REST catalog source could fail when running `DELETE`, `UPDATE`, or `MERGE` queries. 
DX-117602
  * Fixed a rare issue where positional deletes were incorrectly applied when querying Apache Iceberg tables that contain both positional and equality deletes. 
DX-114693
  * Fixed an issue where CTAS incorrectly wrote v1 manifest files in Apache Iceberg v2 tables, causing format version inconsistencies. 
DX-115585
  * Fixed an error that caused queries on externally created Apache Iceberg tables to fail when Parquet column IDs did not match the Iceberg schema. 
DX-116497
  * Fixed an issue where Dremio could sometimes throw a 403 error reading an Apache Iceberg table written by another engine to an S3-compatible storage. 
DX-116637
  * Dremio is now compatible with S3-compatible storages that have regions with custom names. 
DX-116549
  * Fixed a resource leak in S3FileSystem that occurred when object store source initialization failed during setup. 
DX-116225
  * Fixed a resource leak in S3 sources when reading multi-file Parquet tables that could cause nodes to crash with out-of-memory errors. 
DX-115436
  * Fixed a resource leak where connections to AWS STS were not properly released when using temporary AWS credentials in S3 sources. 
DX-113416
  * Fixed an issue that prevented users from successfully adding Azure data sources when authenticating with Microsoft Entra ID. 
DX-117851
  * Removed `COLLATE LATIN1_GENERAL_BIN2` being added to literals in Microsoft SQL Server sources, which could cause incorrect pushdown behavior when the code page standard differed from the source default. 
DX-91868
  * Fixed an issue in RocksDB that could cause Java virtual machine (JVM) crashes when iterator access raced with a delete operation. 
DX-113228
  * Fixed an issue in MongoDB source metadata caching that caused intermittent "column already exists" or "column not present" errors when rapidly adding and dropping columns on a collection. 
DX-109012
  * Fixed an issue where MongoDB filters were not pushed down when a calculated predicate was included. Partial filter pushdowns are now supported. 
DX-96629
  * Fixed an issue where querying a promoted file-based dataset after its source files were deleted returned a "/ by zero" error instead of a clear message indicating the files were missing. 
DX-114409
  * Fixed a leak on coordinator nodes where memory was accumulating outside the heap memory. 
DX-99713
  * Fixed an issue where the end time of a job was not being persisted under a specific scenario, which could impact any downstream process dependent on a job's completion time. The end time is now consistently recorded. 
DX-115412
  * Fixed an issue where temporary files created during job profile downloads were not cleaned up, which could lead to disk space exhaustion in high-usage environments. Profile download files are now automatically deleted after the download completes successfully or fails. 
DX-95088
  * Job details now load correctly for users with "/" in their username. 
DX-117636
  * Fixed an issue where `CloseableResource` logs were emitted at an incorrect log level. These logs are now restored to `DEBUG` level. 
DX-117290
  * AI configurations are now listed on a separate page in the Dremio console settings, where you can access and configure AI model providers if you have an `ADMIN` role or CREATE MODEL PROVIDER permission. 
DX-117393, DX-117267
  * Added a CREATE SPACE privilege that allows administrators to grant non-admin users the ability to create spaces without requiring the full `ADMIN` role. 
DX-116372
  * Added support for Transport Layer Security (TLS) encryption, mutual TLS, and token-based authentication for NATS connections to enable wire-encryption and authenticated access between services. 
DX-112488
  * Downgraded the Netty version used by external catalog server pods from 4.2 to 4.1 to prevent TLS hostname verification failures when communicating with the coordinator. 
DX-112416
  * Updated the following libraries to address potential security issues:
    * Netty version to 4.2.12.Final [CVE-2026-33870, CVE-2026-33871] 
DX-117329
    * Microsoft JDBC Driver for SQL Server version to 10.2 [CVE-2025-59250] 
DX-113163
    * Hadoop version to 3.4.2 [CVE-2025-27821] 
DX-114492
  * Fixed an issue where the disabled **Download CSV** menu item could still be selected. 
DX-113207
  * Fixed an issue where the lineage graph always displayed a job count of 0 instead of the correct value shown in the catalog table. 
DX-116747
  * Lineage calculations no longer fail when there is a trailing semicolon in the view definition. 
DX-116359
  * Fixed an issue where users were not notified when a SQL script reached the 250,000 character limit. 
DX-98944
  * Fixed an issue in the SQL Runner where cursor placement and text selection did not align with the actual cursor position. 
DX-117722
  * Fixed an issue with long planning times and SQL commands with many joins. This problems occurs despite planner statistics being disabled. 
DX-116947
  * Fixed "BufferUnderflow" errors when trying to run `DROP TABLE` in the Open Catalog. 
DX-117646
  * Fixed an issue where `CREATE OR REPLACE VIEW` failed with a "Column not found" error for struct sub-fields when replacing an existing view after the source table schema had changed. 
DX-116055
  * Fixed `DECIMAL` negation incorrectly reducing scale by 1, which caused silent data corruption (values divided by 10) when writing negated `DECIMAL` columns to tables via CTAS. 
DX-116561
  * Fixed an intermittent issue where query results could be corrupted during join operations when the build side contained a `STRUCT` data type. 
DX-115467
  * Fixed an issue where transitive filters were not pushed down due to nullability mismatches. 
DX-115093
  * Fixed an issue that caused queries to crash when aggregating large amounts of data with variable-length columns that exceeded 2 GB in a single batch. 
DX-117292
  * Fixed a type mismatch issue that caused query planning failures when aggregate Reflections were enabled. 
DX-114830
  * Updated Reflection refresh on data changes policy default behavior to only validate 10 tables per sync to prevent slowdowns in Reflection management. 
DX-117665
  * Fixed a bug where reading Parquet files with `DATA_PAGE_V2` pages marked as uncompressed under a compressed column codec could fail with a `DATA_READ` decode error. 
DX-117088
  * Fixed an issue during `REFRESH DATASET` operations caused by concurrent access to internal statistics maps. 
DX-116438
  * Dremio now supports configurable Kubernetes cluster DNS domains, allowing deployments to use custom domain names like `cluster.myname` instead of the default `cluster.local`. 
DX-115818
  * Fixed an issue where the engine operator did not detect configuration changes to executor pods, requiring a manual pod restart to apply updates. The engine operator now automatically detects these changes and applies them without a restart. 
DX-116889
  * Fixed an issue where the engine operator could incorrectly reconcile resources that did not belong to engines. The engine operator now correctly identifies and reconciles only engine-owned resources. 
DX-116441


#### Helm Chart (3.2.6)​")
  * Upgraded the MongoDB Operator to resolve TLS and cert-manager compatibility issues. This update requires a CRD upgrade before deploying. 
DX-115916
  * Upgraded the embedded MongoDB version to 8.0.17-6. 
DX-115995
  * Applied security patches to address CVE vulnerabilities in Helm chart dependencies. 
DX-116109
  * Added support for configurable CPU and memory resource limits on the OpenSearch `securityconfig-update` job, allowing operators to tune resource allocation for their environment. 
DX-116492
  * Fixed incorrect resource formatting in the OpenSearch init container that could cause deployment failures. 
DX-116650


## 26.1.5 (March 2026) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed an issue where inline metadata refresh queries could cause all queries to stall during query planning. 
DX-114871
  * Fixed an issue where a service user's client secret could be used to obtain an access token for a different service user via the OAuth client credentials grant. 
DX-115725
  * Fixed a critical NATS connection leak that could cause JVM thread exhaustion. Dremio now uses safe client reuse and connection caching to prevent this issue. 
DX-115100
  * Fixed an issue that could cause Reflection creation to fail when built on top of a `sys` namespace table. 
DX-115252
  * Fixed an issue where queries could fail against sources that relied on `ADLSFileIO` being accessible. 
DX-115106
  * Fixed a direct memory leak that could occur in certain scenarios, such as query cancellation, when a query included a JDBC scan. 
DX-114323


#### APP​
  * Fixed an issue on the Jobs page where a user's first and last names were displayed in the **User** column instead of their username. The column now shows the username, consistent with job search and user filter behavior. 
DX-114835
  * Fixed an issue where the Support Settings page became unresponsive after enabling AI functions. Refreshing the page now works as expected. 
DX-109062
  * Removed the **Toleration period** field when creating or editing engines in Kubernetes deployments, where it was not applicable. 
DX-105356
  * Fixed an issue where users with non-US English keyboard layouts (such as German) were unable to comment or uncomment lines in the SQL editor. A new keyboard shortcut has been added: **Ctrl+Alt+C** (Windows) or **Cmd+Option+C** (Mac). 
DX-101147


#### SQL​
  * Fixed an issue with the `CREATE VIEW` SQL command failing when referenced views are out of sync with source tables. 
DX-115610
  * Fixed an intermittent corruption issue with `ListVector` that could occur in hash joins involving `LIST` or `MAP` data types. 
DX-115281
  * Fixed an issue where an `IllegalArgumentException` could be thrown when processing datasets containing `LIST` of `LIST` with `NULL` values. 
DX-115221
  * Fixed an issue where queries using the Arrow Flight SQL JDBC driver could fail due to a missing user ID or username. 
DX-113720
  * Fixed an issue where queries with large, complex `WHERE` clauses containing many nested conditions could hang indefinitely during planning and could not be canceled. 
DX-112873
  * Fixed an issue where `LISTAGG` could not accept some constant arguments. 
DX-114394
  * Fixed a planning error where some queries using window functions against views could fail due to improper collation propagation. 
DX-114132
  * Fixed an issue where queries using window functions with constant date/time expressions (for example, `MAX(TIMESTAMP '...')`) could fail with a compile error. 
DX-107194
  * Fixed memory alignment issues that could cause intermittent crashes during query execution. 
DX-113970
  * Fixed an issue where `INSERT INTO ... VALUES` statements with many rows could generate excessively large query profiles. 
DX-105395
  * Fixed an issue where the `TIMESTAMPADD` function could fail when offsetting by 100 or more days against an Oracle source. 
DX-90863


#### Helm Chart (3.2.5)​")
  * Added support for configurable `annotations` and `podAnnotations` on all Helm chart hooks and jobs. 
DX-114821


## 26.1.4 (February 2026) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Added support for a user-configurable inactivity timeout to end idle sessions automatically. 
DX-12390
  * Support has been added for configuring different user group mapping providers per Hive source. This can be set in each Hive source’s **Connection Properties** field using the `hadoop.security.group.mapping` property. 
DX-113989
  * Fixed an issue where extra entries could be created in Hive sources if an extra space was erroneously included in the table path during a metadata refresh. 
DX-112914
  * Non-AWS Role Amazon Resource Names (ARNs) are now permitted in catalog configuration. 
DX-113934
  * Fixed an issue where Reflection recommendations could cause jobs to remain in a `RUNNING` state even after execution completed. 
DX-113941
  * Improved cleanup of old jobs by the background jobs cleaner and the `dremio-admin` CLI clean command. 
DX-112302
  * Fixed an issue where the Dremio backup tool reported errors related to missing intermediate profiles, which impacted the backup process. Intermediate profiles are not required for backup and are now excluded. Restoring from older backups will not restore intermediate profiles. 
DX-109745
  * Fixed `ConcurrentModificationException` in `JDKClassCompiler` that could cause query failures during concurrent code compilation on Java virtual machine (JVM) 17+. 
DX-112719


#### API​
  * Fixed an issue where the `GET /api/v3/job/{id}/results` endpoint could fail with deserialization errors for result files larger than 2 GB. 
DX-110160


#### APP​
  * Fixed an issue with looking up service users in the Roles Members search box in the Dremio console. 
DX-110082


#### SQL​
  * Fixed an issue where Parquet filter pushdown incorrectly dropped negative and zero values when converting `DOUBLE` to `FLOAT` filters, causing silent incorrect query results. 
DX-113966
  * Improved query performance by automatically simplifying filter conditions on `COALESCE` and `CASE` expressions, enabling more efficient filter pushdown. 
DX-112884
  * Fixed a bug where partition filters were not correctly pushed down in certain cases. 
DX-106011
  * Fixed an issue where querying a partitioned table failed after the partition column was dropped. 
DX-68132
  * Resolved an issue where the hash join operator could produce extra rows in `RIGHT` and `FULL` joins when spilling occurred during the probe phase. The operator now avoids spilling during probe for these join types, preventing previously matched rows from being incorrectly emitted as unmatched. 
DX-113795


## 26.1.3 (January 2026) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed an issue that prevented the client credentials OAuth grant from succeeding when the correct client ID and client secret were provided in the expected URL-encoded form via HTTP basic authentication. 
DX-112990
  * Fixed an issue where S3 connections using an HTTP proxy could ignore the proxy or use the wrong scheme/port due to incorrect proxy SSL configuration handling. 
DX-106030
  * Fixed an issue where Dremio did not set `added-files-size` in Iceberg snapshot summaries, causing `total-files-size` to remain zero. 
DX-112784
  * Fixed an issue where Dremio blocked the use of fields named `file_path` and `pos` in Iceberg v2 tables when using positional deletes via merge on read. 
DX-111113
  * Fixed an issue where materialization join analysis could be corrupted when derived fields were present, or where Snowflake matching could return unqualified replacements when working with complex views. 
DX-110662
  * Fixed support for querying legacy indexes from versions 6 and 7 in Elasticsearch 9. 
DX-112491


#### APP​
  * Drafted content in the editor of the chat window is now stored while expanding and collapsing Dremio's AI Agent chat panel. 
DX-112161
  * Fixed an issue where the SQL editor could display unusable tabs that appeared to be stuck loading. 
DX-112920
  * Added a search box back to the user filter on the Jobs page. 
DX-104416
  * Clicking the job count of a dataset on the Datasets page will now correctly filter jobs. 
DX-112958
  * The Visualized Plan tab in a job's raw profile will now show a results cache plan transformation if applicable. 
DX-112445
  * Fixed an issue causing custom engine names not to show correctly when adding an engine in the Dremio console. 
DX-113239


#### SQL​
  * Added support for common sub-expression elimination (CSE) in filter pushdowns. 
DX-105913
  * Resolved an issue that could lead to a Dremio process abort during query execution involving the Hash Partition Sender operator. 
DX-100619
  * Fixed millisecond parsing in timestamps with more than three fractional places and a timezone offset in the `HH:mm` format (for example, `"2023-12-15T13:19:47.1234567+08:00"`). 
DX-113071
  * Fixed a compilation error in Snowflake sources when using `ILIKE` function with an escape character. 
DX-109787
  * Fixed unexpected errors from the `LISTAGG` function. 
DX-96761
  * Fixed a bug where a join condition is invalid for some user queries with `CONVERT_FROM`. 
DX-113105
  * Fixed materialization `DROP TABLE` failures due to missing Iceberg metadata. 
DX-112787
  * Allow `MERGE` and other DML operations to work on empty tables. 
DX-112136
  * Fixed an issue where Dremio could throw an error when trying to insert a `NULL` element into a list of structs. 
DX-108757
  * Fixed an issue where queries on complex data types (for example, structs, lists, and unions) could return `NULL` values. 
DX-113610


## 26.1.2 (December 2025) Enterprise​
### What's New​
  * Added [`ENCRYPT`](/reference/sql/sql-functions) and [`DECRYPT`](/reference/sql/sql-functions) as new SQL functions. These functions are recommended as replacements for `AES_ENCRYPT` and `AES_DECRYPT`, which are now deprecated and will be removed in a future Dremio release.
DX-108149


### Improvements and Issues Fixed​
#### General Updates​
  * Fixed an issue where Iceberg table write operations could create invalid Parquet files when nullability checks were disabled in Dremio, leading to `DATA_READ ERROR` failures during subsequent queries. 
DX-111290
  * Fixed an issue where sources in a broken state could not be reconfigured. 
DX-109945
  * Key-pair authentication on Snowflake sources now supports custom connection properties. 
DX-111644
  * Fixed a 5-second delay in LDAP login requests. 
DX-112409
  * Fixed an issue where a Reflection could be incorrectly matched and produce the wrong results. 
DX-111606


#### APP​
  * Fixed an issue in which the Catalog Usage on the Monitor page in the Dremio console failed to load due to an error processing queries containing a `LIST_FILES` function call. 
DX-112418
  * Catalog search results with matching column name are now case insensitive. 
DX-106051
  * Fixed an issue where downloading the results of a query could incorrectly repeat the first value pair. Now the downloaded results are consistent with the results shown in the Dremio console. 
DX-111461
  * Fixed the count of output rows in the Summary section of the Job Details page. 
DX-112292
  * Copy buttons will now work as expected when copying an OAuth secret or client ID. 
DX-112327


#### SQL​
  * Fixed the `SUBSTR(string_expression varchar, pattern varchar) → varchar` function so that the behavior matches the [`SUBSTR`](/reference/sql/sql-functions) documentation. Now `SUBSTRING(string_expression varchar, pattern varchar) → varchar` function has a clearer error message that it is not supported. 
DX-105174
  * Previously there was an incorrect code example for using the new AI attributes within engine routing. Now the code example properly shows how to use the new `query_has_attribute` function. 
DX-111871
  * Improved the performance of queries with `IS NULL` and `IS NOT NULL` filters by pruning Iceberg metadata and data files. 
DX-111734
  * Fixed an issue to preserve sort ordering when row-access and column-masking policies are present. 
DX-111686
  * Fixed an issue where filters on `VARBINARY` columns could produce inconsistent results.
DX-101663
  * Fixed an issue with runtime filters on `DECIMAL` columns incorrectly filtering out values. 
DX-111953
  * Fix a bug where a view created in Dremio's Open Catalog could have extra columns from `ORDER BY` when the `ORDER BY` expressions are not in the `SELECT` list. 
DX-111901
  * Fixed an issue where the presence of multiple `LEAD` functions partitioned on the same columns could lead to incorrect results. 
DX-111114


#### Helm Chart (3.2.2)​")
  * Upgraded the Percona Server MongoDB version to 8.0.16-5. 
DX-108448


## 26.1.1 (December 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Updated the `dremio-enterprise` image repo in Quay.io to allow quicker access to our new AI features and avoid customer segmentation by JDK. The `dremio-enterprise` image repo now contains images using JDK 21, so you no longer need to leverage the specific JDK 21 repo in Quay.io. 
DX-112393
  * Enabled the Helm chart template property: `catalog.storage.location` to support multiple buckets. 
DX-112243


#### APP​
  * Fixed an issue where the Jobs page was unable to load post-upgrade if there is a job in the list that has a results cache hit. 
DX-112291


#### Helm Chart (3.2.1)​")
  * Enabled the Helm chart template property: `catalog.storage.location` to support multiple buckets. 
DX-112243


## 26.1.0 (November 2025) Enterprise​
### What's New​
#### General Updates​
  * Discover, analyze, and visualize your data using natural language with [Dremio's AI Agent](/data-products/ai-agent). Use [AI functions](/reference/sql/sql-functions) `AI_GENERATE`, `AI_CLASSIFY`, and `AI_COMPLETE` to integrate LLMs directly into SQL workflows and query unstructured data. Extend functionality to external agents with the Dremio MCP Server, providing secure connections to AI chat clients like Claude and ChatGPT. 
DX-110044, DX-97048, DX-105441
  * [Usage-based billing](/admin/licensing/usage) is now available. Pay for what you use, with support for both online and offline deployments. 
DX-103708
  * Added support for [service accounts](/security/authentication), which are a unique Dremio account type created for service users running automated tools, jobs, and applications. Service accounts are designed to enable applications to interact with Dremio services and datasets securely. 
DX-97174, DX-103961
  * Dremio improves write performance by up to 20% with the introduction of a new vectorized Parquet writer. 
DX-100753
  * Enhanced the [Snowflake](/data-sources/databases/snowflake) and [Google BigQuery](/data-sources/databases/google-bigquery) connectors with support for user impersonation, enabling more secure and flexible access control. 
DX-100717,DX-104710,DX-100713
  * Dremio now supports authentication using Azure-managed identities for Microsoft SQL Server, Azure Data Explorer, and Azure Synapse Analytics. 
DX-107870
  * Added Microsoft Entra ID as an authentication option for Microsoft Azure Synapse and Unity Catalog. 
DX-107870, DX-107914
  * Route MCP, AI Agent, and AI functions queries to specific engines using new [Workload Management](/admin/workloads/workload-management) functionality.


#### SQL​
  * With column nullability enforcement, you can be assured on write operations that your data conforms to the table DDL. This simplifies the data quality experience by failing on write operations when something fails to match the expected DDL. 
DX-97179
  * Added new [`SET QUEUE`](/reference/sql/commands/set-queue) and [`SET TAG`](/reference/sql/commands/set-tag) commands that allow users to explicitly select an execution engine or set a routing tag for subsequent queries in a session, providing greater flexibility and optimized resource utilization for specific workloads. 
DX-54799
  * The Arrow Flight SQL JDBC driver now supports parameterized DML (`INSERT`, `UPDATE`, `DELETE`, `MERGE`), improving client tool integration and enhancing protection against SQL injection. 
DX-105001, DX-104306


### Improvements and Issues Fixed​
#### General Updates​
  * Changed the data type for `queried_datasets` and `scanned_datasets` in `sys.jobs` and `sys.jobs_recent` from `VARCHAR` to `ARRAY`VARCHAR``, making them easier to script against and parse. 
DX-99139
  * The "Enterprise Catalog" and "Dremio Catalog" has been renamed to "Open Catalog". 
DX-109392, DX-104125
  * Added support for connecting Microsoft OneLake Iceberg catalogs to Dremio via the generic Iceberg REST Catalog source. 
DX-108849, DX-110596
  * Fixed Iceberg time-travel being ignored on masked tables by propagating the requested `AT SNAPSHOT`/`TIMESTAMP`, ensuring masked tables honor the target snapshot. 
DX-108461
  * Added support for reading Iceberg tables that include global equality deletes. 
DX-54685
  * Improved read performance for Iceberg v2 tables that simultaneously contain both equality and position deletes. 
DX-104673
  * Added support for Iceberg’s `write.object-storage.partitioned-paths` to control inclusion of partition values in file paths. 
DX-100963
  * Added support for the Iceberg table property `write.object-storage.enabled`, which introduces a hash component in file paths to improve object storage distribution. Iceberg generates a unique directory per file, while Dremio groups files under a query-specific directory using the query ID. 
DX-100958
  * Dremio may write multiple row groups into Parquet files according to the Iceberg table `properties write.target-file-size-bytes` and `write.parquet.row-group-size-bytes`. 
DX-101321
  * The following Iceberg table properties are now supported when configuring Parquet bloom filters:
    * `write.parquet.bloom-filter-enabled.column.`col`` enables bloom filters for specific columns.
    * `write.parquet.bloom-filter-max-bytes` sets the maximum size of the bloom filter bitset (default: 1MB).
    * `write.parquet.bloom-filter-fpp.column.`col`` configures the false positive probability per column (default: 0.01). 
DX-100948
  * Addressed an issue that could cause runtime filters to be dropped in sparsely populated non-broadcast joins. 
DX-68682
  * Fixed an issue where an `OversizedAllocationException` could occur for collections of variable-length values due to unnecessary data buffer reallocations. 
DX-103035
  * Added the `delete-source` command to the `dremio-admin` CLI to delete a source. 
DX-102752
  * Added the following metadata fields for Workload Management (WLM): `rule_name`, `rule_content` and `rule_action` to `queries.json`, `sys.jobs`, and `sys.jobs_recent`. 
DX-108263
  * Fixed an out-of-memory error that occurred when partition buffers were not released after processing, causing queries to exceed memory limits. 
DX-107239
  * Increased the default heap memory on executor nodes from 8 GB to 12 GB when memory is more than 100 GB to avoid query failures due to running out of heap. 
DX-96441
  * Fixed an issue where the main coordinator failed to initialize already-running engines after a restart, preventing queries from accessing sources. 
DX-108628
  * Added additional init containers for the new engines. This was done to allow for customer-managed certificates to be loaded onto the engines. 
DX-106278
  * Added default memory resource limits and CPU resource limits to the new engines. 
DX-106860, DX-108635
  * Improved the Dremio engine to handle a large number of expressions efficiently. The dependency graph of expression splits is now sorted topologically. 
DX-34931
  * For legacy engines, Columnar Cloud Cache (C3) is now enabled by default and can only be disabled on a per-engine basis using [engine overrides](/deploy-dremio/configuring-kubernetes). However, legacy engine satefulsets must be deleted prior to performing the upgrade to Dremio 26.1.0 in order to apply the C3 fix. 
DX-106331
  * Fixed a missing header for SSE-C and asynchronous reader when using S3-compatible storage. 
DX-65718
  * Fixed an issue where schema evolution on a struct member brought back the dropped data values. 
DX-63511
  * Fixed incorrect pageOrdinal calculation during encrypted Parquet reads by ensuring offset indices are properly considered during decryption. 
DX-106865
  * Fixed an issue where queries could not be cancelled under heavy cluster load when the housekeeping thread responsible for handling read task timeouts became unresponsive due to thread starvation. 
DX-105512
  * UI and REST queries that hit the results cache now skip writing job results to avoid redundant storage operations. 
DX-99775
  * Fixed an issue where the `apiCallTimeout` and `apiCallAttemptTimeout` of S3AsyncClient instances can now be set in milliseconds with the `fs.s3a.connection.request.timeout` property. 
DX-106360
  * Downloading a profile for a failed job no longer triggers an additional internal aggregation job, and the downloads of such profiles are now faster. 
DX-106322
  * Added Open Catalog privileges to the `sys.privileges` system table. 
DX-102814
  * Added support for endpoints starting with the "http(s)://" on connection properties. 
DX-103764
  * Fixed an issue where backups would fail with a "checksum error" after a backup was restored. 
DX-102352
  * Resolved an issue where queries could hang indefinitely when writing to the results cache on S3-backed storage. Added configurable timeouts to S3 operations to allow queries to be cancelled properly. 
DX-106679
  * Exposed results cache and Autonomous Reflection information into the `queries.json`, including the results cache age, file size, Reflection ID, name, and mode (manual/Autonomous). 
DX-109976
  * Updated default settings for Autonomous Reflections to make it more POC-friendly. 
DX-106853
  * Autonomous Reflections created by the Recommendation Manager now properly log creation events to `audit.json`. 
DX-110036
  * Autonomous Reflection recommendations now support partition schemes for efficient incremental refresh. 
DX-103310
  * Introduced a new pattern detection algorithm to recommend more efficient raw Autonomous Reflections that can be hash-matched to accelerate user queries. 
DX-104436
  * Dremio now recommends raw Reflections for high-cost query fragments not based on views, enabling denormalized-table-style acceleration for improved performance and reduced resource usage. 
DX-99934
  * Incremental Reflections with sort fields are now eligible for automatic file size optimization. 
Dx-105048
  * Fixed an issue where DML and`EXPLAIN` queries are considered for a job usage information collection and causing exceptions when parsing the query to collect plan fragments for aggregation or hash matching raw Reflection recommendations. Also fixed an issue where Arrow Flight queries were incorrectly counted twice in the usage information collection. 
DX-106800
  * Fixed an issue where more than one existing Reflections are having correlated plans, which could generate different BiRelHash and duplicate hash-matching raw Reflections. 
DX-107740
  * Reduced materialization cache initialization times, which could cause queries to block waiting. Reduced footprint for Reflection matching plans in the KV store. 
DX-104722
  * Fixed an issue where duplicate upstream refreshes could happen when refreshing a Reflection that scans the upstream table multiple times. 
DX-102260
  * Improved upgrade performance when many Reflections or infinite split metadata entries are present. 
DX-109388
  * Incremental refresh is now supported for Reflections with `LEFT OUTER JOIN` and `RIGHT OUTER JOIN`, expanding beyond the previous `INNER JOIN`-only limitation. This change improves performance for Reflections containing outer joins, reduces compute costs, causes faster refresh times for workloads, and optimizes Reflections for complex analytical queries. 
DX-100372
  * Incremental Reflections will perform a full refresh if the underlying Iceberg table becomes unavailable for any reason. 
DX-86939
  * Fixed an issue where Reflection recommendations would not be provided for queries involving `TIMESTAMP` columns.
DX-105544
  * Fixed an issue where Reflection recommendations were not generated due to inaccurate row count estimates. 
DX-107152
  * Fixed an issue where an aggregate Reflection created autonomously could always use “by date” granularity and could not match into user queries using `TIMESTAMPS` granularity. 
DX-107277
  * Blocked Reflections on JDBC sources with user impersonation enabled. Existing Reflections will fail to refresh and expire based on their refresh policy. 
DX-109642
  * Fixed an issue where there were no Reflection partition recommendations for Reflections based on a view. 
DX-103371
  * Fixed an issue where raw Reflections were automatically created without user changes in Advanced mode. 
DX-106597
  * Fixed incorrect TopN logic for picking top used patterns in user queries for both default raw Reflection and aggregate Reflection recommendations. Previously, the system was picking "Top1 used + 49 random ones" instead of "TopN most used". 
DX-105997
  * Improved Reflection recommendations to generate multiple hash-matching Raw Reflections for different queries, resulting in better query acceleration. 
DX-105952
  * Fixed `IllegalStateException` from `RecommendationPlanDataCollector` during job usage data collection when encountering certain query patterns. 
DX-110010
  * Addressed a condition where if a connection closes due to network flakiness in the middle of a query, and if the close connection event can come after the open connection event on a given executor, the executing query can become stuck forever (until the executor restarts) instead of erroring out due to the connection failure. With this fix, these queries will fail with the correct error message instead of becoming stuck. 
DX-105091
  * Fixed the issue of missing user-defined function names and ID logs in the `audit.json` file. 
DX-105030
  * Source `DELETE` audit events now include source ID/type. 
DX-107266
  * Started using system tables to retrieve tables sizes for Snowflake sources, instead of running `COUNT(*)` on each table, to resolve an issue with incorrect row count estimates. 
DX-87198
  * Fixed an issue in `IcebergDeleteFileAggTableFunction` that caused `equalityId`'s to be `NULL`, resulting in failures when tables included both position and equality deletes. The function now correctly handles mixed delete file types. 
DX-106012
  * Fixed an issue where dataset operations could fail with a `NullPointerException` (NPE) error when retrieving Iceberg file information. 
DX-105108
  * Fixed a NPE that could occur when querying a table in an AWS Glue Data Catalog with an empty `SerDeInfo` field. 
DX-106113
  * Fixed a NPE in the Hive plugin when handling AWS Glue paths without a defined scheme. 
DX-107584
  * AWS Glue sources no longer require the `s3:ListAllMyBuckets` permission. 
DX-63506
  * Fixed incorrect Amazon S3 file paths shown in error messages and added retry logic for Parquet reader setup failures on AWS Glue and Hive sources. 
DX-109734
  * Added pod identity support for Amazon S3, AWS Glue Data Catalog, Amazon RedShift, and Amazon OpenSearch sources. 
DX-109777, DX-107753
  * The following metrics were added to the S3 plugin to track the usage of V1/V2 S3 clients within the plugin:
    * `s3_plugin.get_s3_v1_client_calls`
    * `s3_plugin.get_s3_v2_client_calls`
    * `s3_plugin.s3_v1_client_threw`
    * `s3_plugin.s3_v2_client_threw`
DX-104509
  * Upgraded the Amazon OpenSearch operator to 2.8.0 with Dremio-specific customizations. This upgrade addressed CVEs and other issues in the operator. To complete the upgrade, the associated CRDs must also be updated. See [Upgrade Procedure](/admin/admin-dremio-kubernetes/upgrade/) for the steps. 
DX-105403
  * Updated Amazon OpenSearch to 3.1.0 to address potential security issues. 
DX-105301
  * The Elastic plugin now supports Elasticsearch versions 8 and 9 in version 7 compatibility mode. New features from versions 8 and 9 are not supported. 
DX-108871, DX-108947
  * Fixed an issue where MongoDB queries using the `$nor` expression failed due to incorrect pushdown in aggregation expressions. 
DX-102360
  * Fixed issues where concurrent queries on same Flight JDBC connection would error out and where dataset and reflection counts were double counted for prepared statements. 
DX-100757
  * Resolved a memory leak that could occur when executing `CREATE TABLE` or `DROP TABLE` statements using client-side prepared statements. 
DX-105384
  * Removed redundant quarkus dependency that caused errors for some rest endpoints. 
DX-106001
  * The [Lineage](/data-products/govern/lineage) tab has been updated to give a more modern and improved user experience, allowing users to customize the layers of information shown on the lineage nodes. Lineage is supported for the Open Catalog (powered by Polaris), Unity, and all Iceberg REST Catalogs. 
DX-96716, DX-97045, DX-97065
  * The `apiCallTimeout` and `apiCallAttemptTimeout` of S3 client instances can now be set in milliseconds with the `fs.s3a.connection.request.timeout` property. 
DX-105694
  * Refresh policies on sources and datasets will default to 1 hour refresh and 3 hour grace periods if 0 is specified in the REST API calls. 
DX-103084
  * When reading Parquet files, improve error messaging when names of multiple fields in the same Parquet file differ only in capitalization. Dremio requires case-insensitive field name uniqueness. 
DX-105756
  * Fixed an issue in the lineage graph related to the READ METADATA privilege. 
DX-103564
  * Fixed issues related to the READ METADATA privilege so that it follows the correct privilege inheritance chain as documented in [Privileges](/security/rbac/privileges). 
DX-104406
  * Fixed an issue in which listing scripts failed with the error "maxClauseCount is set to 1024" when the user has authorization to view a large number of scripts. 
DX-102120
  * Fixed an issue related to (background) metadata refresh so that it does not remove shared folders from Dremio’s object store even if they don’t have child datasets. It also does not remove stale folders if the “Remove dataset definitions if underlying data is unavailable” setting is toggled off, i.e., it does not remove stale datasets from Dremio’s object store. 
DX-98837
  * Fixed a race condition between spilling during memory pressure and writing a [Parquet file](/developer/data-formats/parquet), which led to an `IndexOutOfBoundsException`. 
DX-101016
  * Prevented expensive function calls from being computed if the log level is not low enough to print the corresponding logs. 
DX-105220
  * Updated the following libraries to address potential security issues:
    * Hadoop to Protobuf 3.15.0+ [CVE-2022-3171, CVE-2022-3509, CVE-2022-3510, CVE-2021-22570]. 
DX-102976
    * DX-98114


#### APP​
  * Hovering over an error icon on the Pod Activity page in the Dremio console now displays the error message as a tooltip.
DX-108128
  * Running multiple queries on the Edit Dataset page will now work as expected. 
DX-104388
  * Added a new **Rerun query on download** option to the Preferences page in the Dremio console. When enabled, Dremio reruns the query before downloading the results. 
DX-101308
  * Fixed an issue where previously the Dremio console stopped working when trying to select an option from the Reflection execution strategy in Advanced Settings. 
DX-105393
  * Fixed an issue where some failed queries with Reflections displayed "missing dataset" instead of the actual dataset name in the query's profile Acceleration tab. 
DX-68262
  * Fixed an issue where opening a Reflection from semantic search would not work as expected.
DX-105748
  * Semantic search now utilizes popularity metrics to improve the ranking of dataset results. 
DX-103857
  * Fixed a bug where the search was not displaying in the join wizard. 
DX-105286
  * Fixed the column count for certain tables. 
DX-105603
  * Fixed an error when expanding columns of starred datasets with names/paths containing the `.` character. 
DX-106403
  * Fixed an issue where a focused node could change when the path has multiple entries with `.`. 
DX-106275
  * Added a message in the Dremio console when the lineage graph has exceeded the node limit. 
DX-105914
  * Fixed an issue where the new attributes filter in the Jobs page would incorrectly work as an `AND` operation instead of an `OR` operation.
DX-11211
  * Fixed an issue where clicking the job count on "Top 10 most queried datasets" was not pre-populating the start time filter on the Jobs page. 
DX-89790
  * Fixed an issue in the Monitor page that no longer shows a negative number for jobs accelerated by Manual Reflections for dates older than the current date. 
DX-104634
  * Added Amazon Bedrock and Azure OpenAI as model provider options. 
DX-110044
  * Added an icon for Apache Polaris in the list of sources. 
DX-105514
  * Fixed an issue that could cause the UI to become unresponsive. 
DX-104748
  * You can now manually refresh failed Reflections by clicking the "Refresh now" icon on the Reflections page. 
DX-91172
  * Public users can now transfer ownership of entities through the Dremio console where available using an exact match search. 
DX-101788
  * Fixed internal support email validation to accept domain labels longer than 4 characters (e.g., .cloud, .global, .online) instead of incorrectly rejecting them. 
DX-109520
  * Updated the Jobs page with better layout responsiveness, column resizing, improved scrolling performance, user avatars, syntax highlighting on the SQL column, and a **Reset Filters** button.
  * Copy buttons now work when Dremio is served in an insecure mode. 
DX-83364
  * Fixed an issue on the Lineage tab when right-clicking on a lineage node would navigate the lineage graph. 
DX-101878
  * Preferences will now appear under the Settings for Dremio Community Edition. 
DX-103853
  * The ability to disable multiple tabs in the SQL Runner has been removed. 
DX-104402
  * Improved error messaging for queries that do not qualify for hash matching data collection. 
DX-108524
  * Fixed an issue where closing a temporary tab before it can autosave caused the **This script has been deleted** dialog to appear. 
DX-104441
  * Failure to create Amazon S3 sources through the Dremio console will now display more actionable messages such as "Invalid AWS Access Key/AWS Access Secret combination." as opposed to the previous, more generic "Failed to create source with name ``source_name``". 
DX-107813


The **Enable asynchronous access when possible** and **Enable asynchronous access for Parquet datasets** checkboxes have been removed from the advanced options in the source configuration dialog to simplify setup and ensure optimal performance. 
DX-98546
#### API​
  * Fixed an issue for the Catalog API where `READ METADATA` wasn't being respected to retrieve lineage information about a dataset. 
DX-106489
  * Dremio catalog privileges are now respected for the graph endpoint in the Catalog API. 
DX-106720
  * Fixed an issue for the Catalog API where `isMetadataExpired` and `lastMetadataRefreshAt` was not being returned. 
DX-107490
  * Improved performance of metadata refresh operations on Parquet datasets by eliminating redundant S3 API calls. 
DX-106894


#### SQL​
  * Dremio table maintenance now utilizes file size distributions and thresholds to intelligently group and compact files, delivering dramatically faster `OPTIMIZE TABLE` results with much lower compute cost. These operations are now optimized to avoid excessive computation and write operations by filtering for partitions that require optimization.
DX-105105, DX-99412
  * Improved memory and performance on compaction (`OPTIMIZE TABLE`) for tables containing position and/or equality deletes. 
DX-104732
  * `OPTIMIZE TAZBLE` now supports `MIN_INPUT_FILES` per partition. 
DX-105248
  * `OPTIMIZE TABLE` no longer incorrectly marks the positional delete file as removed from the snapshot without rewriting all the referenced files. 
DX-104980
  * Enhanced `OPTIMIZE TABLE` to avoid doing any unnecessary work if the conditions for `OPTIMIZE TABLE` are not met. 
DX-96574
  * Optimized `SELECT COUNT(*)` to use Iceberg metadata instead of scanning the entire Iceberg table to return the total number of rows. 
DX-101826
  * The Arrow Flight SQL JDBC driver now supports parameterized DML (`INSERT`, `UPDATE`, `DELETE`, `MERGE`), improving client tool integration and enhancing protection against SQL injection. 
DX-104181
  * Fixed a query performance regression related to Autonomous Reflection data collection.
DX-106581
  * Hash matching raw Reflection recommendations now only apply to queries that do not contain views. 
DX-108010
  * Fixed an issue where `CREATE VIEW` could not be created for a hash-matching Reflection due to a duplicate filed name in the user query. Also fixed an issue where hash matching would run into an assertion error when a user query contains a duplicate name. 
DX-105806
  * Fixed an issue where a Reflection may not hash match into a query. 
DX-108291
  * Fixed a multi-coordinator issue where queries using Reflections would fail with "Failure getting source [__accelerator]". 
DX-105613
  * Added a new system table function `sys.reflection_refresh_settings` that lists all data sources and Reflection refresh settings for a given Reflection. 
DX-104297
  * Added support for `TIMESTAMP` with precision in comparison functions and UI results. 
DX-101576, DX-101054
  * The `TO_NUMBER` function now requires a constant, non-empty format string to improve query reliability and prevent runtime errors.
DX-50605
  * Queries with too many expressions in `WHERE` clauses or `CASE` statements now return a clear error message instead of failing unexpectedly. 
DX-62938
  * Added a `DRY RUN` mode to `VACUUM CATALOG`, which will be able to identify the files to be deleted without taking action. 
DX-105120
  * Added the `INCLUDE` option to the [`VACUUM CATALOG`](/reference/sql/commands/nessie/vacuum-catalog) SQL command to target specific tables for vacuuming. 
DX-102840
  * Added an option to whitelist tables for the `VACUUM CATALOG` SQL command using the `INCLUDE` option. 
DX-102711
  * Fixed an issue where tables with the same name in different folders would throw an error when added to the include / exclude list for `VACUUM CATALOG` queries. 
DX-103559
  * Dremio's `VACUUM TABLE` operations now include the removal of orphan files not affiliated with any snapshot, which yields enhanced storage recovery and cost reduction. 
DX-60930
  * Fixed behavior for `VACUUM TABLE` queries to use the properties set instead of the table property defaults. 
DX-102622
  * Fixed an issue where "DML commit does not specify starting snapshot id" error happens during an UPDATE query. Affected source types are Snowflake Open Catalog and Dremio's Open Catalog. 
DX-101463
  * Running a `SELECT COUNT(*)` query now uses Iceberg metadata instead of scanning the entire Iceberg table to return the total number of rows in a table. 
DX-69534
  * Fixed an issue where queries would fail with the error `Unable to coerce from the file's data type "null" to the column's data type` when reading Mongo collections if schema discovery was disabled and fields containing empty arrays were encountered. 
DX-105466
  * Certain queries with no rows no longer encounter a `StackOverflowError`. 
DX-105473
  * Fixed an issue that could occur when `ResultSetMedata` returns incorrect values for column type precision and scale. 
DX-106400
  * Fixed a divide by zero error that occurred during push project pass join optimization. 
DX-108367
  * Fixed an issue where long-running `INSERT` queries on Iceberg REST tables could hang if vended credentials are used. 
DX-105372
  * Improved Iceberg compliance for `INSERT` statements by writing null values for unspecified columns in Parquet files. This may impact performance proportional to the number of omitted fields. 
DX-106367
  * Improved performance of `INSERT` statements, providing explicit `NULL` column values. 
DX-98154
  * Improved SQL validation error message when a view owner can no longer access a table within the view's SQL. 
DX-86132
  * Fixed incorrect results on partitioned Iceberg tables when using aggregate functions. 
DX-109825
  * Fixed an issue where Dremio incorrectly applied equality deletes on Iceberg tables, which caused incomplete results to be returned. 
DX-104150
  * Optimized `MIN`/`MAX` aggregations on Iceberg tables to read from column metadata when possible. 
DX-100737
  * Fixed a rare issue with Iceberg Data Manipulation Language (DML) queries writing null results on some rows that shouldn't, which happened with DML statements that contained a target and source table. This issue occurred on Merge on Read (MoR) and Copy on Write (CoW) DML configurations. 
DX-105013
  * Fixed an issue where a table created in an Iceberg REST catalog via a `CREATE TABLE AS` statement would appear unpartitioned even though a `PARTITION BY` statement was included in the query. 
DX-109038
  * Fixed an issue related to `CREATE TABLE AS SELECT` statements for Parquet datasets with the error message "Multiple entries with same key: $file=$file: Utf8 and $file=$file: Utf8". 
DX-104033
  * Iceberg tables in Open Catalogs will now `SHOW CREATE TABLE` and the table properties. 
DX-106187
  * Fixed an issue where `MERGE INTO` queries could unexpectedly remove records from an Iceberg table if the source table was backed by a JDBC source. 
DX-106895
  * Fixed an issue where queries with a `SORT` operator took too long to successfully cancel. 
DX-105511
  * Resolved an issue where queries could return incorrect results when a disjunction (`OR`) contained multiple conjunctions (`AND` groups) with a superset relationship. 
DX-109105
  * Fixed issue when casting a `DECIMAL` from `VARCHAR`, which in some cases, caused a SIGSEGV error if the value was not a valid number. 
DX-97570
  * Resolved an issue where certain queries that qualified for a hash join were incorrectly executed as a nested loop join. 
DX-97727
  * Improved coordinator reliability for memory intensive queries. 
DX-86788
  * Added support to optimize and short-circuit query plans for cases when a plan within a view can be pruned off completely. 
DX-100368
  * Implemented `GRANT SELECT ON ALL FOLDERS` and `REVOKE SELECT ON ALL FOLDERS` in Dremio's Open Catalog for users. 
DX-108092
  * Fixed an issue where a `SELECT` query was using results cache after a schema change. 
DX-103395
  * Fixed an issue where `CONVERT_TIMEZONE` failed when the destination timezone was not a constant value. 
DX-100635
  * Fixed an issue where replacing an existing view would fail if the view used the `CONVERT_FROM` function. 
DX-107299
  * Added support for `UNNEST` on an `ARRAY` of `STRUCT`s. 
DX-84925
  * Fixed an issue with `JOIN` with the `USING` clause failing with the error "Failure finding function: coalesce". 
DX-97765
  * The `ASCII` function now returns `0` for an empty string instead of an undefined value. 
DX-106793
  * Fixed a bug where window functions like `avg` and `stddev_pop` were returning indeterminate results. 
DX-105597
  * Fixed an issue when planner will throw an error in some cases when `QUALIFY` is used with window functions. 
DX-97766
  * Fixed a performance regression seen in ranking window functions. 
DX-105693
  * Fixed the roll-based access control expansion of columns referenced by window functions. 
DX-108039
  * Fixed a bug where correlated subqueries with `IS NULL` filters were returning incorrect results. 
DX-102476
  * Fixed the query result download to properly honor the query `ORDER BY` clause. You will now be able to download query results in order if your original SQL preserves the ordering. 
DX-102107
  * Fixed an issue where Dremio allowed Delta Lake tables with `minReaderVersion` higher than supported to be promoted and read, which would cause failures on some queries. 
DX-95855
  * Fixed a `NullPointerException` (NPE) encountered in reading [Delta Lake](/developer/data-formats/delta-lake) tables without column mappings that had undergone schema evolution. The NPE occurred when selecting an array column's element using an index. For example, `[0]` or alike. 
DX-105935
  * Fixed an issue that could cause a NPE when querying `INFORMATION_SCHEMA.SCHEMATA`. 
DX-103489
  * Fixed an issue with the JDBC driver, where queries with zero rows with null columns failed with a NPE. 
DX-104076
  * Fixed an instance of Dremio process abort when complex data type columns are involved in a hash join query. 
DX-89072
  * The join query now throws an `OverSizedAllocationExceptio`n when projecting a column that requires allocating a target batch larger than 2 GB, instead of aborting the Dremio daemon process. The exception message includes the calculated target batch size, which can help determine an appropriate configuration that may allow the query to succeed. 
DX-107187
  * Fixed an issue with `REFRESH METADATA FOR PARTITIONS` for transactional Hive tables. 
DX-102376
  * Fixed an issue where `COPY INTO` queries were failing through the Arrow Flight SQL JDBC driver. 
DX-110064
  * Fixed an issue where the query duration timer would continue ticking after a query completed. 
DX-105185
  * Fixed an `IllegalStateException` for certain queries with rollup aggregations. 
DX-101395
  * Fixed the issue where large case expressions were causing the planner to hang. 
DX-101299
  * Reduced noise in the logs generated when reading data from Parquet files by changing the log level of certain messages from `WARNING` to `DEBUG`. 
DX-101258
  * Fixed broadcast row count estimation in some cases to improve query planning and total query cost. The row count adjustment is controlled by a support key. 
DX-97710
  * Fixed an issue that caused the execution of a script to fail with the "No queries found" error when the user has the `VIEW` privilege. 
DX-102553
  * Resolved duplicated "process_start_time_seconds" metric in Prometheus "/metrics" endpoint that could break scrapers. 
DX-105362
  * Fixed query failures in right and outer joins with nullable fields. 
DX-106831, DX-100855
  * Fixed an issue that could cause queries to fail on secondary coordinators under rare circumstances if a Dremio OAuth access token was used to authenticate the query. 
DX-103161
  * S3 clients from Version 2 of the AWS SDK for Java were introduced to start the removal of Version 1 clients from S3FileSystem. Version 2 clients are now the default. 
DX-99720
  * Fixed a `ClassCastException` when applying bucket partition transforms on `VARBINARY` columns by correctly wrapping byte arrays from Arrow in ByteBuffer before transformation. 
DX-104174
  * Fixed a corner case looping problem during query execution of very large queries that caused Dremio log files to grow rapidly and eventually cause disk full situations. 
DX-100920
  * Improved query profiles by adding the Delta version scanned inside a physical plan profile. 
DX-85745
  * Fixed an issue where queries were not being canceled after a coordinator restart, causing them to remain stuck. 
DX-104173
  * Corrected over-counting of catalog access timing statistics in query profiles. 
DX-110381
  * Fixed an issue for scripts created through the Dremio API so that they don't have their content overwritten when opened in the SQL editor. 
DX-104226
  * Added an upgrade task to fix old user-defined functions (UDFs) that might have a null full path. After upgrading to this new version, all UDFs should have a valid full path. 
DX-104745


#### Helm Chart (3.2.0)​")
  * This update enables automated backups of Dremio's Open Catalog metadata stored in MongoDB. Users can backup their catalog information without downtime; enabling data resiliency from system failures. 
DX-104782
  * Added a mandatory `region` field to the `distStorage` S3 and S3-compatible configuration to support the new MongoDB hot backup. 
DX-108806
  * For legacy engines, Columnar Cloud Cache (C3) is now enabled by default and can only be disabled on a per-engine basis using [engine overrides](/deploy-dremio/configuring-kubernetes). However, legacy engine satefulsets must be deleted prior to performing the upgrade to Dremio 26.1.0 in order to apply the C3 fix. 
DX-106331
  * Added additional init containers for the new engines. This was done to allow for customer-managed certificates to be loaded onto the engines. 
DX-106278
  * Added default memory resource limits and CPU resource limits to the new engines. 
DX-106860, DX-108635
  * Fixed the `ActiveProcessorCount` calculation when using statically defined engines. 
DX-107901
  * `priorityClassName` is now supported for all pods except `opensearch-cluster-security-config-update`, `opensearch-bootstrap` and `dremio-mongodb-cluster`. 
DX-106779
  * Upgraded the OpenSearch operator to 2.8.0 with Dremio-specific customizations. This upgrade addressed CVEs and other issues in the operator. To complete the upgrade, the associated CRDs must also be updated. See [Upgrade Procedure](/admin/admin-dremio-kubernetes/upgrade/) for the steps. 
DX-105403
  * All Dremio versions are now using JDK version 21 by default. 
DX-106970
  * Resolved an issue with the TrustStore configuration. 
DX-110301


## 26.0.10 (January 2026) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed an issue where Dremio was blocking the usage of fields named `file_path` and `pos` in Iceberg v2 tables using positional deletes via merge on read. 
DX-111113
  * Key-pair authentication on Snowflake sources now supports custom connection properties. 
DX-111644
  * Fixed an issue where materialization join analysis could be corrupted when derived fields were present, or where Snowflake matching could return unqualified replacements when working with complex views. 
DX-110662
  * Fixed an issue where a Reflection could be incorrectly matched and produce the wrong results. 
DX-111606
  * Fixed a 5-second delay in LDAP login requests. 
DX-112409
  * Fixed support for querying legacy indexes from versions 6 and 7 in Elasticsearch 9. 
DX-112491


#### APP​
  * Previously a user could run into orphaned loading tabs in the Dremio console. Now when using the SQL editor, users shouldn't be able to see orphaned tabs. 
DX-112920
  * Fixed the `SUBSTR(string_expression varchar, pattern varchar) → varchar` function so that the behavior matches the [`SUBSTR`](/reference/sql/sql-functions) documentation. Now `SUBSTRING(string_expression varchar, pattern varchar) → varchar` function has a clearer error message that it is not supported. 
DX-105174


#### SQL​
  * Fixed an issue where the presence of multiple `LEAD` functions partitioned on the same columns could lead to incorrect results. 
DX-111114
  * Fixed a compilation error in Snowflake sources when using `ILIKE` function with an escape character. 
DX-109787
  * Fixed unexpected errors from the `LISTAGG` function. 
DX-96761
  * Fixed an issue where filters on `VARBINARY` columns could produce inconsistent results. 
DX-101663
  * Fixed an instance of Dremio process abort when complex data type columns are involved in a hash join query. 
DX-89072
  * Fixed an issue to preserve sort ordering when row-access and column-masking policies are present. 
DX-111686
  * Improved the performance of queries with `IS NULL` and `IS NOT NULL` filters by pruning Iceberg metadata and data files. 
DX-111734


#### Helm Chart (3.1.8)​")
  * Upgraded the Percona Server MongoDB version to 8.0.16-5. 
DX-108448


## 26.0.9 (December 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Added support for connecting Microsoft OneLake Iceberg catalogs to Dremio via the generic Iceberg REST Catalog source. 
DX-110596
  * The Elastic plugin now supports Elasticsearch versions 8 and 9 in version 7 compatibility mode. New features from versions 8 and 9 are not supported. 
DX-108871, DX-108947


#### SQL​
  * Fixed an issue where the position delete files for Apache Iceberg v2 tables were not sorted by 'file_path' and 'pos' during merge-on-read `DELETE` operations on tables with an Iceberg-defined sort order. 
DX-111304
  * Fixed an issue where queries would fail with the error `Unable to coerce from the file's data type "null" to the column's data type` when reading Mongo collections if schema discovery was disabled and fields containing empty arrays were encountered. 
DX-105466
  * Fixed query failures in right and outer joins with nullable fields. 
DX-106831, DX-100855
  * Fixed an issue with runtime filters on `DECIMAL` columns incorrectly filtering out values. 
DX-111953
  * Fixed an issue where a false condition with aggregate functions was returning non-empty results. 
DX-110651


#### Helm Chart (3.1.7)​")
  * Enabled automated backups of the Dremio Enterprise Catalog metadata stored in MongoDB. Users can back up their catalog information without downtime, enabling data resiliency from system failures. 
DX-104782


## 26.0.8 (October 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Improved upgrade performance when many Reflections or infinite split metadata entries are present.
DX-109388
  * Fixed an issue where the main coordinator failed to initialize already-running engines after a restart, preventing queries from accessing sources. 
DX-108628


#### SQL​
  * Fixed a divide by zero error that occurred during push project pass join optimization. 
DX-108367
  * Fixed an issue where a table created in an Iceberg REST catalog via a `CREATE TABLE AS` statement would appear unpartitioned even though a `PARTITION BY` statement was included in the query. 
DX-109038
  * Fixed an issue where `MERGE INTO` queries could unexpectedly remove records from an Iceberg table if the source table was backed by a JDBC source. 
DX-106895
  * Fixed a issue where queries with a `SORT` operator took too long to successfully cancel. 
DX-105511
  * Resolved an issue where queries could return incorrect results when a disjunction (`OR`) contained multiple conjunctions (`AND` groups) with a superset relationship. 
DX-109105


#### Helm Chart (3.1.6)​")
  * Updated container dependencies to eliminate numerous CVEs identified in system libraries that were not exploitable as the affected libraries were either unused by the operating system or not accessible to the application layer. 
DX-110151


## 26.0.7 (October 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed an issue where backups would fail with a "checksum error" after a backup was restored. 
DX-102352
  * Improved performance of metadata refresh operations on Parquet datasets by eliminating redundant S3 API calls. 
DX-106894
  * Fixed an out-of-memory error that occurred when partition buffers were not released after processing, causing queries to exceed memory limits. 
DX-107239
  * Added the following metadata fields for Workload Management (WLM): `rule_name`, `rule_content` and `rule_action` to `queries.json`, `sys.jobs`, and `sys.jobs_recent`. 
DX-108263


## 26.0.6 (September 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Updated the Snowflake JDBC driver to version 3.26.1 to fix an issue where queries returning large result sets (2000+ rows) would fail with "No trusted certificate found" errors in Kubernetes deployments. 
DX-107880
  * Fixed an issue with the MongoDB plugin where, if Dremio started up and couldn't reach a previously configured MongoDB source, a connection resource leak could occur, often leading to high resource usage. 
DX-107034
  * Eliminated a PDFS broadcast storm from the coordinators to all executors when executing queries such as `ALTER TABLE... REFRESH DATASET` if the query results were stored in PDFS. This enhancement particularly benefits enterprise environments with multiple query execution engines running frequent `ALTER` operations. 
DX-106936
  * Hovering over an error icon on the Pod Activity page in the Dremio console now displays the error message as a tooltip.
DX-108128


#### Helm Chart (3.1.4)​")
  * Updated container dependencies to eliminate numerous CVEs identified in system libraries that were not exploitable as the affected libraries were either unused by the operating system or not accessible to the application layer.


## 26.0.5 (September 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed an issue where the `isAdjustToUTC` flag was not preserved when writing `TIMESTAMP` columns to Parquet, ensuring correct time zone handling. 
DX-107677
  * Resolved duplicated "process_start_time_seconds" metric in Prometheus "/metrics" endpoint that could break scrapers. 
DX-105362
  * Updated Netty to version 4.1.126.Final to address security vulnerabilities and incorporate latest fixes. 
DX-107933


## 26.0.4 (September 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Improved query results cleanup in PDFS for queries that run on executors by reducing unnecessary network calls. 
DX-106968
  * Removed the schema parameter from Snowflake source definitions to align with Snowflake's native behavior. 
DX-100555
  * Updated the following libraries to address potential security issues:
    * Netty to 4.1.124 [CVE-2025-55163] 
DX-107243
    * Jetty to 9.4.58 [CVE-2025-5115] 
DX-107401
    * Apache Commons BeanUtils to 1.11.0 [CVE-2025-48734] 
DX-107554


#### APP​
  * Fixed an issue where nested namespaces in Iceberg REST Catalogs, Open Catalogs, Snowflake Open Catalogs, and Unity Catalogs are not visible in the Dremio console. 
DX-104543
  * Preferences will now appear under the Settings for Dremio Community Edition. 
DX-103853


#### SQL​
  * Fixed a bug where window functions like `avg` and `stddev_pop` were returning indeterminate results. 
DX-105597
  * Fixed a performance regression seen in ranking window functions. 
DX-105693


#### Helm Chart (3.1.2)​")
  * Updated container dependencies to eliminate numerous CVEs identified in system libraries that were not exploitable as the affected libraries were either unused by the operating system or not accessible to the application layer.
  * Fixed the `ActiveProcessorCount` calculation when using statically defined engines. 
DX-107901


## 26.0.3 (August 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Fixed an issue in `IcebergDeleteFileAggTableFunction` that caused `equalityId`'s to be `null`, resulting in failures when tables included both position and equality deletes. The function now correctly handles mixed delete file types. 
DX-106012
  * Fixed a `NullPointerException` that could occur when querying a table in [AWS Glue Data Catalog](/data-sources/lakehouse-catalogs/aws-glue-catalog) with an empty `SerDeInfo` field. 
DX-106113
  * Fixed a `NullPointerException` (NPE) encountered in reading [Delta Lake](/developer/data-formats/delta-lake) tables without column mappings that had undergone schema evolution. The NPE occurred when selecting an array column's element using an index. For example, `[0]` or alike. 
DX-105935
  * The `apiCallTimeout` and `apiCallAttemptTimeout` of S3Client instances can now be set in milliseconds with the `fs.s3a.connection.request.timeout` property. 
DX-105694
  * The `apiCallTimeout` and `apiCallAttemptTimeout` of S3AsyncClient instances can now be set in milliseconds with the `fs.s3a.connection.request.timeout` property. 
DX-106360
  * Fixed an issue when a query could not be cancelled under heavy cluster load when the housekeeping thread responsible for handling read task timeouts became unresponsive due to thread starvation. 
DX-105512
  * Prevented expensive function calls from being computed if the log level is not low enough to print the corresponding logs. 
DX-105220
  * Fixed a rare issue where a connection closes due to network flakiness in the middle of a query execution, and if the close connection event comes after the open connection event on a given executor, the executing query can become blocked (until the executor restarts) instead of raising an error due to the connection failure. Queries will now fail with the correct error message instead of becoming blocked. 
DX-105091
  * Fixed a race condition between spilling during memory pressure and writing a [Parquet file](/developer/data-formats/parquet), which led to an `IndexOutOfBoundsException`. 
DX-101016
  * Improved the Dremio engine to handle a large number of expressions efficiently. 
DX-34931
  * Some Dremio releases might get stuck in the process of writing to the results cache. A new configured timeout has been added to the S3 calls. 
DX-106679
  * The feature flag `dremio.s3.enable_s3_v2_client` now works for non-S3 sources that can still access S3 storage, such as AWS Glue Data Catalog, Hive, Iceberg REST Catalog, and Nessie. 
DX-105883


#### APP​
  * Improved the responsiveness of the query cancellation, even in cases of queries with a large number of expressions. 
DX-105803
  * Fixed an issue that caused the Dremio console to become unresponsive. 
DX-104748


#### SQL​
  * Fixed issue when casting a `DECIMAL` from `VARCHAR`, which in some cases, caused a SIGSEGV error if the value was not a number. 
DX-97570


#### Helm Chart (3.1.1)​")
  * Fixed an issue where the OpenSearch cluster delete hook was ignoring the tolerations configuration. 
DX-105759
  * By default, OpenSearch pods will not deploy on the same host nodes to enhance resiliency. 
DX-105709
  * Improved the OpenSearch cluster bootstrap with the following:
    * `opensearch-cluster-bootstrap-0` now has resource limits of 2 CPUs and 4 GB.
    * `opensearch-cluster-bootstrap-0` now has `nodeSelectors` defined in `values.opensearch.bootstrap.nodeSelectors`. If not present, it falls back to `values.opensearch.nodeSelectors`, as will the `values.nodeSelectors` properties.
    * `opensearch-cluster-bootstrap-0` now has `tolerations` defined in `values.opensearch.bootstrap.tolerations`. If not present, it falls back to `values.opensearch.tolerations` and `values.tolerations`, as will the `values.tolerations` properties. 
DX-105380


## 26.0.2 (July 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * Deploying Dremio to Kubernetes with OpenShift is now supported and documented in [Deploy Dremio on Kubernetes](/deploy-dremio/deploy-on-kubernetes) and [Configuring Your Values](/deploy-dremio/configuring-kubernetes), which now include OpenShift-specific instructions.
  * Fixed a rare issue with Iceberg Data Manipulation Language (DML) queries writing null results on some rows that shouldn't, which happened with DML statements that contained a target and source table. This issue occurred on Merge on Read (MoR) and Copy on Write (CoW) DML configurations. 
DX-105013
  * Fixed an issue that caused certain queries to fail when the `HASH_JOIN` operator spilled to disk and triggered an `IndexOutOfBoundsException`. 
DX-104899
  * Introduced the following changes to the Helm chart:
    * In the `catalog` section, the field `extraEnv` has been renamed to `extraEnvs` for consistency.
    * In the `catalog` section, the following can now be defined: 
      * Extra init containers.
      * Extra JVM startup parameters.
    * In the `catalogservices` section, the following can now be defined: 
      * Extra environment variables.
      * Extra volumes.
      * Extra volume mounts.
      * Extra init containers.
      * Extra JVM startup parameters. 
DX-104874
  * Fixed a bug in the Reflection refresh retry policy where retrying a Reflection refresh might fail during a Dremio upgrade. 
DX-104756
  * Added an upgrade task to fix old user-defined functions (UDFs) that might have a null full path. After upgrading to this new version, all UDFs should have a valid full path. 
DX-104745
  * S3 clients from Version 2 of the AWS SDK for Java were introduced to start the removal of Version 1 clients from S3FileSystem. Version 2 clients are now the default. 
DX-99720
  * Fixed issues related to the `READ METADATA` privilege so that it follows the correct privilege inheritance chain as documented in [Privileges](/security/rbac/privileges). 
DX-104406
  * Fixed an issue for scripts created through the Dremio API so that they don't have their content overwritten when opened in the SQL editor. 
DX-104226
  * Fixed an issue where Dremio incorrectly applied equality deletes on Iceberg tables, which caused incomplete results to be returned. 
DX-104150
  * Fixed an issue where users may see errors with the message "Ref count should be &gt;= 1 for accessing the ArrowBuf" in their logs due to background Autonomous Reflections jobs. 
DX-104027
  * In the Helm charts, the OpenSearch init helper now uses the `busybox` image on Quay.io. 
DX-104213
  * In the Helm charts, the global storage class setting now applies to the `dremio-master-0` log volume. 
DX-103011
  * In the Helm charts, the global storage class now applies to MongoDB instances as well. 
DX-104009
  * Added Open Catalog privileges to the `sys.privileges` system table. 
DX-102814
  * Added the `delete-source` command to the `dremio-admin` CLI to delete a source. 
DX-102752
  * Reduced unnecessary computation by tuning the target file sizes for the internal `OPTIMIZE` jobs that run against Reflections. 
DX-102747
  * Fixed a rare case where the Reflection manager could cause incrementally refreshed Reflections to continuously fail to refresh until the materialization expired or base tables had new data. 
DX-102474
  * Added the following logging information:
    * Logging for abnormalities in the query lifecycle: 
      1. Logs at most once those `queryIds` for which the execution resource allocation took too long, reaching or exceeding a threshold time (currently set to 1 hour).
      2. Logs at least once those `queryIds` that are still waiting for execution resource allocation, reaching or exceeding a threshold time (currently set to 1 hour)
      3. Log at least once those queries that are already allocated execution resources but have been running for too long, reaching or exceeding a threshold time (currently set to 1 hour). Also logs the active duration in this case.
      4. For both 1 and 2 above, the `queryId` (ZK lease path binding) is also logged for tracking purposes.
      5. All the above logging is done repeatedly every 30 minutes, if and only if such queries exist at the time of logging, not otherwise. Please note that the detailed log shall be printed in the `server.json` log file on the coordinators.
    * Logging the IPs of the executor nodes for observability purposes whenever a cancel query is triggered from the coordinator. 
DX-102078
  * Reduced the coordinator heap usage for planning queries with Reflections anchored on complex views. 
DX-98021
  * Fixed an issue where new Autonomous Aggregation Reflections were incorrectly generated as duplicates of existing ones for similar queries. 
DX-98013
  * Fixed an issue where some Reflections were not accelerating SQL client queries but were accelerating Dremio console queries. 
DX-97572
  * Fixed an issue where Reflections based on views containing deeply nested expressions might not be able to be used even if the refresh job succeeded. 
DX-93284


#### APP​
  * Fixed a bug where the search was not displaying in the join wizard. 
DX-105286
  * Fixed an issue in the Monitor page that no longer shows a negative number for jobs accelerated by Manual Reflections for dates older than the current date. 
DX-104634
  * Fixed an issue where the query duration timer would continue ticking after a query completed. 
DX-105185
  * Users now can add other catalog properties with both credential vending and master storage. 
DX-104511
  * Fixed an issue where closing a temporary tab before it can autosave caused the **This script has been deleted** dialog to appear. 
DX-104441
  * Fixed an issue with the execution of multiple queries when the `sqlrunner.tabs_ui` setting was disabled, which caused only the first query to be executed, and the subsequent queries were not executed. 
DX-104388
  * Renamed "Dremio Catalog" to "Open Catalog" in the Dremio console. 
DX-104125
  * Fixed an issue with view delegation for Open Catalog views where users encountered authorization errors when accessing views without direct `SELECT` privileges on underlying tables. 
DX-102946
  * Prevented saving views with duplicate column names (for example, `SELECT 1 AS col, 2 AS col`) with a validation error to ensure that views will not fail when used in downstream queries (for example, `SELECT * FROM `view``). 
DX-100977
  * Improved the error message to be clear when there is a cycle in a view. 
DX-89182
  * Prevented saving views with duplicate column names (for example, `SELECT 1 AS col, 2 AS col`) with a validation error to ensure that views will not fail when used in downstream queries (for example, `SELECT * FROM `view``). 
DX-100977


#### SQL​
  * Fixed an issue where long-running `INSERT` queries on Iceberg REST tables could hang if vended credentials are used. 
DX-105372
  * Fixed an issue that dramatically slowed down Data Manipulation Language (DML) queries that contained both a target and source table. 
DX-105365
  * Added a `DRY RUN` mode to `VACUUM CATALOG`, which will be able to identify the files to be deleted without taking any action. 
DX-105120
  * Fixed an issue where tables with the same name in different folders would throw an error when added to the include / exclude list for `VACUUM CATALOG` queries. 
DX-103559
  * Fixed an issue where a `SELECT` query was using results cache after a schema change. 
DX-103395


### Known Issues​
  * On Google Cloud Platform with Kubernetes clusters running kernel 6.6.87+, some queries may fail with a `ChannelClosedException`. Since tests on kernel 6.6.72+ do not show the issue, use clusters with kernel 6.6.72+ as a workaround. 
DX-105455


## 26.0.1 (June 2025) Enterprise​
### Improvements and Issues Fixed​
#### General Updates​
  * You can now specify columns for both sorting and partitioning in Reflections when the partitioning scheme uses a transformation. 
DX-103022
  * Updated 
DX-98114
  * You can now set up an Open Catalog with Google Cloud Storage (GCS) using JSON credentials generated from GCS, eliminating the reliance on Google Kubernetes Engine (GKE) credentials with a custom name, which do not work correctly with vended credentials. 
DX-101867
  * The Reflection refresh retry policy is enforced within a 72-hour window. 
DX-101149
  * Resolved an issue with row count estimates in Delta Lake tables that could lead to suboptimal query plans. 
DX-103030
  * Fixed an issue where an `OversizedAllocationException` could occur for collections of variable-length values due to unnecessary data buffer reallocations. 
DX-103035
  * Improved the stability of metadata refresh queries of Parquet datasets in Hive (seen as `IllegalArgumentExceptions` previously). 
DX-56092
  * Improved error message handling when not finding manifest files when reading an Iceberg table. 
DX-92081
  * Fixed time travel on Unity and Snowflake Catalogs by resolving timestamp-based requests via updated snapshot provider logic. 
DX-98200
  * Fixed an `IllegalStateException` for certain queries with rollup aggregations. 
DX-101395
  * Fixed behavior for `VACUUM TABLE` queries to use the properties set instead of the table property defaults. 
DX-102622
  * Fixed a corner case looping problem during query execution of very large queries that caused Dremio log files to grow rapidly and eventually cause disk full situations. 
DX-100920
  * Fixed missing volume mounting for the `dremio-catalog-server-external` pod. 
DX-103733
  * Fixed an issue where a query could fail with a `NoSuchElementException` error. 
DX-101821
  * Fixed an issue related to (background) metadata refresh so that it does not remove shared folders from Dremio’s object store even if they don’t have child datasets. It also does not remove stale folders if the “Remove dataset definitions if underlying data is unavailable” setting is toggled off, i.e., it does not remove stale datasets from Dremio’s object store. 
DX-98837
  * Fixed an issue where duplicate upstream refreshes could happen when refreshing a Reflection that scans the upstream table multiple times. 
DX-102260
  * Fixed an issue where Dremio allowed Delta tables with `minReaderVersion` higher than supported to be promoted and read, which would cause failures on some queries. 
DX-95855
  * "Failed to open file" error messages for Iceberg now reference an input file by the file path's location instead of the object ID. 
DX-102345
  * Fixed a `NullPointerException` (NPE) with handling of unset engine name field that can sometimes leave jobs in a non-terminal state after a coordinator restart. 
DX-101519
  * Fixed a deadlock where sources that are unable to connect to the underlying data source could not be modified or deleted. 
DX-101995
  * Fixed an issue that caused the execution of a script to fail with the "No queries found" error when the user has the `VIEW` privilege. 
DX-102553
  * Fixed an issue in which listing scripts failed with the error "maxClauseCount is set to 1024" when the user has authorization to view a large number of scripts. 
DX-102120
  * Fixed an issue where Delta on Hive was reporting an incorrect row count being used in planning. 
DX-101855
  * Fixed an issue where there were no Reflection partition recommendations for Reflections based on a view. 
DX-103371
  * Error message while running `clustering_information` on a non-clustered table has been updated to be consistent with a non-partitioned table. 
DX-101603
  * Allow users to have more flexibility by creating and storing Kubernetes secrets with custom names for S3 and Azure. 
DX-102523
  * Added validation to check for extrat trailing slashes (`/`) in the default base location specified in Helm values. 
DX-101944
  * Removed the LoadBalancer for the Open Catalog (External) service. 
DX-102658
  * Improved synchronization consistency between Dremio’s stored documents and remote search document index through a soft delete mechanism, which reduces the API calls to the search index when synchronized stored documents are marked as deleted. 
DX-102400
  * Upgraded 
DX-103923
  * Fixed the issue where large case expressions were causing the planner to hang. 
DX-101299
  * Fixed memory leak on the coordinator when queries using Arrow Flight are canceled. 
DX-102833
  * Updates to [Autonomous Reflections](/acceleration/autonomous-reflections) are now shown in the `sys.history.autonomous_reflections` table. 
DX-102535
  * Addressed an issue that could cause runtime filters to be dropped in sparsely populated non-broadcast joins. 
DX-68682


#### APP​
  * When saving an existing view into a new view (Save as View), the owner used to be the owner of the existing view. This fix changed the owner to be the user who created the new view. 
DX-102562
  * Fixed the **Copy** button when hovering the space name on the Datasets page to behave like the **Copy Path** button when hovering the listed items in the space. 
DX-100298
  * Resolved an issue on the Monitoring page where the Y-axis ordering for some charts was improperly ordered. 
DX-100091
  * Resolved an issue on the Monitoring page where the tooltip for some charts was not fully visible or obscured by other elements on the page. 
DX-97606
  * Fixed an issue on the Preferences page that didn't allow enabling Autonomous Reflections with YARN deployments. 
DX-102767
  * Fixed an issue where clicking on a script in the search results was not opening the script. 
DX-99034
  * Clicking on a Reflection in search results now opens the Reflections dialog in advanced mode. 
DX-102084
  * Fixed an issue while hovering over folders in the **Data** panel of the SQL Runner that showed "Dataset not found.", and now correctly displays the resource. 
DX-102548
  * Fixed an issue where wiki content was not showing for folders in search results. 
DX-101117
  * Fixed an issue where the sources on the Lineage tab would be orphaned if they were supposed to be connected to a dataset marked "Unknown". 
DX-102551
  * Fixed an issue where the **CPU by node** graph in [Resources](/admin/monitoring/) may be missing some colors if there are more than 8 nodes displayed. 
DX-100593
  * Fixed an issue in which the **Save as** option for views returned an error when the dataset version history for the view had been corrupted. 
DX-101506
  * Fixed an issue on the Lineage tab when right-clicking on a lineage node would navigate the lineage graph. 
DX-101878
  * If, while [viewing engine details](/deploy-dremio/managing-engines-kubernetes), that engine is deleted, it now displays a message stating that the engine no longer exists instead of showing an error. 
DX-103313
  * Fixed a bug in the new lineage UI that causes the source not to render when the user only has inherited `READ_METADATA` permission from the source. 
DX-103914
  * The `DROP FOLDER` SQL command did not respect the context set in the SQL Runner in the Dremio console. 
DX-102156
  * Fixed an issue that caused some semantic search results not to show all the way up to the source. 
DX-102144
&gt;
  * Fixed an issue in the SQL Runner, where users reached the limit of 1000 scripts and couldn't create a new tab in Scripts due to temporary scripts. 
DX-103534


#### SQL​
  * Optimized `SELECT COUNT(*)` to use Iceberg metadata instead of scanning the entire Iceberg table to return the total number of rows. 
DX-101826
  * Optimized `MIN`/`MAX` aggregations on Iceberg tables to read from column metadata when possible. 
DX-100737
  * Improved support for displaying query results containing `ARRAY<MAP<string,string>>` complex types in the Dremio console. Rewrote the `View.getField` to correctly handle nested types, ensuring accurate representation of complex schemas. 
DX-92117
  * Fixed an issue with Reflections not matching hash when the query contains an `ORDER BY` expression not in the `SELECT` list. 
DX-102174
  * Fixed an issue that could cause a NullPointerException (NPE) when querying `INFORMATION_SCHEMA.SCHEMATA`. 
DX-103489
  * Fixed an issue where non-admin users did not receive correct results for Open Catalog entities when querying the [Information Schema](/reference/sql/information-schema). 
DX-104175
  * Fixed an issue where adding more than one item to the `EXCLUDE` list, without specifying the reference, for the `VACUUM CATALOG` SQL command would show a syntax error in the Dremio console. 
DX-102938
  * Fixed an issue with `JOIN` with the `USING` clause failing with the error "Failure finding function: coalesce". 
DX-97765
  * Resolved an issue when using `LEAD` or `LAG` SQL functions with an `OFFSET` parameter (offset 1 as well as offset 2+) that could cause incorrect results. 
DX-102591
  * Added an option to whitelist tables for the `VACUUM CATALOG` SQL command using the `INCLUDE` option. 
DX-102711
  * Fixed an issue in the `VACUUM CATALOG` SQL command where live manifest files with the `s3a` scheme were incorrectly deleted. 
DX-103051
  * Added support for creating Reflections on empty tables based on v3 Iceberg Table specification, where snapshot identifiers may be null or -1. 
DX-103082
  * Fixed an issue with `REFRESH METADATA FOR PARTITIONS` for transactional Hive tables. 
DX-102376
  * Fixed an issue where queries against tables with equality deletes could fail if the fields used in the deletes had capital letters. 
DX-103866
  * Fixed an issue where a query containing `ORDER BY ... LIMIT ...` failed when using more than 500 million in the `LIMIT` clause. 
DX-103907
  * Added the `INCLUDE` option to the [`VACUUM CATALOG`](/reference/sql/commands/nessie/vacuum-catalog) SQL command to target specific tables for vacuuming. 
DX-102840


## 26.0.0 (April 2025)​")
### What's New​
#### General Updates​
  * [Autonomous Reflections](/acceleration/autonomous-reflections) automatically creates and manages Reflections, accelerating query performance and optimizing data accessibility. This enables users to derive faster insights, scale effortlessly, and make data-driven decisions. 
DX-89558
  * Dremio now supports [results cache](/acceleration) management and eviction without having to rely on the time-to-live (TTL) policy of the cache storage. The results are stored in a distributed storage configured via `dremio.conf`. If you are upgrading from 25.1, you must manually remove any existing TTL policy configured. Queries accelerated by the results cache now display a lightning bolt icon and indicate a cache hit on the Job Details page. 
DX-101298, DX-94850
  * Dremio supports the creation, modification, introspection, and deletion of Kubernetes-based engines via the Dremio console or the Engine Management API. Engines are T-shirt sized and can be set up to automatically start and stop, i.e., they can automatically start up as needed by queries and stop after an idle time without queries. Dremio allows setting guardrails and timeouts for the engine lifecycle via the Dremio console or the Engine Management API. For more details, see [Managing Engines](/deploy-dremio/managing-engines-kubernetes). 
DX-97061
  * Dremio clusters on Kubernetes will automatically transmit [telemetry](/admin/service-telemetry-kubernetes) data back to Dremio's corporate endpoint. This telemetry is comprised of Prometheus metrics, which provide valuable insights into system performance and health, enabling Dremio to enhance product stability and support. 
DX-97022
  * Dremio now deploys with a built-in Iceberg catalog, powered by [Open Catalog](/data-sources/open-catalog). 
DX-96982, DX-96991, DX-96989, DX-96988, DX-96907, DX-97113, DX-97955, DX-100986, DX-101757
  * You can now use [clustering](/load-data/clustering) as a straightforward and effective alternative to partitioning. Clustering simplifies processes and helps ensure fast queries on Apache Iceberg tables. 
DX-92001
  * [Parameterized prepared statements](/client-applications/drivers/arrow-flight-sql-jdbc-driver) are supported for Arrow Flight SQL JDBC to prevent SQL injection and to enable users to leverage client tools that support parameterized prepared statements. This update supports `SELECT` statements. 
DX-10013, DX-89042
  * Dremio now supports the OAuth2.0 token exchange endpoint, which allows client applications to set up external OAuth [authentication](/security/authentication) for ODBC, JDBC, Arrow Flight, and REST API requests. 
DX-95730
  * Dremio now supports a generic [Iceberg REST Catalog](/data-sources/lakehouse-catalogs/iceberg-rest-catalog) as a source, which includes vended credentials. This would allow you to connect to Iceberg catalogs over the Iceberg REST API. This source is located within the **Lakehouse Catalogs**. 
DX-102149, DX-98996, DX-98713, DX-100065
  * The Polaris Catalog (Preview) source has been renamed to [Snowflake Open Catalog](/data-sources/lakehouse-catalogs/snowflake-open). This rename should happen automatically after upgrading to Dremio 26+. With this source connector, you can connect and read from internal and external Snowflake Open Catalogs and write to internal Snowflake Open Catalogs. All interaction with the underlying Iceberg tables is done via vended credentials resulting is a more secure solution. 
DX-96947, DX-97271, DX-96947, DX-96951, DX-101757
  * Users can now connect to and read from [Unity Catalog](/data-sources/lakehouse-catalogs/unity). All interaction with the underlying Delta tables is done via UniForm metadata. Access to the underlying storage layer is done via vended credentials. 
DX-96951
  * Dremio supports [SAP HANA](/data-sources/databases/sap-hana) as a source. 
DX-93897, DX-47285
  * Dremio supports [Google BigQuery](/data-sources/databases/google-bigquery) as a source. 
DX-93897


#### APP​
  * Added a new Engines page in the Dremio console for [managing engines and executors in Kubernetes deployments](/deploy-dremio/managing-engines-kubernetes) where users can create, set an idle time, and easily delete engines. 
DX-99357
  * The [Lineage](/data-products/govern/lineage) tab has been updated to give a more modern and improved user experience, allowing users to customize the layers of information shown on the lineage nodes. Lineage is supported for the Open Catalog (powered by Polaris), Unity, and all Iceberg REST Catalogs. 
DX-96716, DX-97045, DX-97065
  * Quickly discover your data using the AI-enabled [semantic search](/data-products/discover/semantic-search). Object names, wikis, labels, column names, and other metadata is used to serve the most relevant datasets and entities. This capability is only supported for Kubernetes deployments. 
DX-96145, DX-93754, DX-97047


#### SQL​
  * Added support for `COPY INTO` transformations with CSV input type, extended `COPY INTO` syntax to enable simple [transformations during a data load](/developer/data-formats/apache-iceberg/copy-into-transformations), and added `EMPTY_AS_NULL` functionality with `COPY INTO` transformations. Note: `EMPTY_AS_NULL` is evaluated only on the CSV input data, not on any function result or subresult. 
DX-96995, DX-96064, DX-90263


### Improvements and Issues Fixed​
#### General Updates​
  * Improved the performance of AWS Glue Data Catalog table reads. 
DX-96290
  * Following Microsoft's official retirement of Azure Data Lake Storage Gen1 last year (Feb 2024), Dremio has officially removed the Azure Data Lake Storage Gen1 Storage source from its product. 
DX-88437, DX-88433, DX-86550
  * Dremio supports [Azure Storage](/data-sources/object/azure-storage) container writes with the Azure Blob File System (ABFSS) driver. Iceberg metadata on Azure now defaults to the `abfss://` format instead of `wasbs://`. 
DX-66589, DX-99125
  * You can now configure the managed identity that Dremio needs to use for Azure key vault authentication. 
DX-94964
  * Fixed an issue that could prevent async Azure reads due to a time zone issue in locations east of Greenwich Mean Time (GMT). 
DX-93739
  * The default `paths.dist` value in `dremio.conf` has been updated from the deprecated PDFs to a local filesystem path. The `paths.dist` value must be updated to a Dremio-supported distributed store in production or multi-node situations. Dremio will now be fully functional for single-node demo installs. 
DX-89368, DX-91559
  * Upgraded AWS SDK to version 2.18.0+ along with related dependency updates and compatibility adjustments. 
DX-60924
  * Changed the default from a 32 KB field size [limit](/help-support/limits) to a 16 MB row width limit, allowing users to interact with larger datasets without having to change support keys. 
DX-89764, DX-94238
  * Fixed an issue where high setup times could be seen when running queries against Iceberg tables. 
DX-100856
  * Fixed an issue where merge-on-read DML operations could fail on Apache Iceberg tables with partition transforms. 
DX-99569
  * When writing Parquet files to Iceberg tables:
    * `store.parquet.block-size` and `dremio.iceberg.optimize.target_file_size_mb` are now ignored.
    * The `write.parquet.row-group-size-bytes` property now controls row group and file size, with a default value of 128 MB instead of 256 MB.
    * `write.metadata.metrics.max-inferred-column-defaults` and `write.metadata.metrics.default` now control file-level metrics in Iceberg metadata. The `write.metadata.metrics.max-inferred-column-defaults` property is now 100 instead of unlimited.
    * The `write.metadata.metrics.default` mode is now `truncate(16)` instead of `full`.
    * The default value for `write.parquet.page-row-limit` is now 20,000 instead of unlimited.
    * The `write.parquet.page-size-bytes` property is now used to specify the Parquet data page size of newly created Parquet files in a table instead of the `store.parquet.page-size` support option and the default value has changed from 1 KB to 1 MB.
    * The `write.parquet.dict-size-bytes` property is now used to specify the Parquet dictionary page size of newly created Parquet files in a table instead of the `store.parquet.dictionary.page-size` support option. The default value has changed from 1 MB to 2 MB.
    * The `write.parquet.compression-codec` and `write.parquet.compression-level` properties are now used to specify the Parquet compression codec/level for newly created Parquet files in a table instead of the `store.parquet.compression` and `store.parquet.compression.zstd.level` support options. The default value of the codec has changed from `snappy` to `zstd`. The default value of the level is up to the codec library.
    * The `compatibility.snapshot-id-inheritance.enabled` property is no longer written by default but could be used for v1 Iceberg tables for backward compatibility reasons.
    * Dremio may write multiple row groups into Parquet files according to the Iceberg table `properties write.target-file-size-bytes` and `write.parquet.row-group-size-bytes`. 
DX-99417
DX-99441
DX-99743
DX-98865
DX-98550
DX-97618
DX-50828
DX-101321
  * Fixed an issue where some correlated subqueries led to a "Cannot convert RexNode to equivalent Dremio expression" error message. 
DX-58073
  * Fixed an issue where updating the source caused rerunning a query to fail with a "Source X was updated, and the given configuration has older version (current: y, given: z)" error message. 
DX-69486
  * Fixed an issue that could cause an "Unable to find the reference field" error during query planning due to Common Subexpression Elimination (CSE). 
DX-90660
  * Fixed an issue where a query with window functions used with non-nullable decimal columns fails with a "Schema does not match expected schema" error message. 
DX-102023
  * Fixed a slow resource leak on the coordinator that can slow down queries and fill the heap memory for idle Workload Management (WLM) queues that are tied to engines. The leak is proportional to the number of idling WLM queues and may fix itself when a query is submitted to those queues. 
DX-88418
  * Fixed an issue where queries using Reflections failed or referenced stale materializations. 
DX-100896
  * Reflection manager now starts to collect the duration for every refresh job:
    * Fixed the miscalculation of the `lastRefreshDuration` field in the system materializations table
    * Enhanced the Reflection refresh retry policy with a dynamic interval where long-running refresh jobs and a small number of maximum retries are better handled 
DX-101134
  * Fixed an issue where we could fail to write a generated Reflection score due to concurrent modification exception. 
DX-100983
  * Enhanced default raw Reflection matching to include query tree hashes so that more SQL queries can match without direct view references. 
DX-64652
  * Fixed an issue where query phase timeouts would not impact Reflection matching. 
DX-98080
  * Fixed an issue where, in rare cases, the retry policy for Reflection refreshes would not exponentially back off. 
DX-99314
  * Reduced the jobs metadata size by no longer persisting the Reflection matching plans into `REFRESH REFLECTION` jobs. 
DX-98022
  * Fixed an issue where `Reflection REFRESH` jobs could fail for Reflections involving joins in the query plan if field-based incremental refresh was configured on the underlying datasets. These Reflection refreshes will now succeed using full refreshes. 
DX-97085
  * Enabled Reflections for cases when there is an equivalent row and column access control (RCAC) filter on all children of a view that is the union of two or more datasets. 
DX-95563
  * Fixed an issue that could cause garbage collection logs to not be accessible. 
DX-98240
  * Fixed a `NullPointerException` that could occur during a metadata refresh due to closing a filesystem object already evicted from the cache. 
DX-88625
  * Reduced noise in the logs generated when reading data from Parquet files by changing the log level of certain messages from `WARNING` to `DEBUG`. 
DX-101258
  * Changed automated backup not to reuse a backup destination folder. On every backup, a new folder with the pattern ``distStore`/backups/dremio_backup_`timestamp`-`dremio_version`` is now created. 
DX-95898
  * Incompatible runtime filters are now ignored so as to avoid an `UnsupportedOperationException` while setting up Parquet readers. 
DX-90910
  * Updated Apache Arrow to 18.1. 
DX-96942
  * Fixed an issue that could occur when a routing rule with a `query_label()` condition would not work as expected for queries triggered using Arrow Flight client applications. 
DX-99808
  * When the results cache is enabled, certain ODBC and JDBC clients might receive an error when running a query involving complex types if the results for that query had been previously cached by a newer ODBC or JDBC driver. 
DX-100448
  * You can now update Sample Source and SampleDB source settings with the necessary permissions. 
DX-94810
  * Improved the planning time in the filter pushdown phase for a query with too many joins. 
DX-96044
  * Reduced coordinator memory footprint due to interim query telemetry updates, thereby improving reliability. There will be a slight increase (~2MB per query) in transient disk space as these interim updates are now stored on disk. This additional storage space will be freed once the query finishes. 
DX-90141
  * Fixed an issue that could cause higher resource utilization on the coordinators due to the incorrect scheduling of a background task that deletes old jobs. 
DX-95235
  * Updated the Snowflake driver to 3.19.0 to resolve 
DX-92315
  * When creating a new PAT, Dremio will read the initial value from the `auth.personal-access-token.max_lifetime_days` support key. 
DX-99097
  * Updated the following libraries to address potential security issues:
    * Aircompressor from 0.10 to 0.27 [CVE-2024-36114] 
DX-96853
    * Apache Avro library [CVE-2024-47561] 
DX-99132
    * Apache HBase to version 2.6.0 [CVE-2023-44487] 
DX-96283
    * AsyncHttpClient to 3.0.1 [CVE-2024-53990] 
DX-98578
    * Avro from 1.11.3 to 1.11.4 within Dremio's packaged version of Hive [CVE-2024-47561] 
DX-96442
    * Elasticsearch client library to 8.14.2 and removed support of clusters older than Elasticsearch version 7 
DX-100797
    * commons-configuration to version 2.11.0 [CVE-2024-29131] 
DX-96821
    * jaeger-client library version 1.8.1 [CVE-2020-13949] 
DX-96096
  * Disabled all `TRACE` web requests, which now return `405(NOT_ALLOWED)` error codes. 
DX-97052, DX-100653
  * Fixed an issue where a duplicated table schema could be written to its metadata file. 
DX-97502
  * Fixed a filter pushdown issue that could cause a query to run slowly or return incorrect results. 
DX-97512, DX-97880
  * Fixed an issue with a permanent query slot loss in multi-coordinator setups that could gradually lose query concurrency slots on Workload Management (WLM) queues at very high loads when a client application pushes more queries to a particular WLM queue than the configured concurrency, causing the client application to time out and close its connection. Before the fix, restarting the coordinators was the only way to fix this issue. 
DX-98355
  * Removed legacy support for pseudo-distributed file system (PDFS) nodes and non-Iceberg Reflection storage. 
DX-60382
  * Warnings about schema being out of date are no longer visible for views in Dremio. 
DX-101973
  * Fixed a defect where we could get wrong data in a Reflection when an extremely large amount of data files are present. 
DX-101552
  * Join keys over 128 KB are now handled correctly. 
DX-99636
  * Removed support for MapR Hadoop distributions. 
DX-99456, DX-99455
  * Fixed an issue where excessive memory usage may occur when executing queries containing `UNION ALLs` or when executing highly parallelized queries. 
DX-97947
  * Adjusted metadata collection methods to reduce the load of queries to a MongoDB instance. 
DX-85654
  * Removed the following support keys:
    * `Reflection.manager.skip_drop_table_job_for_incremental_refresh`
DX-90480
    * `Reflection.manager.refresh_schedule_policy.enabled`
DX-92633
    * `exec.operator.aggregate.vectorize.use_spilling_operator`
DX-96210
    * `dremio.jobs.new.ui`
DX-97516
  * Increased the default heap memory on executor nodes from 8 GB to 12 GB when memory is more than 100 GB to avoid query failures due to running out of heap. 
DX-96441
  * Updated Hadoop version used with Azure paths to use Dremio's Hadoop 3.3.6 version. 
DX-96228
  * Fixed an array index out of bound issue with query planning for views that do not project `ORDER BY` columns. 
DX-99095
  * The maximum number of max Reflection refresh retry attempts is no longer user configurable. 
DX-98535
  * Reduced the size of query profiles by removing serialized logical plans. Improves planner performance and reduces query profile footprint. 
DX-98491
  * Improved user experience by minimizing the time during which no recommendations are available. 
DX-98299
  * Improved error handling when cleaning up jobs. 
DX-95516
  * Fixed a rare issue where certain completed jobs were not cleaned up. 
DX-97429
  * Fixed a `NullPointerException` (NPE) that caused the cleanup of results to fail for some jobs. This issue also prevented some abandoned jobs from being terminated. 
DX-99736, DX-104173


#### APP​
  * Removed **Any** as an option from the engine selector in the Queues tab because it bypassed engine routing, sending queries to run on all executors across all engines and causing unpredictable behavior. This also prevented consistent engine scaling; if all engines were off, it was unclear which should scale up. For queues previously set to **Any** , the value will now be reassigned to a random available engine and remain fixed to it. If no engine is available, an error is returned, and you must update the queue. 
DX-100443
  * Implemented new look and feel for logging in to the Dremio console. 
DX-101440, DX-101647
  * Fixed an issue where a benign error would be logged with a message like "FileSystem is closed!" when shutting down Dremio. 
DX-91951
  * Users with `MODIFY` privileges can now access source settings in the Dremio console without getting stuck in a permanent loading state. 
DX-96544
  * Deprecated and removed previous job pages. 
DX-97516
  * Acceleration profile now shows full stack trace of the error when verbose profile is enabled. 
DX-101247
  * Removed **Acceleration Settings** on the Reflections page. 
DX-98300
  * Icons indicating that a column is Partitioned / Sorted are now visible in the Details panel and Details tab on the Datasets page. Also, the same icons will be visible in the Data panel without having to hover on a given column. 
DX-99302
  * Fixed an issue when using a backslash in the search box for searching for Reflections on the Reflections page. 
DX-95530
  * Fixed an issue where a Reflection could have an empty Reflection score on the Reflections page. 
DX-100774, DX-99208, DX-99040, DX-99129
  * The Recommended Joins tab in the SQL Runner is deprecated. Starting Dremio 26.0.0, all joins need to be created manually. 
DX-101102, DX-96716
  * Switching between query tabs in the SQL Runner will no longer cause the duration timer to reset. 
DX-99577
  * The script lookup in the All/Mine tabs on the Scripts panel in the SQL Runner was previously case-sensitive. Now, the script lookup is case insensitive. 
DX-48612
  * Navigating to a dataset with dots in the name on the History tab of the Datasets page will now work as expected. History is no longer shown in the SQL Runner for views or scripts. 
DX-98406, DX-98252, DX-98332
  * Fixed an issue that could prevent users from being able to run or preview a query in the SQL Runner after viewing the History tab for the query on the Datasets page. 
DX-96139
  * Fixed an issue where clicking on a script in the search results on the Datasets page does not open that script in the SQL Runner. 
DX-98620
  * Navigating to the wiki of a dataset from the SQL Runner will no longer cause **(edited)** to appear next to the dataset name. 
DX-96470
  * Tables in the wiki view were previously cut off. You should now be able to see the full width of the table. 
DX-97221
  * Added a new **Rerun query on download** option to the Preferences page in the Dremio console. When enabled, Dremio reruns the query before downloading the results. 
DX-101308


#### SQL​
  * The [`SHOW TBLPROPERTIES`](/reference/sql/commands/show-table-properties) SQL command will now return the format version for Iceberg tables. 
DX-87471
  * The vacuum log `vacuum.json` file will now capture detailed information about scanning and deletion through `VACUUM TABLE` and `VACUUM CATALOG` SQL commands. 
DX-99408
  * Fixed an issue that could cause [`VACCUM CATALOG`](/reference/sql/commands/nessie/vacuum-catalog) to use synchronous readers for metadata JSON files, which might cause memory leak issues. Now `VACUUM CATALOG` uses asynchronous readers instead. 
DX-98605
  * Addressed an issue where the `NESTED_LOOP_JOIN` operator produced incorrect results in certain cases when used with a `HASH_JOIN` or a `PROJECT` operator containing a computed column. 
DX-97524
  * `EXECUTE` statements can now utilize the plan cache entry created by the prepared statements. 
DX-100780 
  * Improved performance of the varchar `IN` filter evaluation. 
DX-92584
  * Fixed an issue preventing access control policies to be added to Iceberg REST catalog tables using `ALTER TABLE` command. 
DX-100489
  * Queries that use `TABLESAMPLE` now throw a meaningful error message because they are not supported in Dremio. 
DX-48838
  * Fixed an issue that could cause a query with a `LIMIT` clause to not be accelerated due to miscalculated row adjustments. 
DX-96246
  * Improved implicit casting for some operands. As an example, `SUBSTRING` can cast integer input as characters, so `SELECT SUBSTRING(42, 1)` successfully returns `42`. 
DX-89554
  * Fixed an issue in some cases that could prevent runtime filtering if the `CONVERT_FROM` SQL function was used in the query. 
DX-93179
  * Fixed an issue that could cause an OutOfMemoryException (OOM) to be ignored in a `HASH_JOIN` operator, which is now explicitly thrown to prevent unexpected behavior with the `HASH_JOIN`. 
DX-94029
  * Fixed an issue in some cases where filters on the date column with `COALESCE` were preventing the partition filter from being pushed down. 
DX-97665
  * Fixed an issue where decorrelating a subquery with an `EXISTS` statement and an empty `GROUP BY` clause could result in incorrect data. 
DX-96652, DX-96946
  * Fixed an issue with zero milliseconds that could occur when using the `CURRENT_TIME` function. 
99210
  * Fixed an issue where a schema error could be thrown if a user ran an [`INSERT`](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-insert) SQL command with a subset of the columns in an Iceberg table. 
DX-92442
  * Fixed a nested [user-defined function](/reference/sql/commands/functions) issue where a UDF was unable to call other UDFs. 
DX-95612
  * Fixed a issue that could occur when you request Reflection recommendations for a specific job and the query you want to accelerate contains a subquery. 
DX-97274
  * Resolved an issue for [`SELECT`](/reference/sql/commands) queries when using the [`LAG`](/reference/sql/sql-functions) SQL function with an `OFFSET` parameter that could cause incorrect results. 
DX-99536
  * Fixed an issue for `SELECT` queries when using `LIMIT` and `OFFSET` for a value greater than the maximum value for a signed integer. Now `LIMIT` and `OFFSET` cannot exceed the maximum integer value. 
DX-97963, DX-18632
  * You can now use columns with a `VARCHAR` data type in a `SELECT` subquery of a `SELECT` statement. 
DX-83189
  * Fixed the [`PARSE_URL`](/reference/sql/sql-functions) SQL function to handle URLs longer than 256 characters. 
DX-100691
  * Fixed an issue that could occur with class compilation when using a literal value in a [window function](/reference/sql/sql-functions). 
DX-100466
  * Fixed a stack overflow issue with queries containing a long list of constants in a `WHERE IN` clause. 
DX-98414
  * Queries now scan only the required fields from complex structure type columns to prevent errors in query execution. 
DX-93643
  * Added an explicit exception for the unsupported `IGNORE NULLS` option in window functions. 
DX-100400
  * Fixed a bug where queries using `ROW` types may fail with the error "DremioSqlValidator is a dummy SqlValidator to adapt to upstream API changes". 
DX-100331
  * Fixed an issue that could cause a `CompileException` error when using a large number of columns in an `ORDER BY` clause. 
DX-99689
  * `OPTIMIZE TABLE` now will honor Iceberg table properties like `write.target-file-size-bytes`. Also, the default has changed to 512 MB to align with Iceberg's default and increase Dremio's interoperability with other engines. In addition, `OPTIMIZE TABLE` will honor the following table properties:
    * `dremio.iceberg.optimize.minimal_file_size_mb`
    * `dremio.iceberg.optimize.maximal_file_size_mb`
    * `dremio.iceberg.optimize.minimal_input_files`


DX-99413, DX-100951
### Breaking Changes​
  * Enforced Reflection count guardrail so new Reflections cannot be created if there are already 500 or more active Reflections. 
DX-94627
  * Because the Arrow caching feature for Reflections has been deprecated, any remaining references to Arrow cache for Reflections have been removed, such as in the `sys.reflections` system table and APIs. 
DX-53451
  * Deprecated `COMPACTION` and `LOAD MATERIALIZATION` for Reflection jobs because they optimize non-Iceberg materialization and Dremio now supports only Iceberg materialization. The [`sys.materializations`](/reference/sql/system-tables/materializations) table now only shows `REFRESH REFLECTION` jobs. `COMPACT` and `LOAD` are no longer considered reserved keywords for SQL queries. 
DX-64438


### Known Issues​
  * [Open Catalog](/security/rbac/privileges) does not inherit role-based access control (RBAC) privileges that have been granted at the system level. Instead, you need to grant RBAC privileges directly on the Open Catalog. 
DX-101932
  * You cannot drop tables and views through the Dremio console for Open Catalog, Snowflake Open Catalog, and Iceberg REST Catalog sources. Instead, you must use the [`DROP TABLE`](/reference/sql/commands/tables) or [`DROP VIEW`](/reference/sql/commands/drop-view) SQL commands. 
DX-102380
  * If a user only has the `USAGE` and `SELECT` privileges on a table and tries to run an `INSERT` operation on that table, Dremio currently returns a false positive error message that says the table has been updated, but nothing actually happens. 
DX-102429
  * S3-compatible storage does not support credential vending as an authentication method. You must use master storage credentials to authenticate access to S3-compatible storage. 
DX-101841
  * Users without the `ADMIN` role may see the lineage as "Unknown" for datasets in the Open Catalog, regardless of their privileges. This issue will be addressed in a future release. 
DX-104821


Was this page helpful?
[Previous Release Notes](/release-notes)[Next 25.x Release Notes](/release-notes/version-250-release)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Release Notes](/release-notes)[Next 25.x Release Notes](/release-notes/version-250-release)
!
