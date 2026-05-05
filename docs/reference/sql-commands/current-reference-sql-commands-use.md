---
url: /reference/sql/commands/use
title: "USE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64257.148446041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * USE

Version: current [26.x]
On this page
# USE
Specify or clear the context for the query session. A Nessie source needs to be configured for this command to work. For information, see [Adding a Nessie Source](/data-sources/lakehouse-catalogs/nessie#configuring-nessie-as-a-source).
In the SQL Runner, the USE command only works with multi-statement SQL commands and scripts. USE also does not apply to table references in saved views.
Syntax

```
USE [ { <path> | { REF[ERENCE] | BRANCH | TAG | COMMIT } <reference_name> }  
 [ IN <source_name> ] ]  

```

## Parameters[​](/reference/sql/commands/use#parameters "Direct link to Parameters")
`path` String Optional
The path that you want to use. By not specifying any parameters, you can clear the context for the query session.
* * *
{'{'})'{'{'})'{'}'}) REF[ERENCE] | BRANCH | TAG | COMMIT {'{'})'{'}'}'{'}'} `reference_name` String Optional
You can also use these Nessie references to inform the session:
  * `REF`: Changes the reference to the specified branch, tag, or commit.
  * `BRANCH`: Changes the reference to the specified branch.
  * `TAG`: Changes the reference to the specified tag.
  * `COMMIT`: Changes the reference to the specified commit. Commit hashes must be enclosed in double quotes (for example, `“ff2fe50fef5a030c4fc8e61b252bdc33c72e2b6f929d813833d998b8368302e2”`).


* * *
IN `source_name` String Optional
The name of the Nessie source where the reference exists. When this parameter is omitted, the current Nessie source in the query context is used.
## Examples[​](/reference/sql/commands/use#examples "Direct link to Examples")
Clear the context for the query session

```
USE;  

```

Each query run after this command in the same session will assume the specified path as the context

```
USE Samples."samples.dremio.com";  

```

Use the specified branch as the reference for the current query session

```
USE BRANCH myBranch  
   IN mySource;  

```

Was this page helpful?
[Previous SET TAG](/reference/sql/commands/set-tag)[Next Users](/reference/sql/commands/users)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SET TAG](/reference/sql/commands/set-tag)[Next Users](/reference/sql/commands/users)
