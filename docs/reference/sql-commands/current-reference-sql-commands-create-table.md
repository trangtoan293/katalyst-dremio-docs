---
url: /reference/sql/commands/create-table
slug: /reference/sql/commands/create-table
title: "CREATE TABLE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64250.545302041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * CREATE TABLE

Version: current [26.x]
On this page
# CREATE TABLE
Create a new table.
  * Table names cannot include the following special characters: `/`, `:`, `[`, or `]`.


Syntax

```
CREATE TABLE [ IF NOT EXISTS ] <table_name>  
  ( <column_name> <data_type> [ { NULL | NOT NULL } ] [ , ... ] )  
  [ MASKING POLICY <function_name> ( <column_name> [ , ... ] ) ]  
  [ ROW ACCESS POLICY <function_name> ( <column_name> [ , ... ] ) ]  
  [ PARTITION BY ( { <column_name> | <partition_transform> } [ , ... ] ) ]  
  [ CLUSTER BY ( <column_name> [ , ... ] ) ]  
  [ LOCALSORT BY ( <column_name> [ , ... ] ) ]  
  [ TBLPROPERTIES ('<property_name>' = '<property_value>' [ , ... ] ) ]  

```

## Parameters​
IF NOT EXISTS Optional
Causes Dremio to run the statement only if a table with the same name in the same path does not already exist.
* * *
`table_name` String
The unique name of the table that you want to create. You can create any of the following:
  * A table in a [filesystem source](/data-sources/object) formatted as ``source`.`table_name``.
  * An Iceberg table formatted as ``table_name`` in an Amazon Glue data source, Amazon S3 data source, or external Nessie data source.


  * Tables in the scratch location and in filesystem sources are written in Parquet format.
  * No table is created in the filesystem source when running a CTAS against an empty table and storing the data in Parquet format ( `STORE AS (type=>'parquet')` ).


After a source table has been created, the Dremio console displays the following:
  * Path where the table was created.
  * Number of records in the new table.
  * File size of the table.


  * For additional security, access can be further controlled by selecting specifically restricted filesystem sub-directories when you initially create your Dremio source.


* * *
( `column_name` `data_type` [ {'{'})'{'{'})'{'}'}) NULL | NOT NULL {'{'})'{'}'}'{'}'} ][ , ... ] ) String
Creates one or more columns with the specified names, data types, character limits, and nullability properties. The size is an attribute of the data type.
These are the supported primitive types:
  * BOOLEAN
  * VARBINARY
  * DATE
  * FLOAT
  * DECIMAL
  * DOUBLE
  * INT
  * BIGINT
  * TIME
  * TIMESTAMP
  * VARCHAR (The length is always 65536 bytes. If a length is specified, it is ignored.)


You can define complex types by using either of these two sets of syntax:
**Set 1**
  * struct_type: `ROW( name primitive_or_complex_type, .. )`
  * list_type: `ARRAY(primitive_or_complex_type)`


**Examples:**

```
ROW(innerfield INT, anotherinnerfield DOUBLE)  
ARRAY(INT)  
ROW(innerfield ARRAY(INT))  
ARRAY(ROW(innerfield INT))  

```

**Set 2**
  * struct_type: `STRUCT <name : primitive_or_complex_type, ... >`
  * list_type: `{ LIST | ARRAY } < primitive_or_complex_type >`


**Examples:**

```
STRUCT<innerfield : INT, anotherinnerfield : DOUBLE>  
LIST<INT>  
ARRAY<INT>  
STRUCT<innerfield : LIST<INT>>  
LIST<STRUCT<innerfield : INT>>  

```

You cannot use the `INSERT` command to insert data into columns that use a complex data type.
Uses one of the following keywords to specify whether the column can contain `NULL` values:
  * `NULL` – Allow the column to contain `NULL` values.
  * `NOT NULL` – Prevent the column from containing `NULL` values.


If you don't specify a keyword, the column allows `NULL` values by default.
* * *
MASKING POLICY `function_name` ( `column_name` [ , ... ] ) String Optional
Sets a policy for masking data. The UDF serving as the masking policy must accept and return the same data type as the column it is masking. If a UDF with the given name does not exist, then the affected table will not be reachable until the policy is dropped or a UDF created. Available only in the Enterprise edition.
* * *
ROW ACCESS POLICY `function_name` ( `column_name` [ , ... ] ) String Optional
Adds a row-access policy to the table. The UDF serving as the row-access policy must return BOOLEAN. If the UDF specified in the policy does not exist, then Dremio gives an error when attempting to query the table. Available only in the Enterprise edition.
* * *
PARTITION BY ( {'{'})'{'{'})'{'}'}) `column_name` | `partition_transform` {'{'})'{'}'}'{'}'} [ , ... ] ) String Optional
The columns or partition-transformation functions on which to partition the table data.
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
Sets one or more table properties for controlling the behavior of the table. Applies only to Iceberg tables. See [Properties of Apache Iceberg Tables](/developer/data-formats/apache-iceberg/table-properties) for a list of the supported properties.
## Examples​
Create an Iceberg table in an Amazon S3 data source

```
CREATE TABLE <Amazon_S3_data_source>.folder1.folder2.table_A;  

```

Create an Iceberg table in an AWS Glue Data Catalog

```
CREATE TABLE database.schema.table_A;  

```

Create an Iceberg table and partition it by month

```
CREATE TABLE myTable  
  (col1 int, col2 date)  
  PARTITION BY (month(col2));  

```

Create a table and enforce column nullability

```
CREATE TABLE my_table   
  (name VARCHAR NOT NULL, age INT NULL, address STRUCT<street VARCHAR, zip INT NOT NULL, city VARCHAR NOT NULL>);  

```

Create a table and cluster by one column

```
CREATE TABLE sales_records   
  (product_name VARCHAR, order_id VARCHAR, SKU INT, quanity INT, total_sale FLOAT) CLUSTER BY (product_name);  

```

Was this page helpful?
[Previous CREATE SPACE](/reference/sql/commands/create-space)[Next CREATE TABLE AS](/reference/sql/commands/create-table-as)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CREATE SPACE](/reference/sql/commands/create-space)[Next CREATE TABLE AS](/reference/sql/commands/create-table-as)
!
