---
url: /reference/sql/sql-functions/functions/ASCII
title: "ASCII | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64286.810506541
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ASCII

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# ASCII
Returns the ASCII code for the first character of a string. If the string is empty, 0 is returned.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ASCII(_expression_ varchar) → int32[​](/reference/sql/sql-functions#asciiexpression-varchar--int32 "Direct link to asciiexpression-varchar--int32")
  * expression: The string for which the ASCII code for the first character in the string is returned.


**Examples**
ASCII example

```
SELECT ASCII ('DREMIO')  
-- 68  

```

ASCII example

```
SELECT ASCII ('D')  
-- 68  

```

ASCII example

```
SELECT ASCII ('')  
-- 0  

```

Was this page helpful?
[Previous ARRAY_TO_STRING](/reference/sql/sql-functions)[Next ASIN](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_TO_STRING](/reference/sql/sql-functions)[Next ASIN](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAY_SUM%2F&_biz_t=1777950606127&_biz_i=ARRAY_SUM%20%7C%20Dremio%20Documentation&_biz_n=552&rnd=549133&cdn_o=a&_biz_z=1777950606134)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FASCII%2F&_biz_t=1777950606134&_biz_i=ASCII%20%7C%20Dremio%20Documentation&_biz_n=553&rnd=92233&cdn_o=a&_biz_z=1777950606134)
