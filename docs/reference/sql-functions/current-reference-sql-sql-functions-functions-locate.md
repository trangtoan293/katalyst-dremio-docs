---
url: /reference/sql/sql-functions/functions/LOCATE
slug: /reference/sql/sql-functions/functions/LOCATE
title: "LOCATE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64330.857145916
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LOCATE

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# LOCATE
Searches for the first occurrence of the first argument in the second argument and if found, returns the position of the first argument in the second argument. The first character in a string is position 1. Returns 0 if the substring isn't found in the expression.
## Syntax
### LOCATE(_substring_ varchar, _expression_ varchar [, _start_ int32]) → int32[​](/reference/sql/sql-functions)
  * substring: Substring to search for in the expression.
  * expression: The input expression to search.
  * start (optional): Position to start the search from.


**Examples**
LOCATE example

```
SELECT LOCATE('no','banana')  
-- 0  

```

LOCATE example

```
SELECT LOCATE('an','banana')  
-- 2  

```

LOCATE example

```
SELECT LOCATE('an','banana', 3)  
-- 4  

```

Was this page helpful?
[Previous LOCALTIMESTAMP](/reference/sql/sql-functions)[Next LOG](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LOCALTIMESTAMP](/reference/sql/sql-functions)[Next LOG](/reference/sql/sql-functions)
!!
