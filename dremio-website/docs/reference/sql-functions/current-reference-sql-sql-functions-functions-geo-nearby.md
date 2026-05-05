---
url: /reference/sql/sql-functions/functions/GEO_NEARBY
title: "GEO_NEARBY | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64317.431967708
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * GEO_NEARBY

Version: current [26.x]
On this page
**Categories** : [Geospatial](/reference/sql/sql-functions)
# GEO_NEARBY
Returns whether or not the two points are within the distance specified in meters.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### GEO_NEARBY(_lat1_ float, _lon1_ float, _lat2_ float, _lon2_ float, _distance_ double) → boolean[​](/reference/sql/sql-functions#geo_nearbylat1-float-lon1-float-lat2-float-lon2-float-distance-double--boolean "Direct link to geo_nearbylat1-float-lon1-float-lat2-float-lon2-float-distance-double--boolean")
  * lat1: The latitude of the source location in degrees.
  * lon1: The longitude of the source location in degrees.
  * lat2: The latitude of the destination location in degrees.
  * lon2: The longitude of the destination location in degrees.
  * distance: The specified distance between the two points in meters.


**Examples**
Determine whether the distance from Venice, Italy to Paris, France is within 800,000 meters.

```
SELECT GEO_NEARBY(CAST(45.4408 AS FLOAT), CAST(12.3155 AS FLOAT), CAST(48.8566 AS FLOAT), CAST(2.3522 AS FLOAT), CAST(800000 AS DOUBLE))  
-- False  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
The _lat_ and _lon_ parameters to this function can only be the `FLOAT` data type. The _distance_ parameter can only be the `DOUBLE` data type. You must `CAST` other data types for _lat_ and _lon_ to `FLOAT` and the _distance_ parameter to `DOUBLE`. This function calculates the result using the Haversine distance algorithm.
Was this page helpful?
[Previous GEO_DISTANCE](/reference/sql/sql-functions)[Next GREATEST](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous GEO_DISTANCE](/reference/sql/sql-functions)[Next GREATEST](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FGEO_NEARBY%2F&_biz_t=1777950637171&_biz_i=Dremio%20Documentation&_biz_n=604&rnd=589310&cdn_o=a&_biz_z=1777950637172)
