---
url: /reference/sql/sql-functions/functions/ATAN2
title: "ATAN2 | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64287.333966375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ATAN2

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# ATAN2
Computes the Arctangent (inverse Tangent) of the ratio of its two arguments.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ATAN2(_y_ NUMERIC, _x_ NUMERIC) → DOUBLE[​](/reference/sql/sql-functions#atan2y-numeric-x-numeric--double "Direct link to atan2y-numeric-x-numeric--double")
  * y: Floating-point input value for the y-coordinate, in the range (negative-infinity:positive-infinity).
  * x: Floating-point input value for the x-coordinate, in the range (negative-infinity:positive-infinity).


**Examples**
ATAN2 example

```
SELECT ATAN2(1.0,0.0)  
-- 1.5707963267948966  

```

ATAN2 example

```
SELECT ATAN2(0.0,1.0)  
-- 0.0  

```

ATAN2 example

```
SELECT ATAN2(0.0,-1.0)  
-- 3.141592653589793  

```

ATAN2 example

```
SELECT ATAN2(-0.00000000001,-1.0)  
-- -3.141592653579793  

```

ATAN2 example

```
SELECT ATAN2(0.0,0.0)  
-- 0.0  

```

Was this page helpful?
[Previous ATAN](/reference/sql/sql-functions)[Next AVG](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ATAN](/reference/sql/sql-functions)[Next AVG](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FATAN2%2F&_biz_t=1777950607180&_biz_i=ATAN2%20%7C%20Dremio%20Documentation&_biz_n=559&rnd=541928&cdn_o=a&_biz_z=1777950607180)
