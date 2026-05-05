---
url: /reference/sql/sql-functions/functions/COT
slug: /reference/sql/sql-functions/functions/COT
title: "COT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64302.943537333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * COT

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# COT
Computes the cotangent of a value in radians.
## Syntax
### COT(_numeric_expression_ NUMERIC) → FLOAT[​](/reference/sql/sql-functions)
  * numeric_expression: The number in radians. This must be DOUBLE, INTEGER, or FLOAT.


**Examples**
COT example

```
SELECT COT(0)  
-- 1.0  

```

COT example

```
SELECT COT(1.0)  
-- 0.5403023058681398  

```

COT example

```
SELECT COT(-1)  
-- 0.5403023058681398  

```

Was this page helpful?
[Previous COSH](/reference/sql/sql-functions)[Next COUNT](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous COSH](/reference/sql/sql-functions)[Next COUNT](/reference/sql/sql-functions)
!!
