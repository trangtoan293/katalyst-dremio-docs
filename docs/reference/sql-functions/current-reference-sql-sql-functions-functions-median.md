---
url: /reference/sql/sql-functions/functions/MEDIAN
slug: /reference/sql/sql-functions/functions/MEDIAN
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
## Syntax
### MEDIAN(_num_col_ numeric) → double precision[​](/reference/sql/sql-functions)
  * num_col: A numeric column whose median value you want to compute.


**Examples**
MEDIAN example

```
SELECT MEDIAN(pop) FROM Samples."samples.dremio.com"."zips.json"  
-- 2783.0  

```

## Usage Notes[​](/reference/sql/sql-functions)
Use only with numeric data types. Dremio ignores `NULL` values in the specified column.
Was this page helpful?
[Previous MD5](/reference/sql/sql-functions)[Next MIN](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MD5](/reference/sql/sql-functions)[Next MIN](/reference/sql/sql-functions)
