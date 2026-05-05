---
url: /reference/sql/sql-functions/functions/ACOS
slug: /reference/sql/sql-functions/functions/ACOS
title: "ACOS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64271.837687166
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ACOS

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# ACOS
Computes the arccosine (inverse cosine) of a value in radians.
## Syntax
### ACOS(_numeric_expression_ NUMERIC) → FLOAT[​](/reference/sql/sql-functions)
  * numeric_expression: The number in radians. This must be DOUBLE, INTEGER, BIGINT, DECIMAL, or FLOAT.


**Examples**
ACOS example

```
SELECT ACOS(0)  
-- 1.5707963267948966  

```

ACOS example

```
SELECT ACOS(1.0)  
-- 0.0  

```

ACOS example

```
SELECT ACOS(-1)  
-- 3.141592653589793  

```

Was this page helpful?
[Previous ABS](/reference/sql/sql-functions)[Next AES_DECRYPT](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ABS](/reference/sql/sql-functions)[Next AES_DECRYPT](/reference/sql/sql-functions)
!
