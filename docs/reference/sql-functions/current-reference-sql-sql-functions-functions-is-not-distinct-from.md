---
url: /reference/sql/sql-functions/functions/IS__NOT__DISTINCT_FROM
slug: /reference/sql/sql-functions/functions/IS__NOT__DISTINCT_FROM
title: "IS__NOT__DISTINCT_FROM | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64323.996007041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * IS__NOT__DISTINCT_FROM

Version: current [26.x]
On this page
**Categories** : [Boolean](/reference/sql/sql-functions), [Datatype](/reference/sql/sql-functions)
# IS [NOT] DISTINCT FROM
Compares two expressions to determine whether they have the same or different values. NULLs are considered as comparable values.
## Syntax
### IS [NOT] DISTINCT FROM(_expression_ any) → boolean[​](/reference/sql/sql-functions)
  * expression: Can be a general expression of any Dremio-supported data type.


**Examples**
IS [NOT] DISTINCT FROM example

```
SELECT NULL IS DISTINCT  
FROM NULL  
-- False  

```

IS [NOT] DISTINCT FROM example

```
SELECT NULL IS NOT DISTINCT  
FROM NULL  
-- True  

```

Was this page helpful?
[Previous IS_VARCHAR](/reference/sql/sql-functions)[Next IS__NOT__FALSE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous IS_VARCHAR](/reference/sql/sql-functions)[Next IS__NOT__FALSE](/reference/sql/sql-functions)
!
