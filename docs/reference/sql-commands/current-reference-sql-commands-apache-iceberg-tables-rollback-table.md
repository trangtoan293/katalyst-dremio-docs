---
url: /reference/sql/commands/apache-iceberg-tables/rollback-table
slug: /reference/sql/commands/apache-iceberg-tables/rollback-table
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
Roll back an Iceberg table to a previous snapshot using either a timestamp or a snapshot ID. For more information about rolling back tables, see Rolling Back Tables. Users who have been assigned the `ADMIN` role, the table's owner, and users with `INSERT`, `UPDATE`, or `DELETE` privileges on the table can use the `ROLLBACK` command.
Syntax

```
ROLLBACK TABLE <table_name>  
   TO { [ SNAPSHOT '<snapshot_id>' ] | [ TIMESTAMP '<timestamp>' ] }  

```

## Parameters​
`table_name` String
The path of the Iceberg table that you want to roll back.
* * *
TO {'{'})'{'{'})'{'}'}) [ SNAPSHOT '`snapshot_id`' ] | [ TIMESTAMP '`timestamp`' ] {'{'})'{'}'}'{'}'} String
Specifies whether you are rolling back to a specific snapshot or to a certain point in time:
  * `TO SNAPSHOT '`snapshot_id`'`: The snapshot ID that you want to roll back to. Must be contained in single quotes.
  * `TO TIMESTAMP '`timestamp`'`: The timestamp that you want to roll back to. If the timestamp matches a snapshot's timestamp exactly, the Iceberg table is rolled back to that snapshot. Otherwise, the table is rolled back to the last snapshot before the specified timestamp. Must be contained in single quotes.


## Examples​
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
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous OPTIMIZE TABLE](/reference/sql/commands/apache-iceberg-tables/optimize-table)[Next TRUNCATE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-truncate)
!
