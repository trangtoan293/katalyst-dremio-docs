---
url: /help-support/limits
title: "Limits | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64060.985123958
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * Limits

Version: current [26.x]
On this page
# Limits
This page details limits for a variety of Dremio resources on a per-deployment basis.
**System** limits are hard limits enforced by Dremio. **Recommended** limits are not enforced, but surpassing these limits can lead to cluster instability.
Limits are grouped according to Dremio components, as follows:
  * [Catalog](/help-support/limits/#catalog)
  * [Execution](/help-support/limits/#execution)
  * [Metadata](/help-support/limits/#metadata)
  * [Planner](/help-support/limits/#planner)
  * [Reflections](/help-support/limits/#reflections)
  * [Workload Management](/help-support/limits/#workload-management)


## Catalog[​](/help-support/limits/#catalog "Direct link to Catalog")  
| Item  | Limit  | Limit Type  | Additional Notes  |  
| --- | --- | --- | --- |  
| Autoingest Pipes  | 100  | System  | Maintains coordinator stability. If you would like to increase the limit, please contact Dremio.  |  
| Row widths  | 16 MB  | System  | Prevents excessive heap usage. This limit includes internal row widths that query plans may create.  |  
| Leaf columns in a table  | 6,400  | System  | See [Creating and Querying Wide Tables](/help-support/advanced-topics/wide-tables).  |  
| Sources  | 250  | Recommended  | Adding too many sources can impact performance in the Dremio console and the size of the KV store on disk.  |  
| Spaces  | 500  | Recommended  | Exceeding this limit can cause degraded response times in the Dremio console.  |  
| Folders in a space  | 250  | Recommended  | Adding too many folders can impact performance in the Dremio console and the size of the KV store on disk.  |  
| Views in a folder  | 500  | Recommended  | Adding too many views can impact performance in the Dremio console and the size of the KV store on disk.  |  
| Size of uploaded Excel file (.xlsx)  | 10 MB  | System  | Maintains coordinator stability.  |  
| Size of uploaded files (other formats)  | 50 MB  | Recommended  | Maintains coordinator stability.  |  
| JSON, CSV, or TXT files  | 300,000  | Recommended  | Maintains coordinator stability (metadata collection).  |  
| Scripts per user  | 1,000  | System  | Guardrail to prevent excessive space usage in the KV store.  |  
| Starred datasets  | 25  | System  | Guardrail to prevent excessive space usage in the KV store.  |  
| Wikis and Labels  | 5,000  | Recommended  | Guardrail to prevent excessive space usage in the KV store.  |  
| Roles  | 5,000  | Recommended  | Guardrail to prevent excessive privilege computations.  |  
| Users  | 10,000  | Recommended  | A maximum of 100 roles can be assigned to each user.  |  
| Catalog name length  | 256 characters  | Recommended  | 256 characters is an industry standard (prevents excessive space usage in the KV store).  |  
| Open Catalog entity name length  | 500 characters  | System  | Maximum length for names of tables, views, and folders within Open Catalog. Enforced by the underlying Apache Polaris storage system. Does not apply to spaces or other catalog types.  |  
| Script size  | 250,000 characters  | System  | Prevents excessive heap usage.  |  
## Execution[​](/help-support/limits/#execution "Direct link to Execution")  
| Item  | Limit  | Limit Type  | Additional Notes  |  
| --- | --- | --- | --- |  
| Leaf columns that can be queried  | 800  | System  | See [Creating and Querying Wide Tables](/help-support/advanced-topics/wide-tables).  |  
| Query records returned via console or REST API  | 1,000,000  | System  | Can lead to excessive disk usage. Use ODBC or JDBC to see full result set.  |  
| Job results  | Older than 1 day  | System  | Ensures efficient resource utilization while maintaining access to recent results. Does not affect the information related to job execution, which is available on the [Job Overview](/admin/monitoring/jobs/overview) page.  |  
## Metadata[​](/help-support/limits/#metadata "Direct link to Metadata")  
| Item  | Limit  | Limit Type  | Additional Notes  |  
| --- | --- | --- | --- |  
| Number of CSV/JSON/TXT datasets promoted to tables  | 1,000  | Recommended  | Prevents stale data due to long-running metadata collection on the coordinator (full metadata collection).  |  
| Number of Parquet datasets promoted to tables  | 5,000  | Recommended  | Prevents stale data due to long-running metadata collection on executors (incremental metadata collection).  |  
| Minimum background refresh frequency  | Duration of one refresh  | Recommended  | Background refresh frequency should be greater than the time it takes for a refresh to complete, otherwise refresh may run constantly.  |  
| Parquet footer  | 16 MB  | System  | Parquet footers are read on heap. If a Parquet file is mostly footer you should adjust ETL to create larger files.  |  
| Partitions per HDFS and Hive source  | 300,000  | System  | HDFS and Hive sources only — to prevent excessive heap usage.  |  
| Promoted Delta or Iceberg tables  | 5,000  | Recommended  | Prevents stale data due to long-running metadata collection (incremental metadata collection).  |  
## Planner[​](/help-support/limits/#planner "Direct link to Planner")  
| Item  | Limit  | Limit Type  | Additional Notes  |  
| --- | --- | --- | --- |  
| Nodes in a query plan  | 25,000  | System  | Large plans can impact planning times, holding up incoming queries and impacting heap usage.  |  
| Number Limits  | Varies by data type  | System  | See [Data Types](/reference/sql/data-types).  |  
## Reflections[​](/help-support/limits/#reflections "Direct link to Reflections")  
| Item  | Limit  | Limit Type  | Additional Notes  |  
| --- | --- | --- | --- |  
| Maximum number of Reflections (including enabled and disabled Reflections)  | 500  | System  | Excessive numbers of Reflections can impact query planning times, Reflection sync times, and heap usage.  |  
## Workload Management[​](/help-support/limits/#workload-management "Direct link to Workload Management")  
| Item  | Limit  | Limit Type  | Additional Notes  |  
| --- | --- | --- | --- |  
| Total active queries (queued and executing)  | 1,000  | System  | If more than 1,000 total active queries are required, add scale-out coordinators (one per 1,000 active queries) or add another cluster with dedicated engines.  |  
Was this page helpful?
[Previous Self-Service Semantic Layer](/help-support/well-architected-framework/semantic)[Next Keyboard Shortcuts](/help-support/keyboard-shortcuts)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Self-Service Semantic Layer](/help-support/well-architected-framework/semantic)[Next Keyboard Shortcuts](/help-support/keyboard-shortcuts)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fhelp-support%2Fsupport-settings%2F&_biz_t=1777950380944&_biz_i=Support%20Settings%20%7C%20Dremio%20Documentation&_biz_n=134&rnd=906215&cdn_o=a&_biz_z=1777950380963)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fhelp-support%2Flimits%2F&_biz_t=1777950380962&_biz_i=Dremio%20Documentation&_biz_n=135&rnd=836311&cdn_o=a&_biz_z=1777950380963)
