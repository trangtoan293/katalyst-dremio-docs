---
url: /reference/sql/sql-functions/functions/CONCAT_WS
slug: /reference/sql/sql-functions/functions/CONCAT_WS
title: "CONCAT_WS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64301.482396333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CONCAT_WS

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# CONCAT_WS
Concatenate with separator. Returns a string resulting from the joining of two or more string values in an end-to-end manner. Uses the first argument as the separator between each string.
## Syntax
### CONCAT_WS(separator, expression1, expression2, [ ... expressionN ]) → string[​](/reference/sql/sql-functions) → string")
  * separator: An expression of any character type, such as `binary` or `varchar`. However, all arguments must be the same data type.
  * expression: An expression can be any data type. All arguments must be the same data type.


**Examples**
CONCAT_WS example

```
SELECT CONCAT_WS('-', 'cat', 'dog', 'bird')  
-- cat-dog-bird  

```

## Usage Notes[​](/reference/sql/sql-functions)
This function does not append a separator if there is only one argument. If the separator is `NULL`, then the result is `NULL`. If any of the expressions are `NULL`, they are ignored. If only the separator is provided, or all provided expressions are `NULL`, then an empty string is returned.
Was this page helpful?
[Previous CONCAT](/reference/sql/sql-functions)[Next CONTAINS](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CONCAT](/reference/sql/sql-functions)[Next CONTAINS](/reference/sql/sql-functions)
