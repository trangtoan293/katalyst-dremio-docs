---
url: /reference/sql/sql-functions/functions/STRPOS
slug: /reference/sql/sql-functions/functions/STRPOS
title: "STRPOS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.891980291
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * STRPOS

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# STRPOS
Searches for the first occurence of the substring in the given expression and returns the position of where the substring begins. Searching binary values is also supported.
## Syntax
### STRPOS(_expression_ varchar, _substring_ varchar) → int32[​](/reference/sql/sql-functions)
  * expression: The expression to search.
  * substring: The substring to search the expression for.


**Examples**
STRPOS example

```
SELECT STRPOS('dremio cloud service', 'cloud')  
-- 8  

```

STRPOS example

```
SELECT STRPOS(1001111, 00)  
-- 2  

```

STRPOS example

```
SELECT STRPOS('dremio cloud service', 'sql')  
-- 0  

```

## Usage Notes[​](/reference/sql/sql-functions)
If the substring is not found, the function returns 0. The data type of both parameters must match; specifically, they should both be either strings or binary values.
Was this page helpful?
[Previous STRING_BINARY](/reference/sql/sql-functions)[Next ST_FROMGEOHASH](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous STRING_BINARY](/reference/sql/sql-functions)[Next ST_FROMGEOHASH](/reference/sql/sql-functions)
!!
