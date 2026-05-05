---
url: /reference/bulletins/2023-07-22-02
slug: /reference/bulletins/2023-07-22-02
title: "2023-07-22-02 | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64244.506868833
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [Security Bulletins](/reference/bulletins)
  * 2023-07-22-02

Version: current [26.x]
On this page
# Security Bulletin 2023-07-22-02
### Abstract​
Potential unintended user access to restricted data as a result of accelerated DML operation.
### CVSS Qualitative Rating​
  * Medium
  * CVSSv3.1
    * Score: 5.3


### Affected Releases​
  * Dremio 24.0.0 through 24.0.x
  * Dremio 23.0.0 through 23.1.x
  * Dremio 22.0.0 through 22.1.x


### Problem Description​
In Affected Releases, DML queries were accelerated and `SELECT` permissions on tables were not validated at query execution. Because of this, a user could perform a `MERGE` operation to another table and view all of its data. This was possible if a default raw Reflection was enabled on that view and `SELECT` permissions previously granted on underlying tables in the view were revoked from the view owner.
In Fixed Releases, `SELECT` permissions on an underlying table are validated before a DML operation is performed.
### Resolution Actions​
Upgrade to a Fixed Release that resolves the issue.
### Fixed Releases​
  * Dremio 24.1.0 and above
  * Dremio 23.2.0 and above
  * Dremio 22.2.0 and above


Was this page helpful?
[Previous 2023-07-22-03](/reference/bulletins/2023-07-22-03)[Next 2023-07-22-01](/reference/bulletins/2023-07-22-01)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous 2023-07-22-03](/reference/bulletins/2023-07-22-03)[Next 2023-07-22-01](/reference/bulletins/2023-07-22-01)
!
