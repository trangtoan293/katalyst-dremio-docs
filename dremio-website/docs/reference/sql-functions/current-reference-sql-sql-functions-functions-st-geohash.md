---
url: /reference/sql/sql-functions/functions/ST_GEOHASH
title: "ST_GEOHASH | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.736284166
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ST_GEOHASH

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions), [Geospatial](/reference/sql/sql-functions), [Conversion](/reference/sql/sql-functions)
# ST_GEOHASH
Returns the corresponding geohash for the given latitude and longitude coordinates.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ST_GEOHASH(_latitude_ double, _longitude_ double [, _precision_ integer]) → varchar[​](/reference/sql/sql-functions#st_geohashlatitude-double-longitude-double--precision-integer--varchar "Direct link to st_geohashlatitude-double-longitude-double--precision-integer--varchar")
  * latitude: Latitude of the location to encode.
  * longitude: Longitude of the location to encode.
  * precision (optional): The number of characters to use in the geohash (minimum is 1, maximum is 20, default is 20).


**Examples**
ST_GEOHASH example

```
SELECT ST_GEOHASH (42.5049321, -5.7891234, 12)  
-- ezecu3b3ptss  

```

ST_GEOHASH example

```
SELECT ST_GEOHASH (-82.306100, 37.554162)  
-- hc6ey8dh5quv0zpc8w2g  

```

ST_GEOHASH example

```
SELECT ST_GEOHASH (-82.306100, 37.554162, 5)  
-- hc6ey  

```

ST_GEOHASH example

```
SELECT ST_GEOHASH (3.14, -1.34)  
-- ebx1ce85zdrtde46u021  

```

ST_GEOHASH example

```
SELECT ST_GEOHASH (3.14, -1.34, 5)  
-- ebx1c  

```

Was this page helpful?
[Previous ST_FROMGEOHASH](/reference/sql/sql-functions)[Next SUBLIST](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ST_FROMGEOHASH](/reference/sql/sql-functions)[Next SUBLIST](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FST_GEOHASH%2F&_biz_t=1777950678692&_biz_i=ST_GEOHASH%20%7C%20Dremio%20Documentation&_biz_n=690&rnd=684851&cdn_o=a&_biz_z=1777950678692)
