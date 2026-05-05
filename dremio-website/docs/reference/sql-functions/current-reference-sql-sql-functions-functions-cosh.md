---
url: /reference/sql/sql-functions/functions/COSH
title: "COSH | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64302.259225666
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * COSH

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# COSH
Computes the hyperbolic cosine of a value in radians.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### COSH(_numeric_expression_ NUMERIC) → FLOAT[​](/reference/sql/sql-functions#coshnumeric_expression-numeric--float "Direct link to coshnumeric_expression-numeric--float")
  * numeric_expression: The number in radians. This must be DOUBLE, INTEGER, or FLOAT.


**Examples**
COSH example

```
SELECT COSH(0)  
-- 1.0  

```

COSH example

```
SELECT COSH(1.0)  
-- 1.543080634815244  

```

COSH example

```
SELECT COSH(-1)  
-- 1.543080634815244  

```

Was this page helpful?
[Previous COS](/reference/sql/sql-functions)[Next COT](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous COS](/reference/sql/sql-functions)[Next COT](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCOSH%2F&_biz_t=1777950621588&_biz_i=COSH%20%7C%20Dremio%20Documentation&_biz_n=582&rnd=235621&cdn_o=a&_biz_z=1777950621589)
