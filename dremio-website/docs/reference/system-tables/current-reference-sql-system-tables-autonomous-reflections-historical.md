---
url: /reference/sql/system-tables/autonomous-reflections-historical
title: "SYS.HISTORY.AUTONOMOUS_REFLECTIONS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64372.382408041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.HISTORY.AUTONOMOUS_REFLECTIONS

Version: current [26.x]
On this page
# SYS.HISTORY.AUTONOMOUS_REFLECTIONS
The `sys.history.autonomous_reflections` table contains the historical metadata for Autonomous Reflections.
Syntax

```
SELECT *  
FROM sys.history.autonomous_reflections  

```

## Example Output[​](/reference/sql/system-tables/autonomous-reflections-historical#example-output "Direct link to Example Output")  
| reflectionName  | reflection_id  | createdAt  | reflectionType  | enabled  | operationSource  | changeContent  | datasetId  | datasetName  | operationType  | autonomous  | score  | avgDailyAcceleratedCount  | avgDailyImprovementInMs  | avgImprovementFactor  | benefitsScoreDesc  | reason  | viewSql  | sqlType  | beforeImage  | key  | datasetPath  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| AutoRef_Dataset_9a48f54a-d241-46cf-9e71-ae25642cf22c_aggregation  | 4390b0f5-0a0d-4b23-9a96-d9e9c5427baf  | 1748883691293  | AGGREGATION  | true  | REST  | "CREATE VIEW "__system_managed_views"."Dataset_9a48f54a-d241-46cf-9e71-ae25642cf22c" AS SELECT "NYC-taxi-trips-iceberg"."fare_amount" AS "F0[fare_amount]", "NYC-taxi-trips-iceberg"."passenger_count" AS "F1[passenger_count]"\nFROM "Samples"."samples.dremio.com"."NYC-taxi-trips-iceberg"\n ; ALTER DATASET "__system_managed_views"."Dataset_9a48f54a-d241-46cf-9e71-ae25642cf22c" CREATE AGGREGATE Reflection "agg_336b6cd6-9ade-4657-b685-4450c4dca951" USING DIMENSIONS ("F1[passenger_count]") MEASURES ("F0[fare_amount]" (SUM))  | aa0b4932-e51d-4fed-93bf-e03b4a9b0a02  | Dataset_9a48f54a-d241-46cf-9e71-ae25642cf22c  | ADD  | true  | 42.47425033306188  | 5.0  | 22366.980051424373  | 10.00000020692081  | FAIR  | CREATE autonomous Reflection in Autonomous Mode  | CREATE autonomous Reflection in Autonomous Mode","viewSql":"CREATE VIEW "__system_managed_views"."Dataset_9a48f54a-d241-46cf-9e71-ae25642cf22c" AS SELECT "NYC-taxi-trips-iceberg"."fare_amount" AS "F0[fare_amount]", "NYC-taxi-trips-iceberg"."passenger_count" AS "F1[passenger_count]"\nFROM "Samples"."samples.dremio.com"."NYC-taxi-trips-iceberg"\n  | CREATE_Reflection  | false  | 4390b0f5-0a0d-4b23-9a96-d9e9c5427baf_CREATE_Reflection  | ["__system_managed_views","Dataset_9a48f54a-d241-46cf-9e71-ae25642cf22c"]  |  
| AutoRef_v1_raw  | 68bd2902-ad85-4793-ab6d-4f425b798775  | 1748883691257  | RAW  | true  | REST  | --Default Raw Reflection ; ALTER DATASET test.v1 CREATE RAW Reflection "raw_2311879c-79c4-4477-a1ed-6b4c999165bc" USING DISPLAY ("passenger_count", "EXPR$1")  | 8984be51-cd00-43f7-95e3-918eeabc51db  | v1  | ADD  | true  | 42.47425033306188  | 5.0  | 22366.980051424373  | 10.00000020692081  | FAIR  | CREATE autonomous Reflection in Autonomous Mode  | --Default Raw Reflection  | CREATE_Reflection  | false  | 68bd2902-ad85-4793-ab6d-4f425b798775_CREATE_Reflection  | ["test","v1"]  |  
## Columns[​](/reference/sql/system-tables/autonomous-reflections-historical#columns "Direct link to Columns")  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| reflectionName  | varchar  | Names the Autonomous Reflection.  |  
| reflection_id  | varchar  | Identifies the UUID of the Autonomous Reflection.  |  
| createdAt  | timestamp  | Represents the date and time (in UTC format) when the Autonomous Reflection was created.  |  
| reflectionType  | varchar  | Specifies the type of Autonomous Reflection. Enum: `AGGREGATION`, `RAW`  |  
| enabled  | boolean  | Indicates whether the Autonomous Reflection is currently enabled.  |  
| operationSource  | varchar  | Specifies the source of the operation. Enum: `SQL`, `REST`  |  
| changeContent  | varchar  | Displays content changes based on the value of `operationSource`. Shows a SQL statement when `operationSource` is `SQL`, and lists specific changes when the `operationSource` is `REST`.  |  
| datasetId  | varchar  | Identifies the ID of the dataset associated with the Autonomous Reflection.  |  
| datasetName  | varchar  | Identifies the name of the dataset associated with the Autonomous Reflection.  |  
| operationType  | varchar  | Specifies the type of operation performed. Enum: `ADD`, `REMOVE`  |  
| autonomous  | boolean  | Indicates whether the Reflection is autonomous.  |  
| score  | double  | Shows the score generated for the Autonomous Reflection.  |  
| avgDailyAcceleratedCount  | double  | Lists the average number of times per day the Autonomous Reflection is used to accelerate queries.  |  
| avgDailyImprovementInMs  | double  | Lists the average amount of time (in milliseconds) saved per day due to the Autonomous Reflection.  |  
| avgImprovementFactor  | double  | Measures how much faster affected queries run due to the Autonomous Reflection.  |  
| benefitsScoreDesc  | varchar  | Provides a qualitative description of the Autonomous Reflection's score. Enum: `EMPTY`, `NEW`, `POOR`, `FAIR`, `GOOD`  |  
| reason  | varchar  | Provides the rationale used by the Autonomous Reflection in making decisions.  |  
| viewSql  | varchar  | Identifies the SQL statement used to create the view associated with the Autonomous Reflection.  |  
| sqlType  | varchar  | Spectifies the type of SQL operation. Enum: `CREATE_VIEW`, `DROP_VIEW`, `CREATE_REFLECTION`, `DROP_REFLECTION`, `DROP_TABLE`, `EXISTING_REFLECTION`  |  
| beforeImage  | boolean  | Indicates whether the history record captures the object's state before the operation. For example, the `beforeImage` is `false` for a `CREATE VIEW` operation since the view doesn't exist yet. The `beforeImage` is `true` for a `DROP TABLE` operation, as the record reflects the table's state prior to deletion.  |  
| key  | varchar  | Identifies the key to the key-value store backing the `sys.history.autonomous_reflections` table. Typically formed by concatenating the `reflectionId` and `sqlType`. The key is unique to ensure history entries are not overwritten.  |  
| datasetPath  | varchar  | Shows the path to the dataset associated with the Autonomous Reflection.  |  
Was this page helpful?
[Previous System Tables](/reference/sql/system-tables)[Next SYS.COPY_ERRORS_HISTORY](/reference/sql/system-tables/copy-errors-history)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous System Tables](/reference/sql/system-tables)[Next SYS.COPY_ERRORS_HISTORY](/reference/sql/system-tables/copy-errors-history)
