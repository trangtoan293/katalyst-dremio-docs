---
url: /reference/sql/sql-functions/functions/BTRIM
title: "BTRIM | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.790139708
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * BTRIM

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# BTRIM
Trims leading and trailing characters from a string.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### BTRIM(_expression_ string [, _trim_text_ string]) → string[​](/reference/sql/sql-functions#btrimexpression-string--trim_text-string--string "Direct link to btrimexpression-string--trim_text-string--string")
  * expression: String expression to be trimmed.
  * trim_text (optional): Leading and trailing characters to trim from the input expression. If this parameter is not specified, then spaces will be trimmed from the input expression.


**Examples**
BTRIM example

```
SELECT BTRIM('      dremio ')  
-- dremio  

```

BTRIM example

```
SELECT BTRIM('~/~/~/dremio~', '~')  
-- /~/~/dremio  

```

BTRIM example

```
SELECT BTRIM('---dremio-', '-')  
-- dremio  

```

BTRIM example

```
SELECT BTRIM('stringvalue', 'string')  
-- value  

```

BTRIM example

```
SELECT BTRIM('pancake pan', 'abnp')  
-- cake  

```

Was this page helpful?
[Previous BROUND](/reference/sql/sql-functions)[Next CARDINALITY](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous BROUND](/reference/sql/sql-functions)[Next CARDINALITY](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FBTRIM%2F&_biz_t=1777950614088&_biz_i=Dremio%20Documentation&_biz_n=566&rnd=259712&cdn_o=a&_biz_z=1777950614088)
