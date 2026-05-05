---
url: /reference/sql/sql-functions/functions/SUBLIST
title: "SUBLIST | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.99996825
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SUBLIST

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# SUBLIST
Returns an array constructed from the specified subset of elements of the input array.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### SUBLIST(_arr_ LIST, _offset_ INT, _length_ INT) → LIST[​](/reference/sql/sql-functions#sublistarr-list-offset-int-length-int--list "Direct link to sublistarr-list-offset-int-length-int--list")
  * arr: The input array.
  * offset: The offset from which the sublist should start.
  * length: The maximum length of the sublist.


**Examples**
SUBLIST example

```
SELECT SUBLIST(ARRAY[1,2,3,4,5], 0, 3)  
-- [1,2,3]  

```

SUBLIST example

```
SELECT SUBLIST(ARRAY[1,2,3,4,5], 3, 3)  
-- [3,4,5]  

```

Was this page helpful?
[Previous ST_GEOHASH](/reference/sql/sql-functions)[Next SUBSTR](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ST_GEOHASH](/reference/sql/sql-functions)[Next SUBSTR](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FSUBLIST%2F&_biz_t=1777950678910&_biz_i=SUBLIST%20%7C%20Dremio%20Documentation&_biz_n=692&rnd=376579&cdn_o=a&_biz_z=1777950678910)
