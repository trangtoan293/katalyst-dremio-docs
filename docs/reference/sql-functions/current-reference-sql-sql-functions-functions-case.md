---
url: /reference/sql/sql-functions/functions/CASE
slug: /reference/sql/sql-functions/functions/CASE
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
## Syntax
### CASE expression WHEN condition THEN result [ ...n ] [ ELSE result ] END → same as input type[​](/reference/sql/sql-functions)
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

### CASE WHEN condition THEN result [ ...n ] [ ELSE result ] END → same as input type[​](/reference/sql/sql-functions)
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
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CARDINALITY](/reference/sql/sql-functions)[Next CAST](/reference/sql/sql-functions)
!!!!
