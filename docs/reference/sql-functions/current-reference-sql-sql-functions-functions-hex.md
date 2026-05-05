---
url: /reference/sql/sql-functions/functions/HEX
title: "HEX | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64317.364947958
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * HEX

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions), [String](/reference/sql/sql-functions), [Binary](/reference/sql/sql-functions)
# HEX
Returns the hexadecimal encoding of an expression.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### HEX(_expression_ any primitive) → varchar[​](/reference/sql/sql-functions#hexexpression-any-primitive--varchar "Direct link to hexexpression-any-primitive--varchar")
  * expression: The expression to encode.


**Examples**
HEX example

```
SELECT HEX('Dremio')  
-- 4472656D696F  

```

HEX example

```
SELECT HEX(2023)  
-- 7E7  

```

Was this page helpful?
[Previous HASH64](/reference/sql/sql-functions)[Next HOUR](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous HASH64](/reference/sql/sql-functions)[Next HOUR](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FHASH64%2F&_biz_t=1777950637396&_biz_i=HASH64%20%7C%20Dremio%20Documentation&_biz_n=606&rnd=387918&cdn_o=a&_biz_z=1777950637425)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FHEX%2F&_biz_t=1777950637425&_biz_i=HEX%20%7C%20Dremio%20Documentation&_biz_n=607&rnd=230946&cdn_o=a&_biz_z=1777950637425)
