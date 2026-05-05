---
url: /reference/sql/data-types/mappings/mongo
slug: /reference/sql/data-types/mappings/mongo
title: "MongoDB Data Types | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64263.603285583
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [Data Types](/reference/sql/data-types)
  * [Mappings for External Sources](/reference/sql/data-types/mappings)
  * MongoDB Data Types

Version: current [26.x]
# MongoDB Data Types
Dremio supports selecting the following MongoDB Database types. The following table shows the mappings from MongoDB to Dremio data types. If there are additional MongoDB types not listed in the table, then those types are not supported in Dremio.  
| MongoDB Database Type  | Dremio Type  |  
| --- | --- |  
| ARRAY  | LIST  |  
| BINDATA  | VARBINARY  |  
| BOOL  | BOOLEAN  |  
| DATE  | TIMESTAMP  |  
| DBPOINTER  | {'{'})'{'{'})'{'}'}) "namespace": VARCHAR, "id": VARBINARY {'{'})'{'}'}'{'}'}  |  
| DOUBLE  | DOUBLE  |  
| INT  | INTEGER (or DOUBLE if store.mongo.read_numbers_as_double set)  |  
| JAVASCRIPT  | VARCHAR  |  
| JAVASCRIPTWITHSCOPE  | {'{'})'{'{'})'{'}'}) "code": VARCHAR, "scope": {'{'})'{'{'})'{'}'}) ... {'{'})'{'}'}'{'}'} {'{'})'{'}'}'{'}'}  |  
| LONG  | BIGINT (or DOUBLE if store.mongo.read_numbers_as_double set)  |  
| OBJECT  | STRUCT  |  
| OBJECTID  | VARBINARY  |  
| REGEX  | {'{'})'{'{'})'{'}'}) "pattern": VARCHAR, "options": VARCHAR {'{'})'{'}'}'{'}'}  |  
| STRING  | VARCHAR  |  
| SYMBOL  | VARCHAR  |  
| TIMESTAMP  | TIMESTAMP  |  
Was this page helpful?
[Previous Microsoft SQL Server Data Types](/reference/sql/data-types/mappings/microsoft-sql-server)[Next MySQL Data Types](/reference/sql/data-types/mappings/mysql)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Microsoft SQL Server Data Types](/reference/sql/data-types/mappings/microsoft-sql-server)[Next MySQL Data Types](/reference/sql/data-types/mappings/mysql)
!!
