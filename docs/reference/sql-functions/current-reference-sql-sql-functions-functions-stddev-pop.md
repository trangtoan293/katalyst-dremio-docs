---
url: /reference/sql/sql-functions/functions/STDDEV_POP
slug: /reference/sql/sql-functions/functions/STDDEV_POP
title: "STDDEV_POP | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.919457625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * STDDEV_POP

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions), [Aggregate](/reference/sql/sql-functions), [Window](/reference/sql/sql-functions)
# STDDEV_POP
Returns the population standard deviation (square root of variance) of non-NULL values in a column with a numeric data type. If all records inside a group are NULL, returns NULL.
## Syntax
### STDDEV_POP(_col_name_ NUMERIC) → DOUBLE[​](/reference/sql/sql-functions)
  * col_name: The name of the column for which to return the population standard deviation. The values in the column must be numbers, such as INT, DOUBLE, or FLOAT.


**Examples**
STDDEV_POP example

```
SELECT STDDEV_POP(tip_amount) FROM Samples."samples.dremio.com"."NYC-taxi-trips"  
-- 2.259665030506379  

```

STDDEV_POP example: Window function with cumulative window frame

```
SELECT city, state, pop, STDDEV_POP(pop)  
  OVER (PARTITION BY state ORDER BY city RANGE BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING)  
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 5642.224885056941  
-- AKHIOK, AK, 13309, 5653.736540099129  
-- AKIACHAK, AK, 481, 5617.523315241737  
-- ...  

```

STDDEV_POP example: Window function with sliding window frame

```
SELECT city, state, pop, STDDEV_POP(pop)  
  OVER (PARTITION BY state ORDER BY city ROWS BETWEEN 1 PRECEDING AND 2 FOLLOWING)  
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 5287.73608351333  
-- AKHIOK, AK, 13309, 5285.049479427795  
-- AKIACHAK, AK, 481, 5568.454992185893  
-- ...  

```

## Usage Notes[​](/reference/sql/sql-functions)
The STDDEV_POP function supports optional `PARTITION BY`, `ORDER_BY`, and cumulative and sliding window frame subclauses. See [Window Functions](/reference/sql/sql-functions) for more information and syntax.
Was this page helpful?
[Previous STDDEV](/reference/sql/sql-functions)[Next STDDEV_SAMP](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous STDDEV](/reference/sql/sql-functions)[Next STDDEV_SAMP](/reference/sql/sql-functions)
!
