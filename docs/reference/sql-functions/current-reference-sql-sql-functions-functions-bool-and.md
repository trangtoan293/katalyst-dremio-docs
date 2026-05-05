---
url: /reference/sql/sql-functions/functions/BOOL_AND
slug: /reference/sql/sql-functions/functions/BOOL_AND
title: "BOOL_AND | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.531853416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * BOOL_AND

Version: current [26.x]
On this page
**Categories** : [Conditional](/reference/sql/sql-functions)
# BOOL_AND
Computes the boolean AND of two boolean expressions. Returns TRUE if both expressions evaluate to TRUE. Returns FALSE if one or both expression(s) evaluate(s) to FALSE.
## Syntax
### BOOL_AND(_bool_expression1_ boolean, _bool_expression2_ boolean) → boolean[​](/reference/sql/sql-functions)
  * bool_expression1: Boolean input expression.
  * bool_expression2: Boolean input expression.


**Examples**
BOOL_AND example

```
SELECT BOOLEANAND(TRUE, FALSE)  
-- False  

```

Was this page helpful?
[Previous BIT_OR](/reference/sql/sql-functions)[Next BOOL_OR](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous BIT_OR](/reference/sql/sql-functions)[Next BOOL_OR](/reference/sql/sql-functions)
