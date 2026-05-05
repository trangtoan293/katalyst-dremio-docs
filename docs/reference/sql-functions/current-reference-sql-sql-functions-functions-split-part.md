---
url: /reference/sql/sql-functions/functions/SPLIT_PART
slug: /reference/sql/sql-functions/functions/SPLIT_PART
title: "SPLIT_PART | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64352.082935458
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SPLIT_PART

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# SPLIT_PART
Splits a given string at a specified character and returns the requested part.
## Syntax
### SPLIT_PART(_expression_ varchar, _delimiter_ varchar, _part_number_ int32) → varchar[​](/reference/sql/sql-functions)
  * expression: Input expression.
  * delimiter: String representing the delimiter to split the input expression by.
  * part_number: Requested part of the split. Must be an integer greater than zero.


**Examples**
SPLIT_PART example

```
SELECT SPLIT_PART('127.0.0.1', '.', 1)  
-- 127  

```

Was this page helpful?
[Previous SOUNDEX](/reference/sql/sql-functions)[Next SQRT](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SOUNDEX](/reference/sql/sql-functions)[Next SQRT](/reference/sql/sql-functions)
!
