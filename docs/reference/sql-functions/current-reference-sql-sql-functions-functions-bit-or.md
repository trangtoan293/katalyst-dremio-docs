---
url: /reference/sql/sql-functions/functions/BIT_OR
slug: /reference/sql/sql-functions/functions/BIT_OR
title: "BIT_OR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.468627333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * BIT_OR

Version: current [26.x]
On this page
**Categories** : [Bitwise](/reference/sql/sql-functions), [Aggregate](/reference/sql/sql-functions)
# BIT_OR
Returns the bitwise `OR` of non-NULL input values.
## Syntax
### BIT_OR(_expression_ int) → int[​](/reference/sql/sql-functions)
  * expression: An expression that evaluates to a data type that can be cast as an integer.


**Examples**
BIT_OR example

```
SELECT BIT_OR(passenger_count)  
  FROM Samples."samples.dremio.com"."NYC-taxi-trips"  
-- 255  

```

BIT_OR example

```
SELECT total_amount,   
  BIT_OR(passenger_count)  
FROM Samples."samples.dremio.com"."NYC-taxi-trips"  
GROUP BY total_amount  
-- total_amount, EXPR$1  
-- 29.0, 7  
-- 5.5, 15  

```

## Usage Notes[​](/reference/sql/sql-functions)
If no rows match, returns a value with all bits set to 0. NULL values have no effect on the result unless all results are NULL, which is treated as no match.
Was this page helpful?
[Previous BIT_LENGTH](/reference/sql/sql-functions)[Next BOOL_AND](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous BIT_LENGTH](/reference/sql/sql-functions)[Next BOOL_AND](/reference/sql/sql-functions)
