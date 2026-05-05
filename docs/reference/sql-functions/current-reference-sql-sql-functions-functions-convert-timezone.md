---
url: /reference/sql/sql-functions/functions/CONVERT_TIMEZONE
slug: /reference/sql/sql-functions/functions/CONVERT_TIMEZONE
title: "CONVERT_TIMEZONE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64302.188936
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CONVERT_TIMEZONE

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions), [Conversion](/reference/sql/sql-functions)
# CONVERT_TIMEZONE
Convert timestamp to the specified timezone.
## Syntax
### CONVERT_TIMEZONE([_sourceTimezone_ string], _destinationTimezone_ string, _timestamp_ date, timestamp, or string in ISO 8601 format) → timestamp[​](/reference/sql/sql-functions)
  * sourceTimezone (optional): The time zone of the timestamp. If you omit this parameter, Dremio assumes that the source time zone is UTC.
  * destinationTimezone: The time zone to convert the timestamp to.
  * timestamp: The timestamp to convert


**Examples**
CONVERT_TIMEZONE example

```
select convert_timezone('America/Los_Angeles', 'America/New_York', '2021-04-01 15:27:32')  
-- 2021-04-01 18:27:32  

```

CONVERT_TIMEZONE example

```
select convert_timezone('America/Los_Angeles', 'America/New_York', timestamp '2021-04-01 15:27:32');  
-- 2021-04-01 18:27:32  

```

CONVERT_TIMEZONE example

```
select convert_timezone('PST', 'EST', '2021-04-01 15:27:32')  
-- 2021-04-01 18:27:32  

```

CONVERT_TIMEZONE example

```
select convert_timezone('America/Los_Angeles', 'America/New_York', '2021-04-01')  
-- 2021-04-01 03:00:00  

```

CONVERT_TIMEZONE example

```
select convert_timezone('America/Los_Angeles', 'America/New_York', date '2021-04-01')  
-- 2021-04-01 03:00:00  

```

CONVERT_TIMEZONE example

```
select convert_timezone('EDT', '2021-04-01 15:27:32')  
-- 2021-04-01 11:27:32  

```

CONVERT_TIMEZONE example

```
select convert_timezone('PST', '+02:00', '2021-04-01 15:27:32')  
-- 2021-04-02 01:27:32  

```

## Usage Notes[​](/reference/sql/sql-functions)
  * The `sourceTimezone` and `destinationTimezone` parameters may be `timezone_name` from `sys.timezone_names`, `timezone_abbrev` from `sys.timezone_abbrevs`, or a UTC time offset such as "+02:00".
  * If you specify a time zone name instead of time offset, you may get a different answer depending on when you call this function due to daylight saving time.


Was this page helpful?
[Previous CONVERT_REPLACEUTF8](/reference/sql/sql-functions)[Next CONVERT_TO](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CONVERT_REPLACEUTF8](/reference/sql/sql-functions)[Next CONVERT_TO](/reference/sql/sql-functions)
!
