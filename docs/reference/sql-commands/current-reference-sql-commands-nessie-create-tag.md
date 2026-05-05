---
url: /reference/sql/commands/nessie/create-tag
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

## Parameters[​](/reference/sql/commands/nessie/create-tag#parameters "Direct link to Parameters")
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
## Examples[​](/reference/sql/commands/nessie/create-tag#examples "Direct link to Examples")
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CREATE FOLDER](/reference/sql/commands/nessie/create-folder)[Next DROP BRANCH](/reference/sql/commands/nessie/drop-branch)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fnessie%2Fcreate-tag%2F&_biz_t=1777951667740&_biz_i=CREATE%20TAG%20%7C%20Dremio%20Documentation&_biz_n=2717&rnd=707836&cdn_o=a&_biz_z=1777951667740)
