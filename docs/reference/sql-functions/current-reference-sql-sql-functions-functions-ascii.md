---
url: /reference/sql/sql-functions/functions/ASCII
slug: /reference/sql/sql-functions/functions/ASCII
title: "ASCII | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64286.810506541
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ASCII

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# ASCII
Returns the ASCII code for the first character of a string. If the string is empty, 0 is returned.
## Syntax
### ASCII(_expression_ varchar) → int32[​](/reference/sql/sql-functions)
  * expression: The string for which the ASCII code for the first character in the string is returned.


**Examples**
ASCII example

```
SELECT ASCII ('DREMIO')  
-- 68  

```

ASCII example

```
SELECT ASCII ('D')  
-- 68  

```

ASCII example

```
SELECT ASCII ('')  
-- 0  

```

Was this page helpful?
[Previous ARRAY_TO_STRING](/reference/sql/sql-functions)[Next ASIN](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAY_TO_STRING](/reference/sql/sql-functions)[Next ASIN](/reference/sql/sql-functions)
!!
