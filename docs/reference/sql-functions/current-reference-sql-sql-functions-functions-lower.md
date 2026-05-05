---
url: /reference/sql/sql-functions/functions/LOWER
slug: /reference/sql/sql-functions/functions/LOWER
title: "LOWER | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64331.20892675
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LOWER

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# LOWER
Returns the input expression with all the characters converted to lowercase.
## Syntax
### LOWER(_expression_ varchar) → varchar[​](/reference/sql/sql-functions)
  * expression: String to convert to lowercase.


**Examples**
LOWER example

```
SELECT LOWER('A GUIDE to data Lakehouses')  
-- a guide to data lakehouses  

```

LOWER example

```
SELECT Category, LOWER(Category)   
  FROM Samples."samples.dremio.com"."SF_incidents2016.json"   
  LIMIT 3  
-- Category, EXPR$1  
-- WEAPON LAWS, weapon laws  
-- WEAPON LAWS, weapon laws  
-- WARRANTS, warrants  

```

## Usage Notes[​](/reference/sql/sql-functions)
`LOWER` is a synonym for [`LCASE`](/reference/sql/sql-functions).
Was this page helpful?
[Previous LOG10](/reference/sql/sql-functions)[Next LPAD](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LOG10](/reference/sql/sql-functions)[Next LPAD](/reference/sql/sql-functions)
!!
