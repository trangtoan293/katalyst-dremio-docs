---
url: /reference/sql/commands/alter-space
slug: /reference/sql/commands/alter-space
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
## Syntax​
Syntax

```
ALTER SPACE <space_name>  
  ROUTE REFLECTIONS TO { DEFAULT QUEUE | QUEUE { <queue_name> | <queue_uuid> } }  

```

## Parameters​
`space_name` String
The name of the space where you want to route refresh jobs.
* * *
ROUTE REFLECTIONS TO {'{'})'{'{'})'{'}'}) DEFAULT QUEUE | QUEUE {'{'})'{'{'})'{'}'}) `queue_name` | `queue_uuid` {'{'})'{'}'}'{'}'} {'{'})'{'}'}'{'}'} String
Use the queue name or unique identifier to specify the queue on which to run jobs that create and refresh Reflections that are defined on the dataset. If a queue name or unique identifier is not specified, the default queue is used. You can also directly specify the default queue.
## Examples​
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
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ALTER SOURCE](/reference/sql/commands/alter-source)[Next ALTER TABLE](/reference/sql/commands/alter-table)
!
