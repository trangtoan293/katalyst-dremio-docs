---
url: /reference/sql/sql-functions/functions/DEGREES
title: "DEGREES | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64310.825449416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * DEGREES

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# DEGREES
Converts radians to degrees.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### DEGREES(_numeric_expression_ NUMERIC) → FLOAT[​](/reference/sql/sql-functions#degreesnumeric_expression-numeric--float "Direct link to degreesnumeric_expression-numeric--float")
  * numeric_expression: The number of radians. This must be an DOUBLE, INTEGER, or FLOAT.


**Examples**
DEGREES example

```
SELECT DEGREES(PI())  
-- 180.0  

```

DEGREES example

```
SELECT DEGREES(0)  
-- 0.0  

```

DEGREES example

```
SELECT DEGREES(1)  
-- 57.29577951308232  

```

Was this page helpful?
[Previous DECRYPT](/reference/sql/sql-functions)[Next DENSE_RANK](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DECRYPT](/reference/sql/sql-functions)[Next DENSE_RANK](/reference/sql/sql-functions)
