---
url: /developer/data-formats/apache-iceberg/concurrency
slug: /developer/data-formats/apache-iceberg/concurrency
title: "Concurrency in Iceberg Tables | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64216.798729875
---

  * [Dremio Enterprise Home](/)
  * [Developer Guide](/developer)
  * [File and Table Formats](/developer/data-formats)
  * [Apache Iceberg](/developer/data-formats/apache-iceberg)
  * Concurrency in Iceberg Tables

Version: current [26.x]
# Concurrency in Iceberg Tables
Dremio supports running most combinations of concurrent SQL commands on Iceberg tables. To take a few examples, two [INSERT](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-insert) commands can run concurrently on the same table, as can two [SELECT](/reference/sql/commands) commands, or an UPDATE and an [ALTER](/reference/sql/commands/alter-table) command.
However, Apache Iceberg’s Serializable Isolation level with non-locking table semantics can result in scenarios in which write collisions occur. In these circumstances, the SQL command that finishes second fails with an error. Such failures occur only for a subset of combinations of two SQL commands running concurrently on a single Iceberg table.
This table shows which types of SQL commands can and cannot run concurrently with other types on a single Iceberg table:
  * Y: Running these two types of commands concurrently is supported.
  * N: Running these two types of commands concurrently is not supported. The second command to complete fails with an error.
  * D: Running two [OPTIMIZE](/reference/sql/commands/apache-iceberg-tables/optimize-table) commands concurrently is supported if they run against different table partitions.

![SQL commands that cause concurrency conflicts](https://docs.dremio.com/images/concurrency-table.png)
Was this page helpful?
[Previous Apache Iceberg](/developer/data-formats/apache-iceberg)[Next Copying Data Into Apache Iceberg Tables](/developer/data-formats/apache-iceberg/copying-data-into-tables)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Apache Iceberg](/developer/data-formats/apache-iceberg)[Next Copying Data Into Apache Iceberg Tables](/developer/data-formats/apache-iceberg/copying-data-into-tables)
!
