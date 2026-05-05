---
url: /reference/sql/sql-functions/functions/COUNT
slug: /reference/sql/sql-functions/functions/COUNT
title: "COUNT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64302.841824416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * COUNT

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions), [Window](/reference/sql/sql-functions)
# COUNT
Returns the total number of records for the specified expression.
## Syntax
### COUNT(_expression_ ANY) → BIGINT[​](/reference/sql/sql-functions)
  * expression: The expression to evaluate. Can be an asterisk (`*`) or the column name of any primitive data type. Use an asterisk to include rows that contain `NULL`. Use a column name to ignore rows that contain `NULL`.


**Examples**
COUNT example

```
SELECT COUNT(passenger_count) FROM "Samples"."samples.dremio.com"."NYC-taxi-trips";  
-- 338293677  

```

COUNT example: Window function with cumulative window frame

```
SELECT city, state, pop, COUNT(pop)  
  OVER (PARTITION BY state ORDER BY city RANGE BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING)  
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 196  
-- AKHIOK, AK, 13309, 195  
-- AKIACHAK, AK, 481, 194  
-- ...  

```

COUNT example: Window function with sliding window frame

```
SELECT city, state, pop, COUNT(pop)  
  OVER (PARTITION BY state ORDER BY city ROWS BETWEEN 1 PRECEDING AND 2 FOLLOWING)  
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 3  
-- AKHIOK, AK, 13309, 4  
-- AKIACHAK, AK, 481, 4  
-- ...  

```

## Usage Notes[​](/reference/sql/sql-functions)
The `COUNT` function supports optional `PARTITION BY`, `ORDER_BY`, and cumulative and sliding window frame subclauses.
Was this page helpful?
[Previous COT](/reference/sql/sql-functions)[Next COVAR_POP](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous COT](/reference/sql/sql-functions)[Next COVAR_POP](/reference/sql/sql-functions)
!
