---
url: /reference/sql/sql-functions/functions/ARRAY_TO_STRING
slug: /reference/sql/sql-functions/functions/ARRAY_TO_STRING
title: "ARRAY_TO_STRING | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64286.915207125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_TO_STRING

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions), [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_TO_STRING
Returns a string of the values from the input array, with the values separated by the specified delimiter string.
## Syntax
### ARRAY_TO_STRING(_arr_ LIST, _delimiter_ VARCHAR) → VARCHAR[​](/reference/sql/sql-functions)
  * arr: The source array.
  * delimiter: The string to place between each element in the array.


**Examples**
ARRAY_TO_STRING example

```
SELECT ARRAY_TO_STRING(ARRAY[1, 2, 3], ',')  
-- 1,2,3  

```

array_col contains ARRAY[1, NULL, 3]

```
SELECT ARRAY_TO_STRING(array_col, ',')  
-- 1,,3  

```

Was this page helpful?
[Previous ARRAY_SUM](/reference/sql/sql-functions)[Next ASCII](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_SUM](/reference/sql/sql-functions)[Next ASCII](/reference/sql/sql-functions)
!
