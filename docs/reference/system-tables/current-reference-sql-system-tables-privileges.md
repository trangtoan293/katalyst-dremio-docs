---
url: /reference/sql/system-tables/privileges
slug: /reference/sql/system-tables/privileges
title: "SYS.PRIVILEGES | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64372.82797125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.PRIVILEGES

Version: current [26.x]
On this page
# SYS.PRIVILEGES
The `sys.privileges` table contains metadata for privileges for objects in the Dremio instance.
Syntax

```
SELECT *   
FROM sys.privileges  

```

## Example Output​
For `object_type`, `PDS` indicates a table and `VDS` indicates a view.  
| grantee_id  | grantee_type  | privilege  | object_id  | object_type  |  
| --- | --- | --- | --- | --- |  
| test_user  | user  | ALTER  | "@test_user"."nyc_taxi"  | PDS  |  
| test_user  | user  | SELECT  | "@test_user"."nyc_taxi"  | PDS  |  
| test_user  | user  | SELECT  | "@test_user".remove_spaces  | FUNCTION  |  
| test_role  | role  | SELECT  | "reporting"."nyc_taxi_2022"  | VDS  |  
| test_user2  | user  | ALTER  | "reporting".test  | FOLDER  |  
| admin_user  | user  | MODIFY  | "Samples"  | SOURCE  |  
| admin_user  | user  | CREATE_USER  | _empty text_  | SYSTEM  |  
| test_user2  | user  | MANAGE_GRANTS  | 2abbe93f-726b-4be6-81d5-f1ed6919a458  | SCRIPT  |  
| test_user2  | user  | MODIFY  | 20b8dbc6-0530-49a4-a2d4-6cc24d6663e9  | SCRIPT  |  
## Columns​  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| grantee_id  | varchar  | The user or role name for which the object has been granted.  |  
| grantee_type  | varchar  | The type of object that the privilege is granted to.  
Enum: `user`, `role`  |  
| privilege  | varchar  | The privilege granted on the object to the grantee.  |  
| object_id  | varchar  | The name or UUID of the object on which the privilege has been granted.  |  
| object_type  | varchar  | The type of the object on which the privilege has been granted.  |  
Was this page helpful?
[Previous SYS.PIPES](/reference/sql/system-tables/pipes)[Next SYS.REFLECTION_DEPENDENCIES](/reference/sql/system-tables/reflection-dependencies)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.PIPES](/reference/sql/system-tables/pipes)[Next SYS.REFLECTION_DEPENDENCIES](/reference/sql/system-tables/reflection-dependencies)
!
