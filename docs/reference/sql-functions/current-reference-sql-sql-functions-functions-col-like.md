---
url: /reference/sql/sql-functions/functions/COL_LIKE
title: "COL_LIKE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64295.035876125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * COL_LIKE

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# COL_LIKE
Tests whether an expression column matches a pattern column. Comparisons are case-sensitive.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### COL_LIKE(_expression_col_ varchar, _pattern_col_ varchar) → boolean[​](/reference/sql/sql-functions#col_likeexpression_col-varchar-pattern_col-varchar--boolean "Direct link to col_likeexpression_col-varchar-pattern_col-varchar--boolean")
  * expression_col: A column containing an expression to compare.
  * pattern_col: A column containing the pattern to compare to the expression.


**Examples**
COL_LIKE example

```
create table <catalog-name>.names (name varchar, pat varchar)  
as values ('john', '%oh%'), ('jacob', '%aco%'), ('bill', '%ob%');  
  
select name from <catalog-name>.names where col_like (name, pat);  
  
-- john  
-- jacob  
  

```

Was this page helpful?
[Previous COALESCE](/reference/sql/sql-functions)[Next CONCAT](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous COALESCE](/reference/sql/sql-functions)[Next CONCAT](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCOL_LIKE%2F&_biz_t=1777950614717&_biz_i=COL_LIKE%20%7C%20Dremio%20Documentation&_biz_n=576&rnd=274846&cdn_o=a&_biz_z=1777950614717)
