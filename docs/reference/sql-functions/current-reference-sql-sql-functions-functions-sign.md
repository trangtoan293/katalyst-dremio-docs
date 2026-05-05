---
url: /reference/sql/sql-functions/functions/SIGN
slug: /reference/sql/sql-functions/functions/SIGN
title: "SIGN | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64351.970235041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SIGN

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# SIGN
Returns the sign of the input expression.
## Syntax
### SIGN(_numeric_expression_ double) → int[​](/reference/sql/sql-functions)
  * numeric_expression: Input expression.


**Examples**
SIGN example

```
SELECT SIGN(10.3)  
-- 1  

```

### SIGN(_numeric_expression_ int32) → int32[​](/reference/sql/sql-functions)
  * numeric_expression: Input expression.


**Examples**
SIGN example

```
SELECT SIGN(-5)  
-- -1  

```

### SIGN(_numeric_expression_ int64) → int64[​](/reference/sql/sql-functions)
  * numeric_expression: Input expression.


**Examples**
SIGN example

```
SELECT SIGN(24)  
-- 1  

```

### SIGN(_numeric_expression_ float) → int[​](/reference/sql/sql-functions)
  * numeric_expression: Input expression.


**Examples**
SIGN example

```
SELECT SIGN(0.0)  
-- 0  

```

## Usage Notes[​](/reference/sql/sql-functions)
1 is returned if the input expression is positive. -1 is returned if the input expression is negative. 0 is returned if the input expression is 0.
Was this page helpful?
[Previous SHA__SHA1](/reference/sql/sql-functions)[Next SIMILAR_TO](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SHA__SHA1](/reference/sql/sql-functions)[Next SIMILAR_TO](/reference/sql/sql-functions)
!
