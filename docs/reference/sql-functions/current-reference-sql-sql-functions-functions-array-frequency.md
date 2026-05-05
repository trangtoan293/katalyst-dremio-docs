---
url: /reference/sql/sql-functions/functions/ARRAY_FREQUENCY
title: "ARRAY_FREQUENCY | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64279.216619875
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_FREQUENCY

Version: current [26.x]
On this page
**Categories** : [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_FREQUENCY
Returns a map of key-value pairs: keys are the unique elements in the input array and values specify how many times the keys appear in the input array.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ARRAY_FREQUENCY(_array_ LIST) → MAP[​](/reference/sql/sql-functions#array_frequencyarray-list--map "Direct link to array_frequencyarray-list--map")
  * array: The array of values for which to calculate frequency. Accepts primitive types.


**Examples**
ARRAY_FREQUENCY example

```
SELECT ARRAY_FREQUENCY(ARRAY[2,1,2,1,1,5]);  
-- {"1":3, "2":2, "5":1}  

```

ARRAY_FREQUENCY example

```
SELECT ARRAY_FREQUENCY(ARRAY['a','b','ab','b','a']);  
-- {"a":2, "ab":1, "b":2}  

```

ARRAY_FREQUENCY example

```
SELECT ARRAY_FREQUENCY(ARRAY['foo', 'bar', 'FOO', 'foo']);  
-- {"FOO":1, "bar":1, "foo":2}  

```

array_col contains ARRAY[1, 2, NULL, 2]

```
SELECT ARRAY_FREQUENCY(array_col);  
-- {"1":1, "2":2}  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
• Supports only primitive types. Complex types like STRUCT, MAP, and LIST are not supported.  
  
• String keys are compared case-sensitively.  
  
• Any null elements in the column value are ignored.  
  
• Returns an error if the input array is empty.
Was this page helpful?
[Previous ARRAY_DISTINCT](/reference/sql/sql-functions)[Next ARRAY_GENERATE_RANGE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_DISTINCT](/reference/sql/sql-functions)[Next ARRAY_GENERATE_RANGE](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAY_FREQUENCY%2F&_biz_t=1777950598728&_biz_i=Dremio%20Documentation&_biz_n=542&rnd=354065&cdn_o=a&_biz_z=1777950598728)
