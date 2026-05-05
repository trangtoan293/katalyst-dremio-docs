---
url: /reference/sql/sql-functions/functions/IS_SUBSTR
slug: /reference/sql/sql-functions/functions/IS_SUBSTR
title: "IS_SUBSTR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64323.977286333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * IS_SUBSTR

Version: current [26.x]
On this page
**Categories** : [Boolean](/reference/sql/sql-functions), [Datatype](/reference/sql/sql-functions)
# IS_SUBSTR
Returns `true` if a string is contained within another string. The comparison is case-sensitive.
## Syntax
### IS_SUBSTR(_expression1_ string, _expression2_ string) → boolean[​](/reference/sql/sql-functions)
  * expression1: The input expression to search.
  * expression2: The string to search for in the specified expression.


**Examples**
IS_SUBSTR example

```
SELECT IS_SUBSTR('dremio', 'emi')  
-- True  

```

IS_SUBSTR example

```
SELECT city, IS_SUBSTR(city, 'CUSHMAN') FROM  "Samples"."samples.dremio.com"."zips.json"  
LIMIT 3  
-- city, EXPR$1  
-- AGAWAM, false  
-- CUSHMAN, true  
-- BARRE, false  

```

Was this page helpful?
[Previous IS_MEMBER](/reference/sql/sql-functions)[Next IS_UTF8](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous IS_MEMBER](/reference/sql/sql-functions)[Next IS_UTF8](/reference/sql/sql-functions)
!
