---
url: /reference/sql/data-types/mappings/mongo
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Microsoft SQL Server Data Types](/reference/sql/data-types/mappings/microsoft-sql-server)[Next MySQL Data Types](/reference/sql/data-types/mappings/mysql)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fdata-types%2Fmappings%2Fmysql%2F&_biz_t=1777950582998&_biz_i=MySQL%20Data%20Types%20%7C%20Dremio%20Documentation&_biz_n=511&rnd=750113&cdn_o=a&_biz_z=1777950583011)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fdata-types%2Fmappings%2Fmongo%2F&_biz_t=1777950583011&_biz_i=MongoDB%20Data%20Types%20%7C%20Dremio%20Documentation&_biz_n=512&rnd=460727&cdn_o=a&_biz_z=1777950583012)
