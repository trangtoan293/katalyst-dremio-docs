---
url: /reference/sql/sql-functions/functions/LAST_QUERY_ID
slug: /reference/sql/sql-functions/functions/LAST_QUERY_ID
title: "LAST_QUERY_ID | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.251877416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LAST_QUERY_ID

Version: current [26.x]
On this page
**Categories** : [System](/reference/sql/sql-functions)
# LAST_QUERY_ID
Returns the ID for the most recently executed query in the current session. This function cannot be used in a Reflection.
## Syntax
### LAST_QUERY_ID() → varchar[​](/reference/sql/sql-functions) → varchar")
**Examples**
LAST_QUERY_ID example

```
SELECT LAST_QUERY_ID()  
-- 1f1ae232-55c0-9df3-caa9-2c52deecf300  

```

LAST_QUERY_ID example

```
SELECT LAST_QUERY_ID  
-- 1f1ae232-55c0-9df3-caa9-2c52deecf300  

```

## Usage Notes[​](/reference/sql/sql-functions)
This function can be called without the parentheses. For prepared statements, `LAST_QUERY_ID` is only updated after the statement has been executed.
Was this page helpful?
[Previous LAST_DAY](/reference/sql/sql-functions)[Next LAST_VALUE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LAST_DAY](/reference/sql/sql-functions)[Next LAST_VALUE](/reference/sql/sql-functions)
!
