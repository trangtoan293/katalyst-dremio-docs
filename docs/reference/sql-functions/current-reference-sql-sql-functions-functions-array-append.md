---
url: /reference/sql/sql-functions/functions/ARRAY_APPEND
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ARRAY_APPEND(_array_ LIST, _element_ ANY) → LIST[​](/reference/sql/sql-functions#array_appendarray-list-element-any--list "Direct link to array_appendarray-list-element-any--list")
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_AGG](/reference/sql/sql-functions)[Next ARRAY_AVG](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAY_FREQUENCY%2F&_biz_t=1777950598728&_biz_i=Dremio%20Documentation&_biz_n=542&rnd=354065&cdn_o=a&_biz_z=1777950598902)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAYS_OVERLAP%2F&_biz_t=1777950598825&_biz_i=ARRAYS_OVERLAP%20%7C%20Dremio%20Documentation&_biz_n=543&rnd=581246&cdn_o=a&_biz_z=1777950598902)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAY_APPEND%2F&_biz_t=1777950598901&_biz_i=ARRAY_APPEND%20%7C%20Dremio%20Documentation&_biz_n=544&rnd=970248&cdn_o=a&_biz_z=1777950598902)
