---
url: /reference/sql/sql-functions/functions/REGEXP_COL_LIKE
title: "REGEXP_COL_LIKE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64344.861983208
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * REGEXP_COL_LIKE

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions), [Regular Expressions](/reference/sql/sql-functions)
# REGEXP_COL_LIKE
Returns whether a string matches a regular expression in a column.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### REGEXP_COL_LIKE(_input_ string, _regex_ string) → boolean[​](/reference/sql/sql-functions#regexp_col_likeinput-string-regex-string--boolean "Direct link to regexp_col_likeinput-string-regex-string--boolean")
  * input: The string to test.
  * regex: The column containing the Perl-compatible regular expression (PCRE) to use for the test.


**Examples**
REGEXP_COL_LIKE example

```
SELECT Category, REGEXP_COL_LIKE('WARRANTS', Category)  
FROM Samples."samples.dremio.com"."SF_incidents2016.json"   
LIMIT 3  
-- Category, EXPR$1  
-- WEAPON LAWS, false  
-- WEAPON LAWS, false  
-- WARRANTS, true  

```

REGEXP_COL_LIKE example

```
SELECT Category, Descript, REGEXP_COL_LIKE(Descript, Category)  
FROM Samples."samples.dremio.com"."SF_incidents2016.json"   
LIMIT 3  
-- Category, Descript, EXPR$2  
-- WEAPON LAWS, POSS OF PROHIBITED WEAPON, false  
-- WEAPON LAWS, FIREARM, LOADED, IN VEHICLE, POSSESSION OR USE, false  
-- WARRANTS, WARRANT ARREST, false  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
If your regular expression is a literal, use [`REGEXP_LIKE`](/reference/sql/sql-functions).
Was this page helpful?
[Previous RANK](/reference/sql/sql-functions)[Next REGEXP_EXTRACT](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous RANK](/reference/sql/sql-functions)[Next REGEXP_EXTRACT](/reference/sql/sql-functions)
