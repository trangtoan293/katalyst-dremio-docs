---
url: /reference/sql/sql-functions/functions/ARRAY_INSERT
slug: /reference/sql/sql-functions/functions/ARRAY_INSERT
title: "ARRAY_INSERT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64279.171080125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_INSERT

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_INSERT
Returns an array that contains all of the elements from the input array as well as a new element inserted in the specified position.
## Syntax
### ARRAY_INSERT(_arr_ LIST, _position_ INT, _new_element_ ANY) → LIST[​](/reference/sql/sql-functions)
  * arr: The array to search.
  * position: The zero-based position in the input array where the new element should be inserted.
  * new_element: The new element to insert in the specified position.


**Examples**
ARRAY_INSERT example

```
SELECT ARRAY_INSERT(ARRAY[1, 2, 3, 4, 5], 2, 55);  
-- [1, 2, 55, 3, 4, 5]  

```

ARRAY_INSERT example

```
SELECT ARRAY_INSERT(ARRAY[1, 2, 3], 6, 55);  
-- [1, 2, 3, NULL, NULL, NULL, 55]  

```

ARRAY_INSERT example

```
SELECT ARRAY_INSERT(ARRAY[1, 2, 3], -1, 55);  
-- [1, 2, 55, 3]  

```

## Usage Notes[​](/reference/sql/sql-functions)
• The existing element in the specified position and all subsequent elements are shifted to the right by one position in the output array.  
  
• If the absolute value of the specified position exceeds the number of elements in the input array, then NULL elements are inserted between the last element in the input array and the new element.  
  
• A negative position is interpreted as an index from the end of the array. For example, the position `-1` means that the new element should be added as the last element in the array.
Was this page helpful?
[Previous ARRAY_GENERATE_RANGE](/reference/sql/sql-functions)[Next ARRAY_MAX](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_GENERATE_RANGE](/reference/sql/sql-functions)[Next ARRAY_MAX](/reference/sql/sql-functions)
!!
