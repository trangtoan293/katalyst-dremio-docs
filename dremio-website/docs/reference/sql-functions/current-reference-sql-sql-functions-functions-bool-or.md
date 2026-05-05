---
url: /reference/sql/sql-functions/functions/BOOL_OR
title: "BOOL_OR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.733458833
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * BOOL_OR

Version: current [26.x]
On this page
**Categories** : [Conditional](/reference/sql/sql-functions)
# BOOL_OR
Computes the boolean OR of two boolean expressions. Returns TRUE if one or both expressions evaluate to TRUE. Returns FALSE if both expressions evaluate to FALSE.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### BOOL_OR(_bool_expression1_ boolean, _bool_expression2_ boolean) → boolean[​](/reference/sql/sql-functions#bool_orbool_expression1-boolean-bool_expression2-boolean--boolean "Direct link to bool_orbool_expression1-boolean-bool_expression2-boolean--boolean")
  * bool_expression1: Boolean input expression.
  * bool_expression2: Boolean input expression.


**Examples**
BOOL_OR example

```
SELECT BOOLEANOR(TRUE, FALSE)  
-- True  

```

Was this page helpful?
[Previous BOOL_AND](/reference/sql/sql-functions)[Next BROUND](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous BOOL_AND](/reference/sql/sql-functions)[Next BROUND](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FBOOL_OR%2F&_biz_t=1777950614089&_biz_i=BOOL_OR%20%7C%20Dremio%20Documentation&_biz_n=567&rnd=370325&cdn_o=a&_biz_z=1777950614089)
