---
url: /reference/sql/sql-functions/functions/FLATTEN
title: "FLATTEN | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64316.611485958
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * FLATTEN

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# FLATTEN
Explodes compound values into multiple rows. The FLATTEN function takes a `LIST` column and produces a lateral view (that is, an inline view that contains correlation referring to other tables that precede it in the FROM clause).
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### FLATTEN(_expression_ list) → list[​](/reference/sql/sql-functions#flattenexpression-list--list "Direct link to flattenexpression-list--list")
  * expression: The expression that will be unpacked into rows. The expression must be of data type `LIST`.


**Examples**
FLATTEN example

```
SELECT FLATTEN(CONVERT_FROM ('["Ford", "BMW", "Fiat"]', 'json'))  
-- Ford  
-- BMW  
-- Fiat  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
The FLATTEN function eliminates rows from the result set if the target column contains an empty array or is null.  
  
If the target column is an array of standard datatypes such as INT or VARCHAR, you can use the UNION operator to cast NULL as that datatype and include all rows in the result set. For example:  
  
SELECT col1, FLATTEN(col2) FROM myTable  
UNION  
SELECT col1, CAST(NULL as INT) FROM myTable where col2[0] is NULL or col2 is NULL  
  
The UNION operator does not work if the target column is an array of structs or other complex types because UNION cannot cast NULL as a struct.  
  
FLATTEN is not supported for empty lists.  
  
If the query fails, you may need to run a `SELECT` statement with `CONVERT_FROM` first to check the schema and ensure the target column is a `LIST`.
Was this page helpful?
[Previous FIRST_VALUE](/reference/sql/sql-functions)[Next FLOOR](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous FIRST_VALUE](/reference/sql/sql-functions)[Next FLOOR](/reference/sql/sql-functions)
