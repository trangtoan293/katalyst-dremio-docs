---
url: /reference/bulletins/2024-01-09-01
slug: /reference/bulletins/2024-01-09-01
title: "2024-01-09-01 | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64244.312706958
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [Security Bulletins](/reference/bulletins)
  * 2024-01-09-01

Version: current [26.x]
On this page
# Security Bulletin 2024-01-09-01
### Abstract​
The Dremio-to-Dremio connector does not fully validate table-level access in certain cases.
### CVSS Qualitative Rating​
  * High
  * CVSSv3.1
    * Score: 7.1


### Affected Releases​
  * Dremio 24.0.0 through 24.1.1
  * Dremio 23.1.0 through 23.2.3


### Problem Description​
In Affected Releases, the Dremio-to-Dremio connector does not fully validate table-level permission when user impersonation is enabled in the Dremio-to-Dremio source configuration **and** queries are accelerated.
The Dremio-to-Dremio connector was introduced in version 23.1.0. The issue does not affect any prior versions.
### Resolution Actions​
Upgrade to a Fixed Release that resolves the issue.
If you are unable to upgrade to a Fixed Release, set `userImpersonation` to `false` in the [advanced options](/data-sources/databases/dremio) for the Dremio-to-Dremio source configuration until you can upgrade.
### Fixed Releases​
  * Dremio 24.1.2 and above
  * Dremio 23.2.4 and above


Was this page helpful?
[Previous 2024-01-12-01](/reference/bulletins/2024-01-12-01)[Next 2023-07-22-03](/reference/bulletins/2023-07-22-03)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous 2024-01-12-01](/reference/bulletins/2024-01-12-01)[Next 2023-07-22-03](/reference/bulletins/2023-07-22-03)
!
