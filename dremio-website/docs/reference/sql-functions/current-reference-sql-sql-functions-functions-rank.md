---
url: /reference/sql/sql-functions/functions/RANK
title: "RANK | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64344.936228
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * RANK

Version: current [26.x]
On this page
**Categories** : [Window](/reference/sql/sql-functions)
# RANK
Returns the rank of the current row within its partition and placement order. Rows that are equal have the same rank. However, the count of tied rows is added to the next rank, instead of being incremented by one. The rank value starts at 1 and increases sequentially.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### RANK() OVER ( [PARTITION BY partition_expression] [ORDER BY order_expression]) → bigint[​](/reference/sql/sql-functions#rank-over--partition-by-partition_expression-order-by-order_expression--bigint "Direct link to RANK\(\) OVER \( \[PARTITION BY partition_expression\] \[ORDER BY order_expression\]\) → bigint")
  * partition_expression (optional): An expression that groups rows into partitions.
  * order_expression: An expression that specifies the order of the rows within each partition.


**Examples**
RANK example

```
SELECT "Category",   
  "Descript",   
  "DayOfWeek",  
  RANK()   
    OVER (  
      PARTITION BY "Category"   
      ORDER BY "DayOfWeek")  
FROM Samples."samples.dremio.com"."SF_incidents2016.json"  
-- Category, Descript, DayOfWeek, EXPR$3  
-- ARSON, ARSON, Friday, 1   
-- ARSON, ARSON, Monday, 40  

```

Was this page helpful?
[Previous RANDOM](/reference/sql/sql-functions)[Next REGEXP_COL_LIKE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous RANDOM](/reference/sql/sql-functions)[Next REGEXP_COL_LIKE](/reference/sql/sql-functions)
