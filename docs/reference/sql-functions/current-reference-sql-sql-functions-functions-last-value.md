---
url: /reference/sql/sql-functions/functions/LAST_VALUE
slug: /reference/sql/sql-functions/functions/LAST_VALUE
title: "LAST_VALUE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.438697916
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LAST_VALUE

Version: current [26.x]
On this page
**Categories** : [Window](/reference/sql/sql-functions)
# LAST_VALUE
Returns the last value within an ordered group of a result set.
## Syntax
### LAST_VALUE(_expression_ VARCHAR, _order_subclause_ VARCHAR) → VARCHAR[​](/reference/sql/sql-functions)
  * expression: The expression that determines the return value.
  * order_subclause: A subclause that specifies the order of the rows within each partition of the result set.


**Examples**
LAST_VALUE example

```
SELECT city, state, pop, LAST_VALUE(pop) OVER (PARTITION BY state ORDER BY city) FROM Samples."samples.dremio.com"."zips.json"  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345,  5345  
-- AKHIOK, AK, 13309, 11309  
-- AKIACHAK, AK, 481, 481  
-- ...  

```

LAST_VALUE example: Window function with cumulative window frame

```
SELECT city, state, pop, LAST_VALUE(pop) OVER (PARTITION BY state ORDER BY city RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) FROM Samples."samples.dremio.com"."zips.json"  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 481  
-- AKHIOK, AK, 13309, 481  
-- AKIACHAK, AK, 481, 481  
-- ...  

```

LAST_VALUE example: Window function with sliding window frame

```
SELECT city, state, pop, LAST_VALUE(pop) OVER (PARTITION BY state ORDER BY city ROWS BETWEEN 2 PRECEDING AND 1 FOLLOWING) FROM Samples."samples.dremio.com"."zips.json"  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 13309  
-- AKHIOK, AK, 13309, 481  
-- AKIACHAK, AK, 481, 481  
-- ...  

```

Was this page helpful?
[Previous LAST_QUERY_ID](/reference/sql/sql-functions)[Next LCASE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LAST_QUERY_ID](/reference/sql/sql-functions)[Next LCASE](/reference/sql/sql-functions)
!
