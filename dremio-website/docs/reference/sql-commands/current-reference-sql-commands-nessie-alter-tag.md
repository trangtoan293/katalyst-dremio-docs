---
url: /reference/sql/commands/nessie/alter-tag
title: "ALTER TAG | Dremio Enterprise Documentation"
depth: 5
crawled_at: 65347.267798875
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * [SQL Commands for Nessie](/reference/sql/commands/nessie)
  * ALTER TAG

Version: current [26.x]
On this page
# ALTER TAG
Change the reference that the tag points to.
Syntax

```
ALTER TAG <tag_name>  
  ASSIGN { REF[ERENCE] | BRANCH | TAG | COMMIT } <identifier>  
  [ IN <source_name> ]  

```

## Parameters[​](/reference/sql/commands/nessie/alter-tag#parameters "Direct link to Parameters")
`tag_name` String
The name of the tag that you are assigning a new reference to.
* * *
ASSIGN {'{'})'{'{'})'{'}'}) REF[ERENCE] | BRANCH | TAG | COMMIT {'{'})'{'}'}'{'}'} `identifier` String
Specifies a reference to assign a tag from.
  * `REF`: Identifies a reference, which can be a branch, another tag, or a commit.
  * `BRANCH`: Identifies a branch reference where the specified tag is assigned to.
  * `TAG`: Identifies a tag reference where the specified tag is assigned to.
  * `COMMIT`: Identifies a commit reference where the specified tag is assigned to. Commit hashes must be enclosed in double quotes (for example, `“ff2fe50fef5a030c4fc8e61b252bdc33c72e2b6f929d813833d998b8368302e2”`).


* * *
IN `source_name` String Optional
The name of the source that you want to assign a tag. If not specified, the current source in the query context is used.
## Examples[​](/reference/sql/commands/nessie/alter-tag#examples "Direct link to Examples")
Assign the tag to a specific commit

```
ALTER TAG myTag  
  ASSIGN COMMIT "c7a79c74adf76649e643354c34ed69abfee5a3b070ef68cbe782a072b0a418ba"  

```

Assign the tag to a specific tag

```
ALTER TAG myTag  
  ASSIGN TAG tag1  

```

Assign the tag to a specific branch

```
ALTER TAG myTag  
  ASSIGN BRANCH myBranch  
  IN mySource  

```

Assign the tag to a specific reference

```
ALTER TAG myTag  
  ASSIGN REF tag2  

```

Was this page helpful?
[Previous ALTER BRANCH](/reference/sql/commands/nessie/alter-branch)[Next CREATE BRANCH](/reference/sql/commands/nessie/create-branch)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ALTER BRANCH](/reference/sql/commands/nessie/alter-branch)[Next CREATE BRANCH](/reference/sql/commands/nessie/create-branch)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fnessie%2Falter-tag%2F&_biz_t=1777951667298&_biz_i=ALTER%20TAG%20%7C%20Dremio%20Documentation&_biz_n=2713&rnd=63973&cdn_o=a&_biz_z=1777951667299)
