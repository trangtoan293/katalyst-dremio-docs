---
url: /reference/sql/sql-functions/functions/TOASCII
slug: /reference/sql/sql-functions/functions/TOASCII
title: "TOASCII | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64359.025793708
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TOASCII

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions), [String](/reference/sql/sql-functions)
# TOASCII
Converts a string that is encoded in the specified character set to UTF-8.
## Syntax
### TOASCII(_string_expression_ STRING, _character_encoding_ TYPE) → STRING[​](/reference/sql/sql-functions)
  * string_expression: The string to convert to the specified character encoding.
  * character_encoding: The character set that the string is encoded in.


**Examples**
Converts the string "Smith" from its current character encoding to a string encoded in UTF-8.

```
SELECT TOASCII('Smith', 'Windows-1250')  
-- Smith  

```

## Usage Notes[​](/reference/sql/sql-functions)
These are the supported character encodings:
  * ASCII
  * Big5
  * CP437
  * CP737
  * CP850
  * CP852
  * CP855
  * CP857
  * CP858
  * CP860
  * CP861
  * CP862
  * CP863
  * CP865
  * CP866
  * CP869
  * EUC-JP
  * EUC-KR
  * GBK
  * ISCII
  * ISO-2022-JP
  * ISO-2022-KR
  * ISO-8859-1
  * ISO-8859-2
  * ISO-8859-3
  * ISO-8859-4
  * ISO-8859-5
  * ISO-8859-6
  * ISO-8859-7
  * ISO-8859-8
  * ISO-8859-9
  * ISO-8859-11
  * ISO-8859-13
  * ISO-8859-15
  * KOI8-R
  * KOI8-U
  * UTF-8/UTF8
  * UTF-16/UTF16
  * UTF-32/UTF32
  * Windows-1250
  * Windows-1251
  * Windows-1252
  * Windows-1253
  * Windows-1254
  * Windows-1255
  * Windows-1256
  * Windows-1257
  * Windows-1258


Was this page helpful?
[Previous TIMESTAMPTYPE](/reference/sql/sql-functions)[Next TO_CHAR](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TIMESTAMPTYPE](/reference/sql/sql-functions)[Next TO_CHAR](/reference/sql/sql-functions)
!!
