---
url: /reference/sql/commands/nessie/create-tag
slug: /reference/sql/commands/nessie/create-tag
title: "CREATE TAG | Dremio Enterprise Documentation"
depth: 5
crawled_at: 65347.627016208
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * [SQL Commands for Nessie](/reference/sql/commands/nessie)
  * CREATE TAG

Version: current [26.x]
On this page
# CREATE TAG
Create a tag for a reference.
Syntax

```
CREATE TAG [ IF NOT EXISTS ] <tag_name>  
   [ AT { REF[ERENCE] | BRANCH | TAG | COMMIT } <refValue> ]  
   [ IN <source_name> ]  

```

## Parameters​
[ IF NOT EXISTS ] Optional
If you include this optional clause, the command runs regardless of whether the tag exists and you receive a summary indicating whether the tag could be created. If this clause is not specified, the command fails if the tag to be created already exists.
* * *
`tag_name` String
The name of the tag that you are creating. If a source is not specified, the tag is created in the source specified in the query context.
* * *
AT {'{'})'{'{'})'{'}'}) REF[ERENCE] | BRANCH | TAG | COMMIT {'{'})'{'}'}'{'}'} `reference_name` String Optional
Specifies the reference where you want the new tag to be created from. When this parameter is omitted, the current reference is used.
  * `REF`: Identifies a specific branch, tag, or commit.
  * `BRANCH`: Identifies a specific branch.
  * `TAG`: Identifies a specific tag.
  * `COMMIT`: Identifies a specific commit. Commit hashes must be enclosed in double quotes (for example, `“ff2fe50fef5a030c4fc8e61b252bdc33c72e2b6f929d813833d998b8368302e2”`).


* * *
IN `source_name` String Optional
The name of the source that you want to create a tag in. If not specified, the current source in the query context is used.
## Examples​
Create a tag

```
CREATE TAG myTag  

```

Create a tag at the specified commit

```
CREATE TAG commitTag  
  AT COMMIT "c7a79c74adf76649e643354c34ed69abfee5a3b070ef68cbe782a072b0a418ba"  

```

Create a tag at the specified branch in the specified source

```
CREATE TAG myTag  
  AT BRANCH myBranch  
  IN mySource  

```

Was this page helpful?
[Previous CREATE FOLDER](/reference/sql/commands/nessie/create-folder)[Next DROP BRANCH](/reference/sql/commands/nessie/drop-branch)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CREATE FOLDER](/reference/sql/commands/nessie/create-folder)[Next DROP BRANCH](/reference/sql/commands/nessie/drop-branch)
!
