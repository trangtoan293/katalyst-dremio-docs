---
url: /reference/sql/sql-functions/functions/PERCENTILE_CONT
slug: /reference/sql/sql-functions/functions/PERCENTILE_CONT
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
## Syntax
### PERCENTILE_CONT(_fraction_ double precision) WITHIN GROUP ( ORDER BY _order_by_expression_ numeric [ ASC | DESC ] ) → double precision[​](/reference/sql/sql-functions)
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

## Usage Notes[​](/reference/sql/sql-functions)
This function computes a percentile based on a continuous distribution of the column value. The result is interpolated and may not be equal to any of the actual values in the column. This information was originally provided via 
`NULL` values in the data set are ignored. However, passing `NULL` as _fraction_ or as _order_by_expression_ will cause an error.
Was this page helpful?
[Previous PARSE_URL](/reference/sql/sql-functions)[Next PERCENTILE_DISC](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous PARSE_URL](/reference/sql/sql-functions)[Next PERCENTILE_DISC](/reference/sql/sql-functions)
!
