---
url: /reference/sql/sql-functions/functions/NULLIF
slug: /reference/sql/sql-functions/functions/NULLIF
title: "NULLIF | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64337.976796583
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * NULLIF

Version: current [26.x]
On this page
**Categories** : [Conditional](/reference/sql/sql-functions)
# NULLIF
Compares two expressions. If the values in each expression are equal, returns `NULL` and, if they are not equal, returns the value of the first expression.
## Syntax
### NULLIF(expression1, expression2) → same as input type[​](/reference/sql/sql-functions) → same as input type")
  * expression: The expressions can be any data type, however all the expressions contained in the argument must be of the same type.


**Examples**
NULLIF example

```
SELECT NULLIF(user_id, customer_id)  
-- user_id  

```

Was this page helpful?
[Previous NTILE](/reference/sql/sql-functions)[Next NVL](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous NTILE](/reference/sql/sql-functions)[Next NVL](/reference/sql/sql-functions)
!
