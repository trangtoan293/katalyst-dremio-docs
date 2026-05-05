---
url: /reference/sql/sql-functions/functions/LN
slug: /reference/sql/sql-functions/functions/LN
title: "LN | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64330.715989333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LN

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# LN
Returns the natural logarithm of the numeric expression.
## Syntax
### LN(_numeric_expression_ double) → float8[​](/reference/sql/sql-functions)
  * numeric_expression: A number greater than `0`.


**Examples**
LN example

```
SELECT LN(0), LN(.1525), LN(1), LN(5.35), LN(5269853105789632584), LN(-1)  
-- null, -1.8805906829346708, 0.0, 1.6770965609079151, 43.10853416239341, null  

```

Was this page helpful?
[Previous LIST_FILES](/reference/sql/sql-functions)[Next LOCALTIME](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LIST_FILES](/reference/sql/sql-functions)[Next LOCALTIME](/reference/sql/sql-functions)
!
