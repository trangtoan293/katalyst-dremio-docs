---
url: /reference/sql/sql-functions/functions/NTILE
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### NTILE(buckets) OVER (PARTITION BY partition_expression ORDER BY order_expression) → int[​](/reference/sql/sql-functions#ntilebuckets-over-partition-by-partition_expression-order-by-order_expression--int "Direct link to NTILE\(buckets\) OVER \(PARTITION BY partition_expression ORDER BY order_expression\) → int")
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous NOW](/reference/sql/sql-functions)[Next NULLIF](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FNTILE%2F&_biz_t=1777950658518&_biz_i=NTILE%20%7C%20Dremio%20Documentation&_biz_n=655&rnd=778328&cdn_o=a&_biz_z=1777950658518)
