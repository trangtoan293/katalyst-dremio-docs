---
url: /reference/sql/sql-functions/functions/TO_NUMBER
title: "TO_NUMBER | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.420259541
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TO_NUMBER

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions)
# TO_NUMBER
Converts a string into a number (double) in the specified format.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### TO_NUMBER(_expression_ varchar, _format_ varchar) → double[​](/reference/sql/sql-functions#to_numberexpression-varchar-format-varchar--double "Direct link to to_numberexpression-varchar-format-varchar--double")
  * expression: String to convert to a number.
  * format: Format for number conversion.


**Examples**
TO_NUMBER example

```
SELECT TO_NUMBER('12374.0023', '#####.###')  
-- 12374.002  

```

TO_NUMBER example

```
SELECT TO_NUMBER('12374', '#####')  
-- 12374.0  

```

Was this page helpful?
[Previous TO_HEX](/reference/sql/sql-functions)[Next TO_TIME](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TO_HEX](/reference/sql/sql-functions)[Next TO_TIME](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FTO_NUMBER%2F&_biz_t=1777950684867&_biz_i=TO_NUMBER%20%7C%20Dremio%20Documentation&_biz_n=702&rnd=942909&cdn_o=a&_biz_z=1777950684867)
