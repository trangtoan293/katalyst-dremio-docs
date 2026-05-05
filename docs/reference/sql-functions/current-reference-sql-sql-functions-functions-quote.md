---
url: /reference/sql/sql-functions/functions/QUOTE
slug: /reference/sql/sql-functions/functions/QUOTE
title: "QUOTE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64344.95243
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * QUOTE

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# QUOTE
Returns a result that can be used as a properly escaped data value in a SQL statement.
## Syntax
### QUOTE(_expression_ string) → string[​](/reference/sql/sql-functions)
  * expression: The input string.


**Examples**
QUOTE example

```
SELECT QUOTE('Dremio')  
-- 'Dremio'  

```

QUOTE example using escaping single quotes

```
SELECT QUOTE('Sonar''and''Arctic')   
AS Escaped_String  
-- 'Sonar\'and\'Arctic'  

```

QUOTE example that quotes from a column in sample NYC taxi data

```
SELECT *, QUOTE(total_amount)   
FROM "Samples"."samples.dremio.com"."NYC-taxi-trips"   
LIMIT 3  
-- pickup_datetime, passenger_count, trip_distance_mi, fare_amount, tip_amount, total_amount, EXPR$6  
-- 2013-05-27 19:15:00.000, 1, 1.26, 7.5, 0.0, 8.0, '8.0'  
-- 2013-05-31 16:40:00.000, 1, 0.73, 5.0, 1.2, 7.7, '7.7'  
-- 2013-05-27 19:03:00.000, 2, 9.23, 27.5, 5.0, 38.33, '38.33'  

```

## Usage Notes[​](/reference/sql/sql-functions)
The string is returned enclosed by single quotation marks and with each instance of backslash (\\), single quote (‘), ASCII NUL, and `Control+Z` preceded by a backslash (\\). If the argument is `NULL`, the return value is the word `NULL` without enclosing single quotation marks.
Was this page helpful?
[Previous QUERY_USER](/reference/sql/sql-functions)[Next RADIANS](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous QUERY_USER](/reference/sql/sql-functions)[Next RADIANS](/reference/sql/sql-functions)
