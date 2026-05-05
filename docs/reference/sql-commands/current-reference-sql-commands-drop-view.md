---
url: /reference/sql/commands/drop-view
slug: /reference/sql/commands/drop-view
title: "DROP VIEW | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64254.283869666
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * DROP VIEW

Version: current [26.x]
On this page
# DROP VIEW
Removes a view.
Syntax

```
DROP VIEW [ IF EXISTS ] <view_name>  

```

#### Parameters​
[ IF EXISTS ] Optional
When included, the command will succeed regardless of whether the view existed. If this clause is not specified, the command will fail if the view to be dropped does not exist.
* * *
`view_name` String
The path of the view that you want to drop.
## Examples​
Drop a view

```
DROP VIEW demo.example_view  

```

Drop a specific view from a source

```
DROP VIEW Weather.SFWeatherElevation"Weather Conditions"  

```

Was this page helpful?
Previous DROP SPACE[Next Privileges](/reference/sql/commands/rbac)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
Previous DROP SPACE[Next Privileges](/reference/sql/commands/rbac)
