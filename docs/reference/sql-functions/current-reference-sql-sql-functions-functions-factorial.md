---
url: /reference/sql/sql-functions/functions/FACTORIAL
slug: /reference/sql/sql-functions/functions/FACTORIAL
title: "FACTORIAL | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64310.6944555
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * FACTORIAL

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# FACTORIAL
Computes the factorial of the numeric expression. The input expression must be an integer from `0` to `20`.
## Syntax
### FACTORIAL(_expression_ integer) → bigint[​](/reference/sql/sql-functions)
  * expression: An integer expression from `0` and `20`.


**Examples**
FACTORIAL example

```
SELECT FACTORIAL(0), FACTORIAL(1), FACTORIAL(5), FACTORIAL(20)  
-- 1, 1, 120, 2432902008176640000  

```

Was this page helpful?
[Previous EXTRACT](/reference/sql/sql-functions)[Next FIRST_VALUE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous EXTRACT](/reference/sql/sql-functions)[Next FIRST_VALUE](/reference/sql/sql-functions)
!
