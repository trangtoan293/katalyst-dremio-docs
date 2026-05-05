---
url: /reference/sql/sql-functions/functions/ROUND
slug: /reference/sql/sql-functions/functions/ROUND
title: "ROUND | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64351.531434541
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ROUND

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# ROUND
Returns the rounded value for the inputted value. If no scale is specified, the closest whole number is returned.
## Syntax
### ROUND(_numeric_expression_ decimal(0,0), _scale_ int32) → decimal(0,0)[​](/reference/sql/sql-functions)
  * numeric_expression: Numeric value to round.
  * scale: The decimal place to round.


**Examples**
ROUND example

```
SELECT ROUND(-24.35, -1)  
-- -20  

```

ROUND example

```
SELECT ROUND(24.35, 1)  
-- 24.4  

```

### ROUND(_numeric_expression_ int32, _scale_ int32) → int32[​](/reference/sql/sql-functions)
  * numeric_expression: Numeric value to round.
  * scale: The decimal place to round.


**Examples**
ROUND example

```
SELECT ROUND(24, 0)  
-- 24  

```

ROUND example

```
SELECT ROUND(-24, -1)  
-- -20  

```

### ROUND(_numeric_expression_ int32) → int32[​](/reference/sql/sql-functions)
  * numeric_expression: Numeric value to round.


**Examples**
ROUND example

```
SELECT ROUND(24)  
-- 24  

```

### ROUND(_numeric_expression_ double) → double[​](/reference/sql/sql-functions)
  * numeric_expression: Numeric value to round.


**Examples**
ROUND example

```
SELECT ROUND(24.35)  
-- 24  

```

### ROUND(_numeric_expression_ decimal(0,0)) → decimal(0,0)[​](/reference/sql/sql-functions)
  * numeric_expression: Numeric value to round.


**Examples**
ROUND example

```
SELECT ROUND(99.567)  
-- 100  

```

### ROUND(_numeric_expression_ float) → float[​](/reference/sql/sql-functions)
  * numeric_expression: Numeric value to round.


**Examples**
ROUND example

```
SELECT ROUND(CAST(24.56 AS FLOAT))  
-- 25  

```

### ROUND(_numeric_expression_ int64) → int64[​](/reference/sql/sql-functions)
  * numeric_expression: Numeric value to round.


**Examples**
ROUND example

```
SELECT ROUND(CAST(9223372036854775 AS BIGINT))  
-- 9223372036854775  

```

### ROUND(_numeric_expression_ int64, _scale_ int32) → int64[​](/reference/sql/sql-functions)
  * numeric_expression: Numeric value to round.
  * scale: The decimal place to round.


**Examples**
ROUND example

```
SELECT ROUND(CAST(12345 AS BIGINT), -2)  
-- 12300  

```

### ROUND(_numeric_expression_ double, _scale_ int32) → double[​](/reference/sql/sql-functions)
  * numeric_expression: Numeric value to round.
  * scale: The decimal place to round.


**Examples**
ROUND example

```
SELECT ROUND(123.456, 2)  
-- 123.46  

```

### ROUND(_numeric_expression_ float, _scale_ int32) → float[​](/reference/sql/sql-functions)
  * numeric_expression: Numeric value to round.
  * scale: The decimal place to round.


**Examples**
ROUND example

```
SELECT ROUND(CAST(78.567 AS FLOAT), 1)  
-- 78.6  

```

Was this page helpful?
[Previous RIGHT](/reference/sql/sql-functions)[Next ROW_NUMBER](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous RIGHT](/reference/sql/sql-functions)[Next ROW_NUMBER](/reference/sql/sql-functions)
