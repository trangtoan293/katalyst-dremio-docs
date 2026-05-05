---
url: /reference/sql/sql-functions/functions/LEAD
title: "LEAD | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.4575345
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LEAD

Version: current [26.x]
On this page
**Categories** : [Window](/reference/sql/sql-functions)
# LEAD
Returns the row after the current one in the same result set without the need for a self-join. If there are no rows, this function returns `NULL`.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### LEAD(expression, [offset]) OVER ([PARTITION BY partition_expression] [ORDER BY order_expression]) → same as input type[​](/reference/sql/sql-functions#leadexpression-offset-over-partition-by-partition_expression-order-by-order_expression--same-as-input-type "Direct link to LEAD\(expression, \[offset\]\) OVER \(\[PARTITION BY partition_expression\] \[ORDER BY order_expression\]\) → same as input type")
  * expression (optional): An expression that is returned.
  * offset (optional): The number of rows after the current row from which to obtain a value.


**Examples**
LEAD example

```
SELECT "Category",   
  "Descript",   
  "DayOfWeek",  
  LEAD(DayOfWeek, 2)   
    OVER (  
      PARTITION BY "Category"   
      ORDER BY "DayOfWeek")  
FROM Samples."samples.dremio.com"."SF_incidents2016.json"  
-- Category, Descript, DayOfWeek, EXPR$3  
-- ARSON, ARSON, Friday, Wednesday  
-- ARSON, ARSON OF AN INHABITED DWELLING, Friday, null  
-- ARSON, ARSON OF A VEHICLE, Wednesday, null  

```

LEAD example

```
SELECT "Category",   
  "Descript",   
  "DayOfWeek",  
  LEAD(DayOfWeek)   
    OVER (  
      PARTITION BY "Category"   
      ORDER BY "DayOfWeek")  
FROM Samples."samples.dremio.com"."SF_incidents2016.json"  
-- Category, Descript, DayOfWeek, EXPR$3  
-- ARSON, ARSON, Friday, Friday  
-- ARSON, ARSON OF AN INHABITED DWELLING, Friday, Wednesday  
-- ARSON, ARSON OF A VEHICLE, Wednesday, null  

```

Was this page helpful?
[Previous LCASE](/reference/sql/sql-functions)[Next LEAST](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LCASE](/reference/sql/sql-functions)[Next LEAST](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FLEAD%2F&_biz_t=1777950644510&_biz_i=LEAD%20%7C%20Dremio%20Documentation&_biz_n=624&rnd=457204&cdn_o=a&_biz_z=1777950644510)
