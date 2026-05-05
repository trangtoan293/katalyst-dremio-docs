---
url: /reference/sql/sql-functions/functions/PERCENTILE_DISC
title: "PERCENTILE_DISC | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64337.95770025
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * PERCENTILE_DISC

Version: current [26.x]
On this page
**Categories** : [Percentile](/reference/sql/sql-functions)
# PERCENTILE_DISC
Computes a specific percentile for sorted values in a column.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### PERCENTILE_DISC(_fraction_ double precision) WITHIN GROUP ( ORDER BY _order_by_expression_ [ ASC | DESC ] ) → double precision[​](/reference/sql/sql-functions#percentile_discfraction-double-precision-within-group--order-by-order_by_expression--asc--desc----double-precision "Direct link to percentile_discfraction-double-precision-within-group--order-by-order_by_expression--asc--desc----double-precision")
  * fraction: The fraction/percentile value to compute. The value for this must be a numeric literal in the range of 0 to 1 inclusive and represents a percentage.
  * order_by_expression: The expression to sort and compute the percentile. You can only provide one expression in the ORDER BY clause.


**Examples**
PERCENTILE_DISC example

```
SELECT PERCENTILE_DISC(0.6) WITHIN GROUP ( ORDER BY pop ASC ),   
PERCENTILE_DISC(0.6) WITHIN GROUP ( ORDER BY pop DESC )  
FROM Samples."samples.dremio.com"."zips.json"  
-- EXPR$0, EXPR$1  
-- 4520.0, 1806.0  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
This function computes a specific percentile for sorted values in a column. For each percentile value, `PERCENTILE_DISC` sorts the values using the `ORDER BY` clause. The function then returns the value with the smallest [`CUME_DIST`](/reference/sql/sql-functions) value given that is greater or equal to the percentile value. For example, `PERCENTILE_DISC (0.5)` computes the 50th percentile (the median) of an expression. The result is equal to a specific column value. This information was originally provided via 
`NULL` values in the data set are ignored. However, passing `NULL` as _fraction_ or as _order_by_expression_ will cause an error.
Was this page helpful?
[Previous PERCENTILE_CONT](/reference/sql/sql-functions)[Next PERCENT_RANK](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous PERCENTILE_CONT](/reference/sql/sql-functions)[Next PERCENT_RANK](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FPERCENTILE_DISC%2F&_biz_t=1777950658962&_biz_i=PERCENTILE_DISC%20%7C%20Dremio%20Documentation&_biz_n=659&rnd=250619&cdn_o=a&_biz_z=1777950658962)
