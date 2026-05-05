---
url: /reference/sql/sql-functions/functions/COSH
slug: /reference/sql/sql-functions/functions/COSH
title: "COSH | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64302.259225666
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * COSH

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# COSH
Computes the hyperbolic cosine of a value in radians.
## Syntax
### COSH(_numeric_expression_ NUMERIC) → FLOAT[​](/reference/sql/sql-functions)
  * numeric_expression: The number in radians. This must be DOUBLE, INTEGER, or FLOAT.


**Examples**
COSH example

```
SELECT COSH(0)  
-- 1.0  

```

COSH example

```
SELECT COSH(1.0)  
-- 1.543080634815244  

```

COSH example

```
SELECT COSH(-1)  
-- 1.543080634815244  

```

Was this page helpful?
[Previous COS](/reference/sql/sql-functions)[Next COT](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous COS](/reference/sql/sql-functions)[Next COT](/reference/sql/sql-functions)
!
