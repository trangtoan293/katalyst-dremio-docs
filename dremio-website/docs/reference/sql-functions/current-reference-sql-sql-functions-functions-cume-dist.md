---
url: /reference/sql/sql-functions/functions/CUME_DIST
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### CUME_DIST() OVER ( [PARTITION BY partition_expression] [ORDER BY order_expression]) → double[​](/reference/sql/sql-functions#cume_dist-over--partition-by-partition_expression-order-by-order_expression--double "Direct link to CUME_DIST\(\) OVER \( \[PARTITION BY partition_expression\] \[ORDER BY order_expression\]\) → double")
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

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
This function does not support cumulative frame windows or sliding frame windows.
Was this page helpful?
[Previous CRC32](/reference/sql/sql-functions)[Next CURRENT_DATE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CRC32](/reference/sql/sql-functions)[Next CURRENT_DATE](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCOS%2F&_biz_t=1777950621868&_biz_i=COS%20%7C%20Dremio%20Documentation&_biz_n=586&rnd=453275&cdn_o=a&_biz_z=1777950621946)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCOT%2F&_biz_t=1777950621909&_biz_i=Dremio%20Documentation&_biz_n=587&rnd=809107&cdn_o=a&_biz_z=1777950621946)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCUME_DIST%2F&_biz_t=1777950621946&_biz_i=CUME_DIST%20%7C%20Dremio%20Documentation&_biz_n=588&rnd=104401&cdn_o=a&_biz_z=1777950621946)
