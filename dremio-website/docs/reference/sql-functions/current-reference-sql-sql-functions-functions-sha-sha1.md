---
url: /reference/sql/sql-functions/functions/SHA__SHA1
title: "SHA__SHA1 | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64351.948160333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SHA__SHA1

Version: current [26.x]
On this page
**Categories** : [Cryptography](/reference/sql/sql-functions)
# SHA, SHA1
Computes the SHA-1 hash value of a string.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### SHA(_expression_ varchar) → varchar[​](/reference/sql/sql-functions#shaexpression-varchar--varchar "Direct link to shaexpression-varchar--varchar")
  * expression: The string to hash.


**Examples**
SHA example

```
SELECT SHA('Dremio')  
-- dda3f1ef53d1e82a4845ef5b2893b9d9c04bd3b1  

```

### SHA1(_expression_ varchar) → varchar[​](/reference/sql/sql-functions#sha1expression-varchar--varchar "Direct link to sha1expression-varchar--varchar")
  * expression: The string to hash.


**Examples**
SHA1 example

```
SELECT SHA1('Dremio')  
-- dda3f1ef53d1e82a4845ef5b2893b9d9c04bd3b1  

```

Was this page helpful?
[Previous SHA512](/reference/sql/sql-functions)[Next SIGN](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SHA512](/reference/sql/sql-functions)[Next SIGN](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FSHA__SHA1%2F&_biz_t=1777950671872&_biz_i=SHA__SHA1%20%7C%20Dremio%20Documentation&_biz_n=675&rnd=280406&cdn_o=a&_biz_z=1777950671872)
