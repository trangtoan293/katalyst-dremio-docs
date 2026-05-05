---
url: /release-notes/unsupported-releases/version-1900-release-notes
slug: /release-notes/unsupported-releases/version-1900-release-notes
title: "19.x Release Notes | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64379.56152875
---

  * [Dremio Enterprise Home](/)
  * [Release Notes](/release-notes)
  * [Unsupported Releases](/release-notes/unsupported-releases)
  * 19.x Release Notes

Version: current [26.x]
On this page
# 19.x Release Notes
Releases are listed in reverse order, starting with the latest release of Dremio 19.x.
## 19.12.0 (June 2023) Enterprise​
### Issues Fixed​
  * Improved permission validation around view-based query execution. 
DX-64688 
  * In this release, the plan cache is user-specific for increased security, and it will be utilized when the same query is executed by the same user. 
DX-63531 


## 19.11.0 (September 2022) Enterprise​
### Issues Fixed​
DX-54176, DX-54174, DX-54214, DX-55844 
  * This release includes a number of fixes that resolve potential security issues.


DX-56556, DX-56244 
  * Fixed an issue that was causing `REFRESH REFLECTION` and `REFRESH DATASET` jobs to hang when reading Iceberg metadata using Avro reader.


DX-51166 
  * When unlimited splits were enabled, users were seeing an `Access denied` error for queries run against Parquet files if impersonation was enabled on the source.


DX-48002 
  * When Iceberg features were enabled, the location in the API was incorrect for some tables in S3 sources.


DX-40891 
  * In some cases, queries using the `<` operator would fail when trying to decode a timestamp column in a Parquet file.


DX-37600 
  * Following upgrades to Dremio 18, promotion of HDFS-based datasets was failing if both unlimited splits and the use of Iceberg tables were enabled.


## 19.10.0 (August 2022) Enterprise​
### Issues Fixed​
DX-51465 
  * Objects whose names included non-latin characters were not behaving as expected in Dremio. For example, folders could not be promoted and views were not visible in the home space.


## 19.9.0 (July 2022) Enterprise​
### Issues Fixed​
DX-52061 
  * The `dremio-admin clean` CLI parameter `-d` (or `--delete-orphan-datasetversions`) was deleting named dataset versions during clean-up. With this release, only temporary `tmp.UNTITLED` dataset versions will be deleted.


DX-47568 
  * `CONVERT_FROM` queries were returning errors if they included an argument that was an empty binary string. This issue has been fixed, and such queries have been optimized for memory utilization.


DX-46632 
  * Row count estimates for some Delta Lake tables were changing extensively, leading to single-threaded execution plans.


DX-40559 
  * JDBC clients could not see parent objects (folders, spaces, etc.) unless they had explicit `SELECT` privileges on those objects, even if they had permissions on a child object.


## 19.8.1 (June 2022) Enterprise​
### Issues Fixed​
DX-52061 
  * The `dremio-admin clean` CLI parameter `-d` (or `--delete-orphan-datasetversions`) was deleting named dataset versions during clean-up. With this release, only temporary `tmp.UNTITLED` dataset versions will be deleted.


## 19.8.0 (May 2022) Enterprise​
### What's New​
DX-49772 
  * This release includes a new argument for the `dremio-admin clean` CLI command to purge dataset version entries that are not linked to existing jobs. See Clean Metadata for more information.


DX-47557 
  * The `-j` argument of the `dremio-admin clean` CLI command has been extended to purge temporary dataset versions associated with deleted jobs. See Clean Metadata for more information.


### Issues Fixed​
DX-48818 
  * Updated the Postgres JDBC driver from version 42.2.18 to version 42.3.4 to address 


DX-48627 
  * Updated WildFly OpenSSL to 1.1.3.Final to address 


DX-48275 
  * Dremio was generating a NullPointer Exception when performing a metadata refresh on a Delta Lake source if there was no checkpoint file.


DX-47572 
  * A `NULL` constant in Reflection definition was causing a type mismatch while expanding the materialization.


DX-46377 
  * When using Postgres as the data source, expressions written to perform subtraction between doubles and integers, or subtraction between floats and integers, would incorrectly perform an addition instead of the subtraction.


DX-46202 
  * In some cases, out of memory errors on Delta Lake tables were occurring if `commitInfo` was the last line of the JSON, resulting in incorrect file estimates for netFilesAdded, netBytesAdded, and netOutputRows.


DX-43201 
  * After enabling Iceberg, files with `:` in the path were failing with a `Relative path in absolute URI` error.


DX-42795 
  * Fixed a column index issue in RelMetadata that was resulting in some queries on views failing with `VALIDATION ERROR: Using CONVERT_FROM(*, 'JSON')`.


DX-42389 
  * Plan serialization time was not being accounted for in the Sql-To-Rel conversion phase, resulting in planning time missing from profiles as well as longer than usual planning times.


DX-42388 
  * An issue with plan serialization was causing longer than usual planning times.


## 19.7.0 (May 2022) Enterprise​
### Issues Fixed​
DX-48914 
  * When a `CASE` was used in a `WHERE` filter with an `AND` or an `OR`, it would be incorrectly wrapped in a `CAST`, resulting in the following error: `DATA_READ ERROR: Source 'sqlGrip' returned error 'Incorrect syntax near the keyword 'AS'.'`


DX-47931 
  * Fixed an issue that could result in duplicate column names being written by the planner when an expression in the project included a field named `*`.


DX-47820 
  * The `is_member` SQL function was failing with `UnsupportedOperationException` when concatenating with a table column.


DX-47361 
  * At times, in Dremio's AWS Edition, the preview engine was going offline and could not be recovered unless a reboot was performed.


DX-40232 
  * Some queries were taking longer than expected because Dremio was reading a `STRUCT` column when only a single nested field needed to be read.


DX-36544 
  * Running `ALTER PDS` to refresh metadata on a Hive source was resulting in the following error: `PLAN ERROR: NullPointerException`


## 19.6.3 (May 2022) Enterprise​
### What's New​
DX-49772 
  * This release includes a new argument for the `dremio-admin clean` CLI command to purge dataset version entries that are not linked to existing jobs. See Clean Metadata for more information.


DX-47557 
  * The `-j` argument of the `dremio-admin clean` CLI command has been extended to purge temporary dataset versions associated with deleted jobs. See Clean Metadata for more information.


### Issues Fixed​
DX-48914 
  * When a `CASE` was used in a `WHERE` filter with an `AND` or an `OR`, it would be incorrectly wrapped in a `CAST`, resulting in the following error: `DATA_READ ERROR: Source 'sqlGrip' returned error 'Incorrect syntax near the keyword 'AS'.'`


## 19.6.1 (April 2022) Enterprise​
### Issues Fixed​
DX-47820 
  * The `is_member` SQL function was failing with `UnsupportedOperationException` when concatenating with a table column.


## 19.6.2 (April 2022) Enterprise​
### Issues Fixed​
DX-36544 
  * Running `ALTER PDS` to refresh metadata on a Hive source was resulting in the following error: `PLAN ERROR: NullPointerException`.


## 19.6.0 (April 2022) Enterprise​
### Issues Fixed​
DX-47720 
  * Some `CASE` queries that ran successfully in previous versions were failing with `FUNCTION ERROR: Cannot parse input: Not Available with pattern : #`.


DX-47112 
  * When running a specific query with a `HashJoin`, executor nodes were stopping unexpectedly with the following error: `SYSTEM ERROR: ExecutionSetupException`


DX-45936 
  * In this release, **json-smart** was upgraded to version 2.4.8 to address 


DX-44619 
  * `CAST` operations were added to pushdown queries for RDBMS sources to ensure consistent data types, and specifically for numeric types where precision and scale were unknown. In some cases, however, adding `CAST` operations at lower levels of the query was disabling the use of indexes in `WHERE` clauses in some databases. Dremio now ensures that `CAST` operations are added as high up in the query as possible.


## 19.5.1 (March 2022) Enterprise​
### Issues Fixed​
DX-47112 
  * When running a specific query with a `HashJoin`, executor nodes were stopping unexpectedly with the following error: `SYSTEM ERROR: ExecutionSetupException`


## 19.5.0 (March 2022) Enterprise​
### What's New​
DX-42480 
  * In this release, Dremio is now pushing down computation for extra hash join conditions.


### Issues Fixed​
DX-40744 
  * Reflection refreshes that were initially successful would stop working after some time. If a request for a Reflection refresh was submitted (scheduled, via the UI, or via REST API calls), no job appeared in the jobs queue because the job was never started.


DX-45756 
  * Fixed an issue that was causing sockets to remain in a `CLOSE_WAIT` state while running metadata refresh on an ORC dataset. This resulted in `Too Many Open File` errors and the cluster had to be restarted to resolve the condition.


DX-45671, DX-44801, DX-43678 
  * In environments with high memory usage, if an expression contained a large number of splits, it could eventually lead to a heap outage/out of memory exception.


DX-43645 
  * In previous versions of Dremio, for some relational sources that did not support `boolean` type, using the `CAST` function to expand a boolean value to a boolean expression was resulting in an `Incorrect syntax near the keyword 'AS’` error.


DX-42158 
  * In some queries, window expressions were not getting normalized after substitution, resulting in a `Cannot convert RexNode to equivalent Dremio expression` error.


DX-40217 
  * Queries that worked in previous versions of Dremio were failing with the following error: `Job was cancelled because the query went beyond system capacity during query planning. Please simplify the query`


DX-44431 
  * Some complex join filters were getting dropped, resulting in incorrect query results.


DX-44191, DX-37481 
  * Some `SELECT` queries on parquet files were failing with a `DATA_READ ERROR: Failed to decode column SRC::varchar` error.


DX-42947 
  * Some fields were not getting trimmed after the logical phase during queries, resulting in degraded performance.


DX-39697 
  * The `IS_MEMBER()` function was not working with internal roles, returning `false` when it should have been returning `true`.


DX-42576 
  * The same `SELECT` query, using the `IS_MEMBER()` function, was returning different results in different versions of Dremio.


DX-46105 
  * When formatting GCS data at a folder level into a table or when selecting data from an existing table built on GCS, if any data values in the partitioning field included a space, the action would fail with: `RuntimeException: the specified key does not exist`


## 19.4.1 (February 2022) Enterprise​
### What's New​
DX-42833 
  * This release improves Sql-To-Rel performance by eliminating slower single-use maps and using lambda functions.


### Issues Fixed​
DX-42947 
  * Some fields were not getting trimmed after the logical phase during queries, resulting in degraded performance.


DX-42389, DX-42388 
  * Plan serialization time was not being accounted for in the Sql-To-Rel conversion phase, resulting in planning time missing from profiles as well as longer than usual planning times.


## 19.4.0 (January 2022) Enterprise​
### Issues Fixed​
  * In cases involving multiple tables in joins along with filters, RDBMS query pushdown could result in queries that ambiguously reference columns, resulting in `invalid identifier` errors.


  * In some cases, running `SELECT *` on some system tables was failing with the following error: `UNAVAILABLE: Channel shutdown invoked`


  * Intermittent jobs were failing with an `IndexOutOfBounds` exception while preparing operator details information for runtime filters.


  * When attempting to download certain query results as JSON or Parquet files, the downloaded file size was zero bytes and resulted in an `IndexOutofBounds` exception.


  * In some cases, certain `SELECT` queries that included an `ORDER BY` statement were returning the following error: `Serialization is only allowed for SelectionVectorMode.NONE`


## 19.3.0 (January 2022) Enterprise​
### What's New​
DX-41416 
#### Microsoft Azure Synapse Analytics Support​
An ARP connector is now available on Dremio that allows for integration with Azure Synapse Analytics dedicated SQL pools. This option is available for immediate use by adding a new [External Source](/data-sources/databases/azure-synapse-analytics) from the Dremio interface.
DX-41070 
#### Logback Updated​
Logback was updated to v1.2.9 to mitigate CVE-2021-44228. This utilizes a new version of the library, which disables certain JNDI features known to cause issues with log4j 2.x. While Dremio is not vulnerable due to logback configurations being inaccessible externally and not using JNDI/JDBC features, this was done as a general security best practice.
#### Updated Azure Storage Library​
DX-39471 
Updated Dremio's supported version of the `Azure.Storage.Common` library to v12.14.1, at the recommendation of Microsoft. Organizations using older versions of Azure storage libraries occasionally encountered data corruption issues, which is addressed with the newer SDK version.
### Issues Fixed​
DX-41028 
**_The`FilesystemScanDrel` operator could skip printing out partition-filtering information, which caused Dremio's query planner to utilize incorrect operators in later phases of the query execution._** This issue has been addressed by forcing all information to print out with the `FilesystemScanDrel` operator.
DX-39851 
**_Users encountered an`AssertionError` when attempting to add expressions of different types to a set._** This issue has been addressed by updating the version of Calcite used (CALCITE-2946).
**_Users encounter issues with data sources with`BIT` columns mapped to `BOOLEAN`, as pushdowns are disabled for such columns._** This issue has been addressed for sources that do not support booleans by expanding boolean columns into integer comparisons (e.g., `COL = 1`).
## 19.2.0 (November 2021) Enterprise​
### What's New​
DX-15697 
#### Min/Max on Variable-Length Columns moved to VectorizedHashAgg Spill Operator​
When a query used min/max on a varlength column or ndv accumulator, it was serviced by a no-spill operator. This functionality has been moved to a new `VectorizedHashAgg` spill operator so that in the event of out-of-memory (OOM) exceptions, the operator continues to spill onto the disk until the query completes rather than forcing a query rewrite.
### Issues Fixed​
DX-38832 
**_When debugging runtime filters, users encountered insufficient information from the operator details about which runtime filter a Scan Operator received or dropped._**   
This issue has been addressed by adding runtime filter information to Scan Operator details.
DX-37770 
**_AAD authentication users wanted to grant a role root access to containers, but without the new access control feature setup as a requirement for doing so._**   
This issue has been addressed by creating root path support for the AAD application and limited ACL permissions.
DX-37194 
**_Customers couldn't query min/max variable length fields on datasets due to query failure. These failures were caused by insufficient memory due to the group by clauses being unable to spill._**   
This issue has been addressed by adding variable length fields to the vectorized hash aggregator operator, which allows spills.
DX-28330 
**_Users encountered a "Failed to decode column" error when promoting and querying v2 page type Parquet files._**   
This issue has been addressed by adding decompression logic for v2 page types.
DX-39856 
**_When using AWS profile-based authentication, Dremio did not cache credentials, which forced the service to repeatedly perform checks._**   
This issue has been addressed by allowing Dremio to cache credentials and perform periodic checks. To enalbe this functionality, enable the `com.dremio.aws.cred.refresh.interval` flag. It is recommended that this interval be set to a minimum of 60 seconds.
DX-39507 
**_When users performed queries using aggregated join, the Reflection doesn't match._**   
This issue has been addressed by enhancing aggregated Reflection matching by trimming user queries and pushing aggregate below the join operator.
DX-28298 
**_User queries encountered Gandiva exceptions indicating that Dremio "could not allocate memory for output string."_**   
This issue has been addressed by fixing an unexpected behavior within the `SPLIT_PART` function.
## 19.1.0 (November 2021)​")
### Issues Fixed​
DX-38539 
**_When attempting to perform reporting based upon tag names, users encountered issues where the AWS tag`Role` was already being used by the executors having the tag value `Executor`._** This issue has been addressed by modifying the `Role` tag to `dremio_role` in its place. Coordinators will continue to not use this tag.
DX-38831 
**_When users viewed Operator details, insufficient information was available to illustrate the effectiveness of runtime filtering. No information was provided regarding whether filters were sent to the scan or even just dropped.._**  
This issue has been addressed by adding more runtime information, such as metrics, to help users understand the effectiveness of runtime filtering.
DX-39112 
**_If an administrator attempted to save changes made from the Edit User screen, Dremio displayed an`Invalid password` error, forcing the admin to either enter the user's existing password or set a new password to preserve changes._**  
This issue has been addressed by no longer sending passwords to Dremio unless a value exists in the **Password** field.
DX-39288 
**_Users encountered unexpected coordinator restarts when failures were encountered using external ZooKeeper clients._**  
This issue has been addressed by resolving a race condition that provides additional time for a response from the ZooKeeper client.
DX-39288 
**_The Dremio service performed credential validations for every cloud data source, causing excessive system checks._**  
This issue has been addressed by simplifying initialization and refactoring Azure token fetching.
DX-39653 
**_Users encountered an issue with Iceberg data in S3 returning`NULL` for all columns after upgrading to Dremio v19.0. This is due to Parquet files in the Iceberg table not containing column IDs._**  
This issue has been addressed by enabling a new support key, `dremio.iceberg.fallback_to_name_based_reader`. This allows Dremio to revert to name-based reading.
DX-39716 
**_When using the unlimited splits execution flow preview feature, users received incorrect results._**  
This issue has been addressed by adding node conditions to the Iceberg digest.
DX-39592 
**_While populating schema for Iceberg scan operators, the service generated columns incorrectly when a complex field reference was inserted into the scan._**  
This issue has been addressed by referencing the correct property.
DX-39265 
**_While performing expansion matching, Dremio goes through each expansion node in the query plan and terminates them individually, which adds to time spent in normalization._**  
This issue has been addressed by improving Reflection matching by associating expansion nodes to individual node levels.
DX-38892 
**_Users encountered an issue with cluster state where all engines were running, but the cluster was not flagged as`RUNNING`._**  
This issue has been addressed by adding failsafe logic to fix the cluster state if all engines are running, but the cluster is not marked as such.
DX-38431 
**_Users encountered issues with the PUT`api/v3/reflection/{reflectionId}` API when Dremio encountered unknown fields._**  
This issue has been addressed by altering the API to not return errors when a payload includes `canView` and `canAlter` fields. Changes to these fields' values will be ignored.
## 19.0.0 (October 2021)​")
### What's New​
  * Simplified Navigation Bar: The original top navigation bar has been replaced with a new side navigation bar along the left-hand side of the Dremio interface. Links to Datasets, SQL Runner, Jobs, and account settings have been replaced with icons for the SQL Editor, Job Visualizer, project, and profile.

![This image shows the new left-hand navigation menu in Dremio.](https://docs.dremio.com/images/rn-190-leftnav.png)
The icons on the image above represent the following:
  1. Dataset page
  2. Query Editor page
  3. Jobs page
  4. Settings page
  5. Help menu
  6. Account options


  * Apache Iceberg Hive Table Support: 
DX-35989 
DX-35988 
Dremio 19.0+ supports using the popular [Apache Iceberg open table format](/developer/data-formats/apache-iceberg) created with Spark 3. This functionality extends to users with read (`SELECT`) privileges on sources that support Hive catalogs (ADLS, Hive, S3). Additionally, this allows for more rapid storage and retrieval of metadata when after queries or changes are made to a dataset. 
  * PIVOT & UNPIVOT Operators: 
DX-7801 
`PIVOT` and `UNPIVOT` relational operators are now available in Dremio, allowing for the changing of table-valued expressions into another table. `PIVOT` rotates table-valued expressions by turning unique values from one column of an expression into multiple columns within the output. Additionally, it performs aggregations where required on any remaining column values needed in the final output. `UNPIVOT` accomplishes the opposite, rotating columns of table-valued expressions into column values. 


  * Lake Formation Integration (Preview): 
DX-31443 
Dremio now honors permission configurations made from AWS Lake Formation for Glue sources at the database and table levels. This entails integrating with Dremio as described in our [Lake Formation configuration guide](/security/integrations/lake-formation).


  * Administrators may grant internal/external groups (e.g., AD) administrative access to an organization's full cluster with the [GRANT SQL command](/reference/sql/commands/rbac). To add this privilege to a role, navigate to the SQL Editor and run the query, `GRANT ROLE ADMIN TO ROLE groupName`. Run `SELECT * FROM sys.membership` to verify the new record exists. 
DX-37044 


DX-37179 
  * Dividing a float by `0` now returns `NaN` if [Gandiva-based execution](/help-support/advanced-topics/gandiva) is enabled. If disabled, Dremio will follow the standard SQL behavior for dividing by `0`, which is to display an exception error message.
  * IEEE-754 divide semantics has also been added, which is activated through the `planner.ieee_754_divide_semantics` support key. When a positive/zero/negative float is divided by zero, then infinity, NaN or negative infinity is returned.
  * Jobs & Job Detail New UI On By Default: The new Jobs and Job Details pages first introduced in [Dremio v18.0](/release-notes/version-1800-release-notes) is now activated by default for all customers that upgrade to v19.0+. Previously, this functionality required manual enablement via support keys to access.
  * Removal of Mixed Data Types Support Key: 
DX-37357 
The support key that allowed customers to enable mixed types despite the [deprecation implemented in Dremio v18.0](/release-notes/version-1800-release-notes) has now been removed. 


### Issues Fixed​
**_After upgrading to Dremio 18.0, the interface became slow and responsive as a result of access control migrations._**  
This issue has been addressed so that the interface is more responsive while migrations are taking place.
**_After upgrading to 18.0, customers began experiencing permissions issues when attempting to use HDFS-based sources._**  
This issue has been resolved by removing permission checks for Iceberg metadata datasets.
**_While using the Jobs page, text was not displaying in the Search box._**  
This issue has been addressed with some CSS fixes to make search text visible.
**_Customers encountered incorrect results or no rows returned after performing queries with a false predicate in an`OR` condition._**  
This issue has been resolved by preventing the generation of incorrect partition filter conditions. Additionally, the limit for converting conjunctive normal forms has been increased.
DX-37166 
**_After upgrading to Dremio v18.0+, users encountered failures when using the`now()` function in Reflections._**  
This has been resolved by adding the `now()` function back to the Reflection whitelist so that it can be used with Reflections, despite being a context-sensitive function.
DX-37165 
**_The**Open Results** link was missing from the new Job Details page UI._**  
The **Open Results** functionality has been added to the top-right corner of the Job Details page.
DX-37067 
**_The`ASSERT_DECIMAL` SQL function was not being properly handled in the java code generated, which resulted in infinite recursions while rewriting unions during materialization._**  
This issue has been resolved with improvements to the handling of the `ASSERT_DECIMAL` function.
DX-37027 
**_The new Jobs page didn't show the name of the Reflection a refresh job was run with._**  
The **Reflections Created** section is now included to show Reflection information, such as name.
DX-36754 
**_Customers trying to promote a strict`OXML` file would encounter failures due to the format being unsupported. However, the error message incorrectly stated `failure to create parser for entry:`filepath``._**  
The exception is now caught and an improved error message is shown: `Strict OXML is not supported. Please save file: `filepath` in standard (.xlsx) format.`
DX-36640 
**_Due to java version mismatches, the Dremio service cannot start due to a related timeout and AWSE AMI is rendered unusable._**  
This issue was fixed by adding scripts that update services when first packing AMI. Background security updates are then disabled to prevent further updates once the Dremio and Zookeeper services start.   

DX-36509 
**_Dremio couldn't read the`partitionValues` map in the Delta Lake Parquet checkpoint log file when written by older Parquet writers._**  
This issue has been resolved by enabling Dremio's checkpoint Parquet reader to read map fields without assuming field structure.
DX-36477 
DX-25355 
**_Dremio encountered issues where Parquet file date columns showed incorrect results and the service autocorrects them._**  
This issue has been resolved by disabling the `store.parquet.auto.correct.dates` support key, which was used by default in older versions of Dremio to resolve incorrect dates written by Apache Drill.
DX-36194 
**_Logs on AWSE switched to writing to`dremio.backup` on startup._**  
This issue has been resolved for AWSE users by implementing multiple files for GC logs with timestamp postfixes formatted so that the most-recent file has the `.current` postfix.
DX-36105 
**_Queries performed with PostgreSQL encountered issues with braces in`UNION` statements._**  
When generating SQL for RDBMS sources, both sides of `UNION [ALL]` statements now have surrounding braces.
DX-35327 
**_A timer issue falsely caused timeouts when Plan Cache is enabled due to the timer failing to stop after a plan cycle._**  
This issue has been resolved in instances where Plan Cache is enabled, and the timer now stops when the plan cycle ends.
DX-33536 
**_Applying`CONVERT_FROM(,'JSON')` on a Reflection is not possible due to dataset field information in the `__accelerator` source being unable to update._**  
This issue has been resolved to allow the use of `CONVERT_FROM(,'JSON')` on Reflections.
DX-33353 
**_When Delta Lake transactions are committed, the checkpoint Parquet files generated are multi-part, which Dremio does not support, causing queries on the table to fail._**  
This issue has been resolved by enabling Dremio to read multi-part checkpoint Parquet files for Delta Lake tables.
DX-32340 
**_"Legacy" versions of RDBMS connectors caused errors while querying._**  
This issue has been resolved by updating all legacy RDBMS connectors with the more advanced ARP versions of the sources, where if functionality is not supported in the data source, it is no longer executed by Dremio. this update of ARP sources will take place automatically.
DX-30717 
**_Datasets with lists and structs encountered poor performance with queries containing a`WHERE` clause._**  
This issue has been resolved by improving the performance of the copier used to copy values from complex types, such as lists and structs.
**_Users encountered an exception for indexes being out of bounds when performing queries._**  
This issue has been resolved by performing null checks on columns and offset indexes.
DX-28393 
**_Larger Hive extended table properties with concurrent queries running caused Garbage Collection and executors became unresponsive._**  
This issue has been resolved by reducing the heap footprint for Hive extended table properties.
DX-28343 
**_Oracle table synonyms were not being recognized or found in Dremio._**  
This issue has been resolved by altering how synonyms are retrieved.
DX-26801 
**_Users experienced performance degradation for certain join queries that contained extra conditions in conjunction with equi join._**  
This issue has been addressed by extending the hash join operator to support extra conditioners for such queries.
DX-15810 
**_Min/max accumulations for variable length fields used in`GROUP BY` clauses were not spilled, causing failures after running out of direct memory._**  
This issue has been resolved by adding min/max variable length field aggregation to the vectorized hash aggregator operator, which can spill and thus doesn't run out of memory.
DX-37452 
**_The**Cancel Query** button is missing from the new Jobs page UI._**  
This issue has been resolved by adding the button to the interface.
DX-37235 
**_Job duration is not incremented while the page is displayed using the new Job UI._**  
This issue has been addressed by adding a socket call to the API.
DX-38810 
DX-12608 
**_When attempting numerous concurrent metadata refreshes for AWS, S3, and GCS sources, these would fail due to service rate limits._**  
This issue has been addressed by implementing an exponential back-off policy that performs up to 10 retries upon encountering throttling errors from cloud sources. Should such errors persist beyond the retry limit, review the workaround documented under Known Issues.
DX-38951 
**_With the new Jobs UI activated, upon clicking the View Details button, users could not bookmark or save the page for a single job._**  
This issue has been addressed by allowing users to open a job's details from the same browser tab as the **View Details** button was clicked on.
### Known Issues​
The following are known issues with Dremio v19.0 and will be resolved in future maintenance releases:
  * HDP-2 and HDP-3 installations not yet certified for Dremio v19.0. Any changes to this status will be made known here.
  * Some queries may encounter an error for `org.apache.iceberg.exceptions.CommitFailedException`. This only occurs under high concurrency metadata refresh and Reflection refresh operations. To avoid this issue, it is recommended that administrators enable the `nessie.kvversionstore.max_retries` support key and increase the default value.
  * If an administrator tries to change a local/internal user's account details (e.g., first name, last name, email address) from the User settings page, an `Invalid password` error message will display upon trying to save changes. To work around this, administrators must also provide either the user's existing password or a new password to complete the change. If a user's password is changed, please notify the affected user.


DX-39769 
  * Some users may find themselves able to delete an engine without encountering any warnings, even if queries are associated and a queue assigned. The deleted engine name will still be visible from the UI, such as the _Engine_ column of the queue, but no new jobs will be assigned to it.


Was this page helpful?
Previous 20.x Release Notes[Next 18.x Release Notes](/release-notes/unsupported-releases/version-1800-release-notes)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
Previous 20.x Release Notes[Next 18.x Release Notes](/release-notes/unsupported-releases/version-1800-release-notes)
!
