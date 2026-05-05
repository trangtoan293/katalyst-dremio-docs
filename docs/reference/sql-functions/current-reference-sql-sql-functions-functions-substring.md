---
url: /reference/sql/sql-functions/functions/SUBSTRING
slug: /reference/sql/sql-functions/functions/SUBSTRING
title: "SUBSTRING | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.768504583
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SUBSTRING

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# SUBSTRING
Returns the portion of the string from the specified base expression starting at the specified characters.
## Syntax
### SUBSTRING(_string_expression_ varchar, _offset_ int64) → varchar[​](/reference/sql/sql-functions)
  * string_expression: Base expression to extract substring from.
  * offset: The offset from which the substring starts.


**Examples**
SUBSTRING example

```
SELECT SUBSTRING('Dremio Lakehouse', 8)  
-- Lakehouse  

```

### SUBSTRING(_string_expression_ varchar FROM _offset_ int64) → varchar[​](/reference/sql/sql-functions)
  * string_expression: Base expression to extract substring from.
  * offset: The offset from which the substring starts.


**Examples**
SUBSTRING example

```
SELECT SUBSTRING('Dremio Lakehouse' FROM 8)  
-- Lakehouse  

```

### SUBSTRING(_string_expression_ varchar, _offset_ int64, _length_ int64) → varchar[​](/reference/sql/sql-functions)
  * string_expression: Base expression to extract substring from.
  * offset: The offset from which the substring starts.
  * length (optional): The length limit of the substring.


**Examples**
SUBSTRING example

```
SELECT SUBSTRING('base expression', 6, 4)  
-- expr  

```

## Usage Notes[​](/reference/sql/sql-functions)
This function is similar to `SUBSTR` except that this function can accept the `FROM` clause.
Was this page helpful?
[Previous SUBSTR](/reference/sql/sql-functions)[Next SUBSTRING_INDEX](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SUBSTR](/reference/sql/sql-functions)[Next SUBSTRING_INDEX](/reference/sql/sql-functions)
!
