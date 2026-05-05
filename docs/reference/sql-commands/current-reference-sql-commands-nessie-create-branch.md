---
url: /reference/sql/commands/nessie/create-branch
slug: /reference/sql/commands/nessie/create-branch
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

## Parameters​
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
## Examples​
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
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ALTER TAG](/reference/sql/commands/nessie/alter-tag)[Next CREATE FOLDER](/reference/sql/commands/nessie/create-folder)
!
