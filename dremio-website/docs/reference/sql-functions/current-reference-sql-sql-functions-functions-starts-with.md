---
url: /reference/sql/sql-functions/functions/STARTS_WITH
title: "STARTS_WITH | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64357.365887583
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * STARTS_WITH

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# STARTS_WITH
Returns whether a string starts with another string. The comparison is case-sensitive.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### STARTS_WITH(_expression1_ string, _expression2_ string) → bit[​](/reference/sql/sql-functions#starts_withexpression1-string-expression2-string--bit "Direct link to starts_withexpression1-string-expression2-string--bit")
  * expression1: The input expression to search.
  * expression2: The string to search for in the specified expression.


**Examples**
STARTS_WITH example

```
SELECT IncidntNum, Category, Descript FROM  "Samples"."samples.dremio.com"."SF_incidents2016.json"  
  WHERE STARTS_WITH(Category, 'OTHER')  
  LIMIT 2  
-- IncidntNum, Category, Descript  
-- 160003130, OTHER OFFENSES, PAROLE VIOLATION  
-- 160073014, OTHER OFFENSES, RESISTING ARREST  

```

Was this page helpful?
[Previous SQRT](/reference/sql/sql-functions)[Next STDDEV](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SQRT](/reference/sql/sql-functions)[Next STDDEV](/reference/sql/sql-functions)
