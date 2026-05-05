---
url: /reference/sql/sql-functions/functions/SYSTEM_USER
slug: /reference/sql/sql-functions/functions/SYSTEM_USER
title: "SYSTEM_USER | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.620968708
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SYSTEM_USER

Version: current [26.x]
On this page
**Categories** : [System](/reference/sql/sql-functions)
# SYSTEM_USER
Returns the name of the current user. This function cannot be used in a Reflection.
## Syntax
### SYSTEM_USER → varchar[​](/reference/sql/sql-functions)
**Examples**
SYSTEM_USER example

```
SELECT SYSTEM_USER  
-- user.name  

```

SYSTEM_USER example

```
SELECT SYSTEM_USER  
-- user.name@example.com  

```

SYSTEM_USER example

```
SELECT "SYSTEM_USER"()  
-- user.name@example.com  

```

## Usage Notes[​](/reference/sql/sql-functions)
This function is identical to the functions [`SESSION_USER`](/reference/sql/sql-functions) and [`USER`](/reference/sql/sql-functions).
Was this page helpful?
[Previous SUM](/reference/sql/sql-functions)[Next TAN](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SUM](/reference/sql/sql-functions)[Next TAN](/reference/sql/sql-functions)
!!
