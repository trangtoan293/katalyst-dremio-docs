---
url: /reference/sql/commands/reset-tag
slug: /reference/sql/commands/reset-tag
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

## Examples​
Each subsequent query in the same session will be routed according to the default WLM rules

```
RESET TAG;  

```

Was this page helpful?
[Previous RESET QUEUE](/reference/sql/commands/reset-queue)[Next SET QUEUE](/reference/sql/commands/set-queue)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous RESET QUEUE](/reference/sql/commands/reset-queue)[Next SET QUEUE](/reference/sql/commands/set-queue)
!
