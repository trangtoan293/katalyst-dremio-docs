---
url: /reference/sql/sql-functions/functions/HEX
slug: /reference/sql/sql-functions/functions/HEX
title: "HEX | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64317.364947958
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * HEX

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions), [String](/reference/sql/sql-functions), [Binary](/reference/sql/sql-functions)
# HEX
Returns the hexadecimal encoding of an expression.
## Syntax
### HEX(_expression_ any primitive) → varchar[​](/reference/sql/sql-functions)
  * expression: The expression to encode.


**Examples**
HEX example

```
SELECT HEX('Dremio')  
-- 4472656D696F  

```

HEX example

```
SELECT HEX(2023)  
-- 7E7  

```

Was this page helpful?
[Previous HASH64](/reference/sql/sql-functions)[Next HOUR](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous HASH64](/reference/sql/sql-functions)[Next HOUR](/reference/sql/sql-functions)
!!
