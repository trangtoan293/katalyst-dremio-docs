---
url: /reference/sql/sql-functions/functions/STDDEV
title: "STDDEV | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.29545675
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * STDDEV

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions), [Aggregate](/reference/sql/sql-functions)
# STDDEV
Returns the standard deviation of non-NULL values in a column with a numeric data type. If all records inside a group are NULL, returns NULL.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### STDDEV(_col_name_ NUMERIC) → DOUBLE[​](/reference/sql/sql-functions#stddevcol_name-numeric--double "Direct link to stddevcol_name-numeric--double")
  * col_name: The name of the column for which to return the standard deviation. The values in the column must be numbers, such as INT, DOUBLE, or FLOAT.


**Examples**
STDDEV example

```
SELECT STDDEV(tip_amount) FROM Samples."samples.dremio.com"."NYC-taxi-trips";  
-- 2.2596650338662974  

```

STDDEV example: Window function with sliding window frame

```
SELECT city, state, pop, STDDEV(pop)  
  OVER (PARTITION BY state ORDER BY city ROWS BETWEEN 1 PRECEDING AND 2 FOLLOWING)  
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 6476.127649555198  
-- AKHIOK, AK, 13309, 6102.649479256257  
-- AKIACHAK, AK, 481, 6429.897977417682  
-- ...  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
The STDDEV function supports optional `PARTITION BY`, `ORDER_BY`, and sliding window frame subclauses. See [Window Functions](/reference/sql/sql-functions#window-functions) for more information and syntax.
Was this page helpful?
[Previous STARTS_WITH](/reference/sql/sql-functions)[Next STDDEV_POP](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous STARTS_WITH](/reference/sql/sql-functions)[Next STDDEV_POP](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FSTDDEV%2F&_biz_t=1777950677487&_biz_i=STDDEV%20%7C%20Dremio%20Documentation&_biz_n=684&rnd=50050&cdn_o=a&_biz_z=1777950677487)
