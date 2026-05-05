---
url: /reference/sql/system-tables/users
slug: /reference/sql/system-tables/users
title: "SYS.USERS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64378.71642125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.USERS

Version: current [26.x]
On this page
# SYS.USERS
The `sys.users` table contains metadata for users in the Dremio instance.
Syntax

```
SELECT *   
FROM sys.users  

```

## Example Output​  
| user_id  | user_name  | first_name  | last_name  | status  | user_type  | created  | owner_id  | owner_type  | created_by  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| 1ebd39a7-d571-4edb-b113-206eb263c775  | test.user  | Test  | User  | active  | EXTERNAL  | 2021-12-10 04:43:50.902  | _empty text_  | user  | AUTO_SYNC  |  
| 80702009-37c5-454c-93f2-ec41ea1722ed  | dremio.admin  | Gnarly  | _empty text_  | active  | LOCAL  | 2021-12-10 04:54:13.093  | _empty text_  | user  | LOCAL  |  
| 5aabeeae-8d3b-4dcc-ba04-051e5b08b11a  | test.user2  | _empty text_  | _empty text_  | invited  | EXTERNAL  | 2021-10-05 18:07:32.377  | _empty text_  | user  | SCIM  |  
## Columns​  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| user_id  | varchar  | The UUID to identify the user.  |  
| user_name  | varchar  | The username that is created by the user.  |  
| first_name  | varchar  | The first name of the user.  |  
| last_name  | varchar  | The last name of the user.  |  
| status  | varchar  | The state of the user depending on if they have accepted the invite to the organization and have logged in to the application.  
Enum: `active`, `invited`  |  
| user_type  | varchar  | The type of user based on how it was created.  
Enum: `EXTERNAL`, `LOCAL`  |  
| created  | timestamp  | The timestamp for when the user was created.  |  
| owner_id  | varchar  | The UUID for the owner (user or role) of the user. This UUID corresponds to the `user_id` or `role_id` in the `users` or `roles` table.  |  
| owner_type  | varchar  | The type of owner of the user.   
Enum: `user`, `role`  |  
| created_by  | varchar  | The method of creation.   
Enum: `LOCAL`, `AUTO_SYNC`, `SCIM`  |  
Was this page helpful?
[Previous SYS.USER_DEFINED_FUNCTIONS](/reference/sql/system-tables/user-defined-functions)[Next SYS.VERSION](/reference/sql/system-tables/version)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.USER_DEFINED_FUNCTIONS](/reference/sql/system-tables/user-defined-functions)[Next SYS.VERSION](/reference/sql/system-tables/version)
!!
