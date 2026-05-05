---
url: /reference/bulletins/2023-07-22-01
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
### Abstract[​](/reference/bulletins/2023-07-22-01#abstract "Direct link to Abstract")
Potential unintended user access to restricted data as a result of previously-executed cached plans.
### CVSS Qualitative Rating[​](/reference/bulletins/2023-07-22-01#cvss-qualitative-rating "Direct link to CVSS Qualitative Rating")
  * Medium
  * CVSSv3.1
    * Score: 6.5


### Affected Releases[​](/reference/bulletins/2023-07-22-01#affected-releases "Direct link to Affected Releases")
  * Dremio 24.0.0 through 24.0.x
  * Dremio 23.0.0 through 23.1.x
  * Dremio 22.0.0 through 22.1.x
  * Dremio 21.0.0 through 21.7.x
  * Dremio 20.0.0 through 20.8.x
  * Dremio 19.0.0 through 19.11.x


### Problem Description[​](/reference/bulletins/2023-07-22-01#problem-description "Direct link to Problem Description")
In Affected Releases, Dremio’s query plan cache key is not user-context specific. As a result, a subsequent user who runs the same exact query as the original user may be granted access to the previously executed cached plan. The use of the shared cached plan may result in unintended access to restricted data, available to the original user but not intended for the subsequent user.
In Fixed Releases, Dremio’s query plan cache functionality adds user context to the plan cache hash, effectively making it a user-specific cache.
### Resolution Action[​](/reference/bulletins/2023-07-22-01#resolution-action "Direct link to Resolution Action")
Upgrade to a Fixed Release where the plan cache is user-context specific and not shared across users.
### Fixed Releases[​](/reference/bulletins/2023-07-22-01#fixed-releases "Direct link to Fixed Releases")
  * Dremio 24.1.0 and above
  * Dremio 23.2.0 and above
  * Dremio 22.2.0 and above
  * Dremio 21.8.1 and above
  * Dremio 20.9.0 and above
  * Dremio 19.12.0 and above


Was this page helpful?
[Previous 2023-07-22-02](/reference/bulletins/2023-07-22-02)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous 2023-07-22-02](/reference/bulletins/2023-07-22-02)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fbulletins%2F2023-07-22-01%2F&_biz_t=1777950565043&_biz_i=2023-07-22-01%20%7C%20Dremio%20Documentation&_biz_n=477&rnd=402362&cdn_o=a&_biz_z=1777950565043)
