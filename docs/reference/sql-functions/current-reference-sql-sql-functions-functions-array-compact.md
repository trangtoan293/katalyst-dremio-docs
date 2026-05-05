---
url: /reference/sql/sql-functions/functions/ARRAY_COMPACT
slug: /reference/sql/sql-functions/functions/ARRAY_COMPACT
title: "ARRAY_COMPACT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64279.728368166
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_COMPACT

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_COMPACT
Returns the input array without null values.
## Syntax
### ARRAY_COMPACT(_arr_ LIST) → list[​](/reference/sql/sql-functions)
  * arr: The array from which to remove null values.


**Examples**
array_col contains ARRAY[1, NULL, 2, NULL]

```
SELECT ARRAY_COMPACT(array_col)  
-- [1, 2]  

```

Was this page helpful?
[Previous ARRAY_CAT](/reference/sql/sql-functions)[Next ARRAY_CONTAINS](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_CAT](/reference/sql/sql-functions)[Next ARRAY_CONTAINS](/reference/sql/sql-functions)
!
