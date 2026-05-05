---
url: /reference/sql/commands/nessie/create-folder
slug: /reference/sql/commands/nessie/create-folder
title: "CREATE FOLDER | Dremio Enterprise Documentation"
depth: 5
crawled_at: 65347.739554791
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * [SQL Commands for Nessie](/reference/sql/commands/nessie)
  * CREATE FOLDER

Version: current [26.x]
On this page
# CREATE FOLDER
Create a new folder in the current context, in a specified path, or at a specified reference (branch, tag, or commit).
Syntax

```
CREATE FOLDER [ IF NOT EXISTS ] <folder_name>  
   [ AT { REF[ERENCE] | BRANCH | TAG | COMMIT } <refValue> ]  

```

## Parameters​
[ IF NOT EXISTS ] Optional
When included, the command runs regardless of whether the folder exists and you receive a summary indicating whether the folder could be created. If this clause is not specified, the command fails if the folder to be created already exists.
* * *
`folder_name` String
The name of the folder that you are creating. If a source is not specified, the folder is created in the source specified in the query context. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
* * *
AT {'{'})'{'{'})'{'}'}) REF[ERENCE] | BRANCH | TAG | COMMIT {'{'})'{'}'}'{'}'} `refValue` String Optional
Specifies the reference where you want the new folder to be created from. When this parameter is omitted, the current reference is used.
  * `REF`: Identifies a specific branch, tag, or commit.
  * `BRANCH`: Identifies a specific branch.
  * `TAG`: Identifies a specific tag.
  * `COMMIT`: Identifies a specific commit. Commit hashes must be enclosed in double quotes (for example, `“ff2fe50fef5a030c4fc8e61b252bdc33c72e2b6f929d813833d998b8368302e2”`).


## Examples​
Create a folder

```
CREATE FOLDER myFolder  

```

Create a folder in the specified path and at the specified commit

```
CREATE FOLDER mySource.myFolder  
  AT COMMIT "c7a79c74adf76649e643354c34ed69abfee5a3b070ef68cbe782a072b0a418ba"  

```

Create a folder at the specified branch

```
CREATE FOLDER myFolder  
  AT BRANCH myBranch  

```

Was this page helpful?
[Previous CREATE BRANCH](/reference/sql/commands/nessie/create-branch)[Next CREATE TAG](/reference/sql/commands/nessie/create-tag)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CREATE BRANCH](/reference/sql/commands/nessie/create-branch)[Next CREATE TAG](/reference/sql/commands/nessie/create-tag)
!
