---
url: /reference/sql/sql-functions/functions/MASK_FIRST_N
title: "MASK_FIRST_N | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64331.402400291
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * MASK_FIRST_N

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# MASK_FIRST_N
Returns a masked version of a string with the first `num_chars` characters masked. By default, if you do not provide a mask value, the first four characters are masked.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### MASK_FIRST_N(_expression_ varchar [, _num_chars_ int] [, _uc_mask_ varchar] [, _lc_mask_ varchar] [, _num_mask_ varchar]) → varchar[​](/reference/sql/sql-functions#mask_first_nexpression-varchar--num_chars-int--uc_mask-varchar--lc_mask-varchar--num_mask-varchar--varchar "Direct link to mask_first_nexpression-varchar--num_chars-int--uc_mask-varchar--lc_mask-varchar--num_mask-varchar--varchar")
  * expression: The string to mask.
  * num_chars (optional): The number of characters to mask.
  * uc_mask (optional): Controls the mask character for upper case letters.
  * lc_mask (optional): Controls the mask character for lower case letters.
  * num_mask (optional): Controls the mask character for numbers.


**Examples**
MASK_FIRST_N example

```
SELECT MASK_FIRST_N('abcd-ABCD-1234')  
-- xxxx-ABCD-1234  

```

MASK_FIRST_N example containing optional number of characters to mask

```
SELECT MASK_FIRST_N('abcd-ABCD-1234', 2)  
-- xxcd-ABCD-1234  

```

MASK_FIRST_N example containing optional arguments

```
SELECT MASK_FIRST_N('Aa12-ABCD-1234', 4, 'U', 'u', '#')  
-- Uu##-ABCD-1234  

```

MASK_FIRST_N example containing only the optional argument for lower case letters

```
SELECT MASK_FIRST_N('abcd-ABCD-1234', 7, '', 'u', '')  
-- uuuu-XXCD-1234  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
By default, upper case letters are converted to `X`, lower case letters are converted to `x`, and numbers are converted to `n`. You can override the characters used in the mask by supplying optional arguments. The second argument controls the mask character for upper case letters, the third argument for lower case letters, and the fourth argument for numbers.
Was this page helpful?
[Previous MASK](/reference/sql/sql-functions)[Next MASK_HASH](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MASK](/reference/sql/sql-functions)[Next MASK_HASH](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FMASK_FIRST_N%2F&_biz_t=1777950651789&_biz_i=MASK_FIRST_N%20%7C%20Dremio%20Documentation&_biz_n=644&rnd=30026&cdn_o=a&_biz_z=1777950651789)
