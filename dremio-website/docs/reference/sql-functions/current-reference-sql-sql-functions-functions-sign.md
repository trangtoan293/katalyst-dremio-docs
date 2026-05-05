---
url: /reference/sql/sql-functions/functions/SIGN
title: "SIGN | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64351.970235041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SIGN

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# SIGN
Returns the sign of the input expression.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### SIGN(_numeric_expression_ double) → int[​](/reference/sql/sql-functions#signnumeric_expression-double--int "Direct link to signnumeric_expression-double--int")
  * numeric_expression: Input expression.


**Examples**
SIGN example

```
SELECT SIGN(10.3)  
-- 1  

```

### SIGN(_numeric_expression_ int32) → int32[​](/reference/sql/sql-functions#signnumeric_expression-int32--int32 "Direct link to signnumeric_expression-int32--int32")
  * numeric_expression: Input expression.


**Examples**
SIGN example

```
SELECT SIGN(-5)  
-- -1  

```

### SIGN(_numeric_expression_ int64) → int64[​](/reference/sql/sql-functions#signnumeric_expression-int64--int64 "Direct link to signnumeric_expression-int64--int64")
  * numeric_expression: Input expression.


**Examples**
SIGN example

```
SELECT SIGN(24)  
-- 1  

```

### SIGN(_numeric_expression_ float) → int[​](/reference/sql/sql-functions#signnumeric_expression-float--int "Direct link to signnumeric_expression-float--int")
  * numeric_expression: Input expression.


**Examples**
SIGN example

```
SELECT SIGN(0.0)  
-- 0  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
1 is returned if the input expression is positive. -1 is returned if the input expression is negative. 0 is returned if the input expression is 0.
Was this page helpful?
[Previous SHA__SHA1](/reference/sql/sql-functions)[Next SIMILAR_TO](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SHA__SHA1](/reference/sql/sql-functions)[Next SIMILAR_TO](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FSIGN%2F&_biz_t=1777950672074&_biz_i=SIGN%20%7C%20Dremio%20Documentation&_biz_n=677&rnd=298510&cdn_o=a&_biz_z=1777950672075)
