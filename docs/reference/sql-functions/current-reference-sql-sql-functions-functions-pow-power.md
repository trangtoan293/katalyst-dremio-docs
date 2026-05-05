---
url: /reference/sql/sql-functions/functions/POW__POWER
title: "POW__POWER | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64344.462339041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * POW__POWER

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# POW, POWER
Returns the result of raising the input value to the specified power.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### POW(_numeric_expression_ double, _power_ double) → float8[​](/reference/sql/sql-functions#pownumeric_expression-double-power-double--float8 "Direct link to pownumeric_expression-double-power-double--float8")
  * numeric_expression: The input expression.
  * power: The power to raise the numeric_expression to.


**Examples**
POW example

```
SELECT POW(5, 2)  
-- 25.0  

```

POW example

```
SELECT POW(0.1, 2)  
-- 0.010000000000000002  

```

POW example

```
SELECT POW(-2, 2)  
-- 4.0  

```

POW example

```
SELECT POW(10, -2)  
-- 0.01  

```

### POWER(_numeric_expression_ double, _power_ double) → float8[​](/reference/sql/sql-functions#powernumeric_expression-double-power-double--float8 "Direct link to powernumeric_expression-double-power-double--float8")
  * numeric_expression: The input expression.
  * power: The power to raise the numeric_expression to.


**Examples**
POWER example

```
SELECT POWER(5, 2)  
-- 25.0  

```

POWER example

```
SELECT POWER(0.1, 2)  
-- 0.010000000000000002  

```

POWER example

```
SELECT POWER(-2, 2)  
-- 4.0  

```

POWER example

```
SELECT POWER(10, -2)  
-- 0.01  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
This function returns a float even if the parameters are both integers.
Was this page helpful?
[Previous POSITION](/reference/sql/sql-functions)[Next QUARTER](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous POSITION](/reference/sql/sql-functions)[Next QUARTER](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FPOW__POWER%2F&_biz_t=1777950664067&_biz_i=POW__POWER%20%7C%20Dremio%20Documentation&_biz_n=661&rnd=373347&cdn_o=a&_biz_z=1777950664067)
