---
url: /reference/sql/system-tables/reflections
slug: /reference/sql/system-tables/reflections
title: "SYS.REFLECTIONS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64372.477661333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.REFLECTIONS

Version: current [26.x]
On this page
# SYS.REFLECTIONS
The `sys.reflections` table contains metadata for Reflections in the Dremio instance.
Syntax

```
SELECT *   
FROM sys.reflections  

```

## Example Output​  
| reflection_id  | reflection_name  | type  | created_at  | updated_at  | status  | dataset_id  | dataset_name  | dataset_type  | sort_columns  | partition_columns  | distribution_columns  | dimensions  | measures  | display_columns  | external_Reflection  | num_failures  | last_failure_message  | last_failure_stack  | arrow_cache  | refresh_status  | acceleration_status  | record_count  | current_footprint_bytes  | total_footprint_bytes  | last_refresh_duration_millis  | last_refresh_from_table  | refresh_method  | available_until  | considered_count  | matched_count  | accelerated_count  | reflection_mode  | last_refresh_decision  | last_refresh_finished  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| 76b42fc7-7f81-451a-a24c-646cdd99cd52  | Raw Reflection  | RAW  | 2023-02-22 19:56:04  | 2023-02-22 19:56:04  | FAILED  | 78097c46-bdef-42cd-8265-89cb763368ce  | Regions  | VIRTUAL_DATASET  |   |   |   |   |   | "pickup_datetime, passenger_count, trip_distance_mi, fare_amount, tip_amount, total_amount"  |   | 3  |   |   | FALSE  | GIVEN_UP  | NONE  | -1  | 0  | 0  | -1  | 2024-03-18 20:42:07.175  | FULL  | 1970-01-01 0:00:00  | 0  | 0  | 0  | Manual  | No changes were detected in dependencies since the last refresh. The reflection will not be updated. Dependencies:  
DatasetId: 7588387a-ed9f-45c4-880f-988020b0481e, Path: [Source, Regions], SnapshotId: 4149401083380936712  | 2025-12-03 16:22:42.293  |  
| f154623d-de50-4b32-8049-085228917357  | Aggregation Reflection  | AGGREGATION  | 2023-07-15 0:35:03  | 2023-07-15 0:35:03  | FAILED  | 11add18a-b642-43ed-856e-c2fd3f3c64e0  | "Samples.""samples.dremio.com"".""zip_lookup.csv"""  | PHYSICAL_DATASET_SOURCE_FILE  |   |   |   | B  | C  |   |   | 3  |   |   | FALSE  | GIVEN_UP  | NONE  | -1  | 0  | 0  | -1  | 1970-01-01 00:00:00.000  | FULL  | 1970-01-01 0:00:00  | 0  | 0  | 0  | Manual  | Full Refresh.  
No existing refresh, doing an initial full refresh.  | 2025-12-03 16:22:41.478  |  
| 2e2b48f3-fba9-4b87-909d-19b9b8b7bc43  | Raw Reflection  | RAW  | 2023-07-15 0:34:53  | 2023-07-15 0:34:53  | FAILED  | 11add18a-b642-43ed-856e-c2fd3f3c64e0  | "Samples.""samples.dremio.com"".""zip_lookup.csv"""  | PHYSICAL_DATASET_SOURCE_FILE  |   |   |   |   |   | "A, B, C, D"  |   | 3  |   |   | FALSE  | GIVEN_UP  | NONE  | -1  | 0  | 0  | -1  | 2024-03-12 21:42:55.407  | FULL  | 1970-01-01 0:00:00  | 0  | 0  | 0  | Manual  | Full Refresh.  
No existing refresh, doing an initial full refresh.  | 2025-12-03 16:22:42.079  |  
| 6e2fc27b-39f5-42e4-a386-ffd2b95cc320  | Aggregation Reflection  | AGGREGATION  | 2023-07-15 0:35:38  | 2023-07-15 0:35:38  | FAILED  | 031256b0-f935-41df-af67-0a8b85c02965  | "Samples.""samples.dremio.com"".""SF weather 2018-2019.csv"""  | PHYSICAL_DATASET_SOURCE_FILE  |   |   |   | J  | C  |   |   | 3  |   |   | FALSE  | GIVEN_UP  | NONE  | -1  | 0  | 0  | -1  | 2024-03-15 15:47:06.058  | FULL  | 1970-01-01 0:00:00  | 0  | 0  | 0  | Manual  | Snapshot Based Incremental Refresh for Append Only workflows.  
Anchor dataset Samples."samples.dremio.com"."SF weather 2018-2019" has been updated from snapshot 4149401083380936712 to snapshot 1587124389305949441  | 2025-12-02 11:43:18.660  |  
| 85278d59-5daf-4583-809c-1164766ee425  | Raw Reflection  | RAW  | 2023-07-15 0:35:28  | 2023-07-15 0:35:28  | FAILED  | 031256b0-f935-41df-af67-0a8b85c02965  | "Samples.""samples.dremio.com"".""SF weather 2018-2019.csv"""  | PHYSICAL_DATASET_SOURCE_FILE  |   |   |   |   |   | "A, B, C, D, E, F, G, H, I, J, K, L"  |   | 3  |   |   | FALSE  | GIVEN_UP  | NONE  | -1  | 0  | 0  | -1  | 1970-01-01 00:00:00.000  | FULL  | 1970-01-01 0:00:00  | 0  | 0  | 0  | Manual  | Full Refresh.  
No existing refresh, doing an initial full refresh.  | 2025-12-03 16:23:01.093  |  
## Columns​  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| accelerated_count  | integer  | Number of jobs accelerated by the Reflection.  |  
| acceleration_status  | varchar  | Status of the Reflection's availability for accelerating queries.  |  
| available_until  | timestamp  | Date and time that the Reflection expires, in UTC format.  |  
| considered_count  | integer  | Number of jobs that considered the Reflection during planning.  |  
| created_at  | timestamp  | Date and time that the Reflection was created, in UTC format.  |  
| current_footprint_bytes  | bigint  | Data size of the latest Reflection job (if one exists), in bytes.  |  
| dataset_id  | varchar  | The UUID to identify the dataset that the Reflection is on.  |  
| dataset_name  | varchar  | The path and name of the dataset that the Reflection is on.  |  
| dataset_type  | varchar  | The type of dataset that the Reflection has been created on. Enum: `PHYSICAL_DATASET_HOME_FILE`, `PHYSICAL_DATASET_SOURCE_FILE`, `PHYSICAL_DATASET_SOURCE_FOLDER`, `VIRTUAL_DATASET`  |  
| dimensions  | varchar  | The list of dimension columns or expressions.  |  
| display_columns  | varchar  | The list of displayed columns.  |  
| distribution_columns  | varchar  | The list of distributed columns.  |  
| external_Reflection  | varchar  | The field will be populated if the Reflection is an external Reflection.  |  
| last_failure_message  | varchar  | The error message of the last failed Reflection refresh, which is cleared out once one Reflection refresh succeeds.  |  
| last_failure_stack  | varchar  | The stack trace of the last failed Reflection refresh, which is cleared out once one Reflection refresh succeeds.  |  
| last_refresh_duration_millis  | bigint  | Duration of the most recent refresh for the Reflection, in milliseconds.  |  
| last_refresh_from_table  | timestamp  | Date and time of the last refresh of the tables from which the Reflection is ultimately derived, in UTC format.  |  
| matched_count  | integer  | Number of jobs that matched the Reflection during planning.  |  
| measures  | varchar  | The list of measures.  |  
| num_failures  | integer  | The number of recent failures.  |  
| partition_columns  | varchar  | The list of columns that the dataset is partioned on.  |  
| record_count  | bigint  | Number of records returned for the latest Reflection.  |  
| reflection_id  | varchar  | The UUID to identify the Reflection.  |  
| reflection_mode  | varchar  | How the Reflection was created. If created by a user, the value is `Manual`. If created through Autonomous Reflections, the value is `Autonomous`.  |  
| reflection_name  | varchar  | The user-defined name of the Reflection.  |  
| refresh_method  | varchar  | The method used for the most recent refresh of the Reflection. For new Reflections, the value is `NONE`. For more information, see [Refresh Reflections](/acceleration/manual-reflections/refreshing-reflections).  |  
| refresh_status  | varchar  | Status of the Reflection refresh.  |  
| sort_columns  | varchar  | The list of columns that will be sorted on.  |  
| status  | varchar  | The status of the Reflection based on the last time the Reflection was used. Enum: `CAN_ACCELERATE`, `CAN_ACCELERATE_WITH_FAILURES`, `REFRESHING`, `FAILED`, `EXIPRED`, `DISABLED`, `INVALID`, `CANNOT_ACCELERATE_SCHEDULED`, `CANNOT_ACCELERATE_MANUAL`  |  
| total_footprint_bytes  | bigint  | Data size of all Reflection jobs that have not been pruned (if any exist), in bytes.  |  
| type  | varchar  | The type of Reflection. Enum: `AGGREGATION`, `RAW`  |  
| updated_at  | timestamp  | Date and time that the Reflection was last updated, in UTC format.  |  
| last_refresh_decision  | varchar  | The refresh decision made for the last Reflection refresh job. This can be a full, incremental, or no-op refresh with a brief explanation.  |  
| last_refresh_finished  | timestamp  | UTC timestamp of when the last Reflection refresh job attempt finished, regardless of the job state.  |  
Was this page helpful?
[Previous SYS.REFLECTION_DEPENDENCIES](/reference/sql/system-tables/reflection-dependencies)[Next SYS.RESULTS_CACHE](/reference/sql/system-tables/results-cache)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.REFLECTION_DEPENDENCIES](/reference/sql/system-tables/reflection-dependencies)[Next SYS.RESULTS_CACHE](/reference/sql/system-tables/results-cache)
!
