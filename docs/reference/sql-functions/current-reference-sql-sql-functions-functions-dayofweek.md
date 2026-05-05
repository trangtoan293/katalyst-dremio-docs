---
url: /reference/sql/sql-functions/functions/DAYOFWEEK
title: "DAYOFWEEK | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64310.6750475
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * DAYOFWEEK

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# DAYOFWEEK
Returns the day of the week (from 1 to 7) of the date or timestamp.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### DAYOFWEEK(_date_timestamp_expression_ string) → bigint[​](/reference/sql/sql-functions#dayofweekdate_timestamp_expression-string--bigint "Direct link to dayofweekdate_timestamp_expression-string--bigint")
  * date_timestamp_expression: A `DATE` or `TIMESTAMP` expression.


**Examples**
DAYOFWEEK example

```
SELECT DAYOFWEEK(DATE '2021-02-28')  
-- 1  

```

DAYOFWEEK example

```
SELECT DAYOFWEEK(TIMESTAMP '2021-02-27 11:43:22')  
-- 7  

```

Was this page helpful?
[Previous DAYOFMONTH](/reference/sql/sql-functions)[Next DAYOFYEAR](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DAYOFMONTH](/reference/sql/sql-functions)[Next DAYOFYEAR](/reference/sql/sql-functions)
