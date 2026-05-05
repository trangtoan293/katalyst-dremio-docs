---
url: /reference/sql/sql-functions/functions/GEO_DISTANCE
slug: /reference/sql/sql-functions/functions/GEO_DISTANCE
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
## Syntax
### GEO_DISTANCE(_lat1_ float, _lon1_ float, _lat2_ float, _lon2_ float) → double[​](/reference/sql/sql-functions)
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

## Usage Notes[​](/reference/sql/sql-functions)
The parameters to this function can only be the `FLOAT` data type. You must `CAST` other data types to `FLOAT`. This function calculates the result using the Haversine distance algorithm.
Was this page helpful?
[Previous GEO_BEYOND](/reference/sql/sql-functions)[Next GEO_NEARBY](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous GEO_BEYOND](/reference/sql/sql-functions)[Next GEO_NEARBY](/reference/sql/sql-functions)
!
