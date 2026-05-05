---
url: /reference/sql/sql-functions/functions/LTRIM
slug: /reference/sql/sql-functions/functions/LTRIM
title: "LTRIM | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64331.093058
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LTRIM

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# LTRIM
Removes leading spaces or characters from a string.
## Syntax
### LTRIM(_expression_ varchar, _trim_expression_ varchar) → varchar[​](/reference/sql/sql-functions)
  * expression: The expression to be trimmed.
  * trim_expression: Leading characters to trim. If this parameter is not specified, then spaces will be trimmed from the input expression.


**Examples**
LTRIM example

```
SELECT LTRIM('   dremio')  
-- dremio  

```

LTRIM example

```
SELECT LTRIM('xxDremioxxx', 'x')  
-- Dremioxxx  

```

LTRIM example

```
SELECT LTRIM('pancake', 'panc')  
-- ke  

```

Was this page helpful?
[Previous LSHIFT](/reference/sql/sql-functions)[Next MAP_KEYS](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LSHIFT](/reference/sql/sql-functions)[Next MAP_KEYS](/reference/sql/sql-functions)
!
