---
url: /reference/sql/sql-functions/functions/ABS
slug: /reference/sql/sql-functions/functions/ABS
title: "ABS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64272.07201725
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ABS

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# ABS
Computes the absolute value of a numeric expression.
## Syntax
### ABS(_numeric_expression_ NUMERIC) → NUMERIC[​](/reference/sql/sql-functions)
  * numeric_expression: BINARY, DECIMAL, DOUBLE, FLOAT, INTEGER


**Examples**
ABS example

```
SELECT ABS(0.0)  
-- 0.0  

```

ABS example

```
SELECT ABS(-2)  
-- 2  

```

ABS example

```
SELECT ABS(NULL)  
-- null  

```

Was this page helpful?
[Previous Window](/reference/sql/sql-functions)[Next ACOS](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Window](/reference/sql/sql-functions)[Next ACOS](/reference/sql/sql-functions)
!!
