---
url: /reference/sql/commands/alter-view
title: "ALTER VIEW | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64250.658178291
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * ALTER VIEW

Version: current [26.x]
On this page
# ALTER VIEW
Change an existing view.
Syntax

```
ALTER VIEW <view_name>  
  [ AT { REF[ERENCE] | BRANCH } <reference_name> ]  
  { REFRESH METADATA  
    [ FOR PARTITIONS ( <partition_name> = '<value>') ]  
        [ { AVOID | AUTO } PROMOTION ]  
        [ { FORCE | LAZY } UPDATE ]  
        [ { MAINTAIN | DELETE } WHEN MISSING ]  
  | CREATE EXTERNAL REFLECTION <reflection_name> USING <view_name>  
  | CREATE AGGREGATE REFLECTION <reflection_name> USING    
    { DIMENSIONS ( <column_name1>, <column_name2>, ... )  
    | MEASURES ( <column_name1> ( <aggregation_type>, <column_name2> <aggregation_type> , ... ) )  
    | DIMENSIONS ( <column_name1>, <column_name2>, ... ) MEASURES ( <column_name1> ( <aggregation_type>, <column_name2> <aggregation_type> , ... ) ) }  
    [ PARTITION BY ( <column_name1>, <column_name2>, ... ) ]  
    [ LOCALSORT BY ( <column_name1>, <column_name2>, ... ) ]  
  | CREATE RAW REFLECTION <reflection_name> USING DISPLAY ( <column_name1>, <column_name2>, ...)  
    [ PARTITION BY ( <column_name1>, <column_name2>, ... ) ]  
    [ LOCALSORT BY ( <column_name1>, <column_name2>, ... ) ]  
  | DROP REFLECTION <reflection_name>  
  | REFRESH REFLECTIONS  
  | ROUTE REFLECTIONS TO { DEFAULT QUEUE | QUEUE { <queue_name> | <queue_uuid> } }   
  }  

```

## Parameters[​](/reference/sql/commands/alter-view#parameters "Direct link to Parameters")
`view_name` String
The name of the view that you want to create. The name of the view should be unique.
* * *
AT {'{'})'{'{'})'{'}'}) REF[ERENCE] | BRANCH {'{'})'{'}'}'{'}'} `reference_name` String
Specifies the reference at which you want to alter the view. When this parameter is omitted, the current reference is used.
`REF`: Identifies the specific reference. `BRANCH`: Identifies the specific branch.
* * *
REFRESH METADATA String Optional
Refreshes the metadata associated with the specified view. Applies only to views in Iceberg REST Catalog sources and does not support views in Spaces.
You can choose to either do a full or partial metadata refresh:
  * A full refresh will update the metadata for the entire view.
  * A partial refresh will enable you to only update specified partitions.


Optional clauses are available for refreshing a table's metadata. If you choose to use two or more of these clauses, they must be entered in a specified priority order:
  1. Promotion option: either `AVOID PROMOTION` or `AUTO PROMOTION`
  2. Update option: either `FORCE UPDATE` or `LAZY UPDATE`
  3. Missing option: either `MAINTAIN WHEN MISSING` or `DELETE WHEN MISSING`


If the view is not partitioned, you will receive an error when you attempt to refresh the metadata using the `FOR PARTITIONS` clause.
* * *
FOR PARTITIONS ( `partition_name` = '`value`' ) String Optional
Use this clause to do a partial refresh of the view's metadata.
  * The ``partition_name`` identifies the name of the partition to be refreshed.
  * The ``value`` identifies the specific partition that should be refreshed. Must be contained in single quotes.


* * *
{'{'})'{'{'})'{'}'}) AVOID | AUTO {'{'})'{'}'}'{'}'} PROMOTION Optional
Clauses that determine whether files and folders are promoted to datasets when you run a query.
  * `AVOID PROMOTION` prevents queries from promoting files/folders to datasets.
  * `AUTO PROMOTION` allows queries to promote files/folders to datasets. This is the default option when you do not include a promotion clause.


* * *
{'{'})'{'{'})'{'}'}) FORCE | LAZY {'{'})'{'}'}'{'}'} UPDATE Optional
Clauses that determine whether metadata is updated when you run a query.
  * `FORCE UPDATE` forces a full update of metadata.
  * `LAZY UPDATE` does not perform a full update of metadata. This is the default option when you do not include an update clause.


* * *
{'{'})'{'{'})'{'}'}) MAINTAIN | DELETE {'{'})'{'}'}'{'}'} WHEN MISSING Optional
Clauses that determine how missing metadata is handled when you run a query.
  * `MAINTAIN WHEN MISSING` prevents missing metadata from being deleted during refresh.
  * `DELETE WHEN MISSING` deletes missing metadata during refresh. This is the default option when you do not include a clause.


* * *
CREATE EXTERNAL REFLECTION `reflection_name` String
Creates an external Reflection with the specified name.
* * *
USING `view_name` String
The path of the derived view to use with the Reflection.
* * *
CREATE AGGREGATE REFLECTION `reflection_name` String
Creates an aggregation Reflection with the specified name.
* * *
DIMENSIONS ( `column_name1`, `column_name2`, ... ) String
The columns to include as dimensions in the Reflection.
* * *
MEASURES ( `column_name1` ( `saggregation_type` ), `column_name2` ( &lt;aggregation_type ), ... ) String
The columns to include as measures in the Reflection, and the type of aggregation to perform on them. The possible types are COUNT, MIN, MAX, SUM, and APPROXIMATE COUNT DISTINCT.
* * *
PARTITION BY ( `column_name1`, `column_name2`, ... ) String Optional
The columns on which to partition the data horizontally in the Reflection.
* * *
LOCALSORT BY ( `column_name1`, `column_name2`, ... ) String Optional
The columns on which to sort the data that is in the Reflection.
* * *
CREATE RAW REFLECTION `reflection_name` String
Creates a raw Reflection with the specified name.
* * *
USING DISPLAY ( `column_name1`, `column_name2`, ... ) String
The columns to include in the Reflection.
* * *
DROP REFLECTION String Optional
Drops the specified Reflection defined on the view.
* * *
REFRESH REFLECTIONS String Optional
For information about the refresh action performed, see [Triggering Refreshes by Using the Reflection API, the Catalog API, or an SQL Command](/acceleration/manual-reflections/refreshing-reflections#triggering-refreshes-by-using-the-reflection-api-the-catalog-api-or-an-sql-command).
* * *
ROUTE REFLECTIONS TO {'{'})'{'{'})'{'}'}) DEFAULT QUEUE | QUEUE {'{'})'{'{'})'{'}'}) `queue_name` | `queue_uuid` {'{'})'{'}'}'{'}'} {'{'})'{'}'}'{'}'} String
Use the queue name or unique identifier to specify the queue on which to run jobs that create and refresh Reflections that are defined on the view. If a queue name or unique identifier is not specified, the default queue is used. You can also directly specify the default queue.
## Examples[​](/reference/sql/commands/alter-view#examples "Direct link to Examples")
Create a raw Reflection that sorts customers by last name and partitions them by country

```
ALTER VIEW Sales."customers"  
  CREATE RAW REFLECTION customers_by_country USING DISPLAY (id,lastName,firstName,address,country)  
    PARTITION BY (country)  
    LOCALSORT BY (lastName);  

```

Create an aggregation Reflection that counts the cities per state and sorts by state

```
ALTER VIEW Samples."samples.dremio.com"."zips.json"  
  CREATE AGGREGATE REFLECTION per_state USING  
  DIMENSIONS (state) MEASURES (city (COUNT))  
  LOCALSORT BY (state);  

```

Create an aggregation Reflection that counts p1 and p2 as measures in the Reflection

```
ALTER VIEW BI."p1_view"  
  CREATE AGGREGATE REFLECTION p1_view_agg USING  
  DIMENSIONS (c1,c2) MEASURES (p1(COUNT, MIN), p2(SUM, MAX, APPROXIMATE COUNT DISTINCT))  
    PARTITION BY (c1)  
    LOCALSORT BY (c2)  
    ARROW CACHE;  

```

Route Reflections to specific queues

```
ALTER VIEW "View 1" ROUTE REFLECTIONS TO DEFAULT QUEUE;  
ALTER VIEW "View 2" ROUTE REFLECTIONS TO QUEUE "REFLECTIONS QUEUE";  
ALTER VIEW "View 3" ROUTE REFLECTIONS TO QUEUE "QUEUE 1";  

```

Was this page helpful?
[Previous ALTER TABLE](/reference/sql/commands/alter-table)[Next ANALYZE TABLE](/reference/sql/commands/analyze-table)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ALTER TABLE](/reference/sql/commands/alter-table)[Next ANALYZE TABLE](/reference/sql/commands/analyze-table)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Falter-view%2F&_biz_t=1777950570344&_biz_i=ALTER%20VIEW%20%7C%20Dremio%20Documentation&_biz_n=484&rnd=758811&cdn_o=a&_biz_z=1777950570344)
