---
url: /reference/sql/commands/nessie/alter-branch
title: "ALTER BRANCH | Dremio Enterprise Documentation"
depth: 5
crawled_at: 65347.389806958
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * [SQL Commands for Nessie](/reference/sql/commands/nessie)
  * ALTER BRANCH

Version: current [26.x]
On this page
# ALTER BRANCH
Change the reference that the branch head points to.
Syntax

```
ALTER BRANCH <branch_name>  
  ASSIGN { REF[ERENCE] | BRANCH | TAG | COMMIT } <identifier>  
  [ IN <source_name> ]  

```

## Parameters[​](/reference/sql/commands/nessie/alter-branch#parameters "Direct link to Parameters")
`branch_name` String
The name of the branch that you are assigning a new reference to.
* * *
ASSIGN {'{'})'{'{'})'{'}'}) REF[ERENCE] | BRANCH | TAG | COMMIT {'{'})'{'}'}'{'}'} `identifier` String
Specifies the reference that will be assigned as the new branch head.
  * `REF`: Identifies a new reference where the specified branch is assigned to, which can be another branch, a tag, or a commit.
  * `BRANCH`: Identifies a branch reference where the specified branch is assigned to.
  * `TAG`: Identifies a tag reference where the specified branch is assigned to.
  * `COMMIT`: Identifies a reference where the specified branch is assigned to. Commit hashes must be enclosed in double quotes (for example, `“ff2fe50fef5a030c4fc8e61b252bdc33c72e2b6f929d813833d998b8368302e2”`).


* * *
IN `source_name` String Optional
The name of the source that you want to refer to. If not specified, the current source in the query context is used.
## Examples[​](/reference/sql/commands/nessie/alter-branch#examples "Direct link to Examples")
Assign the branch head to a specific commit

```
ALTER BRANCH myBranch  
  ASSIGN COMMIT "c7a79c74adf76649e643354c34ed69abfee5a3b070ef68cbe782a072b0a418ba"  

```

Assign the branch head to a specific branch

```
ALTER BRANCH myBranch  
  ASSIGN BRANCH anotherBranch  
  IN mySource  

```

Assign the branch head to a specific tag

```
ALTER BRANCH myBranch  
  ASSIGN TAG myTag  

```

Assign the branch head to a specific reference

```
ALTER BRANCH myBranch  
  ASSIGN REF tag2  

```

Was this page helpful?
[Previous SQL Commands for Nessie](/reference/sql/commands/nessie)[Next ALTER TAG](/reference/sql/commands/nessie/alter-tag)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SQL Commands for Nessie](/reference/sql/commands/nessie)[Next ALTER TAG](/reference/sql/commands/nessie/alter-tag)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fnessie%2Falter-branch%2F&_biz_t=1777951666619&_biz_i=ALTER%20BRANCH%20%7C%20Dremio%20Documentation&_biz_n=2711&rnd=935089&cdn_o=a&_biz_z=1777951666619)
