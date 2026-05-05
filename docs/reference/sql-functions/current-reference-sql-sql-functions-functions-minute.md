---
url: /reference/sql/sql-functions/functions/MINUTE
slug: /reference/sql/sql-functions/functions/MINUTE
title: "MINUTE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64337.636512416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * MINUTE

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# MINUTE
Extracts the minute number (from 0 to 59) for a given time or timestamp.
## Syntax
### EXTRACT(MINUTE FROM _date_timestamp_expression_ string) → bigint[​](/reference/sql/sql-functions)
  * timestamp_expression: A `TIME`, `TIMESTAMP`, or `DATE` expression.


**Examples**
MINUTE example using a timestamp

```
SELECT EXTRACT(MINUTE FROM TIMESTAMP '2019-08-12 01:10:30.123456')  
-- 10  

```

MINUTE example using a time

```
SELECT EXTRACT(MINUTE FROM TIME '01:10:30.123456')  
-- 10  

```

MINUTE example using the CAST function

```
SELECT EXTRACT(MINUTE FROM CAST('2019-08-12 01:10:30' AS TIMESTAMP))  
-- 10  

```

## Usage Notes[​](/reference/sql/sql-functions)
This function uses the [`EXTRACT`](/reference/sql/sql-functions) function. When using the [`CAST`](/reference/sql/sql-functions) function, timestamps containing milliseconds are not allowed.
Was this page helpful?
[Previous MINDIR](/reference/sql/sql-functions)[Next MOD](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MINDIR](/reference/sql/sql-functions)[Next MOD](/reference/sql/sql-functions)
