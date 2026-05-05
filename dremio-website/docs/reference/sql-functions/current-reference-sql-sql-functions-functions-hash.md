---
url: /reference/sql/sql-functions/functions/HASH
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### HASH(_expression_ any) → numeric[​](/reference/sql/sql-functions#hashexpression-any--numeric "Direct link to hashexpression-any--numeric")
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

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
HASH is a proprietary function that can accept different input expressions of arbitrary Dremio supported data types and returns a signed value. It is not a cryptographic hash function and should not be used as such.
Was this page helpful?
[Previous GREATEST](/reference/sql/sql-functions)[Next HASH64](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous GREATEST](/reference/sql/sql-functions)[Next HASH64](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FHASH%2F&_biz_t=1777950637368&_biz_i=HASH%20%7C%20Dremio%20Documentation&_biz_n=605&rnd=965811&cdn_o=a&_biz_z=1777950637368)
