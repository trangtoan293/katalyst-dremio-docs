---
url: /reference/sql/sql-functions/functions/MIN
title: "MIN | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64337.678167666
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * MIN

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions), [Window](/reference/sql/sql-functions)
# MIN
Returns the minimum value among the non-NULL input expressions.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### MIN(_expression_ NUMERIC) → NUMERIC[​](/reference/sql/sql-functions#minexpression-numeric--numeric "Direct link to minexpression-numeric--numeric")
  * expression: The expression from which to take the minimum value, across all rows.


**Examples**
MIN example: Aggregate function

```
SELECT MIN("total_amount") FROM "Samples"."samples.dremio.com"."NYC-taxi-trips";  
-- -1430.0  

```

MIN example: Window function

```
SELECT "trip_distance_mi", MIN("total_amount")  
  OVER (PARTITION BY "trip_distance_mi") "min_total_amount"  
FROM "Samples"."samples.dremio.com"."NYC-taxi-trips"  
LIMIT 1;  
-- trip_distance_mi, min_total_amount  
-- 0.09, -52.5  

```

MIN example: Window function with cumulative window frame

```
SELECT city, state, pop, MIN(pop)  
  OVER (PARTITION BY state ORDER BY city RANGE BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING)   
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 0  
-- AKHIOK, AK, 13309, 0  
-- AKIACHAK, AK, 481, 0  
-- ...  

```

MIN example: Window function with sliding window frame

```
SELECT city, state, pop, MIN(pop)  
  OVER (PARTITION BY state ORDER BY city ROWS BETWEEN 1 PRECEDING AND 2 FOLLOWING)  
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 481  
-- AKHIOK, AK, 13309, 285  
-- AKIACHAK, AK, 481, 285  
-- ...  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
The MIN function supports optional `PARTITION BY`, `ORDER_BY`, and cumulative and sliding window frame subclauses. See [Window Functions](/reference/sql/sql-functions#window-functions) for more information and syntax.
Was this page helpful?
[Previous MEDIAN](/reference/sql/sql-functions)[Next MINDIR](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MEDIAN](/reference/sql/sql-functions)[Next MINDIR](/reference/sql/sql-functions)
