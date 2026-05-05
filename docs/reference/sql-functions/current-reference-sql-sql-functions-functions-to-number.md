---
url: /reference/sql/sql-functions/functions/TO_NUMBER
slug: /reference/sql/sql-functions/functions/TO_NUMBER
title: "TO_NUMBER | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.420259541
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TO_NUMBER

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions)
# TO_NUMBER
Converts a string into a number (double) in the specified format.
## Syntax
### TO_NUMBER(_expression_ varchar, _format_ varchar) → double[​](/reference/sql/sql-functions)
  * expression: String to convert to a number.
  * format: Format for number conversion.


**Examples**
TO_NUMBER example

```
SELECT TO_NUMBER('12374.0023', '#####.###')  
-- 12374.002  

```

TO_NUMBER example

```
SELECT TO_NUMBER('12374', '#####')  
-- 12374.0  

```

Was this page helpful?
[Previous TO_HEX](/reference/sql/sql-functions)[Next TO_TIME](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TO_HEX](/reference/sql/sql-functions)[Next TO_TIME](/reference/sql/sql-functions)
!
