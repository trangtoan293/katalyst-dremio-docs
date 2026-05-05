---
url: /reference/sql/sql-functions/functions/UNHEX
slug: /reference/sql/sql-functions/functions/UNHEX
title: "UNHEX | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.955493083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * UNHEX

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions), [String](/reference/sql/sql-functions), [Binary](/reference/sql/sql-functions)
# UNHEX
Converts the hexadecimal number into the bytes represented by a number.
## Syntax
### UNHEX(_expression_ varchar) → varbinary[​](/reference/sql/sql-functions)
  * expression: A string containing only hexadecimal digits.


**Examples**
UNHEX example

```
SELECT UNHEX('4472656D696F')  
-- RHJlbWlv  

```

## Usage Notes[​](/reference/sql/sql-functions)
The returned value is a binary string. If the expression contains non-hex characters the result is `NULL`.
Was this page helpful?
[Previous UNBASE64](/reference/sql/sql-functions)[Next UNIX_TIMESTAMP](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous UNBASE64](/reference/sql/sql-functions)[Next UNIX_TIMESTAMP](/reference/sql/sql-functions)
!
