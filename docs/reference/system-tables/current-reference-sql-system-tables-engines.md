---
url: /reference/sql/system-tables/engines
title: "SYS.ENGINES | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64372.428154791
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.ENGINES

Version: current [26.x]
On this page
# SYS.ENGINES
The `sys.engines` table contains metadata for the engines in the Dremio instance.
Syntax

```
SELECT *   
FROM sys.engines  

```

## Example Output[​](/reference/sql/system-tables/engines#example-output "Direct link to Example Output")  
| engine_id  | engine_name  | state  | start_time  | stop_time  | engine_size  | resource_allocation_offset  | target_cpu_capacity  | spill_storage_size  | c3_storage_size  | autostart  | auto_stop_delay_secs  | last_query_timestamp  | nodes  | metadata  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| 5e433222-aaba-4db4-9462-2fa9270a6956  | my-engine  | RUNNING  | 2025-07-10 13:17:34.204  | 2025-07-10 12:55:05.483  | Small  | reserve-2-8  | 8C  | 40GB  | 40GB  | true  | 900  | 2025-07-10 13:47:25.725  | dremio-executor-my-engine-000-0.dremio-cluster-pod.dremio.svc.cluster.local  | {'{'})'{'{'})'{'}'})"labels":{'{'})'{'{'})'{'}'}){'{'})'{'}'}'{'}'},"annotations":{'{'})'{'{'})'{'}'}){'{'})'{'}'}'{'}'},"nodeSelectors":{'{'})'{'{'})'{'}'}){'{'})'{'}'}'{'}'},"tolerations":[]{'{'})'{'}'}'{'}'}  |  
## Columns[​](/reference/sql/system-tables/engines#columns "Direct link to Columns")  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| engine_id  | string  | The UUID to identify the engine.  |  
| engine_name  | string  | The user-defined name of the engine.  |  
| state  | string  | The state of the engine.   
Enum: `STARTING`, `RUNNING`, `STOPPING`, `STOPPED`, `RECOVERING`, `FAILED`  |  
| start_time  | timestamp  | The date and time when the engine was started.  |  
| stop_time  | timestamp  | The date and time when the engine was stopped.  |  
| engine_size  | string  | The size of the engine. For example, `Small`.  |  
| resource_allocation_offset  | string  | The resource allocation offset, where the first value represents the number of vCPUs and the second represents the number of RAM in GB.   
For example, `reserve-2-8`.  |  
| target_cpu_capacity  | string  | The number of cores used on the pod. For example, `16C`.  |  
| spill_storage_size  | string  | The configured spill storage size.  |  
| c3_storage_size  | string  | The configured C3 storage size.  |  
| autostart  | boolean  | If the engine is set to automatically start/stop, `true`. Otherwise, `false`.  |  
| auto_stop_delay_secs  | long  | The idle time without queries to automatically stop the engine. Only used if autostart is set to `true`.  |  
| last_query_timestamp  | timestamp  | The date and time when this engine was last used to run a query.  |  
| nodes  | string  | List of all nodes of the engine.  |  
| metadata  | string  | The metadata for the engine, which includes:   

  * `labels` - Key/value pairs to identify and organize pods.
  * `annotations` - Key/value pairs with non-identifying metadata.
  * `nodeSelectors` - Key/value pairs with node-specific constraints to schedule pods on nodes matching specified labels.
  * `tolerations` - The configuration to schedule pods on nodes with matching taints.

 |  
Was this page helpful?
[Previous SYS.COPY_FILE_HISTORY](/reference/sql/system-tables/copy-file-history)[Next SYS.JOBS](/reference/sql/system-tables/jobs)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.COPY_FILE_HISTORY](/reference/sql/system-tables/copy-file-history)[Next SYS.JOBS](/reference/sql/system-tables/jobs)
