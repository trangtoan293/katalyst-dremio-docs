---
url: /reference/sql/sql-functions/functions/BIN
slug: /reference/sql/sql-functions/functions/BIN
title: "BIN | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64286.840415333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * BIN

Version: current [26.x]
On this page
**Categories** : [Binary](/reference/sql/sql-functions)
# BIN
Returns the binary representation of an expression.
## Syntax
### BIN(_expression_ integer) → varchar[​](/reference/sql/sql-functions)
  * expression: An integer expression to encode.


**Examples**
BIN example

```
SELECT BIN(100)  
-- 1100100  

```

BIN example

```
SELECT BIN(-100)  
-- 11111111111111111111111110011100  

```

BIN example

```
SELECT BIN(null)  
-- null  

```

Was this page helpful?
[Previous BASE64](/reference/sql/sql-functions)[Next BINARY_STRING](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous BASE64](/reference/sql/sql-functions)[Next BINARY_STRING](/reference/sql/sql-functions)
!
