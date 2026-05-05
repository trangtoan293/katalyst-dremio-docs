---
url: /reference/sql/sql-functions/functions/QUARTER
title: "QUARTER | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64344.761473958
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * QUARTER

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# QUARTER
Extracts the quarter number (from 1 to 4) for a given date or timestamp.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### EXTRACT(QUARTER FROM _date_timestamp_expression_ string) → bigint[​](/reference/sql/sql-functions#extractquarter-from-date_timestamp_expression-string--bigint "Direct link to extractquarter-from-date_timestamp_expression-string--bigint")
  * date_timestamp_expression: A `DATE` or `TIMESTAMP` expression.


**Examples**
QUARTER example using a timestamp

```
SELECT EXTRACT(QUARTER FROM TIMESTAMP '2019-08-12 01:00:00.123456')  
-- 3  

```

QUARTER example using a date

```
SELECT EXTRACT(QUARTER FROM DATE '2019-08-12')  
-- 3  

```

QUARTER example using the CAST function

```
SELECT EXTRACT(QUARTER FROM CAST('2019-08-12 01:00:00' AS TIMESTAMP))  
-- 3  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
This function uses the [`EXTRACT`](/reference/sql/sql-functions) function. When using the [`CAST`](/reference/sql/sql-functions) function, timestamps containing milliseconds are not allowed.
Was this page helpful?
[Previous POW__POWER](/reference/sql/sql-functions)[Next QUERY_USER](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous POW__POWER](/reference/sql/sql-functions)[Next QUERY_USER](/reference/sql/sql-functions)
