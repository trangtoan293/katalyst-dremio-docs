---
url: /reference/bulletins/2024-01-09-01
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
### Abstract[​](/reference/bulletins/2024-01-09-01#abstract "Direct link to Abstract")
The Dremio-to-Dremio connector does not fully validate table-level access in certain cases.
### CVSS Qualitative Rating[​](/reference/bulletins/2024-01-09-01#cvss-qualitative-rating "Direct link to CVSS Qualitative Rating")
  * High
  * CVSSv3.1
    * Score: 7.1


### Affected Releases[​](/reference/bulletins/2024-01-09-01#affected-releases "Direct link to Affected Releases")
  * Dremio 24.0.0 through 24.1.1
  * Dremio 23.1.0 through 23.2.3


### Problem Description[​](/reference/bulletins/2024-01-09-01#problem-description "Direct link to Problem Description")
In Affected Releases, the Dremio-to-Dremio connector does not fully validate table-level permission when user impersonation is enabled in the Dremio-to-Dremio source configuration **and** queries are accelerated.
The Dremio-to-Dremio connector was introduced in version 23.1.0. The issue does not affect any prior versions.
### Resolution Actions[​](/reference/bulletins/2024-01-09-01#resolution-actions "Direct link to Resolution Actions")
Upgrade to a Fixed Release that resolves the issue.
If you are unable to upgrade to a Fixed Release, set `userImpersonation` to `false` in the [advanced options](/data-sources/databases/dremio#advanced-options) for the Dremio-to-Dremio source configuration until you can upgrade.
### Fixed Releases[​](/reference/bulletins/2024-01-09-01#fixed-releases "Direct link to Fixed Releases")
  * Dremio 24.1.2 and above
  * Dremio 23.2.4 and above


Was this page helpful?
[Previous 2024-01-12-01](/reference/bulletins/2024-01-12-01)[Next 2023-07-22-03](/reference/bulletins/2023-07-22-03)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous 2024-01-12-01](/reference/bulletins/2024-01-12-01)[Next 2023-07-22-03](/reference/bulletins/2023-07-22-03)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fbulletins%2F2024-01-09-01%2F&_biz_t=1777950564896&_biz_i=2024-01-09-01%20%7C%20Dremio%20Documentation&_biz_n=476&rnd=446898&cdn_o=a&_biz_z=1777950564896)
