---
url: /reference/sql/sql-functions/functions/SIMILAR_TO
title: "SIMILAR_TO | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64351.92429525
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SIMILAR_TO

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# SIMILAR_TO
Tests whether the entire expression matches a pattern.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
###  _expression_ SIMILAR TO _pattern_ → boolean[​](/reference/sql/sql-functions#expression-similar-to-pattern--boolean "Direct link to expression-similar-to-pattern--boolean")
  * expression: The expression to compare.
  * pattern: The pattern that is compared to the expression.


**Examples**
SIMILAR_TO example

```
SELECT 'shortcakes' SIMILAR TO '%cake_'  
-- True  

```

###  _expression_ SIMILAR TO _pattern_ ESCAPE _escape_character_ → boolean[​](/reference/sql/sql-functions#expression-similar-to-pattern-escape-escape_character--boolean "Direct link to expression-similar-to-pattern-escape-escape_character--boolean")
  * expression: The expression to compare.
  * pattern: The pattern that is compared to the expression.
  * escape: Putting an _escape_character_ before a wildcard in the _pattern_ makes SIMILAR TO treat the wildcard as a regular character when it appears in the _expression_.


**Examples**
SIMILAR_TO example

```
SELECT '100%' SIMILAR TO '100!%' ESCAPE '!'  
-- True  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
Succeeds only if the pattern matches the entire expression.
Was this page helpful?
[Previous SIGN](/reference/sql/sql-functions)[Next SIN](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SIGN](/reference/sql/sql-functions)[Next SIN](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FSIMILAR_TO%2F&_biz_t=1777950671982&_biz_i=Dremio%20Documentation&_biz_n=676&rnd=467387&cdn_o=a&_biz_z=1777950671983)
