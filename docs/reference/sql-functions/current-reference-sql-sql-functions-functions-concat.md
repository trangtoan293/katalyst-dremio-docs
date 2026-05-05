---
url: /reference/sql/sql-functions/functions/CONCAT
title: "CONCAT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.843767041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CONCAT

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# CONCAT
Concatenates two or more strings. `NULL` values are ignored.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### CONCAT(_expression1_ string [, _expression2_ string] [, _expressionN_ string]) → string[​](/reference/sql/sql-functions#concatexpression1-string--expression2-string--expressionn-string--string "Direct link to concatexpression1-string--expression2-string--expressionn-string--string")
  * expression1: First string expression.
  * expression2 (optional): Second string expression.
  * expressionN (optional): Nth string expression.


**Examples**
CONCAT example

```
SELECT CONCAT('CON', 'CAT')  
-- CONCAT  

```

CONCAT example

```
SELECT CONCAT('con', 'cat', NULL)  
-- concat  

```

Was this page helpful?
[Previous COL_LIKE](/reference/sql/sql-functions)[Next CONCAT_WS](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous COL_LIKE](/reference/sql/sql-functions)[Next CONCAT_WS](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCONCAT%2F&_biz_t=1777950614967&_biz_i=CONCAT%20%7C%20Dremio%20Documentation&_biz_n=578&rnd=583733&cdn_o=a&_biz_z=1777950614968)
