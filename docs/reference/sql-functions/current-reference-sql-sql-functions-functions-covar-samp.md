---
url: /reference/sql/sql-functions/functions/COVAR_SAMP
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### COVAR_SAMP(_expression1_ NUMERIC, _expression2_ NUMERIC) → DOUBLE[​](/reference/sql/sql-functions#covar_sampexpression1-numeric-expression2-numeric--double "Direct link to covar_sampexpression1-numeric-expression2-numeric--double")
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

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
The COVAR_SAMP function supports `ALL` and `DISTINCT`:
`SELECT COVAR_SAMP( [ { ALL | DISTINCT } ] expression1, expression2)`  
  
The COVAR_SAMP function supports optional `PARTITION BY`, `ORDER_BY`, and cumulative and sliding window frame subclauses. See [Window Functions](/reference/sql/sql-functions#window-functions) for more information and syntax.
Was this page helpful?
[Previous COVAR_POP](/reference/sql/sql-functions)[Next CRC32](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous COVAR_POP](/reference/sql/sql-functions)[Next CRC32](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCOVAR_POP%2F&_biz_t=1777950621742&_biz_i=COVAR_POP%20%7C%20Dremio%20Documentation&_biz_n=584&rnd=872737&cdn_o=a&_biz_z=1777950621779)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCOVAR_SAMP%2F&_biz_t=1777950621778&_biz_i=COVAR_SAMP%20%7C%20Dremio%20Documentation&_biz_n=585&rnd=997627&cdn_o=a&_biz_z=1777950621779)
