---
url: /reference/sql/sql-functions/functions/TIMESTAMPADD
slug: /reference/sql/sql-functions/functions/TIMESTAMPADD
title: "TIMESTAMPADD | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.7880715
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TIMESTAMPADD

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# TIMESTAMPADD
Add (or subtract) an interval of time from a date/timestamp value or column.
## Syntax
### TIMESTAMPADD(_unit_ symbol, _count_ integer, _givenTime_ date or timestamp) → date or timestamp[​](/reference/sql/sql-functions)
  * unit: The unit of the interval. Must be one of the following: `YEAR`, `QUARTER`, `MONTH`, `WEEK`, `DAY`, `HOUR`, `MINUTE`, `SECOND`.
  * count: Number of units to be added (or subtracted) from `givenTime`. To subtract units, pass a negative number.
  * givenTime: Value to which to add units (either a database column in `DATE` or `TIMESTAMP` format, or literal value explicitly converted to `DATE` or `TIMESTAMP`).


**Examples**
TIMESTAMPADD example

```
SELECT TIMESTAMPADD(DAY, 1, DATE '2021-04-01')  
-- 2021-04-02  

```

TIMESTAMPADD example

```
SELECT TIMESTAMPADD(HOUR, -2, TIMESTAMP '2021-04-01 17:14:32')  
-- 2021-04-01 15:14:32  

```

Was this page helpful?
[Previous TANH](/reference/sql/sql-functions)[Next TIMESTAMPDIFF](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TANH](/reference/sql/sql-functions)[Next TIMESTAMPDIFF](/reference/sql/sql-functions)
!
