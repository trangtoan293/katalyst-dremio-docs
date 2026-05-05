---
url: /reference/sql/sql-functions/functions/TO_TIMESTAMP
title: "TO_TIMESTAMP | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.645276166
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TO_TIMESTAMP

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions), [Conversion](/reference/sql/sql-functions)
# TO_TIMESTAMP
Converts the input expressions to the corresponding timestamp.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### TO_TIMESTAMP(_numeric_expression_ double) → timestamp[​](/reference/sql/sql-functions#to_timestampnumeric_expression-double--timestamp "Direct link to to_timestampnumeric_expression-double--timestamp")
  * numeric_expression: A Unix epoch timestamp.


**Examples**
TO_TIMESTAMP example

```
SELECT TO_TIMESTAMP(52 * 365.25 * 86400)  
-- 2022-01-01 00:00:00  

```

### TO_TIMESTAMP(_string_expression_ varchar, _format_ varchar [, _replaceErrorWithNull_ int32]) → timestamp[​](/reference/sql/sql-functions#to_timestampstring_expression-varchar-format-varchar--replaceerrorwithnull-int32--timestamp "Direct link to to_timestampstring_expression-varchar-format-varchar--replaceerrorwithnull-int32--timestamp")
  * string_expression: The string from which to extract the timestamp.
  * format: String to specify [format](/reference/sql/sql-functions#datetime-formatting) of the timestamp.
  * replaceErrorWithNull (optional): If 0, the function will fail when given malformed input. If 1, the function will return NULL when given malformed input.


**Examples**
TO_TIMESTAMP example

```
SELECT TO_TIMESTAMP('2022-03-15 01:02:03.1245', 'YYYY-MM-DD HH:MI:SS', 1)  
-- NULL  

```

### TO_TIMESTAMP(_numeric_expression_ int64) → timestamp[​](/reference/sql/sql-functions#to_timestampnumeric_expression-int64--timestamp "Direct link to to_timestampnumeric_expression-int64--timestamp")
  * numeric_expression: A Unix epoch timestamp.


**Examples**
TO_TIMESTAMP example

```
SELECT TO_TIMESTAMP(1640131200)  
-- 2021-12-22 00:00:00  

```

### TO_TIMESTAMP(_numeric_expression_ int32) → timestamp[​](/reference/sql/sql-functions#to_timestampnumeric_expression-int32--timestamp "Direct link to to_timestampnumeric_expression-int32--timestamp")
  * numeric_expression: A Unix epoch timestamp.


**Examples**
TO_TIMESTAMP example

```
SELECT TO_TIMESTAMP(1640131200)  
-- 2021-12-22 00:00:00  

```

### TO_TIMESTAMP(_numeric_expression_ float) → timestamp[​](/reference/sql/sql-functions#to_timestampnumeric_expression-float--timestamp "Direct link to to_timestampnumeric_expression-float--timestamp")
  * numeric_expression: A Unix epoch timestamp.


**Examples**
TO_TIMESTAMP example

```
SELECT TO_TIMESTAMP(52 * 365.25 * 86400)  
-- 2022-01-01 00:00:00  

```

### TO_TIMESTAMP(_string_expression_ varchar, _format_ varchar) → timestamp[​](/reference/sql/sql-functions#to_timestampstring_expression-varchar-format-varchar--timestamp "Direct link to to_timestampstring_expression-varchar-format-varchar--timestamp")
  * string_expression: String from which to extract the timestamp.
  * format: String to specify [format](/reference/sql/sql-functions#datetime-formatting) of the timestamp.


**Examples**
TO_TIMESTAMP example

```
SELECT TO_TIMESTAMP('2021-07-31 01:02:03', 'YYYY-MM-DD HH:MI:SS')  
-- 2021-07-31 01:02:03  

```

Was this page helpful?
[Previous TO_TIME](/reference/sql/sql-functions)[Next TRANSACTION_TIMESTAMP](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TO_TIME](/reference/sql/sql-functions)[Next TRANSACTION_TIMESTAMP](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FTO_TIMESTAMP%2F&_biz_t=1777950684906&_biz_i=TO_TIMESTAMP%20%7C%20Dremio%20Documentation&_biz_n=704&rnd=774491&cdn_o=a&_biz_z=1777950684906)
