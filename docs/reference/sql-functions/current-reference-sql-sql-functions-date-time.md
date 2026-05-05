---
url: /reference/sql/sql-functions/DATE_TIME
slug: /reference/sql/sql-functions/DATE_TIME
title: "Date/Time | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64271.6974815
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * Date/Time

Version: current [26.x]
On this page
# Date/Time  
| Function Name  | Description  |  
| --- | --- |  
| [CONVERT_TIMEZONE](/reference/sql/sql-functions)  | Convert timestamp to the specified timezone.  |  
| [CURRENT_DATE](/reference/sql/sql-functions)  | Returns the current date of the system.  |  
| [CURRENT_DATE_UTC](/reference/sql/sql-functions)  | Returns the current date of the system based on the UTC timezone.  |  
| [CURRENT_TIME](/reference/sql/sql-functions)  | Returns the current time for the system.  |  
| [CURRENT_TIMESTAMP](/reference/sql/sql-functions)  | Returns the current timestamp for the system in UTC time only.  |  
| [DATEDIFF](/reference/sql/sql-functions)  | Compares two dates or timestamps and returns the difference in days.  |  
| [DATETYPE](/reference/sql/sql-functions)  | Constructs DATE using the values provided for year, month, and day parameters.  |  
| [DATE_ADD](/reference/sql/sql-functions)  | Returns the sum of two expressions of time as another expression of time.  |  
| [DATE_DIFF](/reference/sql/sql-functions)  | Returns the difference between two expressions of time as another expression of time.  |  
| [DATE_PART](/reference/sql/sql-functions)  | Return subfields such as year or hour from date or timestamp values.  |  
| [DATE_SUB](/reference/sql/sql-functions)  | Returns the difference of two expressions of time as another expression of time.  |  
| [DATE_TRUNC](/reference/sql/sql-functions)  | Truncates the date or timestamp to the indicated precision.  |  
| [DAY](/reference/sql/sql-functions)  | Returns the day of month of the date or timestamp.  |  
| [DAYOFMONTH](/reference/sql/sql-functions)  | Returns the day of month of the date or timestamp.  |  
| [DAYOFWEEK](/reference/sql/sql-functions)  | Returns the day of the week (from 1 to 7) of the date or timestamp.  |  
| [DAYOFYEAR](/reference/sql/sql-functions)  | Returns the day of the year (from 1 to 366) of the date or timestamp.  |  
| [EXTRACT](/reference/sql/sql-functions)  | Extracts the specified time unit from the specified date, time, or timestamp.  |  
| [HOUR](/reference/sql/sql-functions)  | Extracts the hour number (from 0 to 23) for a given time or timestamp.  |  
| [LAST_DAY](/reference/sql/sql-functions)  | Returns the last day of the month for the specified date or timestamp.  |  
| [MINUTE](/reference/sql/sql-functions)  | Extracts the minute number (from 0 to 59) for a given time or timestamp.  |  
| [MONTH](/reference/sql/sql-functions)  | Extracts the month number (from 1 to 12) for a given date or timestamp.  |  
| [MONTHS_BETWEEN](/reference/sql/sql-functions)  | Returns the number of months between two date or timestamp values.  |  
| [NEXT_DAY](/reference/sql/sql-functions)  | Returns the date or timestamp of the first specified day of week that occurs after the input date.  |  
| [OVERLAPS](/reference/sql/sql-functions)  | Returns whether two intervals overlap.  |  
| [QUARTER](/reference/sql/sql-functions)  | Extracts the quarter number (from 1 to 4) for a given date or timestamp.  |  
| [SECOND](/reference/sql/sql-functions)  | Extracts the second number (from 0 to 59) for a given date or timestamp.  |  
| [TIMESTAMPADD](/reference/sql/sql-functions)  | Add (or subtract) an interval of time from a date/timestamp value or column.  |  
| [TIMESTAMPDIFF](/reference/sql/sql-functions)  | Return the amount of time between two date or timestamp values  |  
| [TIMESTAMPTYPE](/reference/sql/sql-functions)  | Constructs a timestamp using the values provided for year, month, day, hour, minute, second, and millisecond parameters.  |  
| [TO_DATE](/reference/sql/sql-functions)  | Converts the input expressions to the corresponding date.  |  
| [TO_TIME](/reference/sql/sql-functions)  | Converts the input expressions to the corresponding time.  |  
| [TO_TIMESTAMP](/reference/sql/sql-functions)  | Converts the input expressions to the corresponding timestamp.  |  
| [UNIX_TIMESTAMP](/reference/sql/sql-functions)  | Returns the Unix epoch time representation of an ISO 8601 timestamp.  |  
| [WEEK](/reference/sql/sql-functions)  | Extracts the week number (from 0 to 53) for a given date or timestamp.  |  
| [WEEKOFYEAR](/reference/sql/sql-functions)  | Returns the week of year of the date or timestamp.  |  
| [YEAR](/reference/sql/sql-functions)  | Extracts the year for a given date or timestamp.  |  
## Date/Time Formatting[​](/reference/sql/sql-functions)  
| Format Element  | Description  | Example  |  
| --- | --- | --- |  
| AD/BC  | Era indicator  | AD, BC  |  
| AMPM  | Meridian indicator  | AM, PM  |  
| CC  | Century indicator (0-99)  | 19  |  
| WW  | Week of year (0-52)  | 4, 43  |  
| D  | Day of week (1-7)  | 6  |  
| DY  | Abbreviated day name of week  | Tue, Fri  |  
| DAY  | Full day name of week  | Tuesday, Friday  |  
| YYYY  | Four digits of year  | 1996  |  
| YY  | Last two digits of year  | 96  |  
| DDD  | Day of year (1-366)  | 5, 245  |  
| MM  | Month (1-12)  | 8  |  
| MON  | Abbreviated month name  | Mar, Oct  |  
| MONTH  | Full month name  | March, October  |  
| DD  | Day of month (1-31)  | 24  |  
| HH/HH12  | Hour of day (1-12)  | 4  |  
| HH24  | Hour of day (0-23)  | 21  |  
| MI  | Minutes (0-59)  | 22  |  
| SS  | Seconds (0-59)  | 54  |  
| FFF  | Milliseconds  | 121  |  
| TZD  | Timezone abbreviation  | UTC, PST  |  
| TZO  | Timezone offset  | +02:00, -0800  |  
Only the following characters are allowed in a format pattern: `- / , . ; :`. If you need to let a value pass through to the output unmodified you can surround it with `"` (for example `"T"`).
If you convert a date to text, numeric values are zero padded for you. For example, `MM` returns `04` for April.
Was this page helpful?
[Previous Datatype](/reference/sql/sql-functions)[Next Directory](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Datatype](/reference/sql/sql-functions)[Next Directory](/reference/sql/sql-functions)
!
