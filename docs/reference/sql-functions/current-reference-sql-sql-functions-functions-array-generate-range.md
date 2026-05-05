---
url: /reference/sql/sql-functions/functions/ARRAY_GENERATE_RANGE
slug: /reference/sql/sql-functions/functions/ARRAY_GENERATE_RANGE
title: "ARRAY_GENERATE_RANGE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64279.1923515
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_GENERATE_RANGE

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_GENERATE_RANGE
Returns an array of integers in the specified range.
## Syntax
### ARRAY_GENERATE_RANGE(_start_ int32, _stop_ int32, _step_ int32) → list[​](/reference/sql/sql-functions)
  * start: The first number in the range of numbers to return.
  * stop: The last number in the range. Note that this number is not included in the range of numbers returned.
  * step: The amount to increment or decrement each subsequent number in the array. May be a positive or negative number. Cannot be `0`. Default value is `1`.


**Examples**
ARRAY_GENERATE_RANGE example

```
SELECT ARRAY_GENERATE_RANGE(1, 5)  
-- [1, 2, 3, 4]  

```

ARRAY_GENERATE_RANGE example

```
SELECT ARRAY_GENERATE_RANGE(0, 16, 5)  
-- [0, 5, 10, 15]  

```

ARRAY_GENERATE_RANGE example

```
SELECT ARRAY_GENERATE_RANGE(0, -16, -5)  
-- [0, -5, -10, -15]  

```

ARRAY_GENERATE_RANGE example

```
SELECT ARRAY_GENERATE_RANGE(2, 2, 4)  
-- []  

```

ARRAY_GENERATE_RANGE example

```
SELECT ARRAY_GENERATE_RANGE(8, 2, 2)  
-- []  

```

ARRAY_GENERATE_RANGE example

```
SELECT ARRAY_GENERATE_RANGE(2, 8, -2)  
-- []  

```

ARRAY_GENERATE_RANGE example

```
SELECT ARRAY_GENERATE_RANGE(2, 2)  
-- []  

```

Was this page helpful?
[Previous ARRAY_FREQUENCY](/reference/sql/sql-functions)[Next ARRAY_INSERT](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_FREQUENCY](/reference/sql/sql-functions)[Next ARRAY_INSERT](/reference/sql/sql-functions)
!!
