---
url: /reference/sql/sql-functions/functions/DAYOFYEAR
title: "DAYOFYEAR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64310.6494085
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * DAYOFYEAR

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# DAYOFYEAR
Returns the day of the year (from 1 to 366) of the date or timestamp.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### DAYOFYEAR(_date_timestamp_expression_ string) → bigint[​](/reference/sql/sql-functions#dayofyeardate_timestamp_expression-string--bigint "Direct link to dayofyeardate_timestamp_expression-string--bigint")
  * date_timestamp_expression: A `DATE` or `TIMESTAMP` expression.


**Examples**
DAYOFYEAR example

```
SELECT DAYOFYEAR(DATE '2021-02-28')  
-- 59  

```

DAYOFYEAR example

```
SELECT DAYOFYEAR(TIMESTAMP '2021-03-15 11:43:22')  
-- 74  

```

Was this page helpful?
[Previous DAYOFWEEK](/reference/sql/sql-functions)[Next DECRYPT](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DAYOFWEEK](/reference/sql/sql-functions)[Next DECRYPT](/reference/sql/sql-functions)
