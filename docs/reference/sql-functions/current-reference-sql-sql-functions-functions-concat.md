---
url: /reference/sql/sql-functions/functions/CONCAT
slug: /reference/sql/sql-functions/functions/CONCAT
title: "CONCAT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.843767041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CONCAT

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# CONCAT
Concatenates two or more strings. `NULL` values are ignored.
## Syntax
### CONCAT(_expression1_ string [, _expression2_ string] [, _expressionN_ string]) → string[​](/reference/sql/sql-functions)
  * expression1: First string expression.
  * expression2 (optional): Second string expression.
  * expressionN (optional): Nth string expression.


**Examples**
CONCAT example

```
SELECT CONCAT('CON', 'CAT')  
-- CONCAT  

```

CONCAT example

```
SELECT CONCAT('con', 'cat', NULL)  
-- concat  

```

Was this page helpful?
[Previous COL_LIKE](/reference/sql/sql-functions)[Next CONCAT_WS](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous COL_LIKE](/reference/sql/sql-functions)[Next CONCAT_WS](/reference/sql/sql-functions)
!
