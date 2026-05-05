---
url: /reference/sql/sql-functions/functions/CONVERT_REPLACEUTF8
slug: /reference/sql/sql-functions/functions/CONVERT_REPLACEUTF8
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
## Syntax
### CONVERT_REPLACEUTF8(_binary_value_ value_to_convert, _replacement_ VARCHAR) → VARCHAR[​](/reference/sql/sql-functions)
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
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CONVERT_FROM](/reference/sql/sql-functions)[Next CONVERT_TIMEZONE](/reference/sql/sql-functions)
!
