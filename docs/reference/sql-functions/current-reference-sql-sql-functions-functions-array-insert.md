---
url: /reference/sql/sql-functions/functions/ARRAY_INSERT
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ARRAY_INSERT(_arr_ LIST, _position_ INT, _new_element_ ANY) → LIST[​](/reference/sql/sql-functions#array_insertarr-list-position-int-new_element-any--list "Direct link to array_insertarr-list-position-int-new_element-any--list")
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

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
• The existing element in the specified position and all subsequent elements are shifted to the right by one position in the output array.  
  
• If the absolute value of the specified position exceeds the number of elements in the input array, then NULL elements are inserted between the last element in the input array and the new element.  
  
• A negative position is interpreted as an index from the end of the array. For example, the position `-1` means that the new element should be added as the last element in the array.
Was this page helpful?
[Previous ARRAY_GENERATE_RANGE](/reference/sql/sql-functions)[Next ARRAY_MAX](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_GENERATE_RANGE](/reference/sql/sql-functions)[Next ARRAY_MAX](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FAPPROX_COUNT_DISTINCT%2F&_biz_t=1777950599287&_biz_i=APPROX_COUNT_DISTINCT%20%7C%20Dremio%20Documentation&_biz_n=548&rnd=712737&cdn_o=a&_biz_z=1777950599389)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAY_INSERT%2F&_biz_t=1777950599388&_biz_i=Dremio%20Documentation&_biz_n=550&rnd=637201&cdn_o=a&_biz_z=1777950599389)
