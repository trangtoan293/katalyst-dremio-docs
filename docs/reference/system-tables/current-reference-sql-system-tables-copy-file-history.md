---
url: /reference/sql/system-tables/copy-file-history
slug: /reference/sql/system-tables/copy-file-history
title: "SYS.COPY_FILE_HISTORY | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64372.448954583
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.COPY_FILE_HISTORY

Version: current [26.x]
On this page
# SYS.COPY_FILE_HISTORY Enterprise
The `sys.copy_file_history` table contains the history of every file in a [COPY INTO](/reference/sql/commands/apache-iceberg-tables/copy-into-table) operation, including files loaded by an [autoingest pipe](/load-data/autoingestion). Each row in the table represents a single file and its load metadata.
Syntax

```
SELECT *  
FROM sys.copy_file_history  

```

## Example Output​  
| event_timestamp  | job_id  | file_path  | file_state  | records_loaded_count  | records_rejected_count  | pipe_id  | file_size  | first_error_message  | file_notification_timestamp  | ingestion_source_type  | request_id  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| 2024-05-22T10:47:44.846  | 19b232b3-362b-f366-1d4a-772da8a70d00  | tlelek-test-bucket/ingestionE2E/217/s3:/tlelek-test-bucket/ingestion/1k_jsons/generated_json_f488.json  | SKIPPED  | 0  | 0  | 0244f174-ce25-4876-98fc-8ac9ae53b294  | 11000  | No such file or directory: s3a://tlelek-test-bucket/ingestionE2E/217/s3:/tlelek-test-bucket/ingestion/1k_jsons/generated_json_f488.json  | 2024-05-20T15:41:33.873  | REST  | b2c7c734-187e-4c32-a100-6f6529fdec74  |  
## Columns​  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| event_timestamp  | timestamp  | The date and time at which the file was loaded in a COPY INTO operation. In cases where the COPY INTO command was initiated by an autoingest pipe, the `event_timestamp` value with the `file_notification_timestamp` value to determine the lag time between when the file is uploaded and when Dremio is notified about the file.  |  
| job_id  | varchar  | The unique identifier for the job associated with the file being loaded in the COPY INTO operation.  |  
| file_path  | varchar  | The path for the file loaded by the autoingest pipe.  |  
| file_state  | varchar  | The state of the file. Enum: 
  * `IN_PROGRESS`: Load is in progress. Applies only to files that are loaded by the autoingest pipe.
  * `FULLY_LOADED`: The entire file was loaded into a table with no errors. Applies only to files that are loaded by the autoingest pipe.
  * `PARTIALLY_LOADED`: At least one row of the file was loaded into a table, and at least one row of the file had an error. Does not apply to files that are loaded by the autoingest pipe.
  * `SKIPPED`: No rows from the file were loaded. Occurs when a file does not contain any rows or every row in the file had an error. 

 |  
| records_loaded_count  | integer  | The number of records loaded from the file.  |  
| records_rejected_count  | integer  | The number of records rejected from the file.  |  
| pipe_id  | varchar  | The unique identifier for the autoingest pipe.  |  
| file_size  | integer  | The file size in bytes.  |  
| first_error_message  | varchar  | The first error message returned while the file was being loaded in the COPY INTO operation.  |  
| file_notification_timestamp  | timestamp  | The date and time at which Dremio received a notification that the file was loaded into cloud storage in cases where the COPY INTO command was initiated by an autoingest pipe.  |  
| ingestion_source_type  | varchar  | The type of source used for the autoingest pipe. Enum: `AWS`, `REST`.  |  
| request_id  | varchar  | The unique identifier of the request associated with REST API-based ingestion. The `request_id` value is `NULL` if you used the COPY INTO command to load the file.  |  
Was this page helpful?
[Previous SYS.COPY_ERRORS_HISTORY](/reference/sql/system-tables/copy-errors-history)[Next SYS.ENGINES](/reference/sql/system-tables/engines)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.COPY_ERRORS_HISTORY](/reference/sql/system-tables/copy-errors-history)[Next SYS.ENGINES](/reference/sql/system-tables/engines)
