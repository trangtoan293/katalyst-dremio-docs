---
url: /reference/sql/sql-functions/functions/FROM_HEX
title: "FROM_HEX | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64317.025729208
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * FROM_HEX

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions), [String](/reference/sql/sql-functions), [Binary](/reference/sql/sql-functions)
# FROM_HEX
Returns a binary value for the given hexadecimal string.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### FROM_HEX(_in_ string) → binary[​](/reference/sql/sql-functions#from_hexin-string--binary "Direct link to from_hexin-string--binary")
  * in: A hexadecimal string


**Examples**
FROM_HEX example

```
select from_hex('3fd98a3c')  
-- P9mKPA==  

```

Was this page helpful?
[Previous FLOOR](/reference/sql/sql-functions)[Next GEO_BEYOND](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous FLOOR](/reference/sql/sql-functions)[Next GEO_BEYOND](/reference/sql/sql-functions)
