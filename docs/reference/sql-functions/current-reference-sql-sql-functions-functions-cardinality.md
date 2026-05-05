---
url: /reference/sql/sql-functions/functions/CARDINALITY
slug: /reference/sql/sql-functions/functions/CARDINALITY
title: "CARDINALITY | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.814961375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CARDINALITY

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# CARDINALITY
Returns the number of elements contained in the specified list or map.
## Syntax
### CARDINALITY(_list_or_map_ list or map) → bigint[​](/reference/sql/sql-functions)
  * list_or_map: The list or map to count elements from.


**Examples**
CARDINALITY example

```
SELECT CARDINALITY(CONVERT_FROM('[1, 2, 3, 4, 5]', 'json'))  
-- 5  

```

## Usage Notes[​](/reference/sql/sql-functions)
This function counts both `null` and non-null elements. The cardinality of `null` is `null`.
Was this page helpful?
[Previous BTRIM](/reference/sql/sql-functions)[Next CASE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous BTRIM](/reference/sql/sql-functions)[Next CASE](/reference/sql/sql-functions)
!!
