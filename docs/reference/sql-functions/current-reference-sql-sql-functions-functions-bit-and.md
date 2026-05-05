---
url: /reference/sql/sql-functions/functions/BIT_AND
title: "BIT_AND | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.500277916
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * BIT_AND

Version: current [26.x]
On this page
**Categories** : [Bitwise](/reference/sql/sql-functions), [Aggregate](/reference/sql/sql-functions)
# BIT_AND
Returns the bitwise `AND` of non-NULL input values.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### BIT_AND(_expression_ int) → int[​](/reference/sql/sql-functions#bit_andexpression-int--int "Direct link to bit_andexpression-int--int")
  * expression: An expression that evaluates to a data type that can be cast as an integer.


**Examples**
BIT_AND example

```
SELECT BIT_AND(passenger_count)  
  FROM Samples."samples.dremio.com"."NYC-taxi-trips"  
-- 0  

```

BIT_AND example

```
SELECT total_amount,   
  BIT_AND(passenger_count)  
FROM Samples."samples.dremio.com"."NYC-taxi-trips"  
GROUP BY total_amount  
-- total_amount, EXPR$1  
-- 21.5, 0  
-- 19.1, 0  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
If no rows match, returns a value with all bits set to 1. `NULL` values have no effect on the result unless all results are `NULL`, which is treated as no match.
Was this page helpful?
[Previous BITWISE_XOR](/reference/sql/sql-functions)[Next BIT_LENGTH](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous BITWISE_XOR](/reference/sql/sql-functions)[Next BIT_LENGTH](/reference/sql/sql-functions)
