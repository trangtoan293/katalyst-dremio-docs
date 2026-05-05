---
url: /reference/sql/sql-functions/functions/CEILING
title: "CEILING | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.996502083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CEILING

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# CEILING
Returns the nearest equal or larger value of the input expression. Can also be called using CEIL().
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### CEILING(_numeric_expression_ NUMERIC) → INTEGER[​](/reference/sql/sql-functions#ceilingnumeric_expression-numeric--integer "Direct link to ceilingnumeric_expression-numeric--integer")
  * numeric_expression: The number (DOUBLE, FLOAT, INTEGER) for which you want to compute the ceiling.


**Examples**
CEILING example

```
SELECT CEILING(3.1459)  
-- 4  

```

CEILING example

```
SELECT CEIL(37.775420706711)  
-- 38  

```

CEILING example

```
SELECT CEIL(-37.775420706711)  
-- -37  

```

CEILING example

```
SELECT CEIL(0)  
-- 0  

```

Was this page helpful?
[Previous CBRT](/reference/sql/sql-functions)[Next CHARACTER_LENGTH](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CBRT](/reference/sql/sql-functions)[Next CHARACTER_LENGTH](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCBRT%2F&_biz_t=1777950614372&_biz_i=Dremio%20Documentation&_biz_n=572&rnd=645214&cdn_o=a&_biz_z=1777950614384)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCEILING%2F&_biz_t=1777950614384&_biz_i=CEILING%20%7C%20Dremio%20Documentation&_biz_n=573&rnd=166312&cdn_o=a&_biz_z=1777950614385)
