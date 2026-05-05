---
url: /reference/sql/sql-functions/functions/IS__NOT__NULL
slug: /reference/sql/sql-functions/functions/IS__NOT__NULL
title: "IS__NOT__NULL | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.374740791
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * IS__NOT__NULL

Version: current [26.x]
On this page
**Categories** : [Boolean](/reference/sql/sql-functions), [Datatype](/reference/sql/sql-functions)
# IS [NOT] NULL
Determines if an expression is `NULL` or not `NULL`. Alias for the function `ISNULL`/`ISNOTNULL`.
## Syntax
### IS [NOT] NULL(_expression_ any) → boolean[​](/reference/sql/sql-functions)
  * expression: Expression of any Dremio supported data type to evaluate.


**Examples**
ISNULL function returns true if expression is NULL, and false otherwise.

```
SELECT ISNULL('dremio')  
-- False  

```

ISNULL operator returns true if expression is NULL, and false otherwise.

```
SELECT 'dremio' IS NULL  
-- False  

```

### IS [NOT] NULL(_expression_ any) → boolean[​](/reference/sql/sql-functions)
  * expression: Expression of any Dremio supported data type to evaluate.


**Examples**
ISNOTNULL function returns true if expression is not NULL, and false otherwise.

```
SELECT ISNOTNULL('dremio')  
-- True  

```

ISNOTNULL operator returns true if expression is not NULL, and false otherwise.

```
SELECT 'dremio' IS NOT NULL  
-- False  

```

Was this page helpful?
[Previous IS__NOT__FALSE](/reference/sql/sql-functions)[Next IS__NOT__TRUE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous IS__NOT__FALSE](/reference/sql/sql-functions)[Next IS__NOT__TRUE](/reference/sql/sql-functions)
!
