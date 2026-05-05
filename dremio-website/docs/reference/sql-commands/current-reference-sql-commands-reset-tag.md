---
url: /reference/sql/commands/reset-tag
title: "RESET TAG | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64256.767927666
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * RESET TAG

Version: current [26.x]
On this page
# RESET TAG
Clears any session-specific routing tag set using the `SET TAG` command. After clearing, query routing will revert to the default rules defined by Workload Management (WLM). This ensures that subsequent queries in the session follow standard WLM routing unless a new queue is explicitly set.
Syntax

```
RESET TAG  

```

## Examples[​](/reference/sql/commands/reset-tag#examples "Direct link to Examples")
Each subsequent query in the same session will be routed according to the default WLM rules

```
RESET TAG;  

```

Was this page helpful?
[Previous RESET QUEUE](/reference/sql/commands/reset-queue)[Next SET QUEUE](/reference/sql/commands/set-queue)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous RESET QUEUE](/reference/sql/commands/reset-queue)[Next SET QUEUE](/reference/sql/commands/set-queue)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Freset-tag%2F&_biz_t=1777950576776&_biz_i=RESET%20TAG%20%7C%20Dremio%20Documentation&_biz_n=502&rnd=571676&cdn_o=a&_biz_z=1777950576777)
