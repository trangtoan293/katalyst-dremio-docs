---
url: /reference/sql/sql-functions/functions/ARRAY_REMOVE_AT
title: "ARRAY_REMOVE_AT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64286.471932
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_REMOVE_AT

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_REMOVE_AT
Returns the input array with the element at the specified position removed.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ARRAY_REMOVE_AT(_arr_ LIST, _position_ int32) → list[​](/reference/sql/sql-functions#array_remove_atarr-list-position-int32--list "Direct link to array_remove_atarr-list-position-int32--list")
  * arr: Array from which to remove the element at the specified position.
  * position: The zero-based position of the element to be removed. The function removes the element at the specified position. A negative position is interpreted as an index from the back of the array. For example, the value `-1` removes the last element in the array.


**Examples**
ARRAY_REMOVE_AT example

```
SELECT ARRAY_REMOVE_AT(ARRAY[1, 2, 3], 1)  
-- [1, 3]  

```

ARRAY_REMOVE_AT example

```
SELECT ARRAY_REMOVE_AT(ARRAY[1, 2, 3], -1)  
-- [1, 2]  

```

ARRAY_REMOVE_AT example

```
SELECT ARRAY_REMOVE_AT(ARRAY[1, 2, 3], 10)  
-- [1, 2, 3]  

```

Was this page helpful?
[Previous ARRAY_REMOVE](/reference/sql/sql-functions)[Next ARRAY_SIZE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_REMOVE](/reference/sql/sql-functions)[Next ARRAY_SIZE](/reference/sql/sql-functions)
