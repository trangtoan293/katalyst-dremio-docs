---
url: /reference/sql/sql-functions/functions/SQRT
slug: /reference/sql/sql-functions/functions/SQRT
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
## Syntax
### SQRT(_numeric_expression_ double) → double[​](/reference/sql/sql-functions)
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

### SQRT(_numeric_expression_ int64) → int64[​](/reference/sql/sql-functions)
  * numeric_expression: Numeric expression to calculate the square root for.


**Examples**
SQRT example

```
SELECT SQRT(25)  
-- 5  

```

### SQRT(_numeric_expression_ int32) → int32[​](/reference/sql/sql-functions)
  * numeric_expression: Numeric expression to calculate the square root for.


**Examples**
SQRT example

```
SELECT SQRT(25)  
-- 5  

```

### SQRT(_numeric_expression_ float) → float[​](/reference/sql/sql-functions)
  * numeric_expression: Numeric expression to calculate the square root for.


**Examples**
SQRT example

```
SELECT SQRT(25.25)  
-- 5.024937810560445  

```

## Usage Notes[​](/reference/sql/sql-functions)
If the input is a non-negative value, `NaN` will be returned.
Was this page helpful?
[Previous SPLIT_PART](/reference/sql/sql-functions)[Next STARTS_WITH](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SPLIT_PART](/reference/sql/sql-functions)[Next STARTS_WITH](/reference/sql/sql-functions)
!
