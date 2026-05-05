---
url: /reference/sql/commands/set-queue
slug: /reference/sql/commands/set-queue
title: "SET QUEUE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64256.868898458
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * SET QUEUE

Version: current [26.x]
On this page
# SET QUEUE
Specify the queue that will be used to route subsequent queries in the current session.
When a session queue is set, it overrides Workload Management (WLM) routing rules. The setting remains active until the session ends or until it is explicitly reset using `RESET QUEUE`. Changing the session queue does not persist across sessions.
Syntax

```
SET QUEUE <queue_name>  

```

## Parameters​
`queue_name` String
Specifies the queue to use for routing subsequent queries in the session. The queue must be available. Use the `CURRENT_QUEUE()` function to return the name of the queue currently in use for the active session.
## Examples​
Each query run after this command in the same session will be routed to the specified queue 

```
SET QUEUE first_queue;  
  
SELECT CURRENT_QUEUE();  

```

Was this page helpful?
[Previous RESET TAG](/reference/sql/commands/reset-tag)[Next SET TAG](/reference/sql/commands/set-tag)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous RESET TAG](/reference/sql/commands/reset-tag)[Next SET TAG](/reference/sql/commands/set-tag)
!!
