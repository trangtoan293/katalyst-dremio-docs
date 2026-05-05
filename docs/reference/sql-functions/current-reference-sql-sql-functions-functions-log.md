---
url: /reference/sql/sql-functions/functions/LOG
title: "LOG | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64330.840798
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LOG

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# LOG
Returns the logarithm of the numeric input expression. If no base is specified, the natural log (ln) will be calculated.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### LOG([_base_expression_ float], _expression_ float) → double[​](/reference/sql/sql-functions#logbase_expression-float-expression-float--double "Direct link to logbase_expression-float-expression-float--double")
  * base_expression (optional): The base to use.
  * expression: The value for which you want to calculate the log.


**Examples**
LOG example

```
SELECT LOG(20.5, 1.5)  
-- 0.1342410830900514  

```

### LOG([_base_expression_ double], _expression_ double) → double[​](/reference/sql/sql-functions#logbase_expression-double-expression-double--double "Direct link to logbase_expression-double-expression-double--double")
  * base_expression (optional): The base to use.
  * expression: The value for which you want to calculate the log.


**Examples**
LOG example

```
SELECT LOG(20.5, 1.5)  
-- 0.1342410830900514  

```

### LOG(_expression_ int64) → double[​](/reference/sql/sql-functions#logexpression-int64--double "Direct link to logexpression-int64--double")
  * expression: The value for which you want to calculate the log.


**Examples**
LOG example

```
SELECT LOG(10)  
-- 2.302585092994046  

```

### LOG([_base_expression_ int64], _expression_ int64) → double[​](/reference/sql/sql-functions#logbase_expression-int64-expression-int64--double "Direct link to logbase_expression-int64-expression-int64--double")
  * base_expression (optional): The base to use.
  * expression: The value for which you want to calculate the log.


**Examples**
LOG example

```
SELECT LOG(10, 2)  
-- 0.30102999566398114  

```

### LOG(_expression_ int32) → double[​](/reference/sql/sql-functions#logexpression-int32--double "Direct link to logexpression-int32--double")
  * expression: The value for which you want to calculate the log.


**Examples**
LOG example

```
SELECT LOG(10)  
-- 2.302585092994046  

```

### LOG([_base_expression_ int32], _expression_ int32) → double[​](/reference/sql/sql-functions#logbase_expression-int32-expression-int32--double "Direct link to logbase_expression-int32-expression-int32--double")
  * base_expression (optional): The base to use.
  * expression: The value for which you want to calculate the log.


**Examples**
LOG example

```
SELECT LOG(10, 2)  
-- 0.30102999566398114  

```

### LOG(_expression_ float) → double[​](/reference/sql/sql-functions#logexpression-float--double "Direct link to logexpression-float--double")
  * expression: The value for which you want to calculate the log.


**Examples**
LOG example

```
SELECT LOG(12.5)  
-- 2.5257286443082556  

```

### LOG(_expression_ double) → double[​](/reference/sql/sql-functions#logexpression-double--double "Direct link to logexpression-double--double")
  * expression: The value for which you want to calculate the log.


**Examples**
LOG example

```
SELECT LOG(12.5)  
-- 2.5257286443082556  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
If base_expression is 1. If base_expression expression is less than 0, NaN will be returned. If the expression input is 0, `-Infinity` is returned. If the expression input is less than 0, NaN will be returned.
Was this page helpful?
[Previous LOCATE](/reference/sql/sql-functions)[Next LOG10](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LOCATE](/reference/sql/sql-functions)[Next LOG10](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FLOG%2F&_biz_t=1777950650259&_biz_i=LOG%20%7C%20Dremio%20Documentation&_biz_n=630&rnd=261327&cdn_o=a&_biz_z=1777950650259)
