---
url: /reference/sql/sql-functions/functions/ARRAY_CAT
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ARRAY_CAT(_arr1_ LIST, _arr2_ LIST) → list[​](/reference/sql/sql-functions#array_catarr1-list-arr2-list--list "Direct link to array_catarr1-list-arr2-list--list")
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_AVG](/reference/sql/sql-functions)[Next ARRAY_COMPACT](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAY_AVG%2F&_biz_t=1777950599260&_biz_i=ARRAY_AVG%20%7C%20Dremio%20Documentation&_biz_n=547&rnd=967662&cdn_o=a&_biz_z=1777950599312)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FAPPROX_COUNT_DISTINCT%2F&_biz_t=1777950599287&_biz_i=APPROX_COUNT_DISTINCT%20%7C%20Dremio%20Documentation&_biz_n=548&rnd=712737&cdn_o=a&_biz_z=1777950599313)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAY_CAT%2F&_biz_t=1777950599312&_biz_i=ARRAY_CAT%20%7C%20Dremio%20Documentation&_biz_n=549&rnd=996228&cdn_o=a&_biz_z=1777950599313)
