---
url: /reference/sql/sql-functions/functions/MASK_HASH
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### MASK_HASH(_expression_ varchar) → varchar[​](/reference/sql/sql-functions#mask_hashexpression-varchar--varchar "Direct link to mask_hashexpression-varchar--varchar")
  * expression: The string to hash.


**Examples**
MASK_HASH example

```
SELECT MASK_HASH('abcd-ABCD-1234')  
-- 770d599256e3902a0aacc9750cd1ca7f34be182632ba3dca3d2eb6f31dcc3d59  

```

Was this page helpful?
[Previous MASK_FIRST_N](/reference/sql/sql-functions)[Next MASK_LAST_N](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MASK_FIRST_N](/reference/sql/sql-functions)[Next MASK_LAST_N](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FMASK_HASH%2F&_biz_t=1777950651617&_biz_i=MASK_HASH%20%7C%20Dremio%20Documentation&_biz_n=642&rnd=671483&cdn_o=a&_biz_z=1777950651617)
