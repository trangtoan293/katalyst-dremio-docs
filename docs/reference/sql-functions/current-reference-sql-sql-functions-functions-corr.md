---
url: /reference/sql/sql-functions/functions/CORR
slug: /reference/sql/sql-functions/functions/CORR
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
## Syntax
### CORR(_expression1_ numeric, _expression2_ numeric) → double[​](/reference/sql/sql-functions)
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
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CONVERT_TO](/reference/sql/sql-functions)[Next COS](/reference/sql/sql-functions)
!
