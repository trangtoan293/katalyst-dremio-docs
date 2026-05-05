---
url: /reference/sql/sql-functions/functions/NVL
slug: /reference/sql/sql-functions/functions/NVL
title: "NVL | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64338.382288458
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * NVL

Version: current [26.x]
On this page
**Categories** : [Conditional](/reference/sql/sql-functions)
# NVL
Returns the value of the first expression, if it is not `NULL`. Otherwise, returns the value of the second expression.
## Syntax
### NVL(expression1, expression2) → same as input type[​](/reference/sql/sql-functions) → same as input type")
  * expression1: The expression can be any data type, however, both expressions contained in the argument must be of the same type.
  * expression2: The expression can be any data type, however, both expressions contained in the argument must be of the same type.


**Examples**
NVL example

```
SELECT NVL(NULL, 2)  
-- 2  

```

NVL example

```
SELECT NVL(5, 2)  
-- 5  

```

Was this page helpful?
[Previous NULLIF](/reference/sql/sql-functions)[Next OCTET_LENGTH](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous NULLIF](/reference/sql/sql-functions)[Next OCTET_LENGTH](/reference/sql/sql-functions)
!
