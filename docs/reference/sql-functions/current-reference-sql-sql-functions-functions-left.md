---
url: /reference/sql/sql-functions/functions/LEFT
slug: /reference/sql/sql-functions/functions/LEFT
title: "LEFT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.478541625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LEFT

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# LEFT
Returns the left-most substring. The function name must be enclosed in double quotes ("LEFT").
## Syntax
### LEFT(_expression_ varchar, _length_ int64) → varchar[​](/reference/sql/sql-functions)
  * expression: String input parameter
  * length: Number of characters on the left to return.


**Examples**
LEFT example

```
SELECT "LEFT"('Dremio - SQL Engine', -12)  
-- Dremio  

```

LEFT example

```
SELECT "LEFT"('Dremio - SQL Engine', 6)  
-- Dremio  

```

Was this page helpful?
[Previous LEAST](/reference/sql/sql-functions)[Next LENGTH](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LEAST](/reference/sql/sql-functions)[Next LENGTH](/reference/sql/sql-functions)
!
