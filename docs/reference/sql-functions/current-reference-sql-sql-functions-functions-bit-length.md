---
url: /reference/sql/sql-functions/functions/BIT_LENGTH
title: "BIT_LENGTH | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.424912041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * BIT_LENGTH

Version: current [26.x]
On this page
**Categories** : [Binary](/reference/sql/sql-functions)
# BIT_LENGTH
Returns the length of the bits of the input expression.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### BIT_LENGTH(_expression_ binary, varchar) → integer[​](/reference/sql/sql-functions#bit_lengthexpression-binary-varchar--integer "Direct link to bit_lengthexpression-binary-varchar--integer")
  * expression: A binary or varchar expression.


**Examples**
BIT_LENGTH example

```
SELECT BIT_LENGTH(1010)  
-- 32  

```

BIT_LENGTH example

```
SELECT BIT_LENGTH('DREMIO')  
-- 48  

```

BIT_LENGTH example

```
SELECT BIT_LENGTH('abc')  
-- 24  

```

BIT_LENGTH example

```
SELECT BIT_LENGTH(NULL)  
-- null  

```

Was this page helpful?
[Previous BIT_AND](/reference/sql/sql-functions)[Next BIT_OR](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous BIT_AND](/reference/sql/sql-functions)[Next BIT_OR](/reference/sql/sql-functions)
