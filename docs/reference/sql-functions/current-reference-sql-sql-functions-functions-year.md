---
url: /reference/sql/sql-functions/functions/YEAR
title: "YEAR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64371.929814583
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * YEAR

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# YEAR
Extracts the year for a given date or timestamp.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### EXTRACT(YEAR FROM _date_timestamp_expression_ string) → bigint[​](/reference/sql/sql-functions#extractyear-from-date_timestamp_expression-string--bigint "Direct link to extractyear-from-date_timestamp_expression-string--bigint")
  * date_timestamp_expression: A `DATE` or `TIMESTAMP` expression.


**Examples**
YEAR example using a timestamp

```
SELECT EXTRACT(YEAR FROM TIMESTAMP '2019-08-12 01:00:00.123456')  
-- 2019  

```

YEAR example using a date

```
SELECT EXTRACT(YEAR FROM DATE '2019-08-12')  
-- 2019  

```

YEAR example using the CAST function

```
SELECT EXTRACT(YEAR FROM CAST('2019-08-12 01:00:00' AS TIMESTAMP))  
-- 2019  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
This function uses the [`EXTRACT`](/reference/sql/sql-functions) function. When using the [`CAST`](/reference/sql/sql-functions) function, timestamps containing milliseconds are not allowed.
Was this page helpful?
[Previous XOR](/reference/sql/sql-functions)[Next Reserved Words](/reference/sql/reserved-keywords)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous XOR](/reference/sql/sql-functions)[Next Reserved Words](/reference/sql/reserved-keywords)
