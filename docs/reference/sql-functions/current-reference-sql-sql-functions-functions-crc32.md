---
url: /reference/sql/sql-functions/functions/CRC32
slug: /reference/sql/sql-functions/functions/CRC32
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
## Syntax
### CRC32(_expression_ varbinary) → varchar[​](/reference/sql/sql-functions)
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
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous COVAR_SAMP](/reference/sql/sql-functions)[Next CUME_DIST](/reference/sql/sql-functions)
!
