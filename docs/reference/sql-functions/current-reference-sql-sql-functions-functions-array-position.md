---
url: /reference/sql/sql-functions/functions/ARRAY_POSITION
slug: /reference/sql/sql-functions/functions/ARRAY_POSITION
title: "ARRAY_POSITION | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64286.696370625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_POSITION

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_POSITION
Returns the index of the first occurrence of an element in an array.
## Syntax
### ARRAY_POSITION(_element_ ANY, _arr_ LIST) → numeric[​](/reference/sql/sql-functions)
  * element: Element to find in the array.
  * arr: The array to search.


**Examples**
ARRAY_POSITION example

```
SELECT ARRAY_POSITION(CAST(3 AS BIGINT), ARRAY[1, 2, 3])  
-- 2  

```

ARRAY_POSITION example

```
SELECT ARRAY_POSITION(4, ARRAY[1, 2, 3])  
-- NULL  

```

array_col contains ARRAY[1, NULL, 3]

```
SELECT ARRAY_POSITION(NULL, array_col)  
-- 1  

```

ARRAY_POSITION example

```
SELECT ARRAY_POSITION(ARRAY[2,3], ARRAY[ARRAY[1,2], ARRAY[2,3]])  
-- 1  

```

Was this page helpful?
[Previous ARRAY_MIN](/reference/sql/sql-functions)[Next ARRAY_PREPEND](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_MIN](/reference/sql/sql-functions)[Next ARRAY_PREPEND](/reference/sql/sql-functions)
!
