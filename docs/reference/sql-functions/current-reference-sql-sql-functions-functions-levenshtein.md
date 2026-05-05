---
url: /reference/sql/sql-functions/functions/LEVENSHTEIN
slug: /reference/sql/sql-functions/functions/LEVENSHTEIN
title: "LEVENSHTEIN | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.531892791
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LEVENSHTEIN

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# LEVENSHTEIN
Computes the Levenshtein distance between two input expressions.
## Syntax
### LEVENSHTEIN(_expression1_ varchar, _expression2_ varchar) → int[​](/reference/sql/sql-functions)
  * expression1: The first string expression.
  * expression2: The second string expression.


**Examples**
LEVENSHTEIN example

```
SELECT LEVENSHTEIN('dremio', 'iceberg')  
-- 6  

```

Was this page helpful?
[Previous LENGTH](/reference/sql/sql-functions)[Next LIKE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LENGTH](/reference/sql/sql-functions)[Next LIKE](/reference/sql/sql-functions)
!
