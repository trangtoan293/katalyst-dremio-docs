---
url: /reference/sql/system-tables/reflection-dependencies
slug: /reference/sql/system-tables/reflection-dependencies
title: "SYS.REFLECTION_DEPENDENCIES | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64373.248748041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.REFLECTION_DEPENDENCIES

Version: current [26.x]
On this page
# SYS.REFLECTION_DEPENDENCIES
The `sys.reflection_dependencies` table contains metadata for Reflection dependencies in the Dremio instance.
Syntax

```
SELECT *  
FROM sys.reflection_dependencies  

```

In Dremio 20+, the `sys.dependencies` table has been renamed to `sys.reflection_dependencies`.
## Example Output​  
| reflection_id  | dependency_id  | dependency_type  | dependency_path  |  
| --- | --- | --- | --- |  
| 58ef99d2-ac06-4886-b76f-da729b872db0  | be2f17da-6c09-4eb9-9fba-db5a76d6d773  | DATASET  | [@dremio, nested_nested1]  |  
| cc8b4c93-c028-427e-b773-8e5aab75c130  | 67fedcc9-841f-41d9-8344-03b826c8c9c2  | DATASET  | [Samples, samples.dremio.com, SF_incidents2016.json]  |  
| 2acccebb-9fe2-4864-b714-664434b0ed37  | 3a276914-bf82-4447-b146-336e950e96e0  | DATASET  | [Samples, samples.dremio.com, NYC-taxi-trips]  |  
| 31e1a2ec-4815-4efb-805d-00c427d00077  | 2ece1ecb-e436-46c1-97dd-ffe50d2d96b2  | DATASET  | [Samples, samples.dremio.com, zips.json]  |  
| 4d42481b-802a-437d-a1c9-9a9dd8d9be03  | 432d5845-b258-4268-b6ab-7681c9afa184  | DATASET  | [@dremio, test_parquet]  |  
| 9fca062d-9ef0-4ece-aae2-00eb9d3ae4d6  | 90a00924-80af-47f2-b2bb-4e5bc2d482ff  | Reflection  | []  |  
## Columns​  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| reflection_id  | varchar  | The UUID to identify the Reflection.  |  
| dependency_id  | varchar  | The UUID to identify the Reflection dependency, which is one of these objects: 
  1. If the Reflection is defined on a table: the table from which the Reflection is derived, either by being defined directly on the table or by being defined on a view that is ultimately derived from the table
  2. If the Reflection is defined on a view: the table or tables that the view is ultimately derived from. If there is more than one table, then this column includes the UUID of each table.
  3. If the Reflection is dependent on another Reflection (for example, an aggregation Reflection that is dependent on a raw Reflection, and can be refreshed only after the raw Reflection is refreshed): the Reflection that must be refreshed first   
**Note:** Only Dremio can create such a relationship between two Reflections.

 |  
| dependency_type  | varchar  | The type of object that must be refreshed before the Reflection can be refreshed.   
Enum: `DATASET`, `REFLECTION`  |  
| dependency_path  | varchar  | The path of the object, if it is a table. If the object is another Reflection, the path is empty.  |  
Was this page helpful?
[Previous SYS.PRIVILEGES](/reference/sql/system-tables/privileges)[Next SYS.REFLECTIONS](/reference/sql/system-tables/reflections)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.PRIVILEGES](/reference/sql/system-tables/privileges)[Next SYS.REFLECTIONS](/reference/sql/system-tables/reflections)
!!
