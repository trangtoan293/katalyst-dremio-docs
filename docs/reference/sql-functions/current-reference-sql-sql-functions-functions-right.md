---
url: /reference/sql/sql-functions/functions/RIGHT
title: "RIGHT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64351.030060333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * RIGHT

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# RIGHT
Returns the right-most substring. The function name must be enclosed in double quotes ("RIGHT").
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### RIGHT(_string_ varchar, _length_ int64) → varchar[​](/reference/sql/sql-functions#rightstring-varchar-length-int64--varchar "Direct link to rightstring-varchar-length-int64--varchar")
  * string: String input parameter.
  * length: Number of characters on the right to return.


**Examples**
RIGHT example

```
SELECT "RIGHT"('Dremio - SQL Engine', 6)  
-- Engine  

```

Was this page helpful?
[Previous REVERSE](/reference/sql/sql-functions)[Next ROUND](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous REVERSE](/reference/sql/sql-functions)[Next ROUND](/reference/sql/sql-functions)
