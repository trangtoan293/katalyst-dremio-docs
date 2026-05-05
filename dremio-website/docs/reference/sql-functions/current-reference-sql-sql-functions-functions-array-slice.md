---
url: /reference/sql/sql-functions/functions/ARRAY_SLICE
title: "ARRAY_SLICE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64287.201741125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_SLICE

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_SLICE
Returns an array constructed from the specified subset of elements in the input array.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ARRAY_SLICE(_arr_ LIST, _from_ int, _to_ int) → LIST[​](/reference/sql/sql-functions#array_slicearr-list-from-int-to-int--list "Direct link to array_slicearr-list-from-int-to-int--list")
  * arr: The input array.
  * from: The zero-based position in the input array of the first element to include in the output array. Elements in positions that are less than the `from` position are not included in the output array. A negative position is interpreted as an index from the back of the array. For example, the value `-1` begins the output array with the last element in the input array.
  * to: The zero-based position in the input array of the last element to include in the output array. Elements in positions that are equal to or greater than the `to` position are not included in the resulting array. A negative position is interpreted as an index from the back of the array. For example, the value `-1` ends the output array with the second-to-last element in the input array.


**Examples**
array_col contains ARRAY[0,1,2,3,4,5,6], 0, 3

```
SELECT ARRAY_SLICE(array_col)  
-- [0,1,2]  

```

array_col contains ARRAY[0,1,2,3,4,5,6], 0, -2

```
SELECT ARRAY_SLICE(array_col)  
-- [0,1,2,3,4]  

```

array_col contains ARRAY[0,1,2,3,4,5,6], -5, -3

```
SELECT ARRAY_SLICE(array_col)  
-- [2,3]  

```

array_col contains ARRAY[0,1,2,3,4,5,6], 10, 12

```
SELECT ARRAY_SLICE(array_col)  
-- []  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
The output includes elements up to but not including the element specfied by the `to` parameter.  
  
If the array is NULL, the result is NULL. If either of the `from` or `to` parameters is NULL, the result is NULL.  
  
If both of the of the `from` or `to` parameters are beyond the upper or lower end of the array, the result is an empty array.
Was this page helpful?
[Previous ARRAY_SIZE](/reference/sql/sql-functions)[Next ARRAY_SUM](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_SIZE](/reference/sql/sql-functions)[Next ARRAY_SUM](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAY_SLICE%2F&_biz_t=1777950606612&_biz_i=ARRAY_SLICE%20%7C%20Dremio%20Documentation&_biz_n=556&rnd=419745&cdn_o=a&_biz_z=1777950606612)
