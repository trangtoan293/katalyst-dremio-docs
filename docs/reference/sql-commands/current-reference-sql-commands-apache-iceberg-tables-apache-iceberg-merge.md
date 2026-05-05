---
url: /reference/sql/commands/apache-iceberg-tables/apache-iceberg-merge
slug: /reference/sql/commands/apache-iceberg-tables/apache-iceberg-merge
title: "MERGE | Dremio Enterprise Documentation"
depth: 4
crawled_at: 64798.26531625
---

Skip to main content
[![Dremio Documentation Home Page](https://docs.dremio.com/images/Dremio-wordmark-light.svg) **Documentation**](/)


[current [26.x]](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-merge)
  * [current [26.x]](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-merge)
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
  * MERGE

Version: current [26.x]
On this page
# MERGE
Run insert or update operations on a target table from the results of a join with a source table.
Dremio supports reading positional deletes and equality deletes for Apache Iceberg v2 tables. Dremio performs writes using copy-on-write by default and supports writes using merge-on-read if specified in the [Iceberg table properties](/developer/data-formats/apache-iceberg/table-properties).
Syntax

```
MERGE INTO <target_table_name>  
  [ AT { REF[ERENCE] | BRANCH } <reference_name> ]  
  [ AS <target_alias> ]  
  USING { ( <select_statement> ) | <source_table_name> [ AS <source_alias> ] }  
  ON ( <condition> )  
  [ WHEN MATCHED THEN  
      UPDATE SET * |  
      UPDATE SET <column1_name> = <value1> [, <column2_name> = <value2> ... ] ]  
    [ WHEN NOT MATCHED THEN  
    INSERT * |  
    INSERT (<column_name> [, ...]) VALUES (<expression> [, ...])  

```

`UPDATE SET *` and `INSERT *` were introduced in version 23.0.
## Parameters​
`target_table_name` String
The path and name of the table into which you want to merge data.
* * *
AT {'{'})'{'{'})'{'}'}) REF[ERENCE] | BRANCH {'{'})'{'}'}'{'}'} `reference_name` String Optional
Only for Nessie sources. Specifies the reference at which you want the table to be merged. When this parameter is omitted, the current branch is used.
REF: Identifies the specific reference.
BRANCH: Identifies the specific branch.
If you specify the reference for the target table, you must also specify the reference for the source table.
* * *
AS `target_alias` String Optional
The alias of the target table.
* * *
`select_statement` String Optional
The SELECT query that returns the data that you want to merge into the target table.
* * *
`source_table_name` String
The path and name of the table that includes the data that you want to merge into the target table.
* * *
AS `source_alias` String Optional
The alias of the source table.
* * *
ON ( `condition` ) String
Specifies the conditions on which source table joins with the target table to determine whether any rows in the source table match rows in the target table.
* * *
WHEN MATCHED THEN String Optional
Specifies that all rows of target table which match the rows returned from the source table due to the search condition are updated according to specified UPDATE SET clause.
* * *
UPDATE SET * String
Equivalent to UPDATE SET col1 = source.col1 [, col2 = source.col2 ...] for all columns of the target table. This operation assumes that the source table has the same columns as those in the target table. If this assumption is incorrect, the MERGE command fails and returns an error message. Columns must either be of the same data type, or implicit conversion between source and target data types must be supported.
* * *
UPDATE SET `column_name1` = `value1` [, `column_name2` = `value2` ... ] String
Sets the value of one or more columns. The value can be any expression or sub-query that returns a single value.
* * *
WHEN NOT MATCHED THEN String Optional
Specifies that a row is inserted into the target table for every source row matching the search condition that does not match a row in the target table. The values to insert are specified by the INSERT clause.
* * *
INSERT SET * String
Equivalent to INSERT (column_name1 [, ...]) VALUES (source.col1 [, source.col2 ...]) for all columns of the target table. This operation assumes that the source table has the same columns as those in the target table. If this assumption is incorrect, the MERGE command fails and returns an error message. Columns must either be of the same data type, or implicit conversion between source and target data types must be supported.
* * *
INSERT [ (`column_name` [, ...]) ] VALUES (expression [, ...]) String
Specifies the values to insert into the columns of a new row of the target table when a source row matching the search condition does not match a row in the target table.
Make sure the columns adhere to `NOT NULL` constraints specified in the table definition, or else the `MERGE` command fails with an error message.
## Examples​
### Example 1​
Step 1: Create and load the tables.

```
CREATE TABLE target_table (ID INTEGER, description VARCHAR);  
CREATE TABLE source_table (ID INTEGER, description_1 VARCHAR, description_2 VARCHAR);  
  
INSERT INTO target_table (ID, description ) VALUES  
  (1, 'Original value'),  
  (2, 'Original value');  
  
INSERT INTO source_table (ID, description_1, description_2) VALUES  
  (1, 'Value 1', 'Value 2'),  
  (3, 'Value 1', 'Value 2');  

```

Step 2: Run the MERGE statement.

```
MERGE INTO target_table AS t USING source_table AS s ON (t.id = s.id)  
  WHEN MATCHED THEN UPDATE SET description = s.description_2  
  WHEN NOT MATCHED THEN INSERT (id, description) VALUES (s.id, s.description_1);  

```

The resulting content of the target table:  
| id  | description  |  
| --- | --- |  
| 1  | Value 2  |  
| 2  | Original value  |  
| 3  | Value 1  |  
### Example 2​
Step 1: Create and load the tables.

```
CREATE TABLE target_table (ID INTEGER, desc_1 VARCHAR, desc_2 VARCHAR);  
CREATE TABLE source_table (ID INTEGER, description_1 VARCHAR, description_2 VARCHAR);  
  
INSERT INTO target_table (ID, desc_1, desc_2 ) VALUES  
  (1, 'Original value 1', 'Original value 2'),  
  (2, 'Original value 1', 'Original value 2');  
  
INSERT INTO source_table (ID, description_1, description_2) VALUES  
  (1, 'Value 1', 'Value 2'),  
  (3, 'Value A', 'Value B');  

```

Step 2: Run the MERGE statement.

```
MERGE INTO target_table AS t USING source_table AS s ON (t.id = s.id)  
  WHEN MATCHED THEN UPDATE SET *  
  WHEN NOT MATCHED THEN INSERT *  

```

The resulting content of the target table:  
| id  | desc_1  | desc_2  |  
| --- | --- | --- |  
| 1  | Value 1  | Value 2  |  
| 2  | Original value 1  | Original value 2  |  
| 3  | Value A  | Value B  |  
Was this page helpful?
[Previous INSERT](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-insert)[Next OPTIMIZE TABLE](/reference/sql/commands/apache-iceberg-tables/optimize-table)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous INSERT](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-insert)[Next OPTIMIZE TABLE](/reference/sql/commands/apache-iceberg-tables/optimize-table)
  * Parameters
  * Examples
    * Example 1
    * Example 2


!
