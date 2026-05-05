---
url: /reference/sql/commands/nessie/create-branch
title: "CREATE BRANCH | Dremio Enterprise Documentation"
depth: 5
crawled_at: 65347.241476291
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * [SQL Commands for Nessie](/reference/sql/commands/nessie)
  * CREATE BRANCH

Version: current [26.x]
On this page
# CREATE BRANCH
Create a new branch that is based on the current one that you are in.
Syntax

```
CREATE BRANCH [ IF NOT EXISTS ] <branch_name>  
   [ AT { REF[ERENCE] | BRANCH | TAG | COMMIT } <refValue> ]  
   [ IN <source_name> ]  

```

## Parameters[​](/reference/sql/commands/nessie/create-branch#parameters "Direct link to Parameters")
[ IF NOT EXISTS ] Optional
When included, the command runs regardless of whether the branch exists and you receive a summary indicating whether the branch could be created. If this clause is not specified, the command fails if the branch to be created already exists.
* * *
`branch_name` String
The name of the branch that you are creating. If a source is not specified, the branch is created in the source specified in the query context.
* * *
AT {'{'})'{'{'})'{'}'}) REF[ERENCE] | BRANCH | TAG | COMMIT {'{'})'{'}'}'{'}'} `reference_name` String Optional
Specifies the reference where you want the new branch to be created from. When this parameter is omitted, the current reference is used.
  * `REF`: Identifies a specific branch, tag, or commit.
  * `BRANCH`: Identifies a specific branch.
  * `TAG`: Identifies a specific tag.
  * `COMMIT`: Identifies a specific commit. Commit hashes must be enclosed in double quotes (for example, `“ff2fe50fef5a030c4fc8e61b252bdc33c72e2b6f929d813833d998b8368302e2”`).


* * *
IN `source_name` String Optional
The name of the source where you want to create a branch. If not specified, the current source in the query context is used.
## Examples[​](/reference/sql/commands/nessie/create-branch#examples "Direct link to Examples")
Create a branch

```
CREATE BRANCH myBranch  
  IN myCatalog;  

```

Create a branch at the specified commit

```
CREATE BRANCH myBranch  
  AT COMMIT "c7a79c74adf76649e643354c34ed69abfee5a3b070ef68cbe782a072b0a418ba";  

```

Create a branch at the specified branch in the specified source

```
CREATE BRANCH myBranch  
  AT BRANCH anotherBranch  
  IN myCatalog;  

```

Was this page helpful?
[Previous ALTER TAG](/reference/sql/commands/nessie/alter-tag)[Next CREATE FOLDER](/reference/sql/commands/nessie/create-folder)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ALTER TAG](/reference/sql/commands/nessie/alter-tag)[Next CREATE FOLDER](/reference/sql/commands/nessie/create-folder)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fnessie%2Fcreate-branch%2F&_biz_t=1777951666749&_biz_i=CREATE%20BRANCH%20%7C%20Dremio%20Documentation&_biz_n=2712&rnd=817902&cdn_o=a&_biz_z=1777951666749)
