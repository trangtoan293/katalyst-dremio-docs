---
url: /reference/sql/sql-functions/functions/SUBSTRING
title: "SUBSTRING | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.768504583
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SUBSTRING

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# SUBSTRING
Returns the portion of the string from the specified base expression starting at the specified characters.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### SUBSTRING(_string_expression_ varchar, _offset_ int64) → varchar[​](/reference/sql/sql-functions#substringstring_expression-varchar-offset-int64--varchar "Direct link to substringstring_expression-varchar-offset-int64--varchar")
  * string_expression: Base expression to extract substring from.
  * offset: The offset from which the substring starts.


**Examples**
SUBSTRING example

```
SELECT SUBSTRING('Dremio Lakehouse', 8)  
-- Lakehouse  

```

### SUBSTRING(_string_expression_ varchar FROM _offset_ int64) → varchar[​](/reference/sql/sql-functions#substringstring_expression-varchar-from-offset-int64--varchar "Direct link to substringstring_expression-varchar-from-offset-int64--varchar")
  * string_expression: Base expression to extract substring from.
  * offset: The offset from which the substring starts.


**Examples**
SUBSTRING example

```
SELECT SUBSTRING('Dremio Lakehouse' FROM 8)  
-- Lakehouse  

```

### SUBSTRING(_string_expression_ varchar, _offset_ int64, _length_ int64) → varchar[​](/reference/sql/sql-functions#substringstring_expression-varchar-offset-int64-length-int64--varchar "Direct link to substringstring_expression-varchar-offset-int64-length-int64--varchar")
  * string_expression: Base expression to extract substring from.
  * offset: The offset from which the substring starts.
  * length (optional): The length limit of the substring.


**Examples**
SUBSTRING example

```
SELECT SUBSTRING('base expression', 6, 4)  
-- expr  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
This function is similar to `SUBSTR` except that this function can accept the `FROM` clause.
Was this page helpful?
[Previous SUBSTR](/reference/sql/sql-functions)[Next SUBSTRING_INDEX](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SUBSTR](/reference/sql/sql-functions)[Next SUBSTRING_INDEX](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FSUBSTRING%2F&_biz_t=1777950678999&_biz_i=SUBSTRING%20%7C%20Dremio%20Documentation&_biz_n=693&rnd=416099&cdn_o=a&_biz_z=1777950678999)
