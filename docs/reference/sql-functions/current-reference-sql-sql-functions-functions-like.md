---
url: /reference/sql/sql-functions/functions/LIKE
title: "LIKE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.555891583
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LIKE

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# LIKE
Tests whether an expression matches one or more patterns. Comparisons are case-sensitive.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
###  _expression_ [ NOT ] LIKE _pattern_ → boolean[​](/reference/sql/sql-functions#expression--not--like-pattern--boolean "Direct link to expression--not--like-pattern--boolean")
  * expression: The expression to compare.
  * NOT (optional): A keyword that inverts the return value.
  * pattern: The pattern that is compared to the expression.


**Examples**
LIKE example

```
SELECT 'pancake' LIKE '%cake'  
-- True  

```

LIKE example

```
SELECT 'pancake' NOT LIKE '%cake'  
-- False  

```

###  _expression_ [ NOT ] LIKE _pattern_ ESCAPE _escape_character_ → boolean[​](/reference/sql/sql-functions#expression--not--like-pattern-escape-escape_character--boolean "Direct link to expression--not--like-pattern-escape-escape_character--boolean")
  * expression: The expression to compare.
  * NOT (optional): A keyword that inverts the return value.
  * pattern: The pattern that is compared to the expression.
  * escape_character (optional): Putting _escape_character_ before a wildcard in _pattern_ makes LIKE treat the wildcard as a regular character when it appears in _expression_.


**Examples**
LIKE example

```
SELECT '50%_Off' LIKE '%50!%%' ESCAPE '!'  
-- True  

```

LIKE example

```
SELECT '%SalesData%/Users/Jane' NOT LIKE '/%SalesData/%//Users/%' ESCAPE '/'  
-- False  

```

###  _expression_ [ NOT ] LIKE {'{'})'{'{'})'{'}'}) ANY | SOME | ALL {'{'})'{'}'}'{'}'} ( [ _pattern_ [, ...] ] ) → boolean[​](/reference/sql/sql-functions#expression--not--like--any--some--all----pattern------boolean "Direct link to expression--not--like--any--some--all----pattern------boolean")
  * expression: A `STRING` expression.
  * NOT (optional): A keyword that inverts the return value.
  * ANY or SOME or ALL (optional): Keywords indicating whether the expression must match at least one pattern or must match all patterns.
  * pattern: One or more `STRING` expressions.


**Examples**
LIKE example

```
SELECT 'Spark' LIKE ALL ('_park', '%ark')  
-- True  

```

LIKE example

```
SELECT 'Spark' NOT LIKE ALL ('_park', '%ark')  
-- False  

```

LIKE example

```
SELECT 'Spark' LIKE SOME ('meow', 'woof')  
-- False  

```

LIKE example

```
SELECT 'Spark' NOT LIKE SOME ('meow', 'woof')  
-- True  

```

LIKE example

```
SELECT 'Spark' LIKE ANY ('_park', '_mart')  
-- True  

```

LIKE example

```
SELECT 'Spark' NOT LIKE ANY ('_park', '_mart')  
-- False  

```

Was this page helpful?
[Previous LEVENSHTEIN](/reference/sql/sql-functions)[Next LISTAGG](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LEVENSHTEIN](/reference/sql/sql-functions)[Next LISTAGG](/reference/sql/sql-functions)
