---
url: /reference/sql/sql-functions/functions/OVERLAPS
slug: /reference/sql/sql-functions/functions/OVERLAPS
title: "OVERLAPS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64338.3162595
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * OVERLAPS

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# OVERLAPS
Returns whether two intervals overlap.
## Syntax
### expression1 string OVERLAPS _expression2_ → boolean[​](/reference/sql/sql-functions)
  * expression1: A date or time interval expression.
  * expression2: A date or time interval expression.


**Examples**
OVERLAPS example

```
SELECT (TIME '2:55:00', INTERVAL '1' HOUR) OVERLAPS (TIME '3:30:00', INTERVAL '2' HOUR)  
-- True  

```

OVERLAPS example

```
SELECT pickup_datetime FROM Samples."samples.dremio.com"."NYC-taxi-trips-iceberg" WHERE (DATE '2013-01-01' , DATE '2014-12-31' ) OVERLAPS ( DATE '2013-06-01' , DATE '2013-07-01' ) LIMIT 3  
-- pickup_datetime  
-- 2013-02-10 21:59:00.000  
-- 2013-02-10 22:00:00.000  
-- 2013-02-10 21:57:00.000  

```

Was this page helpful?
[Previous OCTET_LENGTH](/reference/sql/sql-functions)[Next PARSE_URL](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous OCTET_LENGTH](/reference/sql/sql-functions)[Next PARSE_URL](/reference/sql/sql-functions)
!
