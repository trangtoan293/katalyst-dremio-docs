---
url: /reference/sql/sql-functions/functions/ARRAY_COMPACT
title: "ARRAY_COMPACT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64279.728368166
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_COMPACT

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_COMPACT
Returns the input array without null values.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ARRAY_COMPACT(_arr_ LIST) → list[​](/reference/sql/sql-functions#array_compactarr-list--list "Direct link to array_compactarr-list--list")
  * arr: The array from which to remove null values.


**Examples**
array_col contains ARRAY[1, NULL, 2, NULL]

```
SELECT ARRAY_COMPACT(array_col)  
-- [1, 2]  

```

Was this page helpful?
[Previous ARRAY_CAT](/reference/sql/sql-functions)[Next ARRAY_CONTAINS](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_CAT](/reference/sql/sql-functions)[Next ARRAY_CONTAINS](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAY_COMPACT%2F&_biz_t=1777950599404&_biz_i=ARRAY_COMPACT%20%7C%20Dremio%20Documentation&_biz_n=550&rnd=575422&cdn_o=a&_biz_z=1777950599405)
