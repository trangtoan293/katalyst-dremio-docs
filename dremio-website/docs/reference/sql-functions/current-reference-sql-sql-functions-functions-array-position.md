---
url: /reference/sql/sql-functions/functions/ARRAY_POSITION
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ARRAY_POSITION(_element_ ANY, _arr_ LIST) → numeric[​](/reference/sql/sql-functions#array_positionelement-any-arr-list--numeric "Direct link to array_positionelement-any-arr-list--numeric")
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_MIN](/reference/sql/sql-functions)[Next ARRAY_PREPEND](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAY_POSITION%2F&_biz_t=1777950606039&_biz_i=ARRAY_POSITION%20%7C%20Dremio%20Documentation&_biz_n=551&rnd=927449&cdn_o=a&_biz_z=1777950606040)
