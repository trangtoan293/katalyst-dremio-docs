---
url: /reference/sql/sql-functions/functions/IS__NOT__NULL
title: "IS__NOT__NULL | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.374740791
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * IS__NOT__NULL

Version: current [26.x]
On this page
**Categories** : [Boolean](/reference/sql/sql-functions), [Datatype](/reference/sql/sql-functions)
# IS [NOT] NULL
Determines if an expression is `NULL` or not `NULL`. Alias for the function `ISNULL`/`ISNOTNULL`.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### IS [NOT] NULL(_expression_ any) → boolean[​](/reference/sql/sql-functions#is-not-nullexpression-any--boolean "Direct link to is-not-nullexpression-any--boolean")
  * expression: Expression of any Dremio supported data type to evaluate.


**Examples**
ISNULL function returns true if expression is NULL, and false otherwise.

```
SELECT ISNULL('dremio')  
-- False  

```

ISNULL operator returns true if expression is NULL, and false otherwise.

```
SELECT 'dremio' IS NULL  
-- False  

```

### IS [NOT] NULL(_expression_ any) → boolean[​](/reference/sql/sql-functions#is-not-nullexpression-any--boolean-1 "Direct link to is-not-nullexpression-any--boolean-1")
  * expression: Expression of any Dremio supported data type to evaluate.


**Examples**
ISNOTNULL function returns true if expression is not NULL, and false otherwise.

```
SELECT ISNOTNULL('dremio')  
-- True  

```

ISNOTNULL operator returns true if expression is not NULL, and false otherwise.

```
SELECT 'dremio' IS NOT NULL  
-- False  

```

Was this page helpful?
[Previous IS__NOT__FALSE](/reference/sql/sql-functions)[Next IS__NOT__TRUE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous IS__NOT__FALSE](/reference/sql/sql-functions)[Next IS__NOT__TRUE](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FIS__NOT__NULL%2F&_biz_t=1777950644339&_biz_i=IS__NOT__NULL%20%7C%20Dremio%20Documentation&_biz_n=623&rnd=863753&cdn_o=a&_biz_z=1777950644339)
