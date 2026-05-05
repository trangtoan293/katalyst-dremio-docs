---
url: /reference/sql/sql-functions/functions/LSHIFT
title: "LSHIFT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64331.252248166
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LSHIFT

Version: current [26.x]
On this page
**Categories** : [Bitwise](/reference/sql/sql-functions)
# LSHIFT
Shifts the bits of the numeric expression to the left.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### LSHIFT(_expression1_ int32, _expression2_ int32) → int32[​](/reference/sql/sql-functions#lshiftexpression1-int32-expression2-int32--int32 "Direct link to lshiftexpression1-int32-expression2-int32--int32")
  * expression1: Integer to shift.
  * expression2: The number of bits to shift by.


**Examples**
LSHIFT example

```
SELECT LSHIFT(1, 120)  
-- 16777216  

```

LSHIFT example

```
SELECT LSHIFT(16, 1)  
-- 32  

```

### LSHIFT(_expression1_ int64, _expression2_ int64) → int64[​](/reference/sql/sql-functions#lshiftexpression1-int64-expression2-int64--int64 "Direct link to lshiftexpression1-int64-expression2-int64--int64")
  * expression1: Integer to shift.
  * expression2: The number of bits to shift by.


**Examples**
LSHIFT example

```
SELECT LSHIFT(1, 120)  
-- 16777216  

```

LSHIFT example

```
SELECT LSHIFT(16, 1)  
-- 32  

```

Was this page helpful?
[Previous LPAD](/reference/sql/sql-functions)[Next LTRIM](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LPAD](/reference/sql/sql-functions)[Next LTRIM](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FLSHIFT%2F&_biz_t=1777950651574&_biz_i=LSHIFT%20%7C%20Dremio%20Documentation&_biz_n=641&rnd=848054&cdn_o=a&_biz_z=1777950651574)
