---
url: /reference/sql/sql-functions/functions/STRPOS
title: "STRPOS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.891980291
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * STRPOS

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# STRPOS
Searches for the first occurence of the substring in the given expression and returns the position of where the substring begins. Searching binary values is also supported.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### STRPOS(_expression_ varchar, _substring_ varchar) → int32[​](/reference/sql/sql-functions#strposexpression-varchar-substring-varchar--int32 "Direct link to strposexpression-varchar-substring-varchar--int32")
  * expression: The expression to search.
  * substring: The substring to search the expression for.


**Examples**
STRPOS example

```
SELECT STRPOS('dremio cloud service', 'cloud')  
-- 8  

```

STRPOS example

```
SELECT STRPOS(1001111, 00)  
-- 2  

```

STRPOS example

```
SELECT STRPOS('dremio cloud service', 'sql')  
-- 0  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
If the substring is not found, the function returns 0. The data type of both parameters must match; specifically, they should both be either strings or binary values.
Was this page helpful?
[Previous STRING_BINARY](/reference/sql/sql-functions)[Next ST_FROMGEOHASH](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous STRING_BINARY](/reference/sql/sql-functions)[Next ST_FROMGEOHASH](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FSTDDEV_POP%2F&_biz_t=1777950677960&_biz_i=STDDEV_POP%20%7C%20Dremio%20Documentation&_biz_n=686&rnd=303954&cdn_o=a&_biz_z=1777950677967)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FSTRPOS%2F&_biz_t=1777950677967&_biz_i=STRPOS%20%7C%20Dremio%20Documentation&_biz_n=687&rnd=871042&cdn_o=a&_biz_z=1777950677967)
