---
url: /reference/sql/sql-functions/functions/TO_TIME
slug: /reference/sql/sql-functions/functions/TO_TIME
title: "TO_TIME | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64074.019787416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TO_TIME

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions), [Conversion](/reference/sql/sql-functions)
# TO_TIME
Converts the input expressions to the corresponding time.
## Syntax
### TO_TIME(_numeric_expression_ int32) → time[​](/reference/sql/sql-functions)
  * numeric_expression: A Unix epoch timestamp.


**Examples**
TO_TIME example

```
SELECT TO_TIME(1665131223)  
-- 08:27:03  

```

### TO_TIME(_numeric_expression_ int64) → time[​](/reference/sql/sql-functions)
  * numeric_expression: A Unix epoch timestamp.


**Examples**
TO_TIME example

```
SELECT TO_TIME(1665131223)  
-- 08:27:03  

```

### TO_TIME(_string_expression_ varchar, _format_ varchar, _replaceErrorWithNull_ int32) → time[​](/reference/sql/sql-functions)
  * string_expression: The string from which to extract the time.
  * format: String to specify [format](/reference/sql/sql-functions) of the time.
  * replaceErrorWithNull: If 0, the function will fail when given malformed input. If 1, the function will return NULL when given malformed input.


**Examples**
TO_TIME example

```
SELECT TO_TIME('09:15:00.23232', 'HH:MI:SS', 1)  
-- NULL  

```

### TO_TIME(_string_expression_ varchar, _format_ varchar) → time[​](/reference/sql/sql-functions)
  * string_expression: The string from which to extract the time.
  * format: String to specify [format](/reference/sql/sql-functions) of the time.


**Examples**
TO_TIME example

```
SELECT TO_TIME('09:15:00', 'HH:MI:SS')  
-- 09:15:00  

```

### TO_TIME(_numeric_expression_ double) → time[​](/reference/sql/sql-functions)
  * numeric_expression: A Unix epoch timestamp.


**Examples**
TO_TIME example

```
SELECT TO_TIME(1665131223.69)  
-- 08:27:03  

```

### TO_TIME(_numeric_expression_ float) → time[​](/reference/sql/sql-functions)
  * numeric_expression: A Unix epoch timestamp.


**Examples**
TO_TIME example

```
SELECT TO_TIME(1665131223.69)  
-- 08:27:03  

```

Was this page helpful?
[Previous TO_NUMBER](/reference/sql/sql-functions)[Next TO_TIMESTAMP](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TO_NUMBER](/reference/sql/sql-functions)[Next TO_TIMESTAMP](/reference/sql/sql-functions)
