---
url: /reference/sql/sql-functions/functions/ARRAY_GENERATE_RANGE
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ARRAY_GENERATE_RANGE(_start_ int32, _stop_ int32, _step_ int32) → list[​](/reference/sql/sql-functions#array_generate_rangestart-int32-stop-int32-step-int32--list "Direct link to array_generate_rangestart-int32-stop-int32-step-int32--list")
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_FREQUENCY](/reference/sql/sql-functions)[Next ARRAY_INSERT](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FAI_COMPLETE%2F&_biz_t=1777950598570&_biz_i=AI_COMPLETE%20%7C%20Dremio%20Documentation&_biz_n=540&rnd=588956&cdn_o=a&_biz_z=1777950598604)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAY_GENERATE_RANGE%2F&_biz_t=1777950598603&_biz_i=ARRAY_GENERATE_RANGE%20%7C%20Dremio%20Documentation&_biz_n=541&rnd=469759&cdn_o=a&_biz_z=1777950598604)
