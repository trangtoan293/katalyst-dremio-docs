---
url: /reference/sql/sql-functions/functions/ARRAY_CONTAINS
slug: /reference/sql/sql-functions/functions/ARRAY_CONTAINS
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
## Syntax
### ARRAY_CONTAINS(_list_ LIST, _value_ any) → boolean[​](/reference/sql/sql-functions)
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

## Usage Notes[​](/reference/sql/sql-functions)
If _value_ is `NULL`, the result is `NULL`. If `NULL` is in _list_ and _value_ is not in _list_ , the result is `NULL`. If _value_ is present in the _list_ , the result is `TRUE`. Otherwise, the result is `FALSE`.
Was this page helpful?
[Previous ARRAY_COMPACT](/reference/sql/sql-functions)[Next ARRAY_DISTINCT](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_COMPACT](/reference/sql/sql-functions)[Next ARRAY_DISTINCT](/reference/sql/sql-functions)
!
