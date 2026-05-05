---
url: /reference/sql/sql-functions/functions/CAST
slug: /reference/sql/sql-functions/functions/CAST
title: "CAST | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.772179416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CAST

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions)
# CAST
Converts a value of one data type to another data type. This function behaves similarly to the TO_`data_type` (i.e. TO_TIMESTAMP) functions.
## Syntax
### CAST(_expression_ Any type, _data_type_ Any type) → Type specified as data_type parameter[​](/reference/sql/sql-functions)
  * expression: The expression that you want to convert
  * data_type: The name of the data type that you want to convert the input expression to.


**Examples**
CAST example

```
SELECT CAST(3.14150 AS INTEGER)  
-- 3  

```

CAST example

```
SELECT CAST(.167 AS INTEGER)  
-- 0  

```

CAST example

```
SELECT CAST('2021-04-03' AS DATE)  
-- 2021-04-03  

```

Was this page helpful?
[Previous CASE](/reference/sql/sql-functions)[Next CBRT](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CASE](/reference/sql/sql-functions)[Next CBRT](/reference/sql/sql-functions)
!!!
