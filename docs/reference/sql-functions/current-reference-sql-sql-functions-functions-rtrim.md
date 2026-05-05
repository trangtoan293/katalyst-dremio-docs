---
url: /reference/sql/sql-functions/functions/RTRIM
slug: /reference/sql/sql-functions/functions/RTRIM
title: "RTRIM | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64351.878497083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * RTRIM

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# RTRIM
Removes trailing spaces or characters from a string.
## Syntax
### RTRIM(_expression_ varchar [, _trim_expression_ varchar]) → varchar[​](/reference/sql/sql-functions)
  * expression: The expression to be trimmed.
  * trim_expression (optional): Trailing characters to trim. If this parameter is not specified, then spaces will be trimmed from the input expression.


**Examples**
RTRIM example

```
SELECT RTRIM('dremio   ')  
-- dremio  

```

RTRIM example

```
SELECT RTRIM('xxxDremioxx', 'x')  
-- xxxDremio  

```

RTRIM example

```
SELECT RTRIM('pancake', 'ekac')  
-- pan  

```

Was this page helpful?
[Previous RSHIFT](/reference/sql/sql-functions)[Next SECOND](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous RSHIFT](/reference/sql/sql-functions)[Next SECOND](/reference/sql/sql-functions)
!
