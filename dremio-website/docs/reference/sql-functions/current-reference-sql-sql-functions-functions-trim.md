---
url: /reference/sql/sql-functions/functions/TRIM
title: "TRIM | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.939401083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TRIM

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# TRIM
Removes leading, trailing, or both spaces or characters from a string.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### TRIM(LEADING or TRAILING or BOTH _trim_expression_ varchar FROM _expression_ varchar) → varchar[​](/reference/sql/sql-functions#trimleading-or-trailing-or-both-trim_expression-varchar-from-expression-varchar--varchar "Direct link to trimleading-or-trailing-or-both-trim_expression-varchar-from-expression-varchar--varchar")
  * trim_expression (optional): The characters to trim.
  * expression: The expression to be trimmed.


**Examples**
TRIM example

```
SELECT TRIM('   dremio   ')  
-- dremio  

```

TRIM example

```
SELECT TRIM(LEADING 'x' FROM 'xxxDremio')  
-- Dremio  

```

TRIM example

```
SELECT TRIM(TRAILING 'x' FROM 'Dremioxxx')  
-- Dremio  

```

TRIM example

```
SELECT TRIM(BOTH 'x' FROM 'xxxDremioxxx')  
-- Dremio  

```

TRIM example

```
SELECT TRIM('xy' FROM 'xyxDremioxyy')  
-- Dremio  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
If you do not specify a keyword before `trim_expression`, it defaults to BOTH. If you do not specify `trim_expression`, it defaults to a space. Organizations using Oracle will always receive a `NULL` return if this function is used with an empty string.
Was this page helpful?
[Previous TRANSLATE](/reference/sql/sql-functions)[Next TRUNCATE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TRANSLATE](/reference/sql/sql-functions)[Next TRUNCATE](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FTRIM%2F&_biz_t=1777950686550&_biz_i=TRIM%20%7C%20Dremio%20Documentation&_biz_n=716&rnd=822619&cdn_o=a&_biz_z=1777950686550)
