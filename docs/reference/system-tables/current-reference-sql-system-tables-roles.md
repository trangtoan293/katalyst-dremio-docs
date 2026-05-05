---
url: /reference/sql/system-tables/roles
title: "SYS.ROLES | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64378.248604
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.ROLES

Version: current [26.x]
On this page
# SYS.ROLES
The `sys.roles` table contains role metadata.
Syntax

```
SELECT * FROM sys.roles  

```

## Example Output[​](/reference/sql/system-tables/roles#example-output "Direct link to Example Output")  
| role_id  | role_name  | role_type  | owner_id  | owner_type  | created_by  |  
| --- | --- | --- | --- | --- | --- |  
| 3d0188ad-c79a-4339-90e1-8f53f2021065  | PUBLIC  | LOCAL  | $dremio$  | user  | LOCAL  |  
| 700e5ad4-4c37-44d1-99bf-9bbadf998cee  | USERADMIN  | LOCAL  | 01329e94-afab-4393-b101-345fe68814b8  | role  | LOCAL  |  
| 95242298-a1da-4a10-bd8e-27260685c0a5  | ADMIN  | LOCAL  | $dremio$  | user  | LOCAL  |  
| ffe21b2e-2f54-4788-b808-78fbddec36a8  | DEVADMIN  | EXTERNAL  | $dremio$  | user  | SCIM  |  
| 01cc4941-9003-4452-be6d-3bc39dae1e78  | TESTER  | EXTERNAL  | $dremio$  | user  | AUTO_SYNC  |  
## Columns[​](/reference/sql/system-tables/roles#columns "Direct link to Columns")  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| role_id  | varchar  | The UUID to identify the role  |  
| role_name  | varchar  | The user- or system-defined name of the role  |  
| role_type  | varchar  | The role type   
Valid values:  
`LOCAL`: A role [created and managed within Dremio](/security/rbac/roles#internal)  
`EXTERNAL`: A role created and managed by an [external authentication service](/security/rbac/roles#external) like Okta or Microsoft Entra ID  |  
| owner_id  | varchar  | The UUID for the owner (user or role) of the role. This UUID corresponds to the id in the users or roles table. When there is no explicit owner set, the default is `$dremio$`.  |  
| owner_type  | varchar  | The type of owner of the role.   
Valid values:  
`USER`  
`ROLE`  |  
| created_by  | varchar  | The method of creation   
Valid values:  
`LOCAL`: All `LOCAL` role_types   
`AUTO_SYNC`: An `EXTERNAL` role created in Dremio with the role name from an external provider or referenced in Dremio in a privilege grant  
`SCIM`: An `EXTERNAL` role pushed to Dremio via SCIM  |  
Was this page helpful?
[Previous SYS.RESULTS_CACHE](/reference/sql/system-tables/results-cache)[Next SYS."TABLES"](/reference/sql/system-tables/tables)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.RESULTS_CACHE](/reference/sql/system-tables/results-cache)[Next SYS."TABLES"](/reference/sql/system-tables/tables)
