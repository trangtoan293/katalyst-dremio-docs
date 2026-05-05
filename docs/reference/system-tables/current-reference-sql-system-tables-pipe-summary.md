---
url: /reference/sql/system-tables/pipe_summary
slug: /reference/sql/system-tables/pipe_summary
title: "SYS.PIPE_SUMMARY | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64372.524601625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.PIPE_SUMMARY

Version: current [26.x]
On this page
# SYS.PIPE_SUMMARY Enterprise
The `sys.pipe_summary` table summarizes high-level statistics for [autoingest pipes](/load-data/autoingestion). Each row in the table represents a single pipe and its historical metadata.
Syntax

```
SELECT * FROM sys.pipe_summary  

```

## Example Output[​](/reference/sql/system-tables)  
| pipe_name  | pipe_id  | jobs_count  | files_loaded_count  | files_skipped_count  | files_partially_loaded_count  | pipe_status  | error_message  | last_updated_at  | total_records_count  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| test_pipe  | f0336bf3-f082-4c89-9753-7dcf66ce2472  | 10  | 100  | 2  | 0  | RUNNING  | _empty text_  | 2024-07-08 22:07:42.995  | 100150  |  
## Columns[​](/reference/sql/system-tables)  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| pipe_name  | varchar  | The name of the pipe.  |  
| pipe_id  | varchar  | The unique identifier of the pipe.  |  
| jobs_count  | integer  | The number of jobs completed for autoingestion related to this pipe.  |  
| files_loaded_count  | integer  | The number of files loaded successfully.  |  
| files_skipped_count  | integer  | The number of files skipped completely due to validation errors.  |  
| files_partially_loaded_count  | integer  | The number of files partially loaded.  |  
| pipe_status  | varchar  | The state of the pipe. Enum: 
  * `Running`: The pipe is running as expected.
  * `Paused`: The pipe exists but loads are not triggered when files are uploaded to the source. The user initiates this state by running ALTER PIPE and setting the pipe execution. 
  * `Stopped_Missing_Table_or_Branch`: Dremio has stopped the pipe because either the target table or target branch does not exist.
  * `Stopped_Storage_Location_Altered`: Dremio has stopped the pipe because a user has altered the source root path.
  * `Stopped_Access_Denied`: Dremio has stopped the pipe because Dremio cannot access the source location.
  * `Stopped_Missing_Dremio_Source`: Dremio has stopped the pipe because the source referenced in the pipe no longer exists.
  * `Unhealthy`: Autoingestion is failing due to an unknown root cause. Often a transient issue, and the system usually self-corrects and catches up.
  * `Stopped_Internal_Error`: The pipe is stopped because all pipe jobs failed within 5 days due to an unknown cause.

 |  
| error_message  | varchar  | The last error message for a pipe job that did not complete successfully. Reasons include:
  * Missing (Target) Table
  * Missing Branch
  * Storage Location Altered
  * Notification Dropped
  * Access Denied
  * All Files Failed to Load

 |  
| last_updated_at  | timestamp  | The date and time at which the pipe state changed, which should default to the pipe creation time.  |  
| total_records_count  | integer  | The number of records processed by the pipe.  |  
Was this page helpful?
[Previous SYS.HISTORY.MODEL_USAGE](/reference/sql/system-tables/model-usage)[Next SYS.PIPES](/reference/sql/system-tables/pipes)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.HISTORY.MODEL_USAGE](/reference/sql/system-tables/model-usage)[Next SYS.PIPES](/reference/sql/system-tables/pipes)
!!
