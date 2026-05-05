---
url: /reference/sql/sql-functions/functions/MASK_HASH
slug: /reference/sql/sql-functions/functions/MASK_HASH
title: "MASK_HASH | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64331.230071458
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * MASK_HASH

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# MASK_HASH
Returns a consistent hash value based on the input string. This function returns `NULL` for non-string types.
## Syntax
### MASK_HASH(_expression_ varchar) → varchar[​](/reference/sql/sql-functions)
  * expression: The string to hash.


**Examples**
MASK_HASH example

```
SELECT MASK_HASH('abcd-ABCD-1234')  
-- 770d599256e3902a0aacc9750cd1ca7f34be182632ba3dca3d2eb6f31dcc3d59  

```

Was this page helpful?
[Previous MASK_FIRST_N](/reference/sql/sql-functions)[Next MASK_LAST_N](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MASK_FIRST_N](/reference/sql/sql-functions)[Next MASK_LAST_N](/reference/sql/sql-functions)
!
