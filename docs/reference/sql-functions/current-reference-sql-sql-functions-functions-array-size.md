---
url: /reference/sql/sql-functions/functions/ARRAY_SIZE
title: "ARRAY_SIZE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64287.028963458
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_SIZE

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_SIZE
Returns the size of the input array.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ARRAY_SIZE(_arr_ LIST) → numeric[​](/reference/sql/sql-functions#array_sizearr-list--numeric "Direct link to array_sizearr-list--numeric")
  * arr: The source array.


**Examples**
ARRAY_SIZE example

```
SELECT ARRAY_SIZE(ARRAY[1, 4, 5])  
-- 3  

```

Was this page helpful?
[Previous ARRAY_REMOVE_AT](/reference/sql/sql-functions)[Next ARRAY_SLICE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_REMOVE_AT](/reference/sql/sql-functions)[Next ARRAY_SLICE](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FBASE64%2F&_biz_t=1777950606749&_biz_i=Dremio%20Documentation&_biz_n=557&rnd=27171&cdn_o=a&_biz_z=1777950606786)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAY_SIZE%2F&_biz_t=1777950606786&_biz_i=Dremio%20Documentation&_biz_n=558&rnd=462500&cdn_o=a&_biz_z=1777950606786)
