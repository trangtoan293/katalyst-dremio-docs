---
url: /reference/bulletins/2023-07-22-01
slug: /reference/bulletins/2023-07-22-01
title: "2023-07-22-01 | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64244.420958375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [Security Bulletins](/reference/bulletins)
  * 2023-07-22-01

Version: current [26.x]
On this page
# Security Bulletin 2023-07-22-01
### Abstract​
Potential unintended user access to restricted data as a result of previously-executed cached plans.
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
In Affected Releases, Dremio’s query plan cache key is not user-context specific. As a result, a subsequent user who runs the same exact query as the original user may be granted access to the previously executed cached plan. The use of the shared cached plan may result in unintended access to restricted data, available to the original user but not intended for the subsequent user.
In Fixed Releases, Dremio’s query plan cache functionality adds user context to the plan cache hash, effectively making it a user-specific cache.
### Resolution Action​
Upgrade to a Fixed Release where the plan cache is user-context specific and not shared across users.
### Fixed Releases​
  * Dremio 24.1.0 and above
  * Dremio 23.2.0 and above
  * Dremio 22.2.0 and above
  * Dremio 21.8.1 and above
  * Dremio 20.9.0 and above
  * Dremio 19.12.0 and above


Was this page helpful?
[Previous 2023-07-22-02](/reference/bulletins/2023-07-22-02)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous 2023-07-22-02](/reference/bulletins/2023-07-22-02)
!
