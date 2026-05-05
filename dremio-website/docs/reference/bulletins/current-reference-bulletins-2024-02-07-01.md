---
url: /reference/bulletins/2024-02-07-01
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
### Abstract[​](/reference/bulletins/2024-02-07-01#abstract "Direct link to Abstract")
The COPY INTO command does not verify users' SELECT privileges.
### CVSS Qualitative Rating[​](/reference/bulletins/2024-02-07-01#cvss-qualitative-rating "Direct link to CVSS Qualitative Rating")
  * Medium
  * CVSSv3.1
    * Score: 6.5


### Affected Releases[​](/reference/bulletins/2024-02-07-01#affected-releases "Direct link to Affected Releases")
  * Dremio 24.0.0 through 24.3.2


### Problem Description[​](/reference/bulletins/2024-02-07-01#problem-description "Direct link to Problem Description")
In Affected Releases, an authenticated user who does not have the SELECT privilege on certain files/datasets can access those files/datasets by using the COPY INTO command. The user can copy the file/dataset to a new table and access the data there.
### Resolution Actions[​](/reference/bulletins/2024-02-07-01#resolution-actions "Direct link to Resolution Actions")
Upgrade to a Fixed Release that resolves the issue.
### Fixed Releases[​](/reference/bulletins/2024-02-07-01#fixed-releases "Direct link to Fixed Releases")
  * Dremio 24.3.3 and above


Was this page helpful?
[Previous 2025-04-21-01](/reference/bulletins/2025-04-21-01)[Next 2024-01-12-01](/reference/bulletins/2024-01-12-01)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous 2025-04-21-01](/reference/bulletins/2025-04-21-01)[Next 2024-01-12-01](/reference/bulletins/2024-01-12-01)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fbulletins%2F2024-02-07-01%2F&_biz_t=1777950565486&_biz_i=2024-02-07-01%20%7C%20Dremio%20Documentation&_biz_n=479&rnd=862408&cdn_o=a&_biz_z=1777950565486)
