---
url: /reference/sql/commands/apache-iceberg-tables/apache-iceberg-truncate
title: "TRUNCATE | Dremio Documentation"
depth: 4
crawled_at: 64798.101611583
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * [SQL Commands for Apache Iceberg Tables](/reference/sql/commands/apache-iceberg-tables)
  * TRUNCATE

Version: current [26.x]
On this page
# TRUNCATE
The TRUNCATE command deletes all rows from a table with minimal computation by restating the table with no data files.
Syntax

```
TRUNCATE [ TABLE ] [ IF EXISTS ] <table_path>.<table_name>  

```

## Parameters[​](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-truncate#parameters "Direct link to Parameters")
TABLE String Optional
Specifies that the object to be truncated is a table. If not used, the Dremio Cloud still recognizes that the object is a table. This option is for consistency with other query engines that can truncate the same tables that Dremio Cloud has access to on the datasource.
* * *
[ IF EXISTS ] String Optional
Prevents the datasource from returning an error message if a table with the same definition does not exist in the specified location.
* * *
`table_name` String
The name of the table that you want to truncate.
* * *
AT BRANCH `branch_name` String Optional
Specifies the branch of the table that you want to truncate. When this parameter is omitted, the current branch is used.
Was this page helpful?
[Previous ROLLBACK](/reference/sql/commands/apache-iceberg-tables/rollback-table)[Next UPDATE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-update)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ROLLBACK](/reference/sql/commands/apache-iceberg-tables/rollback-table)[Next UPDATE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-update)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fapache-iceberg-tables%2Fapache-iceberg-update%2F&_biz_t=1777951118541&_biz_i=UPDATE%20%7C%20Dremio%20Documentation&_biz_n=1564&rnd=805435&cdn_o=a&_biz_z=1777951118548)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fapache-iceberg-tables%2Fapache-iceberg-truncate%2F&_biz_t=1777951118548&_biz_i=TRUNCATE%20%7C%20Dremio%20Documentation&_biz_n=1565&rnd=141796&cdn_o=a&_biz_z=1777951118548)
