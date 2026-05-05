---
url: /reference/sql/sql-functions/functions/TO_CHAR
slug: /reference/sql/sql-functions/functions/TO_CHAR
title: "TO_CHAR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64360.404330333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TO_CHAR

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions)
# TO_CHAR
Converts the input expression to a character/string using the specified format.
## Syntax
### TO_CHAR(_expression_ time, _format_ varchar) → varchar[​](/reference/sql/sql-functions)
  * expression: Expression to convert to a string.
  * format: [Format](/reference/sql/sql-functions) to use for the conversion.


**Examples**
TO_CHAR example

```
SELECT TO_CHAR(CAST('01:02:03' AS TIME) , 'HH:MI');  
-- 01:02  

```

### TO_CHAR(_expression_ date, _format_ varchar) → varchar[​](/reference/sql/sql-functions)
  * expression: Expression to convert to a string.
  * format: [Format](/reference/sql/sql-functions) to use for the conversion.


**Examples**
TO_CHAR example

```
SELECT TO_CHAR(CAST('2021-02-11' AS DATE) , 'yyyy.mm.dd');  
-- 2021.02.11  

```

### TO_CHAR(_expression_ int32, _format_ varchar) → varchar[​](/reference/sql/sql-functions)
  * expression: Expression to convert to a string.
  * format: Format to use for the conversion.


**Examples**
TO_CHAR example

```
SELECT TO_CHAR(10, '#')  
-- 10  

```

### TO_CHAR(_expression_ float, _format_ varchar) → varchar[​](/reference/sql/sql-functions)
  * expression: Expression to convert to a string.
  * format: Format to use for the conversion.


**Examples**
TO_CHAR example

```
SELECT TO_CHAR(7.5, '#.#')  
-- 7.5  

```

### TO_CHAR(_expression_ int64, _format_ varchar) → varchar[​](/reference/sql/sql-functions)
  * expression: Expression to convert to a string.
  * format: Format to use for the conversion.


**Examples**
TO_CHAR example

```
SELECT TO_CHAR(10, '#')  
-- 10  

```

### TO_CHAR(_expression_ double, _format_ varchar) → varchar[​](/reference/sql/sql-functions)
  * expression: Expression to convert to a string.
  * format: Format to use for the conversion.


**Examples**
TO_CHAR example

```
SELECT TO_CHAR(7.5, '#.#')  
-- 7.5  

```

### TO_CHAR(_expression_ timestamp, _format_ varchar) → varchar[​](/reference/sql/sql-functions)
  * expression: Expression to convert to a string.
  * format: [Format](/reference/sql/sql-functions) to use for the conversion.


**Examples**
TO_CHAR example

```
SELECT TO_CHAR(CAST('2013-04-05 01:02:03' AS TIMESTAMP) , 'mm/dd/yyyy, hh:mi');  
-- 04/05/2013, 01:02  

```

Was this page helpful?
[Previous TOASCII](/reference/sql/sql-functions)[Next TO_DATE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TOASCII](/reference/sql/sql-functions)[Next TO_DATE](/reference/sql/sql-functions)
