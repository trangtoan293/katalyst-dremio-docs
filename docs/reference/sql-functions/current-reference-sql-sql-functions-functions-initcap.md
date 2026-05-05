---
url: /reference/sql/sql-functions/functions/INITCAP
title: "INITCAP | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64317.635522125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * INITCAP

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# INITCAP
Returns the input string with the first letter of each word in uppercase and the subsequent letters in the word are in lowercase.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### INITCAP(_expression_ varchar) → varchar[​](/reference/sql/sql-functions#initcapexpression-varchar--varchar "Direct link to initcapexpression-varchar--varchar")
  * expression: Input string.


**Examples**
INITCAP example

```
SELECT INITCAP('a guide to data lakehouses')  
-- A Guide To Data Lakehouses  

```

INITCAP example

```
SELECT INITCAP('a guide to data lakeHouses')  
-- A Guide To Data Lakehouses  

```

Was this page helpful?
[Previous IMINDIR](/reference/sql/sql-functions)[Next INSTR](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous IMINDIR](/reference/sql/sql-functions)[Next INSTR](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FINITCAP%2F&_biz_t=1777950638197&_biz_i=INITCAP%20%7C%20Dremio%20Documentation&_biz_n=610&rnd=173533&cdn_o=a&_biz_z=1777950638197)
