---
url: /reference/sql/sql-functions/functions/MOD
title: "MOD | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64337.86263775
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * MOD

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# MOD
Returns the remainder of the input expression divided by the second input expression.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### MOD(_numeric_expression_ int64, _numeric_expression_ int64) → int64[​](/reference/sql/sql-functions#modnumeric_expression-int64-numeric_expression-int64--int64 "Direct link to modnumeric_expression-int64-numeric_expression-int64--int64")
  * numeric_expression: The first numeric expression.
  * numeric_expression: The second numeric expression.


**Examples**
MOD example

```
SELECT MOD(50, 7)  
-- 1  

```

### MOD(_numeric_expression_ int64, _numeric_expression_ int32) → int32[​](/reference/sql/sql-functions#modnumeric_expression-int64-numeric_expression-int32--int32 "Direct link to modnumeric_expression-int64-numeric_expression-int32--int32")
  * numeric_expression: The first numeric expression.
  * numeric_expression: The second numeric expression.


**Examples**
MOD example

```
SELECT MOD(35, 5)  
-- 0  

```

### MOD(_numeric_expression_ decimal(0,0), _numeric_expression_ decimal(0,0)) → decimal(0,0)[​](/reference/sql/sql-functions#modnumeric_expression-decimal00-numeric_expression-decimal00--decimal00 "Direct link to modnumeric_expression-decimal00-numeric_expression-decimal00--decimal00")
  * numeric_expression: The first numeric expression.
  * numeric_expression: The second numeric expression.


**Examples**
MOD example

```
SELECT MOD(47.6, 5.2)  
-- 0.8  

```

Was this page helpful?
[Previous MINUTE](/reference/sql/sql-functions)[Next MONTH](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MINUTE](/reference/sql/sql-functions)[Next MONTH](/reference/sql/sql-functions)
