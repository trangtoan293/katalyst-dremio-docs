---
url: /reference/sql/sql-functions/functions/CHR
slug: /reference/sql/sql-functions/functions/CHR
title: "CHR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.90831375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CHR

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# CHR
Converts a Unicode code point into the character that matches the input Unicode character. If an invalid code point is specified, an empty string is returned.
## Syntax
### CHR(_integer_expression_ int32) → varchar[​](/reference/sql/sql-functions)
  * integer_expression: Unicode code point to convert to character.


**Examples**
CHR example

```
SELECT CHR(72)  
-- H  

```

CHR example

```
SELECT CHR(33)  
-- null  

```

Was this page helpful?
[Previous CHAR_LENGTH](/reference/sql/sql-functions)[Next COALESCE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CHAR_LENGTH](/reference/sql/sql-functions)[Next COALESCE](/reference/sql/sql-functions)
!
