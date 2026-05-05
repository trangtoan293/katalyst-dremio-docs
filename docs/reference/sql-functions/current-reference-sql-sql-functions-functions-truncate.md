---
url: /reference/sql/sql-functions/functions/TRUNCATE
slug: /reference/sql/sql-functions/functions/TRUNCATE
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
## Syntax
### TRUNCATE(_numeric_expression_ float) → int[​](/reference/sql/sql-functions)
  * numeric_expression: The numeric expression to truncate.


**Examples**
TRUNCATE example

```
SELECT TRUNCATE(987.65)  
-- 987  

```

### TRUNCATE(_numeric_expression_ double) → int[​](/reference/sql/sql-functions)
  * numeric_expression: The numeric expression to truncate.


**Examples**
TRUNCATE example

```
SELECT TRUNCATE(987.87)  
-- 987  

```

### TRUNCATE(_numeric_expression_ int32) → int32[​](/reference/sql/sql-functions)
  * numeric_expression: The numeric expression to truncate.


**Examples**
TRUNCATE example

```
SELECT TRUNCATE(2345, -1)  
-- 2340  

```

### TRUNCATE(_numeric_expression_ int64) → int64[​](/reference/sql/sql-functions)
  * numeric_expression: The numeric expression to truncate.


**Examples**
TRUNCATE example

```
SELECT TRUNCATE(CAST(98765 AS BIGINT), -2)  
-- 98700  

```

### TRUNCATE(_numeric_expression_ decimal(0,0) [, _scale_expression_ int32]) → decimal(0,0)[​](/reference/sql/sql-functions)
  * numeric_expression: The numeric expression to truncate.
  * scale_expression (optional): The number of decimal places to truncate to. Positive values truncate after the decimal point, negative values before.


**Examples**
TRUNCATE example

```
SELECT TRUNCATE(89.2283211, 2)  
-- 89.22  

```

### TRUNCATE(_numeric_expression_ int64 [, _scale_expression_ int32]) → int64[​](/reference/sql/sql-functions)
  * numeric_expression: The numeric expression to truncate.
  * scale_expression (optional): The number of decimal places to truncate to. Positive values truncate after the decimal point, negative values before.


**Examples**
TRUNCATE example

```
SELECT TRUNCATE(CAST(54321 AS BIGINT), -3)  
-- 54000  

```

### TRUNCATE(_numeric_expression_ decimal(0,0)) → decimal(0,0)[​](/reference/sql/sql-functions)
  * numeric_expression: The numeric expression to truncate.


**Examples**
TRUNCATE example

```
SELECT TRUNCATE(9.7)  
-- 9  

```

### TRUNCATE(_numeric_expression_ float [, _scale_expression_ int32]) → float[​](/reference/sql/sql-functions)
  * numeric_expression: The numeric expression to truncate.
  * scale_expression (optional): The decimal place to round to.


**Examples**
TRUNCATE example

```
SELECT TRUNCATE(78.9823, 2)  
-- 78.98  

```

### TRUNCATE(_numeric_expression_ int32 [, _scale_expression_ int32]) → int32[​](/reference/sql/sql-functions)
  * numeric_expression: The numeric expression to truncate.
  * scale_expression (optional): The decimal place to round to.


**Examples**
TRUNCATE example

```
SELECT TRUNCATE(4356, -2)  
-- 4300  

```

### TRUNCATE(_numeric_expression_ double [, _scale_expression_ int32]) → double[​](/reference/sql/sql-functions)
  * numeric_expression: The numeric expression to truncate.
  * scale_expression (optional): The decimal place to round to.


**Examples**
TRUNCATE example

```
SELECT TRUNCATE(987.65, 1)  
-- 987.6  

```

## Usage Notes[​](/reference/sql/sql-functions)
To round to a place after the decimal point, specify the position as a positive number. To round to a place before the decimal point, specify the position as a negative number. To round to the nearest whole number, specify 0. If no decimal position is specified, then the function rounds to the nearest whole number (assumes 0 as the scale expression).
Was this page helpful?
[Previous TRIM](/reference/sql/sql-functions)[Next TRY_CONVERT_FROM](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TRIM](/reference/sql/sql-functions)[Next TRY_CONVERT_FROM](/reference/sql/sql-functions)
!
