---
url: /reference/sql/commands/nessie/show-branches
slug: /reference/sql/commands/nessie/show-branches
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

## Parameters​
IN `source_name` String Optional
The name of the source that you want to view all branches for. If not specified, the current source in the query context is used.
## Examples​
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
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MERGE BRANCH](/reference/sql/commands/nessie/merge-branch)[Next SHOW LOGS](/reference/sql/commands/nessie/show-logs)
