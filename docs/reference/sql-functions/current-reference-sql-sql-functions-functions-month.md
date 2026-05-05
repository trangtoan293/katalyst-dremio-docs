---
url: /reference/sql/sql-functions/functions/MONTH
slug: /reference/sql/sql-functions/functions/MONTH
title: "MONTH | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64338.073344125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * MONTH

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# MONTH
Extracts the month number (from 1 to 12) for a given date or timestamp.
## Syntax
### EXTRACT(MONTH FROM _date_timestamp_expression_ string) → bigint[​](/reference/sql/sql-functions)
  * date_timestamp_expression: A `DATE` or `TIMESTAMP` expression.


**Examples**
MONTH example using a timestamp

```
SELECT EXTRACT(MONTH FROM TIMESTAMP '2019-08-12 01:00:00.123456')  
-- 8  

```

MONTH example using a date

```
SELECT EXTRACT(MONTH FROM DATE '2019-08-12')  
-- 8  

```

MONTH example using the CAST function

```
SELECT EXTRACT(MONTH FROM CAST('2019-08-12 01:00:00' AS TIMESTAMP))  
-- 8  

```

## Usage Notes[​](/reference/sql/sql-functions)
This function uses the [`EXTRACT`](/reference/sql/sql-functions) function. When using the [`CAST`](/reference/sql/sql-functions) function, timestamps containing milliseconds are not allowed.
Was this page helpful?
[Previous MOD](/reference/sql/sql-functions)[Next MONTHS_BETWEEN](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MOD](/reference/sql/sql-functions)[Next MONTHS_BETWEEN](/reference/sql/sql-functions)
!
