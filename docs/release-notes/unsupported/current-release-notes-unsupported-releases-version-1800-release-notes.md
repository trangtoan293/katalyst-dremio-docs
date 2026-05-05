---
url: /release-notes/unsupported-releases/version-1800-release-notes
slug: /release-notes/unsupported-releases/version-1800-release-notes
title: "18.x Release Notes | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64378.841309083
---

  * [Dremio Enterprise Home](/)
  * [Release Notes](/release-notes)
  * [Unsupported Releases](/release-notes/unsupported-releases)
  * 18.x Release Notes

Version: current [26.x]
On this page
# 18.x Release Notes
Releases are listed in reverse order, starting with the latest release of Dremio 18.x.
## Notice About Dremio 16.0+ Upgrades​
If prior to 16.0, a source granted privileges to specific users for `CREATE TABLE` or `DROP`, when upgrading to 16.0+ Dremio will grant the `PUBLIC` role these privileges, rather than the original users. **This behavior is incorrect** , and we recommend that after upgrading to Dremio 16.0+, administrators should check any sources with `CREATE TABLE` and `DROP` privileges to ensure that proper access is granted.
## 18.4.0 (June 2022) Enterprise​
### Issues Fixed​
DX-41028 
  * For Iceberg and Delta Lake, if there were multiple scan operators for the same table and if the scan operators had different filter conditions, queries could return inaccurate results because some partition filters were getting dropped.


DX-49615 
  * Fixed an issue with external LDAP group name case sensitivity, which was preventing users from accessing Dremio resources to which they had been given access via their group/role membership.


## 18.3.0 (November 2021) Enterprise​
### Issues Fixed​
DX-39288 
  * Fixed a race condition that was causing a coordinator restart on some external zookeeper failures.


## 18.2.0 (October 2021)​")
### Issues Fixed​
DX-37696 
DX-37554 
**_After upgrading to Dremio v18.1, users encountered the`Unexpected Error Occurred` message after creating and saving a new view._**  
This issue was resolved by fixing a `TypeError` on the Group By page.
DX-37600 
**_After upgrading to 18.0, a customer began experiencing permissions issues when attempting to use HDFS-based sources._**  
This issue has been resolved by removing permission checks for Iceberg metadata datasets.
DX-37341 
**_Non-admin users could not drag and drop fields via Dremio's UI after performing a join._**  
This issue has been further resolved over the v18.1 fix via refactoring and privilege changes. Administrators may enable regular users to use grouping and joining functionality [by granting them the `SELECT` privilege](/security/rbac/privileges) for the desired dataset.
DX-37166 
**_After upgrading to Dremio v17.0+, users encountered failures when using the`now()` function in Reflections._**  
This has been resolved by updating the `now()` function each time the query is run.
### Known Issues​
DX-38101 
When impersonation is enabled, only administrators may assign privileges in Dremio.
## 18.1.0 (September 2021)​")
### What's New​
Two new options have been added to the [`AccelerationRefreshPolicy` parameter](/reference/api/catalog/table) of the Catalog v3 APIs for datasets: `accelerationNeverExpire` and `accelerationNeverRefresh`.
### Issues Fixed​
DX-37122 
**_After upgrading to Dremio v18.0, users' personal access tokens (PATs) would cease to function._**  
This issue has been rectified in Dremio v18.1.0. Upon upgrading, PATs will function as expected with no user action required.
DX-35379 
**_After upgrading RBAC and changing the formatting on one's home space, non-admin users received the error`Table [`pathName`] not found`._**  
This issue has been resolved by always including `SELECT` and `ALTER` in the inherited privileges of all objects in a user's home space.
DX-36539 
**_When attempting to retrieve tags in AWSE, the system threw a`RequestLimitExceeded` exception when the engine size is large._**  
This issue has been fixed by implementing additional retry logic to AWS's CLI commands.
DX-36657 
**_On Mapr sources, when`dremio.iceberg.enabled` and `dremio.execution.support_unlimited_splits` keys are enabled to use the new unlimited splits functionality, users encountered failures with the `CREATE_TABLE` (CTAS) privilege._**  
This issue has been rectified in Dremio v18.1.0. Upon upgrading, use of the `CREATE_TABLE` privilege will function as expected.
DX-36680 
**_Promoting a table via APIs is unable to set the method to`INCREMENTAL` for POST responses._**  
This issue has been fixed in Dremio v18.1.0 by storing data passed to the acceleration refresh policy.
DX-36849 
**_Iceberg Reflections failed with timeout while waiting for a connection due to a limited number of allowed connections._**  
The default number of allowed connections has been increased drastically.
**_When promoting Parquet files after upgrading to v18.0, users encountered class cast exceptions, which rejected the promotion._**  
This issue has been resolved in Dremio v18.1.0 by altering how the service reads non-standard list types in Parquet files.
DX-37341 
**_Non-admin users could not drag and drop fields via Dremio's UI after performing a join._**  
This issue has been resolved via refactoring and privilege changes. Administrators may enable regular users to use grouping and joining functionality [by granting them the `SELECT` privilege](/security/rbac/privileges) for the desired dataset.
_**A coordinator exhibited multiple queries had failed to be canceled, which helped to reveal a memory leak in one of Dremio's services that occurs when canceling queries. Because of the canceled query, the completable future result is not consumed, which ultimately results in a memory leak.**_  
Multiple improvements have been made to counteract this behavior, which includes:
  * Increased the cancel retry thread pool.
  * Decreased the number of retries Dremio attempts as the active query sync typically cancels any orphan queries on the executor.
  * Made the cancel retry a non-blocking service to accommodate a higher rate of cancel handling.


## 18.0.0 (August 2021)​")
#### Upgrading to 18.0​
After upgrading to Dremio v18.0, your spaces may disappear temporarily while Dremio performs a first-time background migration of new access control functionality. This only occurs once upon upgrading and, after the migration completes, all spaces reappear as expected.
### What's New​
#### Local Users & Roles​
Additional functionality has been added to access control with regard to the creation and management of users and roles:
  * Both internal and external users are supported in the same instance of Dremio. In addition, [new user management screens](/security/authentication/users) allow for administrators to add multiple users by username as well as assign roles and view permissions on a user-by-user basis.
  * [Roles](/security/rbac/roles), or groups of privileges and sub-roles with users assigned, allow you to control what privileges are inherited by a user based on their position or capacity.


Additional APIs as well as SQL commands have been added to extend this functionality.
#### New Job History & Job Details Screens​
The Jobs History and Details screens in Dremio have been updated both from a usability and layout standpoint. The original dual-paned screen listing jobs on the left and job details on the right is now [a full-screen interactive experience](/admin/monitoring/jobs).
While jobs are still listed in a standard table fashion with individual rows for each query and its details separated into columns, the information presented here is now expanded through the inclusion of multiple new columns as well as an interactive hover capability.
Clicking on an individual job will now take you to a screen full of data, such as a breakdown of the query execution, scans, dataset graphs of all views and datasets used, and more.
[A support key must be used](/admin/workloads/jobs) to enable this new functionality. However, in a future release of Dremio, the new UI will be enabled by default.
#### Query Visualizer​
As part of the new Job Details screen, the [Query Plan Visualizer](/admin/monitoring/jobs/viewing-query-profiles) is a new visual component that allows users to view a graphical representation of the SQL execution tree. With this tool, all resources used for the query are identified, including nodes, Reflections, and individual datasets. Those nodes deemed most expensive, meaning time-intensive, will appear more colorful, whereas the less-used resources will appear dimmed.
#### Reflection Refresh Job Routing (Preview)​")
Reflection refreshes may now be assigned to specific queues via the `ALTER DATASET` or `ALTER TABLE` SQL command. From the SQL Editor, you may now set all Reflections in a dataset to an individual or default workload queue.
For details, see [Queue Routing](/reference/sql/commands/queue-routing-sql) in the SQL reference.
#### Elasticsearch 7 Connector​
DX-32610 
Dremio now supports Elasticsearch 7.0+ in the Elasticsearch connector (in addition to 5.x and 6.x), using the same Elasticsearch connector. You can create a new source and connect Dremio to an Elasticsearch 7.x cluster; however, if you already have an Elasticsearch source established with Dremio and you're planning to upgrade that cluster to 7.0+, you'll need to remove the source definition and re-add it.
For more information regarding these breaking changes and how they may affect your experience integrating with Dremio, please review 
#### Improved Metadata Refresh​
DX-XXXXX 
Metadata for datasets and Reflection refreshes may now occur even faster for almost any dataset size. This is accomplished through using executors and reading data changes incrementally for almost-instantaneous refreshes.
For more information on how to enable this functionality, see [Improved Metadata Refreshes](/admin/metadata-caching/). In a future version of Dremio, this will be automatically enabled by default.
This functionality will be enabled by default in a future release of Dremio.
#### Unlimited Splits for Hive & FileSystem Sources​
Due to the changes made to allow for improved metadata refresh rates, Dremio's limitation on the total number of splits for FileSystem sources is removed.
For more information on how to enable this functionality, see [Unlimited Splits](/admin/metadata-caching/).
This functionality is enabled by default for organizations using Dremio v21.0+.
### Issues Fixed​
**_Dremio could not push down queries to Oracle due to an unsupported regex expression._**  
An unsupported regex expression using `\Q\E` is now not pushed down to Oracle when it is present, allowing Dremio to handle the regex.
**_When attempting to run a query with a constant key in GROUP BY for SQL Server, the query failed._**  
Dremio automatically rewrites the query before the physical plan is created by removing constant keys from `GROUP BY`, thereby avoiding the error.
**Dremio had no support for adding S3 connection properties when asynchronous access was enabled._**  
Dremio now offers the ability to configure the number of connections for S3 as well as each S3 connection property, including the following options:
  * `fs.s3a.connection.maximum` - S3 Connection pool size.
  * `fs.s3a.connection.establish.timeout` - S3 Connection time out.
  * `fs.s3a.connection.timeout` - S3 Socket timeout.


DX-33527 
**_Users able to run queries on temporary datasets cannot download results as the option is grayed out._**  
This issue has been resolved by adding permissions to temporary datasets.
### Breaking Changes​
#### Mixed Type Removal​
Dremio has removed support for columns with mixed data types for FileSystem sources. A standard schema is now enforced. Columns with compatible mixed data types will be promoted to a single data type. However, columns with incompatible mixed data types will be unreadable by Dremio until such instances are resolved. Visit this page for additional information.
If you wish to test whether your datasets will be impacted by this change, please contact Dremio Support or your Field Technician prior to upgrading.
#### User/Role v2 APIs​
DX-35643 
All v2 user (`/api/v2/user/*`), group (`/api/v2/group/*`), and role (`/api/v2/role/*`) API functionality will be deprecated in an upcoming version of Dremio and removed. We recommend that you begin transitioning to `/v3/` APIs for users, groups, and roles.
### Known Issues​
**_On Mapr sources, when unlimited splits is enabled users are encountering failures with the`CREATE_TABLE` (CTAS) privilege._** This will be fixed in Dremio v18.1.0.
**_After activating the new Jobs page UI, users found that the**Cancel** button for stopping queries had disappeared._** This will be fixed in Dremio v19.0.
Was this page helpful?
[Previous 19.x Release Notes](/release-notes/unsupported-releases/version-1900-release-notes)[Next 17.x Release Notes](/release-notes/unsupported-releases/version-1700-release-notes)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous 19.x Release Notes](/release-notes/unsupported-releases/version-1900-release-notes)[Next 17.x Release Notes](/release-notes/unsupported-releases/version-1700-release-notes)
!
