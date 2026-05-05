---
url: /reference/sql/sql-functions/functions/AES_ENCRYPT
slug: /reference/sql/sql-functions/functions/AES_ENCRYPT
title: "AES_ENCRYPT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64278.982826083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * AES_ENCRYPT

Version: current [26.x]
On this page
**Categories** : [Cryptography](/reference/sql/sql-functions)
# AES_ENCRYPT
Encrypts a string using AES encryption. **Deprecated.** Dremio recommends `ENCRYPT` for improved security and support for modern cipher modes. Ciphertext created with `AES_ENCRYPT` can be decrypted with `DECRYPT` in `AES-ECB` mode and does not need to be recreated with `ENCRYPT` unless a stronger cipher mode is required.
## Syntax
### AES_ENCRYPT(_plaintext_ varchar, _key_ varchar) → varchar[​](/reference/sql/sql-functions)
  * plaintext: The string to be encrypted.
  * key: The key to use to encrypt the plaintext. Must be 16, 24, or 32 characters.


**Examples**
AES_ENCRYPT example

```
SELECT BASE64(AES_ENCRYPT('Dremio', 'mypassword123456'))  
-- UvicDn/xiUDmfSE+KYjjyw==  

```

Was this page helpful?
[Previous AES_DECRYPT](/reference/sql/sql-functions)[Next AI_CLASSIFY](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous AES_DECRYPT](/reference/sql/sql-functions)[Next AI_CLASSIFY](/reference/sql/sql-functions)
