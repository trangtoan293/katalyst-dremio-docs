---
url: /reference/sql/sql-functions/functions/TRIM
slug: /reference/sql/sql-functions/functions/TRIM
title: "TRIM | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.939401083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TRIM

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# TRIM
Removes leading, trailing, or both spaces or characters from a string.
## Syntax
### TRIM(LEADING or TRAILING or BOTH _trim_expression_ varchar FROM _expression_ varchar) → varchar[​](/reference/sql/sql-functions)
  * trim_expression (optional): The characters to trim.
  * expression: The expression to be trimmed.


**Examples**
TRIM example

```
SELECT TRIM('   dremio   ')  
-- dremio  

```

TRIM example

```
SELECT TRIM(LEADING 'x' FROM 'xxxDremio')  
-- Dremio  

```

TRIM example

```
SELECT TRIM(TRAILING 'x' FROM 'Dremioxxx')  
-- Dremio  

```

TRIM example

```
SELECT TRIM(BOTH 'x' FROM 'xxxDremioxxx')  
-- Dremio  

```

TRIM example

```
SELECT TRIM('xy' FROM 'xyxDremioxyy')  
-- Dremio  

```

## Usage Notes[​](/reference/sql/sql-functions)
If you do not specify a keyword before `trim_expression`, it defaults to BOTH. If you do not specify `trim_expression`, it defaults to a space. Organizations using Oracle will always receive a `NULL` return if this function is used with an empty string.
Was this page helpful?
[Previous TRANSLATE](/reference/sql/sql-functions)[Next TRUNCATE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TRANSLATE](/reference/sql/sql-functions)[Next TRUNCATE](/reference/sql/sql-functions)
!
