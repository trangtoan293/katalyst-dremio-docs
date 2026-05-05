---
url: /reference/sql/sql-functions/functions/IS__NOT__TRUE
title: "IS__NOT__TRUE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.401636833
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * IS__NOT__TRUE

Version: current [26.x]
On this page
**Categories** : [Boolean](/reference/sql/sql-functions), [Datatype](/reference/sql/sql-functions)
# IS [NOT] TRUE
Tests whether the input expression is either true or not true. If true in either case, returns a value of `true`. Alias for the function `ISTRUE`/`ISNOTTRUE`.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### IS [NOT] TRUE(_expression_ int64) → boolean[​](/reference/sql/sql-functions#is-not-trueexpression-int64--boolean "Direct link to is-not-trueexpression-int64--boolean")
  * expression: Input expression.


**Examples**
ISTRUE example

```
SELECT ISTRUE(1)  
-- True  

```

### IS [NOT] TRUE(_expression_ boolean) → boolean[​](/reference/sql/sql-functions#is-not-trueexpression-boolean--boolean "Direct link to is-not-trueexpression-boolean--boolean")
  * expression: Input expression.


**Examples**
ISTRUE example

```
SELECT ISTRUE(FALSE)  
-- False  

```

### IS [NOT] TRUE(_expression_ int32) → boolean[​](/reference/sql/sql-functions#is-not-trueexpression-int32--boolean "Direct link to is-not-trueexpression-int32--boolean")
  * expression: Input expression.


**Examples**
ISTRUE example

```
SELECT ISTRUE(0)  
-- False  

```

### IS [NOT] TRUE(_expression_ int64) → boolean[​](/reference/sql/sql-functions#is-not-trueexpression-int64--boolean-1 "Direct link to is-not-trueexpression-int64--boolean-1")
  * expression: Input expression.


**Examples**
ISNOTTRUE example

```
SELECT ISNOTTRUE(1)  
-- False  

```

### IS [NOT] TRUE(_expression_ boolean) → boolean[​](/reference/sql/sql-functions#is-not-trueexpression-boolean--boolean-1 "Direct link to is-not-trueexpression-boolean--boolean-1")
  * expression: Input expression.


**Examples**
ISNOTTRUE example

```
SELECT ISNOTTRUE(FALSE)  
-- True  

```

### IS [NOT] TRUE(_expression_ int32) → boolean[​](/reference/sql/sql-functions#is-not-trueexpression-int32--boolean-1 "Direct link to is-not-trueexpression-int32--boolean-1")
  * expression: Input expression.


**Examples**
ISNOTTRUE example

```
SELECT ISNOTTRUE(0)  
-- True  

```

Was this page helpful?
[Previous IS__NOT__NULL](/reference/sql/sql-functions)[Next LAG](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous IS__NOT__NULL](/reference/sql/sql-functions)[Next LAG](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FIS__NOT__TRUE%2F&_biz_t=1777950644163&_biz_i=IS__NOT__TRUE%20%7C%20Dremio%20Documentation&_biz_n=621&rnd=600907&cdn_o=a&_biz_z=1777950644164)
