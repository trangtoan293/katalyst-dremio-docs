---
url: /reference/bulletins/2024-01-12-01
title: "2024-01-12-01 | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64244.529839208
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [Security Bulletins](/reference/bulletins)
  * 2024-01-12-01

Version: current [26.x]
On this page
# Security Bulletin 2024-01-12-01
### Abstract[​](/reference/bulletins/2024-01-12-01#abstract "Direct link to Abstract")
Path traversal vulnerability bypassed folder-level role-based access control (RBAC).
### CVSS Qualitative Rating[​](/reference/bulletins/2024-01-12-01#cvss-qualitative-rating "Direct link to CVSS Qualitative Rating")
  * High
  * CVSSv3.1
    * Score: 8.8


### Affected Releases[​](/reference/bulletins/2024-01-12-01#affected-releases "Direct link to Affected Releases")
  * Dremio 24.0.0 through 24.3.0
  * Dremio 23.0.0 through 23.2.3
  * Dremio 22.0.0 through 22.2.2


### Problem Description[​](/reference/bulletins/2024-01-12-01#problem-description "Direct link to Problem Description")
In Affected Releases, an authenticated user who has no privileges on certain folders and the files and datasets in the folders can access the folders, files, and datasets by performing a path traversal attack. To be successful, the user must have access to the source and at least one folder in the source.
### Resolution Actions[​](/reference/bulletins/2024-01-12-01#resolution-actions "Direct link to Resolution Actions")
Upgrade to a Fixed Release that resolves the issue.
### Fixed Releases[​](/reference/bulletins/2024-01-12-01#fixed-releases "Direct link to Fixed Releases")
  * Dremio 24.3.1 and above
  * Dremio 23.2.4 and above
  * Dremio 22.2.3 and above


Was this page helpful?
[Previous 2024-02-07-01](/reference/bulletins/2024-02-07-01)[Next 2024-01-09-01](/reference/bulletins/2024-01-09-01)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous 2024-02-07-01](/reference/bulletins/2024-02-07-01)[Next 2024-01-09-01](/reference/bulletins/2024-01-09-01)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fbulletins%2F2024-01-12-01%2F&_biz_t=1777950564550&_biz_i=2024-01-12-01%20%7C%20Dremio%20Documentation&_biz_n=475&rnd=636554&cdn_o=a&_biz_z=1777950564550)
