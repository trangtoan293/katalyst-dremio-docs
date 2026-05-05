---
url: /reference/sql/sql-functions/functions/YEAR
slug: /reference/sql/sql-functions/functions/YEAR
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
## Syntax
### EXTRACT(YEAR FROM _date_timestamp_expression_ string) → bigint[​](/reference/sql/sql-functions)
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

## Usage Notes[​](/reference/sql/sql-functions)
This function uses the [`EXTRACT`](/reference/sql/sql-functions) function. When using the [`CAST`](/reference/sql/sql-functions) function, timestamps containing milliseconds are not allowed.
Was this page helpful?
[Previous XOR](/reference/sql/sql-functions)[Next Reserved Words](/reference/sql/reserved-keywords)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous XOR](/reference/sql/sql-functions)[Next Reserved Words](/reference/sql/reserved-keywords)
