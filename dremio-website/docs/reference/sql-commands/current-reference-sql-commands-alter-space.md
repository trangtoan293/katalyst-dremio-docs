---
url: /reference/sql/commands/alter-space
title: "ALTER SPACE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64249.60659875
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * ALTER SPACE

Version: current [26.x]
On this page
# ALTER SPACE
Route refresh jobs for all Reflections that are on datasets in a space to a specific queue. For more information, see [Queue Routing](/admin/workloads/queue-routing).
## Syntax[​](/reference/sql/commands/alter-space#syntax "Direct link to Syntax")
Syntax

```
ALTER SPACE <space_name>  
  ROUTE REFLECTIONS TO { DEFAULT QUEUE | QUEUE { <queue_name> | <queue_uuid> } }  

```

## Parameters[​](/reference/sql/commands/alter-space#parameters "Direct link to Parameters")
`space_name` String
The name of the space where you want to route refresh jobs.
* * *
ROUTE REFLECTIONS TO {'{'})'{'{'})'{'}'}) DEFAULT QUEUE | QUEUE {'{'})'{'{'})'{'}'}) `queue_name` | `queue_uuid` {'{'})'{'}'}'{'}'} {'{'})'{'}'}'{'}'} String
Use the queue name or unique identifier to specify the queue on which to run jobs that create and refresh Reflections that are defined on the dataset. If a queue name or unique identifier is not specified, the default queue is used. You can also directly specify the default queue.
## Examples[​](/reference/sql/commands/alter-space#examples "Direct link to Examples")
Alter a space to route Reflections to the specified queue

```
ALTER SPACE "mySpace"  
  ROUTE REFLECTIONS TO QUEUE "Queue 1";  

```

Alter a space to route Reflections to the default queue

```
ALTER SPACE "Space 3"  
  ROUTE REFLECTIONS TO DEFAULT QUEUE;  

```

Was this page helpful?
[Previous ALTER SOURCE](/reference/sql/commands/alter-source)[Next ALTER TABLE](/reference/sql/commands/alter-table)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ALTER SOURCE](/reference/sql/commands/alter-source)[Next ALTER TABLE](/reference/sql/commands/alter-table)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Falter-space%2F&_biz_t=1777950569491&_biz_i=ALTER%20SPACE%20%7C%20Dremio%20Documentation&_biz_n=482&rnd=713531&cdn_o=a&_biz_z=1777950569491)
