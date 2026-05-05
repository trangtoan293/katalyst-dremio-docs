---
url: /reference/sql/sql-functions/functions/LOG10
title: "LOG10 | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64331.040559083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LOG10

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# LOG10
Returns the log base 10 of the numeric input expression.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### LOG10(_expression_ double) → double[​](/reference/sql/sql-functions#log10expression-double--double "Direct link to log10expression-double--double")
  * expression: The value for which you want to calculate the log.


**Examples**
LOG10 example

```
SELECT LOG10(20.5)  
-- 1.3117538610557542  

```

### LOG10(_expression_ int64) → double[​](/reference/sql/sql-functions#log10expression-int64--double "Direct link to log10expression-int64--double")
  * expression: The value for which you want to calculate the log.


**Examples**
LOG10 example

```
SELECT LOG10(100)  
-- 2.0  

```

### LOG10(_expression_ int32) → double[​](/reference/sql/sql-functions#log10expression-int32--double "Direct link to log10expression-int32--double")
  * expression: The value for which you want to calculate the log.


**Examples**
LOG10 example

```
SELECT LOG10(100)  
-- 2.0  

```

### LOG10(_expression_ float) → double[​](/reference/sql/sql-functions#log10expression-float--double "Direct link to log10expression-float--double")
  * expression: The value for which you want to calculate the log.


**Examples**
LOG10 example

```
SELECT LOG10(20.5)  
-- 1.3117538610557542  

```

Was this page helpful?
[Previous LOG](/reference/sql/sql-functions)[Next LOWER](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LOG](/reference/sql/sql-functions)[Next LOWER](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FLOG10%2F&_biz_t=1777950650680&_biz_i=LOG10%20%7C%20Dremio%20Documentation&_biz_n=634&rnd=530964&cdn_o=a&_biz_z=1777950650681)
