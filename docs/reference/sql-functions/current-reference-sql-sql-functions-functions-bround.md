---
url: /reference/sql/sql-functions/functions/BROUND
title: "BROUND | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.576486583
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * BROUND

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# BROUND
Returns the rounded result of the numeric expression using `HALF_EVEN` rounding mode.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### BROUND(_numeric_expression_ double) → float8[​](/reference/sql/sql-functions#broundnumeric_expression-double--float8 "Direct link to broundnumeric_expression-double--float8")
  * numeric_expression: A numeric expression.


**Examples**
BROUND example

```
SELECT BROUND(50.2), BROUND(50.5), BROUND(50.55), BROUND(-50)  
-- 50.0, 50.0, 51.0, -50.0  

```

Was this page helpful?
[Previous BOOL_OR](/reference/sql/sql-functions)[Next BTRIM](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous BOOL_OR](/reference/sql/sql-functions)[Next BTRIM](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FBROUND%2F&_biz_t=1777950613955&_biz_i=BROUND%20%7C%20Dremio%20Documentation&_biz_n=565&rnd=220635&cdn_o=a&_biz_z=1777950613956)
