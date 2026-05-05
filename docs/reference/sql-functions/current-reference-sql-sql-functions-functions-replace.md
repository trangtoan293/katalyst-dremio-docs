---
url: /reference/sql/sql-functions/functions/REPLACE
title: "REPLACE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64345.008861416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * REPLACE

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# REPLACE
Removes all occurrences of a specified substring and replaces them with another string.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### REPLACE(_string_expression_ varchar, _pattern_ varchar, _replacement_ varchar) → varchar[​](/reference/sql/sql-functions#replacestring_expression-varchar-pattern-varchar-replacement-varchar--varchar "Direct link to replacestring_expression-varchar-pattern-varchar-replacement-varchar--varchar")
  * string_expression: String expression in which to do the replacements.
  * pattern: The substring you want replaced in the string_expression.
  * replacement: The string to replace the occurrences of the pattern substring with.


**Examples**
REPLACE example

```
SELECT REPLACE('THE CATATONIC CAT', 'CAT', 'DOG')  
-- THE DOGATONIC DOG  

```

Was this page helpful?
[Previous REPEATSTR](/reference/sql/sql-functions)[Next REVERSE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous REPEATSTR](/reference/sql/sql-functions)[Next REVERSE](/reference/sql/sql-functions)
