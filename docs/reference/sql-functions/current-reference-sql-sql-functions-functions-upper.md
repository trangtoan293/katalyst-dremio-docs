---
url: /reference/sql/sql-functions/functions/UPPER
slug: /reference/sql/sql-functions/functions/UPPER
title: "UPPER | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.84118925
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * UPPER

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# UPPER
Returns the input expression with all the characters converted to uppercase.
## Syntax
### UPPER(_expression_ varchar) → varchar[​](/reference/sql/sql-functions)
  * expression: String to convert to uppercase.


**Examples**
UPPER example

```
SELECT UPPER('a guide to data lakehouses')  
-- A GUIDE TO DATA LAKEHOUSES  

```

UPPER example

```
SELECT DayOfWeek, UCASE(DayOfWeek)   
  FROM Samples."samples.dremio.com"."SF_incidents2016.json"   
  LIMIT 3  
-- DayOfWeek, EXPR$1  
-- Friday, FRIDAY  
-- Friday, FRIDAY  
-- Monday, MONDAY  

```

## Usage Notes[​](/reference/sql/sql-functions)
`UPPER` is a synonym for [`UCASE`](/reference/sql/sql-functions).
Was this page helpful?
[Previous UNIX_TIMESTAMP](/reference/sql/sql-functions)[Next USER](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous UNIX_TIMESTAMP](/reference/sql/sql-functions)[Next USER](/reference/sql/sql-functions)
!
