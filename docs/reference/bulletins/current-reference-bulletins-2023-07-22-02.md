---
url: /reference/bulletins/2023-07-22-02
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
### Abstract[​](/reference/bulletins/2023-07-22-02#abstract "Direct link to Abstract")
Potential unintended user access to restricted data as a result of accelerated DML operation.
### CVSS Qualitative Rating[​](/reference/bulletins/2023-07-22-02#cvss-qualitative-rating "Direct link to CVSS Qualitative Rating")
  * Medium
  * CVSSv3.1
    * Score: 5.3


### Affected Releases[​](/reference/bulletins/2023-07-22-02#affected-releases "Direct link to Affected Releases")
  * Dremio 24.0.0 through 24.0.x
  * Dremio 23.0.0 through 23.1.x
  * Dremio 22.0.0 through 22.1.x


### Problem Description[​](/reference/bulletins/2023-07-22-02#problem-description "Direct link to Problem Description")
In Affected Releases, DML queries were accelerated and `SELECT` permissions on tables were not validated at query execution. Because of this, a user could perform a `MERGE` operation to another table and view all of its data. This was possible if a default raw Reflection was enabled on that view and `SELECT` permissions previously granted on underlying tables in the view were revoked from the view owner.
In Fixed Releases, `SELECT` permissions on an underlying table are validated before a DML operation is performed.
### Resolution Actions[​](/reference/bulletins/2023-07-22-02#resolution-actions "Direct link to Resolution Actions")
Upgrade to a Fixed Release that resolves the issue.
### Fixed Releases[​](/reference/bulletins/2023-07-22-02#fixed-releases "Direct link to Fixed Releases")
  * Dremio 24.1.0 and above
  * Dremio 23.2.0 and above
  * Dremio 22.2.0 and above


Was this page helpful?
[Previous 2023-07-22-03](/reference/bulletins/2023-07-22-03)[Next 2023-07-22-01](/reference/bulletins/2023-07-22-01)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous 2023-07-22-03](/reference/bulletins/2023-07-22-03)[Next 2023-07-22-01](/reference/bulletins/2023-07-22-01)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fbulletins%2F2023-07-22-02%2F&_biz_t=1777950564455&_biz_i=2023-07-22-02%20%7C%20Dremio%20Documentation&_biz_n=474&rnd=90955&cdn_o=a&_biz_z=1777950564455)
