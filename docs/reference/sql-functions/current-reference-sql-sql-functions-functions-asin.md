---
url: /reference/sql/sql-functions/functions/ASIN
title: "ASIN | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64286.877804041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ASIN

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# ASIN
Computes the arcsine (inverse sine) of a value in radians.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ASIN(_numeric_expression_ NUMERIC) → FLOAT[​](/reference/sql/sql-functions#asinnumeric_expression-numeric--float "Direct link to asinnumeric_expression-numeric--float")
  * numeric_expression: The number in radians. This must be DOUBLE, INTEGER, or FLOAT.


**Examples**
ASIN example

```
SELECT ASIN(0)  
-- 0.0  

```

ASIN example

```
SELECT ASIN(1)  
-- 1.5707963267948966  

```

ASIN example

```
SELECT ASIN(-1)  
-- -1.5707963267948966  

```

Was this page helpful?
[Previous ASCII](/reference/sql/sql-functions)[Next ATAN](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ASCII](/reference/sql/sql-functions)[Next ATAN](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FASIN%2F&_biz_t=1777950606537&_biz_i=ASIN%20%7C%20Dremio%20Documentation&_biz_n=555&rnd=244479&cdn_o=a&_biz_z=1777950606538)
