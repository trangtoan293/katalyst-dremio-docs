---
url: /reference/sql/sql-functions/functions/POW__POWER
slug: /reference/sql/sql-functions/functions/POW__POWER
title: "POW__POWER | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64344.462339041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * POW__POWER

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# POW, POWER
Returns the result of raising the input value to the specified power.
## Syntax
### POW(_numeric_expression_ double, _power_ double) → float8[​](/reference/sql/sql-functions)
  * numeric_expression: The input expression.
  * power: The power to raise the numeric_expression to.


**Examples**
POW example

```
SELECT POW(5, 2)  
-- 25.0  

```

POW example

```
SELECT POW(0.1, 2)  
-- 0.010000000000000002  

```

POW example

```
SELECT POW(-2, 2)  
-- 4.0  

```

POW example

```
SELECT POW(10, -2)  
-- 0.01  

```

### POWER(_numeric_expression_ double, _power_ double) → float8[​](/reference/sql/sql-functions)
  * numeric_expression: The input expression.
  * power: The power to raise the numeric_expression to.


**Examples**
POWER example

```
SELECT POWER(5, 2)  
-- 25.0  

```

POWER example

```
SELECT POWER(0.1, 2)  
-- 0.010000000000000002  

```

POWER example

```
SELECT POWER(-2, 2)  
-- 4.0  

```

POWER example

```
SELECT POWER(10, -2)  
-- 0.01  

```

## Usage Notes[​](/reference/sql/sql-functions)
This function returns a float even if the parameters are both integers.
Was this page helpful?
[Previous POSITION](/reference/sql/sql-functions)[Next QUARTER](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous POSITION](/reference/sql/sql-functions)[Next QUARTER](/reference/sql/sql-functions)
!
