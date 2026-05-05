---
url: /reference/sql/sql-functions/functions/CEILING
slug: /reference/sql/sql-functions/functions/CEILING
title: "CEILING | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.996502083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CEILING

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# CEILING
Returns the nearest equal or larger value of the input expression. Can also be called using CEIL().
## Syntax
### CEILING(_numeric_expression_ NUMERIC) → INTEGER[​](/reference/sql/sql-functions)
  * numeric_expression: The number (DOUBLE, FLOAT, INTEGER) for which you want to compute the ceiling.


**Examples**
CEILING example

```
SELECT CEILING(3.1459)  
-- 4  

```

CEILING example

```
SELECT CEIL(37.775420706711)  
-- 38  

```

CEILING example

```
SELECT CEIL(-37.775420706711)  
-- -37  

```

CEILING example

```
SELECT CEIL(0)  
-- 0  

```

Was this page helpful?
[Previous CBRT](/reference/sql/sql-functions)[Next CHARACTER_LENGTH](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CBRT](/reference/sql/sql-functions)[Next CHARACTER_LENGTH](/reference/sql/sql-functions)
!!
