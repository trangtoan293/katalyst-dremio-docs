---
url: /reference/sql/sql-functions/functions/TRANSLATE
slug: /reference/sql/sql-functions/functions/TRANSLATE
title: "TRANSLATE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.672976958
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TRANSLATE

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# TRANSLATE
Translates the base expression from the source characters/expression to the target characters/expression.
## Syntax
### TRANSLATE(_base_expression_ varchar, _source_characters_ varchar, _target_characters_ varchar) → varchar[​](/reference/sql/sql-functions)
  * base_expression: The string to translate.
  * source_characters: A string with all the characters in the base expression that need translating. Each character in this string will be replaced with the corresponding character from the target_characters expression or ommitted from the string if target_characters expression has less characters than the source_characters.
  * target_characters: A string containing all the characters to replace the original characters with.


**Examples**
TRANSLATE example

```
SELECT TRANSLATE('*a*bX*dYZ*','XYZ*','cef');  
-- abcdef  

```

Was this page helpful?
[Previous TRANSACTION_TIMESTAMP](/reference/sql/sql-functions)[Next TRIM](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TRANSACTION_TIMESTAMP](/reference/sql/sql-functions)[Next TRIM](/reference/sql/sql-functions)
!
