---
url: /release-notes/unsupported-releases/version-1700-release-notes
title: "17.x Release Notes | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64379.49095925
---

  * [Dremio Enterprise Home](/)
  * [Release Notes](/release-notes)
  * [Unsupported Releases](/release-notes/unsupported-releases)
  * 17.x Release Notes

Version: current [26.x]
On this page
# 17.x Release Notes
Releases are listed in reverse order, starting with the latest release of Dremio 17.x.
## 17.1.0 (November 2021) Enterprise[​](/release-notes/unsupported-releases/version-1700-release-notes#1710-november-2021--enterprise "Direct link to 1710-november-2021--enterprise")
### Issues Fixed[​](/release-notes/unsupported-releases/version-1700-release-notes#issues-fixed "Direct link to Issues Fixed")
DX-36529 
**_When using the raw local file systems for a source (such as Hadoop's local file system that does not produce extra checksum files), Dremio encountered a cast exception due to other libraries relying on standard local file systems._**  
This unexpected behavior has been resolved with the introduction of a new method that does not change the default Hadoop configuration.
DX-32578 
!-- CS-10963 --&gt;
!-- CS-11894 --&gt;
!-- CS-11619 --&gt; **_Dremio made unnecessary privilege checks on users accessing child objects of a root entity as well as fetching a user's role repeatedly. As a result, this created additional KVStore and external calls._**  
Inheritance checks for child objects are only run from the root entity. When users access non-root objects, Dremio will only check grants for the object being accessed, thus reducing Dremio's overall resource consumption and potential for privilege errors. With regard to roles, Dremio now only fetches a user's role once and then caches it locally.
DX-27692 
!-- CS-10404 --&gt; _**A query encountered an error while outstanding messages for a coordinator node, but the error was not acknowledged. This prevented any future query messages to the same coordinator from being acknowledged, and thus future queries could not progress beyond the queue.**_  
All messages are acknowledged by the screen operator, even in the case of a query failing.
## 17.0.0 (July 2021)[​](/release-notes/unsupported-releases/version-1700-release-notes#1700-july-2021 "Direct link to 17.0.0 \(July 2021\)")
### What's New[​](/release-notes/unsupported-releases/version-1700-release-notes#whats-new "Direct link to What's New")
#### AWS Authentication[​](/release-notes/unsupported-releases/version-1700-release-notes#aws-authentication "Direct link to AWS Authentication")
Dremio now supports authenticating to [S3](/data-sources/object/s3#authentication), [Amazon OpenSearch](/data-sources/databases/opensearch#authentication), [Redshift](/data-sources/databases/redshift#authentication), and [Glue](/data-sources/lakehouse-catalogs/aws-glue-catalog#authentication) sources by reading credentials from an AWS profile file on each node.
#### Google Cloud Storage (GCS) Connector[​](/release-notes/unsupported-releases/version-1700-release-notes#google-cloud-storage-gcs-connector "Direct link to Google Cloud Storage \(GCS\) Connector")
[Google Cloud Storage](/data-sources/object/gcs) has been added as an option for file system sources, like S3 and HDFS.
#### Median/Percentile SQL Functions[​](/release-notes/unsupported-releases/version-1700-release-notes#medianpercentile-sql-functions "Direct link to Median/Percentile SQL Functions")
The ability to execute [median/percentile commands via SQL functions](/reference/sql/sql-functions) has been added in the form of `PERCENTILE_CONT` and `PERCENTILE_DISC`. Using these, you may now compute percentiles against any numeric column. The `MEDIAN` function may also be used and is interpreted as `PERCENTILE_CONT`, so either function name may be used to achieve the same result.
#### Elasticsearch 7 Connector Preview[​](/release-notes/unsupported-releases/version-1700-release-notes#elasticsearch-7-connector-preview "Direct link to Elasticsearch 7 Connector Preview")
This functionality's preview status is lifted as of Dremio 18.0+ and is available to all users.
Dremio now supports Elasticsearch 7.0+ in the Elasticsearch connector (in addition to 5.x and 6.x), using the same Elasticsearch connector. You can create a new source and connect Dremio to an Elasticsearch 7.x cluster; however, if you already have an Elasticsearch source established with Dremio and you're planning to upgrade that cluster to 7.0+, you'll need to remove the source definition and re-add it.
For more information regarding these breaking changes and how they may affect your experience integrating with Dremio, please review 
DX-31310 
#### Updated Kubernetes Helm Chart[​](/release-notes/unsupported-releases/version-1700-release-notes#updated-kubernetes-helm-chart "Direct link to Updated Kubernetes Helm Chart")
Dremio 17.0.0 features an updated 
#### Upgrade Process for Custom ARP Sources[​](/release-notes/unsupported-releases/version-1700-release-notes#upgrade-process-for-custom-arp-sources "Direct link to Upgrade Process for Custom ARP Sources")
Added process for [upgrading to new versions of Dremio when using custom ARP sources](/admin/upgrade/custom-arp) in the event of breaking changes/features being introduced, such as [access control](/security/rbac).
#### Timestamp Mapping for Oracle[​](/release-notes/unsupported-releases/version-1700-release-notes#timestamp-mapping-for-oracle "Direct link to Timestamp Mapping for Oracle")
Added a new UI option for Oracle date sources to [map the Date column to indexed timestamp data](/data-sources/databases/oracle#advanced-options). This helps to reduce the duration of queries that would otherwise have to convert the Date column to non-indexed timestamp data.
### Issues Fixed[​](/release-notes/unsupported-releases/version-1700-release-notes#issues-fixed-1 "Direct link to Issues Fixed")
Dremio now supports Delta Lake tables where statistics for data files are added later.
**_After performing a query in Dremio, the results were being stored while a new executor node was simultaneously added. Because the node was in a "not ready" state, it caused the query to fail, even though the node was not used while performing the query._**  
Rather than causing the query to fail, new nodes added while storing query results instead throw a special exception (which is ignored by Dremio) and results are stored locally rather than shared between nodes.
**_The log directory was moved to a new location, so events failed to appear in the`/var/log/dremio` directory until the Dremio service was restarted or the file was full._**  
When log files are moved to the backup location, a rollover is triggered so that all logged events will still appear in the expected directory.
**_The metadata refresh for Azure configurations was using the GMT timezone for offset calculations._._**  
The metadata refresh has been updated to use the system's default timezone.
### Breaking Changes[​](/release-notes/unsupported-releases/version-1700-release-notes#breaking-changes "Direct link to Breaking Changes")
#### Mixed Type Removal[​](/release-notes/unsupported-releases/version-1700-release-notes#mixed-type-removal "Direct link to Mixed Type Removal")
Dremio 18.0 will remove support for columns with [mixed data types](/query-manage/managing-data/data-curation/#dealing-with-mixed-types). A standard schema will then be enforced. After the upgrade, mixed type columns will be converted on the next metadata refresh or query that reads from an affected table.
If files contain different types, Dremio will up-promote the data type to a common type, if possible. For example, it will convert data to BIGINT if files contain INT and BIGINT data types.
To prepare for this deprecation, the support key `store.disable.mixed_types` may be used to help you identify any table that may contain mixed data types. Using this key will emulate the deprecation so that you may easily identify mixed types before all support is ended.
An additional CLI tool is available, which generates a CVS report with each column listed that is affected by the upcoming deprecation. Please contact Dremio Customer Support for assistance in obtaining and running this tool.
Was this page helpful?
[Previous 18.x Release Notes](/release-notes/unsupported-releases/version-1800-release-notes)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous 18.x Release Notes](/release-notes/unsupported-releases/version-1800-release-notes)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Frelease-notes%2Funsupported-releases%2Fversion-1700-release-notes%2F&_biz_t=1777950700131&_biz_i=17.x%20Release%20Notes%20%7C%20Dremio%20Documentation&_biz_n=738&rnd=190364&cdn_o=a&_biz_z=1777950700132)
