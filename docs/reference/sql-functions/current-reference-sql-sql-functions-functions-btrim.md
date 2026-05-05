---
url: /reference/sql/sql-functions/functions/BTRIM
slug: /reference/sql/sql-functions/functions/BTRIM
title: "BTRIM | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.790139708
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * BTRIM

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# BTRIM
Trims leading and trailing characters from a string.
## Syntax
### BTRIM(_expression_ string [, _trim_text_ string]) → string[​](/reference/sql/sql-functions)
  * expression: String expression to be trimmed.
  * trim_text (optional): Leading and trailing characters to trim from the input expression. If this parameter is not specified, then spaces will be trimmed from the input expression.


**Examples**
BTRIM example

```
SELECT BTRIM('      dremio ')  
-- dremio  

```

BTRIM example

```
SELECT BTRIM('~/~/~/dremio~', '~')  
-- /~/~/dremio  

```

BTRIM example

```
SELECT BTRIM('---dremio-', '-')  
-- dremio  

```

BTRIM example

```
SELECT BTRIM('stringvalue', 'string')  
-- value  

```

BTRIM example

```
SELECT BTRIM('pancake pan', 'abnp')  
-- cake  

```

Was this page helpful?
[Previous BROUND](/reference/sql/sql-functions)[Next CARDINALITY](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous BROUND](/reference/sql/sql-functions)[Next CARDINALITY](/reference/sql/sql-functions)
!
