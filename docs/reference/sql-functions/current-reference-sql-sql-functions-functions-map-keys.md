---
url: /reference/sql/sql-functions/functions/MAP_KEYS
slug: /reference/sql/sql-functions/functions/MAP_KEYS
title: "MAP_KEYS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64331.17448925
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * MAP_KEYS

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# MAP_KEYS
Returns all keys from a map expression.
## Syntax
### MAP_KEYS(_input_ map) → array of strings[​](/reference/sql/sql-functions)
  * input: A map expression for which to return an array of keys.


**Examples**
MAP_KEYS example

```
SELECT MAP_KEYS(properties)  
-- ['Cover', 'Publication Year', 'Color']  

```

MAP_KEYS example returning literal map values

```
SELECT MAP_KEYS(MAP_Col) FROM (SELECT MAP['a','1', 'b', '2'] as MAP_Col)  
-- ['a', 'b']  

```

Was this page helpful?
[Previous LTRIM](/reference/sql/sql-functions)[Next MAP_VALUES](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LTRIM](/reference/sql/sql-functions)[Next MAP_VALUES](/reference/sql/sql-functions)
!
