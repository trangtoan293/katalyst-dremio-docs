---
url: /reference/sql/sql-functions/functions/LN
title: "LN | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64330.715989333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LN

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# LN
Returns the natural logarithm of the numeric expression.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### LN(_numeric_expression_ double) → float8[​](/reference/sql/sql-functions#lnnumeric_expression-double--float8 "Direct link to lnnumeric_expression-double--float8")
  * numeric_expression: A number greater than `0`.


**Examples**
LN example

```
SELECT LN(0), LN(.1525), LN(1), LN(5.35), LN(5269853105789632584), LN(-1)  
-- null, -1.8805906829346708, 0.0, 1.6770965609079151, 43.10853416239341, null  

```

Was this page helpful?
[Previous LIST_FILES](/reference/sql/sql-functions)[Next LOCALTIME](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LIST_FILES](/reference/sql/sql-functions)[Next LOCALTIME](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FLN%2F&_biz_t=1777950649737&_biz_i=LN%20%7C%20Dremio%20Documentation&_biz_n=629&rnd=12923&cdn_o=a&_biz_z=1777950649737)
