---
url: /reference/sql/commands/nessie/show-logs
slug: /reference/sql/commands/nessie/show-logs
title: "SHOW LOGS | Dremio Enterprise Documentation"
depth: 5
crawled_at: 65353.006857041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * [SQL Commands for Nessie](/reference/sql/commands/nessie)
  * SHOW LOGS

Version: current [26.x]
On this page
# SHOW LOGS
Show the commit history or log of a source within the selected reference. This command is similar to the 
Syntax

```
SHOW LOG[S]  
   [ AT { REF[ERENCE] | BRANCH | TAG | COMMIT } <reference_name> ]  
   [ IN <source_name> ]  

```

## Parameters​
AT ( REF[ERENCE] | BRANCH | TAG | COMMIT ) `reference_name` String Optional
Specifies the reference for which you want to show the commit history. When this parameter is omitted, the current reference is used.
  * `REF`: Identifies a specific branch, tag, or commit.
  * `BRANCH`: Identifies the branch.
  * `TAG`: Identifies the tag.
  * `COMMIT`: Identifies the commit. Commit hashes must be enclosed in double quotes (for example, `“ff2fe50fef5a030c4fc8e61b252bdc33c72e2b6f929d813833d998b8368302e2”`).


* * *
IN `source_name` String Optional
The name of the Nessie source where the reference exists. When this parameter is omitted, the current Nessie source in the query context is used.
## Examples​
Show the commit history of the current source

```
SHOW LOGS  

```

Show the commit history for the specified branch

```
SHOW LOGS  
  AT BRANCH myBranch  

```

Show the commit history from the specified commit in the specified source

```
SHOW LOGS  
  AT COMMIT "c7a79c74adf76649e643354c34ed69abfee5a3b070ef68cbe782a072b0a418ba"  
  in mySource  

```

Was this page helpful?
[Previous SHOW BRANCHES](/reference/sql/commands/nessie/show-branches)[Next SHOW TAGS](/reference/sql/commands/nessie/show-tags)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SHOW BRANCHES](/reference/sql/commands/nessie/show-branches)[Next SHOW TAGS](/reference/sql/commands/nessie/show-tags)
!
