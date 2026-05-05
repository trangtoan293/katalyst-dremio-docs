---
url: /reference/sql/sql-functions/functions/MONTH
title: "MONTH | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64338.073344125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * MONTH

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# MONTH
Extracts the month number (from 1 to 12) for a given date or timestamp.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### EXTRACT(MONTH FROM _date_timestamp_expression_ string) → bigint[​](/reference/sql/sql-functions#extractmonth-from-date_timestamp_expression-string--bigint "Direct link to extractmonth-from-date_timestamp_expression-string--bigint")
  * date_timestamp_expression: A `DATE` or `TIMESTAMP` expression.


**Examples**
MONTH example using a timestamp

```
SELECT EXTRACT(MONTH FROM TIMESTAMP '2019-08-12 01:00:00.123456')  
-- 8  

```

MONTH example using a date

```
SELECT EXTRACT(MONTH FROM DATE '2019-08-12')  
-- 8  

```

MONTH example using the CAST function

```
SELECT EXTRACT(MONTH FROM CAST('2019-08-12 01:00:00' AS TIMESTAMP))  
-- 8  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
This function uses the [`EXTRACT`](/reference/sql/sql-functions) function. When using the [`CAST`](/reference/sql/sql-functions) function, timestamps containing milliseconds are not allowed.
Was this page helpful?
[Previous MOD](/reference/sql/sql-functions)[Next MONTHS_BETWEEN](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MOD](/reference/sql/sql-functions)[Next MONTHS_BETWEEN](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FMONTH%2F&_biz_t=1777950657850&_biz_i=MONTH%20%7C%20Dremio%20Documentation&_biz_n=648&rnd=135955&cdn_o=a&_biz_z=1777950657850)
