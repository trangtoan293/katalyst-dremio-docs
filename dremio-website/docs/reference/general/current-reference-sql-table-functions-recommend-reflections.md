---
url: /reference/sql/table-functions/recommend-reflections
title: "SYS.RECOMMEND_REFLECTIONS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64378.761329666
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [Table Functions](/reference/sql/table-functions)
  * SYS.RECOMMEND_REFLECTIONS

Version: current [26.x]
On this page
# SYS.RECOMMEND_REFLECTIONS
Returns a table of one or more recommendations. For more information, see [Reflection Recommendations](/acceleration/manual-reflections#running-the-sysrecommend_reflections-table-function).
Syntax

```
SELECT * FROM TABLE(SYS.RECOMMEND_REFLECTIONS(ARRAY['<jobId>', '<jobId>']))  

```

## Parameter[​](/reference/sql/table-functions/recommend-reflections#parameter "Direct link to Parameter")
ARRAY['`jobId`', '`jobId`']
An array literal that contains the job IDs for the SQL queries that you want to accelerate. You can list up to 100 job IDs, and you must have permission to view every job you list in the query.
## Example[​](/reference/sql/table-functions/recommend-reflections#example "Direct link to Example")
Request a Reflection recommendation for a query

```
SELECT * FROM TABLE(SYS.RECOMMEND_REFLECTIONS(ARRAY['844c0023-6272-8b16-aef3-aea289acadb1']))  

```

Example of the query result  
| view_sql  | reflection_sql  | job_ids  | reflection_score  | average_improvement_factor  | average_improvement_ms  |  
| --- | --- | --- | --- | --- | --- |  
| CREATE VIEW "recommended_view"."Dataset_9d74a03b-747a-42a2-a5ca-7f9c6f77b55d" AS SELECT "part"."P_BRAND" AS "F0[P_BRAND]", "part"."P_SIZE" AS "F1[P_SIZE]", "part"."P_PARTKEY" AS "extra#0", "part"."P_NAME" AS "extra#1", "part"."P_MFGR" AS "extra#2", "part"."P_TYPE" AS "extra#4", "part"."P_CONTAINER" AS "extra#6", "part"."P_RETAILPRICE" AS "extra#7", "part"."P_COMMENT" AS "extra#8", "lineitem"."L_ORDERKEY" AS "extra#9", "lineitem"."L_PARTKEY" AS "extra#10", "lineitem"."L_SUPPKEY" AS "extra#11", "lineitem"."L_LINENUMBER" AS "extra#12", "lineitem"."L_QUANTITY" AS "extra#13", "lineitem"."L_EXTENDEDPRICE" AS "extra#14", "lineitem"."L_DISCOUNT" AS "extra#15", "lineitem"."L_TAX" AS "extra#16", "lineitem"."L_RETURNFLAG" AS "extra#17", "lineitem"."L_LINESTATUS" AS "extra#18", "lineitem"."L_SHIPDATE" AS "extra#19", "lineitem"."L_COMMITDATE" AS "extra#20", "lineitem"."L_RECEIPTDATE" AS "extra#21", "lineitem"."L_SHIPINSTRUCT" AS "extra#22", "lineitem"."L_SHIPMODE" AS "extra#23", "lineitem"."L_COMMENT" AS "extra#24"  
FROM "s3"."bucket1"."tpch"."sf10"."parquet"."lineitem"  
INNER JOIN "s3"."bucket1"."tpch"."sf10"."parquet"."part" ON "part"."P_PARTKEY" = "lineitem"."L_PARTKEY"  | ALTER DATASET "recommended_view"."Dataset_9d74a03b-747a-42a2-a5ca-7f9c6f77b55d" CREATE AGGREGATE Reflection "agg_0e07a376-7f8e-4c68-b2ce-6f6e819bebe6" USING DIMENSIONS ("F0[P_BRAND]") MEASURES ("F1[P_SIZE]" (MAX))  | "6j6c34cf-9drf-b07a-5ab7-abea69a66d00", "1a3c67c0-aab0-f9fb-97b4-af374b520100", "1a3c67c0-db35-3645-9ef1-2a84e4d0ce00"  | 50.00  | 10.00  | 7196  |  
### Columns[​](/reference/sql/table-functions/recommend-reflections#columns "Direct link to Columns")  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| view_sql  | varchar  |  **If the recommendation is for a default raw Reflection:**   
The value in this field is `--Default Raw Reflection`.  
  
**If the recommendation is for an aggregation Reflection:**   
An SQL command that creates a view based on the initial SQL query in the referenced job ID. Dremio uses this view to create an aggregation Reflection when you run the SQL command from the `reflection_sql` column. Before running this command, ensure that you have already created a catalog or folder named `recommended_view`.  |  
| reflection_sql  | varchar  |  **If the recommendation is for a default raw Reflection:**   
An SQL command for defining the Reflection on an existing view.  
  
**If the recommendation is for an aggregation Reflection:**  
An SQL command that alters and adds an aggregation Reflection to the view that is created when you run the SQL command in the `view_sql` column. Before running this command, ensure that you have run the corresponding command in the `view_sql` column.  
  
Dremio automatically consolidates recommendations for aggregation Reflections when possible to create a single recommendation for similar SQL queries, so the output table may not contain an individual row that corresponds to each job ID listed in the `SYS.RECOMMEND_REFLECTIONS` query.  |  
| job_ids  | list  | The unique identifier of the jobs that ran the queries for which the recommendation is given.  |  
| reflection_score  | double  | Dremio's score for the recommended Reflection's quality, on a scale of 0 (worst) to 100 (best). The reflection_score value considers the recommended Reflection's anticipated quality compared to existing Reflections and other recommended Reflections, as well as the likely improvement in query run times if the recommended Reflection is implemented.  |  
| average_improvement_factor  | double  | The likely average multiplicative rate of improvement for each query if you implement the recommended Reflection. For example, if the average_improvement_factor value is 2.34, implementing the recommended Reflection is likely to speed up each query by 2.34 times, on average.  |  
| average_improvement_ms  | double  | The likely average improvement, in milliseconds, for each query if you implement the recommended Reflection. For example, if the average_improvement_ms value is 5400, implementing the recommended Reflection is likely to save an average of 5400 milliseconds for each query that uses the Reflection.  |  
### Limitations[​](/reference/sql/table-functions/recommend-reflections#limitations "Direct link to Limitations")
  * The function cannot provide recommendations for jobs with multiple nested queries that contain joins.
  * An SQL query can contain only inner joins. Outer joins that are part of a view definition are also supported. Other types of joins are not supported.
  * An SQL query cannot contain [Window functions](/reference/sql/sql-functions).


Was this page helpful?
[Previous Table Functions](/reference/sql/table-functions)[Next SYS.REFLECTION_LINEAGE](/reference/sql/table-functions/reflection-lineage)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Table Functions](/reference/sql/table-functions)[Next SYS.REFLECTION_LINEAGE](/reference/sql/table-functions/reflection-lineage)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Ftable-functions%2Frecommend-reflections%2F&_biz_t=1777950699123&_biz_i=SYS.RECOMMEND_REFLECTIONS%20%7C%20Dremio%20Documentation&_biz_n=731&rnd=43929&cdn_o=a&_biz_z=1777950699123)
