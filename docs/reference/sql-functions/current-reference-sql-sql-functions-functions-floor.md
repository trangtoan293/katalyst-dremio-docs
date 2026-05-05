---
url: /reference/sql/sql-functions/functions/FLOOR
slug: /reference/sql/sql-functions/functions/FLOOR
title: "FLOOR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64317.047011875
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * FLOOR

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# FLOOR
Returns the value from the specified expression rounded to the nearest equal or smaller integer.
## Syntax
### FLOOR(_numeric_expression_ NUMERIC) → INTEGER[​](/reference/sql/sql-functions)
  * numeric_expression: The number (DOUBLE, FLOAT, INTEGER) for which you want to compute the floor.


**Examples**
FLOOR example

```
SELECT FLOOR(0)  
-- 0  

```

FLOOR example

```
SELECT FLOOR(45.76)  
-- 45  

```

FLOOR example

```
SELECT FLOOR(-1.3)  
-- -2  

```

Was this page helpful?
[Previous FLATTEN](/reference/sql/sql-functions)[Next FROM_HEX](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous FLATTEN](/reference/sql/sql-functions)[Next FROM_HEX](/reference/sql/sql-functions)
!
