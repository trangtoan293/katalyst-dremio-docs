---
url: /reference/sql/sql-functions/functions/FIRST_VALUE
slug: /reference/sql/sql-functions/functions/FIRST_VALUE
title: "FIRST_VALUE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64316.0790945
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * FIRST_VALUE

Version: current [26.x]
On this page
**Categories** : [Window](/reference/sql/sql-functions)
# FIRST_VALUE
Returns the first value within an ordered group of a result set.
## Syntax
### FIRST_VALUE(_expression_ VARCHAR, _order_subclause_ VARCHAR) → VARCHAR[​](/reference/sql/sql-functions)
  * expression: The expression that determines the return value.
  * order_subclause: A subclause that specifies the order of the rows within each partition of the result set.


**Examples**
FIRST_VALUE example

```
SELECT city, state, pop, FIRST_VALUE(pop)  
  OVER (PARTITION BY state ORDER BY city)  
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 5345  
-- AKHIOK, AK, 13309, 5345  
-- AKIACHAK, AK, 481, 5345  
-- ...  

```

FIRST_VALUE example: Window function with cumulative window frame

```
SELECT city, state, pop, FIRST_VALUE(pop)  
  OVER (PARTITION BY state ORDER BY city RANGE BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING)  
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 5345  
-- AKHIOK, AK, 13309, 13309  
-- AKIACHAK, AK, 481, 481  
-- ...  

```

FIRST_VALUE example: Window function with sliding window frame

```
SELECT city, state, pop, FIRST_VALUE(pop)  
  OVER (PARTITION BY state ORDER BY city ROWS BETWEEN 1 PRECEDING AND 2 FOLLOWING)  
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 5345  
-- AKHIOK, AK, 13309, 5345  
-- AKIACHAK, AK, 481, 13309  
-- ...  

```

## Usage Notes[​](/reference/sql/sql-functions)
The FIRST_VALUE function supports optional `PARTITION BY` and cumulative and sliding window frame subclauses. See [Window Functions](/reference/sql/sql-functions) for more information and syntax.
Was this page helpful?
[Previous FACTORIAL](/reference/sql/sql-functions)[Next FLATTEN](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous FACTORIAL](/reference/sql/sql-functions)[Next FLATTEN](/reference/sql/sql-functions)
