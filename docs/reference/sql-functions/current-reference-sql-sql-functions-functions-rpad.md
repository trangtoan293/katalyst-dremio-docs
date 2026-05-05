---
url: /reference/sql/sql-functions/functions/RPAD
slug: /reference/sql/sql-functions/functions/RPAD
title: "RPAD | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64352.047130166
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * RPAD

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# RPAD
Right pads a string with spaces or specified characters to reach the number of characters specified as a parameter.
## Syntax
### RPAD(_base_expression_ varchar, _length_ int64 [, _pad_expression_ varchar]) → varchar[​](/reference/sql/sql-functions)
  * base_expression: The expression to pad.
  * length: The number of characters to return.
  * pad_expression (optional): Characters to pad the base_expression with.


**Examples**
RPAD example

```
select RPAD('dremio', 9, '!')  
-- dremio!!!  

```

RPAD example

```
select RPAD('base_', 9, 'expression')  
-- base_expr  

```

RPAD example

```
select RPAD('dremio', 9)  
-- dremio  

```

## Usage Notes[​](/reference/sql/sql-functions)
If `pad_expression` is not specified, then the `base_expression` will be padded with spaces. If `length` is less than the length of the `base_expression`, the `base_expression` will be truncated to the length. If the `length` + the length of the `base_expression` is less than the length of the `base_expression` + the length of the `pad_expression`, only the subset of the characters from the `pad_expression` required to fill the length will be appended to the `base_expression`.
Was this page helpful?
[Previous ROW_NUMBER](/reference/sql/sql-functions)[Next RSHIFT](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ROW_NUMBER](/reference/sql/sql-functions)[Next RSHIFT](/reference/sql/sql-functions)
!
