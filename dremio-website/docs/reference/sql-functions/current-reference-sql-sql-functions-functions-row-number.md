---
url: /reference/sql/sql-functions/functions/ROW_NUMBER
title: "ROW_NUMBER | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64352.101027083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ROW_NUMBER

Version: current [26.x]
On this page
**Categories** : [Window](/reference/sql/sql-functions)
# ROW_NUMBER
Returns the row number for the current row based on the ORDER BY clause within each partition.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ROW_NUMBER() OVER ( [PARTITION BY partition_expression] [ORDER BY order_expression]) → bigint[​](/reference/sql/sql-functions#row_number-over--partition-by-partition_expression-order-by-order_expression--bigint "Direct link to ROW_NUMBER\(\) OVER \( \[PARTITION BY partition_expression\] \[ORDER BY order_expression\]\) → bigint")
  * partition_expression (optional): An expression that groups rows into partitions.
  * order_expression (optional): An expression that specifies the order of the rows within each partition.


**Examples**
ROW_NUMBER example

```
SELECT "Category",   
  "Descript",   
  "DayOfWeek",  
  ROW_NUMBER()   
    OVER (  
      PARTITION BY "Category"   
      ORDER BY "DayOfWeek")  
FROM Samples."samples.dremio.com"."SF_incidents2016.json"  
-- Category, Descript, DayOfWeek, EXPR$3  
-- ARSON, ARSON, Friday, 1   
-- ARSON, ARSON, Friday, 2  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
The returned rows are ordered exactly the same with each execution unless identical values are detected in the same partition. Rows containing identical values in the partition and ORDER BY columns receive different row numbers. The order of these row numbers can vary by execution, causing inconsistent query results.
Was this page helpful?
[Previous ROUND](/reference/sql/sql-functions)[Next RPAD](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ROUND](/reference/sql/sql-functions)[Next RPAD](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FROW_NUMBER%2F&_biz_t=1777950671743&_biz_i=ROW_NUMBER%20%7C%20Dremio%20Documentation&_biz_n=674&rnd=796013&cdn_o=a&_biz_z=1777950671743)
