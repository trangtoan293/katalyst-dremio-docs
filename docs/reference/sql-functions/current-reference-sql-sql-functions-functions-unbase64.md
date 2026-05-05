---
url: /reference/sql/sql-functions/functions/UNBASE64
slug: /reference/sql/sql-functions/functions/UNBASE64
title: "UNBASE64 | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.900567875
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * UNBASE64

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions), [Binary](/reference/sql/sql-functions)
# UNBASE64
Decodes a Base64-encoded string.
## Syntax
### UNBASE64(_expression_ varchar) → varbinary[​](/reference/sql/sql-functions)
  * expression: A Base64-encoded string.


**Examples**
UNBASE64 example

```
SELECT CAST(UNBASE64('RHJlbWlv') AS VARCHAR)  
-- Dremio  

```

Was this page helpful?
[Previous UCASE](/reference/sql/sql-functions)[Next UNHEX](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous UCASE](/reference/sql/sql-functions)[Next UNHEX](/reference/sql/sql-functions)
!!
