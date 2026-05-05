---
url: /reference/sql/sql-functions/functions/CUME_DIST
slug: /reference/sql/sql-functions/functions/CUME_DIST
title: "CUME_DIST | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64302.310313083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CUME_DIST

Version: current [26.x]
On this page
**Categories** : [Window](/reference/sql/sql-functions)
# CUME_DIST
Returns the cumulative distribution of the current row with regard to other values within the same window partition.
## Syntax
### CUME_DIST() OVER ( [PARTITION BY partition_expression] [ORDER BY order_expression]) → double[​](/reference/sql/sql-functions) OVER \( \[PARTITION BY partition_expression\] \[ORDER BY order_expression\]\) → double")
  * partition_expression (optional): An expression that groups rows into partitions.
  * order_expression: An expression that specifies the order of the rows within each partition.


**Examples**
CUME_DIST example

```
SELECT "Category",   
  "Descript",   
  "DayOfWeek",  
  CUME_DIST()   
    OVER (  
      PARTITION BY "Category"   
      ORDER BY "DayOfWeek")  
FROM Samples."samples.dremio.com"."SF_incidents2016.json"  
-- Category, Descript, DayOfWeek, EXPR$3  
-- ARSON, ARSON, Friday, 0.13636363636363635  
-- EMBEZZLEMENT, EMBEZZLED VEHICLE, Friday, 0.18452380952380953  

```

## Usage Notes[​](/reference/sql/sql-functions)
This function does not support cumulative frame windows or sliding frame windows.
Was this page helpful?
[Previous CRC32](/reference/sql/sql-functions)[Next CURRENT_DATE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CRC32](/reference/sql/sql-functions)[Next CURRENT_DATE](/reference/sql/sql-functions)
!!!
