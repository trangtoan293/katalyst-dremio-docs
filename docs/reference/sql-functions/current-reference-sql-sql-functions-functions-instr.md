---
url: /reference/sql/sql-functions/functions/INSTR
slug: /reference/sql/sql-functions/functions/INSTR
title: "INSTR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64317.340920208
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * INSTR

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# INSTR
Returns the position of the first occurrence of a string when it is contained in another string. If no such occurrence is found, a zero is returned. The comparison is case-sensitive.
## Syntax
### INSTR(_expression1_ string, _expression2_ string) → int[​](/reference/sql/sql-functions)
  * expression1: The input expression to search.
  * expression2: The string to search for in the specified expression.


**Examples**
INSTR example

```
SELECT INSTR('Dremio', 'D')  
-- 1  

```

INSTR example

```
SELECT INSTR('Dremio', 'd')  
-- 0  

```

Was this page helpful?
[Previous INITCAP](/reference/sql/sql-functions)[Next ISDATE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous INITCAP](/reference/sql/sql-functions)[Next ISDATE](/reference/sql/sql-functions)
!
