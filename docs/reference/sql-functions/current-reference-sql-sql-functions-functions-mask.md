---
url: /reference/sql/sql-functions/functions/MASK
slug: /reference/sql/sql-functions/functions/MASK
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
## Syntax
### MASK(_expression_ varchar [, _uc_mask_ varchar] [, _lc_mask_ varchar] [, _num_mask_ varchar]) → varchar[​](/reference/sql/sql-functions)
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

## Usage Notes[​](/reference/sql/sql-functions)
By default, upper case letters are converted to `X`, lower case letters are converted to `x`, and numbers are converted to `n`. You can override the characters used in the mask by supplying optional arguments. The first argument controls the mask character for upper case letters, the second argument for lower case letters, and the third argument for numbers.
Was this page helpful?
[Previous MAP_VALUES](/reference/sql/sql-functions)[Next MASK_FIRST_N](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MAP_VALUES](/reference/sql/sql-functions)[Next MASK_FIRST_N](/reference/sql/sql-functions)
!!
