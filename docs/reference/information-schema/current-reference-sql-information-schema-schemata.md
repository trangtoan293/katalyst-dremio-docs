---
url: /reference/sql/information-schema/schemata
slug: /reference/sql/information-schema/schemata
title: "INFORMATION_SCHEMA.SCHEMATA | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64264.020319208
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [Information Schema](/reference/sql/information-schema)
  * INFORMATION_SCHEMA.SCHEMATA

Version: current [26.x]
On this page
# INFORMATION_SCHEMA.SCHEMATA
The INFORMATION_SCHEMA.SCHEMATA view contains metadata for the sources, spaces in a project. Embedded folders within a space, for example, Samples.samples.dremio.com, which contain datasets are also represented as a schema.
Syntax

```
SELECT *   
FROM INFORMATION_SCHEMA.SCHEMATA  

```

## Example Output​  
| CATALOG_NAME  | SCHEMA_NAME  | SCHEMA_OWNER  | TYPE  | IS_MUTABLE  |  
| --- | --- | --- | --- | --- |  
| DREMIO  | $scratch  | `owner`  | SIMPLE  | NO  |  
| DREMIO  | @  | `owner`  | SIMPLE  | NO  |  
| DREMIO  | INFORMATION_SCHEMA  | `owner`  | SIMPLE  | NO  |  
| DREMIO  | Samples  | `owner`  | SIMPLE  | NO  |  
| DREMIO  | Samples.samples.dremio.com  | `owner`  | SIMPLE  | NO  |  
| DREMIO  | Samples.samples.Dremio University  | `owner`  | SIMPLE  | NO  |  
| DREMIO  | sys  | `owner`  | SIMPLE  | NO  |  
| DREMIO  | sys.cache  | `owner`  | SIMPLE  | NO  |  
| DREMIO  | test  | `owner`  | SIMPLE  | NO  |  
| DREMIO  | Weather  | `owner`  | SIMPLE  | NO  |  
## Fields​  
| Field  | Data Type  | Description  |  
| --- | --- | --- |  
| CATALOG_NAME  | varchar  | Name of the catalog, which is always DREMIO.  |  
| SCHEMA_NAME  | varchar  | Path (source, space, folders) that contains datasets.  |  
| SCHEMA_OWNER  | varchar  | Owner of the schema. This is an inherited field and `owner` is always returned.  |  
| TYPE  | varchar  | Type of the schema, which is always SIMPLE.  |  
| IS_MUTABLE  | varchar  | The value in this column is YES if the schema can be modified. NO if it's immutable.  |  
Was this page helpful?
[Previous INFORMATION_SCHEMA.COLUMNS](/reference/sql/information-schema/columns)[Next INFORMATION_SCHEMA."TABLES"](/reference/sql/information-schema/tables)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous INFORMATION_SCHEMA.COLUMNS](/reference/sql/information-schema/columns)[Next INFORMATION_SCHEMA."TABLES"](/reference/sql/information-schema/tables)
!
