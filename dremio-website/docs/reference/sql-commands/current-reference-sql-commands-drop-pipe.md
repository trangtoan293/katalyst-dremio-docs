---
url: /reference/sql/commands/drop-pipe
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

## Parameters[​](/reference/sql/commands/drop-pipe#parameters "Direct link to Parameters")
`pipe_name` String
The unique name of the pipe to drop.
## Examples[​](/reference/sql/commands/drop-pipe#examples "Direct link to Examples")
Dropping a pipe

```
DROP PIPE Example_pipe  

```

Was this page helpful?
[Previous DESCRIBE PIPE](/reference/sql/commands/describe-pipe)[Next DROP SPACE](/reference/sql/commands/drop-space)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DESCRIBE PIPE](/reference/sql/commands/describe-pipe)[Next DROP SPACE](/reference/sql/commands/drop-space)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fdrop-pipe%2F&_biz_t=1777950571762&_biz_i=DROP%20PIPE%20%7C%20Dremio%20Documentation&_biz_n=496&rnd=403077&cdn_o=a&_biz_z=1777950571763)
