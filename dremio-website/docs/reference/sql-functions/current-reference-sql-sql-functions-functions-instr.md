---
url: /reference/sql/sql-functions/functions/INSTR
title: "INSTR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64317.340920208
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * INSTR

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# INSTR
Returns the position of the first occurrence of a string when it is contained in another string. If no such occurrence is found, a zero is returned. The comparison is case-sensitive.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### INSTR(_expression1_ string, _expression2_ string) → int[​](/reference/sql/sql-functions#instrexpression1-string-expression2-string--int "Direct link to instrexpression1-string-expression2-string--int")
  * expression1: The input expression to search.
  * expression2: The string to search for in the specified expression.


**Examples**
INSTR example

```
SELECT INSTR('Dremio', 'D')  
-- 1  

```

INSTR example

```
SELECT INSTR('Dremio', 'd')  
-- 0  

```

Was this page helpful?
[Previous INITCAP](/reference/sql/sql-functions)[Next ISDATE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous INITCAP](/reference/sql/sql-functions)[Next ISDATE](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FINSTR%2F&_biz_t=1777950637579&_biz_i=INSTR%20%7C%20Dremio%20Documentation&_biz_n=608&rnd=842546&cdn_o=a&_biz_z=1777950637579)
