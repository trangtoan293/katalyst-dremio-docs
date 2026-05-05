---
url: /reference/sql/information-schema/catalogs
slug: /reference/sql/information-schema/catalogs
title: "INFORMATION_SCHEMA.CATALOGS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64264.047891875
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [Information Schema](/reference/sql/information-schema)
  * INFORMATION_SCHEMA.CATALOGS

Version: current [26.x]
On this page
# INFORMATION_SCHEMA.CATALOGS
The INFORMATION_SCHEMA.CATALOGS view contains information about the catalog that contains the metadata of a project. This is the catalog in which the INFORMATION_SCHEMA resides. This view always contains a single row and returns DREMIO as the only catalog in the project.
Syntax

```
SELECT *   
FROM INFORMATION_SCHEMA.CATALOGS  

```

## Example Output​  
| CATALOG_NAME  | CATALOG_DESCRIPTION  | CATALOG_CONNECT  |  
| --- | --- | --- |  
| DREMIO  | The internal metadata used by Dremio  | _empty_  |  
## Fields​  
| Field  | Data Type  | Description  |  
| --- | --- | --- |  
| CATALOG_NAME  | varchar  | The name of the catalog, which is always DREMIO.  |  
| CATALOG_DESCRIPTION  | varchar  | The description for the catalog that contains metadata.  |  
| CATALOG_CONNECT  | varchar  | The connection permissions to the catalog that contains metadata information. This is an inherited field and is always empty.  |  
Was this page helpful?
[Previous Information Schema](/reference/sql/information-schema)[Next INFORMATION_SCHEMA.COLUMNS](/reference/sql/information-schema/columns)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Information Schema](/reference/sql/information-schema)[Next INFORMATION_SCHEMA.COLUMNS](/reference/sql/information-schema/columns)
