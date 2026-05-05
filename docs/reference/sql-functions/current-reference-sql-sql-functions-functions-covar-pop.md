---
url: /reference/sql/sql-functions/functions/COVAR_POP
slug: /reference/sql/sql-functions/functions/COVAR_POP
title: "COVAR_POP | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64302.235701708
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * COVAR_POP

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions), [Window](/reference/sql/sql-functions)
# COVAR_POP
Returns the population covariance for non-NULL pairs across all input values.
## Syntax
### COVAR_POP(_expression1_ NUMERIC, _expression2_ NUMERIC) → DOUBLE[​](/reference/sql/sql-functions)
  * expression1: An expression that evaluates to a numeric type. This parameter is the dependent value.
  * expression2: An expression that evaluates to a numeric type. This parameter is the independent value.


**Examples**
COVAR_POP example: Aggregate function

```
SELECT COVAR_POP(trip_distance_mi, fare_amount) FROM Samples."samples.dremio.com"."NYC-taxi-trips";  
-- 31.705367711861427  

```

COVAR_POP example: Aggregate function with optional DISTINCT clause

```
SELECT COVAR_POP(DISTINCT trip_distance_mi, fare_amount  
FROM Samples."samples.dremio.com"."NYC-taxi-trips";  
-- 302.592806814534  

```

COVAR_POP example: Window function

```
SELECT COVAR_POP(trip_distance_mi, fare_amount)  
  OVER (PARTITION BY trip_distance_mi)  
FROM Samples."samples.dremio.com"."NYC-taxi-trips";  
-- EXPR$0  
-- 1.9984014443252818E-15  
-- 1.9984014443252818E-15  
-- 1.9984014443252818E-15  
-- ...  

```

COVAR_POP example: Window function with cumulative window frame

```
SELECT COVAR_POP(trip_distance_mi, fare_amount)  
  OVER (PARTITION BY trip_distance_mi ORDER BY pickup_datetime RANGE BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING)  
FROM Samples."samples.dremio.com"."NYC-taxi-trips";  
-- EXPR$0  
-- -9.38969718520366E-4  
-- -9.398569655090783E-4  
-- -9.405475644511108E-4  
-- ...  

```

COVAR_POP example: Window function with sliding window frame

```
SELECT COVAR_POP(trip_distance_mi, fare_amount)  
  OVER (PARTITION BY trip_distance_mi ORDER BY pickup_datetime ROWS BETWEEN 1 PRECEDING AND 2 FOLLOWING)  
FROM Samples."samples.dremio.com"."NYC-taxi-trips";  
-- EXPR$0  
-- 2.7755575615628914E-17  
-- 0.0  
-- 2.7755575615628914E-17  
-- ...  

```

## Usage Notes[​](/reference/sql/sql-functions)
The COVAR_POP function supports `ALL` and `DISTINCT`:  
`SELECT COVAR_POP( [ { ALL | DISTINCT } ] expression1, expression2)`.  
  
The COVAR_POP function supports optional `PARTITION BY`, `ORDER_BY`, and cumulative and sliding window frame subclauses. See [Window Functions](/reference/sql/sql-functions) for more information and syntax.
Was this page helpful?
[Previous COUNT](/reference/sql/sql-functions)[Next COVAR_SAMP](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous COUNT](/reference/sql/sql-functions)[Next COVAR_SAMP](/reference/sql/sql-functions)
!
