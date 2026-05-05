---
url: /reference/sql/sql-functions/functions/HOUR
title: "HOUR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64317.671782583
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * HOUR

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# HOUR
Extracts the hour number (from 0 to 23) for a given time or timestamp.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### EXTRACT(HOUR FROM _date_timestamp_expression_ string) → bigint[​](/reference/sql/sql-functions#extracthour-from-date_timestamp_expression-string--bigint "Direct link to extracthour-from-date_timestamp_expression-string--bigint")
  * date_timestamp_expression: A `TIME`, `TIMESTAMP`, or `DATE` expression.


**Examples**
HOUR example using a timestamp

```
SELECT EXTRACT(HOUR FROM TIMESTAMP '2019-08-12 01:10:30.123456')  
-- 1  

```

HOUR example using a time

```
SELECT EXTRACT(HOUR FROM TIME '01:10:30.123456')  
-- 1  

```

HOUR example using the CAST function

```
SELECT EXTRACT(HOUR FROM CAST('2019-08-12 01:10:30' AS TIMESTAMP))  
-- 1  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
This function uses the [`EXTRACT`](/reference/sql/sql-functions) function. When using the [`CAST`](/reference/sql/sql-functions) function, timestamps containing milliseconds are not allowed.
Was this page helpful?
[Previous HEX](/reference/sql/sql-functions)[Next ILIKE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous HEX](/reference/sql/sql-functions)[Next ILIKE](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FHOUR%2F&_biz_t=1777950638031&_biz_i=HOUR%20%7C%20Dremio%20Documentation&_biz_n=609&rnd=17562&cdn_o=a&_biz_z=1777950638031)
