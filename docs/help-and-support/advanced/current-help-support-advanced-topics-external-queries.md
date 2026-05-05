---
url: /help-support/advanced-topics/external-queries
slug: /help-support/advanced-topics/external-queries
title: "Querying Relational-Database Sources Directly | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64060.645501416
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Advanced Topics](/help-support/advanced-topics)
  * Querying Relational-Database Sources Directly

Version: current [26.x]
# Querying Relational-Database Sources Directly
Dremio enables users to run SQL commands directly against relational-database sources. These _external queries_ , so called because they are passed by and run outside of Dremio, use syntax that is native to the relational-database sources that they run on. They can be SQL commands that are not supported directly in Dremio or that are too complex for Dremio convert to syntax that it can run.
Users can run external queries against relational-database sources of these types:
  * Amazon Redshift
  * IBM Db2
  * Microsoft Azure Data Explorer
  * Microsoft Azure Synapse Analytics
  * Microsoft SQL Server
  * MySQL
  * Oracle
  * PostgreSQL
  * Snowflake
  * Teradata


  * Dremio supports only `SELECT` SQL statements in external queries.
  * Dremio does not support batched `SELECT` statements that return multiple result sets.


To execute external queries, users need the EXTERNAL QUERY privilege.
  * For the steps of granting this privilege through the Dremio console, see [Granting Privileges](/security/rbac)
  * For the syntax of granting this privilege through an SQL command, see [GRANT/REVOKE](/reference/sql/commands/rbac).
  * For the syntax of granting this privilege through a REST API, see [GRANTS](/reference/api/catalog/grants). The type of catalog object that this privilege can be granted on is referred to as an ARP_SOURCE in the API reference.


With this privilege, users can access all types of data assets that might exist in external sources, including databases and tables. Therefore, Dremio recommends that you restrict access to external sources. You can do so by, for example, granting only read-only access to datasets.
For the SQL syntax of external queries, see [SELECT](/reference/sql/commands).
Dremio clears permissions, formats, and data Reflections for all views created from the results of external queries when you update the metadata for the data source.
Was this page helpful?
[Previous Hash Aggregation Spilling](/help-support/advanced-topics/hash-agg-spilling)[Next Ranger-Based Authorization](/help-support/advanced-topics/hive-ranger)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Hash Aggregation Spilling](/help-support/advanced-topics/hash-agg-spilling)[Next Ranger-Based Authorization](/help-support/advanced-topics/hive-ranger)
!
