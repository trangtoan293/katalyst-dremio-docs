---
url: /reference/sql/sql-functions/functions/COALESCE
slug: /reference/sql/sql-functions/functions/COALESCE
title: "COALESCE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64295.061432333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * COALESCE

Version: current [26.x]
On this page
**Categories** : [Conditional](/reference/sql/sql-functions)
# COALESCE
Evaluates the arguments in order and returns the value of the first expression that does not contain `NULL`.
## Syntax
### COALESCE(expression1, expression2, [ ..., expressionN ]) → same as input type[​](/reference/sql/sql-functions) → same as input type")
  * expression: A combination of symbols and operators that the database evaluates to obtain a single data value. Expressions can be a single constant, variable, column, or scalar function.


**Examples**
COALESCE example

```
SELECT COALESCE(address1, address2, city, state, zipCode)  
FROM customers  
-- 123 Main Street  

```

## Usage Notes[​](/reference/sql/sql-functions)
All arguments in the `SELECT` statement must have the same data type. Requires a minimum of two arguments, but there is no set maximum limit.
Was this page helpful?
[Previous CHR](/reference/sql/sql-functions)[Next COL_LIKE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CHR](/reference/sql/sql-functions)[Next COL_LIKE](/reference/sql/sql-functions)
!
