---
url: /reference/sql/system-tables/views
title: "SYS.VIEWS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64378.738233958
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.VIEWS

Version: current [26.x]
On this page
# SYS.VIEWS
The `sys.views` table contains metadata for views in the Dremio instance.
Syntax

```
SELECT *  
FROM sys.views  

```

## Example Output[​](/reference/sql/system-tables/views#example-output "Direct link to Example Output")  
| view_id  | space_id  | view_name  | schema_id  | path  | tag  | type  | created  | sql_definition  | sql_context  | owner_id  | owner_type  | masking_policies  | row_access_policies  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| 26d8ac0d-3f33-4826-862c-af31602d1f90  | 4d78cc0a-0319-47d1-8745-558580857a17  | v1  | efbc84c3-e70a-4126-b098-2fe2475c04dc  | [testsource, FolderA, v1]  | 00000-7eb99863-72ea-457e-b150-0c3e1d3e5980  | NESSIE_VIEW  | 2023-12-04 23:04:10.973  | SELECT * FROM Police.PoliceIncidents  | [testsource, FolderA]  | $unowned$  | $unowned$  | []  | []  |  
| e15aa988-fb0a-42a9-91ce-e8212144a2c3  | f8c65f84-c4da-40df-8b90-c5c5e716b1e4  | incidents  | _empty text_  | [test-space, incidents]  | a85f94a3-176b-40da-bb07-6c2c70cedd6f  | VIRTUAL_DATASET  | 2022-02-01 06:15:53.988  | SELECT * FROM "SF_incidents2016.json"  | Samples.samples.dremio.com  | 80702009-37c5-454c-93f2-ec41ea1722ed  | USER_OWNER  | [function_name: ""@dremio".protect_ssn" args: "state" column_name: "name"]  | []  |  
| 36b8fcf5-78fa-4d78-9b5b-bad77b218895  | f8c65f84-c4da-40df-8b90-c5c5e716b1e4  | nyc-taxi  | _empty text_  | [test-space, nyc-taxi]  | bc7c91ee-e46f-49d5-a1a3-f52af0b08e1c  | VIRTUAL_DATASET  | 2022-02-01 06:02:35.407  | SELECT * FROM "NYC-taxi-trips"  | Samples.samples.dremio.com  | 80702009-37c5-454c-93f2-ec41ea1722ed  | USER_OWNER  | []  | []  |  
| c84ea3fc-b962-4b8d-9d38-63a39d1097f8  | f8c65f84-c4da-40df-8b90-c5c5e716b1e4  | test-dataset2  | _empty text_  | [test-space, test-dataset2]  | 62bf4c5a-2b5d-4b8f-873a-ab9e5aa81469  | VIRTUAL_DATASET  | 2022-02-01 05:57:07.062  | SELECT * FROM "NYC-taxi-trips"  | Samples.samples.dremio.com  | 80702009-37c5-454c-93f2-ec41ea1722ed  | USER_OWNER  | []  | []  |  
## Columns[​](/reference/sql/system-tables/views#columns "Direct link to Columns")  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| view_id  | varchar  | The UUID to identify the view.  |  
| space_id  | varchar  | The UUID to identify the parent space that the view is saved under.  |  
| view_name  | varchar  | The user- or system-defined name of the view.  |  
| schema_id  | varchar  | The UUID for the schema/folder in which the view is contained.  |  
| path  | varchar  | The string array representation of the path of the view.  |  
| tag  | varchar  | The UUID that is generated to identify the instance of the view. Dremio changes this tag whenever a change is made to the view.  |  
| type  | varchar  | The type of view.   
Enum: VIRTUAL_DATASET, NESSIE_VIEW  |  
| created  | timestamp  | The date and time that the view was created.  |  
| sql_definition  | varchar  | The DDL statement that was used to create the view.  |  
| sql_context  | varchar  | The context for the SQL definition.  |  
| owner_id  | varchar  | The UUID for the owner (user or role) of the view. This UUID corresponds to the id in the `users` or `roles` system table.  |  
| owner_type  | varchar  | The type of owner of the view. This value will be `$unowned$` if ownership has not been granted for the view.   
Enum: `USER_OWNER`, `ROLE_OWNER`, `$unowned$`  |  
| masking_policies  | varchar  | The masking policies set on the view.  |  
| row_access_policies  | varchar  | The row-access policies set on the view.  |  
Was this page helpful?
[Previous SYS.VERSION](/reference/sql/system-tables/version)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.VERSION](/reference/sql/system-tables/version)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsystem-tables%2Fversion%2F&_biz_t=1777950699065&_biz_i=SYS.VERSION%20%7C%20Dremio%20Documentation&_biz_n=729&rnd=611263&cdn_o=a&_biz_z=1777950699077)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsystem-tables%2Fviews%2F&_biz_t=1777950699077&_biz_i=SYS.VIEWS%20%7C%20Dremio%20Documentation&_biz_n=730&rnd=301453&cdn_o=a&_biz_z=1777950699077)
