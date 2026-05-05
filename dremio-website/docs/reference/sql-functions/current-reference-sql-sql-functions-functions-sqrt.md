---
url: /reference/sql/sql-functions/functions/SQRT
title: "SQRT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64351.5568835
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SQRT

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# SQRT
Returns the square root of the non-negative numeric expression.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### SQRT(_numeric_expression_ double) → double[​](/reference/sql/sql-functions#sqrtnumeric_expression-double--double "Direct link to sqrtnumeric_expression-double--double")
  * numeric_expression: Numeric expression to calculate the square root for.


**Examples**
SQRT example

```
SELECT SQRT(25.25)  
-- 5.024937810560445  

```

SQRT example

```
SELECT SQRT(-25.25)  
-- NaN  

```

### SQRT(_numeric_expression_ int64) → int64[​](/reference/sql/sql-functions#sqrtnumeric_expression-int64--int64 "Direct link to sqrtnumeric_expression-int64--int64")
  * numeric_expression: Numeric expression to calculate the square root for.


**Examples**
SQRT example

```
SELECT SQRT(25)  
-- 5  

```

### SQRT(_numeric_expression_ int32) → int32[​](/reference/sql/sql-functions#sqrtnumeric_expression-int32--int32 "Direct link to sqrtnumeric_expression-int32--int32")
  * numeric_expression: Numeric expression to calculate the square root for.


**Examples**
SQRT example

```
SELECT SQRT(25)  
-- 5  

```

### SQRT(_numeric_expression_ float) → float[​](/reference/sql/sql-functions#sqrtnumeric_expression-float--float "Direct link to sqrtnumeric_expression-float--float")
  * numeric_expression: Numeric expression to calculate the square root for.


**Examples**
SQRT example

```
SELECT SQRT(25.25)  
-- 5.024937810560445  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
If the input is a non-negative value, `NaN` will be returned.
Was this page helpful?
[Previous SPLIT_PART](/reference/sql/sql-functions)[Next STARTS_WITH](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SPLIT_PART](/reference/sql/sql-functions)[Next STARTS_WITH](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FSQRT%2F&_biz_t=1777950672807&_biz_i=SQRT%20%7C%20Dremio%20Documentation&_biz_n=682&rnd=972438&cdn_o=a&_biz_z=1777950672807)
