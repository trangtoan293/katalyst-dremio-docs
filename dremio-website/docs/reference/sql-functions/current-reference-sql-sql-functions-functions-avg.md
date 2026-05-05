---
url: /reference/sql/sql-functions/functions/AVG
title: "AVG | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64287.3093145
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * AVG

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions), [Window](/reference/sql/sql-functions)
# AVG
Computes the average of a set of values.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### AVG(_numeric_expression_ NUMERIC) → DOUBLE[​](/reference/sql/sql-functions#avgnumeric_expression-numeric--double "Direct link to avgnumeric_expression-numeric--double")
  * numeric_expression: The values for which to compute the average. Values can be type DOUBLE, NUMERIC, INTEGER, INTERVAL_DATE, or INTERVAL_YEAR.


**Examples**
AVG example

```
SELECT AVG(3)  
-- 3.0  

```

AVG example: val_col contains 0.6348, -1.301466

```
SELECT AVG("val_col");  
-- -0.333333  

```

AVG example: Window function with cumulative window frame

```
SELECT city, state, pop, AVG(pop)  
  OVER (PARTITION BY state ORDER BY city RANGE BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING)  
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 2806.341836734694  
-- AKHIOK, AK, 13309, 2793.3230769230768  
-- AKIACHAK, AK, 481, 2739.118556701031  
-- ...  

```

AVG example: Window function with sliding window frame

```
SELECT city, state, pop, AVG(pop)  
  OVER (PARTITION BY state ORDER BY city ROWS BETWEEN 1 PRECEDING AND 2 FOLLOWING)  
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 6378.333333333333  
-- AKHIOK, AK, 13309, 4855.0  
-- AKIACHAK, AK, 481, 3666.0  
-- ...  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
The AVG function supports optional `PARTITION BY`, `ORDER_BY`, and cumulative and sliding window frame subclauses. See [Window Functions](/reference/sql/sql-functions#window-functions) for more information and syntax.
Was this page helpful?
[Previous ATAN2](/reference/sql/sql-functions)[Next BASE64](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ATAN2](/reference/sql/sql-functions)[Next BASE64](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FAVG%2F&_biz_t=1777950607289&_biz_i=AVG%20%7C%20Dremio%20Documentation&_biz_n=561&rnd=829261&cdn_o=a&_biz_z=1777950607289)
