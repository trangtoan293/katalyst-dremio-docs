---
url: /reference/sql/sql-functions/functions/HASH64
slug: /reference/sql/sql-functions/functions/HASH64
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
## Syntax
### HASH64(_value_ ANY [, _seed_ BIGINT]) → BIGINT[​](/reference/sql/sql-functions)
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
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous HASH](/reference/sql/sql-functions)[Next HEX](/reference/sql/sql-functions)
!
