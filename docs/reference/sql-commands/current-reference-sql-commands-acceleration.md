---
url: /reference/sql/commands/acceleration
title: "Reflections | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64248.808291666
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * Reflections

Version: current [26.x]
On this page
# Reflections
Reflections can be defined on an existing dataset by using SQL commands.
Syntax

```
ALTER { DATASET | TABLE | VIEW } <dataset_name>       
{ CREATE AGGREGATE REFLECTION <reflection_name> USING  
    { DIMENSIONS ( <column_name1>, <column_name2>, ... )      
    | MEASURES ( <column_name1> ( <aggregation_type>, <column_name2> <aggregation_type> , ... ) )  
    | DIMENSIONS ( <column_name1>, <column_name2>, ... ) MEASURES ( <column_name1> ( <aggregation_type>, <column_name2> <aggregation_type> , ... ) ) }     
    [ PARTITION BY ( [<column_name>|<partition_transform>] [ , ... ] ) ]  
    [ LOCALSORT BY ( <column_name1>, <column_name2>, ... ) ]  
    [ ARROW CACHE ]  
| CREATE EXTERNAL REFLECTION <reflection_name> USING <table_name>  
| CREATE RAW REFLECTION <reflection_name> USING DISPLAY ( <column_name1>, <column_name2>, ...)  
    [ PARTITION BY ( [<column_name>|<partition_transform>] [ , ... ] ) ]  
    [ LOCALSORT BY ( <column_name1>, <column_name2>, ... ) ]  
    [ ARROW CACHE ]  
| DROP REFLECTION <reflection_name>  
| REFRESH Reflections  
| ROUTE Reflections TO { DEFAULT QUEUE | QUEUE { <queue_name> | <queue_uuid> } }  
| { ADD | DROP } PARTITION FIELD { <column_name> | <partition_transform> } }  

```

## Parameters[​](/reference/sql/commands/acceleration#parameters "Direct link to Parameters")
`dataset_name` String
The name of the table or view.
* * *
CREATE AGGREGATE REFLECTION `reflection_name` String
Creates an aggregation Reflection with the specified name.
* * *
DIMENSIONS ( `column_name1`, `column_name2`, ... ) String
The columns to include as dimensions in the Reflection.
* * *
MEASURES ( `column_name1` ( `aggregation_type` ), `column_name2` ( &lt;aggregation_type ), ... ) String
The columns to include as measures in the Reflection, and the type of aggregation to perform on them. The possible types are COUNT, MIN, MAX, SUM, and APPROXIMATE COUNT DISTINCT.
* * *
PARTITION BY ( `column_name1`, `column_name2`, ... ) String Optional
The columns on which to partition the data horizontally in the Reflection.
* * *
LOCALSORT BY ( `column_name1`, `column_name2`, ... ) String Optional
The columns on which to sort the data that is in the Reflection.
* * *
ARROW CACHE Optional
Specifies that you want Dremio to convert data from your Reflection’s Parquet files to the Apache Arrow format when copying that data to executor nodes. Normally, Dremio copies data as-is from the Parquet files to caches on executor nodes, which are nodes that carry out the query plans devised by the query optimizer. Enabling this option can improve query performance even more. However, data in the Apache Arrow format requires more space on the executor nodes than data in the default format. You can use this option with Amazon S3.
* * *
CREATE EXTERNAL REFLECTION `reflection_name` String
Creates an external Reflection with the specified name.
* * *
USING `table_name` String
The path of the derived table to use with the external Reflection.
* * *
CREATE RAW REFLECTION `reflection_name` String
Creates a raw Reflection with the specified name.
* * *
USING DISPLAY ( `column_name1`, `column_name2`, ... ) String
The columns to include in the Reflection.
* * *
PARTITION BY ( `column_name1`, `column_name2`, ... ) String Optional
The columns on which to partition the data horizontally in the Reflection.
* * *
LOCALSORT BY ( `column_name1`, `column_name2`, ... ) String Optional
The columns on which to sort the data that is in the Reflection.
* * *
DROP REFLECTION String Optional
Drops the specified Reflection defined on the table.
* * *
REFRESH Reflections String Optional
For information about the refresh action performed, see [Triggering Refreshes by Using the Reflection API, the Catalog API, or an SQL Command](/acceleration/manual-reflections/refreshing-reflections#triggering-refreshes-by-using-the-reflection-api-the-catalog-api-or-an-sql-command).
* * *
ROUTE Reflections TO {'{'})'{'{'})'{'}'}) DEFAULT QUEUE | QUEUE {'{'})'{'{'})'{'}'}) `queue_name` | `queue_uuid` {'{'})'{'}'}'{'}'} {'{'})'{'}'}'{'}'} String
Specify the queue on which to run jobs that refresh Reflections defined on the dataset. Use either the name or UUID of the queue. If neither a name nor a UUID is specified, the default queue is used. You can also directly specify the default queue. For more information, see [Queue Routing](/admin/workloads/queue-routing).
* * *
{'{'})'{'{'})'{'}'}) ADD | DROP {'{'})'{'}'}'{'}'} PARTITION FIELD {'{'})'{'{'})'{'}'}) `column_name` | `partition_transform` {'{'})'{'}'}'{'}'} String Optional
ADD partitions the table data on the values in a single column or by using one of the partition-transformation functions. DROP drops the partition definition. These are the partition-transformation functions:
  * `identity( `col` )`: Explicitly specified identity transform.
  * `year( `col` )`: Partition by year. The column uses either the TIMESTAMP or DATE data type.
  * `month( `ts_col` )`: Partition by month. The column uses either the TIMESTAMP or DATE data type.
  * `day( `ts_col` )`: Partition by day. The column uses either the TIMESTAMP or DATE data type.
  * `hour( `ts_col` )`: Partition by hour. The column uses either the TIMESTAMP or DATE data type.
  * `bucket( `count`, `col` )`: Partition by hashed value into ``count`` buckets.
  * `truncate( `length`, `col` )`: Partition by truncated value. Strings are truncated to the specified length. Integer and biginteger values are truncated to bins (for example: `truncate(10, i)` produces 0, 10, 20, and so on).


For more information about partitioning Reflections, see [Horizontally Partition Reflections that Have Many Rows](/help-support/well-architected-framework/performance/#horizontally-partition-reflections-that-have-many-rows) and [Partition Reflections to Allow for Partition-Based Incremental Refreshes](/help-support/well-architected-framework/performance/#partition-reflections-to-allow-for-partition-based-incremental-refreshes).
## Setting Reflection Hints[​](/reference/sql/commands/acceleration#setting-reflection-hints "Direct link to Setting Reflection Hints")
You can use Reflection hints to influence the process of determining which Reflections are substituted for tables and views to accelerate queries. For more information, see [Influencing the Choice of Reflections Used to Satisfy Queries](/acceleration/manual-reflections/using-reflection-hints).
Syntax for setting hint for a session

```
ALTER SESSION  
  SET <reflection_hint>=<value>  

```

Example of syntax for setting a hint in a simple query

```
SELECT /*+ <reflection_hint>  */ <column_name1>, <column_name2>  
    FROM <table_name>  

```

## Examples[​](/reference/sql/commands/acceleration#examples "Direct link to Examples")
Create a raw Reflection that sorts customers by last name and partitions them by country

```
ALTER TABLE "@user1"."customers"  
  CREATE RAW REFLECTION customers_by_country USING DISPLAY (id,lastName,firstName,address,country)  
    PARTITION BY (country)  
    LOCALSORT BY (lastName);  

```

Create a raw Reflection that sorts line items by outcomes and partitions them by username

```
ALTER TABLE TAMV2."outcome_category_line_item"  
  CREATE RAW REFLECTION outcome_category_line_item_raw USING DISPLAY (dir0,dir1,queryId,queryText,"start",finish,outcome,username)  
    PARTITION BY (username)  
    LOCALSORT BY (outcome);  

```

Create an aggregation Reflection that counts the cities per state and sorts by state

```
ALTER TABLE Samples."samples.dremio.com"."zips.json"  
  CREATE AGGREGATE REFLECTION per_state USING  
  DIMENSIONS (state) MEASURES (city (COUNT))  
  LOCALSORT BY (state);  

```

Create an aggregation Reflection that counts p1 and p2 as measures in the Reflection

```
ALTER TABLE BI."p1_table"  
  CREATE AGGREGATE REFLECTION p1_table_agg USING  
  DIMENSIONS (c1,c2) MEASURES (p1(count, min), p2(sum, max,approximate count distinct))  
    PARTITION BY (c1)  
    LOCALSORT BY (c2)  
    ARROW CACHE;  

```

Create an external Reflection that maps the workspace view to sales by region

```
ALTER DATASET "myWorkspace"."sales_by_region"  
  CREATE EXTERNAL REFLECTION "external_sales_by_region" USING "mySource"."sales_by_region";  

```

Drop a Reflection

```
ALTER TABLE Samples."samples.dremio.com"."zips.json"  
  DROP REFLECTION per_state;  

```

Refresh Reflections for a given table

```
ALTER TABLE Samples."samples.dremio.com"."zips.json"  
  REFRESH Reflections;  

```

Route Reflections defined on the given datasets to the specified queues

```
ALTER TABLE "Table 1" ROUTE Reflections TO DEFAULT QUEUE;  
ALTER VIEW "View 1" ROUTE Reflections TO QUEUE "QUEUE 1";  
ALTER VIEW "View 3" ROUTE Reflections TO DEFAULT QUEUE;  

```

Was this page helpful?
[Previous Privileges](/reference/sql/commands/rbac)[Next Roles](/reference/sql/commands/roles)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Privileges](/reference/sql/commands/rbac)[Next Roles](/reference/sql/commands/roles)
