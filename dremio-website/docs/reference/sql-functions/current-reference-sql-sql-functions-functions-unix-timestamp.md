---
url: /reference/sql/sql-functions/functions/UNIX_TIMESTAMP
title: "UNIX_TIMESTAMP | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.881767458
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * UNIX_TIMESTAMP

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions), [System](/reference/sql/sql-functions)
# UNIX_TIMESTAMP
Returns the Unix epoch time representation of an ISO 8601 timestamp.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### UNIX_TIMESTAMP() → int64[​](/reference/sql/sql-functions#unix_timestamp--int64 "Direct link to UNIX_TIMESTAMP\(\) → int64")
**Examples**
UNIX_TIMESTAMP example

```
SELECT UNIX_TIMESTAMP()  
-- 1624928208  

```

### UNIX_TIMESTAMP(_date_timestamp_expression_ varchar) → int64[​](/reference/sql/sql-functions#unix_timestampdate_timestamp_expression-varchar--int64 "Direct link to unix_timestampdate_timestamp_expression-varchar--int64")
  * date_timestamp_expression: The timestamp to convert to Unix timestamp. The expected format is `YYYY-MM-DD HH24:MM:SS` where HH can be a value 1-24.


**Examples**
UNIX_TIMESTAMP example

```
SELECT UNIX_TIMESTAMP('2021-12-22 13:44:11')  
-- 1640180651  

```

### UNIX_TIMESTAMP(_date_timestamp_expression_ varchar [, _format_ varchar]) → int64[​](/reference/sql/sql-functions#unix_timestampdate_timestamp_expression-varchar--format-varchar--int64 "Direct link to unix_timestampdate_timestamp_expression-varchar--format-varchar--int64")
  * date_timestamp_expression: The timestamp to convert to Unix timestamp.
  * format (optional): Specify the format of the time, date, or timestamp parameter, such as `YY-MM-DD` or `HH:MM:SS`.


**Examples**
UNIX_TIMESTAMP example

```
SELECT UNIX_TIMESTAMP('21-12-22', 'YY-MM-DD')  
-- 1640131200  

```

Was this page helpful?
[Previous UNHEX](/reference/sql/sql-functions)[Next UPPER](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous UNHEX](/reference/sql/sql-functions)[Next UPPER](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FUNIX_TIMESTAMP%2F&_biz_t=1777950686228&_biz_i=Dremio%20Documentation&_biz_n=713&rnd=716315&cdn_o=a&_biz_z=1777950686228)
