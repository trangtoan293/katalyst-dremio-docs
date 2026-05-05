---
url: /reference/sql/commands/apache-iceberg-tables/apache-iceberg-drop
title: "DROP | Dremio Enterprise Documentation"
depth: 4
crawled_at: 64797.852608
---

[Skip to main content](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-drop#__docusaurus_skipToContent_fallback)
[![Dremio Documentation Home Page](https://docs.dremio.com/images/Dremio-wordmark-light.svg) **Documentation**](/)
[](/dremio-cloud)
[](/)
[current [26.x]](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-drop)
  * [current [26.x]](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-drop)
  * [25.x](/25.x/reference/sql/commands/apache-iceberg-tables/apache-iceberg-drop)


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
  * [Reference](/reference)
    * [Admin CLI](/reference/admin-cli)
    * [API Reference](/reference/api)
    * [SQL Reference](/reference/sql)
      * [Data Types](/reference/sql/data-types)
      * [SQL Commands](/reference/sql/commands)
        * [SQL Commands for Apache Iceberg Tables](/reference/sql/commands/apache-iceberg-tables)
          * [COPY INTO](/reference/sql/commands/apache-iceberg-tables/copy-into-table)
          * [DELETE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-delete)
          * [DROP](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-drop)
          * [INSERT](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-insert)
          * [MERGE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-merge)
          * [OPTIMIZE TABLE](/reference/sql/commands/apache-iceberg-tables/optimize-table)
          * [ROLLBACK](/reference/sql/commands/apache-iceberg-tables/rollback-table)
          * [TRUNCATE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-truncate)
          * [UPDATE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-update)
          * [VACUUM TABLE](/reference/sql/commands/apache-iceberg-tables/vacuum-table)
        * [SQL Commands for Nessie](/reference/sql/commands/nessie)
        * [SELECT](/reference/sql/commands)
        * [ALTER FOLDER](/reference/sql/commands/alter-folder)
        * [ALTER PIPE](/reference/sql/commands/alter-pipe)
        * [ALTER SOURCE](/reference/sql/commands/alter-source)
        * [ALTER SPACE](/reference/sql/commands/alter-space)
        * [ALTER TABLE](/reference/sql/commands/alter-table)
        * [ALTER VIEW](/reference/sql/commands/alter-view)
        * [ANALYZE TABLE](/reference/sql/commands/analyze-table)
        * [CREATE PIPE](/reference/sql/commands/create-pipe)
        * [CREATE SPACE](/reference/sql/commands/create-space)
        * [CREATE TABLE](/reference/sql/commands/create-table)
        * [CREATE TABLE AS](/reference/sql/commands/create-table-as)
        * [CREATE VIEW](/reference/sql/commands/create-view)
        * [DESCRIBE PIPE](/reference/sql/commands/describe-pipe)
        * [DROP PIPE](/reference/sql/commands/drop-pipe)
        * [DROP SPACE](/reference/sql/commands/drop-space)
        * [DROP VIEW](/reference/sql/commands/drop-view)
        * [Privileges](/reference/sql/commands/rbac)
        * [Reflections](/reference/sql/commands/acceleration)
        * [Roles](/reference/sql/commands/roles)
        * [Row-Access & Column-Masking](/reference/sql/commands/row-column-policies)
        * [SHOW CREATE TABLE](/reference/sql/commands/show-create-table)
        * [SHOW CREATE VIEW](/reference/sql/commands/show-create-view)
        * [SHOW TBLPROPERTIES](/reference/sql/commands/show-table-properties)
        * [Sources](/reference/sql/commands/sources)
        * [Tables](/reference/sql/commands/tables)
        * [User-Defined Functions](/reference/sql/commands/functions)
        * [RESET QUEUE](/reference/sql/commands/reset-queue)
        * [RESET TAG](/reference/sql/commands/reset-tag)
        * [SET QUEUE](/reference/sql/commands/set-queue)
        * [SET TAG](/reference/sql/commands/set-tag)
        * [USE](/reference/sql/commands/use)
        * [Users](/reference/sql/commands/users)
        * [WITH](/reference/sql/commands/with)
      * [SQL Functions](/reference/sql/sql-functions)
      * [Reserved Words](/reference/sql/reserved-keywords)
      * [System Tables](/reference/sql/system-tables)
      * [Table Functions](/reference/sql/table-functions)
      * [Information Schema](/reference/sql/information-schema)
    * [Security Bulletins](/reference/bulletins)
  * [Help and Support](/help-support)
  * [Release Notes](/release-notes)


  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * [SQL Commands for Apache Iceberg Tables](/reference/sql/commands/apache-iceberg-tables)
  * DROP

Version: current [26.x]
On this page
# DROP
For external Nessie data sources, the DROP TABLE command logically removes a table from the source. Even though the table is removed from the catalog, it still physically exists in storage until garbage collection removes it. 
For Amazon S3 data sources, the DROP TABLE command logically removes a table from the source and physically removes all files associated with the table. After the table is dropped, it is permanently deleted and cannot be restored.
For AWS Glue data sources, the DROP TABLE command removes a table from the catalog. The datafiles are not deleted from the warehouse.
Syntax

```
DROP TABLE [ IF EXISTS ] <table_name>  

```

## Parameters[​](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-drop#parameters "Direct link to Parameters")
[ IF EXISTS ] Optional
When included, the command will succeed regardless of whether the table existed. If this clause is not specified, the command will fail if the table to be dropped does not exist.
* * *
`table_name` String
The name of the table that you want to drop.
Was this page helpful?
[Previous DELETE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-delete)[Next INSERT](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-insert)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DELETE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-delete)[Next INSERT](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-insert)
  * [Parameters](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-drop#parameters)


![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fapache-iceberg-tables%2Fapache-iceberg-drop%2F&_biz_t=1777951117858&_biz_i=DROP%20%7C%20Dremio%20Documentation&_biz_n=1562&rnd=229108&cdn_o=a&_biz_z=1777951117858)
