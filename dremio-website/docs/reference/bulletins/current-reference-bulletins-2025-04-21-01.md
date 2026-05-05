---
url: /reference/bulletins/2025-04-21-01
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
### Abstract​[​](/reference/bulletins/2025-04-21-01#abstract "Direct link to Abstract​")
An authenticated API endpoint allows arbitrary file deletion.
### CVSS Qualitative Rating​[​](/reference/bulletins/2025-04-21-01#cvss-qualitative-rating "Direct link to CVSS Qualitative Rating​")
  * High
  * CVSSv4.0
    * Score: 8.4


### Affected Releases​[​](/reference/bulletins/2025-04-21-01#affected-releases "Direct link to Affected Releases​")
  * Dremio 24.3.0 through 24.3.16
  * Dremio 25.0.0 through 25.0.14
  * Dremio 25.1.0 through 25.1.7
  * Dremio 25.2.0 through 25.2.4


### Problem Description​[​](/reference/bulletins/2025-04-21-01#problem-description "Direct link to Problem Description​")
In [Affected Releases](/reference/bulletins/2025-04-21-01#affected-releases), an improper authorization vulnerability in Dremio allows authenticated users to delete arbitrary files that the system can access, including system files and files stored in remote locations such as S3, Azure Blob Storage, and local filesystems. This vulnerability exists due to insufficient access controls on an API endpoint, enabling any authenticated user to specify and delete files outside their intended scope. Exploiting this flaw could lead to data loss, denial of service (DoS), and potential escalation of impact depending on the deleted files.
### Resolution Actions​[​](/reference/bulletins/2025-04-21-01#resolution-actions "Direct link to Resolution Actions​")
Upgrade to a [Fixed Release](/reference/bulletins/2025-04-21-01#fixed-releases) that resolves the issue.
### Fixed Releases​[​](/reference/bulletins/2025-04-21-01#fixed-releases "Direct link to Fixed Releases​")
  * Dremio 24.3.17 and above
  * Dremio 25.0.15 and above
  * Dremio 25.1.8 and above
  * Dremio 25.2.5 and above
  * Dremio 26.0.0 and above


Was this page helpful?
[Previous Security Bulletins](/reference/bulletins)[Next 2024-02-07-01](/reference/bulletins/2024-02-07-01)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Security Bulletins](/reference/bulletins)[Next 2024-02-07-01](/reference/bulletins/2024-02-07-01)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fbulletins%2F2025-04-21-01%2F&_biz_t=1777950565673&_biz_i=2025-04-21-01%20%7C%20Dremio%20Documentation&_biz_n=480&rnd=244781&cdn_o=a&_biz_z=1777950565673)
