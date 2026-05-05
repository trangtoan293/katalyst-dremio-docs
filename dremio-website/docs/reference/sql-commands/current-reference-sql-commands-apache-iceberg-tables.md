---
url: /reference/sql/commands/apache-iceberg-tables
title: "SQL Commands for Apache Iceberg Tables | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64250.405738458
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * SQL Commands for Apache Iceberg Tables

Version: current [26.x]
On this page
# SQL Commands for Apache Iceberg Tables
Apache Iceberg is a table format that solves challenges with traditional file-formatted tables in data lakes. It is rapidly becoming an industry standard for managing data in data lakes. Iceberg introduces capabilities that enable multiple applications to work together on the same data in a transactionally consistent manner and defines additional information on the state of datasets as they evolve and change over time.
Iceberg enables Dremio to provide powerful, SQL database-like functionality on data lakes using industry-standard SQL commands. Dremio currently supports Iceberg v2 tables, offering a solid foundation for building and managing data lakehouse tables. Certain features, such as Iceberg native branching and tagging and the UUID data type, are not yet supported.
Before you attempt to run SQL commands on Iceberg tables, follow these prerequisite steps:
  * Ensure that you are using AWS Glue, Amazon S3, Hive, or Nessie as a datasource.
  * Ensure that any existing Apache Iceberg tables that you want to use in your datasource are at Apache Iceberg version 2.


## Supported SQL commands[​](/reference/sql/commands/apache-iceberg-tables#supported-sql-commands "Direct link to Supported SQL commands")
  * [ALTER](/reference/sql/commands/alter-table)
  * [COPY INTO](/reference/sql/commands/apache-iceberg-tables/copy-into-table)
  * [CREATE](/reference/sql/commands/create-table)
  * [DELETE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-delete)
  * [DROP](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-drop)
  * [INSERT](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-insert)
  * [MERGE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-merge)
  * [OPTIMIZE](/reference/sql/commands/apache-iceberg-tables/optimize-table)
  * [ROLLBACK](/reference/sql/commands/apache-iceberg-tables/rollback-table)
  * [SELECT](/reference/sql/commands)
  * [TRUNCATE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-truncate)
  * [UPDATE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-update)
  * [VACUUM](/reference/sql/commands/apache-iceberg-tables/vacuum-table)
  * [SHOW TBLPROPERTIES](/reference/sql/commands/show-table-properties)


Was this page helpful?
[Previous SQL Commands](/reference/sql/commands)[Next COPY INTO](/reference/sql/commands/apache-iceberg-tables/copy-into-table)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SQL Commands](/reference/sql/commands)[Next COPY INTO](/reference/sql/commands/apache-iceberg-tables/copy-into-table)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fapache-iceberg-tables%2F&_biz_t=1777950570459&_biz_i=SQL%20Commands%20for%20Apache%20Iceberg%20Tables%20%7C%20Dremio%20Documentation&_biz_n=485&rnd=796838&cdn_o=a&_biz_z=1777950570459)
