---
url: /reference/sql/sql-functions/functions/MAP_KEYS
title: "MAP_KEYS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64331.17448925
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * MAP_KEYS

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# MAP_KEYS
Returns all keys from a map expression.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### MAP_KEYS(_input_ map) → array of strings[​](/reference/sql/sql-functions#map_keysinput-map--array-of-strings "Direct link to map_keysinput-map--array-of-strings")
  * input: A map expression for which to return an array of keys.


**Examples**
MAP_KEYS example

```
SELECT MAP_KEYS(properties)  
-- ['Cover', 'Publication Year', 'Color']  

```

MAP_KEYS example returning literal map values

```
SELECT MAP_KEYS(MAP_Col) FROM (SELECT MAP['a','1', 'b', '2'] as MAP_Col)  
-- ['a', 'b']  

```

Was this page helpful?
[Previous LTRIM](/reference/sql/sql-functions)[Next MAP_VALUES](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LTRIM](/reference/sql/sql-functions)[Next MAP_VALUES](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FMAP_KEYS%2F&_biz_t=1777950651279&_biz_i=MAP_KEYS%20%7C%20Dremio%20Documentation&_biz_n=638&rnd=60465&cdn_o=a&_biz_z=1777950651279)
