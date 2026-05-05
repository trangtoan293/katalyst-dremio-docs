---
url: /reference/sql/sql-functions/functions/CONVERT_REPLACEUTF8
title: "CONVERT_REPLACEUTF8 | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64302.344363
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CONVERT_REPLACEUTF8

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions)
# CONVERT_REPLACEUTF8
Converts a binary string to a UTF-8 value and replaces all characters that cannot be converted to UTF-8 with the specified replacement character.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### CONVERT_REPLACEUTF8(_binary_value_ value_to_convert, _replacement_ VARCHAR) → VARCHAR[​](/reference/sql/sql-functions#convert_replaceutf8binary_value-value_to_convert-replacement-varchar--varchar "Direct link to convert_replaceutf8binary_value-value_to_convert-replacement-varchar--varchar")
  * binary_value: The binary string to convert to a string encoded in UTF8.
  * replacement: A single character to use as a substitute for each character in the binary string that cannot be converted to UTF8.


**Examples**
CONVERT_REPLACEUTF8 example

```
SELECT CONVERT_REPLACEUTF8(BINARY_STRING('These characters cannot be converted — \xa0\xa1'), 'b')  
-- These characters cannot be converted — bb  

```

Was this page helpful?
[Previous CONVERT_FROM](/reference/sql/sql-functions)[Next CONVERT_TIMEZONE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CONVERT_FROM](/reference/sql/sql-functions)[Next CONVERT_TIMEZONE](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCONVERT_REPLACEUTF8%2F&_biz_t=1777950621073&_biz_i=CONVERT_REPLACEUTF8%20%7C%20Dremio%20Documentation&_biz_n=579&rnd=790269&cdn_o=a&_biz_z=1777950621073)
