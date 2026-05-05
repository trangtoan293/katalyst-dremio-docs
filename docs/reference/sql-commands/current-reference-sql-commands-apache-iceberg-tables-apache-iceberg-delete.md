---
url: /reference/sql/commands/apache-iceberg-tables/apache-iceberg-delete
slug: /reference/sql/commands/apache-iceberg-tables/apache-iceberg-delete
title: "DELETE | Dremio Enterprise Documentation"
depth: 4
crawled_at: 64797.808097208
---

Skip to main content
[![Dremio Documentation Home Page](https://docs.dremio.com/images/Dremio-wordmark-light.svg) **Documentation**](/)


[current [26.x]](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-delete)
  * [current [26.x]](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-delete)
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
  * [Reference](/reference)
    * [Admin CLI](/reference/admin-cli)
    * [API Reference](/reference/api)
    * [SQL Reference](/reference/sql)
      * [Data Types](/reference/sql/data-types)
      * [SQL Commands](/reference/sql/commands)
        * [SQL Commands for Apache Iceberg Tables](/reference/sql/commands/apache-iceberg-tables)
          * [COPY INTO](/reference/sql/commands/apache-iceberg-tables/copy-into-table)
          * DELETE
          * DROP
          * [INSERT](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-insert)
          * MERGE
          * [OPTIMIZE TABLE](/reference/sql/commands/apache-iceberg-tables/optimize-table)
          * [ROLLBACK](/reference/sql/commands/apache-iceberg-tables/rollback-table)
          * [TRUNCATE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-truncate)
          * UPDATE
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
        * DROP SPACE
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
  * DELETE

Version: current [26.x]
On this page
# DELETE
Delete rows from a table.
Dremio supports reading positional deletes and equality deletes for Apache Iceberg v2 tables. Dremio performs writes using copy-on-write by default and supports writes using merge-on-read if specified in the [Iceberg table properties](/developer/data-formats/apache-iceberg/table-properties).
Syntax

```
DELETE FROM <table_name>  
[ AT { REF[ERENCE] | BRANCH } <reference_name> ]  
[ AS <alias> ]  
[ USING <additional_table_or_query> [, <additional_table_or_query> ] ]  
[ WHERE where_conditions ]  

```

## Parameters​
`table_name` String
The name of the table with data that you want to delete.
* * *
AT {'{'})'{'{'})'{'}'}) REF[ERENCE] | BRANCH {'{'})'{'}'}'{'}'} `reference_name` String Optional
Only for Nessie sources. Specifies the reference at which you want the table to be deleted from. When this parameter is omitted, the current branch is used.
REF: Identifies the specific reference.
BRANCH: Identifies the specific branch.
If you specify the reference for the target table, you must also specify the reference for the source table.
* * *
AS `alias` String Optional
The alias of the table.
* * *
`additional_table_or_subquery` String Optional
If you need to refer to additional tables or subqueries in the `WHERE` clause to help identify the rows to be removed, then specify those table names in the `USING` clause. Enclose subqueries in parentheses.
When a `WHERE` clause contains a `JOIN` between source tables in the `USING` clause and the target table, a row in the target table might join with more than one row in the source table. When this condition occurs, the `DELETE` command fails with an error message.
* * *
WHERE where_conditions String Optional
The filter for specifying which rows of the table to delete.
## Example​
Example DELETE command using USING and WHERE

```
DELETE FROM target  
USING src b , (select k, min(v) v from src_new group by k having min(v) < 10) c  
WHERE target.k = b.k and target.k = c.k;  

```

**For Dremio v22 and earlier:** Join conditions are not supported in WHERE clauses. If you need to use a join condition, use a correlated subquery instead.
Example of an unsupported DELETE command

```
delete from orders  
  using returns  
  where orders.order_id = returns.order_id;  

```

Equivalent DELETE command using a correlated subquery

```
delete from orders  
  where exists(select 1 from returns where order_id = orders.order_id)  

```

Was this page helpful?
[Previous COPY INTO](/reference/sql/commands/apache-iceberg-tables/copy-into-table)Next DROP
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous COPY INTO](/reference/sql/commands/apache-iceberg-tables/copy-into-table)Next DROP
  * Parameters
  * Example


