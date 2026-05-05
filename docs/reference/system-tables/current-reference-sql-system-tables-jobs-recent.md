---
url: /reference/sql/system-tables/jobs_recent
slug: /reference/sql/system-tables/jobs_recent
title: "SYS.JOBS_RECENT | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64075.208142041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.JOBS_RECENT

Version: current [26.x]
On this page
# SYS.JOBS_RECENT
The `sys.jobs_recent` table contains metadata for the jobs that ran in the Dremio instance during the previous number of days specified by the support key `jobs.max.age_in_days`.
Syntax

```
SELECT *   
FROM sys.jobs_recent  

```

## Example Output[​](/reference/sql/system-tables)  
| job_id  | status  | query_type  | user_name  | queried_datasets  | scanned_datasets  | attempt_count  | submitted_ts  | attempt_started_ts  | metadata_retrieval_ts  | planning_start_ts  | query_enqueued_ts  | engine_start_ts  | execution_planning_ts  | execution_start_ts  | final_state_ts  | submitted_epoch_millis  | attempt_started_epoch_millis  | metadata_retrieval_epoch_millis  | planning_start_epoch_millis  | query_enqueued_epoch_millis  | engine_start_epoch_millis  | execution_planning_epoch_millis  | execution_start_epoch_millis  | final_state_epoch_millis  | planner_estimated_cost  | rows_scanned  | bytes_scanned  | rows_returned  | bytes_returned  | accelerated  | queue_name  | engine  | error_msg  | query  | is_profile_incomplete  | execution_allocated_bytes  | execution_cpu_time_millis  | query_cost  | memory_allocated  | setup_time_ns  | wait_time_ns  | execution_cpu_time_ns  | context  | rule_name  | rule_content  | rule_action  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| 1d3091b1-d0be-0169-8ace-e43f562c7000  | RUNNING  | UI_RUN  | dremio  | [Samples.samples.dremio.com.NYC-taxi-trips-iceberg]  | [NYC-taxi-trips-iceberg]  | 1  | 2024-06-12 16:15:29.834  | 2024-06-12 16:15:29.834  | 2024-06-12 16:15:29.834  | 2024-06-12 16:15:29.842  | 2024-06-12 16:15:29.991  | 2024-06-12 16:15:29.991  | 2024-06-12 16:15:29.998  | 2024-06-12 16:15:30.286  | 2024-06-12 16:15:35.077  | 1718208929834  | 1718208929834  | 1718208929834  | 1718208929842  | 1718208929991  | 1718208929991  | 1718208929998  | 1718208930286  | 1718208935077  | 1.3877935193058197E9  | 71424  | 3481920  | 60000  | 2925000  | FALSE  | Low Cost User Queries  | _empty text_  | _empty text_  | SELECT * FROM "NYC-taxi-trips-iceberg"  | false  | 21630908  | 864  | 3.38373777E8  | 201296896  | 2192224950  | 8919515067  | 7848800304  | [Samples, samples.dremio.com]  | UI Previews  | query_type() = 'UI Previews'  | PLACE  |  
## Columns[​](/reference/sql/system-tables)  
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
| query_cost  | double  | The estimated cost of executing a query.  |  
| memory_allocated  | bigint  | The amount of memory allocated (in bytes) for the query execution.  |  
| setup_time_ns  | bigint  | The time (in nanoseconds) taken to set up the query execution.  |  
| wait_time_ns  | bigint  | The time (in nanoseconds) spent waiting for resources before the execution begins.  |  
| execution_cpu_time_ns  | bigint  | The CPU time (in nanoseconds) consumed during the query execution.  |  
| context  | varchar  | The contextual information for the query execution.  |  
| rule_name  | varchar  | The name of the routing rule that either `REJECTED` or `PLACED` the job on a queue (available as of Dremio 25.2.19+).  |  
| rule_content  | varchar  | The formula specified in the routing rule was found to be `true` (available as of Dremio 25.2.19+).  |  
| rule_action  | varchar  | The `REJECT` or `PLACE` action taken by the routing rule (available as of Dremio 25.2.19+).  |  
Was this page helpful?
[Previous SYS.JOBS](/reference/sql/system-tables/jobs)[Next SYS.MATERIALIZATIONS](/reference/sql/system-tables/materializations)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.JOBS](/reference/sql/system-tables/jobs)[Next SYS.MATERIALIZATIONS](/reference/sql/system-tables/materializations)
!
