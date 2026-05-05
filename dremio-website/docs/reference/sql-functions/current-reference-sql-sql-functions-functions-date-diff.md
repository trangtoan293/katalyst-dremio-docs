---
url: /reference/sql/sql-functions/functions/DATE_DIFF
title: "DATE_DIFF | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64310.729097458
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * DATE_DIFF

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# DATE_DIFF
Returns the difference between two expressions of time as another expression of time.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### DATE_DIFF(_date_expression_ DATE, _days_ INTEGER) → DATE[​](/reference/sql/sql-functions#date_diffdate_expression-date-days-integer--date "Direct link to date_diffdate_expression-date-days-integer--date")
  * date_expression: The date, in the format 'YYY-MM-DD', to subtract days from. The value can be either a database column in DATE format, or literal value explicitly converted to DATE.
  * days: A 32-bit integer of the number of days to be subtracted from the specified date.


**Examples**
Subtracts five days from the specified date.

```
SELECT DATE_DIFF(DATE '2022-01-01', 5)  
-- 2021-12-27  

```

Subtracts negative five days from the specified date.

```
SELECT DATE_DIFF(DATE '2022-01-01', -5)  
-- 2022-01-06  

```

### DATE_DIFF(_date_expression_ DATE, _date_expression_ DATE) → INTERVAL DAY[​](/reference/sql/sql-functions#date_diffdate_expression-date-date_expression-date--interval-day "Direct link to date_diffdate_expression-date-date_expression-date--interval-day")
  * date_expression: The date, in the format 'YYY-MM-DD', to subtract the second date from. The value can be either a database column in DATE format, or literal value explicitly converted to DATE.
  * date_expression: The date, in the format 'YYY-MM-DD', to subtract from the first date. The value can be either a database column in DATE format, or literal value explicitly converted to DATE.


**Examples**
Subtracts the second date from the first date.

```
SELECT DATE_DIFF(DATE '2022-04-01', DATE '2022-01-01')  
-- +090 00:00:00.000  

```

Subtracts the second date from the first date.

```
SELECT DATE_DIFF(DATE '2022-01-01', DATE '2022-04-01')  
-- -090 00:00:00.000  

```

### DATE_DIFF(_timestamp_expression_ TIMESTAMP, _timestamp_expression_ TIMESTAMP) → INTERVAL DAY[​](/reference/sql/sql-functions#date_difftimestamp_expression-timestamp-timestamp_expression-timestamp--interval-day "Direct link to date_difftimestamp_expression-timestamp-timestamp_expression-timestamp--interval-day")
  * timestamp_expression: The timestamp, in the format 'YYYY-MM-DD HH:MM:SS', to subtract the second timestamp from. The value can be either a database column in TIMESTAMP format, or literal value explicitly converted to TIMESTAMP.
  * timestamp_expression: The timestamp, in the format 'YYYY-MM-DD HH:MM:SS', to subtract from the first timestamp. The value can be either a database column in TIMESTAMP format, or literal value explicitly converted to TIMESTAMP.


**Examples**
Subtracts the second timestamp from the first timestamp.

```
SELECT DATE_DIFF(TIMESTAMP '2022-04-01 12:35:23', TIMESTAMP '2022-01-01 01:00:00')  
-- +090 11:35:23.000  

```

Subtracts the second timestamp from the first timestamp.

```
SELECT DATE_DIFF(TIMESTAMP '2022-01-01 01:00:00', TIMESTAMP '2022-04-01 12:35:23')  
-- -090 11:35:23.000  

```

### DATE_DIFF(_time_expression_ TIME, _time_interval_ INTERVAL) → TIME[​](/reference/sql/sql-functions#date_difftime_expression-time-time_interval-interval--time "Direct link to date_difftime_expression-time-time_interval-interval--time")
  * time_expression: The time, in the format 'HH:MM:SS', from which to subtract a number of seconds, minutes, or hours. The value can be either a database column in TIME format, or literal value explicitly converted to TIME.
  * time_interval: A CAST of a number to one of these intervals: SECOND, MINUTE, HOUR.


**Examples**
Subtracts 30 seconds from the specified time.

```
SELECT DATE_DIFF(TIME '12:00:00', CAST(30 AS INTERVAL SECOND))  
-- 11:59:30  

```

Subtracts 30 minutes from the specified time.

```
SELECT DATE_DIFF(TIME '12:00:00', CAST(30 AS INTERVAL MINUTE))  
-- 11:30:00  

```

### DATE_DIFF(_date_expression_ DATE, _time_interval_ INTERVAL) → TIMESTAMP[​](/reference/sql/sql-functions#date_diffdate_expression-date-time_interval-interval--timestamp "Direct link to date_diffdate_expression-date-time_interval-interval--timestamp")
  * date_expression: The date, in the format 'YYYY-MM-DD', from which to subtract a number of days, months, or years. The value can be either a database column in DATE format, or literal value explicitly converted to DATE.
  * time_interval: A CAST of a number to one of these intervals: DAY, MONTH, YEAR.


**Examples**
Subtracts 30 days from the specified date.

```
SELECT DATE_DIFF(DATE '2022-01-01', CAST(30 AS INTERVAL DAY))  
-- 2021-12-02 00:00:00  

```

Subtracts 30 months from the specified date.

```
SELECT DATE_DIFF(DATE '2022-01-01', CAST(30 AS INTERVAL MONTH))  
-- 2019-07-01 00:00:00  

```

### DATE_DIFF(_timestamp_expression_ TIMESTAMP, _days_ INTEGER) → TIMESTAMP[​](/reference/sql/sql-functions#date_difftimestamp_expression-timestamp-days-integer--timestamp "Direct link to date_difftimestamp_expression-timestamp-days-integer--timestamp")
  * timestamp_expression: The timestamp, in the format 'YYYY-MM-DD HH:MM:SS', to subtract days from. The value can be either a database column in TIMESTAMP format, or literal value explicitly converted to TIMESTAMP.
  * days: A 32-bit integer of the number of days to be subtracted from the specified timestamp.


**Examples**
Subtracts five days from the specified timestamp.

```
SELECT DATE_DIFF(TIMESTAMP '2022-01-01 12:35:23', 5)  
-- 2021-12-27 12:35:23  

```

Subtracts negative five days from the specified timestamp.

```
SELECT DATE_DIFF(TIMESTAMP '2022-01-01 12:35:23', -5)  
-- 2022-01-06 12:35:23  

```

### DATE_DIFF(_timestamp_expression_ TIMESTAMP, _time_interval_ INTERVAL) → TIMESTAMP[​](/reference/sql/sql-functions#date_difftimestamp_expression-timestamp-time_interval-interval--timestamp "Direct link to date_difftimestamp_expression-timestamp-time_interval-interval--timestamp")
  * timestamp_expression: The timestamp, in the format 'YYYY-MM-DD HH:MM:SS', from which to subtract a number of seconds, minutes, hours, days, months, or years. The value can be either a database column in TIMESTAMP format, or literal value explicitly converted to TIMESTAMP.
  * time_interval: A CAST of a number to one of these intervals: SECOND, MINUTE, HOUR, DAY, MONTH, YEAR.


**Examples**
Subtracts 30 seconds from the specified timestamp.

```
SELECT DATE_DIFF(TIMESTAMP '2022-01-01 01:00:00.000', CAST(30 AS INTERVAL SECOND))  
-- 2022-01-01 00:59:30  

```

Subtracts 30 minutes from the specified timestamp.

```
SELECT DATE_DIFF(TIMESTAMP '2022-01-01 01:00:00.000', CAST(30 AS INTERVAL MINUTE))  
-- 2022-01-01 00:30:00  

```

Was this page helpful?
[Previous DATE_ADD](/reference/sql/sql-functions)[Next DATE_PART](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DATE_ADD](/reference/sql/sql-functions)[Next DATE_PART](/reference/sql/sql-functions)
