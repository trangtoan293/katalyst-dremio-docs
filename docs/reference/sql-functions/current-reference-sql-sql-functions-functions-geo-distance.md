---
url: /reference/sql/sql-functions/functions/GEO_DISTANCE
title: "GEO_DISTANCE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64317.234012541
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * GEO_DISTANCE

Version: current [26.x]
On this page
**Categories** : [Geospatial](/reference/sql/sql-functions)
# GEO_DISTANCE
Returns the distance between two points in meters.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### GEO_DISTANCE(_lat1_ float, _lon1_ float, _lat2_ float, _lon2_ float) → double[​](/reference/sql/sql-functions#geo_distancelat1-float-lon1-float-lat2-float-lon2-float--double "Direct link to geo_distancelat1-float-lon1-float-lat2-float-lon2-float--double")
  * lat1: The latitude of the source location in degrees.
  * lon1: The longitude of the source location in degrees.
  * lat2: The latitude of the destination location in degrees.
  * lon2: The longitude of the destination location in degrees.


**Examples**
Determine the distance from Venice, Italy to Paris, France in meters.

```
SELECT GEO_DISTANCE(CAST(45.4408 AS FLOAT), CAST(12.3155 AS FLOAT), CAST(48.8566 AS FLOAT), CAST(2.3522 AS FLOAT))  
-- 842876.0300143225  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
The parameters to this function can only be the `FLOAT` data type. You must `CAST` other data types to `FLOAT`. This function calculates the result using the Haversine distance algorithm.
Was this page helpful?
[Previous GEO_BEYOND](/reference/sql/sql-functions)[Next GEO_NEARBY](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous GEO_BEYOND](/reference/sql/sql-functions)[Next GEO_NEARBY](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FGEO_DISTANCE%2F&_biz_t=1777950636749&_biz_i=GEO_DISTANCE%20%7C%20Dremio%20Documentation&_biz_n=603&rnd=132747&cdn_o=a&_biz_z=1777950636749)
