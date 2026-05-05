---
url: /reference/sql/sql-functions/functions/TIMESTAMPADD
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### TIMESTAMPADD(_unit_ symbol, _count_ integer, _givenTime_ date or timestamp) → date or timestamp[​](/reference/sql/sql-functions#timestampaddunit-symbol-count-integer-giventime-date-or-timestamp--date-or-timestamp "Direct link to timestampaddunit-symbol-count-integer-giventime-date-or-timestamp--date-or-timestamp")
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TANH](/reference/sql/sql-functions)[Next TIMESTAMPDIFF](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FTIMESTAMPADD%2F&_biz_t=1777950679222&_biz_i=TIMESTAMPADD%20%7C%20Dremio%20Documentation&_biz_n=694&rnd=659043&cdn_o=a&_biz_z=1777950679223)
