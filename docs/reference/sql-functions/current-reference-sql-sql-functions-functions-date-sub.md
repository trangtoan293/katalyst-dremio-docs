---
url: /reference/sql/sql-functions/functions/DATE_SUB
slug: /reference/sql/sql-functions/functions/DATE_SUB
title: "DATE_SUB | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64310.595061291
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * DATE_SUB

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# DATE_SUB
Returns the difference of two expressions of time as another expression of time.
## Syntax
### DATE_SUB(_date_expression_ STRING, _days_ INTEGER) → DATE[​](/reference/sql/sql-functions)
  * date_expression: A string-formatted date in the format 'YYYY-MM-DD'.
  * days: The number of days to be subtracted from the specified date.


**Examples**
Subtracts two days from the specified date.

```
SELECT DATE_SUB('2022-01-01', 2)  
-- 2021-12-30  

```

Subtracts negative two days from the specified date.

```
SELECT DATE_SUB('2022-01-01', -2)  
-- 2022-01-03  

```

### DATE_SUB(_date_expression_ DATE, _days_ INTEGER) → DATE[​](/reference/sql/sql-functions)
  * date_expression: The date, in the format 'YYY-MM-DD', to subtract days from. The value can be either a database column in DATE format, or literal value explicitly converted to DATE.
  * days: A 32-bit integer of the number of days to be subtracted from the specified date.


**Examples**
Subtracts 30 days from the specified date.

```
SELECT DATE_SUB(DATE '2022-01-01', 30)  
-- 2021-12-02  

```

Subtracts negative 30 days from the specified date.

```
SELECT DATE_SUB(DATE '2022-01-01', -30)  
-- 2022-01-31  

```

### DATE_SUB(_date_expression_ STRING, _time_interval_ INTERVAL) → TIMESTAMP[​](/reference/sql/sql-functions)
  * date_expression: A string-formatted date in the format 'YYYY-MM-DD'.
  * time_interval: A CAST of a number to one of these intervals: DAY, MONTH, YEAR.


**Examples**
Subtracts two days from the specified date.

```
SELECT DATE_SUB('2022-01-01', CAST(2 AS INTERVAL DAY))  
-- 2021-12-30 00:00:00.000  

```

Subtracts negative two days from the specified date.

```
SELECT DATE_SUB('2022-01-01', CAST(-2 AS INTERVAL DAY))  
-- 2022-01-03 00:00:00.000  

```

### DATE_SUB(_date_expression_ DATE, _time_interval_ INTERVAL) → TIMESTAMP[​](/reference/sql/sql-functions)
  * date_expression: The date, in the format 'YYY-MM-DD', to subtract the time interval from. The value can be either a database column in DATE format, or literal value explicitly converted to DATE.
  * time_interval: A CAST of a number to one of these intervals: DAY, MONTH, YEAR.


**Examples**
DATE_SUB example

```
SELECT DATE_SUB(DATE '2022-01-01', CAST(30 AS INTERVAL DAY))  
-- 2021-12-02 00:00:00.000  

```

### DATE_SUB(_timestamp_expression_ STRING, _time_interval_ INTERVAL) → TIMESTAMP[​](/reference/sql/sql-functions)
  * timestamp_expression: A string-formatted timestamp in the format 'YYYY-MM-DD HH24:MI:SS'.
  * time_interval: A CAST of a number to one of these intervals: SECOND, MINUTE, HOUR, DAY, MONTH, YEAR.


**Examples**
Subtracts 30 days from the specified timestamp. Note that the time information is lost.

```
SELECT DATE_SUB('2022-01-01 12:00:00', CAST(30 AS INTERVAL DAY))  
-- 2021-12-02 00:00:00.000  

```

Subtracts negative 30 days from the specified timestamp. Note that the time information is lost.

```
SELECT DATE_SUB('2022-01-01 12:00:00', CAST(-30 AS INTERVAL DAY))  
-- 2022-01-31 00:00:00.000  

```

### DATE_SUB(_timestamp_expression_ TIMESTAMP, _time_interval_ INTERVAL) → TIMESTAMP[​](/reference/sql/sql-functions)
  * timestamp_expression: The timestamp, in the format 'YYYY-MM-DD HH:MM:SS', to subtract days from. The value can be either a database column in TIMESTAMP format, or literal value explicitly converted to TIMESTAMP.
  * time_interval: A CAST of a number to one of these intervals: SECOND, MINUTE, HOUR, DAY, MONTH, YEAR.


**Examples**
Subtracts 30 days from the specified timestamp.

```
SELECT DATE_SUB(TIMESTAMP '2022-01-01 12:00:00', CAST(30 AS INTERVAL DAY))  
-- 2021-12-02 12:00:00.000  

```

Subtracts negative 30 days from the specified timestamp.

```
SELECT DATE_SUB(TIMESTAMP '2022-01-01 12:00:00', CAST(-30 AS INTERVAL DAY))  
-- 2022-01-31 12:00:00.000  

```

### DATE_SUB(_time_expression_ TIME, _time_interval_ INTERVAL) → TIME[​](/reference/sql/sql-functions)
  * time_expression: The time, in the format 'HH:MM:SS', to subtract the time interval from. The value can be either a database column in TIMESTAMP format, or literal value explicitly converted to TIMESTAMP.
  * time_interval: A CAST of a number to one of these intervals: SECOND, MINUTE, HOUR.


**Examples**
Subtracts 30 minutes from the specified time.

```
SELECT DATE_SUB(TIME '00:00:00', CAST(30 AS INTERVAL MINUTE))  
-- 23:30:00.000  

```

Subtracts negative 30 minutes from the specified time.

```
SELECT DATE_SUB(TIME '00:00:00', CAST(-30 AS INTERVAL MINUTE))  
-- 00:30:00.000  

```

Was this page helpful?
[Previous DATE_PART](/reference/sql/sql-functions)[Next DATE_TRUNC](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DATE_PART](/reference/sql/sql-functions)[Next DATE_TRUNC](/reference/sql/sql-functions)
