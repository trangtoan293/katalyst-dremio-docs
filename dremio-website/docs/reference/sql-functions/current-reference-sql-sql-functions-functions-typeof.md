---
url: /reference/sql/sql-functions/functions/TYPEOF
title: "TYPEOF | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.761303125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TYPEOF

Version: current [26.x]
On this page
**Categories** : [Datatype](/reference/sql/sql-functions)
# TYPEOF
Reports the type (in string format) of the input expression.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### TYPEOF(_input_ any) → varchar[​](/reference/sql/sql-functions#typeofinput-any--varchar "Direct link to typeofinput-any--varchar")
  * input: An expression for which the type is returned.


**Examples**
TYPEOF example

```
SELECT TYPEOF(TRUE)  
-- BIT  

```

TYPEOF example

```
SELECT TYPEOF(100)  
-- INT  

```

TYPEOF example

```
SELECT TYPEOF(98.76)  
-- DECIMAL  

```

TYPEOF example

```
SELECT TYPEOF('2021-09-14')  
-- VARCHAR  

```

Was this page helpful?
[Previous TRY_CONVERT_FROM](/reference/sql/sql-functions)[Next UCASE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TRY_CONVERT_FROM](/reference/sql/sql-functions)[Next UCASE](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FTYPEOF%2F&_biz_t=1777950685680&_biz_i=TYPEOF%20%7C%20Dremio%20Documentation&_biz_n=709&rnd=261570&cdn_o=a&_biz_z=1777950685680)
