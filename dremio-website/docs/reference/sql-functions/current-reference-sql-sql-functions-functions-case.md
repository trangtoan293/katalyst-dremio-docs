---
url: /reference/sql/sql-functions/functions/CASE
title: "CASE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.876654333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CASE

Version: current [26.x]
On this page
**Categories** : [Conditional](/reference/sql/sql-functions)
# CASE
Evaluates a list of conditions and returns the first resulting true expression. If a true expression is not found, will return the `ELSE` statement, if present, or else will return `NULL`.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### CASE expression WHEN condition THEN result [ ...n ] [ ELSE result ] END → same as input type[​](/reference/sql/sql-functions#case-expression-when-condition-then-result--n---else-result--end--same-as-input-type "Direct link to CASE expression WHEN condition THEN result \[ ...n \] \[ ELSE result \] END → same as input type")
  * expression: A valid SQL expression, typically, a column name.
  * condition: A boolean expression. If `condition` is true, then return `result`.
  * result: A valid SQL expression.


**Examples**
CASE example

```
SELECT  
CASE categories  
     WHEN 'Restaurants' THEN 'food'  
     WHEN 'Hotels' THEN 'travel'  
     ELSE 'no result'  
END  
FROM table-name  
-- food  

```

### CASE WHEN condition THEN result [ ...n ] [ ELSE result ] END → same as input type[​](/reference/sql/sql-functions#case-when-condition-then-result--n---else-result--end--same-as-input-type "Direct link to CASE WHEN condition THEN result \[ ...n \] \[ ELSE result \] END → same as input type")
  * condition: A boolean expression. If `expression=condition` is true, then return `result`.
  * result: A valid SQL expression.


**Examples**
CASE example

```
SELECT  
CASE  
     WHEN categories='Restaurants' THEN 'food'  
     WHEN categories='Hotels' THEN 'travel'  
     ELSE 'no result'  
END  
FROM table-name  
-- food  

```

Was this page helpful?
[Previous CARDINALITY](/reference/sql/sql-functions)[Next CAST](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CARDINALITY](/reference/sql/sql-functions)[Next CAST](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FBOOL_OR%2F&_biz_t=1777950614089&_biz_i=BOOL_OR%20%7C%20Dremio%20Documentation&_biz_n=567&rnd=370325&cdn_o=a&_biz_z=1777950614163)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCARDINALITY%2F&_biz_t=1777950614119&_biz_i=Dremio%20Documentation&_biz_n=568&rnd=900143&cdn_o=a&_biz_z=1777950614163)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCAST%2F&_biz_t=1777950614151&_biz_i=CAST%20%7C%20Dremio%20Documentation&_biz_n=569&rnd=486023&cdn_o=a&_biz_z=1777950614163)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCASE%2F&_biz_t=1777950614163&_biz_i=Dremio%20Documentation&_biz_n=570&rnd=453040&cdn_o=a&_biz_z=1777950614163)
