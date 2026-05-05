---
url: /reference/sql/sql-functions/functions/TANH
title: "TANH | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.944673458
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TANH

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# TANH
Computes the hyperbolic tangent of the input expression.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### TANH(_numeric_expression_ double) → double[​](/reference/sql/sql-functions#tanhnumeric_expression-double--double "Direct link to tanhnumeric_expression-double--double")
  * numeric_expression: Input expression to calculate tanh for.


**Examples**
TANH example

```
SELECT TANH(1.5);  
-- 0.9051482536448664  

```

### TANH(_numeric_expression_ int64) → double[​](/reference/sql/sql-functions#tanhnumeric_expression-int64--double "Direct link to tanhnumeric_expression-int64--double")
  * numeric_expression: Input expression to calculate tanh for.


**Examples**
TANH example

```
SELECT TANH(1);  
-- 0.7615941559557649  

```

### TANH(_numeric_expression_ float) → double[​](/reference/sql/sql-functions#tanhnumeric_expression-float--double "Direct link to tanhnumeric_expression-float--double")
  * numeric_expression: Input expression to calculate tanh for.


**Examples**
TANH example

```
SELECT TANH(1.5);  
-- 0.9051482536448664  

```

### TANH(_numeric_expression_ int32) → double[​](/reference/sql/sql-functions#tanhnumeric_expression-int32--double "Direct link to tanhnumeric_expression-int32--double")
  * numeric_expression: Input expression to calculate tanh for.


**Examples**
TANH example

```
SELECT TANH(1);  
-- 0.7615941559557649  

```

Was this page helpful?
[Previous TAN](/reference/sql/sql-functions)[Next TIMESTAMPADD](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TAN](/reference/sql/sql-functions)[Next TIMESTAMPADD](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FTANH%2F&_biz_t=1777950679377&_biz_i=TANH%20%7C%20Dremio%20Documentation&_biz_n=695&rnd=930235&cdn_o=a&_biz_z=1777950679377)
