---
url: /reference/sql/sql-functions/functions/BITWISE_NOT
title: "BITWISE_NOT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64287.28001575
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * BITWISE_NOT

Version: current [26.x]
On this page
**Categories** : [Bitwise](/reference/sql/sql-functions)
# BITWISE_NOT
Returns the bitwise NOT of the given operand.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### BITWISE_NOT(_op1_ NUMERIC) → NUMERIC[​](/reference/sql/sql-functions#bitwise_notop1-numeric--numeric "Direct link to bitwise_notop1-numeric--numeric")
  * op1: Value to invert.


**Examples**
BITWISE_NOT example

```
SELECT BITWISE_NOT(0)  
-- -1  

```

BITWISE_NOT example

```
SELECT BITWISE_NOT(9223372036854775807)  
-- -9223372036854775808  

```

Was this page helpful?
[Previous BITWISE_AND](/reference/sql/sql-functions)[Next BITWISE_OR](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous BITWISE_AND](/reference/sql/sql-functions)[Next BITWISE_OR](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FBITWISE_NOT%2F&_biz_t=1777950607254&_biz_i=BITWISE_NOT%20%7C%20Dremio%20Documentation&_biz_n=560&rnd=81138&cdn_o=a&_biz_z=1777950607254)
