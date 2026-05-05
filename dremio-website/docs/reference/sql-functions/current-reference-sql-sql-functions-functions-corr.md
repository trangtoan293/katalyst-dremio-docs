---
url: /reference/sql/sql-functions/functions/CORR
title: "CORR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64302.290771458
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CORR

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions)
# CORR
Calculates the Pearson correlation coefficient of the values expression1 and expression2. The function name must be enclosed in double quotes ("CORR").
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### CORR(_expression1_ numeric, _expression2_ numeric) → double[​](/reference/sql/sql-functions#correxpression1-numeric-expression2-numeric--double "Direct link to correxpression1-numeric-expression2-numeric--double")
  * expression1: An expression that evaluates to a numeric type. This parameter is the dependent value.
  * expression2: An expression that evaluates to a numeric type. This parameter is the independent value.


**Examples**
CORR example

```
SELECT "CORR"(100, 4)  
-- NaN  

```

CORR example

```
SELECT passenger_count,  
  "CORR"(fare_amount, tip_amount)  
FROM "Samples"."samples.dremio.com"."nyc-taxi-trips"  
GROUP BY passenger_count  
LIMIT 5  
-- 8, 0.38978465691058356  
-- 4, 0.4254971384215677  
-- 208, NaN  
-- 255, -1.0  
-- 3, 0.46551948595802983  

```

Was this page helpful?
[Previous CONVERT_TO](/reference/sql/sql-functions)[Next COS](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CONVERT_TO](/reference/sql/sql-functions)[Next COS](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCORR%2F&_biz_t=1777950621162&_biz_i=CORR%20%7C%20Dremio%20Documentation&_biz_n=580&rnd=93898&cdn_o=a&_biz_z=1777950621162)
