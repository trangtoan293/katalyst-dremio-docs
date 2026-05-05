---
url: /reference/sql/commands/with
title: "WITH | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64257.945331541
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * WITH

Version: current [26.x]
On this page
# WITH
The `WITH` clause defines a common table expression (CTE), which is a temporary named result set. The definition of a CTE includes its name, an optional list of column names, and a query expression (that is, a `SELECT` statement).
For more information about `SELECT` statements, see [SELECT](/reference/sql/commands). Syntax

```
[ WITH <cte_name> [ ( <cte_column1>, <cte_column2>, ... ) ]  
    AS ( <query> )  
]  
SELECT ...  

```

## Parameters[​](/reference/sql/commands/with#parameters "Direct link to Parameters")
[ WITH `cte_name` [ ( `cte_column1`, `cte_column2`, ... ) ] AS ( `query` ) ] String Optional
A temporary named result set for use in the statement that defines the CTE.
  * ``cte_name``: The name of the CTE you are defining. The CTE must have a unique name within a given query.
  * `<cte_column#>`: The names of the columns from the query that defines the CTE.
  * `AS `query``: The query (`SELECT`) statement that defines the CTE.


## Examples[​](/reference/sql/commands/with#examples "Direct link to Examples")
Query an existing table using a CTE clause

```
WITH cte_quantity (Total)  
  AS (  
      SELECT SUM(passenger_count) as Total  
      FROM Samples."samples.dremio.com"."NYC-taxi-trips" where passenger_count > 2  
      GROUP BY pickup_datetime  
      )  
SELECT AVG(Total) average_pass  
FROM cte_quantity  

```

Was this page helpful?
[Previous Users](/reference/sql/commands/users)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Users](/reference/sql/commands/users)
