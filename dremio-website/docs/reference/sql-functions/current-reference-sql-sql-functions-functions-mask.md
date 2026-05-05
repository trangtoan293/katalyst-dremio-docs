---
url: /reference/sql/sql-functions/functions/MASK
title: "MASK | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64331.143847083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * MASK

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# MASK
Returns a masked version of a string.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### MASK(_expression_ varchar [, _uc_mask_ varchar] [, _lc_mask_ varchar] [, _num_mask_ varchar]) → varchar[​](/reference/sql/sql-functions#maskexpression-varchar--uc_mask-varchar--lc_mask-varchar--num_mask-varchar--varchar "Direct link to maskexpression-varchar--uc_mask-varchar--lc_mask-varchar--num_mask-varchar--varchar")
  * expression: The string to mask.
  * uc_mask (optional): Controls the mask character for upper case letters.
  * lc_mask (optional): Controls the mask character for lower case letters.
  * num_mask (optional): Controls the mask character for numbers.


**Examples**
MASK example

```
SELECT MASK('abcd-ABCD-1234')  
-- xxxx-XXXX-nnnn  

```

MASK example containing optional arguments.

```
SELECT MASK('abcd-ABCD-1234', 'U', 'u', '#')  
-- uuuu-UUUU-####  

```

MASK example containing only the optional argument for lower case letters.

```
SELECT MASK('abcd-ABCD-1234', '', 'u', '')  
-- uuuu-XXXX-nnnn  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
By default, upper case letters are converted to `X`, lower case letters are converted to `x`, and numbers are converted to `n`. You can override the characters used in the mask by supplying optional arguments. The first argument controls the mask character for upper case letters, the second argument for lower case letters, and the third argument for numbers.
Was this page helpful?
[Previous MAP_VALUES](/reference/sql/sql-functions)[Next MASK_FIRST_N](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MAP_VALUES](/reference/sql/sql-functions)[Next MASK_FIRST_N](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FMAP_KEYS%2F&_biz_t=1777950651279&_biz_i=MAP_KEYS%20%7C%20Dremio%20Documentation&_biz_n=638&rnd=60465&cdn_o=a&_biz_z=1777950651285)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FMASK%2F&_biz_t=1777950651284&_biz_i=MASK%20%7C%20Dremio%20Documentation&_biz_n=639&rnd=107743&cdn_o=a&_biz_z=1777950651285)
