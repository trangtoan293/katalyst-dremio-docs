---
url: /reference/sql/sql-functions/functions/TIMESTAMPDIFF
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### TIMESTAMPDIFF(_unit_ symbol, _giventime1_ date or timestamp, _givenTime2_ date or timestamp) → integer[​](/reference/sql/sql-functions#timestampdiffunit-symbol-giventime1-date-or-timestamp-giventime2-date-or-timestamp--integer "Direct link to timestampdiffunit-symbol-giventime1-date-or-timestamp-giventime2-date-or-timestamp--integer")
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TIMESTAMPADD](/reference/sql/sql-functions)[Next TIMESTAMPTYPE](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FTIMESTAMPDIFF%2F&_biz_t=1777950679757&_biz_i=TIMESTAMPDIFF%20%7C%20Dremio%20Documentation&_biz_n=699&rnd=595640&cdn_o=a&_biz_z=1777950679757)
