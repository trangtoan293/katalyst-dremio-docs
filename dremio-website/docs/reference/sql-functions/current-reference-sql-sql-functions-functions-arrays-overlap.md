---
url: /reference/sql/sql-functions/functions/ARRAYS_OVERLAP
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ARRAYS_OVERLAP(_arr1_ LIST, _arr2_ LIST) → BOOLEAN[​](/reference/sql/sql-functions#arrays_overlaparr1-list-arr2-list--boolean "Direct link to arrays_overlaparr1-list-arr2-list--boolean")
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous APPROX_PERCENTILE](/reference/sql/sql-functions)[Next ARRAY_AGG](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAY_FREQUENCY%2F&_biz_t=1777950598728&_biz_i=Dremio%20Documentation&_biz_n=542&rnd=354065&cdn_o=a&_biz_z=1777950598826)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAYS_OVERLAP%2F&_biz_t=1777950598825&_biz_i=ARRAYS_OVERLAP%20%7C%20Dremio%20Documentation&_biz_n=543&rnd=581246&cdn_o=a&_biz_z=1777950598826)
