---
url: /acceleration/manual-reflections/using-reflection-hints
slug: /acceleration/manual-reflections/using-reflection-hints
title: "Use Reflection Hints | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64188.563473541
---

  * [Dremio Enterprise Home](/)
  * [Accelerate Queries](/acceleration)
  * [Manually Manage Reflections](/acceleration/manual-reflections)
  * Use Reflection Hints

Version: current [26.x]
On this page
# Use Reflection Hints
You can use Reflection hints to influence the process of determining which Reflections are substituted for tables and views to accelerate queries.
## How Reflections are Substituted for Tables and Views​
There are three phases in the determination of which plan to use for a query: Consider, Match, and Choose. The following sections describe how Reflections relate to these phases.
### 1. Consider​
In this phase, the planner searches the existing Reflections for those that include columns that can satisfy the query. The planner also determines whether it can use a starflake Reflection.
### 2. Match​
The planner generates replacement plans for the original user query. It searches through the Reflections from the Consider phase and tries to match each Reflection into alternative forms of the user query. Each successful match is then registered as a replacement plan. At this point, plan cost has not been considered, yet.
### 3. Choose​
The planner explores all replacement sub-plans by using a dynamic programming approach with statistics, cost models and optimization rules as input. The lowest cost plan is chosen, where cost is a function of estimated row count, CPU, I/O, network, and memory.
## Types of Reflection Hints​
The types of hints are listed in the order in which they are applied.
### consider_reflections​
You can use a `consider_reflection` hint to reduce the amount of time spent devising query plans by restricting the number of Reflections that are considered to one or more. It causes the query planner to consider only the Reflections that you specify, rather than all existing Reflections. You pass in one or more Reflection IDs as parameters. If you do not pass in any Reflection IDs, the query planner considers all available Reflections.
This hint is ideal when the query planner must usually consider a large number of Reflections. You can speed up the planning process by providing a list of the only Reflections for the planner to consider. For example, after you run a query for the first time, you can look at the Acceleration section of the raw profile of the job that ran the query. Then, you can add the `consider_reflection` hint and provide the ID of the Reflection that was used the first time the query ran.
Example of setting this hint for a session

```
ALTER SESSION   
  SET "reflections.planning.consider_reflections"='3dd4bd60-6a9e-422c-a4ee-556973223602, 09638927-7d70-499f-89cc-7bd60dec50a8';  

```

Example of setting this hint for a single query

```
SELECT /*+ consider_reflections(“3dd4bd60-6a9e-422c-a4ee-556973223602”, "09638927-7d70-499f-89cc-7bd60dec50a8")  */ pickup_datetime, passenger_count   
  FROM Samples."samples.dremio.com"."NYC-taxi-trips-iceberg";  

```

### exclude_reflections​
You can use an `exclude_reflections` hint to reduce the amount of time spent devising query plans by preventing one or more Reflections from being considered. It causes the query planner to consider none of the Reflections that you specify. You pass in one or more Reflection IDs as parameters.
This hint is ideal when the cost-based optimizer has chosen a query plan that uses suboptimal Reflection and the you want to direct the optimizer to generate a plan without it. For example, suppose that a particular Reflection is continually used to satisfy a query, even though you have created a Reflection that you want to use. You could use this hint to prevent the first Reflection from being considered.
Example of setting this hint for a session

```
ALTER SESSION   
  SET "reflections.planning.exclude_reflections"='3dd4bd60-6a9e-422c-a4ee-556973223602, 09638927-7d70-499f-89cc-7bd60dec50a8';  

```

Example of setting this hint for a single query

```
SELECT /*+ exclude_reflections(“3dd4bd60-6a9e-422c-a4ee-556973223602”, "09638927-7d70-499f-89cc-7bd60dec50a8")  */ pickup_datetime, passenger_count   
  FROM Samples."samples.dremio.com"."NYC-taxi-trips-iceberg";  

```

### no_reflections​
You can use an `no_reflections` hint to prevent query plans from using Reflections. It causes the query planner not to consider any Reflections for a query.
Example of setting this hint for a session

```
ALTER SESSION   
  SET "reflections.planning.no_reflections=true";   

```

Example of setting this hint for a single query

```
SELECT /*+ no_Reflections */ pickup_datetime, passenger_count   
  FROM Samples."samples.dremio.com"."NYC-taxi-trips-iceberg";  

```

### choose_reflections​
You can use a `choose_reflections` hint to force the optimizer to choose query plans that use particular matched Reflections. It causes the optimizer to prioritize query plans that use one or more Reflections over all of the others. You pass in one or more Reflection IDs as parameters.
  * If any of the query plans passed to the optimizer are listed in the `choose_reflections` hint, the cost-based optimizer is forced to pick the lowest cost plan containing at least one of the listed Reflections.
  * If none of the query plans passed to the optimizer are listed in the `choose_reflections` hint, the optimizer is free to pick the lowest cost plan.
  * If no Reflections are listed in the `choose_reflections` hint, the optimizer is free to pick the lowest cost plan.

Example of setting this hint for a session

```
ALTER SESSION   
  SET "reflections.planning.choose_reflections"='3dd4bd60-6a9e-422c-a4ee-556973223602, 09638927-7d70-499f-89cc-7bd60dec50a8';  

```

Example of setting this hint for a single query

```
SELECT /*+ choose_reflections(“3dd4bd60-6a9e-422c-a4ee-556973223602”, "09638927-7d70-499f-89cc-7bd60dec50a8")  */ pickup_datetime, passenger_count   
  FROM Samples."samples.dremio.com"."NYC-taxi-trips-iceberg";  

```

### current_iceberg_data_only​
For Reflections created on tables in Iceberg format, you can use a `current_iceberg_data_only` hint to prevent query plans from using Reflections that are not updated to the same versions of base tables.
After an Iceberg table is updated, it may take up to 30 seconds for the Reflection manager to mark a Reflection as not-current based on the updated table and exclude the Reflection from queries. The Reflection manager marks Reflections as current again when they are refreshed.
Example of setting this hint for a session

```
ALTER SESSION SET "reflections.planning.current_iceberg_data_only"=true;  

```

Example of setting this hint for a single query

```
SELECT /*+ current_iceberg_data_only */ pickup_datetime, passenger_count  
  FROM Samples."samples.dremio.com"."NYC-taxi-trips-iceberg";  

```

## Scope of Reflection Hints​
You can set Reflection hints either per session, per view, or per query.
If hints are present for a session and in queries (the hints being either explictly set in the queries or implicitly set in them by views) run during that session, all of the hints are applied.
For example, if a query uses `/*+ consider_reflections("r1") */` and a session uses `"Reflection.planning.consider_reflections"='r2'`, where `r1` and `r2` are Reflection IDs, the query planner considers both Reflections.
Only the hints from the first referenced view in the query, or those directly after `SELECT`, are considered. This ensures that hints saved in deeply nested views don’t accidentally interfere with Reflection substitution for outer views or queries.
### Setting Hints in Sessions​
Only one hint is allowed in the `ALTER SESSION SET` command.
Syntax for setting a Reflection hint in a session

```
ALTER SESSION   
  SET "reflections.planning.<hint>"='<reflection_id> [ , ... ]';  

```

### Setting Hints in Views​
Syntax for setting a Reflection hint in the definition of a view

```
CREATE VIEW <view_path> as SELECT /*+ <hint>(“<reflection_id>” [ , ...] ) [ <hint>(“<reflection_id>” [ , ... ] ) ... ]  */ <rest_of_the_query>  

```

When a query that references one or more views is parsed, and hints are defined in those views, only the hints in the first, top-level view are used. For example, suppose you run this query:
Example query

```
SELECT * FROM VIEW1  

```

If one or more hints are defined in VIEW1, they are used. However, if the definition of VIEW1 includes VIEW2, and one or more hints are defined in VIEW2, the hints in VIEW2 are not used. VIEW1, in this case, is the top-level hint.
Moreover, suppose you run a query that joins VIEW1 and VIEW3, and the query references VIEW1 first. Only the hints defined in VIEW1 are used, even if hints are defined in VIEW3, because VIEW1 is the view that is referenced first.
### Setting Hints in Queries​
Reflection hints can be set directly in a query. The syntax for setting Reflection hints in a query is as follows:
Syntax for setting Reflection hints in a query

```
SELECT /*+ <hint>(“<reflection_id>” [ , ...] ) [ <hint>(“<reflection_id>” [ , ... ] ) ... ]  */ <rest_of_the_query>  

```

## Obtaining Reflection IDs​
You will need one or more Reflection IDs for some of the Reflection hints. Reflection IDs can be found in three places: the Acceleration section of the raw profile of the job that ran a query using the Reflection, the `SYS.REFLECTIONS` system table, and the Reflection summary objects that you retrieve with the Reflection API.
To find the ID of a Reflection in Acceleration section of the raw profile of job that ran a query that used the Reflection:
  1. In the Dremio console, click ![The Jobs icon](https://docs.dremio.com/images/jobs-icon.png) in the left navbar.
  2. In the list of jobs, locate the job that ran the query. If the query was satisfied by a Reflection, a lightning bolt icon appears after the name of the user who ran the query.
  3. Click the ID of the job.
  4. Click **Raw Profile** at the top of the screen.
  5. Click the **Acceleration** tab.
  6. In the Reflection Outcome section, locate the ID of the Reflection.

  

To find the ID of a Reflection in the SYS.Reflections system table:
  1. In the Dremio console, click ![The SQL Runner icon](https://docs.dremio.com/images/sql-runner-icon.png) in the left navbar.
  2. Copy this query and paste it into the SQL editor:
Query for listing info about all existing Reflections

```
SELECT * FROM SYS.REFLECTIONS  

```

  3. Sort the results on the `dataset_name` column.
  4. In the `dataset_name` column, locate the name of the dataset that the Reflection was defined on.
  5. Scroll the table to the right to look through the display columns, dimensions, measures, sort columns, and partition columns to find the combination of attributes that define the Reflection.
  6. Scroll the table all the way to the left to find the ID of the Reflection.

  

To find the ID of a Reflection by using REST APIs:
  1. Obtain the ID of the table or view that the Reflection was defined on by using retrieving either the [table](/reference/api/catalog/table) or [view](/reference/api/catalog/view) by its path.
  2. [Use the Reflections API to retrieve a list of all of the Reflections that are defined on the table or view](/reference/api/reflections).
  3. In the response, locate the Reflection by its combination of attributes.
  4. Copy the Reflection's ID.


Was this page helpful?
[Previous View Whether Queries Used Reflections](/acceleration/manual-reflections/info-about-queries)[Next Refresh Reflections](/acceleration/manual-reflections/refreshing-reflections)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous View Whether Queries Used Reflections](/acceleration/manual-reflections/info-about-queries)[Next Refresh Reflections](/acceleration/manual-reflections/refreshing-reflections)
!
