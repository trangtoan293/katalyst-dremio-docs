---
url: /reference/sql/information-schema
slug: /reference/sql/information-schema
title: "Information Schema | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64068.507852958
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * Information Schema

Version: current [26.x]
# Information Schema
Dremio stores metadata for the objects in your project in the Information Schema, which is a set of system-generated read-only views (cannot be modified or dropped). The Dremio Information Schema is based on the ANSI Information Schema.
The following views can be queried to return metadata for the respective catalog objects.  
| View  | Description  |  
| --- | --- |  
| [INFORMATION_SCHEMA.CATALOGS](/reference/sql/information-schema/catalogs)  | The information about the catalog that contains the metadata of a project.  |  
| [INFORMATION_SCHEMA.COLUMNS](/reference/sql/information-schema/columns)  | The metadata for all the columns within the tables and views in a project.  |  
| [INFORMATION_SCHEMA.SCHEMATA](/reference/sql/information-schema/schemata)  | The metadata for the sources and spaces in a project.  |  
| [INFORMATION_SCHEMA."TABLES"](/reference/sql/information-schema/tables)  | The metadata for the tables and views in a project.  |  
| [INFORMATION_SCHEMA.VIEWS](/reference/sql/information-schema/views)  | The metadata for views in a project.  |  
Was this page helpful?
[Previous System Tables](/reference/sql/system-tables)[Next INFORMATION_SCHEMA.CATALOGS](/reference/sql/information-schema/catalogs)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous System Tables](/reference/sql/system-tables)[Next INFORMATION_SCHEMA.CATALOGS](/reference/sql/information-schema/catalogs)
