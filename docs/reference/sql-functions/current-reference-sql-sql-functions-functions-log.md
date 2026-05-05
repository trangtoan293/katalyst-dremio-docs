---
url: /reference/sql/sql-functions/functions/LOG
slug: /reference/sql/sql-functions/functions/LOG
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
## Syntax
### LOG([_base_expression_ float], _expression_ float) → double[​](/reference/sql/sql-functions)
  * base_expression (optional): The base to use.
  * expression: The value for which you want to calculate the log.


**Examples**
LOG example

```
SELECT LOG(20.5, 1.5)  
-- 0.1342410830900514  

```

### LOG([_base_expression_ double], _expression_ double) → double[​](/reference/sql/sql-functions)
  * base_expression (optional): The base to use.
  * expression: The value for which you want to calculate the log.


**Examples**
LOG example

```
SELECT LOG(20.5, 1.5)  
-- 0.1342410830900514  

```

### LOG(_expression_ int64) → double[​](/reference/sql/sql-functions)
  * expression: The value for which you want to calculate the log.


**Examples**
LOG example

```
SELECT LOG(10)  
-- 2.302585092994046  

```

### LOG([_base_expression_ int64], _expression_ int64) → double[​](/reference/sql/sql-functions)
  * base_expression (optional): The base to use.
  * expression: The value for which you want to calculate the log.


**Examples**
LOG example

```
SELECT LOG(10, 2)  
-- 0.30102999566398114  

```

### LOG(_expression_ int32) → double[​](/reference/sql/sql-functions)
  * expression: The value for which you want to calculate the log.


**Examples**
LOG example

```
SELECT LOG(10)  
-- 2.302585092994046  

```

### LOG([_base_expression_ int32], _expression_ int32) → double[​](/reference/sql/sql-functions)
  * base_expression (optional): The base to use.
  * expression: The value for which you want to calculate the log.


**Examples**
LOG example

```
SELECT LOG(10, 2)  
-- 0.30102999566398114  

```

### LOG(_expression_ float) → double[​](/reference/sql/sql-functions)
  * expression: The value for which you want to calculate the log.


**Examples**
LOG example

```
SELECT LOG(12.5)  
-- 2.5257286443082556  

```

### LOG(_expression_ double) → double[​](/reference/sql/sql-functions)
  * expression: The value for which you want to calculate the log.


**Examples**
LOG example

```
SELECT LOG(12.5)  
-- 2.5257286443082556  

```

## Usage Notes[​](/reference/sql/sql-functions)
If base_expression is 1. If base_expression expression is less than 0, NaN will be returned. If the expression input is 0, `-Infinity` is returned. If the expression input is less than 0, NaN will be returned.
Was this page helpful?
[Previous LOCATE](/reference/sql/sql-functions)[Next LOG10](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LOCATE](/reference/sql/sql-functions)[Next LOG10](/reference/sql/sql-functions)
!
