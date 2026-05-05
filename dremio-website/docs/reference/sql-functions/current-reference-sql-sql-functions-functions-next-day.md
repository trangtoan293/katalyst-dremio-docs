---
url: /reference/sql/sql-functions/functions/NEXT_DAY
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### NEXT_DAY(_date_timestamp_expression_ string, _day_of_week_ string) → date[​](/reference/sql/sql-functions#next_daydate_timestamp_expression-string-day_of_week-string--date "Direct link to next_daydate_timestamp_expression-string-day_of_week-string--date")
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

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
The return value is always a date regardless of whether `date_timestamp_expression` is a date or a timestamp.
Was this page helpful?
[Previous NDV](/reference/sql/sql-functions)[Next NORMALIZE_STRING](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous NDV](/reference/sql/sql-functions)[Next NORMALIZE_STRING](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FOCTET_LENGTH%2F&_biz_t=1777950658382&_biz_i=Dremio%20Documentation&_biz_n=653&rnd=648016&cdn_o=a&_biz_z=1777950658404)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FNEXT_DAY%2F&_biz_t=1777950658404&_biz_i=NEXT_DAY%20%7C%20Dremio%20Documentation&_biz_n=654&rnd=371514&cdn_o=a&_biz_z=1777950658405)
