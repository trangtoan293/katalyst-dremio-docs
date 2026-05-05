---
url: /reference/sql/sql-functions/functions/NULLIF
title: "NULLIF | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64337.976796583
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * NULLIF

Version: current [26.x]
On this page
**Categories** : [Conditional](/reference/sql/sql-functions)
# NULLIF
Compares two expressions. If the values in each expression are equal, returns `NULL` and, if they are not equal, returns the value of the first expression.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### NULLIF(expression1, expression2) → same as input type[​](/reference/sql/sql-functions#nullifexpression1-expression2--same-as-input-type "Direct link to NULLIF\(expression1, expression2\) → same as input type")
  * expression: The expressions can be any data type, however all the expressions contained in the argument must be of the same type.


**Examples**
NULLIF example

```
SELECT NULLIF(user_id, customer_id)  
-- user_id  

```

Was this page helpful?
[Previous NTILE](/reference/sql/sql-functions)[Next NVL](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous NTILE](/reference/sql/sql-functions)[Next NVL](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FNULLIF%2F&_biz_t=1777950658055&_biz_i=NULLIF%20%7C%20Dremio%20Documentation&_biz_n=652&rnd=882415&cdn_o=a&_biz_z=1777950658056)
