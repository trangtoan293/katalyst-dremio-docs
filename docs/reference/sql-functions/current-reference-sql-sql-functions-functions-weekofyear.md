---
url: /reference/sql/sql-functions/functions/WEEKOFYEAR
slug: /reference/sql/sql-functions/functions/WEEKOFYEAR
title: "WEEKOFYEAR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64371.966143666
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * WEEKOFYEAR

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# WEEKOFYEAR
Returns the week of year of the date or timestamp.
## Syntax
### WEEKOFYEAR(_date_timestamp_expression_ string) → bigint[​](/reference/sql/sql-functions)
  * date_timestamp_expression: A `DATE` or `TIMESTAMP` expression.


**Examples**
WEEKOFYEAR example

```
SELECT WEEKOFYEAR('2003-02-01 11:43:22')  
-- 5  

```

WEEKOFYEAR example

```
SELECT "Date", WEEKOFYEAR("Date")   
FROM Samples."samples.dremio.com"."SF_incidents2016.json"   
LIMIT 3  
-- Date, EXPR$1  
-- 2016-01-29, 4  
-- 2016-01-29, 4  
-- 2016-04-25, 17  

```

Was this page helpful?
[Previous WEEK](/reference/sql/sql-functions)[Next XOR](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous WEEK](/reference/sql/sql-functions)[Next XOR](/reference/sql/sql-functions)
