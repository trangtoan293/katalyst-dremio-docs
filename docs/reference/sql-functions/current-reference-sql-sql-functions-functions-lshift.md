---
url: /reference/sql/sql-functions/functions/LSHIFT
slug: /reference/sql/sql-functions/functions/LSHIFT
title: "LSHIFT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64331.252248166
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LSHIFT

Version: current [26.x]
On this page
**Categories** : [Bitwise](/reference/sql/sql-functions)
# LSHIFT
Shifts the bits of the numeric expression to the left.
## Syntax
### LSHIFT(_expression1_ int32, _expression2_ int32) → int32[​](/reference/sql/sql-functions)
  * expression1: Integer to shift.
  * expression2: The number of bits to shift by.


**Examples**
LSHIFT example

```
SELECT LSHIFT(1, 120)  
-- 16777216  

```

LSHIFT example

```
SELECT LSHIFT(16, 1)  
-- 32  

```

### LSHIFT(_expression1_ int64, _expression2_ int64) → int64[​](/reference/sql/sql-functions)
  * expression1: Integer to shift.
  * expression2: The number of bits to shift by.


**Examples**
LSHIFT example

```
SELECT LSHIFT(1, 120)  
-- 16777216  

```

LSHIFT example

```
SELECT LSHIFT(16, 1)  
-- 32  

```

Was this page helpful?
[Previous LPAD](/reference/sql/sql-functions)[Next LTRIM](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LPAD](/reference/sql/sql-functions)[Next LTRIM](/reference/sql/sql-functions)
!
