---
url: /reference/sql/sql-functions/functions/ARRAY_APPEND
slug: /reference/sql/sql-functions/functions/ARRAY_APPEND
title: "ARRAY_APPEND | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64279.285689291
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_APPEND

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_APPEND
Appends an element to the end of an array.
## Syntax
### ARRAY_APPEND(_array_ LIST, _element_ ANY) → LIST[​](/reference/sql/sql-functions)
  * array: The array to append to.
  * element: The element to append to the array.


**Examples**
ARRAY_APPEND example

```
SELECT ARRAY_APPEND(ARRAY[1, 2], 3);  
-- [1, 2, 3]  

```

Was this page helpful?
[Previous ARRAY_AGG](/reference/sql/sql-functions)[Next ARRAY_AVG](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_AGG](/reference/sql/sql-functions)[Next ARRAY_AVG](/reference/sql/sql-functions)
!!!
