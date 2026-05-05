---
url: /reference/sql/sql-functions/functions/ENDS_WITH
slug: /reference/sql/sql-functions/functions/ENDS_WITH
title: "ENDS_WITH | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64310.895913708
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ENDS_WITH

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# ENDS_WITH
Returns whether a string ends with another string. The comparison is case-sensitive.
## Syntax
### ENDS_WITH(_expression1_ string, _expression2_ string) → bit[​](/reference/sql/sql-functions)
  * expression1: The input expression to search.
  * expression2: The string to search for in the specified expression.


**Examples**
ENDS_WITH example

```
SELECT IncidntNum, Category, Descript FROM  "Samples"."samples.dremio.com"."SF_incidents2016.json"  
  WHERE ENDS_WITH(Category, 'LAWS')  
  LIMIT 2  
-- IncidntNum, Category, Descript  
-- 120058272, WEAPON LAWS, POSS OF PROHIBITED WEAPON  
-- 120058272, WEAPON LAWS, FIREARM, LOADED, IN VEHICLE  

```

Was this page helpful?
[Previous ENCRYPT](/reference/sql/sql-functions)[Next EXP](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ENCRYPT](/reference/sql/sql-functions)[Next EXP](/reference/sql/sql-functions)
!
