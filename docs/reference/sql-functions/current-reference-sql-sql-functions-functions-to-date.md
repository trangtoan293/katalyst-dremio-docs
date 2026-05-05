---
url: /reference/sql/sql-functions/functions/TO_DATE
title: "TO_DATE | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64072.796178166
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TO_DATE

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions), [Conversion](/reference/sql/sql-functions)
# TO_DATE
Converts the input expressions to the corresponding date.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### TO_DATE(_in_ timestamp) → date[​](/reference/sql/sql-functions#to_datein-timestamp--date "Direct link to to_datein-timestamp--date")
  * in: The date is extracted from the timestamp.


**Examples**
TO_DATE example

```
SELECT TO_DATE(TIMESTAMP '2022-05-17 19:15:00.000')  
-- 2022-05-17  

```

### TO_DATE(_numeric_expression_ int32) → date[​](/reference/sql/sql-functions#to_datenumeric_expression-int32--date "Direct link to to_datenumeric_expression-int32--date")
  * numeric_expression: A Unix epoch timestamp.


**Examples**
TO_DATE example

```
SELECT TO_DATE(1640131200)  
-- 2021-12-22  

```

### TO_DATE(_numeric_expression_ float) → date[​](/reference/sql/sql-functions#to_datenumeric_expression-float--date "Direct link to to_datenumeric_expression-float--date")
  * numeric_expression: A Unix epoch timestamp.


**Examples**
TO_DATE example

```
SELECT TO_DATE(1665131223.69)  
-- 2022-10-07  

```

### TO_DATE(_numeric_expression_ int64) → date[​](/reference/sql/sql-functions#to_datenumeric_expression-int64--date "Direct link to to_datenumeric_expression-int64--date")
  * numeric_expression: A Unix epoch timestamp.


**Examples**
TO_DATE example

```
SELECT TO_DATE(1640131200)  
-- 2021-12-22  

```

### TO_DATE(_string_expression_ varchar, _format_ varchar, _replaceErrorWithNull_ int32) → date[​](/reference/sql/sql-functions#to_datestring_expression-varchar-format-varchar-replaceerrorwithnull-int32--date "Direct link to to_datestring_expression-varchar-format-varchar-replaceerrorwithnull-int32--date")
  * string_expression: The string from which to extract the date.
  * format: String to specify [format](/reference/sql/sql-functions#datetime-formatting) of the date.
  * replaceErrorWithNull: If 0, the function will fail when given malformed input. If 1, the function will return NULL when given the malformed input.


**Examples**
TO_DATE example

```
SELECT TO_DATE('2022-07-22.23', 'YYYY-MM-DD', 1)  
-- NULL  

```

### TO_DATE(_string_expression_ varchar, _format_ varchar) → date[​](/reference/sql/sql-functions#to_datestring_expression-varchar-format-varchar--date "Direct link to to_datestring_expression-varchar-format-varchar--date")
  * string_expression: String from which to extract the date.
  * format: String to specify [format](/reference/sql/sql-functions#datetime-formatting) of the date.


**Examples**
TO_DATE example

```
SELECT TO_DATE('05/24/22', 'MM/DD/YY')  
-- 2022-05-24  

```

### TO_DATE(_numeric_expression_ double) → date[​](/reference/sql/sql-functions#to_datenumeric_expression-double--date "Direct link to to_datenumeric_expression-double--date")
  * numeric_expression: A Unix epoch timestamp.


**Examples**
TO_DATE example

```
SELECT TO_DATE(1665131223.69)  
-- 2022-10-07  

```

Was this page helpful?
[Previous TO_CHAR](/reference/sql/sql-functions)[Next TO_HEX](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TO_CHAR](/reference/sql/sql-functions)[Next TO_HEX](/reference/sql/sql-functions)
