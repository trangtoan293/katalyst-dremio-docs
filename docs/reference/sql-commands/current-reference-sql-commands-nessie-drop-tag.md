---
url: /reference/sql/commands/nessie/drop-tag
slug: /reference/sql/commands/nessie/drop-tag
title: "DROP TAG | Dremio Enterprise Documentation"
depth: 5
crawled_at: 65347.4605275
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * [SQL Commands for Nessie](/reference/sql/commands/nessie)
  * DROP TAG

Version: current [26.x]
On this page
# DROP TAG
Removes a tag from a Nessie source.
Syntax

```
DROP TAG [ IF EXISTS ] <tag_name>  
  { AT COMMIT <commit_hash> | FORCE }  
  [ IN <source_name> ]  

```

## Parameters​
[ IF EXISTS ] Optional
If you include this optional clause, the command succeeds regardless of whether the tag existed. If this clause is not specified, the command fails if the tag to be dropped does not exist.
* * *
`tag_name` String
The name of the tag that you are dropping.
* * *
AT COMMIT `commit_hash` | FORCE String
Use the `AT COMMIT` parameter when you want to specify the exact commit hash that the tag is expected to be at. This is helpful to prevent the tag from being dropped if it was modified unexpectedly. Commit hashes must be enclosed in double quotes (for example, `“ff2fe50fef5a030c4fc8e61b252bdc33c72e2b6f929d813833d998b8368302e2”`).
Use the `FORCE` parameter when you want to drop the tag even if it has been changed.
* * *
IN `source_name` String Optional
The name of the source containing the tag that you want to drop. If not specified, the current source in the query context is used.
## Examples​
Drop a tag at the specified commit

```
DROP TAG myTag  
  AT COMMIT "ff2fe50fef5a030c4fc8e61b252bdc33c72e2b6f929d813833d998b8368302e2"  

```

Use the FORCE parameter to drop the specified tag

```
DROP TAG myTag  
  FORCE  

```

Was this page helpful?
[Previous DROP BRANCH](/reference/sql/commands/nessie/drop-branch)[Next MERGE BRANCH](/reference/sql/commands/nessie/merge-branch)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DROP BRANCH](/reference/sql/commands/nessie/drop-branch)[Next MERGE BRANCH](/reference/sql/commands/nessie/merge-branch)
!
