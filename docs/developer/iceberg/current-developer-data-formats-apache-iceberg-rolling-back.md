---
url: /developer/data-formats/apache-iceberg/rolling-back
slug: /developer/data-formats/apache-iceberg/rolling-back
title: "Rolling Back Tables | Dremio Enterprise Documentation"
depth: 4
crawled_at: 64777.091789333
---

Skip to main content
[![Dremio Documentation Home Page](https://docs.dremio.com/images/Dremio-wordmark-light.svg) **Documentation**](/)


[current [26.x]](/developer/data-formats/apache-iceberg/rolling-back)
  * [current [26.x]](/developer/data-formats/apache-iceberg/rolling-back)
  * 25.x


[Start for Free](https://www.dremio.com/get-started/)
Search`⌘``K`
  * [Overview](/)
  * [Get Started with Dremio](/get-started)
  * [What is Dremio?](/what-is-dremio)
  * [Deploy Dremio](/deploy-dremio)
  * [Manage Sources](/data-sources)
  * [Load Data](/load-data)
  * [Build Data Products](/data-products)
  * [Connect Client Applications](/client-applications)
  * [Accelerate Queries](/acceleration)
  * [Security and Compliance](/security)
  * [Administration](/admin)
  * [Developer Guide](/developer)
    * [Add a Custom Source with ARP Framework](/developer/arp-connector)
    * [Develop Applications with Arrow Flight](/developer/arrow-flight)
    * [Develop Applications with Arrow Flight SQL](/developer/arrow-flight-sql)
    * [Develop Applications with Python](/developer/python)
    * [Visual Studio Code](/developer/vs-code)
    * [File and Table Formats](/developer/data-formats)
      * [Apache Iceberg](/developer/data-formats/apache-iceberg)
        * [Concurrency in Iceberg Tables](/developer/data-formats/apache-iceberg/concurrency)
        * [Copying Data Into Apache Iceberg Tables](/developer/data-formats/apache-iceberg/copying-data-into-tables)
        * [Expiring Snapshots of Apache Iceberg Tables](/developer/data-formats/apache-iceberg/expiring-snapshots)
        * Rolling Back Tables
        * [Supported Properties of Apache Iceberg Tables](/developer/data-formats/apache-iceberg/table-properties)
        * [Table Maintenance and Optimization](/developer/data-formats/apache-iceberg/table-maintenance-optimization)
        * [Transforming Data on Load](/developer/data-formats/apache-iceberg/copy-into-transformations)
      * [Parquet](/developer/data-formats/parquet)
      * [Delta Lake](/developer/data-formats/delta-lake)
      * [Formatting Data to a Table](/developer/data-formats/table)
    * [Dremio MCP Server](/developer/mcp-server)
  * [Reference](/reference)
  * [Help and Support](/help-support)
  * [Release Notes](/release-notes)


  * [Dremio Enterprise Home](/)
  * [Developer Guide](/developer)
  * [File and Table Formats](/developer/data-formats)
  * [Apache Iceberg](/developer/data-formats/apache-iceberg)
  * Rolling Back Tables

Version: current [26.x]
On this page
# Rolling Back Tables
Dremio integrates support for [Apache Iceberg](/developer/data-formats/apache-iceberg) tables, an open-source data lakehouse table format designed for petabyte-scale tables. Iceberg tables bring the reliability and simplicity of SQL tables to the data lakehouse. Iceberg tables also function in a fully-open and accessible manner that allows multiple engines (such as Dremio, Spark, etc.) to operate on the same dataset.
When you edit an Iceberg table using data definition language (DDL) or data manipulation language (DML), the new state of the table and its associated data files are tracked via a new [catalog](/developer/data-formats/apache-iceberg) contains a root pointer for each Iceberg table identifying the current snapshot. In this environment, you can roll back a table, meaning the root pointer can point to an older snapshot of an Iceberg table. For example, you may discover an error with some recent data updates that were made to your company's sales table. You can roll back the table to its last state before the incorrect updates were made. The rollback functionality supports either a specific time (via the timestamp parameter) or snapshot (via a specified snapshot ID).
## How Dremio Rolls Back a Table​
Dremio provides the rollback functionality to help you roll back your Iceberg tables. You can use this functionality in conjunction with either a snapshot ID or a timestamp reference to roll back an Iceberg table to a previous state.
### Rolling Back to a Previous Snapshot​
When you roll back an Iceberg table using a snapshot, you are actually creating a new snapshot containing the identical state as the referenced snapshot. For example, your sales table contains the following snapshots: (1) first_snapshot, (2) second_snapshot, and (3) third_snapshot. The first snapshot represents the table when it was created and the third snapshot represents the current state of the table. All the snapshots are accessible for future queries that use time travel statements. Using the rollback functionality can revert all the changes made to the table between the first_snapshot and the third_snapshot, including the schema evolution.
Specifying an invalid snapshot ID for an Iceberg table results in an error. You can retrieve a list of valid snapshot IDs by [querying a table's history metadata](/reference/sql/commands).
### Rolling Back to a Specific Point in Time​
When you roll back an Iceberg table using a timestamp (date and time values), you are reverting the table to a previous snapshot based on your specified time. Specifically, if the timestamp matches a snapshot's timestamp exactly, the Iceberg table is rolled back to that snapshot. Otherwise, the table is rolled back to the last snapshot before the specified timestamp.
For guidance on using the rollback functionality in your queries, see [Rollback Table](/reference/sql/commands/apache-iceberg-tables/rollback-table).
## Limitations​
  * Dremio caches query plans for recently executed statements to improve query performance. However, running a rollback query using a snapshot ID invalidates all cached query plans that reference the affected table.
  * If a table is running DML operations when a rollback query using a snapshot ID executes, the DML operations can fail to complete because the current snapshot ID has changed to a new value due to the rollback query. However, `SELECT` queries that are in the midst of executing can be completed.


Was this page helpful?
[Previous Expiring Snapshots of Apache Iceberg Tables](/developer/data-formats/apache-iceberg/expiring-snapshots)[Next Supported Properties of Apache Iceberg Tables](/developer/data-formats/apache-iceberg/table-properties)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Expiring Snapshots of Apache Iceberg Tables](/developer/data-formats/apache-iceberg/expiring-snapshots)[Next Supported Properties of Apache Iceberg Tables](/developer/data-formats/apache-iceberg/table-properties)
  * How Dremio Rolls Back a Table
    * Rolling Back to a Previous Snapshot
    * Rolling Back to a Specific Point in Time
  * Limitations


!
