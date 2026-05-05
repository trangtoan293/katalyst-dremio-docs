---
url: /reference/sql/sql-functions/functions/MAX
title: "MAX | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64331.28819975
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * MAX

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions), [Window](/reference/sql/sql-functions)
# MAX
Returns the maximum value among the non-NULL input expressions.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### MAX(_expression_ NUMERIC) → NUMERIC[​](/reference/sql/sql-functions#maxexpression-numeric--numeric "Direct link to maxexpression-numeric--numeric")
  * expression: The expression from which to take the maximum value, across all rows.


**Examples**
MAX example: Aggregate function

```
SELECT MAX("total_amount") FROM "Samples"."samples.dremio.com"."NYC-taxi-trips";  
-- 685908.1  

```

MAX example: Window function

```
SELECT "trip_distance_mi", MAX("total_amount")  
  OVER (PARTITION BY "trip_distance_mi") "max_total_amount"  
FROM "Samples"."samples.dremio.com"."NYC-taxi-trips"  
LIMIT 1;  
-- trip_distance_mi, max_total_amount  
-- 0.03, 450.5  

```

MAX example: Window function with cumulative window frame

```
SELECT city, state, pop, MAX(pop)  
  OVER (PARTITION BY state ORDER BY city RANGE BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING)  
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 32383  
-- AKHIOK, AK, 13309, 32383  
-- AKIACHAK, AK, 481, 32383  
-- ...  

```

MAX example: Window function with sliding window frame

```
SELECT city, state, pop, MAX(pop)  
  OVER (PARTITION BY state ORDER BY city ROWS BETWEEN 1 PRECEDING AND 2 FOLLOWING)  
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 13309  
-- AKHIOK, AK, 13309, 13309  
-- AKIACHAK, AK, 481, 13309  
-- AKIAK, AK, 285, 1186  
-- ...  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
The MAX function supports optional `PARTITION BY`, `ORDER_BY`, and cumulative and sliding window frame subclauses. See [Window Functions](/reference/sql/sql-functions#window-functions) for more information and syntax.
Was this page helpful?
[Previous MASK_SHOW_LAST_N](/reference/sql/sql-functions)[Next MAXDIR](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MASK_SHOW_LAST_N](/reference/sql/sql-functions)[Next MAXDIR](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FMAX%2F&_biz_t=1777950651892&_biz_i=Dremio%20Documentation&_biz_n=645&rnd=869572&cdn_o=a&_biz_z=1777950651892)
