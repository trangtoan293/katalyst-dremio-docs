---
url: /reference/sql/system-tables/copy-errors-history
slug: /reference/sql/system-tables/copy-errors-history
title: "SYS.COPY_ERRORS_HISTORY | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64371.909160875
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.COPY_ERRORS_HISTORY

Version: current [26.x]
On this page
# SYS.COPY_ERRORS_HISTORY
The `sys.copy_errors_history` table stores information about COPY INTO operations that were run with `ON_ERROR` set to `continue` or `skip_file` and that rejected at least one record in a CSV, JSON, or Parquet file.
Syntax

```
SELECT * FROM SYS.COPY_ERRORS_HISTORY  

```

Results display information only about COPY INTO operations that were initiated by the querying user.
## Example Output​  
| executed_at  | job_id  | table_name  | user_name  | base_snapshot_id  | storage_location  | file_path  | file_state  | records_loaded_count  | records_rejected_count  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| 2023-11-14 10:39:56.535  | 1aacb195-ca94-ec4c-2b01-ecddac81a900  | "my-location"."test".my-folder.ice_tbl_types  | user_1  | 8234571992740262000  | "my-location"."test".my-folder.source-data.json."data/"  | /test/my-folder/source-data/json/data/test.json  | SKIPPED  | 0  | 1  |  
| 2023-11-18 22:24:53.411  | 1aa6c65f-ff9f-d4c5-4625-c8489898e900  | "my-location"."test".my-folder.ice_tbl_types  | user_1  | 8234571992740262000  | "my-location"."test".my-folder.source-data.csv."data/"  | /test/my-folder/source-data/csv/data/test_2.csv  | PARTIALLY_LOADED  | 8  | 1  |  
| 2023-11-18 22:24:53.411  | 1aa6c65f-ff9f-d4c5-4625-c8489898e900  | "my-location"."test".my-folder.ice_tbl_types  | user_1  | 8234571992740262000  | "my-location"."test".my-folder.source-data.csv."data/"  | /test/my-folder/source-data/csv/data/test_4.csv  | SKIPPED  | 0  | 1  |  
| 2023-11-18 22:24:53.411  | 1aa6c65f-ff9f-d4c5-4625-c8489898e900  | "my-location"."test".my-folder.ice_tbl_types  | user_1  | 8234571992740262000  | "my-location"."test".my-folder.source-data.csv."data/"  | /test/my-folder/source-data/csv/data/test_0.csv  | PARTIALLY_LOADED  | 8  | 1  |  
| 2023-11-18 22:24:53.411  | 1aa6c65f-ff9f-d4c5-4625-c8489898e900  | "my-location"."test".my-folder.ice_tbl_types  | user_1  | 8234571992740262000  | "my-location"."test".my-folder.source-data.csv."data/"  | /test/my-folder/source-data/csv/data/test_3.csv  | PARTIALLY_LOADED  | 8  | 1  |  
## Columns​  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| executed_at  | timestamptz  | The timestamp in milliseconds when the current row was written to the system table.  |  
| job_id  | string  | The ID of the COPY INTO job.  |  
| table_name  | string  | The name of the target table for the COPY INTO job.  |  
| user_name  | string  | The user name of the user who executed the COPY INTO command.  |  
| base_snapshot_id  | long  | The id of the last snapshot of the target table before the result of the COPY INTO command was committed.  |  
| storage_location  | string  | The storage location that was specified in the COPY INTO command.  |  
| file_path  | string  | The path of the input file that contained one or more rejected records (if the file is a CSV file) or one rejected record (if the file is a JSON file).  |  
| file_state  | string  | The state of the file. Possible values:   
  
`PARTIALLY_LOADED` -- At least one record from the file has been loaded into the target table and at least one record was rejected.  
  
`SKIPPED` -- No records from the file have been loaded because none of them could be parsed.  |  
| records_loaded_count  | long  | The number of records loaded successfully from this file.  |  
| records_rejected_count  | long  | The number of records that could not be loaded due to errors within the file.  |  
Depending on how often COPY INTO jobs with the `ON_ERROR 'continue'` or `ON_ERROR 'skip_file'` options are executed, this system table can accumulate a substantial number of records. You can remove records by using these two support keys:
  * dremio.system_iceberg_tables.record_lifespan_in_millis: Sets the number of days of history to retain in the system table. The default is seven days.
  * dremio.system_iceberg_tables.housekeeping_thread_frequency_in_millis: Sets the frequency of the cleaner thread that removes records older than the number of days set by dremio.system_iceberg_tables.record_lifespan_in_millis. The default is once a day.


Was this page helpful?
[Previous SYS.HISTORY.AUTONOMOUS_REFLECTIONS](/reference/sql/system-tables/autonomous-reflections-historical)[Next SYS.COPY_FILE_HISTORY](/reference/sql/system-tables/copy-file-history)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.HISTORY.AUTONOMOUS_REFLECTIONS](/reference/sql/system-tables/autonomous-reflections-historical)[Next SYS.COPY_FILE_HISTORY](/reference/sql/system-tables/copy-file-history)
