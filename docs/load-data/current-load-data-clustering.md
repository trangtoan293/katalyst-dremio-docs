---
url: /load-data/clustering
slug: /load-data/clustering
title: "Clustering | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64061.362527291
---

  * [Dremio Enterprise Home](/)
  * [Load Data](/load-data)
  * Clustering

Version: current [26.x]
On this page
# Clustering Enterprise
Clustered Iceberg tables in Dremio provide a more intuitive data layout with comparable performance characteristics to Iceberg Partitioning.
Clustering sorts individual records in data files based on the clustered columns provided in the `CREATE TABLE` or `ALTER TABLE` statement. The data file level clustering of data allows Parquet metadata to be used in query planning and execution to reduce the amount of data scanned as part of the query. In addition, clustering eliminates common problems with partitioned data, such as over-partitioned tables and partition skew.
## Recommendations​
We recommend that you first tune Iceberg tables by clustering them, as clustering provides a general-purpose file layout that enables both efficient reads and writes. Note that you may not see immediate benefits from clustering if the tables are too small.
A common pattern is to choose clustered columns which are either primary keys of the table or commonly used for query filters. These column choices will effectively filter the working dataset thereby improving query times. When ordering the clustering columns, order them in precedence of filtering or cardinality with the most commonly queried columns of highest cardinality first.
See the [`CREATE TABLE`](/reference/sql/commands/create-table) and [`ALTER TABLE`](/reference/sql/commands/alter-table) pages for the `CLUSTER BY` SQL syntax.
## Supported Data Types for Clustered Columns​
Dremio supports clustered columns of the following data types:
  * DECIMAL
  * INT
  * BIGINT
  * FLOAT
  * DOUBLE
  * VARCHAR
  * VARBINARY
  * DATE
  * TIME
  * TIMESTAMP


## CTAS Behavior and Clustering​
When running a `CREATE TABLE AS` statement with clustering, the data is written in an unordered way. For the best performance, you should run an `OPTIMIZE TABLE` command after creating a table using a `CREATE TABLE AS` statement.
## Limitations​
  * `OPTIMIZE TABLE` commands on clustered tables must be run from Dremio to ensure that clustering is enforced.
  * Clustering Keys must be columns in the table. Transformations are not supported.


Was this page helpful?
[Previous Autoingest Data into Apache Iceberg](/load-data/autoingestion)[Next Build Data Products](/data-products)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Autoingest Data into Apache Iceberg](/load-data/autoingestion)[Next Build Data Products](/data-products)
!
