---
url: /reference/sql/sql-functions/functions/LEVENSHTEIN
title: "LEVENSHTEIN | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.531892791
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LEVENSHTEIN

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# LEVENSHTEIN
Computes the Levenshtein distance between two input expressions.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### LEVENSHTEIN(_expression1_ varchar, _expression2_ varchar) → int[​](/reference/sql/sql-functions#levenshteinexpression1-varchar-expression2-varchar--int "Direct link to levenshteinexpression1-varchar-expression2-varchar--int")
  * expression1: The first string expression.
  * expression2: The second string expression.


**Examples**
LEVENSHTEIN example

```
SELECT LEVENSHTEIN('dremio', 'iceberg')  
-- 6  

```

Was this page helpful?
[Previous LENGTH](/reference/sql/sql-functions)[Next LIKE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LENGTH](/reference/sql/sql-functions)[Next LIKE](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FLEVENSHTEIN%2F&_biz_t=1777950645339&_biz_i=LEVENSHTEIN%20%7C%20Dremio%20Documentation&_biz_n=627&rnd=264846&cdn_o=a&_biz_z=1777950645340)
