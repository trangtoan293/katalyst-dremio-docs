---
url: /reference/sql/sql-functions/functions/REGEXP_MATCHES
title: "REGEXP_MATCHES | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64344.974428666
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * REGEXP_MATCHES

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions), [Regular Expressions](/reference/sql/sql-functions)
# REGEXP_MATCHES
Returns whether a string matches a regular expression.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### REGEXP_MATCHES(_input_ string, _regex_ string) → boolean[​](/reference/sql/sql-functions#regexp_matchesinput-string-regex-string--boolean "Direct link to regexp_matchesinput-string-regex-string--boolean")
  * input: The string to test.
  * regex: The Perl-compatible regular expression (PCRE) to use for the test. Must be a literal.


**Examples**
REGEXP_MATCHES example

```
SELECT REGEXP_MATCHES('the data lakehouse', '.*?\Qlake\E.*?')  
-- True  

```

REGEXP_MATCHES example

```
SELECT Category, REGEXP_MATCHES(Category, '.*?\Q-\E.*?')   
FROM Samples."samples.dremio.com"."SF_incidents2016.json"   
LIMIT 5  
-- Category, EXPR$1  
-- WEAPON LAWS, false  
-- WEAPON LAWS, false  
-- WARRANTS, false  
-- NON-CRIMINAL, true  
-- NON-CRIMINAL, true  

```

REGEXP_MATCHES example

```
SELECT s_manager   
FROM Samples."samples.dremio.com"."tpcds_sf1000".store   
WHERE REGEXP_MATCHES(s_manager, '.*?\Qoo\E.*?')   
GROUP BY s_manager  
-- Brian Cooke  
-- Richard Brooks  
-- William Moody  
-- Tony Cook  
-- Joseph Crook  
-- Ricky Cooper  
-- Tom Brooks  
-- Barry Booker  
-- Alfred Norwood  
-- Grady Moore  
-- Theo Wood  
-- Walter Hood  
-- Vince Moore  
-- Robert Moore  
-- Cedric Cooper  
-- Hugh Wood  
-- Jorge Dooley  
-- David Wood  
-- Joseph Moore  
-- Kim Bloom  
-- Mario Cook  
-- Peter Woodward  
-- Jason Goode  
-- Nolan Wood  
-- William Coons  
-- Patrick Smoot  
-- John Moody  
-- Jerry Brooks  
-- Jeffery Good  
-- Dominique Cook  
-- Ray Moore  
-- Brandon Moore  
-- Luis Wood  
  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
This function is identical to the function [`REGEXP_LIKE`](/reference/sql/sql-functions).
Was this page helpful?
[Previous REGEXP_LIKE](/reference/sql/sql-functions)[Next REGEXP_REPLACE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous REGEXP_LIKE](/reference/sql/sql-functions)[Next REGEXP_REPLACE](/reference/sql/sql-functions)
