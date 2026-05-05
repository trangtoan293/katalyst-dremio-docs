---
url: /reference/bulletins/2024-02-07-01
slug: /reference/bulletins/2024-02-07-01
title: "2024-02-07-01 | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64244.340433166
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [Security Bulletins](/reference/bulletins)
  * 2024-02-07-01

Version: current [26.x]
On this page
# Security Bulletin 2024-02-07-01
### Abstract​
The COPY INTO command does not verify users' SELECT privileges.
### CVSS Qualitative Rating​
  * Medium
  * CVSSv3.1
    * Score: 6.5


### Affected Releases​
  * Dremio 24.0.0 through 24.3.2


### Problem Description​
In Affected Releases, an authenticated user who does not have the SELECT privilege on certain files/datasets can access those files/datasets by using the COPY INTO command. The user can copy the file/dataset to a new table and access the data there.
### Resolution Actions​
Upgrade to a Fixed Release that resolves the issue.
### Fixed Releases​
  * Dremio 24.3.3 and above


Was this page helpful?
[Previous 2025-04-21-01](/reference/bulletins/2025-04-21-01)[Next 2024-01-12-01](/reference/bulletins/2024-01-12-01)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous 2025-04-21-01](/reference/bulletins/2025-04-21-01)[Next 2024-01-12-01](/reference/bulletins/2024-01-12-01)
!
