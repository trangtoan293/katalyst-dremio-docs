---
url: /reference/sql/sql-functions/functions/SOUNDEX
slug: /reference/sql/sql-functions/functions/SOUNDEX
title: "SOUNDEX | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64351.992535416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SOUNDEX

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# SOUNDEX
Returns a string that contains a phonetic representation of the input string.
## Syntax
### SOUNDEX(_expression_ varchar) → varchar[​](/reference/sql/sql-functions)
  * expression: The expression for which a representation of the pronunciation is returned.


**Examples**
SOUNDEX example

```
SELECT SOUNDEX('Smith'), SOUNDEX('Smythe')  
-- EXPR$0, EXPR$1  
-- S530, S530  

```

SOUNDEX example

```
SELECT SOUNDEX('the data lake'), SOUNDEX('the data lakehouse'), SOUNDEX('the data warehouse')  
-- EXPR$0, EXPR$1, EXPR$2  
-- T334, T334, T336  

```

## Usage Notes[​](/reference/sql/sql-functions)
You can use this function to determine whether two strings (for example, similar last names 'Smith' and 'Smythe') have similar pronounciations in the English language. This function uses the 
Was this page helpful?
[Previous SIZE](/reference/sql/sql-functions)[Next SPLIT_PART](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SIZE](/reference/sql/sql-functions)[Next SPLIT_PART](/reference/sql/sql-functions)
!
