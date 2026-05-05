---
url: /reference/sql/commands/nessie/drop-branch
title: "DROP BRANCH | Dremio Enterprise Documentation"
depth: 5
crawled_at: 65347.418077125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * [SQL Commands for Nessie](/reference/sql/commands/nessie)
  * DROP BRANCH

Version: current [26.x]
On this page
# DROP BRANCH
Remove a branch from a Nessie source.
Syntax

```
DROP BRANCH [ IF EXISTS ] <branch_name>  
  { AT COMMIT <commit_hash> | FORCE }  
  [ IN <source_name> ]  

```

## Parameters[​](/reference/sql/commands/nessie/drop-branch#parameters "Direct link to Parameters")
[ IF EXISTS ] Optional
When included, the command succeeds regardless of whether the branch existed. If this clause is not specified, the command fails if the branch to be dropped does not exist.
* * *
`branch_name` String
The name of the branch that you are dropping.
* * *
AT COMMIT `commit_hash` | FORCE String
Use the `AT COMMIT` parameter when you want to specify the exact commit hash that the branch is expected to be at. This is helpful to prevent the branch from being dropped if it was modified unexpectedly. Commit hashes must be enclosed in double quotes (for example, `“ff2fe50fef5a030c4fc8e61b252bdc33c72e2b6f929d813833d998b8368302e2”`). Use the `FORCE` parameter when you want to drop the branch even if it has been changed.
* * *
IN `source_name` String Optional
The name of the source containing the branch that you want to drop. If not specified, the current source in the query context is used.
## Examples[​](/reference/sql/commands/nessie/drop-branch#examples "Direct link to Examples")
Drop a branch at the specified commit

```
DROP BRANCH myBranch  
  AT COMMIT "ff2fe50fef5a030c4fc8e61b252bdc33c72e2b6f929d813833d998b8368302e2"  

```

Use the FORCE parameter to drop the specified branch

```
DROP BRANCH myBranch  
  FORCE  

```

Was this page helpful?
[Previous CREATE TAG](/reference/sql/commands/nessie/create-tag)[Next DROP TAG](/reference/sql/commands/nessie/drop-tag)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CREATE TAG](/reference/sql/commands/nessie/create-tag)[Next DROP TAG](/reference/sql/commands/nessie/drop-tag)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fnessie%2Fdrop-branch%2F&_biz_t=1777951667620&_biz_i=DROP%20BRANCH%20%7C%20Dremio%20Documentation&_biz_n=2715&rnd=263840&cdn_o=a&_biz_z=1777951667620)
