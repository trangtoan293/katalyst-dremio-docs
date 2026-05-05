---
url: /reference/sql/sql-functions/functions/LPAD
title: "LPAD | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64331.066926416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LPAD

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# LPAD
Left pads a string with spaces or specified characters to reach the number of characters specified as a parameter.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### LPAD(_base_expression_ varchar, _length_ int64) → varchar[​](/reference/sql/sql-functions#lpadbase_expression-varchar-length-int64--varchar "Direct link to lpadbase_expression-varchar-length-int64--varchar")
  * base_expression: The expression to pad.
  * length: The number of characters to return.


**Examples**
LPAD example

```
SELECT LPAD('parameter', 11)  
--   parameter  

```

LPAD example

```
SELECT LPAD('engineering', 6)  
-- engine  

```

### LPAD(_base_expression_ varchar, _length_ int64 [, _pad_expression_ varchar]) → varchar[​](/reference/sql/sql-functions#lpadbase_expression-varchar-length-int64--pad_expression-varchar--varchar "Direct link to lpadbase_expression-varchar-length-int64--pad_expression-varchar--varchar")
  * base_expression: The expression to pad.
  * length: The number of characters to return.
  * pad_expression (optional): Characters to pad the base_expression with.


**Examples**
LPAD example

```
select LPAD('parameter', 11, '-')  
-- --parameter  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
If pad_expression is not specified, then the base_expresion will be padded with spaces. If the length of parameter is less than the length of the base_expression, the base_expression will be truncated to the length. If the length parameter + the length of the base_expression is less than the length of the base_expression + the length of the pad_expression, only the subset of the characters from the pad_expression required to fill the length will be appended to the base_expression.
Was this page helpful?
[Previous LOWER](/reference/sql/sql-functions)[Next LSHIFT](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LOWER](/reference/sql/sql-functions)[Next LSHIFT](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FLPAD%2F&_biz_t=1777950650797&_biz_i=LPAD%20%7C%20Dremio%20Documentation&_biz_n=635&rnd=417822&cdn_o=a&_biz_z=1777950650797)
