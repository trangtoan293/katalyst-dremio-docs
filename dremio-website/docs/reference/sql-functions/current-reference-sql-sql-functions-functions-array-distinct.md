---
url: /reference/sql/sql-functions/functions/ARRAY_DISTINCT
title: "ARRAY_DISTINCT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64279.997953291
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_DISTINCT

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_DISTINCT
Given an input array, returns an equivalent array that includes only distinct elements.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ARRAY_DISTINCT(_input_ LIST) → LIST[​](/reference/sql/sql-functions#array_distinctinput-list--list "Direct link to array_distinctinput-list--list")
  * input: The input array from which to return only distinct elements.


**Examples**
ARRAY_DISTINCT example

```
SELECT ARRAY_DISTINCT(ARRAY[1, 2, 3, 1, 2, 3])  
-- [2, 3, 1]  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
The elements in the returned array are not listed in any particular order.
Was this page helpful?
[Previous ARRAY_CONTAINS](/reference/sql/sql-functions)[Next ARRAY_FREQUENCY](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_CONTAINS](/reference/sql/sql-functions)[Next ARRAY_FREQUENCY](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAY_AVG%2F&_biz_t=1777950599260&_biz_i=ARRAY_AVG%20%7C%20Dremio%20Documentation&_biz_n=547&rnd=967662&cdn_o=a&_biz_z=1777950599286)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAY_DISTINCT%2F&_biz_t=1777950599286&_biz_i=ARRAY_DISTINCT%20%7C%20Dremio%20Documentation&_biz_n=548&rnd=233782&cdn_o=a&_biz_z=1777950599286)
