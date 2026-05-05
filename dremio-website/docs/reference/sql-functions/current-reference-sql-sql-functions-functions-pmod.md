---
url: /reference/sql/sql-functions/functions/PMOD
title: "PMOD | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64344.832307
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * PMOD

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# PMOD
Returns the positive remainder after dividend / divisor. Returns an error if the divisor is 0.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### PMOD(_dividend_ NUMERIC, _divisor_ NUMERIC) → NUMERIC[​](/reference/sql/sql-functions#pmoddividend-numeric-divisor-numeric--numeric "Direct link to pmoddividend-numeric-divisor-numeric--numeric")
  * dividend: Dividend value.
  * divisor: Divisor value.


**Examples**
PMOD example

```
SELECT pmod(10, 3)  
-- 1  

```

PMOD example

```
SELECT pmod(-10, 3)  
-- 2  

```

Was this page helpful?
[Previous PI](/reference/sql/sql-functions)[Next POSITION](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous PI](/reference/sql/sql-functions)[Next POSITION](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FPMOD%2F&_biz_t=1777950664262&_biz_i=PMOD%20%7C%20Dremio%20Documentation&_biz_n=662&rnd=771781&cdn_o=a&_biz_z=1777950664262)
