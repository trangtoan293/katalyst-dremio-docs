---
url: /reference/sql/sql-functions/functions/HASH64
title: "HASH64 | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64317.311007333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * HASH64

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions)
# HASH64
Returns 64-bit hash of input value, with optional seed.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### HASH64(_value_ ANY [, _seed_ BIGINT]) → BIGINT[​](/reference/sql/sql-functions#hash64value-any--seed-bigint--bigint "Direct link to hash64value-any--seed-bigint--bigint")
  * value: Input value for hash calculation.
  * seed (optional): Optional seed for hash calculation.


**Examples**
HASH64 example

```
SELECT HASH64('abc')  
-- -5434086359492102041  

```

HASH64 example

```
SELECT HASH64(5.127)  
-- -1149762993205326574  

```

HASH64 example

```
SELECT HASH64(null)  
-- 0  

```

HASH64 example

```
SELECT HASH64('abc',123)  
-- 1489494923063836066  

```

Was this page helpful?
[Previous HASH](/reference/sql/sql-functions)[Next HEX](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous HASH](/reference/sql/sql-functions)[Next HEX](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FHASH64%2F&_biz_t=1777950637396&_biz_i=HASH64%20%7C%20Dremio%20Documentation&_biz_n=606&rnd=387918&cdn_o=a&_biz_z=1777950637397)
