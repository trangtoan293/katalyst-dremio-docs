---
url: /reference/sql/sql-functions/functions/SUBLIST
slug: /reference/sql/sql-functions/functions/SUBLIST
title: "SUBLIST | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.99996825
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SUBLIST

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# SUBLIST
Returns an array constructed from the specified subset of elements of the input array.
## Syntax
### SUBLIST(_arr_ LIST, _offset_ INT, _length_ INT) → LIST[​](/reference/sql/sql-functions)
  * arr: The input array.
  * offset: The offset from which the sublist should start.
  * length: The maximum length of the sublist.


**Examples**
SUBLIST example

```
SELECT SUBLIST(ARRAY[1,2,3,4,5], 0, 3)  
-- [1,2,3]  

```

SUBLIST example

```
SELECT SUBLIST(ARRAY[1,2,3,4,5], 3, 3)  
-- [3,4,5]  

```

Was this page helpful?
[Previous ST_GEOHASH](/reference/sql/sql-functions)[Next SUBSTR](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ST_GEOHASH](/reference/sql/sql-functions)[Next SUBSTR](/reference/sql/sql-functions)
!
