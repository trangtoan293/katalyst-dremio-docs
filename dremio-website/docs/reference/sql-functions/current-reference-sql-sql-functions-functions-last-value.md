---
url: /reference/sql/sql-functions/functions/LAST_VALUE
title: "LAST_VALUE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.438697916
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LAST_VALUE

Version: current [26.x]
On this page
**Categories** : [Window](/reference/sql/sql-functions)
# LAST_VALUE
Returns the last value within an ordered group of a result set.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### LAST_VALUE(_expression_ VARCHAR, _order_subclause_ VARCHAR) → VARCHAR[​](/reference/sql/sql-functions#last_valueexpression-varchar-order_subclause-varchar--varchar "Direct link to last_valueexpression-varchar-order_subclause-varchar--varchar")
  * expression: The expression that determines the return value.
  * order_subclause: A subclause that specifies the order of the rows within each partition of the result set.


**Examples**
LAST_VALUE example

```
SELECT city, state, pop, LAST_VALUE(pop) OVER (PARTITION BY state ORDER BY city) FROM Samples."samples.dremio.com"."zips.json"  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345,  5345  
-- AKHIOK, AK, 13309, 11309  
-- AKIACHAK, AK, 481, 481  
-- ...  

```

LAST_VALUE example: Window function with cumulative window frame

```
SELECT city, state, pop, LAST_VALUE(pop) OVER (PARTITION BY state ORDER BY city RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) FROM Samples."samples.dremio.com"."zips.json"  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 481  
-- AKHIOK, AK, 13309, 481  
-- AKIACHAK, AK, 481, 481  
-- ...  

```

LAST_VALUE example: Window function with sliding window frame

```
SELECT city, state, pop, LAST_VALUE(pop) OVER (PARTITION BY state ORDER BY city ROWS BETWEEN 2 PRECEDING AND 1 FOLLOWING) FROM Samples."samples.dremio.com"."zips.json"  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 13309  
-- AKHIOK, AK, 13309, 481  
-- AKIACHAK, AK, 481, 481  
-- ...  

```

Was this page helpful?
[Previous LAST_QUERY_ID](/reference/sql/sql-functions)[Next LCASE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LAST_QUERY_ID](/reference/sql/sql-functions)[Next LCASE](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FLAST_VALUE%2F&_biz_t=1777950644342&_biz_i=LAST_VALUE%20%7C%20Dremio%20Documentation&_biz_n=623&rnd=897211&cdn_o=a&_biz_z=1777950644342)
