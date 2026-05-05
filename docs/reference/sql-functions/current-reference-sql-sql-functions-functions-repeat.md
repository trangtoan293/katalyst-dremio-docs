---
url: /reference/sql/sql-functions/functions/REPEAT
title: "REPEAT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64344.992354083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * REPEAT

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# REPEAT
Builds a string by repeating the input for the specified number of times
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### REPEAT(_expression_ varchar, _nTimes_ int32) → varchar[​](/reference/sql/sql-functions#repeatexpression-varchar-ntimes-int32--varchar "Direct link to repeatexpression-varchar-ntimes-int32--varchar")
  * expression: The input string from which the output string is built.
  * nTimes: The number of times the input expression should be repeated.


**Examples**
REPEAT example

```
SELECT REPEAT('abc', 3)  
-- abcabcabc  

```

Was this page helpful?
[Previous REGEXP_SPLIT](/reference/sql/sql-functions)[Next REPEATSTR](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous REGEXP_SPLIT](/reference/sql/sql-functions)[Next REPEATSTR](/reference/sql/sql-functions)
