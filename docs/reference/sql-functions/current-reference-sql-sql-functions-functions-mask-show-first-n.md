---
url: /reference/sql/sql-functions/functions/MASK_SHOW_FIRST_N
title: "MASK_SHOW_FIRST_N | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64331.330784125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * MASK_SHOW_FIRST_N

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# MASK_SHOW_FIRST_N
Returns a masked version of a string with the first `num_chars` characters unmasked. By default, if you do not provide a value, the first four characters are shown.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### MASK_SHOW_FIRST_N(_expression_ varchar [, _num_chars_ int] [, _uc_mask_ varchar] [, _lc_mask_ varchar] [, _num_mask_ varchar]) → varchar[​](/reference/sql/sql-functions#mask_show_first_nexpression-varchar--num_chars-int--uc_mask-varchar--lc_mask-varchar--num_mask-varchar--varchar "Direct link to mask_show_first_nexpression-varchar--num_chars-int--uc_mask-varchar--lc_mask-varchar--num_mask-varchar--varchar")
  * expression: The string to mask.
  * num_chars (optional): The number of characters to unmask.
  * uc_mask (optional): Controls the mask character for upper case letters.
  * lc_mask (optional): Controls the mask character for lower case letters.
  * num_mask (optional): Controls the mask character for numbers.


**Examples**
MASK_SHOW_FIRST_N example

```
SELECT MASK_SHOW_FIRST_N('abcd-ABab-1234')  
-- abcd-XXxx-nnnn  

```

MASK_SHOW_FIRST_N example containing optional value

```
SELECT MASK_SHOW_FIRST_N('abcd-ABab-1234', 2)  
-- abxx-XXxx-nnnn  

```

MASK_SHOW_FIRST_N example containing optional arguments

```
SELECT MASK_SHOW_FIRST_N('Aa12-ABab-1234', 4, 'U', 'u', '#')  
-- Aa12-UUuu-####  

```

MASK_SHOW_FIRST_N example containing only the optional argument for lower case letters

```
SELECT MASK_SHOW_FIRST_N('abcd-ABCD-1234', 2, '', 'u', '')  
-- abuu-XXXX-nnnn  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
By default, upper case letters are converted to `X`, lower case letters are converted to `x`, and numbers are converted to `n`. You can override the characters used in the mask by supplying optional arguments. The second argument controls the mask character for upper case letters, the third argument for lower case letters, and the fourth argument for numbers.
Was this page helpful?
[Previous MASK_LAST_N](/reference/sql/sql-functions)[Next MASK_SHOW_LAST_N](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MASK_LAST_N](/reference/sql/sql-functions)[Next MASK_SHOW_LAST_N](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FMASK_SHOW_FIRST_N%2F&_biz_t=1777950652121&_biz_i=MASK_SHOW_FIRST_N%20%7C%20Dremio%20Documentation&_biz_n=646&rnd=638877&cdn_o=a&_biz_z=1777950652121)
