---
url: /reference/sql/sql-functions/functions/SUBSTR
slug: /reference/sql/sql-functions/functions/SUBSTR
title: "SUBSTR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.865394458
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SUBSTR

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# SUBSTR
Returns the portion of the string from the specified base expression starting at the specified characters. This function supports regular expressions.
## Syntax
### SUBSTR(_string_expression_ varchar, _offset_ int64) → varchar[​](/reference/sql/sql-functions)
  * string_expression: Base expression to extract substring from.
  * offset: The offset from which the substring starts.


**Examples**
SUBSTR example

```
SELECT SUBSTR('Dremio Lakehouse', 8)  
-- Lakehouse  

```

### SUBSTR(_string_expression_ varchar, _offset_ int64, _length_ int64) → varchar[​](/reference/sql/sql-functions)
  * string_expression: Base expression to extract substring from.
  * offset: The offset from which the substring starts.
  * length (optional): The length limit of the substring.


**Examples**
SUBSTR example

```
SELECT SUBSTR('base expression', 6, 4)  
-- expr  

```

### SUBSTR(_string_expression_ varchar, _pattern_ varchar) → varchar[​](/reference/sql/sql-functions)
  * string_expression: Base expression to extract substring from.
  * pattern: A regular expression pattern to match.


**Examples**
SUBSTR example

```
SELECT SUBSTR('dremio user 123', '[0-9]+')  
-- 123  

```

Was this page helpful?
[Previous SUBLIST](/reference/sql/sql-functions)[Next SUBSTRING](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SUBLIST](/reference/sql/sql-functions)[Next SUBSTRING](/reference/sql/sql-functions)
!
