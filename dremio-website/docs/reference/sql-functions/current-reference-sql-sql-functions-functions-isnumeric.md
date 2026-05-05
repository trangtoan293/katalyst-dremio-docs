---
url: /reference/sql/sql-functions/functions/ISNUMERIC
title: "ISNUMERIC | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64317.497018375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ISNUMERIC

Version: current [26.x]
On this page
**Categories** : [Boolean](/reference/sql/sql-functions)
# ISNUMERIC
Determines whether an expression is a valid numeric type (DECIMAL, DOUBLE, INT, BIGINT, VARBINARY).
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ISNUMERIC(_expression_ any) → boolean[​](/reference/sql/sql-functions#isnumericexpression-any--boolean "Direct link to isnumericexpression-any--boolean")
  * expression: Can be a general expression of any Dremio-supported data type.


**Examples**
ISNUMERIC example

```
SELECT ISNUMERIC('13579')  
-- True  

```

ISNUMERIC example

```
SELECT ISNUMERIC('Hello World!')  
-- False  

```

ISNUMERIC example

```
SELECT ISNUMERIC(passenger_count)  
FROM "Samples"."samples.dremio.com"."NYC-taxi-trips"  
LIMIT 1  
-- True  

```

Was this page helpful?
[Previous ISDATE](/reference/sql/sql-functions)[Next IS_BIGINT](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ISDATE](/reference/sql/sql-functions)[Next IS_BIGINT](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FISNUMERIC%2F&_biz_t=1777950638541&_biz_i=ISNUMERIC%20%7C%20Dremio%20Documentation&_biz_n=612&rnd=445064&cdn_o=a&_biz_z=1777950638542)
