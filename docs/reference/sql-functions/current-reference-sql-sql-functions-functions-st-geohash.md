---
url: /reference/sql/sql-functions/functions/ST_GEOHASH
slug: /reference/sql/sql-functions/functions/ST_GEOHASH
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
## Syntax
### ST_GEOHASH(_latitude_ double, _longitude_ double [, _precision_ integer]) → varchar[​](/reference/sql/sql-functions)
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
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ST_FROMGEOHASH](/reference/sql/sql-functions)[Next SUBLIST](/reference/sql/sql-functions)
!
