---
url: /reference/sql/sql-functions/functions/SUM
slug: /reference/sql/sql-functions/functions/SUM
title: "SUM | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64359.069111416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SUM

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions), [Window](/reference/sql/sql-functions)
# SUM
Returns the sum of non-NULL input expressions.
## Syntax
### SUM(_col_name_ NUMERIC) → same as input except for INT, which returns BIGINT[​](/reference/sql/sql-functions)
  * col_name: The name of the column for which to return the sum. The values in the column must be numbers, such as INT, DOUBLE, or FLOAT.


**Examples**
SUM example: Aggregate function

```
SELECT SUM(trip_distance_mi) FROM Samples."samples.dremio.com"."NYC-taxi-trips";  
-- 9.858134477692287E8  

```

SUM example: Window function

```
SELECT "tip_amount", "fare_amount", SUM("total_amount")  
  OVER (partition by "tip_amount") as "sum_amount"  
FROM Samples."samples.dremio.com"."NYC-taxi-trips" LIMIT 1;  
-- tip_amount, fare_amount, sum_amount  
-- -15.5, -2.5, -19.5  

```

SUM example: Window function with cumulative window frame

```
SELECT city, state, pop, SUM(pop)  
  OVER (PARTITION BY state ORDER BY city RANGE BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING)  
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 55043  
-- AKHIOK, AK, 13309, 544698  
-- AKIACHAK, AK, 481, 531389  
-- ...  

```

SUM example: Window function with cumulative window frame

```
SELECT city, state, pop, SUM(pop)  
  OVER (PARTITION BY state ORDER BY city ROWS BETWEEN 1 PRECEDING AND 2 FOLLOWING)  
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 19135  
-- AKHIOK, AK, 13309, 19420  
-- AKIACHAK, AK, 481, 14664  
-- ...  

```

## Usage Notes[​](/reference/sql/sql-functions)
The SUM function supports optional `PARTITION BY`, `ORDER_BY`, and cumulative and sliding window frame subclauses. See [Window Functions](/reference/sql/sql-functions) for more information and syntax.
Was this page helpful?
[Previous SUBSTRING_INDEX](/reference/sql/sql-functions)[Next SYSTEM_USER](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SUBSTRING_INDEX](/reference/sql/sql-functions)[Next SYSTEM_USER](/reference/sql/sql-functions)
!
