---
url: /developer/data-formats/apache-iceberg/expiring-snapshots
slug: /developer/data-formats/apache-iceberg/expiring-snapshots
title: "Expiring Snapshots of Apache Iceberg Tables | Dremio Documentation"
depth: 4
crawled_at: 64776.724925583
---

  * [Dremio Enterprise Home](/)
  * [Developer Guide](/developer)
  * [File and Table Formats](/developer/data-formats)
  * [Apache Iceberg](/developer/data-formats/apache-iceberg)
  * Expiring Snapshots of Apache Iceberg Tables

Version: current [26.x]
# Expiring Snapshots of Apache Iceberg Tables
Each write to an Iceberg table creates a snapshot of that table. A snapshot is a timestamped version of a table.
You can query snapshots by using time travel queries. You can also rollback a table to any snapshot.
As snapshots accumulate, the data files that are unique to them take up more and more storage. Also, the more snapshots a table has, the greater is the size of its metadata. You can "expire" snapshots to delete the data files that are unique to them and to remove them from table metadata. It is recommended that you expire them regularly.
Expired snapshots are no longer available for time travel queries.
Only data files that are unique to a snapshot are deleted immediately when that snapshot is expired. Data files that are also used by other, active snapshots are not deleted, so that those snapshots can still be queried with time travel queries.
Expiring a snapshot also deletes other files related to it, such as the manifest file, manifest list file, and partition stats files.
For the SQL command to expire snapshots, see [VACUUM TABLE](/reference/sql/commands/apache-iceberg-tables/vacuum-table).
Was this page helpful?
[Previous Copying Data Into Apache Iceberg Tables](/developer/data-formats/apache-iceberg/copying-data-into-tables)Next Rolling Back Tables
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Copying Data Into Apache Iceberg Tables](/developer/data-formats/apache-iceberg/copying-data-into-tables)Next Rolling Back Tables
