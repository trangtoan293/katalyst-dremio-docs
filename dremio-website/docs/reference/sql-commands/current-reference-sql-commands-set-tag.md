---
url: /reference/sql/commands/set-tag
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

## Parameters[​](/reference/sql/commands/set-tag#parameters "Direct link to Parameters")
`tag_name` String
Specifies the routing tag for all subsequent queries in the session. A Workload Management (WLM) routing rule must be defined to route queries using this tag.
## Examples[​](/reference/sql/commands/set-tag#examples "Direct link to Examples")
Create a WLM routing rule using tag Dashboard and set session routing tag. 

```
tag() = 'Dashboard'  
  
SET TAG Dashboard;  
  

```

Was this page helpful?
[Previous SET QUEUE](/reference/sql/commands/set-queue)[Next USE](/reference/sql/commands/use)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SET QUEUE](/reference/sql/commands/set-queue)[Next USE](/reference/sql/commands/use)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fset-tag%2F&_biz_t=1777950576889&_biz_i=SET%20TAG%20%7C%20Dremio%20Documentation&_biz_n=504&rnd=94318&cdn_o=a&_biz_z=1777950576889)
