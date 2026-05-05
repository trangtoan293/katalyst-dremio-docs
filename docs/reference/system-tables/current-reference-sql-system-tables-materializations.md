---
url: /reference/sql/system-tables/materializations
slug: /reference/sql/system-tables/materializations
title: "SYS.MATERIALIZATIONS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64372.936613458
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.MATERIALIZATIONS

Version: current [26.x]
On this page
# SYS.MATERIALIZATIONS
The `sys.materializations` table contains monitoring history for Reflection materialization jobs. There is one type of job: REFRESH Reflection.
Syntax 

```
SELECT *  
FROM sys.materializations  

```

## Example Output​  
| reflection_id  | materialization_id  | created  | expires  | size_bytes  | series_id  | init_refresh_job_id  | series_ordinal  | join_analysis  | state  | failure_msg  | data_partitions  | last_refresh_from_pds  | last_refresh_finished  | last_refresh_duration_millis  | refresh_decision  | is_stale  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| 3f652a0d-af99-4069-a78f-37e3232a79be  | 17d01a44-f659-4354-8153-34a6a4abab0f  | 2023-01-11T19:56:36.626  | 3022-05-14T19:56:36.623  | 18275  | 1673466996777  | 1c40eb8b-0687-6a17-0bb8-7bd163b8f300  | 0  | {'{'})'{'{'})'{'}'})"joinTables":[{'{'})'{'{'})'{'}'})"tableId":0,"tableSchemaPath":["@  | DONE  | NONE  |   | 2023-01-11T19:56:36.623  | 2023-01-11T19:58:46.946  | 130323  | Full Refresh.  
No existing refresh, doing an initial full refresh.  | false  |  
| 1debae5b-6f78-45c9-b065-b7be2e20367d  | 3132df39-b6d0-4817-81b5-1bfc844104e0  | 2021-10-25T18:23:41.463  | 2021-10-25T21:20:01.412  | 283753  | 1635186221571  | 1e8909d1-8211-0729-649b-b92bb518b200  | 0  | {'{'})'{'{'})'{'}'})"joinTables":[{'{'})'{'{'})'{'}'})"tableId":0,"tableSchemaPath":["__accelerator","6c209200-b522-4f81-bbe0-d10668c7752c","3a24eebd-795e-4d1a-a504-f00dc543e860"]{'{'})'{'}'}'{'}'},{'{'})'{'{'})'{'}'})"tableId":1,"tableSchemaPath":["__accelerator","02714fb8-28c1-4dd0-a2a0-33c1b86be938","9517e8ba-ff1a-4e28-ab12-76dc6a35f525"]{'{'})'{'}'}'{'}'},{'{'})'{'{'})'{'}'})"tableId":2,"tableSchemaPath":["Samples","samples.dremio.com","NYC-taxi-trips"]{'{'})'{'}'}'{'}'}]{'{'})'{'}'}'{'}'}  | DELETED  | NONE  |   | 2021-10-25T18:20:01.412  | 1970-01-01T00:00  | 0  | No changes were detected in dependencies since the last refresh. The reflection will not be updated.  
Dependencies:  
DatasetId: e28ac7ec-da79-4183-942b-b4dbb900a7dc, Path:  
[Samples, samples.dremio.com, NYC-taxi-trips],  
SnapshotId: 6105829442935303649  | false  |  
| 76aad426-ea68-41f3-96ec-6f2890eb1a6a  | 48c2b959-da58-4fe1-8f77-0e65d1bacede  | 2023-05-18T15:56:12.174  | 3022-09-18T15:56:12.167  | 210901  | 1684425372321  | 1b99b562-d65d-16cd-aa72-63ac20de1b00  | 0  | {'{'})'{'{'})'{'}'})"joinTables":[{'{'})'{'{'})'{'}'})"tableId":0,"tableSchemaPath":["@  | DONE  | NONE  |   | 2023-05-18T15:56:12.167  | 2023-05-18T15:58:12.623  | 120456  | Full Refresh.  
No existing refresh, doing an initial full refresh.  | false  |  
| a105eb15-3010-47cf-a8c4-75018153ed6f  | 6bb608e7-9a38-4ee6-aaaa-e7521241b48b  | 2022-07-15T05:43:33.874  | 3021-11-15T05:43:33.871  | 7185  | 1657863813982  | 1d2f0179-8e48-8bd6-3f8f-9caa59b0c000  | 0  | {'{'})'{'{'})'{'}'})"joinTables":[{'{'})'{'{'})'{'}'})"tableId":0,"tableSchemaPath":["@  | DONE  | NONE  |   | 2022-07-15T05:43:33.871  | 2022-07-15T05:45:54.656  | 140785  | Full Refresh.  
No existing refresh, doing an initial full refresh.  | false  |  
| 63fd1c83-5cde-4133-9e2d-60543550580a  | 7a0313fb-2436-4cc9-a1ca-81104f4b82e5  | 2023-01-24T10:00:54.517  | 3022-05-27T10:00:54.231  | 20798936  | 1674554454841  | 1c3053a8-afea-c1e7-3249-358c7c8ef800  | 0  | {'{'})'{'{'})'{'}'})"joinTables":[{'{'})'{'{'})'{'}'})"tableId":1,"tableSchemaPath":["s3-test","flex-349","trips_pickupDate"]{'{'})'{'}'}'{'}'}]{'{'})'{'}'}'{'}'}  | DONE  | NONE  |   | 2023-01-24T10:00:54.231  | 2023-01-24T10:03:44.549  | 170318  | Full Refresh.  
No existing refresh, doing an initial full refresh.  | false  |  
| e673624e-24d9-489c-bc65-fde8993d80d6  | 8e3ea85f-d37a-4b7b-bebd-267bb1a7637f  | 2023-05-22T20:09:10.462  | 3022-09-22T20:09:10.459  | 17280539558  | 1684786150983  | 1b943419-0853-f79e-6c87-7b0171e4f600  | 0  | {'{'})'{'{'})'{'}'})"joinTables":[{'{'})'{'{'})'{'}'})"tableId":1,"tableSchemaPath":["s3-test","flex-293","trips_pickupDate"]{'{'})'{'}'}'{'}'}]{'{'})'{'}'}'{'}'}  | DONE  | NONE  |   | 2023-05-22T20:09:10.459  | 2023-05-22T20:38:00.746  | 1730287  | Full Refresh.  
No existing refresh, doing an initial full refresh.  | false  |  
| 1debae5b-6f78-45c9-b065-b7be2e20367d  | 9f212a9a-018d-4244-bd86-e6c8434b353d  | 2021-10-25T19:22:22.105  | 2021-10-25T22:20:02.067  | 284149  | 1635189742231  | 1e88fc11-2c8f-b349-2533-262eebad5f00  | 0  | {'{'})'{'{'})'{'}'})"joinTables":[{'{'})'{'{'})'{'}'})"tableId":0,"tableSchemaPath":["__accelerator","6c209200-b522-4f81-bbe0-d10668c7752c","8237977a-8f62-4e97-8c57-c7c96cfc08a2"]{'{'})'{'}'}'{'}'},{'{'})'{'{'})'{'}'})"tableId":1,"tableSchemaPath":["__accelerator","02714fb8-28c1-4dd0-a2a0-33c1b86be938","17ce27c5-8aae-4ea2-a565-976aef2d70cd"]{'{'})'{'}'}'{'}'},{'{'})'{'{'})'{'}'})"tableId":2,"tableSchemaPath":["Samples","samples.dremio.com","NYC-taxi-trips"]{'{'})'{'}'}'{'}'}]{'{'})'{'}'}'{'}'}  | DELETED  | NONE  |   | 2021-10-25T19:20:02.067  | 1970-01-01T00:00  | 0  | Snapshot Based Incremental Refresh for Append Only workflows.  
Anchor dataset Samples."samples.dremio.com"."NYC-taxi-trips" has been updated from snapshot 4149401083380936712 to snapshot 1587124389305949441  | false  |  
| 24b9b51f-424c-4478-bd1f-0667cb4e99bd  | a7016287-f92c-449b-b423-962f95a55b18  | 2022-07-15T05:43:33.795  | 3021-11-15T05:43:33.792  | 7288  | 1657863813940  | 1d2f0179-dbcb-c4e1-6c37-15e0e8fef700  | 0  | {'{'})'{'{'})'{'}'})"joinTables":[{'{'})'{'{'})'{'}'})"tableId":0,"tableSchemaPath":["@  | DONE  | NONE  |   | 2022-07-15T05:43:33.792  | 2022-07-15T05:45:54.106  | 140314  | Full Refresh.  
No existing refresh, doing an initial full refresh.  | true  |  
| 90a00924-80af-47f2-b2bb-4e5bc2d482ff  | b1dfde8c-4b8d-4893-98e6-1633f1a1c655  | 2023-01-18T13:12:54.403  | 3022-05-21T13:12:54.157  | 61395015  | 1674047575275  | 1c380fa8-c8e4-265a-376e-fbac236e4500  | 0  | {'{'})'{'{'})'{'}'})"joinTables":[{'{'})'{'{'})'{'}'})"tableId":1,"tableSchemaPath":["s3-test","flex-879","trips_pickupDate"]{'{'})'{'}'}'{'}'}]{'{'})'{'}'}'{'}'}  | DONE  | NONE  |   | 2023-01-18T13:12:54.157  | 2023-01-18T13:17:24.651  | 270494  | Full Refresh.  
No existing refresh, doing an initial full refresh.  | false  |  
| 1415a4c8-4a51-467c-b841-cfc957c0af27  | ddb76d39-4866-4547-a7b0-f17977ee7044  | 2022-09-21T17:41:06.084  | 3022-01-22T17:41:06.081  | 7616  | 1663782066229  | 1cd4b34c-bfa0-4b3f-df38-a66a4ee35b00  | 0  | {'{'})'{'{'})'{'}'})"joinTables":[{'{'})'{'{'})'{'}'})"tableId":0,"tableSchemaPath":["@  | DONE  | NONE  |   | 2022-09-21T17:41:06.081  | 2022-09-21T17:43:16.591  | 130510  | Full Refresh.  
No existing refresh, doing an initial full refresh.  | false  |  
| 2b39e158-38f2-479b-895f-ef647ec902b0  | df542d3b-a002-4be6-a964-bf035a2a7c92  | 2023-05-23T22:17:22.708  | 3022-09-23T22:17:22.379  | 838667  | 1684880242863  | 1b92c48d-156c-426d-0315-9069d49c9100  | 0  | {'{'})'{'{'})'{'}'})"joinTables":[{'{'})'{'{'})'{'}'})"tableId":1,"tableSchemaPath":["Samples (23)","samples.dremio.com","NYC-taxi-trips"]{'{'})'{'}'}'{'}'}]{'{'})'{'}'}'{'}'}  | DONE  | NONE  |   | 2023-05-23T22:17:22.379  | 2023-05-23T22:20:22.644  | 180265  | Snapshot Based Incremental Refresh for Append Only workflows.  
Anchor dataset "Samples (23)"."samples.dremio.com"."NYC-taxi-trips" has been updated from snapshot 1135195534096685603 to snapshot 2542422561267259273  | false  |  
| 9ba24fd3-840d-4045-a635-6d2ed92d03df  | e6bb8887-3de1-4eae-838d-b08d5c0c1e1d  | 2022-07-15T05:50:43.844  | 3021-11-15T05:43:33.792  | 8861  | 1657864244001  | 1d2effcb-a77b-ed4a-9aae-b09eefe7b400  | 0  | {'{'})'{'{'})'{'}'})"joinTables":[{'{'})'{'{'})'{'}'})"tableId":1,"tableSchemaPath":["__accelerator","24b9b51f-424c-4478-bd1f-0667cb4e99bd  | ""DX46904""]{'{'})'{'}'}'{'}'}]{'{'})'{'}'}'{'}'}"  | DONE  | NONE  |   | 2022-07-15T05:43:33.792  | 2022-07-15T05:52:54.174  | Full Refresh.  
No existing refresh, doing an initial full refresh.  | true  |  
## Columns​  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| reflection_id  | varchar  | The UUID of the Reflection that was refreshed.  |  
| materialization_id  | varchar  | The UUID of the materialization that was created for the Reflection.  |  
| created  | timestamp  | The timestamp of when the record of the materialization was created.  |  
| expires  | timestamp  | The timestamp of when the materialization expires. If materializations on the data source are set never to expire, the timestamp is 1000 years after the timestamp for when the materialization was created.  |  
| size_bytes  | bigint  | The current size of the materialization, in bytes.  |  
| series_id  | bigint  | One of the keys (the other being series_ordinal) into the `SYS.PROJECT.REFRESHES` table to see the details for single refreshes.  |  
| init_refresh_job_id  | varchar  | The ID of the job that created the materialization.  |  
| series_ordinal  | integer  | One of the keys (the other being series_id) into the `SYS.PROJECT.REFRESHES` table to see the details for single refreshes.  |  
| join_analysis  | varchar  | Runtime information about the input, output and unmatched row counts for probe and build sides of all joins. Used for starflake Reflection pruning.  |  
| state  | varchar  | The current state of the materialization, including the states of the job that created the materialization. 
  * `CANCELED`: Indicates that the job was canceled or that the definition of the corresponding Reflection was changed while the job was in progress.
  * `DEPRECATED`: Indicates that a new materialization with more recent data is available.
  * `DONE`: Indicates that the job to create the materialization is complete and that the materialization is available.
  * `FAILED`: Indicates that the job to create the materialization failed.
  * `RUNNING`: Indicates that the job to create the materialization is running.

 |  
| failure_msg  | varchar  | The message that is logged if the job to create a materialization fails.  |  
| data_partitions  | varchar  | This field is deprecated.  |  
| last_refresh_from_pds  | timestamp  | The timestamps of when the last refresh occurred of the tables from which the Reflection is ultimately derived.  |  
| last_refresh_finished  | timestamp  | The timestamp of when the job to create the materialization finished.  |  
| last_refresh_duration_millis  | bigint  | The duration in milliseconds of the job to create the materialization.  |  
| refresh_decision  | varchar  | The refresh decision made for the refresh job to create the materialization. This can be a full, incremental, or no-op refresh with a brief explanation.  |  
| is_stale  | boolean  | If the materialization is stale. Staleness indicates whether the data of the materialization is out-of-sync with its base tables, because they have been updated since the materialization was last refreshed. This flag applies only to materializations whose Reflections are built exclusively on Iceberg tables.  |  
Was this page helpful?
[Previous SYS.JOBS_RECENT](/reference/sql/system-tables)[Next SYS.MEMBERSHIP](/reference/sql/system-tables/membership)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.JOBS_RECENT](/reference/sql/system-tables)[Next SYS.MEMBERSHIP](/reference/sql/system-tables/membership)
!
