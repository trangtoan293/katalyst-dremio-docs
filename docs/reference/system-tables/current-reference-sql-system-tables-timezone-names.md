---
url: /reference/sql/system-tables/timezone-names
slug: /reference/sql/system-tables/timezone-names
title: "SYS.TIMEZONE_NAMES | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64378.264318791
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.TIMEZONE_NAMES

Version: current [26.x]
On this page
# SYS.TIMEZONE_NAMES
The `sys.timezone_names` table contains a complete list of timezones and associated information.
Syntax

```
SELECT *   
FROM sys.timezone_names  

```

## Example Output​
This is a random sampling of the `sys.timezone_names` table. The table contains a compelete list of timezones.  
| timezone_name  | tz_offset  | offset_daylight_savings  | is_daylight_savings  |  
| --- | --- | --- | --- |  
| Africa/Kampala  | +03:00  | +03:00  | false  |  
| America/Belize  | -06:00  | -06:00  | false  |  
| America/Goose_Bay  | -04:00  | -03:00  | true  |  
| America/Los_Angeles  | -08:00  | -07:00  | true  |  
| America/New_York  | -05:00  | -04:00  | true  |  
| Antarctica/South_Pole  | +12:00  | +12:00  | false  |  
| Asia/Macau  | +08:00  | +08:00  | false  |  
| Europe/Berlin  | +01:00  | +02:00  | true  |  
| US/Hawaii  | -10:00  | -10:00  | false  |  
| US/Pacific  | -08:00  | -07:00  | true  |  
| UTC  | +00:00  | +00:00  | false  |  
| Universal  | +00:00  | +00:00  | false  |  
## Columns​  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| timezone_name  | varchar  | The name of the timezone.  |  
| tz_offset  | varchar  | The offset for the timezone.  |  
| offset_daylight_savings  | varchar  | The offset for the timezone during Daylight Savings time.  |  
| is_daylight_savings  | boolean  |  `true` if the timezone honors daylight savings; `false` otherwise.  |  
Was this page helpful?
[Previous SYS."TABLES"](/reference/sql/system-tables/tables)[Next SYS.USER_DEFINED_FUNCTIONS](/reference/sql/system-tables/user-defined-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS."TABLES"](/reference/sql/system-tables/tables)[Next SYS.USER_DEFINED_FUNCTIONS](/reference/sql/system-tables/user-defined-functions)
