---
url: /reference/sql/sql-functions/functions/LTRIM
title: "LTRIM | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64331.093058
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LTRIM

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# LTRIM
Removes leading spaces or characters from a string.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### LTRIM(_expression_ varchar, _trim_expression_ varchar) → varchar[​](/reference/sql/sql-functions#ltrimexpression-varchar-trim_expression-varchar--varchar "Direct link to ltrimexpression-varchar-trim_expression-varchar--varchar")
  * expression: The expression to be trimmed.
  * trim_expression: Leading characters to trim. If this parameter is not specified, then spaces will be trimmed from the input expression.


**Examples**
LTRIM example

```
SELECT LTRIM('   dremio')  
-- dremio  

```

LTRIM example

```
SELECT LTRIM('xxDremioxxx', 'x')  
-- Dremioxxx  

```

LTRIM example

```
SELECT LTRIM('pancake', 'panc')  
-- ke  

```

Was this page helpful?
[Previous LSHIFT](/reference/sql/sql-functions)[Next MAP_KEYS](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LSHIFT](/reference/sql/sql-functions)[Next MAP_KEYS](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FLTRIM%2F&_biz_t=1777950651620&_biz_i=LTRIM%20%7C%20Dremio%20Documentation&_biz_n=642&rnd=12180&cdn_o=a&_biz_z=1777950651620)
