---
url: /reference/sql/sql-functions/functions/TYPEOF
slug: /reference/sql/sql-functions/functions/TYPEOF
title: "TYPEOF | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.761303125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TYPEOF

Version: current [26.x]
On this page
**Categories** : [Datatype](/reference/sql/sql-functions)
# TYPEOF
Reports the type (in string format) of the input expression.
## Syntax
### TYPEOF(_input_ any) → varchar[​](/reference/sql/sql-functions)
  * input: An expression for which the type is returned.


**Examples**
TYPEOF example

```
SELECT TYPEOF(TRUE)  
-- BIT  

```

TYPEOF example

```
SELECT TYPEOF(100)  
-- INT  

```

TYPEOF example

```
SELECT TYPEOF(98.76)  
-- DECIMAL  

```

TYPEOF example

```
SELECT TYPEOF('2021-09-14')  
-- VARCHAR  

```

Was this page helpful?
[Previous TRY_CONVERT_FROM](/reference/sql/sql-functions)[Next UCASE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TRY_CONVERT_FROM](/reference/sql/sql-functions)[Next UCASE](/reference/sql/sql-functions)
!
