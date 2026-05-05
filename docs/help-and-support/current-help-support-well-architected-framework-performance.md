---
url: /help-support/well-architected-framework/performance
slug: /help-support/well-architected-framework/performance
title: "Performance Efficiency | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64061.480617458
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Well-Architected Framework](/help-support/well-architected-framework)
  * Performance Efficiency

Version: current [26.x]
On this page
# Pillar 2 - Performance Efficiency
Dremio is a powerful platform that can process large amounts of data. To get the best performance out of your Dremio environment, you should follow these design principles and implementation best practices.
## Dimensions of Performance Optimization[​](/help-support/well-architected-framework/performance/)
When optimizing Dremio clusters for performance, several factors should be considered. Queries submitted to Dremio must be planned by the coordinator before being routed for execution. There is always one main coordinator and, optionally, additional scale-out coordinators that assist with planning JDBC/ODBC queries. The coordinator generates a query plan that can be used to route the query to one of the engines that are part of the cluster.
Some queries can be well-written, and some can consume inordinately high resources from the start. Those queries can be rewritten and optimized on their own without regard to the larger cluster.
Beyond individual queries, we look at the execution environment of executor nodes. Those nodes have individual constraints of memory and CPU. Executors in Dremio are also part of an engine that groups executors together to process queries in parallel across multiple machines. The size of the engine that a query runs on can affect its performance and ability to handle additional queries.
These dimensions of performance optimization can be simplified in the following decision tree, which addresses the most common scenarios. In the decision tree, `engine_start_epoch_millis > 0` implies that the engine is down.
The decision tree recommends adding replicas, which cannot be created automatically. You must manually create engine replicas and update your Workload Management rules to route queries to them.
![Decision tree diagram that shows common performance optimization scenarios for Dremio.](https://docs.dremio.com/images/cloud/optimization-decision-tree.png)
## Principles[​](/help-support/well-architected-framework/performance/)
### Perform Regular Maintenance[​](/help-support/well-architected-framework/performance/)
To ensure that your cluster is set up for optimal performance and to handle more data, queries, and workloads, it is necessary to conduct regular maintenance. Regular maintenance will establish a solid baseline from which you can design and optimize.
### Scale-out Coordinators[​](/help-support/well-architected-framework/performance/)
Dremio’s coordinator nodes can be scaled-out with secondary coordinators that will assist in planning a high volume of queries submitted to the cluster.
### Optimize for Efficiency[​](/help-support/well-architected-framework/performance/)
Before you think about scaling out your cluster, it is important to optimize your semantic layer and queries to be as efficient as possible.
### Optimize Engines[​](/help-support/well-architected-framework/performance/)
Dremio provides several ways to enable workload isolation and ensure your queries do not overload the cluster. Multiple engines are used to keep some queries from affecting others, and queues are used to buffer queries from overloading any single engine.
## Best Practices[​](/help-support/well-architected-framework/performance/)
### Clean the KV Store[​](/help-support/well-architected-framework/performance/)
Dremio stores important metadata in a metastore, referred to as the KV store, which is local to the main coordinator node. As data is added and removed in conjunction with the changes that are made in the semantic layer, the KV store can become fragmented and consume significant disk space. To avoid this issue, Dremio recommends cleaning the KV store every six months once it reaches 100 GB in size.
The clean operation ensures any orphaned metadata entries (excluding files with metadata stored in distributed storage, such as Parquet, ORC read-only, and AVRO files), orphaned profiles, old jobs, old profiles, and temporary dataset versions are deleted. You can also use the `clean` command to reindex and compact the data to reduce fragmentation on disk.
Neglecting to clean the KV store of metadata not related to Parquet files can slow metadata retrieval and lead to longer planning times for queries. For organizations with large semantic layers, this neglect can lead to an exhaustion of disk space and the possible corruption of the KV store.
The `clean` operation requires the Dremio server to be offline, so this action needs to be planned with platform owners and users.
### Right-size Scale-out Coordinators[​](/help-support/well-architected-framework/performance/)
Secondary coordinator nodes can be used to improve query planning concurrency and distribute query planning specifically for ODBC and JDBC client requests. Secondary coordinator nodes do not plan queries that arrive via Dremio’s SQL REST API.
It is common for Dremio to experience a natural ramp-up in workloads as new users and new use cases are added to the cluster. When the volume of queries submitted to Dremio exceeds the number of cores that Dremio has available to plan the queries, queries that cannot be planned immediately start to incur wait time -- time spent waiting in a queue to be planned. Wait time, of course, increases the overall time that it takes for the query to execute and return results.
To alleviate wait time caused by high volumes of queries from ODBC/JDBC clients, it is recommended that you configure secondary coordinators to improve concurrency in query planning and to distribute planning for ODBC/JDBC clients across multiple coordinators.
You should consider adding a secondary coordinator when your JDBC/ODBC queries start to incur small amounts of wait time -- one second of wait time is too long for many organizations. Failing to address this will result in increased query durations as more and more workload is added to Dremio. Wait time for each query is captured in the query history, which is stored in a file called `queries.json` on the Dremio main coordinator.
Dremio recommends that you monitor wait times for your queries, and if those times are consistently breaching the one-second threshold, you should consider adding another secondary coordinator.
Dremio recommends a maximum of five secondary coordinator nodes in any single cluster.
### Design Semantic Layer for Workload Performance[​](/help-support/well-architected-framework/performance/)
Dremio’s enterprise-scale [semantic layer](/help-support/well-architected-framework/semantic) provides a clear boundary between your physically-stored tables and your logical, IT-governed and self-service views. The semantic layer provides data engineers and semantic data modelers the ability to create views based on tables without having to make copies of the physical data.
Since interactive performance for business users is a key capability of the semantic layer, Dremio can leverage physically optimized representations of source data known as data Reflections, when appropriate. When queries are made against views that have data Reflections enabled, the query optimizer can accelerate a query by utilizing one or more Reflections to partially or entirely satisfy that query, rather than processing the raw data in the underlying data source. Queries do not have to be rewritten to take advantage of data Reflections -- Dremio's optimizer considers Reflection suitability automatically while planning the query.
With Dremio, you can create layers of views that allow you to present data to business consumers in a format they need. At the same time, you can satisfy organizational security requirements without business consumers having to worry about the physical locations from which the data comes, or how the data is physically organized. A layered approach enables you to create sets of re-usable views that can be utilized many times across multiple projects.
Leveraging Dremio’s layering [best practices](/help-support/well-architected-framework/semantic) promotes a more performant and low-maintenance solution that can provide agility to development teams and business users, and provide better control over data.
### Improve Query Performance[​](/help-support/well-architected-framework/performance/)
Analyzing query history to determine which queries are performing sub-optimally involves a number of factors. The first and simplest factor to consider is the overall execution time of a query. You should identify the top 10 longest running queries to understand why they are taking so long. Is it taking too long to read data from the source? Are you lacking CPU cycles? Is the query spilling to disk? Was the query queued at the start? Did the query take a long time to plan?
The query history also allows you to see the lengths of time spent planning queries. Queries with long planning times should be investigated. Long planning times can be caused by:
  * the complexity of the query
  * an inline metadata refresh due to stale metadata (see [Optimize Metadata Refresh Frequency](/help-support/well-architected-framework/cost/optimize-refresh))
  * a high number of Reflections being considered, which could mean there are too many Reflections defined in the environment (see [Remove unused Reflections](/help-support/well-architected-framework/cost/) to learn how to identify if there are redundant Reflections in your cluster)


At times, query performance may be inconsistent. A query may complete execution in less than 10 seconds in one case, but the same query may require one minute of execution time in another case. Performance inconsistency is a typical sign of resource contention in the cluster, which can happen in high-volume environments or those where too many jobs (user queries, metadata, or Reflection) are running at the same time.
It is important to calculate the standard deviation for each set of identical jobs and not bundle everything into a single number. Also, you only want the standard deviation on the execution time, which excludes poolwait time, planning time, and queue time.
For metadata refresh jobs (`REFRESH DATASET`), if the standard deviation is higher than 50,000, those jobs should be assigned to a dedicated engine. For Reflection refresh jobs (`REFRESH REFLECTION`), if standard deviation is higher than 150,000, those jobs should be assigned to a dedicated engine. If an engine for Reflections already exists, it is recommended that you have two engines for Reflection refresh jobs -- one for high-cost Reflections and one for low-cost Reflections.
Metadata and Reflection refresh jobs run in the background to ensure they do not affect user queries. User queries invoked by dashboards or other platforms can have SLA requirements (e.g., completion in under 10 seconds). You can take the same approach for user queries, but the scope should be narrowed to queries in the same queue.
If the standard deviation is very high for some queries, review their profiles to make sure they are tuned properly. If the SLA is very strict, then a dedicated engine is required for them.
### Review Dremio Profiles to Pinpoint Bottlenecks[​](/help-support/well-architected-framework/performance/)
Dremio profiles contain considerable detail about how a query was planned, how the phases of execution were constructed, how the query was actually executed, and the decisions that were made about whether or not to use Reflections to accelerate the query.
For each phase of the query in the profile, check the phase's start and end times, which will give you your first indication of the phase in which bottlenecks were located. After you identify the phase, you can drill into the operators of that phase to see which operator or which thread within the operator may have been problematic. With this information, you can usually start to understand why a query was performing sub-optimally, and you can start to plan how to improve performance. For example (not exhaustive):
  * High sleep times in queries indicate there is CPU contention, and you should consider increasing the number of executors.
  * High setup times can indicate a "small file" problem, meaning Dremio spends too much time opening and closing files to read the headers.
  * High planning time can be caused by too many Reflections or the need for an inline metadata refresh.
  * High queue time can indicate that workload management settings are causing too much throttling in the queues.


### Rebalance Workload Management Rules[​](/help-support/well-architected-framework/performance/)
Since workloads query volumes change over time, Workload Management queue-routing rule settings for query cost thresholds should be re-evaluated and adjusted to rebalance the proportion of queries that flow to each of the cost-based queues.
Statistical quantile analysis can be used on the query history data to determine what the query cost threshold should be between the low-cost and high-cost user query queues in a two-queue setup, or what the threshold should be between the low-cost and medium-cost user query queues and the medium-cost and high-cost user query queues in a three-queue setup.
Ideally, in a two-queue setup, you want to see approximately an 80%/20% split of queries hitting the low/high cost user query queues. In a three-queue setup, you want to see approximately a 75%/15%/10% split of queries hitting the low/medium/high cost user query queues.
### Right-size Engines and Executors[​](/help-support/well-architected-framework/performance/)
You can analyze the query history to determine if you need to change the number of executors in your engines.
When the volume of queries being executed simultaneously by the current set of executor nodes in an engine starts to reach a saturation point, there are a number of key symptoms that Dremio exhibits. Saturation point is typically manifested as increased sleep time during query execution. Sleep time is incurred when a running query needs to wait for available CPU cycles due to all available CPUs being in operation.
Another symptom in Dremio Enterprise is an increased number of Out Of Memory exceptions, even on queries that are not particularly heavy memory consumers. If a query uses a very small amount of memory but needs only a small amount more, if the request for that memory pushes Dremio over its limit, then that small query will be marked as Out Of Memory since it was the one that requested memory and it couldn't be allocated. Seeing these types of Out Of Memory exceptions is an indication that the engine cannot handle the concurrency allowed by the queue settings.
These symptoms can be identified by analyzing the query history, which reports on both sleep time and reasons why queries failed. Failure to address these symptoms can result in increasing query times and an increasing number of queries failing due to Out Of Memory issues. These, in turn, can lead to a bad end-user experience and poor satisfaction.
In a cluster that has multiple engines configured, you can alleviate the issues in both of these circumstances by adding executor nodes to an existing engine or creating a new engine, then altering the Workload Management settings to make use of the engine changes. Bear in mind that a query is executed on the nodes of a single engine. It is not executed across multiple engines.
Dremio recommends that no engine should exceed 10 executor nodes, assuming 128GB of memory and 16/32 cores per executor.
A good reason for creating a new engine is when a new workload is introduced to Dremio, perhaps by a new department within an organization, and their queries are causing degraded performance in the existing engine setup. Creating a new engine to isolate the new workload, most likely by creating rules to route queries from users in that organization to the new engine, is a useful way of isolating workloads.
### Leverage Reflections to Improve Performance[​](/help-support/well-architected-framework/performance/)
When developing use cases in Dremio’s semantic layer, it is often best to build out the use case iteratively, without any Reflections at the start. As you complete iterations, you can run the queries and analyze the data in the query history to deduce which ones are taking the longest to execute and whether there are any common factors between a set of slow queries which are contributing to the performance issues.
For example, assume you have a set of five slow queries that are each derived from a view that contains a join between two relatively large tables. In this situation, you might find that putting a raw Reflection on the view that is performing the join helps to speed up all five queries because an Apache Iceberg materialization of the join results will be created, and can be automatically used to accelerate views derived from the join. This allows you to get the query planning and performance benefits of Apache Iceberg, and you can even partition the Reflection to accelerate queries for which the underlying data wasn’t initially optimized. This is an important pattern since it means you can leverage a small number of Reflections to speed up potentially many workloads.
Raw Reflections can be useful in cases where you have large volumes of JSON or CSV data. When this type of data is queried, the entire dataset needs to be processed, which can be inefficient. Adding a raw Reflection over the JSON or CSV data allows for an Apache Iceberg representation of that data to be created, and it enables all of those planning and performance benefits that come along with it.
Similar to the JSON/CSV example described above, another use of raw Reflections is to simply offload heavy queries from an operational data store. Often, database administrators do not want their operational data stores (e.g., OLTP databases) being overloaded with analytical queries while they are busy processing billions of transactions. In this situation, you can leverage raw Reflections to create an Apache Iceberg representation of the operational table. When a query needs the data, it will read the Reflection data as opposed to going back to the operational source.
Another important use case that often requires raw Reflections is joining on-premises data to cloud data. In this case, you will typically find that the retrieval of the on-premises data becomes the bottleneck for queries due to the latency in retrieving the data from the source system. In this case, you can join the data with a view and define a _default_ raw Reflection on the view. This type of raw Reflection stores the data for every column in the view. Using one almost always yields significant performance gains, because the query planner will choose only the default raw Reflection when determining the best plan and because the data will all be served from the Reflection.
If you have connected Dremio to client tools and those client tools are issuing different sets of `GROUP BY` queries against a view, and if the `GROUP BY` statements are taking too long to process compared to the desired SLAs, you might consider adding an aggregation Reflection to the view to satisfy the combinations of dimensions and measures that are being submitted from the client tool.
Failure to make use of Dremio Reflection means you could be missing out on some very significant performance enhancements for some of your poorest performing queries. However, creating too many Reflections can also have a negative impact on the system as a whole. The misconception is often that more Reflections must be better, but when you consider the overhead in maintaining and refreshing them at intervals, the Reflection refreshes can end up consuming valuable resources from your everyday workloads.
Where possible, organize your queries by pattern. Try to create the smallest amount of Reflections that you need to service the highest number of your queries. Locating the points in your semantic tree that a lot of queries go through can help you accelerate a larger number of queries. The more Reflections you have that may be able to accelerate the same query patterns, the longer the planner will need to evaluate which Reflection will be best suited for accelerating the query being planned.
To create Reflections for expensive query patterns:
  1. Review query history (jobs) to determine the most expensive and most-frequent queries being submitted.
  2. Look in the job profiles for these queries. Tables and views referenced by multiple queries that perform expensive scans, joins, and aggregations are good candidates for Reflections.
  3. Examine the SQL for the selected queries that reference the same table or view to find patterns that can help you define a Reflection on that table or view that satisfies as many of those queries as possible.


Creating more Reflections than are necessary to support your data consumers can lead to the use of more resources than might be optimal for your environment, both in terms of system resources and the time and attention devoted to working with them. Create them only when data consumers are experiencing slow query responses, or when reports are not meeting established SLAs.
Create Reflections where they do the most work without duplicating the work of other Reflections by you create them in [layers](/help-support/well-architected-framework/semantic). In the Business layer, create views that perform joins and other expensive operations. This layer is where the intensive work on data is performed. These users then create Reflections (raw, aggregation, or both) from their views. In the Application layer where users can create lightweight views for dashboards, reports, and visualization tools, they can also create aggregation Reflections, as needed.
### Use Supporting Anchors[​](/help-support/well-architected-framework/performance/)
Anchors for Reflections are views that data consumers have access to from their business-intelligence tools. As you develop a better understanding of query patterns, you might want to support those patterns by creating Reflections from views that perform expensive joins, transformations, filters, calculations, or a combination of those operations. You would probably not want data consumers to be able to access those views directly in situations where the query optimizer did not use any of the Reflections created from those views. Repeated and concurrent queries on such views could put severe strain on system resources.
You can prevent queries run by data consumers from accessing those views directly. Anchors that perform expensive operations and to which access is restricted are called supporting anchors.
For example, suppose that you find these three, very large tables are used in many queries:
  * Customer
  * Order
  * Lineitem


You determine that there are a few common patterns in the user queries on these tables:
  * The queries frequently join the three tables together.
  * Queries always filter by `commit_date < ship_date`
  * There is a calculated field in most of the queries: `extended_price * (1-discount) AS revenue`


You can create a view that applies these common patterns, and then create a raw Reflection to accelerate queries that follow these patterns.
First, you create a folder in the Dremio space that your data consumers have access to. Then, you configure this folder to be invisible and inaccessible to the data consumers.
Next, you write the query to create the view, you follow these guidelines:
  * Use `SELECT *` to include all fields, making it possible for the query optimizer to accelerate the broadest set of queries. Alternatively, if you know exactly which subset of fields are used in the three tables, you can include just that subset in the view.
  * Add any calculated fields, which in this case is the revenue field.
  * Apply the appropriate join on the three tables.
  * Apply any filters that are used by all queries, which in this case is only `commit_date < ship_date`.
  * Always use the most generic predicate possible to maximize the number of queries that will match.


Next, you run the following query to create a new view:
Create a new view

```
SELECT *, extendedprice * (1 - discount) AS revenue FROM customer AS c, orders AS o, lineitem AS l WHERE c.c_custkey = o.o_custkey AND l.l_orderkey = o.o_orderkey AND o.commit_date < o.ship_date  

```

Then, you save the view in the folder that you created earlier.
Finally, you create one or more raw Reflections on this new supporting anchor. If most of the queries against the view were aggregation queries, you could create an aggregation Reflection. In both cases, you can select fields, as needed, to sort on or partition on.
The result is that, even though the data consumers do not have access to the supporting anchor, Dremio can accelerate their queries by using the new Reflections as long as they have access to the tables that the Reflections are ultimately derived from: Customer, Order, and Lineitem.
If the query optimizer should determine that a query cannot be satisfied by any of the Reflections, it is possible, if no other views can satisfy it, for the query to run directly against the tables, as is always the case with any query.
### Horizontally Partition Reflections that Have Many Rows[​](/help-support/well-architected-framework/performance/)
If you select a field for partitioning in a data Reflection, Dremio physically groups records together into a common directory on the file system. For example, if you partition by the field Country, in which the values are two-letter abbreviations for the names of countries, such as US, UK, DE, and CA, Dremio stores the data for each country in a separate directory named US, UK, DE, CA, and so on. This optimization allows Dremio to scan a subset of the directories based on the query, which is an optimization called partition pruning.
If a user queries on records for which the value of Country is US or UK, then Dremio can apply partition pruning to scan only the US and UK directories, significantly reducing the amount of data that is scanned for the query.
When you are selecting a partitioning field for a data Reflection, ask yourself these questions:
  1. Is the field used in many queries?
  2. Are there relatively few unique values in the field (low cardinality)?


To partition the data, Dremio must first sort all records, which consumes resources. Accordingly, partition data only on fields that can be used to optimize queries. In addition, the number of unique values for a field should be relatively small, so that Dremio creates only a relatively small number of partitions. If all values in a field are unique, the cost to partition outweighs the benefit.
In general, Dremio recommends the total number of partitions for a Reflection to be less than 10,000.
Because Reflections are created as Apache Iceberg tables, you can use partition transforms to specify transformations to apply to partition columns to produce partition values. For example, if you choose to partition on a column of timestamps, you can set partition transforms that produce partition values that are the years, months, days, or hours in those timestamps. The following table lists the partition transforms that you can choose from.
  * If a column is listed as a partition column, it cannot also be listed as a sort column for the same Reflection.
  * In aggregation Reflections, each column specified as a partition column or used in transform must also be listed as a dimension column.
  * In raw Reflections, each column specified as a partition column or used in transform must also be listed as a display column.

  
| Value  | Type of Partition Transform  | Description  | IDENTITY  | identity(`column_name`)  | Creates one partition per value. This is the default transform. If no transform is specified for a column named by the `name` property, an IDENTITY transform is performed. The column can use any supported data type.  |  
| --- | --- | --- |  
| YEAR  | year(`column_name`)  | Partitions by year. The column must use the DATE or TIMESTAMP data type.  |  
| MONTH  | month(`column_name`)  | Partitions by month. The column must use the DATE or TIMESTAMP data type.  |  
| DAY  | day(`column_name`)  | Partitions on the equivalent of dateint. The column must use the DATE or TIMESTAMP data type.  |  
| HOUR  | hour(`column_name`)  | Partitions on the equivalent of dateint and hour. The column must use the TIMESTAMP data type.  |  
| BUCKET  | bucket(`integer`, `column_name`)  | Partitions data into the number of partitions specified by an integer. For example, if the integer value N is specified, the data is partitioned into N, or (0 to (N-1)), partitions. The partition in which an individual row is stored is determined by hashing the column value and then calculating ``hash_value` mod N`. If the result is 0, the row is placed in partition 0; if the result is 1, the row is placed in partition 1; and so on.  
  
The column can use the DECIMAL, INT, BIGINT, VARCHAR, VARBINARY, DATE, or TIMESTAMP data type.  |  
| TRUNCATE  | truncate(`integer`, `column_name`)  | If the specified column uses the string data type, truncates strings to a maximum of the number of characters specified by an integer. For example, suppose the specified transform is truncate(1, stateUS). A value of `CA` is truncated to `C`, and the row is placed in partition C. A value of `CO` is also truncated to `C`, and the row is also placed in partition C.  
  
If the specified column uses the integer or long data type, truncates column values in the following way: For any `truncate(L, col)`, truncates the column value to the biggest multiple of L that is smaller than the column value. For example, suppose the specified transform is `truncate(10, intColumn)`. A value of 1 is truncated to 0 and the row is placed in the partition 0. A value of 247 is truncated to 240 and the row is placed in partition 240. If the transform is `truncate(3, intColumn)`, a value of 13 is truncated to 12 and the row is placed in partition 12. A value of 255 is not truncated, because it is divisble by 3, and the row is placed in partition 255.  
  
The column can use the DECIMAL, INT, BIGINT, VARCHAR, or VARBINARY data type.  
  
**Note:** The truncate transform does not change column values. It uses column values to calculate the correct partitions in which to place rows.  |  
### Partition Reflections to Allow for Partition-Based Incremental Refreshes[​](/help-support/well-architected-framework/performance/)
Incremental refreshes of data in Reflections are much faster than full refreshes. Partition-based incremental refreshes are based on Iceberg metadata that is used to identify modified partitions and to restrict the scope of the refresh to only those partitions. For more information about partition-based incremental refreshes, see Types of Refresh for Reflections on Apache Iceberg Tables, Filesystem Sources, Glue Sources, and Hive Sources in [Refreshing Reflections](/acceleration/manual-reflections/refreshing-reflections).
For partition-based incremental refreshes, both the base table and its Reflections must be partitioned, and the partition transforms that they use must be compatible. The following table lists which partition transforms on the base table and which partition transforms on Reflections are compatible:  
| Partition Transform on the Base Table  | Compatible Partition Transforms on Reflections  |  
| --- | --- |  
| Identity  | Identity, Hour, Day, Month, Year, Truncate  |  
| Hour  | Hour, Day, Month, Year  |  
| Day  | Day, Month, Year  |  
| Month  | Month, Year  |  
| Year  | Year  |  
| Truncate  | Truncate  |  
  * If both a base table and a Reflection use the Truncate partition transform, follow these rules concerning truncation lengths: 
    * If the partition column uses the String data type, the truncation length used for the Reflection must be less than or equal to the truncation length used for the base table.
    * If the partition column uses the Integer data type, the remainder from the truncation length on the Reflection (A) divided by the truncation length on the base table (B) must be equal to 0: `A MOD B = 0`
    * If the partition column uses any other data type, the truncation lengths must be identical.
  * If a base table uses the Bucket partition transform, partition-based incremental refreshes are not possible.


Suppose you want to define an aggregation Reflection on a base table that has billions of rows. The base table includes a column that either uses the TIMESTAMP data type or includes a timestamp as a string, and the base table is partitioned on that column.
In your aggregation Reflection, you plan to aggregate on timestamp data that is in the base table. However, to get the benefits of partition-based incremental refresh, you need to partition the Reflection in a way that is compatible with the partitioning on the base table. You can make the partitioning compatible in either of two ways:
  * By defining a view on the base table, and then defining the aggregation Reflection on that view
  * By using the advanced Reflection editor to define the aggregation Reflection on the base table


If the timestamp column in the base table uses the TIMESTAMP data type, use one of the functions in this table to define the corresponding column in the view. You can partition the aggregation Reflection on the view column and use the partition transform that corresponds to the function.  
| Function in View Definition  | Corresponding Partition Transform  |  
| --- | --- |  
| DATE_TRUNC('HOUR', `base_table_column`)  | HOUR(`view_col`)  |  
| DATE_TRUNC('DAY', `base_table_column`)  | DAY(`view_col`)  |  
| DATE_TRUNC('MONTH', `base_table_column`)  | MONTH(`view_col`)  |  
| DATE_TRUNC('YEAR', `base_table_column`)  | YEAR(`view_col`)  |  
| CAST `base_table_column` as DATE  | DAY(`view_col`)  |  
| TO_DATE(`base_table_column`)  | DAY(`view_col`)  |  
If the timestamp column in the base table uses the STRING data type, use one of the functions in this table to define the corresponding column in the view. You can partition the aggregation Reflection on the view column and use the partition transform that corresponds to the function.  
| Function in View Definition  | Corresponding Partition Transform  |  
| --- | --- |  
| LEFT(`base_table_column`, X)  | TRUNCATE(`view_col`, X)  |  
| SUBSTR(`base_table_column`, 0, X)  | TRUNCATE(`view_col`, X)  |  
| SUBSTRING(`base_table_column`, 0, X)  | TRUNCATE(`view_col`, X)  |  
When creating or editing the aggregation Reflection in the Advanced View, as described in [Creating and Editing Reflections](/acceleration/manual-reflections), follow these steps:
  1. Set the base table's timestamp column as a dimension.

![Setting the column as a dimension.](https://docs.dremio.com/images/date-granularity-1.png)
  1. Click the down-arrow next to the green circle.
  2. Select **Date** for the date granularity.

![Selecting the granularity.](https://docs.dremio.com/images/date-granularity-2.png)
### Sort Reflections on High-Cardinality Fields[​](/help-support/well-architected-framework/performance/)
The sort option is useful for optimizing queries that use filters or range predicates, especially on fields with high cardinality. If sorting is enabled, during query execution, Dremio skips over large blocks of records based on filters on sorted fields.
Dremio sorts data during the execution of a query if a Reflection spans multiple nodes and is composed of multiple partitions.
Sorting on more than one field in a single data Reflection typically does not improve read performance significantly and increases the costs of maintenance tasks.
For workloads that need sorting on more than one field, consider creating multiple Reflections, each being sorted on a single field.
### Create Reflections from Joins that are Based on Joins from Multiple Queries[​](/help-support/well-architected-framework/performance/)
Joins between tables, views, or both tend to be expensive. You can reduce the costs of joins by performing them only when building and refreshing Reflections.
As an administrator, you can identify a group of queries that use similar joins. Then, you can create a general query that uses a join that is based on the similar joins, but does not include any additional predicates from the queries in the group. This generic query can serve as the basis of a raw Reflection, an aggregation Reflection, or both.
For example, consider the following three queries which use similar joins on views A, B and C:
Three queries with joins on views A, B, and C

```
SELECT a.col1, b.col1, c.col1 FROM a join b on (a.col4 = b.col4) join c on (c.col5=a.col5)  
  WHERE a.size = 'M' AND a.col3 > '2001-01-01' AND b.col3 IN ('red','blue','green')  
SELECT a.col1, a.col2, c.col1, COUNT(b1) FROM a join b on (a.col4 = b.col4) join c on (c.col5=a.col5)  
  WHERE a.size = 'M' AND b.col2 < 10 AND c.col2 > 2 GROUP BY a.col1, a.col2, c.col1  
SELECT a.col1, b.col2 FROM a join b on (a.col4 = b.col4) join c on (c.col5=a.col5)  
  WHERE c.col1 = 123  

```

You can write and run this generic query to create a raw Reflection to accelerate all three original queries:
Create a Reflection to accelerate three queries

```
SELECT a.col1 , a.col2, a.col3, b.col1, b.col2, b.col3, c.col1, c.col2 FROM a join b on (a.col4 = b.col4) join c on (c.col5=a.col5)  

```

### Establish a Routine for Checking Reflections[​](/help-support/well-architected-framework/performance/)
At regular intervals, check for Reflections that are no longer being used and evaluate whether they should be removed. Query patterns can change over time, and frequently-used Reflections can gradually become less relevant.
### Optimize Metadata Refresh performance[​](/help-support/well-architected-framework/performance/)
Adding a dedicated metadata refresh engine to your Dremio cluster will ensure that all metadata refresh activities serviced by executors will be isolated from any other workloads. A dedicated engine avoids any problems with metadata refresh workloads taking CPU cycles and memory away from business-critical workloads and ensures they have the best chance of finishing in a timely manner.
## Assign Ownership to Roles Instead of Individual Users[​](/help-support/well-architected-framework/performance/)
Each Dremio object, such as a space, project, or dataset, can have only one owner. By default, the user who creates the object becomes its owner. However, user accounts may be removed over time as team members leave the organization. If ownership is tied to a user who is later deactivated, that object can become inaccessible or require manual reassignment.
To avoid this, assign ownership of important objects to a role. Roles can include multiple users, which prevents critical objects from becoming orphaned.
Was this page helpful?
[Previous Security](/help-support/well-architected-framework/security)[Next Cost Optimization](/help-support/well-architected-framework/cost)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Security](/help-support/well-architected-framework/security)[Next Cost Optimization](/help-support/well-architected-framework/cost)
!
