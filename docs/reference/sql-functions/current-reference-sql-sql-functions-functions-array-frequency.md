---
url: /reference/sql/sql-functions/functions/ARRAY_FREQUENCY
slug: /reference/sql/sql-functions/functions/ARRAY_FREQUENCY
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
## Syntax
### ARRAY_FREQUENCY(_array_ LIST) → MAP[​](/reference/sql/sql-functions)
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

## Usage Notes[​](/reference/sql/sql-functions)
• Supports only primitive types. Complex types like STRUCT, MAP, and LIST are not supported.  
  
• String keys are compared case-sensitively.  
  
• Any null elements in the column value are ignored.  
  
• Returns an error if the input array is empty.
Was this page helpful?
[Previous ARRAY_DISTINCT](/reference/sql/sql-functions)[Next ARRAY_GENERATE_RANGE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_DISTINCT](/reference/sql/sql-functions)[Next ARRAY_GENERATE_RANGE](/reference/sql/sql-functions)
!
