---
url: /reference/sql/sql-functions/functions/STRING_BINARY
title: "STRING_BINARY | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.704641791
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * STRING_BINARY

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions)
# STRING_BINARY
Returns a string that represents the provided bytes. Escapes non-printable characters as hex values.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### STRING_BINARY(_bytes_ BYTES) → STRING[​](/reference/sql/sql-functions#string_binarybytes-bytes--string "Direct link to string_binarybytes-bytes--string")
  * bytes: Bytes to convert to a string.


**Examples**
STRING_BINARY example

```
SELECT STRING_BINARY(BINARY_STRING('Dremio'))  
-- Dremio  

```

STRING_BINARY example

```
SELECT STRING_BINARY(FROM_HEX('54455354111213'))  
-- TEST\x11\x12\x13  

```

Was this page helpful?
[Previous STDDEV_SAMP](/reference/sql/sql-functions)[Next STRPOS](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous STDDEV_SAMP](/reference/sql/sql-functions)[Next STRPOS](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FSTRING_BINARY%2F&_biz_t=1777950678085&_biz_i=STRING_BINARY%20%7C%20Dremio%20Documentation&_biz_n=688&rnd=589280&cdn_o=a&_biz_z=1777950678085)
