---
url: /reference/sql/sql-functions/functions/COUNT
title: "COUNT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64302.841824416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * COUNT

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions), [Window](/reference/sql/sql-functions)
# COUNT
Returns the total number of records for the specified expression.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### COUNT(_expression_ ANY) → BIGINT[​](/reference/sql/sql-functions#countexpression-any--bigint "Direct link to countexpression-any--bigint")
  * expression: The expression to evaluate. Can be an asterisk (`*`) or the column name of any primitive data type. Use an asterisk to include rows that contain `NULL`. Use a column name to ignore rows that contain `NULL`.


**Examples**
COUNT example

```
SELECT COUNT(passenger_count) FROM "Samples"."samples.dremio.com"."NYC-taxi-trips";  
-- 338293677  

```

COUNT example: Window function with cumulative window frame

```
SELECT city, state, pop, COUNT(pop)  
  OVER (PARTITION BY state ORDER BY city RANGE BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING)  
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 196  
-- AKHIOK, AK, 13309, 195  
-- AKIACHAK, AK, 481, 194  
-- ...  

```

COUNT example: Window function with sliding window frame

```
SELECT city, state, pop, COUNT(pop)  
  OVER (PARTITION BY state ORDER BY city ROWS BETWEEN 1 PRECEDING AND 2 FOLLOWING)  
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 3  
-- AKHIOK, AK, 13309, 4  
-- AKIACHAK, AK, 481, 4  
-- ...  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
The `COUNT` function supports optional `PARTITION BY`, `ORDER_BY`, and cumulative and sliding window frame subclauses.
Was this page helpful?
[Previous COT](/reference/sql/sql-functions)[Next COVAR_POP](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous COT](/reference/sql/sql-functions)[Next COVAR_POP](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCOUNT%2F&_biz_t=1777950622576&_biz_i=COUNT%20%7C%20Dremio%20Documentation&_biz_n=590&rnd=956501&cdn_o=a&_biz_z=1777950622577)
