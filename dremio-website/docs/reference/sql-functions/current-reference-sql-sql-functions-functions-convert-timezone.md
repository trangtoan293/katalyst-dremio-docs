---
url: /reference/sql/sql-functions/functions/CONVERT_TIMEZONE
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### CONVERT_TIMEZONE([_sourceTimezone_ string], _destinationTimezone_ string, _timestamp_ date, timestamp, or string in ISO 8601 format) → timestamp[​](/reference/sql/sql-functions#convert_timezonesourcetimezone-string-destinationtimezone-string-timestamp-date-timestamp-or-string-in-iso-8601-format--timestamp "Direct link to convert_timezonesourcetimezone-string-destinationtimezone-string-timestamp-date-timestamp-or-string-in-iso-8601-format--timestamp")
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

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
  * The `sourceTimezone` and `destinationTimezone` parameters may be `timezone_name` from `sys.timezone_names`, `timezone_abbrev` from `sys.timezone_abbrevs`, or a UTC time offset such as "+02:00".
  * If you specify a time zone name instead of time offset, you may get a different answer depending on when you call this function due to daylight saving time.


Was this page helpful?
[Previous CONVERT_REPLACEUTF8](/reference/sql/sql-functions)[Next CONVERT_TO](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CONVERT_REPLACEUTF8](/reference/sql/sql-functions)[Next CONVERT_TO](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCONVERT_TIMEZONE%2F&_biz_t=1777950621493&_biz_i=Dremio%20Documentation&_biz_n=581&rnd=565493&cdn_o=a&_biz_z=1777950621493)
