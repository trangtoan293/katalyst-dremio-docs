---
url: /reference/sql/sql-functions/functions/CHR
title: "CHR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.90831375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CHR

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# CHR
Converts a Unicode code point into the character that matches the input Unicode character. If an invalid code point is specified, an empty string is returned.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### CHR(_integer_expression_ int32) → varchar[​](/reference/sql/sql-functions#chrinteger_expression-int32--varchar "Direct link to chrinteger_expression-int32--varchar")
  * integer_expression: Unicode code point to convert to character.


**Examples**
CHR example

```
SELECT CHR(72)  
-- H  

```

CHR example

```
SELECT CHR(33)  
-- null  

```

Was this page helpful?
[Previous CHAR_LENGTH](/reference/sql/sql-functions)[Next COALESCE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CHAR_LENGTH](/reference/sql/sql-functions)[Next COALESCE](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCHR%2F&_biz_t=1777950614775&_biz_i=CHR%20%7C%20Dremio%20Documentation&_biz_n=577&rnd=587993&cdn_o=a&_biz_z=1777950614776)
