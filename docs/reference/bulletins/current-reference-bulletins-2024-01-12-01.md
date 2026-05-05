---
url: /reference/bulletins/2024-01-12-01
slug: /reference/bulletins/2024-01-12-01
title: "2024-01-12-01 | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64244.529839208
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [Security Bulletins](/reference/bulletins)
  * 2024-01-12-01

Version: current [26.x]
On this page
# Security Bulletin 2024-01-12-01
### Abstract​
Path traversal vulnerability bypassed folder-level role-based access control (RBAC).
### CVSS Qualitative Rating​
  * High
  * CVSSv3.1
    * Score: 8.8


### Affected Releases​
  * Dremio 24.0.0 through 24.3.0
  * Dremio 23.0.0 through 23.2.3
  * Dremio 22.0.0 through 22.2.2


### Problem Description​
In Affected Releases, an authenticated user who has no privileges on certain folders and the files and datasets in the folders can access the folders, files, and datasets by performing a path traversal attack. To be successful, the user must have access to the source and at least one folder in the source.
### Resolution Actions​
Upgrade to a Fixed Release that resolves the issue.
### Fixed Releases​
  * Dremio 24.3.1 and above
  * Dremio 23.2.4 and above
  * Dremio 22.2.3 and above


Was this page helpful?
[Previous 2024-02-07-01](/reference/bulletins/2024-02-07-01)[Next 2024-01-09-01](/reference/bulletins/2024-01-09-01)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous 2024-02-07-01](/reference/bulletins/2024-02-07-01)[Next 2024-01-09-01](/reference/bulletins/2024-01-09-01)
!
