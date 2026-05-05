---
url: /reference/sql/sql-functions/functions/VAR_POP
slug: /reference/sql/sql-functions/functions/VAR_POP
title: "VAR_POP | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.921390833
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * VAR_POP

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions), [Window](/reference/sql/sql-functions)
# VAR_POP
Returns the population variance of non-NULL records.
## Syntax
### VAR_POP(_col_name_ NUMERIC) → NUMERIC[​](/reference/sql/sql-functions)
  * col_name: The name of the column for which to return the population variance. The values in the column must be numbers, such as INT, DOUBLE, or FLOAT.


**Examples**
VAR_POP example

```
SELECT VAR_POP(pop) FROM Samples."samples.dremio.com"."zips.json";  
-- 1.5167869917122573E8  

```

VAR_POP example

```
SELECT VAR_POP(fare_amount) FROM Samples."samples.dremio.com"."NYC-taxi-trips";  
-- 181.2618702273222  

```

VAR_POP example: Window function with cumulative window frame

```
SELECT city, state, pop, VAR_POP(pop)  
  OVER (PARTITION BY state ORDER BY city RANGE BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING)  
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 3.183470165355581E7  
-- AKHIOK, AK, 13309, 3.1964736864852075E7  
-- AKIACHAK, AK, 481, 3.1556568197284516E7  
-- ...  

```

VAR_POP example: Window function with sliding window frame

```
SELECT city, state, pop, VAR_POP(pop)  
  OVER (PARTITION BY state ORDER BY city ROWS BETWEEN 1 PRECEDING AND 2 FOLLOWING)  
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 2.796015288888889E7  
-- AKHIOK, AK, 13309, 2.7931748E7  
-- AKIACHAK, AK, 481, 3.1007691E7  
-- ...  

```

## Usage Notes[​](/reference/sql/sql-functions)
For single record inputs, VAR_POP returns 0.  
  
The VAR_POP function supports optional `PARTITION BY`, `ORDER_BY`, and cumulative and sliding window frame subclauses. See [Window Functions](/reference/sql/sql-functions) for more information and syntax.
Was this page helpful?
[Previous USER](/reference/sql/sql-functions)[Next VAR_SAMP](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous USER](/reference/sql/sql-functions)[Next VAR_SAMP](/reference/sql/sql-functions)
!
