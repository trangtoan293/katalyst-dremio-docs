---
url: /reference/sql/sql-functions/functions/OVERLAPS
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### expression1 string OVERLAPS _expression2_ → boolean[​](/reference/sql/sql-functions#expression1-string-overlaps-expression2--boolean "Direct link to expression1-string-overlaps-expression2--boolean")
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous OCTET_LENGTH](/reference/sql/sql-functions)[Next PARSE_URL](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FOVERLAPS%2F&_biz_t=1777950658518&_biz_i=OVERLAPS%20%7C%20Dremio%20Documentation&_biz_n=655&rnd=993333&cdn_o=a&_biz_z=1777950658518)
