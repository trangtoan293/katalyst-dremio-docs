---
url: /reference/sql/sql-functions/functions/FLOOR
title: "FLOOR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64317.047011875
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * FLOOR

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# FLOOR
Returns the value from the specified expression rounded to the nearest equal or smaller integer.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### FLOOR(_numeric_expression_ NUMERIC) → INTEGER[​](/reference/sql/sql-functions#floornumeric_expression-numeric--integer "Direct link to floornumeric_expression-numeric--integer")
  * numeric_expression: The number (DOUBLE, FLOAT, INTEGER) for which you want to compute the floor.


**Examples**
FLOOR example

```
SELECT FLOOR(0)  
-- 0  

```

FLOOR example

```
SELECT FLOOR(45.76)  
-- 45  

```

FLOOR example

```
SELECT FLOOR(-1.3)  
-- -2  

```

Was this page helpful?
[Previous FLATTEN](/reference/sql/sql-functions)[Next FROM_HEX](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous FLATTEN](/reference/sql/sql-functions)[Next FROM_HEX](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FFLOOR%2F&_biz_t=1777950636613&_biz_i=FLOOR%20%7C%20Dremio%20Documentation&_biz_n=602&rnd=456741&cdn_o=a&_biz_z=1777950636613)
