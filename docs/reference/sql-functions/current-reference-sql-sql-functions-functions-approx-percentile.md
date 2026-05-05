---
url: /reference/sql/sql-functions/functions/APPROX_PERCENTILE
slug: /reference/sql/sql-functions/functions/APPROX_PERCENTILE
title: "APPROX_PERCENTILE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64279.142499625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * APPROX_PERCENTILE

Version: current [26.x]
On this page
**Categories** : [Percentile](/reference/sql/sql-functions)
# APPROX_PERCENTILE
Computes the approximate percentile of the given column and quantile.
## Syntax
### APPROX_PERCENTILE(_column_name_ numeric, _percentile_ double) → DOUBLE[​](/reference/sql/sql-functions)
  * column_name: The column for which to compute the approximate percentile.
  * percentile: The percentile to use in the approximation. Must be a number between 0 and 1.


**Examples**
APPROX_PERCENTILE example

```
SELECT APPROX_PERCENTILE(pop, 0.5) FROM Samples."samples.dremio.com"."zips.json"  
-- 2780.17855684608  

```

Was this page helpful?
[Previous APPROX_COUNT_DISTINCT](/reference/sql/sql-functions)[Next ARRAYS_OVERLAP](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous APPROX_COUNT_DISTINCT](/reference/sql/sql-functions)[Next ARRAYS_OVERLAP](/reference/sql/sql-functions)
