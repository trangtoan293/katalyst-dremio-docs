---
url: /reference/sql/sql-functions/functions/ABS
title: "ABS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64272.07201725
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ABS

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# ABS
Computes the absolute value of a numeric expression.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ABS(_numeric_expression_ NUMERIC) → NUMERIC[​](/reference/sql/sql-functions#absnumeric_expression-numeric--numeric "Direct link to absnumeric_expression-numeric--numeric")
  * numeric_expression: BINARY, DECIMAL, DOUBLE, FLOAT, INTEGER


**Examples**
ABS example

```
SELECT ABS(0.0)  
-- 0.0  

```

ABS example

```
SELECT ABS(-2)  
-- 2  

```

ABS example

```
SELECT ABS(NULL)  
-- null  

```

Was this page helpful?
[Previous Window](/reference/sql/sql-functions)[Next ACOS](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Window](/reference/sql/sql-functions)[Next ACOS](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2FREGULAR_EXPRESSIONS%2F&_biz_t=1777950591643&_biz_i=Regular%20Expressions%20%7C%20Dremio%20Documentation&_biz_n=535&rnd=399860&cdn_o=a&_biz_z=1777950591684)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FABS%2F&_biz_t=1777950591683&_biz_i=ABS%20%7C%20Dremio%20Documentation&_biz_n=536&rnd=355669&cdn_o=a&_biz_z=1777950591684)
