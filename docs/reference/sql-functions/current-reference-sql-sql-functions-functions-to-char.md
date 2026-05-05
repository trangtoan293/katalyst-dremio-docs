---
url: /reference/sql/sql-functions/functions/TO_CHAR
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### TO_CHAR(_expression_ time, _format_ varchar) → varchar[​](/reference/sql/sql-functions#to_charexpression-time-format-varchar--varchar "Direct link to to_charexpression-time-format-varchar--varchar")
  * expression: Expression to convert to a string.
  * format: [Format](/reference/sql/sql-functions#datetime-formatting) to use for the conversion.


**Examples**
TO_CHAR example

```
SELECT TO_CHAR(CAST('01:02:03' AS TIME) , 'HH:MI');  
-- 01:02  

```

### TO_CHAR(_expression_ date, _format_ varchar) → varchar[​](/reference/sql/sql-functions#to_charexpression-date-format-varchar--varchar "Direct link to to_charexpression-date-format-varchar--varchar")
  * expression: Expression to convert to a string.
  * format: [Format](/reference/sql/sql-functions#datetime-formatting) to use for the conversion.


**Examples**
TO_CHAR example

```
SELECT TO_CHAR(CAST('2021-02-11' AS DATE) , 'yyyy.mm.dd');  
-- 2021.02.11  

```

### TO_CHAR(_expression_ int32, _format_ varchar) → varchar[​](/reference/sql/sql-functions#to_charexpression-int32-format-varchar--varchar "Direct link to to_charexpression-int32-format-varchar--varchar")
  * expression: Expression to convert to a string.
  * format: Format to use for the conversion.


**Examples**
TO_CHAR example

```
SELECT TO_CHAR(10, '#')  
-- 10  

```

### TO_CHAR(_expression_ float, _format_ varchar) → varchar[​](/reference/sql/sql-functions#to_charexpression-float-format-varchar--varchar "Direct link to to_charexpression-float-format-varchar--varchar")
  * expression: Expression to convert to a string.
  * format: Format to use for the conversion.


**Examples**
TO_CHAR example

```
SELECT TO_CHAR(7.5, '#.#')  
-- 7.5  

```

### TO_CHAR(_expression_ int64, _format_ varchar) → varchar[​](/reference/sql/sql-functions#to_charexpression-int64-format-varchar--varchar "Direct link to to_charexpression-int64-format-varchar--varchar")
  * expression: Expression to convert to a string.
  * format: Format to use for the conversion.


**Examples**
TO_CHAR example

```
SELECT TO_CHAR(10, '#')  
-- 10  

```

### TO_CHAR(_expression_ double, _format_ varchar) → varchar[​](/reference/sql/sql-functions#to_charexpression-double-format-varchar--varchar "Direct link to to_charexpression-double-format-varchar--varchar")
  * expression: Expression to convert to a string.
  * format: Format to use for the conversion.


**Examples**
TO_CHAR example

```
SELECT TO_CHAR(7.5, '#.#')  
-- 7.5  

```

### TO_CHAR(_expression_ timestamp, _format_ varchar) → varchar[​](/reference/sql/sql-functions#to_charexpression-timestamp-format-varchar--varchar "Direct link to to_charexpression-timestamp-format-varchar--varchar")
  * expression: Expression to convert to a string.
  * format: [Format](/reference/sql/sql-functions#datetime-formatting) to use for the conversion.


**Examples**
TO_CHAR example

```
SELECT TO_CHAR(CAST('2013-04-05 01:02:03' AS TIMESTAMP) , 'mm/dd/yyyy, hh:mi');  
-- 04/05/2013, 01:02  

```

Was this page helpful?
[Previous TOASCII](/reference/sql/sql-functions)[Next TO_DATE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TOASCII](/reference/sql/sql-functions)[Next TO_DATE](/reference/sql/sql-functions)
