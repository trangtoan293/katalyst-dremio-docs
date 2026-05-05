---
url: /reference/sql/sql-functions/CRYPTOGRAPHY
title: "Cryptography | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64271.605592416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * Cryptography

Version: current [26.x]
# Cryptography  
| Function Name  | Description  |  
| --- | --- |  
| [AES_DECRYPT](/reference/sql/sql-functions)  | Decrypts a string produced by AES encryption. **Deprecated.** Dremio recommends `DECRYPT` for improved security and support for modern cipher modes.  |  
| [AES_ENCRYPT](/reference/sql/sql-functions)  | Encrypts a string using AES encryption. **Deprecated.** Dremio recommends `ENCRYPT` for improved security and support for modern cipher modes. Ciphertext created with `AES_ENCRYPT` can be decrypted with `DECRYPT` in `AES-ECB` mode and does not need to be recreated with `ENCRYPT` unless a stronger cipher mode is required.  |  
| [DECRYPT](/reference/sql/sql-functions)  | Decrypts data using AES decryption with various modes, including `AES-ECB`, `AES-CBC`, and `AES-GCM`. Supports `PKCS7` padding or no padding options. For `AES-GCM` mode, verifies the authentication tag.  |  
| [ENCRYPT](/reference/sql/sql-functions)  | Encrypts data using AES encryption. Supported modes include `AES-ECB`, `AES-CBC`, and `AES-GCM`.  |  
| [MD5](/reference/sql/sql-functions)  | Computes the MD5 hash value of a string.  |  
| [SHA, SHA1](/reference/sql/sql-functions)  | Computes the SHA-1 hash value of a string.  |  
| [SHA256](/reference/sql/sql-functions)  | Computes the 256-bit SHA-2 hash value of a string.  |  
| [SHA512](/reference/sql/sql-functions)  | Computes the 512-bit SHA-2 hash value of a string.  |  
Was this page helpful?
[Previous Conversion](/reference/sql/sql-functions)[Next Datatype](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Conversion](/reference/sql/sql-functions)[Next Datatype](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2FCRYPTOGRAPHY%2F&_biz_t=1777950590460&_biz_i=Cryptography%20%7C%20Dremio%20Documentation&_biz_n=527&rnd=183939&cdn_o=a&_biz_z=1777950590460)
