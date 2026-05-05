---
url: /reference/sql/sql-functions/functions/BIN
title: "BIN | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64286.840415333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * BIN

Version: current [26.x]
On this page
**Categories** : [Binary](/reference/sql/sql-functions)
# BIN
Returns the binary representation of an expression.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### BIN(_expression_ integer) → varchar[​](/reference/sql/sql-functions#binexpression-integer--varchar "Direct link to binexpression-integer--varchar")
  * expression: An integer expression to encode.


**Examples**
BIN example

```
SELECT BIN(100)  
-- 1100100  

```

BIN example

```
SELECT BIN(-100)  
-- 11111111111111111111111110011100  

```

BIN example

```
SELECT BIN(null)  
-- null  

```

Was this page helpful?
[Previous BASE64](/reference/sql/sql-functions)[Next BINARY_STRING](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous BASE64](/reference/sql/sql-functions)[Next BINARY_STRING](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FBIN%2F&_biz_t=1777950608030&_biz_i=BIN%20%7C%20Dremio%20Documentation&_biz_n=564&rnd=344141&cdn_o=a&_biz_z=1777950608031)
