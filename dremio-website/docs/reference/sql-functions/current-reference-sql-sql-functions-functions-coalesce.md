---
url: /reference/sql/sql-functions/functions/COALESCE
title: "COALESCE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64295.061432333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * COALESCE

Version: current [26.x]
On this page
**Categories** : [Conditional](/reference/sql/sql-functions)
# COALESCE
Evaluates the arguments in order and returns the value of the first expression that does not contain `NULL`.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### COALESCE(expression1, expression2, [ ..., expressionN ]) → same as input type[​](/reference/sql/sql-functions#coalesceexpression1-expression2---expressionn---same-as-input-type "Direct link to COALESCE\(expression1, expression2, \[ ..., expressionN \]\) → same as input type")
  * expression: A combination of symbols and operators that the database evaluates to obtain a single data value. Expressions can be a single constant, variable, column, or scalar function.


**Examples**
COALESCE example

```
SELECT COALESCE(address1, address2, city, state, zipCode)  
FROM customers  
-- 123 Main Street  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
All arguments in the `SELECT` statement must have the same data type. Requires a minimum of two arguments, but there is no set maximum limit.
Was this page helpful?
[Previous CHR](/reference/sql/sql-functions)[Next COL_LIKE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CHR](/reference/sql/sql-functions)[Next COL_LIKE](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCOALESCE%2F&_biz_t=1777950614579&_biz_i=COALESCE%20%7C%20Dremio%20Documentation&_biz_n=575&rnd=690811&cdn_o=a&_biz_z=1777950614579)
