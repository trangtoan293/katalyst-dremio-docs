---
url: /reference/sql/sql-functions/functions/DAY
title: "DAY | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64310.157812291
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * DAY

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# DAY
Returns the day of month of the date or timestamp.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### DAY(_date_timestamp_expression_ string) → bigint[​](/reference/sql/sql-functions#daydate_timestamp_expression-string--bigint "Direct link to daydate_timestamp_expression-string--bigint")
  * date_timestamp_expression: A `DATE` or `TIMESTAMP` expression.


**Examples**
DAY example

```
SELECT "DAY"('2003-02-01 11:43:22')  
-- 1  

```

DAY example

```
SELECT "Date", "DAY"("Date")   
FROM Samples."samples.dremio.com"."SF_incidents2016.json"   
LIMIT 3  
-- Date, EXPR$1  
-- 2016-01-29, 29  
-- 2016-01-29, 29  
-- 2016-04-25, 25  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
The function name is a Dremio keyword and must be enclosed in double quotes (`"DAY"`). This function is identical to the function [`DAYOFMONTH`](/reference/sql/sql-functions).
Was this page helpful?
[Previous DATE_TRUNC](/reference/sql/sql-functions)[Next DAYOFMONTH](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DATE_TRUNC](/reference/sql/sql-functions)[Next DAYOFMONTH](/reference/sql/sql-functions)
