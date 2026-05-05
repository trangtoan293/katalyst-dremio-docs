---
url: /reference/sql/information-schema/tables
title: "INFORMATION_SCHEMA.\"TABLES\" | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64264.230760416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [Information Schema](/reference/sql/information-schema)
  * INFORMATION_SCHEMA."TABLES"

Version: current [26.x]
On this page
# INFORMATION_SCHEMA."TABLES"
The INFORMATION_SCHEMA."TABLES" view contains metadata for the tables and views in a project.
The name of the view must be encapsulated in quotes ("TABLES") so that it is parsed as the view name instead of the reserved keyword tables.
Syntax

```
SELECT *   
FROM INFORMATION_SCHEMA."TABLES"  

```

## Example Output[​](/reference/sql/information-schema/tables#example-output "Direct link to Example Output")  
| TABLE_CATALOG  | TABLE_SCHEMA  | TABLE_NAME  | TABLE_TYPE  |  
| --- | --- | --- | --- |  
| DREMIO  | INFORMATION_SCHEMA  | CATALOGS  | SYSTEM_TABLE  |  
| DREMIO  | INFORMATION_SCHEMA  | COLUMNS  | SYSTEM_TABLE  |  
| DREMIO  | INFORMATION_SCHEMA  | SCHEMATA  | SYSTEM_TABLE  |  
| DREMIO  | INFORMATION_SCHEMA  | TABLES  | SYSTEM_TABLE  |  
| DREMIO  | INFORMATION_SCHEMA  | VIEWS  | SYSTEM_TABLE  |  
| DREMIO  | sys  | boot  | SYSTEM_TABLE  |  
| DREMIO  | Weather  | SFWeatherElevation  | VIEW  |  
| DREMIO  | Samples.samples.dremio.com  | SF weather 2018-2019.csv  | TABLE  |  
| DREMIO  | Samples.samples.dremio.com  | SF_incidents2016.json  | TABLE  |  
| DREMIO  | sys.cache  | datasets  | SYSTEM_TABLE  |  
## Fields[​](/reference/sql/information-schema/tables#fields "Direct link to Fields")  
| Field  | Data Type  | Description  |  
| --- | --- | --- |  
| TABLE_CATALOG  | varchar  | Name of the catalog, which is always DREMIO.  |  
| TABLE_SCHEMA  | varchar  | The path (source, space, folders) to the table or view.  |  
| TABLE_NAME  | varchar  | The name of the table or view.  |  
| TABLE_TYPE  | varchar  | The type of the object.  
Enum: SYSTEM_TABLE, TABLE, VIEW  |  
Was this page helpful?
[Previous INFORMATION_SCHEMA.SCHEMATA](/reference/sql/information-schema/schemata)[Next INFORMATION_SCHEMA.VIEWS](/reference/sql/information-schema/views)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous INFORMATION_SCHEMA.SCHEMATA](/reference/sql/information-schema/schemata)[Next INFORMATION_SCHEMA.VIEWS](/reference/sql/information-schema/views)
