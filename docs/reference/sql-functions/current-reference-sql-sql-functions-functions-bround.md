---
url: /reference/sql/sql-functions/functions/BROUND
slug: /reference/sql/sql-functions/functions/BROUND
title: "BROUND | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.576486583
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * BROUND

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# BROUND
Returns the rounded result of the numeric expression using `HALF_EVEN` rounding mode.
## Syntax
### BROUND(_numeric_expression_ double) → float8[​](/reference/sql/sql-functions)
  * numeric_expression: A numeric expression.


**Examples**
BROUND example

```
SELECT BROUND(50.2), BROUND(50.5), BROUND(50.55), BROUND(-50)  
-- 50.0, 50.0, 51.0, -50.0  

```

Was this page helpful?
[Previous BOOL_OR](/reference/sql/sql-functions)[Next BTRIM](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous BOOL_OR](/reference/sql/sql-functions)[Next BTRIM](/reference/sql/sql-functions)
!
