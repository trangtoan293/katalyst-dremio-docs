---
url: /reference/sql/sql-functions/functions/MAP_VALUES
slug: /reference/sql/sql-functions/functions/MAP_VALUES
title: "MAP_VALUES | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64331.382829083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * MAP_VALUES

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# MAP_VALUES
Returns all values from a map expression.
## Syntax
### MAP_VALUES(_input_ map) → array[​](/reference/sql/sql-functions)
  * input: A map expression for which to return an array of values.


**Examples**
MAP_VALUES example

```
SELECT MAP_VALUES(properties)  
-- ['Hardcover', '2002', 'Blue']  

```

MAP_VALUES example returning literal map values

```
SELECT MAP_VALUES(MAP_Col) FROM (SELECT MAP['a','1', 'b', '2'] as MAP_Col)  
-- ['1', '2']  

```

Was this page helpful?
[Previous MAP_KEYS](/reference/sql/sql-functions)[Next MASK](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MAP_KEYS](/reference/sql/sql-functions)[Next MASK](/reference/sql/sql-functions)
!
