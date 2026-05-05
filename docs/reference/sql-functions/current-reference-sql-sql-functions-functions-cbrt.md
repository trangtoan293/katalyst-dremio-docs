---
url: /reference/sql/sql-functions/functions/CBRT
slug: /reference/sql/sql-functions/functions/CBRT
title: "CBRT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.944331958
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CBRT

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# CBRT
Computes the cube root of a numeric expression.
## Syntax
### CBRT(_numeric_expression_ NUMERIC) → FLOAT[​](/reference/sql/sql-functions)
  * numeric_expression: The number (DOUBLE, FLOAT, INTEGER) for which you want to compute the cube root.


**Examples**
CBRT example

```
SELECT CBRT(8)  
-- 2.0  

```

CBRT example

```
SELECT CBRT(120)  
-- 4.932424148660941  

```

CBRT example

```
SELECT CBRT(99.5)  
-- 4.633839922986558  

```

Was this page helpful?
[Previous CAST](/reference/sql/sql-functions)[Next CEILING](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CAST](/reference/sql/sql-functions)[Next CEILING](/reference/sql/sql-functions)
!
