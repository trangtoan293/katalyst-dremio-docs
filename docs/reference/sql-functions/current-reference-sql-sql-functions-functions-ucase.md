---
url: /reference/sql/sql-functions/functions/UCASE
slug: /reference/sql/sql-functions/functions/UCASE
title: "UCASE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.970663625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * UCASE

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# UCASE
Returns the input expression with all the characters converted to uppercase.
## Syntax
### UCASE(_expression_ varchar) → varchar[​](/reference/sql/sql-functions)
  * expression: String to convert to uppercase.


**Examples**
UCASE example

```
SELECT UCASE('a guide to data lakehouses')  
-- A GUIDE TO DATA LAKEHOUSES  

```

UCASE example

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
`UCASE` is a synonym for [`UPPER`](/reference/sql/sql-functions).
Was this page helpful?
[Previous TYPEOF](/reference/sql/sql-functions)[Next UNBASE64](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TYPEOF](/reference/sql/sql-functions)[Next UNBASE64](/reference/sql/sql-functions)
!!
