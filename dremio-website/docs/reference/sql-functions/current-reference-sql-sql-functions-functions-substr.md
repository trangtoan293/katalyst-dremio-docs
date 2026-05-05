---
url: /reference/sql/sql-functions/functions/SUBSTR
title: "SUBSTR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.865394458
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SUBSTR

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# SUBSTR
Returns the portion of the string from the specified base expression starting at the specified characters. This function supports regular expressions.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### SUBSTR(_string_expression_ varchar, _offset_ int64) → varchar[​](/reference/sql/sql-functions#substrstring_expression-varchar-offset-int64--varchar "Direct link to substrstring_expression-varchar-offset-int64--varchar")
  * string_expression: Base expression to extract substring from.
  * offset: The offset from which the substring starts.


**Examples**
SUBSTR example

```
SELECT SUBSTR('Dremio Lakehouse', 8)  
-- Lakehouse  

```

### SUBSTR(_string_expression_ varchar, _offset_ int64, _length_ int64) → varchar[​](/reference/sql/sql-functions#substrstring_expression-varchar-offset-int64-length-int64--varchar "Direct link to substrstring_expression-varchar-offset-int64-length-int64--varchar")
  * string_expression: Base expression to extract substring from.
  * offset: The offset from which the substring starts.
  * length (optional): The length limit of the substring.


**Examples**
SUBSTR example

```
SELECT SUBSTR('base expression', 6, 4)  
-- expr  

```

### SUBSTR(_string_expression_ varchar, _pattern_ varchar) → varchar[​](/reference/sql/sql-functions#substrstring_expression-varchar-pattern-varchar--varchar "Direct link to substrstring_expression-varchar-pattern-varchar--varchar")
  * string_expression: Base expression to extract substring from.
  * pattern: A regular expression pattern to match.


**Examples**
SUBSTR example

```
SELECT SUBSTR('dremio user 123', '[0-9]+')  
-- 123  

```

Was this page helpful?
[Previous SUBLIST](/reference/sql/sql-functions)[Next SUBSTRING](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SUBLIST](/reference/sql/sql-functions)[Next SUBSTRING](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FSUBSTR%2F&_biz_t=1777950679587&_biz_i=SUBSTR%20%7C%20Dremio%20Documentation&_biz_n=698&rnd=274932&cdn_o=a&_biz_z=1777950679587)
