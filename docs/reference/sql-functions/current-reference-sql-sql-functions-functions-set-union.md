---
url: /reference/sql/sql-functions/functions/SET_UNION
slug: /reference/sql/sql-functions/functions/SET_UNION
title: "SET_UNION | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64351.507351458
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SET_UNION

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# SET_UNION
Given two arrays, returns a single array that includes all of the elements in the given arrays, without duplicates.
## Syntax
### SET_UNION(_array1_ LIST, _array2_ LIST) → LIST[​](/reference/sql/sql-functions)
  * array1: The first input array to participate in the union.
  * array2: The second input array to participate in the union.


**Examples**
SET_UNION example

```
SELECT SET_UNION(ARRAY[1, 2, 2, 3], ARRAY[1, 3, 5]);  
-- [2,3,5,1]  

```

SET_UNION example

```
SELECT SET_UNION(ARRAY[1, 1, 2], ARRAY[3, 3, 4]);  
-- [2,3,4,1]  

```

## Usage Notes[​](/reference/sql/sql-functions)
The elements in the returned array are not listed in any particular order.
Was this page helpful?
[Previous SESSION_USER](/reference/sql/sql-functions)[Next SHA256](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SESSION_USER](/reference/sql/sql-functions)[Next SHA256](/reference/sql/sql-functions)
