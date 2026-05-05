---
url: /reference/sql/sql-functions/functions/ARRAY_SUM
title: "ARRAY_SUM | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64286.790551166
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_SUM

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions), [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_SUM
Returns the sum of all non-null elements of a list.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ARRAY_SUM(_list_column_ LIST) → numeric[​](/reference/sql/sql-functions#array_sumlist_column-list--numeric "Direct link to array_sumlist_column-list--numeric")
  * list_column: Column that contains a LIST expression. Every element of the list must be a number such as INT, BIGINT, FLOAT4, FLOAT8, or DECIMAL. Cannot be an array literal.


**Examples**
array_col contains ARRAY[1, 2, 3]

```
SELECT ARRAY_SUM(array_col)  
-- 6  

```

array_col contains ARRAY[1,2,null]

```
SELECT ARRAY_SUM(array_col)  
-- 3  

```

array_col contains ARRAY[]

```
SELECT ARRAY_SUM(array_col)  
-- 0  

```

array_col contains ARRAY[null]

```
SELECT ARRAY_SUM(array_col)  
-- 0  

```

array_col contains null

```
SELECT ARRAY_SUM(array_col)  
-- NULL  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
The return type is T given an input `ARRAY`T``. If the parameter is NULL, this function returns NULL. If there are no non-null elements in the parameter, this function returns 0.
Was this page helpful?
[Previous ARRAY_SLICE](/reference/sql/sql-functions)[Next ARRAY_TO_STRING](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_SLICE](/reference/sql/sql-functions)[Next ARRAY_TO_STRING](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAY_SUM%2F&_biz_t=1777950606127&_biz_i=ARRAY_SUM%20%7C%20Dremio%20Documentation&_biz_n=552&rnd=549133&cdn_o=a&_biz_z=1777950606127)
