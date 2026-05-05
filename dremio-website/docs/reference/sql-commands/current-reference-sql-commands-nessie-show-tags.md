---
url: /reference/sql/commands/nessie/show-tags
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

## Parameters[​](/reference/sql/commands/nessie/show-tags#parameters "Direct link to Parameters")
IN `source_name` String Optional
The name of the source where you want to view all tags. If a source is not specified, the one in the query context is used.
## Examples[​](/reference/sql/commands/nessie/show-tags#examples "Direct link to Examples")
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SHOW LOGS](/reference/sql/commands/nessie/show-logs)[Next VACUUM CATALOG](/reference/sql/commands/nessie/vacuum-catalog)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fnessie%2Fshow-tags%2F&_biz_t=1777951126261&_biz_i=SHOW%20TAGS%20%7C%20Dremio%20Documentation&_biz_n=1582&rnd=897011&cdn_o=a&_biz_z=1777951126262)
