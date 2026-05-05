---
url: /reference/sql/sql-functions/functions/APPROX_COUNT_DISTINCT
slug: /reference/sql/sql-functions/functions/APPROX_COUNT_DISTINCT
title: "APPROX_COUNT_DISTINCT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64279.324238
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * APPROX_COUNT_DISTINCT

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions)
# APPROX_COUNT_DISTINCT
Returns the approximate number of unique, non-null values in a column.
## Syntax
### APPROX_COUNT_DISTINCT(_column_name_ any primitive) → BIGINT[​](/reference/sql/sql-functions)
  * column_name: You can specify a column of any primitive data type.


**Examples**
APPROX_COUNT_DISTINCT example

```
SELECT APPROX_COUNT_DISTINCT(IncidntNum) FROM Samples."samples.dremio.com"."SF_incidents2016.json"  
-- 116696  

```

Was this page helpful?
[Previous AI_GENERATE](/reference/sql/sql-functions)[Next APPROX_PERCENTILE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous AI_GENERATE](/reference/sql/sql-functions)[Next APPROX_PERCENTILE](/reference/sql/sql-functions)
!!
