---
url: /reference/sql/sql-functions/functions/LENGTH
title: "LENGTH | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.498513875
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LENGTH

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# LENGTH
Returns the length of an input string. If the character encoding isn't specified, it assumes to UTF8.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### LENGTH([_expression_ varchar]) → int32[​](/reference/sql/sql-functions#lengthexpression-varchar--int32 "Direct link to lengthexpression-varchar--int32")
  * expression (optional): String expression to determine the length of.


**Examples**
LENGTH example

```
SELECT LENGTH('DREMIO')  
-- 6  

```

Was this page helpful?
[Previous LEFT](/reference/sql/sql-functions)[Next LEVENSHTEIN](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LEFT](/reference/sql/sql-functions)[Next LEVENSHTEIN](/reference/sql/sql-functions)
