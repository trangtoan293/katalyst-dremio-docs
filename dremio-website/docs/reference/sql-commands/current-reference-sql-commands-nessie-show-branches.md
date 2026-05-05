---
url: /reference/sql/commands/nessie/show-branches
title: "SHOW BRANCHES | Dremio Enterprise Documentation"
depth: 5
crawled_at: 65351.857925791
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * [SQL Commands for Nessie](/reference/sql/commands/nessie)
  * SHOW BRANCHES

Version: current [26.x]
On this page
# SHOW BRANCHES
View all branches in the source. If a source is not specified, the source in the current context is used.
Syntax

```
SHOW BRANCHES  
  [ IN <source_name> ]  

```

## Parameters[​](/reference/sql/commands/nessie/show-branches#parameters "Direct link to Parameters")
IN `source_name` String Optional
The name of the source that you want to view all branches for. If not specified, the current source in the query context is used.
## Examples[​](/reference/sql/commands/nessie/show-branches#examples "Direct link to Examples")
Show all the branches in the source

```
SHOW BRANCHES  

```

Show all the branches in the specified source

```
SHOW BRANCHES in mySource  

```

Was this page helpful?
[Previous MERGE BRANCH](/reference/sql/commands/nessie/merge-branch)[Next SHOW LOGS](/reference/sql/commands/nessie/show-logs)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MERGE BRANCH](/reference/sql/commands/nessie/merge-branch)[Next SHOW LOGS](/reference/sql/commands/nessie/show-logs)
