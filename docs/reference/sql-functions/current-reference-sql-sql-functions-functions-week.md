---
url: /reference/sql/sql-functions/functions/WEEK
slug: /reference/sql/sql-functions/functions/WEEK
title: "WEEK | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64371.877909625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * WEEK

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# WEEK
Extracts the week number (from 0 to 53) for a given date or timestamp.
## Syntax
### EXTRACT(WEEK FROM _date_timestamp_expression_ string) → bigint[​](/reference/sql/sql-functions)
  * date_timestamp_expression: A `DATE` or `TIMESTAMP` expression.


**Examples**
WEEK example using a timestamp

```
SELECT EXTRACT(WEEK FROM TIMESTAMP '2019-08-12 01:00:00.123456')  
-- 33  

```

WEEK example using a date

```
SELECT EXTRACT(WEEK FROM DATE '2019-08-12')  
-- 33  

```

WEEK example using the CAST function

```
SELECT EXTRACT(WEEK FROM CAST('2019-08-12 01:00:00' AS TIMESTAMP))  
-- 33  

```

## Usage Notes[​](/reference/sql/sql-functions)
This function uses the [`EXTRACT`](/reference/sql/sql-functions) function. When using the [`CAST`](/reference/sql/sql-functions) function, timestamps containing milliseconds are not allowed.
Was this page helpful?
[Previous VAR_SAMP](/reference/sql/sql-functions)[Next WEEKOFYEAR](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous VAR_SAMP](/reference/sql/sql-functions)[Next WEEKOFYEAR](/reference/sql/sql-functions)
