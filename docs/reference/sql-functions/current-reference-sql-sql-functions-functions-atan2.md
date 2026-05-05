---
url: /reference/sql/sql-functions/functions/ATAN2
slug: /reference/sql/sql-functions/functions/ATAN2
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
## Syntax
### ATAN2(_y_ NUMERIC, _x_ NUMERIC) → DOUBLE[​](/reference/sql/sql-functions)
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
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ATAN](/reference/sql/sql-functions)[Next AVG](/reference/sql/sql-functions)
!
