---
url: /reference/sql/sql-functions/functions/RSHIFT
slug: /reference/sql/sql-functions/functions/RSHIFT
title: "RSHIFT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64351.7668655
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * RSHIFT

Version: current [26.x]
On this page
**Categories** : [Bitwise](/reference/sql/sql-functions)
# RSHIFT
Shifts the bits of the numeric expression to the right.
## Syntax
### RSHIFT(_expression1_ int32, _expression2_ int32) → int32[​](/reference/sql/sql-functions)
  * expression1: Integer to shift.
  * expression2: The number of bits to shift by.


**Examples**
RSHIFT example

```
select RSHIFT(1,1)  
-- 0  

```

### RSHIFT(_expression1_ int64, _expression2_ int64) → int64[​](/reference/sql/sql-functions)
  * expression1: Integer to shift.
  * expression2: The number of bits to shift by.


**Examples**
RSHIFT example

```
SELECT RSHIFT(CAST(16 AS BIGINT), CAST(2 AS BIGINT))  
-- 4  

```

Was this page helpful?
[Previous RPAD](/reference/sql/sql-functions)[Next RTRIM](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous RPAD](/reference/sql/sql-functions)[Next RTRIM](/reference/sql/sql-functions)
!
