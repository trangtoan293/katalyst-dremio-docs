---
url: /reference/sql/sql-functions/functions/COVAR_SAMP
slug: /reference/sql/sql-functions/functions/COVAR_SAMP
title: "COVAR_SAMP | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64302.913113375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * COVAR_SAMP

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions), [Window](/reference/sql/sql-functions)
# COVAR_SAMP
Returns the sample covariance for non-NULL pairs across all input values.
## Syntax
### COVAR_SAMP(_expression1_ NUMERIC, _expression2_ NUMERIC) → DOUBLE[​](/reference/sql/sql-functions)
  * expression1: An expression that evaluates to a numeric type. This parameter is the dependent value.
  * expression2: An expression that evaluates to a numeric type. This parameter is the independent value.


**Examples**
COVAR_SAMP example: Aggregate function

```
SELECT COVAR_SAMP(trip_distance_mi, fare_amount) FROM Samples."samples.dremio.com"."NYC-taxi-trips";  
-- 31.705367805565245  

```

COVAR_SAMP example: Aggregate function with optional DISTINCT clause

```
SELECT COVAR_SAMP(DISTINCT trip_distance_mi, fare_amount) FROM Samples."samples.dremio.com"."NYC-taxi-trips";  
-- 302.5936880585907  

```

COVAR_SAMP example: Window function

```
SELECT COVAR_SAMP(trip_distance_mi, fare_amount)  
  OVER (PARTITION BY trip_distance_mi)  
FROM Samples."samples.dremio.com"."NYC-taxi-trips";  
-- EXPR$0  
-- 5.551204803332622E-17  
-- 5.551204803332622E-17  
-- 5.551204803332622E-17  
-- ...  

```

COVAR_SAMP example: Window function with cumulative window frame

```
SELECT COVAR_SAMP(trip_distance_mi, fare_amount)  
  OVER (PARTITION BY trip_distance_mi ORDER BY pickup_datetime RANGE BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING)  
FROM Samples."samples.dremio.com"."NYC-taxi-trips";  
-- EXPR$0  
-- -0.0045570136128216445  
-- -0.0045641862172963515  
-- -0.0045641862172963515  
-- -0.0045691878478008085  
-- -0.004574617188900869  
-- ...  

```

COVAR_SAMP example: Window function with sliding window frame

```
SELECT COVAR_SAMP(trip_distance_mi, fare_amount)  
  OVER (PARTITION BY trip_distance_mi ORDER BY pickup_datetime ROWS BETWEEN 1 PRECEDING AND 2 FOLLOWING)  
FROM Samples."samples.dremio.com"."NYC-taxi-trips";  
-- EXPR$0  
-- 0.0  
-- 0.0  
-- 0.0  
-- 0.0  
-- 0.0  
-- 0.0  
-- 7.401486830834377E-17  
-- 7.401486830834377E-17  
-- ...  

```

## Usage Notes[​](/reference/sql/sql-functions)
The COVAR_SAMP function supports `ALL` and `DISTINCT`:
`SELECT COVAR_SAMP( [ { ALL | DISTINCT } ] expression1, expression2)`  
  
The COVAR_SAMP function supports optional `PARTITION BY`, `ORDER_BY`, and cumulative and sliding window frame subclauses. See [Window Functions](/reference/sql/sql-functions) for more information and syntax.
Was this page helpful?
[Previous COVAR_POP](/reference/sql/sql-functions)[Next CRC32](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous COVAR_POP](/reference/sql/sql-functions)[Next CRC32](/reference/sql/sql-functions)
!!
