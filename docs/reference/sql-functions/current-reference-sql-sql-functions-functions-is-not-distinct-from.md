---
url: /reference/sql/sql-functions/functions/IS__NOT__DISTINCT_FROM
title: "IS__NOT__DISTINCT_FROM | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64323.996007041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * IS__NOT__DISTINCT_FROM

Version: current [26.x]
On this page
**Categories** : [Boolean](/reference/sql/sql-functions), [Datatype](/reference/sql/sql-functions)
# IS [NOT] DISTINCT FROM
Compares two expressions to determine whether they have the same or different values. NULLs are considered as comparable values.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### IS [NOT] DISTINCT FROM(_expression_ any) → boolean[​](/reference/sql/sql-functions#is-not-distinct-fromexpression-any--boolean "Direct link to is-not-distinct-fromexpression-any--boolean")
  * expression: Can be a general expression of any Dremio-supported data type.


**Examples**
IS [NOT] DISTINCT FROM example

```
SELECT NULL IS DISTINCT  
FROM NULL  
-- False  

```

IS [NOT] DISTINCT FROM example

```
SELECT NULL IS NOT DISTINCT  
FROM NULL  
-- True  

```

Was this page helpful?
[Previous IS_VARCHAR](/reference/sql/sql-functions)[Next IS__NOT__FALSE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous IS_VARCHAR](/reference/sql/sql-functions)[Next IS__NOT__FALSE](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FIS__NOT__DISTINCT_FROM%2F&_biz_t=1777950643332&_biz_i=IS__NOT__DISTINCT_FROM%20%7C%20Dremio%20Documentation&_biz_n=615&rnd=581129&cdn_o=a&_biz_z=1777950643332)
