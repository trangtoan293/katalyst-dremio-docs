---
url: /reference/sql/sql-functions/functions/TOASCII
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### TOASCII(_string_expression_ STRING, _character_encoding_ TYPE) → STRING[​](/reference/sql/sql-functions#toasciistring_expression-string-character_encoding-type--string "Direct link to toasciistring_expression-string-character_encoding-type--string")
  * string_expression: The string to convert to the specified character encoding.
  * character_encoding: The character set that the string is encoded in.


**Examples**
Converts the string "Smith" from its current character encoding to a string encoded in UTF-8.

```
SELECT TOASCII('Smith', 'Windows-1250')  
-- Smith  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TIMESTAMPTYPE](/reference/sql/sql-functions)[Next TO_CHAR](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FSUM%2F&_biz_t=1777950679456&_biz_i=SUM%20%7C%20Dremio%20Documentation&_biz_n=696&rnd=706659&cdn_o=a&_biz_z=1777950679462)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FTOASCII%2F&_biz_t=1777950679461&_biz_i=TOASCII%20%7C%20Dremio%20Documentation&_biz_n=697&rnd=460627&cdn_o=a&_biz_z=1777950679462)
