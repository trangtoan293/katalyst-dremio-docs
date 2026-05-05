---
url: /reference/sql/sql-functions/functions/ISNUMERIC
slug: /reference/sql/sql-functions/functions/ISNUMERIC
title: "ISNUMERIC | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64317.497018375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ISNUMERIC

Version: current [26.x]
On this page
**Categories** : [Boolean](/reference/sql/sql-functions)
# ISNUMERIC
Determines whether an expression is a valid numeric type (DECIMAL, DOUBLE, INT, BIGINT, VARBINARY).
## Syntax
### ISNUMERIC(_expression_ any) → boolean[​](/reference/sql/sql-functions)
  * expression: Can be a general expression of any Dremio-supported data type.


**Examples**
ISNUMERIC example

```
SELECT ISNUMERIC('13579')  
-- True  

```

ISNUMERIC example

```
SELECT ISNUMERIC('Hello World!')  
-- False  

```

ISNUMERIC example

```
SELECT ISNUMERIC(passenger_count)  
FROM "Samples"."samples.dremio.com"."NYC-taxi-trips"  
LIMIT 1  
-- True  

```

Was this page helpful?
[Previous ISDATE](/reference/sql/sql-functions)[Next IS_BIGINT](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ISDATE](/reference/sql/sql-functions)[Next IS_BIGINT](/reference/sql/sql-functions)
!
