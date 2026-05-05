---
url: /reference/sql/sql-functions/functions/CARDINALITY
title: "CARDINALITY | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.814961375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CARDINALITY

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# CARDINALITY
Returns the number of elements contained in the specified list or map.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### CARDINALITY(_list_or_map_ list or map) → bigint[​](/reference/sql/sql-functions#cardinalitylist_or_map-list-or-map--bigint "Direct link to cardinalitylist_or_map-list-or-map--bigint")
  * list_or_map: The list or map to count elements from.


**Examples**
CARDINALITY example

```
SELECT CARDINALITY(CONVERT_FROM('[1, 2, 3, 4, 5]', 'json'))  
-- 5  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
This function counts both `null` and non-null elements. The cardinality of `null` is `null`.
Was this page helpful?
[Previous BTRIM](/reference/sql/sql-functions)[Next CASE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous BTRIM](/reference/sql/sql-functions)[Next CASE](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FBOOL_OR%2F&_biz_t=1777950614089&_biz_i=BOOL_OR%20%7C%20Dremio%20Documentation&_biz_n=567&rnd=370325&cdn_o=a&_biz_z=1777950614119)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCARDINALITY%2F&_biz_t=1777950614119&_biz_i=Dremio%20Documentation&_biz_n=568&rnd=900143&cdn_o=a&_biz_z=1777950614119)
