---
url: /reference/sql/system-tables/membership
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

## Example Output[​](/reference/sql/system-tables/membership#example-output "Direct link to Example Output")  
| role_name  | member_name  | member_type  |  
| --- | --- | --- |  
| ANALYST  | gnarly  | USER  |  
| DATA_SCIENTIST  | PRODUCT_TEAM  | ROLE  |  
| ADMIN  | gnarly  | USER  |  
## Columns[​](/reference/sql/system-tables/membership#columns "Direct link to Columns")  
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.MATERIALIZATIONS](/reference/sql/system-tables/materializations)[Next SYS.HISTORY.MODEL_USAGE](/reference/sql/system-tables/model-usage)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsystem-tables%2Fmaterializations%2F&_biz_t=1777950693284&_biz_i=SYS.MATERIALIZATIONS%20%7C%20Dremio%20Documentation&_biz_n=720&rnd=78458&cdn_o=a&_biz_z=1777950693325)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsystem-tables%2Fmembership%2F&_biz_t=1777950693324&_biz_i=SYS.MEMBERSHIP%20%7C%20Dremio%20Documentation&_biz_n=721&rnd=930409&cdn_o=a&_biz_z=1777950693325)
