---
url: /reference/sql/sql-functions/functions/ARRAY_REMOVE
title: "ARRAY_REMOVE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64286.742543166
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_REMOVE

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_REMOVE
Removes all elements that equal a given value from a list.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ARRAY_REMOVE(_list_column_ LIST, _value_ any) → list[​](/reference/sql/sql-functions#array_removelist_column-list-value-any--list "Direct link to array_removelist_column-list-value-any--list")
  * list_column: Column that contains a LIST expression. Cannot be an array literal.
  * value: An expression of any data type.


**Examples**
array_col contains ARRAY[1, 2, 3]

```
SELECT ARRAY_REMOVE(array_col, 1)  
-- [2, 3]  

```

array_col contains ARRAY[1,2,null]

```
SELECT ARRAY_REMOVE(array_col, 2)  
-- [1,null]  

```

array_col contains ARRAY[1,2,null]

```
SELECT ARRAY_REMOVE(array_col, null)  
-- NULL  

```

array_col contains ARRAY[null]

```
SELECT ARRAY_REMOVE(array_col, 2)  
-- NULL  

```

ARRAY_REMOVE example

```
SELECT ARRAY_REMOVE(null, 2)  
-- NULL  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
If the list is NULL, this function returns NULL. If the value is NULL, this function returns NULL.
Was this page helpful?
[Previous ARRAY_PREPEND](/reference/sql/sql-functions)[Next ARRAY_REMOVE_AT](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_PREPEND](/reference/sql/sql-functions)[Next ARRAY_REMOVE_AT](/reference/sql/sql-functions)
