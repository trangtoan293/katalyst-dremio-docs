---
url: /reference/sql/system-tables/version
title: "SYS.VERSION | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64378.691979958
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.VERSION

Version: current [26.x]
On this page
# SYS.VERSION
The `sys.version` table contains metadata for the version of Dremio Enterprise that is deployed.
Syntax

```
SELECT *   
FROM sys.version  

```

## Example Output[​](/reference/sql/system-tables/version#example-output "Direct link to Example Output")  
| version  | commit_id  | commit_message  | commit_time  | build_email  | build_time  |  
| --- | --- | --- | --- | --- | --- |  
| 23.0.0-202207052318080341-02708eac  | 02708eac53091e3d2ec930073857b0564a07fb4d  | _null_  | 2022-07-05T22:46:37+0000  | _empty text_  | 2022-07-05T23:43:03+0000  |  
## Columns[​](/reference/sql/system-tables/version#columns "Direct link to Columns")  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| version  | varchar  | The version of Dremio Enterprise that is deployed.  |  
| commit_id  | varchar  | The last commit ID for the build that is deployed.  |  
| commit_message  | varchar  | The commit message for the commit ID.  |  
| commit_time  | varchar  | The time that the last commit was made.  |  
| build_email  | varchar  | This value is always empty.  |  
| build_time  | varchar  | The time of the last build for this version.  |  
Was this page helpful?
[Previous SYS.USERS](/reference/sql/system-tables/users)[Next SYS.VIEWS](/reference/sql/system-tables/views)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.USERS](/reference/sql/system-tables/users)[Next SYS.VIEWS](/reference/sql/system-tables/views)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsystem-tables%2Fversion%2F&_biz_t=1777950699065&_biz_i=SYS.VERSION%20%7C%20Dremio%20Documentation&_biz_n=729&rnd=611263&cdn_o=a&_biz_z=1777950699065)
