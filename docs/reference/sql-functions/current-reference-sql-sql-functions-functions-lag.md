---
url: /reference/sql/sql-functions/functions/LAG
slug: /reference/sql/sql-functions/functions/LAG
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
## Syntax
### LAG(expression, [offset]) OVER ([PARTITION BY partition_expression] [ORDER BY order_expression]) → same as input type[​](/reference/sql/sql-functions) OVER \(\[PARTITION BY partition_expression\] \[ORDER BY order_expression\]\) → same as input type")
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
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous IS__NOT__TRUE](/reference/sql/sql-functions)[Next LAST_DAY](/reference/sql/sql-functions)
!
