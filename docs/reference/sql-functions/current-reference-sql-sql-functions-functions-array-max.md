---
url: /reference/sql/sql-functions/functions/ARRAY_MAX
slug: /reference/sql/sql-functions/functions/ARRAY_MAX
title: "ARRAY_MAX | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64286.038683125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_MAX

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions), [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_MAX
Returns the maximum value of a list.
## Syntax
### ARRAY_MAX(_list_column_ LIST) → numeric[​](/reference/sql/sql-functions)
  * list_column: Column that contains a LIST expression. Every element of the list must be a number such as INT, BIGINT, FLOAT4, FLOAT8, or DECIMAL. Cannot be an array literal.


**Examples**
array_col contains ARRAY[1, 2, 3]

```
SELECT ARRAY_MAX(array_col)  
-- 3  

```

array_col contains ARRAY[1,2,null]

```
SELECT ARRAY_MAX(array_col)  
-- NULL  

```

array_col contains ARRAY[null]

```
SELECT ARRAY_MAX(array_col)  
-- NULL  

```

array_col contains null

```
SELECT ARRAY_MAX(array_col)  
-- NULL  

```

## Usage Notes[​](/reference/sql/sql-functions)
The return type is T given an input `ARRAY`T``. If the parameter is NULL, this function returns NULL. If the list contains NULL, this function returns NULL. If the list is empty, this function returns NULL.
Was this page helpful?
[Previous ARRAY_INSERT](/reference/sql/sql-functions)[Next ARRAY_MIN](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_INSERT](/reference/sql/sql-functions)[Next ARRAY_MIN](/reference/sql/sql-functions)
