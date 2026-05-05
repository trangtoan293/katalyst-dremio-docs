---
url: /reference/sql/commands/drop-pipe
slug: /reference/sql/commands/drop-pipe
title: "DROP PIPE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64250.737222083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * DROP PIPE

Version: current [26.x]
On this page
# DROP PIPE Enterprise
Removes the specified pipe from a source in Dremio. Dropping a pipe does not change any configuration settings for the source. This command only applies to Apache Iceberg tables.
Syntax

```
DROP PIPE <pipe_name>  

```

## Parameters​
`pipe_name` String
The unique name of the pipe to drop.
## Examples​
Dropping a pipe

```
DROP PIPE Example_pipe  

```

Was this page helpful?
[Previous DESCRIBE PIPE](/reference/sql/commands/describe-pipe)Next DROP SPACE
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DESCRIBE PIPE](/reference/sql/commands/describe-pipe)Next DROP SPACE
!
