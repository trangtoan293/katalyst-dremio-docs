---
url: /reference/sql/sql-functions/functions/UNHEX
title: "UNHEX | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.955493083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * UNHEX

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions), [String](/reference/sql/sql-functions), [Binary](/reference/sql/sql-functions)
# UNHEX
Converts the hexadecimal number into the bytes represented by a number.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### UNHEX(_expression_ varchar) → varbinary[​](/reference/sql/sql-functions#unhexexpression-varchar--varbinary "Direct link to unhexexpression-varchar--varbinary")
  * expression: A string containing only hexadecimal digits.


**Examples**
UNHEX example

```
SELECT UNHEX('4472656D696F')  
-- RHJlbWlv  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
The returned value is a binary string. If the expression contains non-hex characters the result is `NULL`.
Was this page helpful?
[Previous UNBASE64](/reference/sql/sql-functions)[Next UNIX_TIMESTAMP](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous UNBASE64](/reference/sql/sql-functions)[Next UNIX_TIMESTAMP](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FUNHEX%2F&_biz_t=1777950686397&_biz_i=Dremio%20Documentation&_biz_n=715&rnd=14376&cdn_o=a&_biz_z=1777950686397)
