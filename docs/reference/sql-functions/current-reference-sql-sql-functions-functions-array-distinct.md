---
url: /reference/sql/sql-functions/functions/ARRAY_DISTINCT
slug: /reference/sql/sql-functions/functions/ARRAY_DISTINCT
title: "ARRAY_DISTINCT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64279.997953291
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_DISTINCT

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_DISTINCT
Given an input array, returns an equivalent array that includes only distinct elements.
## Syntax
### ARRAY_DISTINCT(_input_ LIST) → LIST[​](/reference/sql/sql-functions)
  * input: The input array from which to return only distinct elements.


**Examples**
ARRAY_DISTINCT example

```
SELECT ARRAY_DISTINCT(ARRAY[1, 2, 3, 1, 2, 3])  
-- [2, 3, 1]  

```

## Usage Notes[​](/reference/sql/sql-functions)
The elements in the returned array are not listed in any particular order.
Was this page helpful?
[Previous ARRAY_CONTAINS](/reference/sql/sql-functions)[Next ARRAY_FREQUENCY](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_CONTAINS](/reference/sql/sql-functions)[Next ARRAY_FREQUENCY](/reference/sql/sql-functions)
!!
