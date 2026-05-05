---
url: /reference/sql/sql-functions/functions/TIMESTAMPTYPE
title: "TIMESTAMPTYPE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.823194375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TIMESTAMPTYPE

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# TIMESTAMPTYPE
Constructs a timestamp using the values provided for year, month, day, hour, minute, second, and millisecond parameters.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### TIMESTAMPTYPE(_year_ NUMERIC, _month_ NUMERIC, _day_ NUMERIC, _hour_ NUMERIC, _minute_ NUMERIC, _second_ NUMERIC, _millisecond_ NUMERIC) → DATE[​](/reference/sql/sql-functions#timestamptypeyear-numeric-month-numeric-day-numeric-hour-numeric-minute-numeric-second-numeric-millisecond-numeric--date "Direct link to timestamptypeyear-numeric-month-numeric-day-numeric-hour-numeric-minute-numeric-second-numeric-millisecond-numeric--date")
  * year: Year value.
  * month: Month value.
  * day: Day value.
  * hour: Hour value.
  * minute: Minute value.
  * second: Second value.
  * millisecond: Millisecond value.


**Examples**
TIMESTAMPTYPE example

```
SELECT TIMESTAMPTYPE(2020,10,5,1,2,3,500)  
-- 2020-10-05 01:02:03.500  

```

Was this page helpful?
[Previous TIMESTAMPDIFF](/reference/sql/sql-functions)[Next TOASCII](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TIMESTAMPDIFF](/reference/sql/sql-functions)[Next TOASCII](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FTIMESTAMPTYPE%2F&_biz_t=1777950679835&_biz_i=TIMESTAMPTYPE%20%7C%20Dremio%20Documentation&_biz_n=700&rnd=389652&cdn_o=a&_biz_z=1777950679835)
