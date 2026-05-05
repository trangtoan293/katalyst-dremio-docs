---
url: /reference/sql/sql-functions/functions/LAST_DAY
title: "LAST_DAY | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.328869375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LAST_DAY

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# LAST_DAY
Returns the last day of the month for the specified date or timestamp.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### LAST_DAY(_date_timestamp_expression_ string) → date[​](/reference/sql/sql-functions#last_daydate_timestamp_expression-string--date "Direct link to last_daydate_timestamp_expression-string--date")
  * date_timestamp_expression: A `DATE` or `TIMESTAMP` expression.


**Examples**
LAST_DAY example

```
SELECT LAST_DAY('2009-01-12 12:58:59')  
-- 2009-01-31  

```

LAST_DAY example

```
SELECT pickup_datetime, LAST_DAY(pickup_datetime) AS "last_day"   
FROM Samples."samples.dremio.com"."NYC-taxi-trips"  
LIMIT 3  
-- pickup_datetime, last_day  
-- 2013-05-27 19:15:00.000, 2013-05-31  
-- 2013-05-31 16:40:00.000, 2013-05-31  
-- 2013-05-27 19:03:00.000, 2013-05-31  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
The return value is always a date regardless of whether `date_timestamp_expression` is a date or a timestamp.
Was this page helpful?
[Previous LAG](/reference/sql/sql-functions)[Next LAST_QUERY_ID](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LAG](/reference/sql/sql-functions)[Next LAST_QUERY_ID](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FIS__NOT__FALSE%2F&_biz_t=1777950644044&_biz_i=Dremio%20Documentation&_biz_n=619&rnd=871633&cdn_o=a&_biz_z=1777950644144)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FLAST_DAY%2F&_biz_t=1777950644144&_biz_i=LAST_DAY%20%7C%20Dremio%20Documentation&_biz_n=620&rnd=830065&cdn_o=a&_biz_z=1777950644145)
