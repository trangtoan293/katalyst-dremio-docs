---
url: /reference/sql/sql-functions/functions/CRC32
title: "CRC32 | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64302.77219975
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CRC32

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions), [Binary](/reference/sql/sql-functions)
# CRC32
Returns a cyclic redundancy check value of a binary string.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### CRC32(_expression_ varbinary) → varchar[​](/reference/sql/sql-functions#crc32expression-varbinary--varchar "Direct link to crc32expression-varbinary--varchar")
  * expression: The string to encode.


**Examples**
CRC32 example

```
SELECT CRC32('Dremio')  
-- 2212276499  

```

CRC32 example

```
SELECT CRC32(100)  
-- 595022058  

```

CRC32 example

```
SELECT CRC32(-100)  
-- 2938773767  

```

Was this page helpful?
[Previous COVAR_SAMP](/reference/sql/sql-functions)[Next CUME_DIST](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous COVAR_SAMP](/reference/sql/sql-functions)[Next CUME_DIST](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCRC32%2F&_biz_t=1777950622610&_biz_i=CRC32%20%7C%20Dremio%20Documentation&_biz_n=591&rnd=777600&cdn_o=a&_biz_z=1777950622611)
