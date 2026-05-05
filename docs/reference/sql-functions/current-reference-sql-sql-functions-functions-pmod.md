---
url: /reference/sql/sql-functions/functions/PMOD
slug: /reference/sql/sql-functions/functions/PMOD
title: "PMOD | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64344.832307
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * PMOD

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# PMOD
Returns the positive remainder after dividend / divisor. Returns an error if the divisor is 0.
## Syntax
### PMOD(_dividend_ NUMERIC, _divisor_ NUMERIC) → NUMERIC[​](/reference/sql/sql-functions)
  * dividend: Dividend value.
  * divisor: Divisor value.


**Examples**
PMOD example

```
SELECT pmod(10, 3)  
-- 1  

```

PMOD example

```
SELECT pmod(-10, 3)  
-- 2  

```

Was this page helpful?
[Previous PI](/reference/sql/sql-functions)[Next POSITION](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous PI](/reference/sql/sql-functions)[Next POSITION](/reference/sql/sql-functions)
!
