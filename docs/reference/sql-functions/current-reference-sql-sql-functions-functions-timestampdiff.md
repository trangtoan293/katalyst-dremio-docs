---
url: /reference/sql/sql-functions/functions/TIMESTAMPDIFF
slug: /reference/sql/sql-functions/functions/TIMESTAMPDIFF
title: "TIMESTAMPDIFF | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.841847083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TIMESTAMPDIFF

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# TIMESTAMPDIFF
Return the amount of time between two date or timestamp values
## Syntax
### TIMESTAMPDIFF(_unit_ symbol, _giventime1_ date or timestamp, _givenTime2_ date or timestamp) → integer[​](/reference/sql/sql-functions)
  * unit: The unit of the interval. Must be one of the following: `YEAR`, `QUARTER`, `MONTH`, `WEEK`, `DAY`, `HOUR`, `MINUTE`, `SECOND`.
  * giventime1: The first `DATE` or `TIMESTAMP` (subtrahend).
  * givenTime2: The second `DATE` or `TIMESTAMP` (minuend).


**Examples**
TIMESTAMPDIFF example

```
SELECT TIMESTAMPDIFF(MONTH, DATE '2021-02-01', DATE '2021-05-01');  
-- 3  

```

TIMESTAMPDIFF example

```
SELECT TIMESTAMPDIFF(DAY, TIMESTAMP '2003-02-01 11:43:22', TIMESTAMP '2005-04-09 12:05:55');  
-- 798  

```

Was this page helpful?
[Previous TIMESTAMPADD](/reference/sql/sql-functions)[Next TIMESTAMPTYPE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TIMESTAMPADD](/reference/sql/sql-functions)[Next TIMESTAMPTYPE](/reference/sql/sql-functions)
!
