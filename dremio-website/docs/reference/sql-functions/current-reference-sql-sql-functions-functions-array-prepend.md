---
url: /reference/sql/sql-functions/functions/ARRAY_PREPEND
title: "ARRAY_PREPEND | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64286.764990833
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_PREPEND

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_PREPEND
Prepends an element to the beginning of an array.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ARRAY_PREPEND(_element_ ANY, _array_ LIST) → LIST[​](/reference/sql/sql-functions#array_prependelement-any-array-list--list "Direct link to array_prependelement-any-array-list--list")
  * element: The element to prepend to the array.
  * array: The array to prepend to.


**Examples**
ARRAY_PREPEND example

```
SELECT ARRAY_PREPEND(1, ARRAY[2, 3]);  
-- [1, 2, 3]  

```

Was this page helpful?
[Previous ARRAY_POSITION](/reference/sql/sql-functions)[Next ARRAY_REMOVE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_POSITION](/reference/sql/sql-functions)[Next ARRAY_REMOVE](/reference/sql/sql-functions)
