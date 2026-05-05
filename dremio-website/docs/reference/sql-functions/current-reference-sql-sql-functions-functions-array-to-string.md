---
url: /reference/sql/sql-functions/functions/ARRAY_TO_STRING
title: "ARRAY_TO_STRING | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64286.915207125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_TO_STRING

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions), [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_TO_STRING
Returns a string of the values from the input array, with the values separated by the specified delimiter string.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ARRAY_TO_STRING(_arr_ LIST, _delimiter_ VARCHAR) → VARCHAR[​](/reference/sql/sql-functions#array_to_stringarr-list-delimiter-varchar--varchar "Direct link to array_to_stringarr-list-delimiter-varchar--varchar")
  * arr: The source array.
  * delimiter: The string to place between each element in the array.


**Examples**
ARRAY_TO_STRING example

```
SELECT ARRAY_TO_STRING(ARRAY[1, 2, 3], ',')  
-- 1,2,3  

```

array_col contains ARRAY[1, NULL, 3]

```
SELECT ARRAY_TO_STRING(array_col, ',')  
-- 1,,3  

```

Was this page helpful?
[Previous ARRAY_SUM](/reference/sql/sql-functions)[Next ASCII](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_SUM](/reference/sql/sql-functions)[Next ASCII](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAY_TO_STRING%2F&_biz_t=1777950606487&_biz_i=Dremio%20Documentation&_biz_n=554&rnd=356691&cdn_o=a&_biz_z=1777950606487)
