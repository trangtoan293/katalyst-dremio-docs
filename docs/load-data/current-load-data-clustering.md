---
url: /load-data/clustering
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
## Recommendations[​](/load-data/clustering#recommendations "Direct link to Recommendations")
We recommend that you first tune Iceberg tables by clustering them, as clustering provides a general-purpose file layout that enables both efficient reads and writes. Note that you may not see immediate benefits from clustering if the tables are too small.
A common pattern is to choose clustered columns which are either primary keys of the table or commonly used for query filters. These column choices will effectively filter the working dataset thereby improving query times. When ordering the clustering columns, order them in precedence of filtering or cardinality with the most commonly queried columns of highest cardinality first.
See the [`CREATE TABLE`](/reference/sql/commands/create-table) and [`ALTER TABLE`](/reference/sql/commands/alter-table) pages for the `CLUSTER BY` SQL syntax.
## Supported Data Types for Clustered Columns[​](/load-data/clustering#supported-data-types-for-clustered-columns "Direct link to Supported Data Types for Clustered Columns")
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


## CTAS Behavior and Clustering[​](/load-data/clustering#ctas-behavior-and-clustering "Direct link to CTAS Behavior and Clustering")
When running a `CREATE TABLE AS` statement with clustering, the data is written in an unordered way. For the best performance, you should run an `OPTIMIZE TABLE` command after creating a table using a `CREATE TABLE AS` statement.
## Limitations[​](/load-data/clustering#limitations "Direct link to Limitations")
  * `OPTIMIZE TABLE` commands on clustered tables must be run from Dremio to ensure that clustering is enforced.
  * Clustering Keys must be columns in the table. Transformations are not supported.


Was this page helpful?
[Previous Autoingest Data into Apache Iceberg](/load-data/autoingestion)[Next Build Data Products](/data-products)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Autoingest Data into Apache Iceberg](/load-data/autoingestion)[Next Build Data Products](/data-products)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fload-data%2Fclustering%2F&_biz_t=1777950382851&_biz_i=Clustering%20%7C%20Dremio%20Documentation&_biz_n=141&rnd=804392&cdn_o=a&_biz_z=1777950382851)
