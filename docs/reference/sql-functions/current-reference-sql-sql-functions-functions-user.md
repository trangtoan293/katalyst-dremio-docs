---
url: /reference/sql/sql-functions/functions/USER
slug: /reference/sql/sql-functions/functions/USER
title: "USER | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.859512625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * USER

Version: current [26.x]
On this page
**Categories** : [System](/reference/sql/sql-functions)
# USER
Returns the user that is currently logged into the system. This function cannot be used in a Reflection.
## Syntax
### USER() → varchar[​](/reference/sql/sql-functions) → varchar")
**Examples**
USER example

```
SELECT USER()  
-- user.name@example.com  

```

USER example

```
SELECT USER  
-- user.name@example.com  

```

USER example

```
SELECT "USER"()  
-- user.name@example.com  

```

## Usage Notes[​](/reference/sql/sql-functions)
This function can be called without the parentheses. This function is identical to the functions [`SESSION_USER`](/reference/sql/sql-functions) and [`SYSTEM_USER`](/reference/sql/sql-functions).
Was this page helpful?
[Previous UPPER](/reference/sql/sql-functions)[Next VAR_POP](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous UPPER](/reference/sql/sql-functions)[Next VAR_POP](/reference/sql/sql-functions)
!
