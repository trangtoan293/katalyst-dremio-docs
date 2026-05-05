---
url: /reference/sql/sql-functions/functions/ENDS_WITH
title: "ENDS_WITH | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64310.895913708
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ENDS_WITH

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# ENDS_WITH
Returns whether a string ends with another string. The comparison is case-sensitive.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ENDS_WITH(_expression1_ string, _expression2_ string) → bit[​](/reference/sql/sql-functions#ends_withexpression1-string-expression2-string--bit "Direct link to ends_withexpression1-string-expression2-string--bit")
  * expression1: The input expression to search.
  * expression2: The string to search for in the specified expression.


**Examples**
ENDS_WITH example

```
SELECT IncidntNum, Category, Descript FROM  "Samples"."samples.dremio.com"."SF_incidents2016.json"  
  WHERE ENDS_WITH(Category, 'LAWS')  
  LIMIT 2  
-- IncidntNum, Category, Descript  
-- 120058272, WEAPON LAWS, POSS OF PROHIBITED WEAPON  
-- 120058272, WEAPON LAWS, FIREARM, LOADED, IN VEHICLE  

```

Was this page helpful?
[Previous ENCRYPT](/reference/sql/sql-functions)[Next EXP](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ENCRYPT](/reference/sql/sql-functions)[Next EXP](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FENDS_WITH%2F&_biz_t=1777950630156&_biz_i=ENDS_WITH%20%7C%20Dremio%20Documentation&_biz_n=596&rnd=674125&cdn_o=a&_biz_z=1777950630156)
