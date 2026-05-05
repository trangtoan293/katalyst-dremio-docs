---
url: /reference/sql/sql-functions/functions/IS__NOT__TRUE
slug: /reference/sql/sql-functions/functions/IS__NOT__TRUE
title: "IS__NOT__TRUE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.401636833
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * IS__NOT__TRUE

Version: current [26.x]
On this page
**Categories** : [Boolean](/reference/sql/sql-functions), [Datatype](/reference/sql/sql-functions)
# IS [NOT] TRUE
Tests whether the input expression is either true or not true. If true in either case, returns a value of `true`. Alias for the function `ISTRUE`/`ISNOTTRUE`.
## Syntax
### IS [NOT] TRUE(_expression_ int64) → boolean[​](/reference/sql/sql-functions)
  * expression: Input expression.


**Examples**
ISTRUE example

```
SELECT ISTRUE(1)  
-- True  

```

### IS [NOT] TRUE(_expression_ boolean) → boolean[​](/reference/sql/sql-functions)
  * expression: Input expression.


**Examples**
ISTRUE example

```
SELECT ISTRUE(FALSE)  
-- False  

```

### IS [NOT] TRUE(_expression_ int32) → boolean[​](/reference/sql/sql-functions)
  * expression: Input expression.


**Examples**
ISTRUE example

```
SELECT ISTRUE(0)  
-- False  

```

### IS [NOT] TRUE(_expression_ int64) → boolean[​](/reference/sql/sql-functions)
  * expression: Input expression.


**Examples**
ISNOTTRUE example

```
SELECT ISNOTTRUE(1)  
-- False  

```

### IS [NOT] TRUE(_expression_ boolean) → boolean[​](/reference/sql/sql-functions)
  * expression: Input expression.


**Examples**
ISNOTTRUE example

```
SELECT ISNOTTRUE(FALSE)  
-- True  

```

### IS [NOT] TRUE(_expression_ int32) → boolean[​](/reference/sql/sql-functions)
  * expression: Input expression.


**Examples**
ISNOTTRUE example

```
SELECT ISNOTTRUE(0)  
-- True  

```

Was this page helpful?
[Previous IS__NOT__NULL](/reference/sql/sql-functions)[Next LAG](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous IS__NOT__NULL](/reference/sql/sql-functions)[Next LAG](/reference/sql/sql-functions)
!
