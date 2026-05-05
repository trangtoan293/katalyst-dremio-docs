---
url: /reference/sql/sql-functions/functions/MEDIAN
title: "MEDIAN | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64337.740831375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * MEDIAN

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions), [Percentile](/reference/sql/sql-functions)
# MEDIAN
Computes the median of the specified column's values based on a continuous distribution.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### MEDIAN(_num_col_ numeric) → double precision[​](/reference/sql/sql-functions#mediannum_col-numeric--double-precision "Direct link to mediannum_col-numeric--double-precision")
  * num_col: A numeric column whose median value you want to compute.


**Examples**
MEDIAN example

```
SELECT MEDIAN(pop) FROM Samples."samples.dremio.com"."zips.json"  
-- 2783.0  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
Use only with numeric data types. Dremio ignores `NULL` values in the specified column.
Was this page helpful?
[Previous MD5](/reference/sql/sql-functions)[Next MIN](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MD5](/reference/sql/sql-functions)[Next MIN](/reference/sql/sql-functions)
