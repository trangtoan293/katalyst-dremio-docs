---
url: /reference/sql/sql-functions/functions/REGEXP_LIKE
title: "REGEXP_LIKE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64345.025449708
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * REGEXP_LIKE

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions), [Regular Expressions](/reference/sql/sql-functions)
# REGEXP_LIKE
Returns whether a string matches a regular expression.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### REGEXP_LIKE(_input_ string, _regex_ string) → boolean[​](/reference/sql/sql-functions#regexp_likeinput-string-regex-string--boolean "Direct link to regexp_likeinput-string-regex-string--boolean")
  * input: The string to test.
  * regex: The Perl-compatible regular expression (PCRE) to use for the test. Must be a literal.


**Examples**
REGEXP_LIKE example

```
SELECT REGEXP_LIKE('the data lakehouse', '.*?\Qlake\E.*?')  
-- True  

```

REGEXP_LIKE example

```
SELECT Category, REGEXP_LIKE(Category, '.*?\Q-\E.*?')   
FROM Samples."samples.dremio.com"."SF_incidents2016.json"   
LIMIT 5  
-- Category, EXPR$1  
-- WEAPON LAWS, false  
-- WEAPON LAWS, false  
-- WARRANTS, false  
-- NON-CRIMINAL, true  
-- NON-CRIMINAL, true  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
This function is identical to the function [`REGEXP_MATCHES`](/reference/sql/sql-functions).
Was this page helpful?
[Previous REGEXP_EXTRACT](/reference/sql/sql-functions)[Next REGEXP_MATCHES](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous REGEXP_EXTRACT](/reference/sql/sql-functions)[Next REGEXP_MATCHES](/reference/sql/sql-functions)
