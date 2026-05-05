---
url: /reference/sql/sql-functions/functions/ARRAY_AVG
slug: /reference/sql/sql-functions/functions/ARRAY_AVG
title: "ARRAY_AVG | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64279.945868208
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_AVG

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions), [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_AVG
Returns the average of all non-null elements of a list.
## Syntax
### ARRAY_AVG(_list_column_ LIST) → numeric[​](/reference/sql/sql-functions)
  * list_column: Column that contains a LIST expression. Every element of the list must be a number such as INT, BIGINT, FLOAT4, FLOAT8, or DECIMAL. Cannot be an array literal.


**Examples**
array_col contains ARRAY[1, 2, 3]

```
SELECT ARRAY_AVG(array_col)  
-- 2  

```

array_col contains ARRAY[2,4,null]

```
SELECT ARRAY_AVG(array_col)  
-- 3  

```

array_col contains ARRAY[]

```
SELECT ARRAY_AVG(array_col)  
-- NULL  

```

array_col contains ARRAY[null]

```
SELECT ARRAY_AVG(array_col)  
-- NULL  

```

array_col contains null

```
SELECT ARRAY_AVG(array_col)  
-- NULL  

```

## Usage Notes[​](/reference/sql/sql-functions)
The return type is T given an input `ARRAY`T``. If the parameter is NULL, this function returns NULL. If there are no non-null elements in the parameter, this function returns 0.
Was this page helpful?
[Previous ARRAY_APPEND](/reference/sql/sql-functions)[Next ARRAY_CAT](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_APPEND](/reference/sql/sql-functions)[Next ARRAY_CAT](/reference/sql/sql-functions)
!
