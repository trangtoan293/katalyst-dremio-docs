---
url: /reference/sql/sql-functions/functions/MAP_VALUES
title: "MAP_VALUES | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64331.382829083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * MAP_VALUES

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# MAP_VALUES
Returns all values from a map expression.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### MAP_VALUES(_input_ map) → array[​](/reference/sql/sql-functions#map_valuesinput-map--array "Direct link to map_valuesinput-map--array")
  * input: A map expression for which to return an array of values.


**Examples**
MAP_VALUES example

```
SELECT MAP_VALUES(properties)  
-- ['Hardcover', '2002', 'Blue']  

```

MAP_VALUES example returning literal map values

```
SELECT MAP_VALUES(MAP_Col) FROM (SELECT MAP['a','1', 'b', '2'] as MAP_Col)  
-- ['1', '2']  

```

Was this page helpful?
[Previous MAP_KEYS](/reference/sql/sql-functions)[Next MASK](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MAP_KEYS](/reference/sql/sql-functions)[Next MASK](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FMAP_VALUES%2F&_biz_t=1777950651143&_biz_i=MAP_VALUES%20%7C%20Dremio%20Documentation&_biz_n=636&rnd=776921&cdn_o=a&_biz_z=1777950651143)
