---
url: /reference/sql/sql-functions/functions/ST_FROMGEOHASH
title: "ST_FROMGEOHASH | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.973181375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ST_FROMGEOHASH

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions), [Geospatial](/reference/sql/sql-functions), [Conversion](/reference/sql/sql-functions)
# ST_FROMGEOHASH
Returns the latitude and longitude coordinates of the center of the given geohash.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ST_FROMGEOHASH(_geohash_ varchar) → struct&lt;latitude: double, longitude: double&gt;[​](/reference/sql/sql-functions#st_fromgeohashgeohash-varchar--structlatitude-double-longitude-double "Direct link to st_fromgeohashgeohash-varchar--structlatitude-double-longitude-double")
  * geohash: The geohash string to decode.


**Examples**
ST_FROMGEOHASH example

```
SELECT ST_FROMGEOHASH ('ezs42')  
-- {'Latitude': 42.60498046875, 'Longitude': -5.60302734375}  

```

ST_FROMGEOHASH example

```
SELECT ST_FROMGEOHASH ('9q9j8ue2v71y5zzy0s4q')  
-- {'Latitude': 37.554162000000034, 'Longitude': -122.30609999999993}  

```

ST_FROMGEOHASH example

```
SELECT ST_FROMGEOHASH ('ezs42')['latitude']  
-- 42.60498046875  

```

ST_FROMGEOHASH example

```
SELECT ST_FROMGEOHASH ('ezs42')['longitude']  
-- -5.60302734375  

```

Was this page helpful?
[Previous STRPOS](/reference/sql/sql-functions)[Next ST_GEOHASH](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous STRPOS](/reference/sql/sql-functions)[Next ST_GEOHASH](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FST_FROMGEOHASH%2F&_biz_t=1777950678469&_biz_i=ST_FROMGEOHASH%20%7C%20Dremio%20Documentation&_biz_n=689&rnd=737192&cdn_o=a&_biz_z=1777950678470)
