---
url: /reference/sql/sql-functions/functions/DATE_TRUNC
title: "DATE_TRUNC | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64310.02479875
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * DATE_TRUNC

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# DATE_TRUNC
Truncates the date or timestamp to the indicated precision.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### DATE_TRUNC(_time_unit_ LITERAL, _date_timestamp_expression_ DATE OR TIMESTAMP) → DATE[​](/reference/sql/sql-functions#date_trunctime_unit-literal-date_timestamp_expression-date-or-timestamp--date "Direct link to date_trunctime_unit-literal-date_timestamp_expression-date-or-timestamp--date")
  * time_unit: The time unit that the date or timestamp needs to be truncated at. This must be the literal value of 'YEAR', 'MONTH', 'DAY', 'HOUR', 'MINUTE', or 'SECOND'.
  * date_timestamp_expression: The date or timestamp to truncate. This value must be a literal in the date or timestamp format.


**Examples**
DATE_TRUNC example

```
SELECT DATE_TRUNC('MONTH', '2021-12-24')  
-- 2021-12-01  

```

DATE_TRUNC example

```
SELECT DATE_TRUNC('MINUTE', CAST('2021-12-24 12:28:33' as TIMESTAMP))  
-- 2021-12-24 12:28:00  

```

DATE_TRUNC example

```
SELECT DATE_TRUNC('HOUR', '2021-12-24 12:28:33')  
-- 2021-12-24  

```

Was this page helpful?
[Previous DATE_SUB](/reference/sql/sql-functions)[Next DAY](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DATE_SUB](/reference/sql/sql-functions)[Next DAY](/reference/sql/sql-functions)
