---
url: /reference/sql/system-tables/membership
slug: /reference/sql/system-tables/membership
title: "SYS.MEMBERSHIP | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64372.901858291
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.MEMBERSHIP

Version: current [26.x]
On this page
# SYS.MEMBERSHIP
The `sys.membership` table contains metadata for role membership.
The [`sys.roles`](/reference/sql/system-tables/roles) table describes the available roles and their types. To appear in `sys.membership`, roles must have members and satisfy one of the following criteria in `sys.roles`:
  * `role_type` of `LOCAL`
  * `role_type` of `EXTERNAL` and `created_by` of `SCIM`

Syntax

```
SELECT * FROM sys.membership  

```

## Example Output​  
| role_name  | member_name  | member_type  |  
| --- | --- | --- |  
| ANALYST  | gnarly  | USER  |  
| DATA_SCIENTIST  | PRODUCT_TEAM  | ROLE  |  
| ADMIN  | gnarly  | USER  |  
## Columns​  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| role_name  | varchar  | The user- or system-defined name of the role.  |  
| member_name  | varchar  | The name of the member that has been assigned the role.  |  
| member_type  | varchar  | The type of the member.   
Valid values:  
`USER`  
`ROLE`  |  
Was this page helpful?
[Previous SYS.MATERIALIZATIONS](/reference/sql/system-tables/materializations)[Next SYS.HISTORY.MODEL_USAGE](/reference/sql/system-tables/model-usage)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.MATERIALIZATIONS](/reference/sql/system-tables/materializations)[Next SYS.HISTORY.MODEL_USAGE](/reference/sql/system-tables/model-usage)
!!
