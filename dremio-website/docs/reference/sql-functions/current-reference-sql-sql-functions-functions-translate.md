---
url: /reference/sql/sql-functions/functions/TRANSLATE
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### TRANSLATE(_base_expression_ varchar, _source_characters_ varchar, _target_characters_ varchar) → varchar[​](/reference/sql/sql-functions#translatebase_expression-varchar-source_characters-varchar-target_characters-varchar--varchar "Direct link to translatebase_expression-varchar-source_characters-varchar-target_characters-varchar--varchar")
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TRANSACTION_TIMESTAMP](/reference/sql/sql-functions)[Next TRIM](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FTRANSLATE%2F&_biz_t=1777950685422&_biz_i=TRANSLATE%20%7C%20Dremio%20Documentation&_biz_n=708&rnd=644815&cdn_o=a&_biz_z=1777950685422)
