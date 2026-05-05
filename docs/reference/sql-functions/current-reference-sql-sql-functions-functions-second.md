---
url: /reference/sql/sql-functions/functions/SECOND
slug: /reference/sql/sql-functions/functions/SECOND
title: "SECOND | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64351.705509416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SECOND

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# SECOND
Extracts the second number (from 0 to 59) for a given date or timestamp.
## Syntax
### EXTRACT(SECOND FROM _date_timestamp_expression_ string) → bigint[​](/reference/sql/sql-functions)
  * timestamp_expression: A `TIME`, `TIMESTAMP`, or `DATE` expression.


**Examples**
SECOND example using a timestamp

```
SELECT EXTRACT(SECOND FROM TIMESTAMP '2019-08-12 01:10:30.123456')  
-- 1  

```

SECOND example using a time

```
SELECT EXTRACT(SECOND FROM TIME '01:10:30.123456')  
-- 1  

```

SECOND example using the CAST function

```
SELECT EXTRACT(SECOND FROM CAST('2019-08-12 01:10:30' AS TIMESTAMP))  
-- 1  

```

## Usage Notes[​](/reference/sql/sql-functions)
This function uses the [`EXTRACT`](/reference/sql/sql-functions) function. When using the [`CAST`](/reference/sql/sql-functions) function, timestamps containing milliseconds are not allowed.
Was this page helpful?
[Previous RTRIM](/reference/sql/sql-functions)[Next SESSION_USER](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous RTRIM](/reference/sql/sql-functions)[Next SESSION_USER](/reference/sql/sql-functions)
!
