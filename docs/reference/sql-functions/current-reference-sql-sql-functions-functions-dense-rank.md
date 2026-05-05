---
url: /reference/sql/sql-functions/functions/DENSE_RANK
title: "DENSE_RANK | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64310.78001775
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * DENSE_RANK

Version: current [26.x]
On this page
**Categories** : [Window](/reference/sql/sql-functions)
# DENSE_RANK
Returns the rank of the current row within its partition and ordering. Rows that are equal will have the same rank.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### DENSE_RANK() OVER ( [PARTITION BY partition_expression] [ORDER BY order_expression]) → bigint[​](/reference/sql/sql-functions#dense_rank-over--partition-by-partition_expression-order-by-order_expression--bigint "Direct link to DENSE_RANK\(\) OVER \( \[PARTITION BY partition_expression\] \[ORDER BY order_expression\]\) → bigint")
  * partition_expression (optional): An expression that groups rows into partitions.
  * order_expression: An expression that specifies the order of the rows within each partition.


**Examples**
DENSE_RANK example

```
SELECT "Category",   
  "Descript",   
  "DayOfWeek",  
  DENSE_RANK()   
    OVER (  
      PARTITION BY "Category"   
      ORDER BY "DayOfWeek")  
FROM Samples."samples.dremio.com"."SF_incidents2016.json"  
-- Category, Descript, DayOfWeek, EXPR$3  
-- ARSON, ARSON, Friday, 1  
-- ARSON, ARSON, Monday, 2  

```

Was this page helpful?
[Previous DEGREES](/reference/sql/sql-functions)[Next E](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DEGREES](/reference/sql/sql-functions)[Next E](/reference/sql/sql-functions)
