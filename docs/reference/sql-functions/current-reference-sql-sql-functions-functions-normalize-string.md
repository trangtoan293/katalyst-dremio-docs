---
url: /reference/sql/sql-functions/functions/NORMALIZE_STRING
slug: /reference/sql/sql-functions/functions/NORMALIZE_STRING
title: "NORMALIZE_STRING | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64338.113967875
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * NORMALIZE_STRING

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# NORMALIZE_STRING
Returns a normalized string in the specified unicode normalization form.
## Syntax
### NORMALIZE_STRING() → VARCHAR[​](/reference/sql/sql-functions) → VARCHAR")
**Examples**
NORMALIZE_STRING example

```
SELECT NORMALIZE_STRING('¼ϐϹℕ⑩','NFKD')  
-- 1⁄4βΣN10  

```

## Usage Notes[​](/reference/sql/sql-functions)
Supported forms:
  * Canonical decomposition (NFD)
  * Canonical decomposition followed by canonical composition (NFC)
  * Compatibility decomposition (NFKD)
  * Compatibility decomposition followed by canonical composition (NFKC).


Was this page helpful?
[Previous NEXT_DAY](/reference/sql/sql-functions)[Next NOW](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous NEXT_DAY](/reference/sql/sql-functions)[Next NOW](/reference/sql/sql-functions)
!
