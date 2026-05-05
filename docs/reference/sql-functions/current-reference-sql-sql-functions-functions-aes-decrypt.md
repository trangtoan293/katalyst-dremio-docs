---
url: /reference/sql/sql-functions/functions/AES_DECRYPT
slug: /reference/sql/sql-functions/functions/AES_DECRYPT
title: "AES_DECRYPT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64278.791651
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * AES_DECRYPT

Version: current [26.x]
On this page
**Categories** : [Cryptography](/reference/sql/sql-functions)
# AES_DECRYPT
Decrypts a string produced by AES encryption. **Deprecated.** Dremio recommends `DECRYPT` for improved security and support for modern cipher modes.
## Syntax
### AES_DECRYPT(_ciphertext_ varchar, _key_ varchar) → varchar[​](/reference/sql/sql-functions)
  * ciphertext: The string to be decrypted.
  * key: The key to use to decrypt the ciphertext. Must be 16, 24, or 32 characters.


**Examples**
AES_DECRYPT example

```
SELECT AES_DECRYPT(UNBASE64('UvicDn/xiUDmfSE+KYjjyw=='), 'mypassword123456')  
-- Dremio  

```

Was this page helpful?
[Previous ACOS](/reference/sql/sql-functions)[Next AES_ENCRYPT](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ACOS](/reference/sql/sql-functions)[Next AES_ENCRYPT](/reference/sql/sql-functions)
