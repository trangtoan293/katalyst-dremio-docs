---
url: /reference/sql/commands/analyze-table
slug: /reference/sql/commands/analyze-table
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
## Syntax​
Syntax

```
ANALYZE TABLE <table_name>  
FOR { ALL COLUMNS | COLUMNS  ( <column_name1>, <column_name2>, ... ) }  
{ COMPUTE | DELETE } STATISTICS  

```

## Parameters​
`table_name` String
The path to the table that you want to generate statistics for.
* * *
FOR {'{'})'{'{'})'{'}'}) ALL COLUMNS | COLUMNS ( `column_name1`, `column_name2`, ... ) {'{'})'{'}'}'{'}'} String
The columns that you want to generate statistics for. You can choose to either include all columns or specify one or more columns for the statistics. If you do not specify the columns, Dremio will compute statistics for all the columns contained in the table. If you want to compute statistics for specific columns, you can specify more than one column by separating each one with a comma.
* * *
{'{'})'{'{'})'{'}'}) COMPUTE | DELETE {'{'})'{'}'}'{'}'} STATISTICS String
Choose to either compute or delete statistics for the specified columns in the table.
## Examples​
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
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ALTER VIEW](/reference/sql/commands/alter-view)[Next CREATE PIPE](/reference/sql/commands/create-pipe)
!
