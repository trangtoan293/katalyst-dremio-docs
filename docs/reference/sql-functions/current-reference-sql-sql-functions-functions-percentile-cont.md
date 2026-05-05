---
url: /reference/sql/sql-functions/functions/PERCENTILE_CONT
title: "PERCENTILE_CONT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64338.291333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * PERCENTILE_CONT

Version: current [26.x]
On this page
**Categories** : [Percentile](/reference/sql/sql-functions)
# PERCENTILE_CONT
Computes a percentile value based on a continuous distribution of the column input.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### PERCENTILE_CONT(_fraction_ double precision) WITHIN GROUP ( ORDER BY _order_by_expression_ numeric [ ASC | DESC ] ) → double precision[​](/reference/sql/sql-functions#percentile_contfraction-double-precision-within-group--order-by-order_by_expression-numeric--asc--desc----double-precision "Direct link to percentile_contfraction-double-precision-within-group--order-by-order_by_expression-numeric--asc--desc----double-precision")
  * fraction: The fraction/percentile value to compute. The value for this must be a numeric literal in the range of 0 to 1 inclusive and represents a percentage.
  * order_by_expression: The expression to sort and compute the percentile. You can only provide one expression in the ORDER BY clause. By default, the sort order is ascending (ASC).


**Examples**
PERCENTILE_CONT example

```
SELECT PERCENTILE_CONT(0.6) WITHIN GROUP ( ORDER BY pop ASC ),  
PERCENTILE_CONT(0.6) WITHIN GROUP ( ORDER BY pop DESC )  
FROM Samples."samples.dremio.com"."zips.json"  
-- EXPR$0, EXPR$1  
-- 4519.2, 1806.0  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
This function computes a percentile based on a continuous distribution of the column value. The result is interpolated and may not be equal to any of the actual values in the column. This information was originally provided via 
`NULL` values in the data set are ignored. However, passing `NULL` as _fraction_ or as _order_by_expression_ will cause an error.
Was this page helpful?
[Previous PARSE_URL](/reference/sql/sql-functions)[Next PERCENTILE_DISC](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous PARSE_URL](/reference/sql/sql-functions)[Next PERCENTILE_DISC](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FPERCENTILE_CONT%2F&_biz_t=1777950658842&_biz_i=PERCENTILE_CONT%20%7C%20Dremio%20Documentation&_biz_n=658&rnd=83743&cdn_o=a&_biz_z=1777950658842)
