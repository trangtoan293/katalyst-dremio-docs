---
url: /reference/sql/sql-functions/functions/ENCODE
title: "ENCODE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64310.943597458
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ENCODE

Version: current [26.x]
On this page
**Categories** : [Binary](/reference/sql/sql-functions), [Conversion](/reference/sql/sql-functions)
# ENCODE
Encodes the input expression using the specified charSet character encoding.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ENCODE(_expression_ string, _charSet_type_ string) → varbinary[​](/reference/sql/sql-functions#encodeexpression-string-charset_type-string--varbinary "Direct link to encodeexpression-string-charset_type-string--varbinary")
  * expression: The expression to be encoded.
  * charSet_type: The charSet type to use for the conversion.


**Examples**
ENCODE example

```
SELECT ENCODE('Dremio', 'US-ASCII')  
-- RHJlbWlv  

```

ENCODE example

```
SELECT ENCODE('Dremio', 'UTF-16BE')  
-- AEQAcgBlAG0AaQBv  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
The charset must be one of (case-insensitive):
  * US-ASCII
  * ISO-8859-1
  * UTF-8
  * UTF-16BE
  * UTF-16LE
  * UTF-16


Was this page helpful?
[Previous E](/reference/sql/sql-functions)[Next ENCRYPT](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous E](/reference/sql/sql-functions)[Next ENCRYPT](/reference/sql/sql-functions)
