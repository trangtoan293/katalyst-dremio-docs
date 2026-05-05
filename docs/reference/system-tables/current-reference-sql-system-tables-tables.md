---
url: /reference/sql/system-tables/tables
slug: /reference/sql/system-tables/tables
title: "SYS.\"TABLES\" | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64378.231571833
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS."TABLES"

Version: current [26.x]
On this page
# SYS."TABLES"
The `sys."tables"` table contains metadata for tables in the Dremio instance.
The name of the table must be encapsulated in quotes ("tables") so that it is parsed as the table name instead of the reserved keyword `tables`.
Syntax

```
SELECT *  
FROM sys."tables"  

```

## Example Output​  
| table_id  | source_id  | table_name  | schema_id  | path  | tag  | type  | format_type  | approx_statistics_allowed  | created  | owner_id  | owner_type  | masking_policies  | row_access_policies  | clustering_keys  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| 5d78cc0a-dc43-0319-ad01-f4a4990ccada  | 6ae7ed51-449b-4826-8745-af31602d1f90  | PoliceIncidents  | 063ca5a3-be0e-766c-8f6f-d59ada26b0cf  | [testsource, FolderA, v1]  | 00001-983af174-4d55-4556-b36f-fde125672f1e  | NESSIE_TABLE  | ICEBERG  | false  | 2023-12-01 17:23:20.204  | $unowned$  | $unowned$  | []  | []  | _empty text_  |  
| 00cf3b4c-4042-4474-bad8-3a5c8bb6ffe9  | 7c8f019b-2e48-4d40-8a2f-038dae416dc4  | CATALOGS  | _empty text_  | [INFORMATION_SCHEMA, CATALOGS]  | nqoL6Ab63EE=  | SYSTEM_TABLE  | _empty text_  | false  | 2021-12-08 15:47:51.880  | $unowned$  | $unowned$  | []  | []  | _empty text_  |  
| ab94e588-6efa-4cbc-8641-6ac35887808f  | 7c8f019b-2e48-4d40-8a2f-038dae416dc4  | COLUMNS  | _empty text_  | [INFORMATION_SCHEMA, COLUMNS]  | nn9iIx6sBXM=  | SYSTEM_TABLE  | _empty text_  | false  | 2021-12-08 15:47:52.022  | $unowned$  | $unowned$  | []  | []  | _empty text_  |  
| 88bc523d-814c-464f-b794-b0a123da15c5  | 7c8f019b-2e48-4d40-8a2f-038dae416dc4  | SCHEMATA  | _empty text_  | [INFORMATION_SCHEMA, SCHEMATA]  | 2B2bcqtiiRY=  | SYSTEM_TABLE  | _empty text_  | false  | 2021-12-08 15:47:51.922  | $unowned$  | $unowned$  | []  | []  | _empty text_  |  
| 776c727b-93a7-4ede-86de-f2c117b81aaa  | 7c8f019b-2e48-4d40-8a2f-038dae416dc4  | TABLES  | _empty text_  | [INFORMATION_SCHEMA, TABLES]  | R2+uXXdzCD8=  | SYSTEM_TABLE  | _empty text_  | false  | 2021-12-08 15:47:51.953  | $unowned$  | $unowned$  | []  | []  | _empty text_  |  
| 448136c0-65d0-4182-af42-3f2015acec1d  | 7c8f019b-2e48-4d40-8a2f-038dae416dc4  | VIEWS  | _empty text_  | [INFORMATION_SCHEMA, VIEWS]  | DzR2AE93Xi0=  | SYSTEM_TABLE  | _empty text_  | false  | 2021-12-08 15:47:51.987  | $unowned$  | $unowned$  | []  | []  | _empty text_  |  
| eb5e9ee9-dbd7-40a8-b48a-5aa0170383fd  | bd02d9ed-9a1e-4fba-b59b-d0d74b6d7232  | NYC-taxi-trips  | 8e7d637e-dc4f-4372-83cc-08e51bc81cc7  | [Samples, samples.dremio.com, NYC-taxi-trips]  | 1wa3yogWHHM=  | PHYSICAL_DATASET  | PARQUET  | false  | 2021-12-10 06:56:55.364  | $unowned$  | $unowned$  | [function_name: ""@dremio".long_dist" args: "trip_distance" column_name: "distance_mi"]  | []  | _empty text_  |  
| a0f0edb3-b333-4c8e-880c-2d89648113f9  | bd02d9ed-9a1e-4fba-b59b-d0d74b6d7232  | zips.json  | 8e7d637e-dc4f-4372-83cc-08e51bc81cc7  | [Samples, samples.dremio.com, zips.json]  | rFfpVH9umtQ=  | PHYSICAL_DATASET  | JSON  | false  | 2022-01-05 22:10:42.528  | $unowned$  | $unowned$  | []  | []  | _empty text_  |  
## Columns​  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| table_id  | varchar  | The UUID to identify the table.  |  
| source_id  | varchar  | The UUID to identify the source that the table is associated with.  |  
| table_name  | varchar  | The user- or system-defined name of the table.  |  
| schema_id  | varchar  | The UUID for the schema/folder in which the table is contained.  |  
| path  | varchar  | The string array representation of the path of the table.  |  
| tag  | varchar  | The UUID that is generated to identify the instance of the table. Dremio changes this tag whenever a change is made to the table.  |  
| type  | varchar  | The type of table.   
Enum: PHYSICAL_DATASET, SYSTEM_TABLE, NESSIE_TABLE  |  
| format_type  | varchar  | The format type of the data.   
Enum: ARROW, AVRO, CSV, DELTA, EXCEL, FOLDER, HTTP_LOG, ICEBERG, ICEBERG_TABLE, ICEBERG_VIEW, JSON, ORC, PARQUET, PSV, TEXT, TSV, UNKNOWN, XLS, _empty text_  |  
| approx_statistics_allowed  | boolean  | When set, COUNT DISTINCT queries will return approximate results. This value will be true if approximate results will be returned and false otherwise.  |  
| created  | timestamp  | The date and time that the table was created.  |  
| owner_id  | varchar  | The UUID for the owner (user or role) of the table. This UUID corresponds to the id in the `users` or `roles` system table.  |  
| owner_type  | varchar  | The type of owner of the table. This value will be $unowned$ if ownership has not been granted for the table.   
Enum: USER_OWNER, ROLE_OWNER, $unowned$  |  
| masking_policies  | varchar  | The masking policies set on the table.  |  
| row_access_policies  | varchar  | The row-access policies set on the table.  |  
| clustering_keys  | varchar  | The clustering columns defined in the table DDL.  |  
Was this page helpful?
[Previous SYS.ROLES](/reference/sql/system-tables/roles)[Next SYS.TIMEZONE_NAMES](/reference/sql/system-tables/timezone-names)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.ROLES](/reference/sql/system-tables/roles)[Next SYS.TIMEZONE_NAMES](/reference/sql/system-tables/timezone-names)
