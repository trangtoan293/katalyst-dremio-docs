---
url: /reference/sql/sql-functions/functions/NEXT_DAY
slug: /reference/sql/sql-functions/functions/NEXT_DAY
title: "NEXT_DAY | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64338.254191833
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * NEXT_DAY

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# NEXT_DAY
Returns the date or timestamp of the first specified day of week that occurs after the input date.
## Syntax
### NEXT_DAY(_date_timestamp_expression_ string, _day_of_week_ string) → date[​](/reference/sql/sql-functions)
  * date_timestamp_expression: A `DATE` or `TIMESTAMP` expression.
  * day_of_week: A string expression identifying a day of the week. The value can be a string literal or an expression that returns a string. The string must be one of the following (case-sensitive):


    * `SU`, `SUN`, `SUNDAY`
    * `MO`, `MON`, `MONDAY`
    * `TU`, `TUE`, `TUESDAY`
    * `WE`, `WED`, `WEDNESDAY`
    * `TH`, `THU`, `THURSDAY`
    * `FR`, `FRI`, `FRIDAY`
    * `SA`, `SAT`, `SATURDAY`


**Examples**
NEXT_DAY example

```
SELECT NEXT_DAY('2015-01-14 12:05:55', 'TU')  
-- 2015-01-20  

```

NEXT_DAY example

```
SELECT pickup_datetime, NEXT_DAY(pickup_datetime, 'FRIDAY') AS "next_day"   
FROM Samples."samples.dremio.com"."NYC-taxi-trips"  
LIMIT 3  
-- pickup_datetime, next_day  
-- 2013-05-27 19:15:00.000, 2013-05-31  
-- 2013-05-31 16:40:00.000, 2013-06-07  
-- 2013-05-27 19:03:00.000, 2013-05-31  

```

## Usage Notes[​](/reference/sql/sql-functions)
The return value is always a date regardless of whether `date_timestamp_expression` is a date or a timestamp.
Was this page helpful?
[Previous NDV](/reference/sql/sql-functions)[Next NORMALIZE_STRING](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous NDV](/reference/sql/sql-functions)[Next NORMALIZE_STRING](/reference/sql/sql-functions)
!!
