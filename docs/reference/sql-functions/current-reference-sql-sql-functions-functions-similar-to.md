---
url: /reference/sql/sql-functions/functions/SIMILAR_TO
slug: /reference/sql/sql-functions/functions/SIMILAR_TO
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
## Syntax
###  _expression_ SIMILAR TO _pattern_ → boolean[​](/reference/sql/sql-functions)
  * expression: The expression to compare.
  * pattern: The pattern that is compared to the expression.


**Examples**
SIMILAR_TO example

```
SELECT 'shortcakes' SIMILAR TO '%cake_'  
-- True  

```

###  _expression_ SIMILAR TO _pattern_ ESCAPE _escape_character_ → boolean[​](/reference/sql/sql-functions)
  * expression: The expression to compare.
  * pattern: The pattern that is compared to the expression.
  * escape: Putting an _escape_character_ before a wildcard in the _pattern_ makes SIMILAR TO treat the wildcard as a regular character when it appears in the _expression_.


**Examples**
SIMILAR_TO example

```
SELECT '100%' SIMILAR TO '100!%' ESCAPE '!'  
-- True  

```

## Usage Notes[​](/reference/sql/sql-functions)
Succeeds only if the pattern matches the entire expression.
Was this page helpful?
[Previous SIGN](/reference/sql/sql-functions)[Next SIN](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SIGN](/reference/sql/sql-functions)[Next SIN](/reference/sql/sql-functions)
!
