---
url: /reference/sql/sql-functions/functions/TRUNCATE
title: "TRUNCATE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.825621916
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TRUNCATE

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# TRUNCATE
Truncates the input expression toward zero to the nearest integer or to the specified number of decimal places.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### TRUNCATE(_numeric_expression_ float) → int[​](/reference/sql/sql-functions#truncatenumeric_expression-float--int "Direct link to truncatenumeric_expression-float--int")
  * numeric_expression: The numeric expression to truncate.


**Examples**
TRUNCATE example

```
SELECT TRUNCATE(987.65)  
-- 987  

```

### TRUNCATE(_numeric_expression_ double) → int[​](/reference/sql/sql-functions#truncatenumeric_expression-double--int "Direct link to truncatenumeric_expression-double--int")
  * numeric_expression: The numeric expression to truncate.


**Examples**
TRUNCATE example

```
SELECT TRUNCATE(987.87)  
-- 987  

```

### TRUNCATE(_numeric_expression_ int32) → int32[​](/reference/sql/sql-functions#truncatenumeric_expression-int32--int32 "Direct link to truncatenumeric_expression-int32--int32")
  * numeric_expression: The numeric expression to truncate.


**Examples**
TRUNCATE example

```
SELECT TRUNCATE(2345, -1)  
-- 2340  

```

### TRUNCATE(_numeric_expression_ int64) → int64[​](/reference/sql/sql-functions#truncatenumeric_expression-int64--int64 "Direct link to truncatenumeric_expression-int64--int64")
  * numeric_expression: The numeric expression to truncate.


**Examples**
TRUNCATE example

```
SELECT TRUNCATE(CAST(98765 AS BIGINT), -2)  
-- 98700  

```

### TRUNCATE(_numeric_expression_ decimal(0,0) [, _scale_expression_ int32]) → decimal(0,0)[​](/reference/sql/sql-functions#truncatenumeric_expression-decimal00--scale_expression-int32--decimal00 "Direct link to truncatenumeric_expression-decimal00--scale_expression-int32--decimal00")
  * numeric_expression: The numeric expression to truncate.
  * scale_expression (optional): The number of decimal places to truncate to. Positive values truncate after the decimal point, negative values before.


**Examples**
TRUNCATE example

```
SELECT TRUNCATE(89.2283211, 2)  
-- 89.22  

```

### TRUNCATE(_numeric_expression_ int64 [, _scale_expression_ int32]) → int64[​](/reference/sql/sql-functions#truncatenumeric_expression-int64--scale_expression-int32--int64 "Direct link to truncatenumeric_expression-int64--scale_expression-int32--int64")
  * numeric_expression: The numeric expression to truncate.
  * scale_expression (optional): The number of decimal places to truncate to. Positive values truncate after the decimal point, negative values before.


**Examples**
TRUNCATE example

```
SELECT TRUNCATE(CAST(54321 AS BIGINT), -3)  
-- 54000  

```

### TRUNCATE(_numeric_expression_ decimal(0,0)) → decimal(0,0)[​](/reference/sql/sql-functions#truncatenumeric_expression-decimal00--decimal00 "Direct link to truncatenumeric_expression-decimal00--decimal00")
  * numeric_expression: The numeric expression to truncate.


**Examples**
TRUNCATE example

```
SELECT TRUNCATE(9.7)  
-- 9  

```

### TRUNCATE(_numeric_expression_ float [, _scale_expression_ int32]) → float[​](/reference/sql/sql-functions#truncatenumeric_expression-float--scale_expression-int32--float "Direct link to truncatenumeric_expression-float--scale_expression-int32--float")
  * numeric_expression: The numeric expression to truncate.
  * scale_expression (optional): The decimal place to round to.


**Examples**
TRUNCATE example

```
SELECT TRUNCATE(78.9823, 2)  
-- 78.98  

```

### TRUNCATE(_numeric_expression_ int32 [, _scale_expression_ int32]) → int32[​](/reference/sql/sql-functions#truncatenumeric_expression-int32--scale_expression-int32--int32 "Direct link to truncatenumeric_expression-int32--scale_expression-int32--int32")
  * numeric_expression: The numeric expression to truncate.
  * scale_expression (optional): The decimal place to round to.


**Examples**
TRUNCATE example

```
SELECT TRUNCATE(4356, -2)  
-- 4300  

```

### TRUNCATE(_numeric_expression_ double [, _scale_expression_ int32]) → double[​](/reference/sql/sql-functions#truncatenumeric_expression-double--scale_expression-int32--double "Direct link to truncatenumeric_expression-double--scale_expression-int32--double")
  * numeric_expression: The numeric expression to truncate.
  * scale_expression (optional): The decimal place to round to.


**Examples**
TRUNCATE example

```
SELECT TRUNCATE(987.65, 1)  
-- 987.6  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
To round to a place after the decimal point, specify the position as a positive number. To round to a place before the decimal point, specify the position as a negative number. To round to the nearest whole number, specify 0. If no decimal position is specified, then the function rounds to the nearest whole number (assumes 0 as the scale expression).
Was this page helpful?
[Previous TRIM](/reference/sql/sql-functions)[Next TRY_CONVERT_FROM](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TRIM](/reference/sql/sql-functions)[Next TRY_CONVERT_FROM](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FTRUNCATE%2F&_biz_t=1777950686224&_biz_i=Dremio%20Documentation&_biz_n=713&rnd=744607&cdn_o=a&_biz_z=1777950686224)
