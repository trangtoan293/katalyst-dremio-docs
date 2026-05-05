---
url: /reference/sql/sql-functions/functions/DATE_ADD
title: "DATE_ADD | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64310.077891083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * DATE_ADD

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# DATE_ADD
Returns the sum of two expressions of time as another expression of time.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### DATE_ADD(_date_expression_ string, _days_ integer) → date[​](/reference/sql/sql-functions#date_adddate_expression-string-days-integer--date "Direct link to date_adddate_expression-string-days-integer--date")
  * date_expression: A string-formatted date in the format 'YYYY-MM-DD'.
  * days: The number of days to be added to the specified date.


**Examples**
Adds two days to the specified date.

```
SELECT DATE_ADD('2022-01-01', 2)  
-- 2022-01-03  

```

Adds negative two days to the specified date.

```
SELECT DATE_ADD('2022-01-01', -2)  
-- 2021-12-30  

```

### DATE_ADD(_date_expression_ date, _days_ integer) → date[​](/reference/sql/sql-functions#date_adddate_expression-date-days-integer--date "Direct link to date_adddate_expression-date-days-integer--date")
  * date_expression: The date, in the format 'YYY-MM-DD', to add days to. The value can be either a database column in DATE format, or literal value explicitly converted to DATE.
  * days: A 32-bit integer of the number of days to be added to the specified date.


**Examples**
Adds 30 days to the specified date.

```
SELECT DATE_ADD(DATE '2022-01-01', 30)  
-- 2022-01-31  

```

Adds negative 30 days to the specified date.

```
SELECT DATE_ADD(DATE '2022-01-01', -30)  
-- 2021-12-02  

```

### DATE_ADD(_date_expression_ string, _time_interval_ interval) → timestamp[​](/reference/sql/sql-functions#date_adddate_expression-string-time_interval-interval--timestamp "Direct link to date_adddate_expression-string-time_interval-interval--timestamp")
  * date_expression: A string-formatted date in the format 'YYYY-MM-DD'.
  * time_interval: A CAST of a number to one of these intervals: DAY, MONTH, YEAR.


**Examples**
Adds two days to the specified date.

```
SELECT DATE_ADD('2022-01-01', CAST(2 AS INTERVAL DAY))  
-- 2022-01-03 00:00:00.000  

```

Adds negative two days to the specified date.

```
SELECT DATE_ADD('2022-01-01', CAST(-2 AS INTERVAL DAY))  
-- 2021-12-30 00:00:00.000  

```

### DATE_ADD(_date_expression_ date, _time_interval_ interval) → timestamp[​](/reference/sql/sql-functions#date_adddate_expression-date-time_interval-interval--timestamp "Direct link to date_adddate_expression-date-time_interval-interval--timestamp")
  * date_expression: The date, in the format 'YYY-MM-DD', to add the time interval to. The value can be either a database column in DATE format, or literal value explicitly converted to DATE.
  * time_interval: A CAST of a number to one of these intervals: DAY, MONTH, YEAR.


**Examples**
DATE_ADD example

```
SELECT DATE_ADD(DATE '2022-01-01', CAST(30 AS INTERVAL DAY))  
-- 2022-01-31 00:00:00.000  

```

### DATE_ADD(_timestamp_expression_ string, _time_interval_ interval) → timestamp[​](/reference/sql/sql-functions#date_addtimestamp_expression-string-time_interval-interval--timestamp "Direct link to date_addtimestamp_expression-string-time_interval-interval--timestamp")
  * timestamp_expression: A string-formatted timestamp in the format 'YYYY-MM-DD HH24:MI:SS'.
  * time_interval: A CAST of a number to one of these intervals: SECOND, MINUTE, HOUR, DAY, MONTH, YEAR.


**Examples**
Adds 30 days to the specified timestamp. Note that the time information is lost.

```
SELECT DATE_ADD('2022-01-01 12:00:00', CAST(30 AS INTERVAL DAY))  
-- 2022-01-31 00:00:00.000  

```

Adds negative 30 days to the specified timestamp. Note that the time information is lost.

```
SELECT DATE_ADD('2022-01-01 12:00:00', CAST(-30 AS INTERVAL DAY))  
-- 2021-12-02 00:00:00.000  

```

### DATE_ADD(_timestamp_expression_ timestamp, _time_interval_ interval) → timestamp[​](/reference/sql/sql-functions#date_addtimestamp_expression-timestamp-time_interval-interval--timestamp "Direct link to date_addtimestamp_expression-timestamp-time_interval-interval--timestamp")
  * timestamp_expression: The timestamp, in the format 'YYYY-MM-DD HH:MM:SS', to add days to. The value can be either a database column in TIMESTAMP format, or literal value explicitly converted to TIMESTAMP.
  * time_interval: A CAST of a number to one of these intervals: SECOND, MINUTE, HOUR, DAY, MONTH, YEAR.


**Examples**
Adds 30 days to the specified timestamp.

```
SELECT DATE_ADD(TIMESTAMP '2022-01-01 12:00:00', CAST(30 AS INTERVAL DAY))  
-- 2022-01-31 12:00:00.000  

```

Adds negative 30 days to the specified timestamp.

```
SELECT DATE_ADD(TIMESTAMP '2022-01-01 12:00:00', CAST(-30 AS INTERVAL DAY))  
-- 2021-12-02 12:00:00.000  

```

### DATE_ADD(_time_expression_ time, _time_interval_ interval) → time[​](/reference/sql/sql-functions#date_addtime_expression-time-time_interval-interval--time "Direct link to date_addtime_expression-time-time_interval-interval--time")
  * time_expression: The time, in the format 'HH:MM:SS', to add the time interval to. The value can be either a database column in TIMESTAMP format, or literal value explicitly converted to TIMESTAMP.
  * time_interval: A CAST of a number to one of these intervals: SECOND, MINUTE, HOUR.


**Examples**
Adds 30 minutes to the specified time.

```
SELECT DATE_ADD(TIME '00:00:00', CAST(30 AS INTERVAL MINUTE))  
-- 00:30:00.000  

```

Adds negative 30 minutes to the specified time.

```
SELECT DATE_ADD(TIME '00:00:00', CAST(-30 AS INTERVAL MINUTE))  
-- 23:30:00.000  

```

Was this page helpful?
[Previous DATETYPE](/reference/sql/sql-functions)[Next DATE_DIFF](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DATETYPE](/reference/sql/sql-functions)[Next DATE_DIFF](/reference/sql/sql-functions)
