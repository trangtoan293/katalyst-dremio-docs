---
url: /reference/sql/commands/alter-folder
title: "ALTER FOLDER | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64248.834205041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * ALTER FOLDER

Version: current [26.x]
On this page
# ALTER FOLDER
Route refresh jobs for all Reflections on datasets that are in a folder to a specific queue. For more information, see [Queue Routing](/admin/workloads/queue-routing).
## Syntax[​](/reference/sql/commands/alter-folder#syntax "Direct link to Syntax")
Syntax

```
ALTER FOLDER <folder_name>  
  ROUTE REFLECTIONS TO { DEFAULT QUEUE | QUEUE { <queue_name> | <queue_uuid> } }  

```

## Parameters[​](/reference/sql/commands/alter-folder#parameters "Direct link to Parameters")
`folder_name` String
The name of the folder where you want to route refresh jobs.
* * *
ROUTE REFLECTIONS TO {'{'})'{'{'})'{'}'}) DEFAULT QUEUE | QUEUE {'{'})'{'{'})'{'}'}) `queue_name` | `queue_uuid` {'{'})'{'}'}'{'}'} {'{'})'{'}'}'{'}'} String
Use the queue name or unique identifier to specify the queue on which to run jobs that create and refresh Reflections that are defined on the dataset. If a queue name or unique identifier is not specified, the default queue is used. You can also directly specify the default queue.
## Examples[​](/reference/sql/commands/alter-folder#examples "Direct link to Examples")
Alter a folder to route Reflections to the default queue

```
 ALTER FOLDER myFolder  
  ROUTE REFLECTIONS TO DEFAULT QUEUE;  

```

Alter a folder to route Reflections to the specified queue

```
ALTER FOLDER myFolder  
  ROUTE REFLECTIONS TO QUEUE "Queue 1";  

```

Was this page helpful?
[Previous SELECT](/reference/sql/commands)[Next ALTER PIPE](/reference/sql/commands/alter-pipe)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SELECT](/reference/sql/commands)[Next ALTER PIPE](/reference/sql/commands/alter-pipe)
