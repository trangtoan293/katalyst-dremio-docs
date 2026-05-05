---
url: /reference/sql/sql-functions/functions/RTRIM
title: "RTRIM | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64351.878497083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * RTRIM

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# RTRIM
Removes trailing spaces or characters from a string.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### RTRIM(_expression_ varchar [, _trim_expression_ varchar]) → varchar[​](/reference/sql/sql-functions#rtrimexpression-varchar--trim_expression-varchar--varchar "Direct link to rtrimexpression-varchar--trim_expression-varchar--varchar")
  * expression: The expression to be trimmed.
  * trim_expression (optional): Trailing characters to trim. If this parameter is not specified, then spaces will be trimmed from the input expression.


**Examples**
RTRIM example

```
SELECT RTRIM('dremio   ')  
-- dremio  

```

RTRIM example

```
SELECT RTRIM('xxxDremioxx', 'x')  
-- xxxDremio  

```

RTRIM example

```
SELECT RTRIM('pancake', 'ekac')  
-- pan  

```

Was this page helpful?
[Previous RSHIFT](/reference/sql/sql-functions)[Next SECOND](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous RSHIFT](/reference/sql/sql-functions)[Next SECOND](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FRTRIM%2F&_biz_t=1777950671607&_biz_i=RTRIM%20%7C%20Dremio%20Documentation&_biz_n=672&rnd=642555&cdn_o=a&_biz_z=1777950671607)
