---
url: /reference/sql/commands/nessie/show-tags
slug: /reference/sql/commands/nessie/show-tags
title: "SHOW TAGS | Dremio Enterprise Documentation"
depth: 4
crawled_at: 64805.884865416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * [SQL Commands for Nessie](/reference/sql/commands/nessie)
  * SHOW TAGS

Version: current [26.x]
On this page
# SHOW TAGS
Show all the tags that are available in a source and within a specific reference.
Syntax

```
SHOW TAGS  
  [ IN <source_name> ]  

```

## Parameters​
IN `source_name` String Optional
The name of the source where you want to view all tags. If a source is not specified, the one in the query context is used.
## Examples​
Show all the branches in the current source

```
SHOW TAGS  

```

Show all the branches in the specified source

```
SHOW TAGS  
IN mySource  

```

Was this page helpful?
[Previous SHOW LOGS](/reference/sql/commands/nessie/show-logs)[Next VACUUM CATALOG](/reference/sql/commands/nessie/vacuum-catalog)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SHOW LOGS](/reference/sql/commands/nessie/show-logs)[Next VACUUM CATALOG](/reference/sql/commands/nessie/vacuum-catalog)
!
