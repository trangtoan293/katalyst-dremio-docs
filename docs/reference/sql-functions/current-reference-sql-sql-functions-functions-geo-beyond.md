---
url: /reference/sql/sql-functions/functions/GEO_BEYOND
slug: /reference/sql/sql-functions/functions/GEO_BEYOND
title: "GEO_BEYOND | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64316.996083916
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * GEO_BEYOND

Version: current [26.x]
On this page
**Categories** : [Geospatial](/reference/sql/sql-functions)
# GEO_BEYOND
Returns whether or not the two points are beyond the distance specified in meters.
## Syntax
### GEO_BEYOND(_lat1_ float, _lon1_ float, _lat2_ float, _lon2_ float, _distance_ double) → boolean[​](/reference/sql/sql-functions)
  * lat1: The latitude of the source location in degrees.
  * lon1: The longitude of the source location in degrees.
  * lat2: The latitude of the destination location in degrees.
  * lon2: The longitude of the destination location in degrees.
  * distance: The specified distance between the two points in meters.


**Examples**
Determine whether the distance from Venice, Italy to Paris, France is greater than 800,000 meters.

```
SELECT GEO_BEYOND(CAST(45.4408 AS FLOAT), CAST(12.3155 AS FLOAT), CAST(48.8566 AS FLOAT), CAST(2.3522 AS FLOAT), CAST(800000 AS DOUBLE))  
-- True  

```

## Usage Notes[​](/reference/sql/sql-functions)
The _lat_ and _lon_ parameters to this function can only be the `FLOAT` data type. The _distance_ parameter can only be the `DOUBLE` data type. You must `CAST` other data types for _lat_ and _lon_ to `FLOAT` and the _distance_ parameter to `DOUBLE`. This function calculates the result using the Haversine distance algorithm.
Was this page helpful?
[Previous FROM_HEX](/reference/sql/sql-functions)[Next GEO_DISTANCE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous FROM_HEX](/reference/sql/sql-functions)[Next GEO_DISTANCE](/reference/sql/sql-functions)
