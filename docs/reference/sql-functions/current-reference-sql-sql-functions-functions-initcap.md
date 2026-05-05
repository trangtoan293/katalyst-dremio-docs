---
url: /reference/sql/sql-functions/functions/INITCAP
slug: /reference/sql/sql-functions/functions/INITCAP
title: "INITCAP | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64317.635522125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * INITCAP

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# INITCAP
Returns the input string with the first letter of each word in uppercase and the subsequent letters in the word are in lowercase.
## Syntax
### INITCAP(_expression_ varchar) → varchar[​](/reference/sql/sql-functions)
  * expression: Input string.


**Examples**
INITCAP example

```
SELECT INITCAP('a guide to data lakehouses')  
-- A Guide To Data Lakehouses  

```

INITCAP example

```
SELECT INITCAP('a guide to data lakeHouses')  
-- A Guide To Data Lakehouses  

```

Was this page helpful?
[Previous IMINDIR](/reference/sql/sql-functions)[Next INSTR](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous IMINDIR](/reference/sql/sql-functions)[Next INSTR](/reference/sql/sql-functions)
!
