---
url: /reference/sql/sql-functions/functions/SESSION_USER
slug: /reference/sql/sql-functions/functions/SESSION_USER
title: "SESSION_USER | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64351.831133416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SESSION_USER

Version: current [26.x]
On this page
**Categories** : [System](/reference/sql/sql-functions)
# SESSION_USER
Returns the user that created the current session. This function cannot be used in a Reflection.
## Syntax
### SESSION_USER → varchar[​](/reference/sql/sql-functions)
**Examples**
SESSION_USER example

```
SELECT SESSION_USER  
-- user.name@example.com  

```

SESSION_USER example

```
SELECT "SESSION_USER"()  
-- user.name@example.com  

```

## Usage Notes[​](/reference/sql/sql-functions)
This function is identical to the functions [`SYSTEM_USER`](/reference/sql/sql-functions) and [`USER`](/reference/sql/sql-functions).
Was this page helpful?
[Previous SECOND](/reference/sql/sql-functions)[Next SET_UNION](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SECOND](/reference/sql/sql-functions)[Next SET_UNION](/reference/sql/sql-functions)
!
