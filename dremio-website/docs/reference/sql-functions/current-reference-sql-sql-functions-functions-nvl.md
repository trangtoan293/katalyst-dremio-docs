---
url: /reference/sql/sql-functions/functions/NVL
title: "NVL | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64338.382288458
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * NVL

Version: current [26.x]
On this page
**Categories** : [Conditional](/reference/sql/sql-functions)
# NVL
Returns the value of the first expression, if it is not `NULL`. Otherwise, returns the value of the second expression.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### NVL(expression1, expression2) → same as input type[​](/reference/sql/sql-functions#nvlexpression1-expression2--same-as-input-type "Direct link to NVL\(expression1, expression2\) → same as input type")
  * expression1: The expression can be any data type, however, both expressions contained in the argument must be of the same type.
  * expression2: The expression can be any data type, however, both expressions contained in the argument must be of the same type.


**Examples**
NVL example

```
SELECT NVL(NULL, 2)  
-- 2  

```

NVL example

```
SELECT NVL(5, 2)  
-- 5  

```

Was this page helpful?
[Previous NULLIF](/reference/sql/sql-functions)[Next OCTET_LENGTH](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous NULLIF](/reference/sql/sql-functions)[Next OCTET_LENGTH](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FNVL%2F&_biz_t=1777950658697&_biz_i=Dremio%20Documentation&_biz_n=656&rnd=631642&cdn_o=a&_biz_z=1777950658698)
