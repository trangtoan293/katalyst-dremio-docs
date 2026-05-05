---
url: /reference/sql/sql-functions/functions/ACOS
title: "ACOS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64271.837687166
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ACOS

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# ACOS
Computes the arccosine (inverse cosine) of a value in radians.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ACOS(_numeric_expression_ NUMERIC) → FLOAT[​](/reference/sql/sql-functions#acosnumeric_expression-numeric--float "Direct link to acosnumeric_expression-numeric--float")
  * numeric_expression: The number in radians. This must be DOUBLE, INTEGER, BIGINT, DECIMAL, or FLOAT.


**Examples**
ACOS example

```
SELECT ACOS(0)  
-- 1.5707963267948966  

```

ACOS example

```
SELECT ACOS(1.0)  
-- 0.0  

```

ACOS example

```
SELECT ACOS(-1)  
-- 3.141592653589793  

```

Was this page helpful?
[Previous ABS](/reference/sql/sql-functions)[Next AES_DECRYPT](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ABS](/reference/sql/sql-functions)[Next AES_DECRYPT](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FACOS%2F&_biz_t=1777950592378&_biz_i=ACOS%20%7C%20Dremio%20Documentation&_biz_n=539&rnd=422213&cdn_o=a&_biz_z=1777950592378)
