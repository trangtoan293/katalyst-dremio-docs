---
url: /reference/sql/sql-functions/functions/BITWISE_NOT
slug: /reference/sql/sql-functions/functions/BITWISE_NOT
title: "BITWISE_NOT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64287.28001575
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * BITWISE_NOT

Version: current [26.x]
On this page
**Categories** : [Bitwise](/reference/sql/sql-functions)
# BITWISE_NOT
Returns the bitwise NOT of the given operand.
## Syntax
### BITWISE_NOT(_op1_ NUMERIC) → NUMERIC[​](/reference/sql/sql-functions)
  * op1: Value to invert.


**Examples**
BITWISE_NOT example

```
SELECT BITWISE_NOT(0)  
-- -1  

```

BITWISE_NOT example

```
SELECT BITWISE_NOT(9223372036854775807)  
-- -9223372036854775808  

```

Was this page helpful?
[Previous BITWISE_AND](/reference/sql/sql-functions)[Next BITWISE_OR](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous BITWISE_AND](/reference/sql/sql-functions)[Next BITWISE_OR](/reference/sql/sql-functions)
!
