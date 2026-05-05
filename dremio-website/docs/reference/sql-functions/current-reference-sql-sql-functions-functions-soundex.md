---
url: /reference/sql/sql-functions/functions/SOUNDEX
title: "SOUNDEX | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64351.992535416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SOUNDEX

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# SOUNDEX
Returns a string that contains a phonetic representation of the input string.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### SOUNDEX(_expression_ varchar) → varchar[​](/reference/sql/sql-functions#soundexexpression-varchar--varchar "Direct link to soundexexpression-varchar--varchar")
  * expression: The expression for which a representation of the pronunciation is returned.


**Examples**
SOUNDEX example

```
SELECT SOUNDEX('Smith'), SOUNDEX('Smythe')  
-- EXPR$0, EXPR$1  
-- S530, S530  

```

SOUNDEX example

```
SELECT SOUNDEX('the data lake'), SOUNDEX('the data lakehouse'), SOUNDEX('the data warehouse')  
-- EXPR$0, EXPR$1, EXPR$2  
-- T334, T334, T336  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
You can use this function to determine whether two strings (for example, similar last names 'Smith' and 'Smythe') have similar pronounciations in the English language. This function uses the 
Was this page helpful?
[Previous SIZE](/reference/sql/sql-functions)[Next SPLIT_PART](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SIZE](/reference/sql/sql-functions)[Next SPLIT_PART](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FSOUNDEX%2F&_biz_t=1777950672411&_biz_i=SOUNDEX%20%7C%20Dremio%20Documentation&_biz_n=679&rnd=236666&cdn_o=a&_biz_z=1777950672411)
