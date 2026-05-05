---
url: /reference/sql/data-types/mappings/elasticsearch
slug: /reference/sql/data-types/mappings/elasticsearch
title: "Elasticsearch Data Types | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64263.308649375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [Data Types](/reference/sql/data-types)
  * [Mappings for External Sources](/reference/sql/data-types/mappings)
  * Elasticsearch Data Types

Version: current [26.x]
# Elasticsearch Data Types
Dremio supports selecting the following Elasticsearch Database types. The following table shows the mappings from Elasticsearch to Dremio data types. If there are additional Elasticsearch types not listed in the table, then those types are not supported in Dremio.  
| Elasticsearch Database Type  | Dremio Type  |  
| --- | --- |  
| ATTACHMENT  | VARBINARY  |  
| BINARY  | VARBINARY  |  
| BOOLEAN  | BOOLEAN  |  
| BYTE  | INTEGER  |  
| SCALE_FLOAT  | DOUBLE  |  
| DATE  | DATE  |  
| DOUBLE  | DOUBLE  |  
| FLOAT  | FLOAT  |  
| GEO_POINT  | {'{'})'{'{'})'{'}'}) "lat": DOUBLE, "long": DOUBLE {'{'})'{'}'}'{'}'}  |  
| GEO_SHAPE  | {'{'})'{'{'})'{'}'}) "type": VARCHAR,   
"coordinates": {'{'})'{'{'})'{'}'}) DOUBLE, [{'{'})'{'{'})'{'}'}) DOUBLE, [{'{'})'{'{'})'{'}'}) DOUBLE, [{'{'})'{'{'})'{'}'}) DOUBLE, [{'{'})'{'{'})'{'}'}) DOUBLE, [DOUBLE] {'{'})'{'}'}'{'}'}] {'{'})'{'}'}'{'}'}] {'{'})'{'}'}'{'}'}] {'{'})'{'}'}'{'}'}], {'{'})'{'}'}'{'}'},   
"radius": VARCHAR,   
"orientation": VARCHAR,   
"geometries": [ {'{'})'{'{'})'{'}'}) "type": VARCHAR, "coordinates": {'{'})'{'{'})'{'}'}) DOUBLE, [{'{'})'{'{'})'{'}'}) DOUBLE, [{'{'})'{'{'})'{'}'}) DOUBLE, [{'{'})'{'{'})'{'}'}) DOUBLE, [{'{'})'{'{'})'{'}'}) DOUBLE, [DOUBLE] {'{'})'{'}'}'{'}'}] {'{'})'{'}'}'{'}'}] {'{'})'{'}'}'{'}'}] {'{'})'{'}'}'{'}'}], {'{'})'{'}'}'{'}'}, "radius": VARCHAR, "orientation": VARCHAR {'{'})'{'}'}'{'}'} ] {'{'})'{'}'}'{'}'}  |  
| HALF_FLOAT  | FLOAT  |  
| INTEGER  | INTEGER  |  
| IP  | VARCHAR  |  
| KEYWORD  | VARCHAR  |  
| LONG  | BIGINT  |  
| SHORT  | INTEGER  |  
| STRING  | VARCHAR  |  
| TEXT  | VARCHAR  |  
| TIME  | TIME  |  
| TIMESTAMP  | TIMESTAMP  |  
Was this page helpful?
[Previous IBM Db2 Data Types](/reference/sql/data-types/mappings/db2)[Next Hive Data Types](/reference/sql/data-types/mappings/hive)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous IBM Db2 Data Types](/reference/sql/data-types/mappings/db2)[Next Hive Data Types](/reference/sql/data-types/mappings/hive)
!
