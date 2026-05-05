---
url: /reference/sql/sql-functions/functions/ASIN
slug: /reference/sql/sql-functions/functions/ASIN
title: "ASIN | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64286.877804041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ASIN

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# ASIN
Computes the arcsine (inverse sine) of a value in radians.
## Syntax
### ASIN(_numeric_expression_ NUMERIC) → FLOAT[​](/reference/sql/sql-functions)
  * numeric_expression: The number in radians. This must be DOUBLE, INTEGER, or FLOAT.


**Examples**
ASIN example

```
SELECT ASIN(0)  
-- 0.0  

```

ASIN example

```
SELECT ASIN(1)  
-- 1.5707963267948966  

```

ASIN example

```
SELECT ASIN(-1)  
-- -1.5707963267948966  

```

Was this page helpful?
[Previous ASCII](/reference/sql/sql-functions)[Next ATAN](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ASCII](/reference/sql/sql-functions)[Next ATAN](/reference/sql/sql-functions)
!
