---
url: /reference/sql/sql-functions/functions/ARRAY_CONTAINS
title: "ARRAY_CONTAINS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64279.712345833
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_CONTAINS

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_CONTAINS
Returns whether a list contains a given value.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ARRAY_CONTAINS(_list_ LIST, _value_ any) → boolean[​](/reference/sql/sql-functions#array_containslist-list-value-any--boolean "Direct link to array_containslist-list-value-any--boolean")
  * list: The list to search.
  * value: An expression of a type that is comparable with the LIST.


**Examples**
ARRAY_CONTAINS example

```
SELECT ARRAY_CONTAINS(CONVERT_FROM('["apple", "pear", "banana"]', 'json'), NULL)  
-- null  

```

ARRAY_CONTAINS example

```
SELECT ARRAY_CONTAINS(CONVERT_FROM('["apple", "pear", "banana"]', 'json'), 'pear')  
-- true  

```

ARRAY_CONTAINS example

```
SELECT ARRAY_CONTAINS(CONVERT_FROM('["apple", "pear", "banana"]', 'json'), 'grape')  
-- false  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
If _value_ is `NULL`, the result is `NULL`. If `NULL` is in _list_ and _value_ is not in _list_ , the result is `NULL`. If _value_ is present in the _list_ , the result is `TRUE`. Otherwise, the result is `FALSE`.
Was this page helpful?
[Previous ARRAY_COMPACT](/reference/sql/sql-functions)[Next ARRAY_DISTINCT](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_COMPACT](/reference/sql/sql-functions)[Next ARRAY_DISTINCT](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAY_CONTAINS%2F&_biz_t=1777950599120&_biz_i=ARRAY_CONTAINS%20%7C%20Dremio%20Documentation&_biz_n=546&rnd=28036&cdn_o=a&_biz_z=1777950599120)
