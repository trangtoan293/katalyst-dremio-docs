---
url: /reference/sql/sql-functions/functions/TO_HEX
slug: /reference/sql/sql-functions/functions/TO_HEX
title: "TO_HEX | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.394228958
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TO_HEX

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions), [String](/reference/sql/sql-functions), [Binary](/reference/sql/sql-functions)
# TO_HEX
Returns a hexadecimal string for the given binary value.
## Syntax
### TO_HEX(_in_ binary) → string[​](/reference/sql/sql-functions)
  * in: A binary value


**Examples**
TO_HEX example

```
select to_hex(binary_string('hello'))  
-- 68656C6C6F  

```

Was this page helpful?
[Previous TO_DATE](/reference/sql/sql-functions)[Next TO_NUMBER](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TO_DATE](/reference/sql/sql-functions)[Next TO_NUMBER](/reference/sql/sql-functions)
!
