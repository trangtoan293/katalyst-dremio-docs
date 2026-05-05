---
url: /reference/sql/system-tables/jobs
title: "SYS.JOBS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64372.57471175
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.JOBS

Version: current [26.x]
On this page
# SYS.JOBS
The `sys.jobs` table contains metadata for the jobs currently running in the Dremio instance.
Syntax

```
SELECT *   
FROM sys.jobs  

```

## Example Output[​](/reference/sql/system-tables/jobs#example-output "Direct link to Example Output")  
| job_id  | status  | query_type  | user_name  | queried_datasets  | scanned_datasets  | attempt_count  | submitted_ts  | attempt_started_ts  | metadata_retrieval_ts  | planning_start_ts  | query_enqueued_ts  | engine_start_ts  | execution_planning_ts  | execution_start_ts  | final_state_ts  | submitted_epoch_millis  | attempt_started_epoch_millis  | metadata_retrieval_epoch_millis  | planning_start_epoch_millis  | query_enqueued_epoch_millis  | engine_start_epoch_millis  | execution_planning_epoch_millis  | execution_start_epoch_millis  | final_state_epoch_millis  | planner_estimated_cost  | rows_scanned  | bytes_scanned  | rows_returned  | bytes_returned  | accelerated  | queue_name  | engine  | error_msg  | query  | is_profile_incomplete  | execution_allocated_bytes  | execution_cpu_time_millis  | rule_name  | rule_content  | rule_action  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| 1d3091b1-d0be-0169-8ace-e43f562c7000  | RUNNING  | UI_RUN  | dremio  | [sys.jobs]  | _empty text_  | 1  | 2022-07-14 01:15:57.782  | 2022-07-14 01:15:57.781  | 2022-07-14 01:15:57.782  | 2022-07-14 01:15:57.789  | 2022-07-14 01:15:57.840  | 2022-07-14 01:15:57.840  | 2022-07-14 01:15:57.876  | 2022-07-14 01:15:57.881  | 1970-01-01 00:00:00.000  | 1657761357782  | 1657761357781  | 1657761357782  | 1657761357789  | 1657761357840  | 1657761357840  | 1657761357876  | 1657761357881  | 0  | 3.8150000035E9  | 0  | 0  | 0  | 0  | false  | Low Cost User Queries  | _empty text_  | _empty text_  | SELECT * FROM sys.jobs  | false  | 0  | 0  | UI Previews  | query_type() = 'UI Previews'  | PLACE  |  
## Columns[​](/reference/sql/system-tables/jobs#columns "Direct link to Columns")  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| job_id  | varchar  | The UUID to identify the job.  |  
| status  | varchar  | The state of the job.   
Enum: `SETUP`, `QUEUED`, `ENGINE START`, `RUNNING`  |  
| query_type  | varchar  | The mechanism used to submit the job.   
Enum: `ACCELERATOR_CREATE`, `ACCELERATOR_DROP`, `ACCELERATOR_EXPLAIN`, `FLIGHT`,`INTERNAL_ICEBERG_METADATA_DROP`, `JDBC`, `UI_EXPORT`, `UI_INTERNAL_PREVIEW`, `UI_INTERNAL_RUN`, `UI_PREVIEW`, `UI_RUN`, `METADATA_REFRESH`, `ODBC`, `PREPARE_INTERNAL`, `REST`, `UNKNOWN`  |  
| user_name  | varchar  | The username of the user who submitted the job. For jobs that are triggered by Dremio, this value is `$dremio$`.  |  
| queried_datasets  | [varchar]  | An array representation of the fully-qualified dataset (table and view) names referenced by the job.  |  
| scanned_datasets  | [varchar]  | An array representation of the fully-qualified table names or Reflection IDs scanned during the process.   
**Note:** The scanned datasets are often different from the `queried_datasets`.  |  
| attempt_count  | integer  | The number of attempts that the job was attempted.  |  
| submitted_ts  | timestamp  | The date and time when the job was submitted to the system.  |  
| attempt_started_ts  | timestamp  | The date and time when latest attempt of the job was started. In most cases, this will be the same value as `submitted_ts`.  |  
| metadata_retrieval_ts  | timestamp  | The date and time when the metadata retrieval phase of the job started.  |  
| planning_start_ts  | timestamp  | The date and time when the planning phase of the job started.  |  
| query_enqueued_ts  | timestamp  | The date and time when the job was first submitted to the engine.  |  
| engine_start_ts  | timestamp  | The date and time when the engine replica start up was triggered.  |  
| execution_planning_ts  | timestamp  | The date and time when the execution planning phase of the job started.  |  
| execution_start_ts  | timestamp  | The date and time when the job started processing on the engine replicas.  |  
| final_state_ts  | timestamp  | The date and time when the job execution reached a final state (complete, failed, or canceled).  |  
| submitted_epoch_millis  | bigint  | The date and time (in milliseconds) when the job was submitted to the system.  |  
| attempt_started_epoch_millis  | bigint  | The date and time (in milliseconds) when this attempt started. In most cases, this will be the same value as `submitted_epoch`.  |  
| metadata_retrieval_epoch_millis  | bigint  | The date and time (in milliseconds) when the metadata retrieval phase of the job started.  |  
| planning_start_epoch_millis  | bigint  | The date and time (in milliseconds) when the planning phase of the job started.  |  
| query_enqueued_epoch_millis  | bigint  | The date and time (in milliseconds) when the job was first submitted to the engine.  |  
| engine_start_epoch_millis  | bigint  | The date and time (in milliseconds) when the engine replica startup was triggered.  |  
| execution_planning_epoch_millis  | bigint  | The date and time (in milliseconds) when the execution planning phase of the job started.  |  
| execution_start_epoch_millis  | bigint  | The date and time (in milliseconds) when the job started processing on the engine replicas.  |  
| final_state_epoch_millis  | bigint  | The date and time (in milliseconds) when the job execution reached a final state (complete, failed, or canceled).  |  
| planner_estimated_cost  | double  | The estimated cost value provided by the planner.  |  
| rows_scanned  | bigint  | The sum of rows that were scanned by all the scans in the job.  |  
| bytes_scanned  | bigint  | The sum of the bytes that were scanned by all the scans in the job.  |  
| rows_returned  | bigint  | The number of rows returned by the job.  |  
| bytes_returned  | bigint  | The number of bytes returned by the job results.  |  
| accelerated  | Boolean  | If the job was accelerated by a Reflection, `true`. Otherwise, `false`.  |  
| queue_name  | varchar  | The name of the queue that the job is executing on.  |  
| engine  | varchar  | The name of the engine that the job is executing on.  |  
| error_msg  | varchar  | This value will contain the error message that resulted from the job if the job failed.  |  
| query  | varchar  | The SQL query that was submitted.  |  
| is_profile_incomplete  | Boolean  | If the job has incomplete telemetry data, `true`. Otherwise, `false`.  |  
| execution_allocated_bytes  | bigint  | The number of bytes of direct memory that were allocated for the job execution (available as of Dremio 25.1.0+).  |  
| execution_cpu_time_millis  | bigint  | The amount of CPU time (in milliseconds) spent on the job execution (available as of Dremio 25.1.0+).  |  
| rule_name  | varchar  | The name of the routing rule that either `REJECTED` or `PLACED` the job on a queue (available as of Dremio 25.2.19+).  |  
| rule_content  | varchar  | The formula specified in the routing rule was found to be `true` (available as of Dremio 25.2.19+).  |  
| rule_action  | varchar  | The `REJECT` or `PLACE` action taken by the routing rule (available as of Dremio 25.2.19+).  |  
Was this page helpful?
[Previous SYS.ENGINES](/reference/sql/system-tables/engines)[Next SYS.JOBS_RECENT](/reference/sql/system-tables)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.ENGINES](/reference/sql/system-tables/engines)[Next SYS.JOBS_RECENT](/reference/sql/system-tables)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsystem-tables%2Fjobs%2F&_biz_t=1777950692559&_biz_i=SYS.JOBS%20%7C%20Dremio%20Documentation&_biz_n=719&rnd=155594&cdn_o=a&_biz_z=1777950692560)
