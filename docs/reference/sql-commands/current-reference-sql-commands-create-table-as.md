---
url: /reference/sql/commands/create-table-as
slug: /reference/sql/commands/create-table-as
title: "CREATE TABLE AS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64250.597897625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * CREATE TABLE AS

Version: current [26.x]
On this page
# CREATE TABLE AS
Create a new table as a select statement from another table.
  * Table names cannot include the following special characters: `/`, `:`, `[`, or `]`.


Syntax

```
CREATE TABLE [ IF NOT EXISTS ] <table_name>  
  [ ( <column_name> <data_type> [ { NULL | NOT NULL } ] [ , ... ] ) ]  
  [ PARTITION BY ( { <column_name> | <partition_transform> } [ , ... ] ) ]  
  [ CLUSTER BY ( <column_name> [ , ... ] ) ]  
  [ LOCALSORT BY ( <column_name> [ , ... ] ) ]  
  [ TBLPROPERTIES ( '<property_name>' = '<property_value>' [ , ... ] ) ]  
  AS <select_statement>  

```

## Parameters​
IF NOT EXISTS Optional
Causes Dremio to run the statement only if a table with the same name in the same path does not already exist.
* * *
`table_name` String
The unique name of the table that you want to create. You can create any of the following:
  * A table in a [filesystem source](/data-sources/object) formatted as ``source`.`table_name``.
  * An Iceberg table formatted as ``table_name`` in an Amazon Glue data source, Amazon S3 data source, or external Nessie data source.


  * Tables in filesystem sources are written in Parquet format.
  * No table is created in the filesystem source when running a CTAS against an empty table and storing the data in Parquet format ( `STORE AS (type=>'parquet')` ).


After a source table has been created, the Dremio console displays the following:
  * Path where the table was created.
  * Number of records in the new table.
  * File size of the table.


  * For additional security, access can be further controlled by selecting specifically restricted filesystem sub-directories when you initially create your Dremio source.
  * CTAS functionality is enabled on a per source basis. To use the `CREATE TABLE AS` (CTAS) command on a source, you must grant [source privileges](/security/rbac/privileges) to the appropriate users.


* * *
( `column_name` `data_type` [ {'{'})'{'{'})'{'}'}) NULL | NOT NULL {'{'})'{'}'}'{'}'} ] [ , ... ] )String Optional
Creates one or more columns with the specified names, data types, and nullability properties.
Uses one of the following keywords to specify whether the column can contain `NULL` values:
  * `NULL` – Allow the column to contain `NULL` values.
  * `NOT NULL` – Prevent the column from containing `NULL` values.


If you don't specify a keyword, the column allows `NULL` values by default. However, if you specify `NOT NULL`, the `CREATE TABLE AS` command succeeds only if the corresponding column in the source table contains no `NULL` values.
To specify nullability and assign a data type to the new column that differs from the source column's data type, use type coercions similar to those used in `CREATE TABLE` followed by `INSERT INTO`. See Examples.
* * *
PARTITION BY ( {'{'})'{'{'})'{'}'}) `column_name` | `partition_transform` {'{'})'{'}'}'{'}'} [ , ... ] ) String Optional
When you designate column(s) using this clause, Dremio will store the rows containing the same hash partition values in their own Parquet files. Using this clause provides speed optimization for when your `WHERE` clause matches your `PARTITION BY` clause.
  * ``column_name``: The unique name of the column. Multiple columns may be specified as long as the column names include their data type. Use commas to separate each column name and data-type pair. If a column is listed as a partition column, it cannot also be listed as a sort column for the same table. Each column specified must also be listed as a dimension column.
  * ``partition_transform``: Applies only to Iceberg tables. Use one of these partition-transformation functions:  
| Transform  | Description  |  
| --- | --- |  
| identity( `col` )  | Explicitly specified identity transform.  |  
| year( `col` )  | Partition by year. The column uses either the TIMESTAMP or DATE data type.  |  
| month( `ts_col` )  | Partition by month. The column uses either the TIMESTAMP or DATE data type.  |  
| day( `ts_col` )  | Partition by day. The column uses either the TIMESTAMP or DATE data type.  |  
| hour( `ts_col` )  | Partition by hour. The column uses either the TIMESTAMP or DATE data type.  |  
| bucket( `count`, `col` )  | Partition by hashed value into `count` buckets.  |  
| truncate( `length`, `col` )  | Partition by truncated value.
    * Strings are truncated to the specified length.
    * Integer and biginteger values are truncated to bins.  
Example: truncate(10, i) produces 0, 10, 20, and so on.
 |  
    * If you partition a table by a column that has more distinct values than Dremio can partition by, you will receive an error message. If you receive this error message, try partitioning your table by a different column.
    * If the table is not partitioned, you will receive an error when you attempt to refresh the metadata using the `PARTITION BY` clause.


* * *
CLUSTER BY ( `column_name` [ , ... ] ) String Optional
The column(s) to cluster the table on.
Sets the clustering keys for the specified table. To specify multiple columns, use commas to separate each column name. Available only in the Enterprise edition.
Clustering cannot be used in conjunction with `PARTITION BY` or `LOCAL SORT`.
* * *
LOCALSORT BY ( `column_name` [ , ... ] ) String Optional
Sorts the records of the table by the values in the specified column.
The name of the column that you want to sort the table by. Sorts each Parquet file fragment by the designated column. If you are doing a range filter on your `LOCALSORT` column, your query will be faster because the data is already sorted.
* * *
TBLPROPERTIES ( '`property_name`' = '`property_value`' [ , ... ] )
Sets one or more table properties for controlling the behavior of the table. See [Properties of Apache Iceberg Tables](/developer/data-formats/apache-iceberg/table-properties) for a list of the supported properties.
* * *
AS `select_statement` String
Use the `SELECT` statement to populate the new table using data from an existing table or view.
* * *
## Examples​
Create a table as SELECT * from another table

```
CREATE TABLE myAmazonS3Source.myFolder.myTable  
  AS SELECT * FROM myAmazonS3Source.anotherFolder.anotherTable;  

```

Create a table and partition it by month

```
CREATE TABLE myTable  
  PARTITION BY (month(col2))  
  AS SELECT * FROM source.anotherFolder.anotherTable;  

```

Create a source table

```
CREATE TABLE s3.upload.lineitem2  
  AS SELECT * FROM TPCH.lineitem;  

```

Create a table and require that columns do not contain `NULL` values

```
CREATE TABLE name_age_table   
  (name VARCHAR NOT NULL, age INT NOT NULL)  
  AS SELECT name, age FROM mytable;  

```

Create a table and specify a column has a different data type than the source table's column

```
CREATE TABLE age_table (age INT NOT NULL)  
  AS SELECT * FROM (VALUES((CAST(1.1 AS DOUBLE))));  

```

Was this page helpful?
[Previous CREATE TABLE](/reference/sql/commands/create-table)[Next CREATE VIEW](/reference/sql/commands/create-view)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CREATE TABLE](/reference/sql/commands/create-table)[Next CREATE VIEW](/reference/sql/commands/create-view)
!
