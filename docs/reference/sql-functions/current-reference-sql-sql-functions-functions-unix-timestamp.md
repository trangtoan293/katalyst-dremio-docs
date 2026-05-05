---
url: /reference/sql/sql-functions/functions/UNIX_TIMESTAMP
slug: /reference/sql/sql-functions/functions/UNIX_TIMESTAMP
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
## Syntax
### UNIX_TIMESTAMP() → int64[​](/reference/sql/sql-functions) → int64")
**Examples**
UNIX_TIMESTAMP example

```
SELECT UNIX_TIMESTAMP()  
-- 1624928208  

```

### UNIX_TIMESTAMP(_date_timestamp_expression_ varchar) → int64[​](/reference/sql/sql-functions)
  * date_timestamp_expression: The timestamp to convert to Unix timestamp. The expected format is `YYYY-MM-DD HH24:MM:SS` where HH can be a value 1-24.


**Examples**
UNIX_TIMESTAMP example

```
SELECT UNIX_TIMESTAMP('2021-12-22 13:44:11')  
-- 1640180651  

```

### UNIX_TIMESTAMP(_date_timestamp_expression_ varchar [, _format_ varchar]) → int64[​](/reference/sql/sql-functions)
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
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous UNHEX](/reference/sql/sql-functions)[Next UPPER](/reference/sql/sql-functions)
!
