---
url: /reference/sql/sql-functions/functions/LAST_DAY
slug: /reference/sql/sql-functions/functions/LAST_DAY
title: "LAST_DAY | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.328869375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LAST_DAY

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# LAST_DAY
Returns the last day of the month for the specified date or timestamp.
## Syntax
### LAST_DAY(_date_timestamp_expression_ string) → date[​](/reference/sql/sql-functions)
  * date_timestamp_expression: A `DATE` or `TIMESTAMP` expression.


**Examples**
LAST_DAY example

```
SELECT LAST_DAY('2009-01-12 12:58:59')  
-- 2009-01-31  

```

LAST_DAY example

```
SELECT pickup_datetime, LAST_DAY(pickup_datetime) AS "last_day"   
FROM Samples."samples.dremio.com"."NYC-taxi-trips"  
LIMIT 3  
-- pickup_datetime, last_day  
-- 2013-05-27 19:15:00.000, 2013-05-31  
-- 2013-05-31 16:40:00.000, 2013-05-31  
-- 2013-05-27 19:03:00.000, 2013-05-31  

```

## Usage Notes[​](/reference/sql/sql-functions)
The return value is always a date regardless of whether `date_timestamp_expression` is a date or a timestamp.
Was this page helpful?
[Previous LAG](/reference/sql/sql-functions)[Next LAST_QUERY_ID](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LAG](/reference/sql/sql-functions)[Next LAST_QUERY_ID](/reference/sql/sql-functions)
!!
