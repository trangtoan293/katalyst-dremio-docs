---
url: /reference/sql/data-types/mappings/elasticsearch
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous IBM Db2 Data Types](/reference/sql/data-types/mappings/db2)[Next Hive Data Types](/reference/sql/data-types/mappings/hive)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fdata-types%2Fmappings%2Felasticsearch%2F&_biz_t=1777950582542&_biz_i=Elasticsearch%20Data%20Types%20%7C%20Dremio%20Documentation&_biz_n=510&rnd=493025&cdn_o=a&_biz_z=1777950582542)
