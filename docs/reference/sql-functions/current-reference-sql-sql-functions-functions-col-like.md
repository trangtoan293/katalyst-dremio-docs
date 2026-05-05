---
url: /reference/sql/sql-functions/functions/COL_LIKE
slug: /reference/sql/sql-functions/functions/COL_LIKE
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
## Syntax
### COL_LIKE(_expression_col_ varchar, _pattern_col_ varchar) → boolean[​](/reference/sql/sql-functions)
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
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous COALESCE](/reference/sql/sql-functions)[Next CONCAT](/reference/sql/sql-functions)
!
