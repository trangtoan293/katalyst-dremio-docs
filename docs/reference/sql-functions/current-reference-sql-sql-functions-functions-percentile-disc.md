---
url: /reference/sql/sql-functions/functions/PERCENTILE_DISC
slug: /reference/sql/sql-functions/functions/PERCENTILE_DISC
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
## Syntax
### PERCENTILE_DISC(_fraction_ double precision) WITHIN GROUP ( ORDER BY _order_by_expression_ [ ASC | DESC ] ) → double precision[​](/reference/sql/sql-functions)
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

## Usage Notes[​](/reference/sql/sql-functions)
This function computes a specific percentile for sorted values in a column. For each percentile value, `PERCENTILE_DISC` sorts the values using the `ORDER BY` clause. The function then returns the value with the smallest [`CUME_DIST`](/reference/sql/sql-functions) value given that is greater or equal to the percentile value. For example, `PERCENTILE_DISC (0.5)` computes the 50th percentile (the median) of an expression. The result is equal to a specific column value. This information was originally provided via 
`NULL` values in the data set are ignored. However, passing `NULL` as _fraction_ or as _order_by_expression_ will cause an error.
Was this page helpful?
[Previous PERCENTILE_CONT](/reference/sql/sql-functions)[Next PERCENT_RANK](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous PERCENTILE_CONT](/reference/sql/sql-functions)[Next PERCENT_RANK](/reference/sql/sql-functions)
!
