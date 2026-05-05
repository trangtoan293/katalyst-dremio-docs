---
url: /reference/sql/sql-functions/functions/ARRAYS_OVERLAP
slug: /reference/sql/sql-functions/functions/ARRAYS_OVERLAP
title: "ARRAYS_OVERLAP | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64279.362792875
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAYS_OVERLAP

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAYS_OVERLAP
Compares whether two arrays have at least one element in common. Returns true if the arrays have one or more elements in common; otherwise returns false.
## Syntax
### ARRAYS_OVERLAP(_arr1_ LIST, _arr2_ LIST) → BOOLEAN[​](/reference/sql/sql-functions)
  * arr1: The first array.
  * arr2: The second array.


**Examples**
ARRAYS_OVERLAP example

```
SELECT ARRAYS_OVERLAP(ARRAY['foo', 'bar'], ARRAY['bar', 'baz'])  
-- true  

```

ARRAYS_OVERLAP example

```
SELECT ARRAYS_OVERLAP(ARRAY['foo', 'bar'], ARRAY['baz', 'qux'])  
-- false  

```

Was this page helpful?
[Previous APPROX_PERCENTILE](/reference/sql/sql-functions)[Next ARRAY_AGG](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous APPROX_PERCENTILE](/reference/sql/sql-functions)[Next ARRAY_AGG](/reference/sql/sql-functions)
!!
