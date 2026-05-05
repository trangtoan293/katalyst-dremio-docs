---
url: /reference/sql/sql-functions/functions/ARRAY_MIN
title: "ARRAY_MIN | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64286.448524208
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_MIN

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions), [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_MIN
Returns the minimum value of a list.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ARRAY_MIN(_list_column_ LIST) → numeric[​](/reference/sql/sql-functions#array_minlist_column-list--numeric "Direct link to array_minlist_column-list--numeric")
  * list_column: Column that contains a LIST expression. Every element of the list must be a number such as INT, BIGINT, FLOAT4, FLOAT8, or DECIMAL. Cannot be an array literal.


**Examples**
array_col contains ARRAY[1, 2, 3]

```
SELECT ARRAY_MIN(array_col)  
-- 1  

```

array_col contains ARRAY[1,2,null]

```
SELECT ARRAY_MIN(array_col)  
-- NULL  

```

array_col contains ARRAY[null]

```
SELECT ARRAY_MIN(array_col)  
-- NULL  

```

array_col contains null

```
SELECT ARRAY_MIN(array_col)  
-- NULL  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
The return type is T given an input `ARRAY`T``. If the parameter is NULL, this function returns NULL. If the list contains NULL, this function returns NULL. If the list is empty, this function returns NULL.
Was this page helpful?
[Previous ARRAY_MAX](/reference/sql/sql-functions)[Next ARRAY_POSITION](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_MAX](/reference/sql/sql-functions)[Next ARRAY_POSITION](/reference/sql/sql-functions)
