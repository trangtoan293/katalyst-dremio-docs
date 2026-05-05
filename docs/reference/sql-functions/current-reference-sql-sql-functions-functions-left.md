---
url: /reference/sql/sql-functions/functions/LEFT
title: "LEFT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.478541625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LEFT

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# LEFT
Returns the left-most substring. The function name must be enclosed in double quotes ("LEFT").
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### LEFT(_expression_ varchar, _length_ int64) → varchar[​](/reference/sql/sql-functions#leftexpression-varchar-length-int64--varchar "Direct link to leftexpression-varchar-length-int64--varchar")
  * expression: String input parameter
  * length: Number of characters on the left to return.


**Examples**
LEFT example

```
SELECT "LEFT"('Dremio - SQL Engine', -12)  
-- Dremio  

```

LEFT example

```
SELECT "LEFT"('Dremio - SQL Engine', 6)  
-- Dremio  

```

Was this page helpful?
[Previous LEAST](/reference/sql/sql-functions)[Next LENGTH](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LEAST](/reference/sql/sql-functions)[Next LENGTH](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FLEFT%2F&_biz_t=1777950644575&_biz_i=LEFT%20%7C%20Dremio%20Documentation&_biz_n=626&rnd=803937&cdn_o=a&_biz_z=1777950644576)
