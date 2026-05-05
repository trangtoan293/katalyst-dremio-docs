---
url: /reference/sql/sql-functions/functions/ARRAY_CAT
slug: /reference/sql/sql-functions/functions/ARRAY_CAT
title: "ARRAY_CAT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64279.966523666
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_CAT

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_CAT
Returns a concatenation of two arrays.
## Syntax
### ARRAY_CAT(_arr1_ LIST, _arr2_ LIST) → list[​](/reference/sql/sql-functions)
  * arr1: The source array.
  * arr2: The array to be appended to the source array.


**Examples**
ARRAY_CAT example

```
SELECT ARRAY_CAT(ARRAY[1, 2, 3], ARRAY[4, 5, 6])  
-- [1, 2, 3, 4, 5, 6]  

```

Was this page helpful?
[Previous ARRAY_AVG](/reference/sql/sql-functions)[Next ARRAY_COMPACT](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_AVG](/reference/sql/sql-functions)[Next ARRAY_COMPACT](/reference/sql/sql-functions)
!!!
