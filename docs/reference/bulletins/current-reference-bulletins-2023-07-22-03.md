---
url: /reference/bulletins/2023-07-22-03
slug: /reference/bulletins/2023-07-22-03
title: "2023-07-22-03 | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64244.381343166
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [Security Bulletins](/reference/bulletins)
  * 2023-07-22-03

Version: current [26.x]
On this page
# Security Bulletin 2023-07-22-03
### Abstract​
Potential unintended user access to restricted data as a result of previously cached view.
### CVSS Qualitative Rating​
  * Medium
  * CVSSv3.1
    * Score: 6.5


### Affected Releases​
  * Dremio 24.0.0 through 24.0.x
  * Dremio 23.0.0 through 23.1.x
  * Dremio 22.0.0 through 22.1.x
  * Dremio 21.0.0 through 21.7.x
  * Dremio 20.0.0 through 20.8.x
  * Dremio 19.0.0 through 19.11.x


### Problem Description​
In Affected Releases, user context was not validated when a user was querying a view generated from an underlying restricted table. It was only possible in cases where a user was given access to a table which was restricted later.
In Fixed Releases, permissions are validated in the caching catalog.
### Resolution Actions​
Upgrade to a Fixed Release that resolves the issue.
### Fixed Releases​
  * Dremio 24.1.0 and above
  * Dremio 23.2.0 and above
  * Dremio 22.2.0 and above
  * Dremio 21.8.1 and above
  * Dremio 20.9.0 and above
  * Dremio 19.12.0 and above


Was this page helpful?
[Previous 2024-01-09-01](/reference/bulletins/2024-01-09-01)[Next 2023-07-22-02](/reference/bulletins/2023-07-22-02)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous 2024-01-09-01](/reference/bulletins/2024-01-09-01)[Next 2023-07-22-02](/reference/bulletins/2023-07-22-02)
!
