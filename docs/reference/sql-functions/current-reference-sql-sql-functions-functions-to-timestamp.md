---
url: /reference/sql/sql-functions/functions/TO_TIMESTAMP
slug: /reference/sql/sql-functions/functions/TO_TIMESTAMP
title: "TO_TIMESTAMP | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.645276166
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TO_TIMESTAMP

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions), [Conversion](/reference/sql/sql-functions)
# TO_TIMESTAMP
Converts the input expressions to the corresponding timestamp.
## Syntax
### TO_TIMESTAMP(_numeric_expression_ double) → timestamp[​](/reference/sql/sql-functions)
  * numeric_expression: A Unix epoch timestamp.


**Examples**
TO_TIMESTAMP example

```
SELECT TO_TIMESTAMP(52 * 365.25 * 86400)  
-- 2022-01-01 00:00:00  

```

### TO_TIMESTAMP(_string_expression_ varchar, _format_ varchar [, _replaceErrorWithNull_ int32]) → timestamp[​](/reference/sql/sql-functions)
  * string_expression: The string from which to extract the timestamp.
  * format: String to specify [format](/reference/sql/sql-functions) of the timestamp.
  * replaceErrorWithNull (optional): If 0, the function will fail when given malformed input. If 1, the function will return NULL when given malformed input.


**Examples**
TO_TIMESTAMP example

```
SELECT TO_TIMESTAMP('2022-03-15 01:02:03.1245', 'YYYY-MM-DD HH:MI:SS', 1)  
-- NULL  

```

### TO_TIMESTAMP(_numeric_expression_ int64) → timestamp[​](/reference/sql/sql-functions)
  * numeric_expression: A Unix epoch timestamp.


**Examples**
TO_TIMESTAMP example

```
SELECT TO_TIMESTAMP(1640131200)  
-- 2021-12-22 00:00:00  

```

### TO_TIMESTAMP(_numeric_expression_ int32) → timestamp[​](/reference/sql/sql-functions)
  * numeric_expression: A Unix epoch timestamp.


**Examples**
TO_TIMESTAMP example

```
SELECT TO_TIMESTAMP(1640131200)  
-- 2021-12-22 00:00:00  

```

### TO_TIMESTAMP(_numeric_expression_ float) → timestamp[​](/reference/sql/sql-functions)
  * numeric_expression: A Unix epoch timestamp.


**Examples**
TO_TIMESTAMP example

```
SELECT TO_TIMESTAMP(52 * 365.25 * 86400)  
-- 2022-01-01 00:00:00  

```

### TO_TIMESTAMP(_string_expression_ varchar, _format_ varchar) → timestamp[​](/reference/sql/sql-functions)
  * string_expression: String from which to extract the timestamp.
  * format: String to specify [format](/reference/sql/sql-functions) of the timestamp.


**Examples**
TO_TIMESTAMP example

```
SELECT TO_TIMESTAMP('2021-07-31 01:02:03', 'YYYY-MM-DD HH:MI:SS')  
-- 2021-07-31 01:02:03  

```

Was this page helpful?
[Previous TO_TIME](/reference/sql/sql-functions)[Next TRANSACTION_TIMESTAMP](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TO_TIME](/reference/sql/sql-functions)[Next TRANSACTION_TIMESTAMP](/reference/sql/sql-functions)
!
