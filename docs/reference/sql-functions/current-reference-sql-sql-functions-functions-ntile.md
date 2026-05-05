---
url: /reference/sql/sql-functions/functions/NTILE
slug: /reference/sql/sql-functions/functions/NTILE
title: "NTILE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64338.357355333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * NTILE

Version: current [26.x]
On this page
**Categories** : [Window](/reference/sql/sql-functions)
# NTILE
Equally splits the rows in each partition into ranked parts specified by the integer value and starting from 1. This function requires the `ORDER BY` clause.
## Syntax
### NTILE(buckets) OVER (PARTITION BY partition_expression ORDER BY order_expression) → int[​](/reference/sql/sql-functions) OVER \(PARTITION BY partition_expression ORDER BY order_expression\) → int")
  * buckets: A positive integer literal.
  * partition_expression (optional): An expression that groups rows into partitions.
  * order_expression: An expression that specifies the order of the rows within each partition.


**Examples**
NTILE example

```
SELECT "Category",   
  "Descript",   
  "DayOfWeek",  
  NTILE(1)   
    OVER (  
      PARTITION BY "Category"   
      ORDER BY "DayOfWeek")  
FROM Samples."samples.dremio.com"."SF_incidents2016.json"  
-- Category, Descript, DayOfWeek, EXPR$3  
-- ARSON, ARSON, Friday, 1   
-- EMBEZZLEMENT, EMBEZZLED VEHICLE, Friday, 1  

```

Was this page helpful?
[Previous NOW](/reference/sql/sql-functions)[Next NULLIF](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous NOW](/reference/sql/sql-functions)[Next NULLIF](/reference/sql/sql-functions)
!
