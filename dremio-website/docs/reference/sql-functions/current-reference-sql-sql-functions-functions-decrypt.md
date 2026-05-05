---
url: /reference/sql/sql-functions/functions/DECRYPT
title: "DECRYPT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64310.86678125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * DECRYPT

Version: current [26.x]
On this page
**Categories** : [Cryptography](/reference/sql/sql-functions)
# DECRYPT
Decrypts data using AES decryption with various modes, including `AES-ECB`, `AES-CBC`, and `AES-GCM`. Supports `PKCS7` padding or no padding options. For `AES-GCM` mode, verifies the authentication tag.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### DECRYPT(_data_ VARBINARY, _key_ VARBINARY, _mode_ VARCHAR) → VARBINARY[​](/reference/sql/sql-functions#decryptdata-varbinary-key-varbinary-mode-varchar--varbinary "Direct link to decryptdata-varbinary-key-varbinary-mode-varchar--varbinary")
  * data: The encrypted data to decrypt.
  * key: The decryption key. Must be 16, 24, or 32 bytes.
  * mode: The decryption mode. Supported modes: `AES-ECB` (defaults to `PKCS7` padding), `AES-ECB-PKCS7`, `AES-ECB-NONE`, `AES-CBC` (defaults to `PKCS7` padding), `AES-CBC-PKCS7`, `AES-CBC-NONE`, `AES-GCM`.


**Examples**
DECRYPT example

```
SELECT DECRYPT(encrypted_data, key, 'AES-ECB')  
FROM  
  (  
    SELECT  
      UNBASE64('xQAXVi52g+wT7xoVN08ssQ==') AS encrypted_data,  
      BINARY_STRING('1234567890123456') AS key  
  )  
  
-- /* Binary */ Hello World  

```

### DECRYPT(_data_ VARBINARY, _key_ VARBINARY, _mode_ VARCHAR, _iv_ VARBINARY) → VARBINARY[​](/reference/sql/sql-functions#decryptdata-varbinary-key-varbinary-mode-varchar-iv-varbinary--varbinary "Direct link to decryptdata-varbinary-key-varbinary-mode-varchar-iv-varbinary--varbinary")
  * data: The encrypted data to decrypt.
  * key: The decryption key. Must be 16, 24, or 32 bytes.
  * mode: The decryption mode. Supported modes: `AES-ECB` (defaults to `PKCS7` padding), `AES-ECB-PKCS7`, `AES-ECB-NONE`, `AES-CBC` (defaults to `PKCS7` padding), `AES-CBC-PKCS7`, `AES-CBC-NONE`, `AES-GCM`.
  * iv: The initialization vector (IV) or nonce used during encryption. Required for `AES-CBC` and `AES-GCM` modes. Must be 16 bytes for `AES-CBC` mode, 12 bytes recommended for `AES-GCM` mode.


**Examples**
DECRYPT example

```
SELECT DECRYPT(encrypted_data, key, 'AES-CBC', iv)  
FROM  
  (  
    SELECT  
      UNBASE64('ZyODokM33Io1ZKIA8h7owA==') AS encrypted_data,  
      BINARY_STRING('1234567890123456') AS key,  
      BINARY_STRING('1234567890123456') AS iv  
  )  
  
-- /* Binary */ Hello World  

```

### DECRYPT(_data_ VARBINARY, _key_ VARBINARY, _mode_ VARCHAR, _iv_ VARBINARY, _aad_ VARBINARY) → VARBINARY[​](/reference/sql/sql-functions#decryptdata-varbinary-key-varbinary-mode-varchar-iv-varbinary-aad-varbinary--varbinary "Direct link to decryptdata-varbinary-key-varbinary-mode-varchar-iv-varbinary-aad-varbinary--varbinary")
  * data: The encrypted data to decrypt.
  * key: The decryption key. Must be 16, 24, or 32 bytes.
  * mode: Must be `AES-GCM`
  * iv: The initialization vector (IV) or nonce used during encryption. Required for `AES-CBC` and `AES-GCM` modes. Must be 16 bytes for `AES-CBC` mode, 12 bytes recommended for `AES-GCM` mode.
  * aad: The additional authenticated data (AAD) used during `AES-GCM` encryption. Must match the `aad` used during encryption for authentication to succeed. `DECRYPT` will verify ciphertext integrity by using the authentication tag concatenated during encryption.


**Examples**
DECRYPT example

```
SELECT DECRYPT(encrypted_data, key, 'AES-GCM', iv, aad)  
FROM  
  (  
    SELECT  
      UNBASE64('+RQCxLexA2fVnX9N/SMT820KqW52WM9fVx9j') AS encrypted_data,  
      BINARY_STRING('1234567890123456') AS key,  
      BINARY_STRING('123456789012') AS iv,  
      BINARY_STRING('metadata') AS aad  
  )  
  
-- /* Binary */ Hello World  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
  * Ciphertext created with `AES_ENCRYPT` can be decrypted with `DECRYPT` in `AES-ECB` mode and does not need to be recreated with `ENCRYPT` unless a stronger cipher mode is required.
  * Retrieve keys at runtime rather than hardcoding them in queries.
  * Rotate keys periodically according to your organization's security policies.
  * Use different keys for different data classifications or tenants.
  * Ensure key length matches your security requirements: 32 bytes for AES-256 (recommended), 24 bytes for AES-192, or 16 bytes for AES-128.


Was this page helpful?
[Previous DAYOFYEAR](/reference/sql/sql-functions)[Next DEGREES](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DAYOFYEAR](/reference/sql/sql-functions)[Next DEGREES](/reference/sql/sql-functions)
