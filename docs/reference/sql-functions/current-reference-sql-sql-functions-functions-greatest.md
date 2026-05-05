---
url: /reference/sql/sql-functions/functions/GREATEST
title: "GREATEST | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64317.687767625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * GREATEST

Version: current [26.x]
On this page
**Categories** : [Conditional](/reference/sql/sql-functions)
# GREATEST
Returns the largest value from a list of expressions.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### GREATEST(expression) → same as input type[​](/reference/sql/sql-functions#greatestexpression--same-as-input-type "Direct link to GREATEST\(expression\) → same as input type")
  * expression: The arguments must include at least one expression. All the expressions should be of the same type or compatible types. Expressions must be of primitive data types.


**Examples**
GREATEST example

```
SELECT GREATEST(1, 5, 3, 8)  
-- 8  

```

Was this page helpful?
[Previous GEO_NEARBY](/reference/sql/sql-functions)[Next HASH](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous GEO_NEARBY](/reference/sql/sql-functions)[Next HASH](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FGREATEST%2F&_biz_t=1777950638023&_biz_i=GREATEST%20%7C%20Dremio%20Documentation&_biz_n=609&rnd=879137&cdn_o=a&_biz_z=1777950638023)
