---
url: /reference/sql/sql-functions/functions/IS_SUBSTR
title: "IS_SUBSTR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64323.977286333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * IS_SUBSTR

Version: current [26.x]
On this page
**Categories** : [Boolean](/reference/sql/sql-functions), [Datatype](/reference/sql/sql-functions)
# IS_SUBSTR
Returns `true` if a string is contained within another string. The comparison is case-sensitive.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### IS_SUBSTR(_expression1_ string, _expression2_ string) → boolean[​](/reference/sql/sql-functions#is_substrexpression1-string-expression2-string--boolean "Direct link to is_substrexpression1-string-expression2-string--boolean")
  * expression1: The input expression to search.
  * expression2: The string to search for in the specified expression.


**Examples**
IS_SUBSTR example

```
SELECT IS_SUBSTR('dremio', 'emi')  
-- True  

```

IS_SUBSTR example

```
SELECT city, IS_SUBSTR(city, 'CUSHMAN') FROM  "Samples"."samples.dremio.com"."zips.json"  
LIMIT 3  
-- city, EXPR$1  
-- AGAWAM, false  
-- CUSHMAN, true  
-- BARRE, false  

```

Was this page helpful?
[Previous IS_MEMBER](/reference/sql/sql-functions)[Next IS_UTF8](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous IS_MEMBER](/reference/sql/sql-functions)[Next IS_UTF8](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FIS_SUBSTR%2F&_biz_t=1777950642909&_biz_i=IS_SUBSTR%20%7C%20Dremio%20Documentation&_biz_n=614&rnd=176004&cdn_o=a&_biz_z=1777950642910)
