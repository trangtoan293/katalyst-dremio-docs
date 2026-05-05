---
url: /reference/sql/commands/set-tag
slug: /reference/sql/commands/set-tag
title: "SET TAG | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64256.889268166
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * SET TAG

Version: current [26.x]
On this page
# SET TAG
Specify the routing tag that will be used to route subsequent queries in the current session.
When a session routing tag is set, it is used to route queries according to the Workload Management (WLM) routing rules defined for that routing tag. If a `ROUTING_TAG` connection property is already set for the session, `SET TAG` will override it. The setting remains active until the session ends or until it is explicitly reset using `RESET TAG`. Changing the session routing tag does not persist across sessions.
Syntax

```
SET TAG <tag_name>  

```

## Parameters​
`tag_name` String
Specifies the routing tag for all subsequent queries in the session. A Workload Management (WLM) routing rule must be defined to route queries using this tag.
## Examples​
Create a WLM routing rule using tag Dashboard and set session routing tag. 

```
tag() = 'Dashboard'  
  
SET TAG Dashboard;  
  

```

Was this page helpful?
[Previous SET QUEUE](/reference/sql/commands/set-queue)[Next USE](/reference/sql/commands/use)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SET QUEUE](/reference/sql/commands/set-queue)[Next USE](/reference/sql/commands/use)
!
