---
url: /reference/sql/commands/set-queue
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

## Parameters[​](/reference/sql/commands/set-queue#parameters "Direct link to Parameters")
`queue_name` String
Specifies the queue to use for routing subsequent queries in the session. The queue must be available. Use the `CURRENT_QUEUE()` function to return the name of the queue currently in use for the active session.
## Examples[​](/reference/sql/commands/set-queue#examples "Direct link to Examples")
Each query run after this command in the same session will be routed to the specified queue 

```
SET QUEUE first_queue;  
  
SELECT CURRENT_QUEUE();  

```

Was this page helpful?
[Previous RESET TAG](/reference/sql/commands/reset-tag)[Next SET TAG](/reference/sql/commands/set-tag)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous RESET TAG](/reference/sql/commands/reset-tag)[Next SET TAG](/reference/sql/commands/set-tag)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fset-tag%2F&_biz_t=1777950576889&_biz_i=SET%20TAG%20%7C%20Dremio%20Documentation&_biz_n=504&rnd=94318&cdn_o=a&_biz_z=1777950576900)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fset-queue%2F&_biz_t=1777950576900&_biz_i=SET%20QUEUE%20%7C%20Dremio%20Documentation&_biz_n=505&rnd=274304&cdn_o=a&_biz_z=1777950576900)
