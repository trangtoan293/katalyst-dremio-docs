---
url: /reference/sql/sql-functions/functions/BOOL_OR
slug: /reference/sql/sql-functions/functions/BOOL_OR
title: "BOOL_OR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.733458833
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * BOOL_OR

Version: current [26.x]
On this page
**Categories** : [Conditional](/reference/sql/sql-functions)
# BOOL_OR
Computes the boolean OR of two boolean expressions. Returns TRUE if one or both expressions evaluate to TRUE. Returns FALSE if both expressions evaluate to FALSE.
## Syntax
### BOOL_OR(_bool_expression1_ boolean, _bool_expression2_ boolean) → boolean[​](/reference/sql/sql-functions)
  * bool_expression1: Boolean input expression.
  * bool_expression2: Boolean input expression.


**Examples**
BOOL_OR example

```
SELECT BOOLEANOR(TRUE, FALSE)  
-- True  

```

Was this page helpful?
[Previous BOOL_AND](/reference/sql/sql-functions)[Next BROUND](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous BOOL_AND](/reference/sql/sql-functions)[Next BROUND](/reference/sql/sql-functions)
!
