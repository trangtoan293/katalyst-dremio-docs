---
url: /reference/sql/sql-functions/functions/UNBASE64
title: "UNBASE64 | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.900567875
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * UNBASE64

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions), [Binary](/reference/sql/sql-functions)
# UNBASE64
Decodes a Base64-encoded string.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### UNBASE64(_expression_ varchar) → varbinary[​](/reference/sql/sql-functions#unbase64expression-varchar--varbinary "Direct link to unbase64expression-varchar--varbinary")
  * expression: A Base64-encoded string.


**Examples**
UNBASE64 example

```
SELECT CAST(UNBASE64('RHJlbWlv') AS VARCHAR)  
-- Dremio  

```

Was this page helpful?
[Previous UCASE](/reference/sql/sql-functions)[Next UNHEX](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous UCASE](/reference/sql/sql-functions)[Next UNHEX](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FTRY_CONVERT_FROM%2F&_biz_t=1777950685967&_biz_i=TRY_CONVERT_FROM%20%7C%20Dremio%20Documentation&_biz_n=710&rnd=503668&cdn_o=a&_biz_z=1777950686044)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FUNBASE64%2F&_biz_t=1777950686044&_biz_i=UNBASE64%20%7C%20Dremio%20Documentation&_biz_n=711&rnd=591762&cdn_o=a&_biz_z=1777950686045)
