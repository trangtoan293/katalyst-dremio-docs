---
url: /reference/sql/sql-functions/functions/REPEATSTR
slug: /reference/sql/sql-functions/functions/REPEATSTR
title: "REPEATSTR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64345.043549125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * REPEATSTR

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# REPEATSTR
Repeats the given string n times.
## Syntax
### REPEATSTR(_expression_ varchar, _nTimes_ int32) → varchar[​](/reference/sql/sql-functions)
  * expression: String/characters to repeat.
  * nTimes: Number of times the string should be repeated.


**Examples**
REPEATSTR example

```
SELECT REPEATSTR('a ', 5)  
-- a a a a a  

```

Was this page helpful?
[Previous REPEAT](/reference/sql/sql-functions)[Next REPLACE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous REPEAT](/reference/sql/sql-functions)[Next REPLACE](/reference/sql/sql-functions)
!
