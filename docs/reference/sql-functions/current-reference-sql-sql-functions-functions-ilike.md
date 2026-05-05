---
url: /reference/sql/sql-functions/functions/ILIKE
title: "ILIKE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64317.283419625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ILIKE

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# ILIKE
Tests whether an expression matches a pattern. The comparison is case-insensitive.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ILIKE(_expression_ varchar, _pattern_ varchar) → boolean[​](/reference/sql/sql-functions#ilikeexpression-varchar-pattern-varchar--boolean "Direct link to ilikeexpression-varchar-pattern-varchar--boolean")
  * expression: The expression to compare.
  * pattern: The pattern that is compared to the expression.


**Examples**
ILIKE example

```
SELECT ILIKE ('pancake', '%Cake')  
-- True  

```

### ILIKE(_expression_ varchar, _pattern_ varchar, _escape_character_ varchar) → boolean[​](/reference/sql/sql-functions#ilikeexpression-varchar-pattern-varchar-escape_character-varchar--boolean "Direct link to ilikeexpression-varchar-pattern-varchar-escape_character-varchar--boolean")
  * expression: The expression to compare.
  * pattern: The pattern that is compared to the expression.
  * escape_character: Putting _escape_character_ before a wildcard in _pattern_ makes ILIKE treat the wildcard as a regular character when it appears in _expression_.


**Examples**
ILIKE example

```
SELECT ILIKE ('50%_Off', '%50!%%','!')  
-- True  

```

Was this page helpful?
[Previous HOUR](/reference/sql/sql-functions)[Next IMAXDIR](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous HOUR](/reference/sql/sql-functions)[Next IMAXDIR](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FHASH64%2F&_biz_t=1777950637396&_biz_i=HASH64%20%7C%20Dremio%20Documentation&_biz_n=606&rnd=387918&cdn_o=a&_biz_z=1777950637425)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FILIKE%2F&_biz_t=1777950637424&_biz_i=ILIKE%20%7C%20Dremio%20Documentation&_biz_n=607&rnd=658896&cdn_o=a&_biz_z=1777950637425)
