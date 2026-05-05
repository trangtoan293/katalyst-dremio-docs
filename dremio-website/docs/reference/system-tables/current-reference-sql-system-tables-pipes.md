---
url: /reference/sql/system-tables/pipes
title: "SYS.PIPES | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64372.793921375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.PIPES

Version: current [26.x]
On this page
# SYS.PIPES Enterprise
The `sys.pipes` table contains the metadata for autoingest pipes.
Syntax

```
SELECT *  
FROM sys.pipes  

```

## Example Output[​](/reference/sql/system-tables/pipes#example-output "Direct link to Example Output")  
| pipe_id  | pipe_name  | source_path  | target_table  | target_branch  | dedup_lookback_period_days  | file_format  | format_options  | pipe_status  | error_message  | notification_provider  | notification_queue_ref  | created_at  | last_updated_at  | created_by  | last_updated_by  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| 525ffe04-97bb-473e-8e76-fa559faa7d0d  | test_pipe  | @s3/ingestion-test  | s3."ingestion-test".pipe_sink_table  | main  | 14  | CSV  | `{"DATE_FORMAT":"YYYY-MM-DD\"T\"HH24:MI:SS.FFF","RECORD_DELIMITER":"\n","FIELD_DELIMITER":","}`  | STOPPED_STORAGE_LOCATION_ALTERED  | Resource not found at path @s3/ingestion-test  | AWS_SQS  | arn:aws:sqs:us-west-2:123243142826:data_ingestion_queue  | 2024-08-05T13:39:41.167Z  | 2024-08-05T13:39:41.167Z  | dremio  | dremio  |  
## Columns[​](/reference/sql/system-tables/pipes#columns "Direct link to Columns")  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| pipe_id  | varchar  | The unique identifier of the autoingest pipe.  |  
| pipe_name  | varchar  | The name of the autoingest pipe.  |  
| source_path  | varchar  | The preconfigured source path specified in the CREATE PIPE command.  |  
| target_table  | varchar  | The name of the target Iceberg table.  |  
| target_branch  | varchar  | The name of the target branch if Nessie was used as a catalog.  |  
| dedup_lookback_period_days  | integer  | The number of days that Dremio looks back when comparing newly uploaded files to previously loaded files for file deduplication.  |  
| file_format  | varchar  | The file format associated with the pipe.  |  
| format_options  | varchar  | The specific file format options that are used in the COPY INTO statement when the pipe is triggered.  |  
| pipe_status  | varchar  | The state of the pipe. Enum: 
  * `RUNNING`: The pipe is running as expected.
  * `PAUSED`: The pipe exists but loads are not triggered when files are uploaded to the source.
  * `STOPPED_MISSING_TABLE_OR_BRANCH`: Dremio has stopped the pipe because either the target table or target branch does not exist.
  * `STOPPED_STORAGE_LOCATION_ALTERED`: Dremio has stopped the pipe because a user has altered the source root path.
  * `STOPPED_ACCESS_DENIED`: Dremio has stopped the pipe because Dremio cannot access the source location.
  * `STOPPED_MISSING_DREMIO_SOURCE`: Dremio has stopped the pipe because the source referenced in the pipe no longer exists.
  * `UNHEALTHY`: Autoingestion is failing due to an unknown root cause. Often a transient issue, and the system usually self-corrects and catches up.
  * `STOPPED_INTERNAL_ERROR`: The pipe is stopped because all pipe jobs failed within 5 days due to an unknown cause.

 |  
| error_message  | varchar  | The last error message for a pipe job that did not complete successfully.  |  
| notification_provider  | varchar  | The provider of the event notification queue. Enum: `AWS_SQS`.  |  
| notification_queue_ref  | varchar  | The unique identifier of the event notification queue.  |  
| created_at  | timestamp  | The date and time at which the pipe was created.  |  
| last_updated_at  | timestamp  | The date and time of the last modification to the pipe definition.  |  
| created_by  | varchar  | The user who created the pipe.  |  
| last_updated_by  | varchar  | The user who last updated the pipe definition.  |  
Was this page helpful?
[Previous SYS.PIPE_SUMMARY](/reference/sql/system-tables)[Next SYS.PRIVILEGES](/reference/sql/system-tables/privileges)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.PIPE_SUMMARY](/reference/sql/system-tables)[Next SYS.PRIVILEGES](/reference/sql/system-tables/privileges)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsystem-tables%2Fpipes%2F&_biz_t=1777950693563&_biz_i=SYS.PIPES%20%7C%20Dremio%20Documentation&_biz_n=725&rnd=434103&cdn_o=a&_biz_z=1777950693563)
