---
url: /reference/sql/sql-functions/functions/EXTRACT
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### EXTRACT(_time_unit_ KEYWORD, _date_time_expression_ DATE, TIME, TIMESTAMP) → INTEGER[​](/reference/sql/sql-functions#extracttime_unit-keyword-date_time_expression-date-time-timestamp--integer "Direct link to extracttime_unit-keyword-date_time_expression-date-time-timestamp--integer")
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous EXP](/reference/sql/sql-functions)[Next FACTORIAL](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FEXTRACT%2F&_biz_t=1777950630688&_biz_i=EXTRACT%20%7C%20Dremio%20Documentation&_biz_n=600&rnd=871287&cdn_o=a&_biz_z=1777950630689)
