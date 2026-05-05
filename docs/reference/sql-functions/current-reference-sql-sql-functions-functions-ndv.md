---
url: /reference/sql/sql-functions/functions/NDV
slug: /reference/sql/sql-functions/functions/NDV
title: "NDV | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64337.922170291
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * NDV

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions), [Window](/reference/sql/sql-functions)
# NDV
Returns an approximate distinct value number, similar to `COUNT(DISTINCT col)`. NDV can return results faster than using the combination of COUNT and DISTINCT while using a constant amount of memory, resulting in less memory usage for columns with high cardinality.
## Syntax
### NDV(_expression_ numeric [, _scale_ numeric]) → bigint[​](/reference/sql/sql-functions)
  * expression: The name of the column whose records you wish to evaluate.
  * scale (optional): Argument that maps to a precision used by the HyperLogLog (HLL) algorithm based on the mapping formula: `precision = scale +8`. Enter an integer in the range from 1 to 10.


**Examples**
NDV example

```
SELECT NDV(column_name)  
-- 163  

```

NDV example

```
SELECT NDV(column_name, 1)  
-- 162  

```

## Usage Notes[​](/reference/sql/sql-functions)
The NDV function is used internally by the `COMPUTE STATS` statement for computing the number of distinct values in a column. This function might not reflect the precise number of different values in the column, especially if the cardinality is very low or very high. This function accepts the DISTINCT and ALL keywords: `NDV([DISTINCT | ALL] expression)`.
Was this page helpful?
[Previous MONTHS_BETWEEN](/reference/sql/sql-functions)[Next NEXT_DAY](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MONTHS_BETWEEN](/reference/sql/sql-functions)[Next NEXT_DAY](/reference/sql/sql-functions)
!!!
