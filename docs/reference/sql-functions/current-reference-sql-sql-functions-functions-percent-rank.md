---
url: /reference/sql/sql-functions/functions/PERCENT_RANK
title: "PERCENT_RANK | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64341.919527166
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * PERCENT_RANK

Version: current [26.x]
On this page
**Categories** : [Window](/reference/sql/sql-functions)
# PERCENT_RANK
Returns the relative rank of the current row in the partition based on the `ORDER BY` clause. The displayed percentage ranges from 0.0 to 1.0.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### PERCENT_RANK() OVER ( [PARTITION BY partition_expression] [ORDER BY order_expression]) → double[​](/reference/sql/sql-functions#percent_rank-over--partition-by-partition_expression-order-by-order_expression--double "Direct link to PERCENT_RANK\(\) OVER \( \[PARTITION BY partition_expression\] \[ORDER BY order_expression\]\) → double")
  * partition_expression (optional): An expression that groups rows into partitions.
  * order_expression: An expression that specifies the order of the rows within each partition.


**Examples**
PERCENT_RANK example

```
SELECT "Category",   
  "Descript",   
  "DayOfWeek",  
  PERCENT_RANK()   
    OVER (  
      PARTITION BY "Category"   
      ORDER BY "DayOfWeek")  
FROM Samples."samples.dremio.com"."SF_incidents2016.json"  
-- Category, Descript, DayOfWeek, EXPR$3  
-- ARSON, ARSON, Friday, 0.0   
-- ARSON, ARSON, Monday, 0.1368421052631579  

```

Was this page helpful?
[Previous PERCENTILE_DISC](/reference/sql/sql-functions)[Next PI](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous PERCENTILE_DISC](/reference/sql/sql-functions)[Next PI](/reference/sql/sql-functions)
