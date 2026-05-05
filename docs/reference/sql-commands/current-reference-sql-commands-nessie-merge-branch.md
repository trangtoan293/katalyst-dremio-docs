---
url: /reference/sql/commands/nessie/merge-branch
slug: /reference/sql/commands/nessie/merge-branch
title: "MERGE BRANCH | Dremio Enterprise Documentation"
depth: 5
crawled_at: 65349.56795225
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * [SQL Commands for Nessie](/reference/sql/commands/nessie)
  * MERGE BRANCH

Version: current [26.x]
On this page
# MERGE BRANCH
Merge a (source) branch into the current branch that you are in by default, or into a target branch that you specify.
Syntax

```
MERGE BRANCH <source_branch_name>  
  [ INTO <target_branch_name> ]  
  [ IN <source_name> ]  

```

## Parameters​
`source_branch_name` String
The name of the branch that you want to merge into your target branch. If a target branch is not specified, the source branch is merged into the current branch you are in.
* * *
INTO `target_branch_name` String Optional
The name of the branch that is the target for the merge. If you do not use this optional clause and the reference is a branch, the query still runs successfully. However, if the reference is not a branch, the query fails because you can merge only branches.
* * *
IN `source_name` String Optional
The name of the source. If not specified, the current source in the query context is used.
## Examples​
Merge a branch you specify into the current reference branch

```
MERGE BRANCH myBranch  

```

Merge a branch you specify into another branch in the specified source

```
MERGE BRANCH myBranch  
  INTO main  
  IN mySource  

```

Was this page helpful?
[Previous DROP TAG](/reference/sql/commands/nessie/drop-tag)[Next SHOW BRANCHES](/reference/sql/commands/nessie/show-branches)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DROP TAG](/reference/sql/commands/nessie/drop-tag)[Next SHOW BRANCHES](/reference/sql/commands/nessie/show-branches)
