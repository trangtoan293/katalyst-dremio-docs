---
url: /reference/sql/commands/apache-iceberg-tables/rollback-table
title: "ROLLBACK | Dremio Documentation"
depth: 4
crawled_at: 64798.136951208
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * [SQL Commands for Apache Iceberg Tables](/reference/sql/commands/apache-iceberg-tables)
  * ROLLBACK

Version: current [26.x]
On this page
# ROLLBACK
Roll back an Iceberg table to a previous snapshot using either a timestamp or a snapshot ID. For more information about rolling back tables, see [Rolling Back Tables](/developer/data-formats/apache-iceberg/rolling-back). Users who have been assigned the `ADMIN` role, the table's owner, and users with `INSERT`, `UPDATE`, or `DELETE` privileges on the table can use the `ROLLBACK` command.
Syntax

```
ROLLBACK TABLE <table_name>  
   TO { [ SNAPSHOT '<snapshot_id>' ] | [ TIMESTAMP '<timestamp>' ] }  

```

## Parameters[​](/reference/sql/commands/apache-iceberg-tables/rollback-table#parameters "Direct link to Parameters")
`table_name` String
The path of the Iceberg table that you want to roll back.
* * *
TO {'{'})'{'{'})'{'}'}) [ SNAPSHOT '`snapshot_id`' ] | [ TIMESTAMP '`timestamp`' ] {'{'})'{'}'}'{'}'} String
Specifies whether you are rolling back to a specific snapshot or to a certain point in time:
  * `TO SNAPSHOT '`snapshot_id`'`: The snapshot ID that you want to roll back to. Must be contained in single quotes.
  * `TO TIMESTAMP '`timestamp`'`: The timestamp that you want to roll back to. If the timestamp matches a snapshot's timestamp exactly, the Iceberg table is rolled back to that snapshot. Otherwise, the table is rolled back to the last snapshot before the specified timestamp. Must be contained in single quotes.


## Examples[​](/reference/sql/commands/apache-iceberg-tables/rollback-table#examples "Direct link to Examples")
Roll back the table to the specified snapshot ID

```
ROLLBACK TABLE demo.example_table TO SNAPSHOT '2489484212521283189'  

```

Roll back the table based on the specified timestamp

```
ROLLBACK TABLE demo.example_table TO TIMESTAMP '2022-06-22 17:06:00'  

```

Was this page helpful?
[Previous OPTIMIZE TABLE](/reference/sql/commands/apache-iceberg-tables/optimize-table)[Next TRUNCATE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-truncate)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous OPTIMIZE TABLE](/reference/sql/commands/apache-iceberg-tables/optimize-table)[Next TRUNCATE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-truncate)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fapache-iceberg-tables%2Frollback-table%2F&_biz_t=1777951119036&_biz_i=ROLLBACK%20%7C%20Dremio%20Documentation&_biz_n=1566&rnd=186412&cdn_o=a&_biz_z=1777951119037)
