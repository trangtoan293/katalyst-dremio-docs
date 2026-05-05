---
url: /reference/bulletins/2025-04-21-01
slug: /reference/bulletins/2025-04-21-01
title: "2025-04-21-01 | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64244.35651625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [Security Bulletins](/reference/bulletins)
  * 2025-04-21-01

Version: current [26.x]
On this page
# Security Bulletin 2025-04-21-01
### Abstract​​
An authenticated API endpoint allows arbitrary file deletion.
### CVSS Qualitative Rating​​
  * High
  * CVSSv4.0
    * Score: 8.4


### Affected Releases​​
  * Dremio 24.3.0 through 24.3.16
  * Dremio 25.0.0 through 25.0.14
  * Dremio 25.1.0 through 25.1.7
  * Dremio 25.2.0 through 25.2.4


### Problem Description​​
In Affected Releases, an improper authorization vulnerability in Dremio allows authenticated users to delete arbitrary files that the system can access, including system files and files stored in remote locations such as S3, Azure Blob Storage, and local filesystems. This vulnerability exists due to insufficient access controls on an API endpoint, enabling any authenticated user to specify and delete files outside their intended scope. Exploiting this flaw could lead to data loss, denial of service (DoS), and potential escalation of impact depending on the deleted files.
### Resolution Actions​​
Upgrade to a Fixed Release that resolves the issue.
### Fixed Releases​​
  * Dremio 24.3.17 and above
  * Dremio 25.0.15 and above
  * Dremio 25.1.8 and above
  * Dremio 25.2.5 and above
  * Dremio 26.0.0 and above


Was this page helpful?
[Previous Security Bulletins](/reference/bulletins)[Next 2024-02-07-01](/reference/bulletins/2024-02-07-01)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Security Bulletins](/reference/bulletins)[Next 2024-02-07-01](/reference/bulletins/2024-02-07-01)
!
