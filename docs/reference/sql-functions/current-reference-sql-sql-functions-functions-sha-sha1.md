---
url: /reference/sql/sql-functions/functions/SHA__SHA1
slug: /reference/sql/sql-functions/functions/SHA__SHA1
title: "SHA__SHA1 | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64351.948160333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SHA__SHA1

Version: current [26.x]
On this page
**Categories** : [Cryptography](/reference/sql/sql-functions)
# SHA, SHA1
Computes the SHA-1 hash value of a string.
## Syntax
### SHA(_expression_ varchar) → varchar[​](/reference/sql/sql-functions)
  * expression: The string to hash.


**Examples**
SHA example

```
SELECT SHA('Dremio')  
-- dda3f1ef53d1e82a4845ef5b2893b9d9c04bd3b1  

```

### SHA1(_expression_ varchar) → varchar[​](/reference/sql/sql-functions)
  * expression: The string to hash.


**Examples**
SHA1 example

```
SELECT SHA1('Dremio')  
-- dda3f1ef53d1e82a4845ef5b2893b9d9c04bd3b1  

```

Was this page helpful?
[Previous SHA512](/reference/sql/sql-functions)[Next SIGN](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SHA512](/reference/sql/sql-functions)[Next SIGN](/reference/sql/sql-functions)
!
