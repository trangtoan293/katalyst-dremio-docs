---
url: /reference/sql/sql-functions/functions/ILIKE
slug: /reference/sql/sql-functions/functions/ILIKE
title: "ILIKE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64317.283419625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ILIKE

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# ILIKE
Tests whether an expression matches a pattern. The comparison is case-insensitive.
## Syntax
### ILIKE(_expression_ varchar, _pattern_ varchar) → boolean[​](/reference/sql/sql-functions)
  * expression: The expression to compare.
  * pattern: The pattern that is compared to the expression.


**Examples**
ILIKE example

```
SELECT ILIKE ('pancake', '%Cake')  
-- True  

```

### ILIKE(_expression_ varchar, _pattern_ varchar, _escape_character_ varchar) → boolean[​](/reference/sql/sql-functions)
  * expression: The expression to compare.
  * pattern: The pattern that is compared to the expression.
  * escape_character: Putting _escape_character_ before a wildcard in _pattern_ makes ILIKE treat the wildcard as a regular character when it appears in _expression_.


**Examples**
ILIKE example

```
SELECT ILIKE ('50%_Off', '%50!%%','!')  
-- True  

```

Was this page helpful?
[Previous HOUR](/reference/sql/sql-functions)[Next IMAXDIR](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous HOUR](/reference/sql/sql-functions)[Next IMAXDIR](/reference/sql/sql-functions)
!!
