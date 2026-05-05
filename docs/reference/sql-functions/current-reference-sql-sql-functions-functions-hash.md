---
url: /reference/sql/sql-functions/functions/HASH
slug: /reference/sql/sql-functions/functions/HASH
title: "HASH | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64317.400018041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * HASH

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions)
# HASH
Returns a hash value of the arguments. `HASH` does not return `NULL`, even for `NULL` inputs.
## Syntax
### HASH(_expression_ any) → numeric[​](/reference/sql/sql-functions)
  * expression: Can be a general expression of any Dremio-supported data type.


**Examples**
HASH example

```
SELECT HASH(host_id)  
FROM "Samples"."samples.dremio.com"."Dremio University"."airbnb_listings.csv"  
LIMIT 5  
-- 1110609030  
-- 1283762365  
-- -1745730253  
-- 0  
-- 0  

```

## Usage Notes[​](/reference/sql/sql-functions)
HASH is a proprietary function that can accept different input expressions of arbitrary Dremio supported data types and returns a signed value. It is not a cryptographic hash function and should not be used as such.
Was this page helpful?
[Previous GREATEST](/reference/sql/sql-functions)[Next HASH64](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous GREATEST](/reference/sql/sql-functions)[Next HASH64](/reference/sql/sql-functions)
!
