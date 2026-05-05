---
url: /reference/sql/sql-functions/functions/MASK_FIRST_N
slug: /reference/sql/sql-functions/functions/MASK_FIRST_N
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
## Syntax
### MASK_FIRST_N(_expression_ varchar [, _num_chars_ int] [, _uc_mask_ varchar] [, _lc_mask_ varchar] [, _num_mask_ varchar]) → varchar[​](/reference/sql/sql-functions)
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

## Usage Notes[​](/reference/sql/sql-functions)
By default, upper case letters are converted to `X`, lower case letters are converted to `x`, and numbers are converted to `n`. You can override the characters used in the mask by supplying optional arguments. The second argument controls the mask character for upper case letters, the third argument for lower case letters, and the fourth argument for numbers.
Was this page helpful?
[Previous MASK](/reference/sql/sql-functions)[Next MASK_HASH](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MASK](/reference/sql/sql-functions)[Next MASK_HASH](/reference/sql/sql-functions)
!
