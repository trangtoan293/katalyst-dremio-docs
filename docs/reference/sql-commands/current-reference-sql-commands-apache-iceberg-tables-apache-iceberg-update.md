---
url: /reference/sql/commands/apache-iceberg-tables/apache-iceberg-update
title: "UPDATE | Dremio Enterprise Documentation"
depth: 4
crawled_at: 64798.209533083
---

[Skip to main content](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-update#__docusaurus_skipToContent_fallback)
[![Dremio Documentation Home Page](https://docs.dremio.com/images/Dremio-wordmark-light.svg) **Documentation**](/)
[](/dremio-cloud)
[](/)
[current [26.x]](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-update)
  * [current [26.x]](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-update)
  * [25.x](/25.x/reference/sql/commands/apache-iceberg-tables/apache-iceberg-update)


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
  * UPDATE

Version: current [26.x]
On this page
# UPDATE
Update rows in a table.
Dremio supports reading positional deletes and equality deletes for Apache Iceberg v2 tables. Dremio performs writes using copy-on-write by default and supports writes using merge-on-read if specified in the [Iceberg table properties](/developer/data-formats/apache-iceberg/table-properties).
Syntax

```
UPDATE <table_name>  
  [ AT { REF[ERENCE] | BRANCH } <reference_name> ]  
  [ AS <alias> ]  
  SET <column1_name> = <value1> [, <column2_name> = <value2> ... ]  
[ FROM <additional_table_or_query> [, <additional_table_or_query> ]  
[ WHERE where_conditions ]  

```

## Parameters[​](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-update#parameters "Direct link to Parameters")
`table_name` String
The name of the table with data that you want to update.
* * *
AT {'{'})'{'{'})'{'}'}) REF[ERENCE] | BRANCH {'{'})'{'}'}'{'}'} `reference_name` String Optional
Only for Nessie sources. Specifies the reference at which you want the table to be updated. When this parameter is omitted, the current branch is used.
REF: Identifies the specific reference.
BRANCH: Identifies the specific branch.
If `AT BRANCH` is specified, it will override the session context for the entire query including the `SELECT` portions.
If you specify the reference for the target table, you must also specify the reference for the source table.
* * *
AS `alias`
The alias of the table.
* * *
SET `column_name1` = `value1` [, `column_name2` = `value2` ... ] String
Sets the value of one or more columns. The value can be any expression or sub-query that returns a single value.
Make sure the columns adhere to `NOT NULL` constraints specified in the table definition, or else the `UPDATE` command fails with an error message.
* * *
`additional_table_or_subquery` String Optional
If you need to refer to additional tables or subqueries in the WHERE clause to help identify the rows to be updated or for setting new values, then specify those table names in the FROM clause. Enclose subqueries in parentheses.
When a WHERE clause contains a JOIN between source tables in the FROM clause and the target table, a row in the target table might join with more than one row in the source table. When this condition occurs, the UPDATE command fails with an error message.
* * *
WHERE where_conditions String Optional
The filter for specifying which rows of the table to update.
## Examples[​](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-update#examples "Direct link to Examples")
Example UPDATE command using FROM and WHERE

```
UPDATE target  
SET v = b.v + c.v  
FROM src b , (select k, min(v) v from src_new group by k having min(v) > 10) c  
WHERE target.k = b.k and target.k = c.k;  

```

Was this page helpful?
[Previous TRUNCATE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-truncate)[Next VACUUM TABLE](/reference/sql/commands/apache-iceberg-tables/vacuum-table)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TRUNCATE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-truncate)[Next VACUUM TABLE](/reference/sql/commands/apache-iceberg-tables/vacuum-table)
  * [Parameters](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-update#parameters)
  * [Examples](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-update#examples)


![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fapache-iceberg-tables%2Fapache-iceberg-update%2F&_biz_t=1777951118541&_biz_i=UPDATE%20%7C%20Dremio%20Documentation&_biz_n=1564&rnd=805435&cdn_o=a&_biz_z=1777951118542)
