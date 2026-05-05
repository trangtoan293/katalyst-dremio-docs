---
url: /reference/sql/sql-functions/functions/CBRT
title: "CBRT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.944331958
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CBRT

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# CBRT
Computes the cube root of a numeric expression.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### CBRT(_numeric_expression_ NUMERIC) → FLOAT[​](/reference/sql/sql-functions#cbrtnumeric_expression-numeric--float "Direct link to cbrtnumeric_expression-numeric--float")
  * numeric_expression: The number (DOUBLE, FLOAT, INTEGER) for which you want to compute the cube root.


**Examples**
CBRT example

```
SELECT CBRT(8)  
-- 2.0  

```

CBRT example

```
SELECT CBRT(120)  
-- 4.932424148660941  

```

CBRT example

```
SELECT CBRT(99.5)  
-- 4.633839922986558  

```

Was this page helpful?
[Previous CAST](/reference/sql/sql-functions)[Next CEILING](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CAST](/reference/sql/sql-functions)[Next CEILING](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCBRT%2F&_biz_t=1777950614372&_biz_i=Dremio%20Documentation&_biz_n=572&rnd=645214&cdn_o=a&_biz_z=1777950614372)
