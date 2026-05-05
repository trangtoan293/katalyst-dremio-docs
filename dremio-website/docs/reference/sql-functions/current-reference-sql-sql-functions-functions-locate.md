---
url: /reference/sql/sql-functions/functions/LOCATE
title: "LOCATE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64330.857145916
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LOCATE

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# LOCATE
Searches for the first occurrence of the first argument in the second argument and if found, returns the position of the first argument in the second argument. The first character in a string is position 1. Returns 0 if the substring isn't found in the expression.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### LOCATE(_substring_ varchar, _expression_ varchar [, _start_ int32]) → int32[​](/reference/sql/sql-functions#locatesubstring-varchar-expression-varchar--start-int32--int32 "Direct link to locatesubstring-varchar-expression-varchar--start-int32--int32")
  * substring: Substring to search for in the expression.
  * expression: The input expression to search.
  * start (optional): Position to start the search from.


**Examples**
LOCATE example

```
SELECT LOCATE('no','banana')  
-- 0  

```

LOCATE example

```
SELECT LOCATE('an','banana')  
-- 2  

```

LOCATE example

```
SELECT LOCATE('an','banana', 3)  
-- 4  

```

Was this page helpful?
[Previous LOCALTIMESTAMP](/reference/sql/sql-functions)[Next LOG](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LOCALTIMESTAMP](/reference/sql/sql-functions)[Next LOG](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FLOG%2F&_biz_t=1777950650259&_biz_i=LOG%20%7C%20Dremio%20Documentation&_biz_n=630&rnd=261327&cdn_o=a&_biz_z=1777950650262)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FLOCATE%2F&_biz_t=1777950650262&_biz_i=LOCATE%20%7C%20Dremio%20Documentation&_biz_n=631&rnd=881843&cdn_o=a&_biz_z=1777950650263)
