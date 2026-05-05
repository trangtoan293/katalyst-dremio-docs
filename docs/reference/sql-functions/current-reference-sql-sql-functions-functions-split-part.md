---
url: /reference/sql/sql-functions/functions/SPLIT_PART
title: "SPLIT_PART | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64352.082935458
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SPLIT_PART

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# SPLIT_PART
Splits a given string at a specified character and returns the requested part.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### SPLIT_PART(_expression_ varchar, _delimiter_ varchar, _part_number_ int32) → varchar[​](/reference/sql/sql-functions#split_partexpression-varchar-delimiter-varchar-part_number-int32--varchar "Direct link to split_partexpression-varchar-delimiter-varchar-part_number-int32--varchar")
  * expression: Input expression.
  * delimiter: String representing the delimiter to split the input expression by.
  * part_number: Requested part of the split. Must be an integer greater than zero.


**Examples**
SPLIT_PART example

```
SELECT SPLIT_PART('127.0.0.1', '.', 1)  
-- 127  

```

Was this page helpful?
[Previous SOUNDEX](/reference/sql/sql-functions)[Next SQRT](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SOUNDEX](/reference/sql/sql-functions)[Next SQRT](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FSPLIT_PART%2F&_biz_t=1777950672708&_biz_i=SPLIT_PART%20%7C%20Dremio%20Documentation&_biz_n=681&rnd=132991&cdn_o=a&_biz_z=1777950672708)
