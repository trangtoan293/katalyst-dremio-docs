---
url: /reference/sql/sql-functions/functions/SECOND
title: "SECOND | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64351.705509416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SECOND

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# SECOND
Extracts the second number (from 0 to 59) for a given date or timestamp.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### EXTRACT(SECOND FROM _date_timestamp_expression_ string) → bigint[​](/reference/sql/sql-functions#extractsecond-from-date_timestamp_expression-string--bigint "Direct link to extractsecond-from-date_timestamp_expression-string--bigint")
  * timestamp_expression: A `TIME`, `TIMESTAMP`, or `DATE` expression.


**Examples**
SECOND example using a timestamp

```
SELECT EXTRACT(SECOND FROM TIMESTAMP '2019-08-12 01:10:30.123456')  
-- 1  

```

SECOND example using a time

```
SELECT EXTRACT(SECOND FROM TIME '01:10:30.123456')  
-- 1  

```

SECOND example using the CAST function

```
SELECT EXTRACT(SECOND FROM CAST('2019-08-12 01:10:30' AS TIMESTAMP))  
-- 1  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
This function uses the [`EXTRACT`](/reference/sql/sql-functions) function. When using the [`CAST`](/reference/sql/sql-functions) function, timestamps containing milliseconds are not allowed.
Was this page helpful?
[Previous RTRIM](/reference/sql/sql-functions)[Next SESSION_USER](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous RTRIM](/reference/sql/sql-functions)[Next SESSION_USER](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FSECOND%2F&_biz_t=1777950671306&_biz_i=SECOND%20%7C%20Dremio%20Documentation&_biz_n=668&rnd=864516&cdn_o=a&_biz_z=1777950671306)
