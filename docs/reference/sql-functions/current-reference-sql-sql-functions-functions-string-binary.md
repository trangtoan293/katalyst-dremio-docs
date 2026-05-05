---
url: /reference/sql/sql-functions/functions/STRING_BINARY
slug: /reference/sql/sql-functions/functions/STRING_BINARY
title: "STRING_BINARY | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.704641791
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * STRING_BINARY

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions)
# STRING_BINARY
Returns a string that represents the provided bytes. Escapes non-printable characters as hex values.
## Syntax
### STRING_BINARY(_bytes_ BYTES) → STRING[​](/reference/sql/sql-functions)
  * bytes: Bytes to convert to a string.


**Examples**
STRING_BINARY example

```
SELECT STRING_BINARY(BINARY_STRING('Dremio'))  
-- Dremio  

```

STRING_BINARY example

```
SELECT STRING_BINARY(FROM_HEX('54455354111213'))  
-- TEST\x11\x12\x13  

```

Was this page helpful?
[Previous STDDEV_SAMP](/reference/sql/sql-functions)[Next STRPOS](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous STDDEV_SAMP](/reference/sql/sql-functions)[Next STRPOS](/reference/sql/sql-functions)
!
