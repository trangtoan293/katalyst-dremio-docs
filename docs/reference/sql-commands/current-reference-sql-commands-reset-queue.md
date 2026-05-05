---
url: /reference/sql/commands/reset-queue
slug: /reference/sql/commands/reset-queue
title: "RESET QUEUE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64256.791359375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * RESET QUEUE

Version: current [26.x]
On this page
# RESET QUEUE
Clears any session-specific routing queue set using the `SET QUEUE` command. After clearing, query routing will revert to the default rules defined by Workload Management (WLM). This ensures that subsequent queries in the session follow standard WLM routing unless a new queue is explicitly set.
Syntax

```
RESET QUEUE   

```

## Examples​
Each subsequent query in the same session will be routed according to the default WLM rules

```
RESET QUEUE;  

```

Was this page helpful?
[Previous User-Defined Functions](/reference/sql/commands/functions)[Next RESET TAG](/reference/sql/commands/reset-tag)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous User-Defined Functions](/reference/sql/commands/functions)[Next RESET TAG](/reference/sql/commands/reset-tag)
!
