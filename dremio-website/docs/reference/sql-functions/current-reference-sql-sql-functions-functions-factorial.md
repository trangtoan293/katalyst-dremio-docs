---
url: /reference/sql/sql-functions/functions/FACTORIAL
title: "FACTORIAL | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64310.6944555
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * FACTORIAL

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# FACTORIAL
Computes the factorial of the numeric expression. The input expression must be an integer from `0` to `20`.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### FACTORIAL(_expression_ integer) → bigint[​](/reference/sql/sql-functions#factorialexpression-integer--bigint "Direct link to factorialexpression-integer--bigint")
  * expression: An integer expression from `0` and `20`.


**Examples**
FACTORIAL example

```
SELECT FACTORIAL(0), FACTORIAL(1), FACTORIAL(5), FACTORIAL(20)  
-- 1, 1, 120, 2432902008176640000  

```

Was this page helpful?
[Previous EXTRACT](/reference/sql/sql-functions)[Next FIRST_VALUE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous EXTRACT](/reference/sql/sql-functions)[Next FIRST_VALUE](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FFACTORIAL%2F&_biz_t=1777950631970&_biz_i=Dremio%20Documentation&_biz_n=601&rnd=83682&cdn_o=a&_biz_z=1777950631970)
