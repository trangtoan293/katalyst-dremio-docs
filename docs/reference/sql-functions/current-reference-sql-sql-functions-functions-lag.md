---
url: /reference/sql/sql-functions/functions/LAG
title: "LAG | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.354119958
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LAG

Version: current [26.x]
On this page
**Categories** : [Window](/reference/sql/sql-functions)
# LAG
Returns the row before the current one in a partition based on the `ORDER BY` clause without the need for a self-join. If there are no rows, this function returns `NULL`.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### LAG(expression, [offset]) OVER ([PARTITION BY partition_expression] [ORDER BY order_expression]) → same as input type[​](/reference/sql/sql-functions#lagexpression-offset-over-partition-by-partition_expression-order-by-order_expression--same-as-input-type "Direct link to LAG\(expression, \[offset\]\) OVER \(\[PARTITION BY partition_expression\] \[ORDER BY order_expression\]\) → same as input type")
  * expression (optional): An expression that is returned.
  * offset (optional): The number of rows before the current row from which to obtain a value.


**Examples**
LAG example

```
SELECT "Category",   
  "Descript",   
  "DayOfWeek",  
  LAG(DayOfWeek, 3)   
    OVER (  
      PARTITION BY "Category"   
      ORDER BY "DayOfWeek")  
FROM Samples."samples.dremio.com"."SF_incidents2016.json"  
-- Category, Descript, DayOfWeek, EXPR$3  
-- ARSON, ARSON, Friday, null  
-- ARSON, ARSON, Friday, null  
-- ARSON, ARSON OF AN INHABITED DWELLING, Friday, null  
-- ARSON, ARSON, Friday, Friday  

```

LAG example

```
SELECT "Category",   
  "Descript",   
  "DayOfWeek",  
  LAG(DayOfWeek)   
    OVER (  
      PARTITION BY "Category"   
      ORDER BY "DayOfWeek")  
FROM Samples."samples.dremio.com"."SF_incidents2016.json"  
-- Category, Descript, DayOfWeek, EXPR$3  
-- ARSON, ARSON, Friday, null  
-- ARSON, ARSON, Friday, Friday  

```

Was this page helpful?
[Previous IS__NOT__TRUE](/reference/sql/sql-functions)[Next LAST_DAY](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous IS__NOT__TRUE](/reference/sql/sql-functions)[Next LAST_DAY](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FLAG%2F&_biz_t=1777950644164&_biz_i=LAG%20%7C%20Dremio%20Documentation&_biz_n=621&rnd=144550&cdn_o=a&_biz_z=1777950644164)
