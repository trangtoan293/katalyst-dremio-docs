---
url: /reference/sql/sql-functions/functions/EXTRACT
slug: /reference/sql/sql-functions/functions/EXTRACT
title: "EXTRACT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64311.032763041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * EXTRACT

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# EXTRACT
Extracts the specified time unit from the specified date, time, or timestamp.
## Syntax
### EXTRACT(_time_unit_ KEYWORD, _date_time_expression_ DATE, TIME, TIMESTAMP) → INTEGER[​](/reference/sql/sql-functions)
  * time_unit: The time unit to extract from the date, time, or timestamp. Valid values are EPOCH, YEAR, MONTH, DAY, HOUR, MINUTE, or SECOND.
  * date_time_expression: The date, time, or timestamp from which to extract the specified time unit.


**Examples**
EXTRACT example

```
SELECT EXTRACT(HOUR FROM CAST('05:33:44' AS TIME))  
-- 5  

```

EXTRACT example

```
SELECT EXTRACT(MONTH FROM CAST('2021-03-22 05:33:44.2' AS TIMESTAMP))  
-- 3  

```

EXTRACT example

```
SELECT EXTRACT(SECOND FROM CAST('2021-03-22 05:33:44.2' AS TIMESTAMP))  
-- 44  

```

EXTRACT example

```
SELECT EXTRACT(YEAR FROM CAST('2021-03-22' AS DATE))  
-- 2021  

```

EXTRACT example

```
SELECT EXTRACT(EPOCH FROM CAST('2021-03-22 05:33:44.2' AS TIMESTAMP))  
-- 1616391224  

```

EXTRACT example

```
SELECT EXTRACT(EPOCH FROM CAST('2021-03-22' AS DATE))  
-- 1616371200  

```

Was this page helpful?
[Previous EXP](/reference/sql/sql-functions)[Next FACTORIAL](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous EXP](/reference/sql/sql-functions)[Next FACTORIAL](/reference/sql/sql-functions)
!
