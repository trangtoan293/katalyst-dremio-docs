---
url: /reference/sql/sql-functions/functions/NORMALIZE_STRING
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### NORMALIZE_STRING() → VARCHAR[​](/reference/sql/sql-functions#normalize_string--varchar "Direct link to NORMALIZE_STRING\(\) → VARCHAR")
**Examples**
NORMALIZE_STRING example

```
SELECT NORMALIZE_STRING('¼ϐϹℕ⑩','NFKD')  
-- 1⁄4βΣN10  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
Supported forms:
  * Canonical decomposition (NFD)
  * Canonical decomposition followed by canonical composition (NFC)
  * Compatibility decomposition (NFKD)
  * Compatibility decomposition followed by canonical composition (NFKC).


Was this page helpful?
[Previous NEXT_DAY](/reference/sql/sql-functions)[Next NOW](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous NEXT_DAY](/reference/sql/sql-functions)[Next NOW](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FNORMALIZE_STRING%2F&_biz_t=1777950657954&_biz_i=NORMALIZE_STRING%20%7C%20Dremio%20Documentation&_biz_n=651&rnd=87501&cdn_o=a&_biz_z=1777950657955)
