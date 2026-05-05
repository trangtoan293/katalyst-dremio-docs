---
url: /reference/sql/commands/analyze-table
title: "ANALYZE TABLE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64250.437448791
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * ANALYZE TABLE

Version: current [26.x]
On this page
# ANALYZE TABLE
Compute and delete statistics for tables, including estimated number of distinct values, number of rows, and number of null values.
After statistics have been computed, you may use them with Dremio's Query Planner tool by enabling the `planner.use_statistics` option.
## Syntax[​](/reference/sql/commands/analyze-table#syntax "Direct link to Syntax")
Syntax

```
ANALYZE TABLE <table_name>  
FOR { ALL COLUMNS | COLUMNS  ( <column_name1>, <column_name2>, ... ) }  
{ COMPUTE | DELETE } STATISTICS  

```

## Parameters[​](/reference/sql/commands/analyze-table#parameters "Direct link to Parameters")
`table_name` String
The path to the table that you want to generate statistics for.
* * *
FOR {'{'})'{'{'})'{'}'}) ALL COLUMNS | COLUMNS ( `column_name1`, `column_name2`, ... ) {'{'})'{'}'}'{'}'} String
The columns that you want to generate statistics for. You can choose to either include all columns or specify one or more columns for the statistics. If you do not specify the columns, Dremio will compute statistics for all the columns contained in the table. If you want to compute statistics for specific columns, you can specify more than one column by separating each one with a comma.
* * *
{'{'})'{'{'})'{'}'}) COMPUTE | DELETE {'{'})'{'}'}'{'}'} STATISTICS String
Choose to either compute or delete statistics for the specified columns in the table.
## Examples[​](/reference/sql/commands/analyze-table#examples "Direct link to Examples")
Analyze specific column of a table

```
ANALYZE TABLE      reporting.test_table  
FOR COLUMNS        (a)  
COMPUTE STATISTICS;  
  

```

Analyze multiple columns of a table

```
ANALYZE TABLE      reporting.test_table  
FOR COLUMNS        (a,  
                    b)  
COMPUTE STATISTICS;  

```

Was this page helpful?
[Previous ALTER VIEW](/reference/sql/commands/alter-view)[Next CREATE PIPE](/reference/sql/commands/create-pipe)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ALTER VIEW](/reference/sql/commands/alter-view)[Next CREATE PIPE](/reference/sql/commands/create-pipe)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fanalyze-table%2F&_biz_t=1777950570512&_biz_i=ANALYZE%20TABLE%20%7C%20Dremio%20Documentation&_biz_n=486&rnd=268537&cdn_o=a&_biz_z=1777950570513)
