---
url: /reference/sql/commands/alter-table
title: "ALTER TABLE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64250.060692666
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * ALTER TABLE

Version: current [26.x]
On this page
# ALTER TABLE
Update a table’s definition or schema.
Syntax

```
ALTER TABLE <table_name>  
{ ADD PRIMARY KEY ( <column_name> [ , ... ] )  
  | DROP PRIMARY KEY  
  | ADD COLUMNS ( <column_name> <data_type> [ NULL ] [ , ... ] )  
  | DROP COLUMN <column_name>  
  | { ALTER | MODIFY | CHANGE } COLUMN <old_name> <new_name> <data_type>   
    [ { NULL | NOT NULL | DROP NOT NULL } ]  
  | MODIFY COLUMN <column_name>  
      SET MASKING POLICY <function_name> ( <column_name> [, ... ] )  
      | UNSET MASKING POLICY <function_name>  
  | { ADD | DROP } ROW ACCESS POLICY <function_name> ( <column_name> [, ... ] )  
  | CLUSTER BY ( <column_name> [ , ... ]  )  
  | DROP CLUSTERING KEY  
  | LOCALSORT BY ( <column_name> [ , ... ] )  
  | REFRESH METADATA  
      [ FOR PARTITIONS ( <partition_name> = '<value>') ]  
      [ { AVOID | AUTO } PROMOTION ]  
      [ { FORCE | LAZY } UPDATE ]  
      [ { MAINTAIN | DELETE } WHEN MISSING ]  
  | FORGET METADATA  
  | SET TBLPROPERTIES ( '<property_name>' = '<property_value>' [ , ... ] )  
  | UNSET TBLPROPERTIES ( '<property_name>' [ , ... ] )  
  | CREATE AGGREGATE REFLECTION <reflection_name> USING  
      { DIMENSIONS ( <column_name> [ , ... ] )  
      | MEASURES ( <column_name> ( <aggregation_type> ) [ , ... ] )  
      | DIMENSIONS ( <column_name> [ , ... ] ) MEASURES ( <column_name> ( <aggregation_type> ) [ , ... ] ) }  
      [ PARTITION BY ( { <column_name> | <partition_transform> } [ , ... ] ) ]  
      [ LOCALSORT BY ( <column_name> [ , ... ] ) ]  
  | CREATE EXTERNAL REFLECTION <reflection_name> USING <table_name>  
  | CREATE RAW REFLECTION <reflection_name> USING DISPLAY ( <column_name> [ , ... ] )  
      [ PARTITION BY ( { <column_name> | <partition_transform> } [ , ... ] ) ]  
      [ LOCALSORT BY ( <column_name> [ , ... ] ) ]  
  | DROP REFLECTION <reflection_name>  
  | REFRESH REFLECTIONS  
  | ROUTE REFLECTIONS TO { DEFAULT QUEUE | QUEUE { <queue_name> | <queue_uuid> } }  
  | { ENABLE | DISABLE } { RAW | AGGREGATE } ACCELERATION  
  | { ADD | DROP } PARTITION FIELD { <column_name> | <partition_transform> }  
}  

```

## Parameters[​](/reference/sql/commands/alter-table#parameters "Direct link to Parameters")
`table_name` String
The name of the table that you want to alter.
* * *
ADD PRIMARY KEY ( `column_name` [, ... ] ) String
Specifies to use one or more existing columns as the primary key of a table. Primary keys provide hints to the query planning during join planning. They can be added to Apache Iceberg tables only. Uniqueness of the values in a primary key is not enforced.
* * *
DROP PRIMARY KEY String
Removes an Iceberg table's primary key. The columns that make up the primary key remain in the table.
* * *
ADD COLUMNS ( `column_name` `data_type` [ NULL ] [ , ... ] ) String
Creates one or more columns that have the specified names, data types, character limits, and nullability properties. The size is an attribute of the data type.
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

Use the `NULL` keyword to specify that a column can contain `NULL` values. If you don't specify a keyword, the column allows `NULL` values by default. However, you cannot add a new `NOT NULL` column to an existing table.
* * *
DROP COLUMN `column_name` String
Drops the specified column. This action cannot be undone.
* * *
{'{'})'{'{'})'{'}'}) ALTER | MODIFY | CHANGE {'{'})'{'}'}'{'}'} COLUMN `old_name` `new_name` `data_type` String
Changes the data type for a column, and gives you the option to rename the column. Renaming columns is supported except for Parquet, JSON, or BSON (Binary JSON used in MongoDB) formats.
You can rename only columns of tables that are in scratch spaces and columns of Iceberg tables. If you do not want to rename the column, set `new_name` to `old_name`.
Only three types of changes to primitive types are allowed:
  * INT to BIGINT
  * FLOAT to DOUBLE
  * DECIMAL(p, s) to DECIMAL(p', s), if you are widening the precision


You can alter columns that use complex types by using either of these two sets of syntax:
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
  * struct_type: `STRUCT <name : primitive_or_complex_type, ...>`
  * list_type: `{ LIST | ARRAY } < primitive_or_complex_type >`


**Examples:**

```
STRUCT<innerfield : INT, anotherinnerfield : DOUBLE>  
LIST<INT>  
ARRAY<INT>  
STRUCT<innerfield : LIST<INT>>  
LIST<STRUCT<innerfield : INT>>  

```

* * *
[ {'{'})'{'{'})'{'}'}) NULL | NOT NULL | DROP NOT NULL {'{'})'{'}'}'{'}'} ] String Optional
Uses one of the following keywords to specify whether the column can contain `NULL` values:
  * `NULL`: Allow the column to contain `NULL` values.
  * `NOT NULL`: Prevent the column from containing `NULL` values.
  * `DROP NOT NULL`: Change the column from one that prevents `NULL` values to one that allows them.


If you don't specify a keyword, the column allows `NULL` values by default.
You cannot change a column that allows `NULL` values to one that prevents them, nor can you add a new `NOT NULL` column to an existing table. However, you can add a new `NULL` column to an existing table.
MODIFY COLUMN `column_name` String
Specifies the column on which to either set a masking policy or unset one.
* * *
SET MASKING POLICY `function_name` ( `column_name` [, ... ] ) String
Sets a policy for masking data. The UDF serving as the masking policy must accept and return the same data type as the column it is masking. If a UDF with the given name does not exist, then the affected table will not be reachable until the policy is dropped or a UDF created. Available only in the Enterprise edition.
* * *
UNSET MASKING POLICY `function_name` String
Removes a policy for masking data. Available only in the Enterprise edition.
* * *
{'{'})'{'{'})'{'}'}) ADD | DROP {'{'})'{'}'}'{'}'} ROW ACCESS POLICY `function_name` ( `column_name` [ , ... ] ) String
Adds a row-access policy to the table, or removes one from the table. The UDF serving as the row-access policy must return BOOLEAN. If the UDF specified in the policy does not exist, then the Dremio engine gives an error when attempting to query the table. Available only in the Enterprise edition.
* * *
CLUSTER BY ( `column_name` [ , ... ] ) String
The columns on which to cluster the table by. When columns are added or removed from the table using the `CLUSTER BY` parameter, future `OPTIMIZE TABLE` commands will follow the updated clustering scheme. Available only in the Enterprise edition.
* * *
DROP CLUSTERING KEY String Optional
Removes the clustering keys on existing tables. The underlying data will remain clustered. However, future `OPTIMIZE TABLE` commands will not cluster the data. Available only in the Enterprise edition.
* * *
LOCALSORT BY ( `column_name` [ , ... ] ) String Optional
The columns on which to sort new data that is added to the table after the ALTER TABLE command is run. When used in the Reflection parameters, sorts the data that is in the Reflection.
* * *
REFRESH METADATA
Refreshes the metadata associated with the specified table. You can choose to either do a full or partial metadata refresh. A full refresh will update the metadata for the entire table. A partial refresh will enable you to only update specified partitions. Optional clauses are available for refreshing a table's metadata. If you choose to use two or more of these clauses, they must be entered in a specified priority order:
  1. Promotion option: either `AVOID PROMOTION` or `AUTO PROMOTION`
  2. Update option: either `FORCE UPDATE` or `LAZY UPDATE`
  3. Missing option: either `MAINTAIN WHEN MISSING` or `DELETE WHEN MISSING`


If the table is not partitioned, you will receive an error when you attempt to refresh the metadata using the `FOR PARTITIONS` clause.
* * *
FOR PARTITIONS ( `partition_name` = '`value`' ) String Optional
Use this clause to do a partial refresh of the table's metadata.
  * The ``partition_name`` identifies the name of the partition to be refreshed.
  * The ``value`` identifies the specific partition that should be refreshed. Must be contained in single quotes.


* * *
{'{'})'{'{'})'{'}'}) AVOID | AUTO {'{'})'{'}'}'{'}'} PROMOTION Optional
Clauses that determine whether files and folders are promoted to datasets when you run a query.
The `AVOID PROMOTION` prevents queries from promoting files/folders to datasets. The `AUTO PROMOTION` allows queries to promote files/folders to datasets. This is the default option when you do not include a promotion clause.
* * *
{'{'})'{'{'})'{'}'}) FORCE | LAZY {'{'})'{'}'}'{'}'} UPDATE Optional
Clauses that determine whether metadata is updated when you run a query.
The `FORCE UPDATE` forces a full update of metadata. The `LAZY UPDATE` does not perform a full update of metadata. This is the default option when you do not include an update clause.
* * *
{'{'})'{'{'})'{'}'}) MAINTAIN | DELETE {'{'})'{'}'}'{'}'} WHEN MISSING Optional
Clauses that determine how missing metadata is handled when you run a query.
The `MAINTAIN WHEN MISSING` prevents missing metadata from being deleted during refresh. `DELETE WHEN MISSING` deletes missing metadata during refresh. This is the default option when you do not include a clause.
* * *
FORGET METADATA
Deletes the metadata information stored in Dremio for the specified table until the next metadata refresh. The dataset can still be queried using SQL.
* * *
SET TBLPROPERTIES ( '`property_name`' = '`property_value`' [ , ... ] )
Sets one or more table properties for controlling the behavior of the table. See [Properties of Apache Iceberg Tables](/developer/data-formats/apache-iceberg/table-properties) for a list of the supported properties.
* * *
UNSET TBLPROPERTIES ( '`property_name`' [ , ... ] )
Removes one or more table properties that control the behavior of the table. See [Properties of Apache Iceberg Tables](/developer/data-formats/apache-iceberg/table-properties) for a list of the supported properties.
* * *
CREATE AGGREGATE REFLECTION `reflection_name` String
Creates an aggregation Reflection with the specified name.
* * *
DIMENSIONS ( `column_name` [ , ... ] ) String
The columns to include as dimensions in the Reflection.
* * *
MEASURES ( `column_name` ( `aggregation_type` ) [ , ... ] ) String
The columns to include as measures in the Reflection, and the type of aggregation to perform on them. The possible types are COUNT, MIN, MAX, SUM, and APPROXIMATE COUNT DISTINCT.
* * *
PARTITION BY ( {'{'})'{'{'})'{'}'}) `column_name` | `partition_transform` {'{'})'{'}'}'{'}'} [ , ... ] ) String Optional
The columns or partition-transformation functions on which to partition the data horizontally in the Reflection.
  * ``column_name``: The unique name of the column. Multiple columns may be specified as long as the column names include their data type. Use commas to separate each column name and data-type pair. If a column is listed as a partition column, it cannot also be listed as a sort column for the same Reflection. Each column specified must also be listed as a dimension column.
  * ``partition_transform``: Applies only to Iceberg tables. Use one of these partition-transformation functions:  
| Type of Partition Transform  | Description  |  
| --- | --- |  
| identity(`column_name`)  | Creates one partition per value. This is the default transform. The column can use any supported data type.  |  
| year(`column_name`)  | Partitions by year. The column must use the DATE or TIMESTAMP data type.  |  
| month(`column_name`)  | Partitions by month. The column must use the DATE or TIMESTAMP data type.  |  
| day(`column_name`)  | Partitions on the equivalent of dateint. The column must use the DATE or TIMESTAMP data type.  |  
| hour(`column_name`)  | Partitions on the equivalent of dateint and hour. The column must use the TIMESTAMP data type.  |  
| bucket(`integer`, `column_name`)  | Partitions data into the number of partitions specified by an integer. For example, if the integer value N is specified, the data is partitioned into N, or (0 to (N-1)), partitions. The partition in which an individual row is stored is determined by hashing the column value and then calculating `hash_value` mod N. If the result is 0, the row is placed in partition 0; if the result is 1, the row is placed in partition 1; and so on.  
  
The column can use the DECIMAL, INT, BIGINT, VARCHAR, VARBINARY, DATE, or TIMESTAMP data type.  |  
| truncate(`integer`, `column_name`)  | If the specified column uses the string data type, truncates strings to a maximum of the number of characters specified by an integer. For example, suppose the specified transform is truncate(1, stateUS). A value of CA is truncated to C, and the row is placed in partition C. A value of CO is also truncated to C, and the row is also placed in partition C.  
  
If the specified column uses the integer or long data type, truncates column values in the following way: For any truncate(L, col), truncates the column value to the biggest multiple of L that is smaller than the column value. For example, suppose the specified transform is truncate(10, intColumn). A value of 1 is truncated to 0 and the row is placed in the partition 0. A value of 247 is truncated to 240 and the row is placed in partition 240. If the transform is truncate(3, intColumn), a value of 13 is truncated to 12 and the row is placed in partition 12. A value of 255 is not truncated, because it is divisble by 3, and the row is placed in partition 255.  
  
The column can use the DECIMAL, INT, BIGINT, VARCHAR, or VARBINARY data type.  
  
**Note:** The truncate transform does not change column values. It uses column values to calculate the correct partitions in which to place rows.  |  


* * *
CREATE EXTERNAL REFLECTION `reflection_name` String
Creates an external Reflection with the specified name.
* * *
USING `table_name` String
The path of the derived table to use with the external Reflection.
* * *
CREATE RAW REFLECTION `reflection_name` String
Creates a raw Reflection with the specified name.
* * *
USING DISPLAY ( `column_name1`, `column_name2`, ... ) String
The columns to include in the Reflection.
* * *
DROP REFLECTION String Optional
Drops the specified Reflection defined on the table.
* * *
REFRESH REFLECTIONS String Optional
For information about the refresh action performed, see [Triggering Refreshes by Using the Reflection API, the Catalog API, or an SQL Command](/acceleration/manual-reflections/refreshing-reflections#triggering-refreshes-by-using-the-reflection-api-the-catalog-api-or-an-sql-command).
* * *
ROUTE REFLECTIONS TO {'{'})'{'{'})'{'}'}) DEFAULT QUEUE | QUEUE {'{'})'{'{'})'{'}'}) `queue_name` | `queue_uuid` {'{'})'{'}'}'{'}'} {'{'})'{'}'}'{'}'} String
Use the queue name or unique identifier to specify the queue on which to run jobs that create and refresh Reflections that are defined on the table. If a queue name or unique identifier is not specified, the default queue is used. You can also directly specify the default queue.
* * *
{'{'})'{'{'})'{'}'}) ENABLE | DISABLE {'{'})'{'}'}'{'}'} {'{'})'{'{'})'{'}'}) RAW | AGGREGATE {'{'})'{'}'}'{'}'} ACCELERATION String Optional
Enables or disables the default raw or aggregation Reflection on the table. When enabled, Dremio automatically creates a default Reflection of the specified type. When disabled, Dremio removes the default Reflection of the specified type.
* * *
{'{'})'{'{'})'{'}'}) ADD | DROP {'{'})'{'}'}'{'}'} PARTITION FIELD {'{'})'{'{'})'{'}'}) `column_name` | `partition_transform` {'{'})'{'}'}'{'}'} String Optional
ADD partitions the table data on the values in a single column or by using one of the partition-transformation functions. DROP drops the partition definition.
  * ``partition_transform``: Applies only to Iceberg tables. Use one of these partition-transformation functions:

  
| Transform  | Description  |  
| --- | --- |  
| identity( `col` )  | Explicitly specified identity transform  |  
| year( `col` )  | Partition by year. The column uses either the TIMESTAMP or DATE data type.  |  
| month( `ts_col` )  | Partition by month. The column uses either the TIMESTAMP or DATE data type.  |  
| day( `ts_col` )  | Partition by day. The column uses either the TIMESTAMP or DATE data type.  |  
| hour( `ts_col` )  | Partition by hour. The column uses the TIMESTAMP data type.  |  
| bucket( `count`, `col` )  | Partition by hashed value into `count` buckets  |  
| truncate( `length`, `col` )  | Partition by truncated value.
  * Strings are truncated to the specified length.
  * Integer and biginteger values are truncated to bins.  
Example: truncate(10, i) produces 0, 10, 20, and so on.

 |  
## Examples[​](/reference/sql/commands/alter-table#examples "Direct link to Examples")
Add Primary Key for an Iceberg table

```
ALTER TABLE services  
  ADD PRIMARY KEY (Country_ID);  

```

Add a column

```
ALTER TABLE customer1  
  ADD COLUMNS (SSN INT(9));  

```

Add a column

```
ALTER TABLE services  
  ADD COLUMNS (county varchar);  

```

Add a column for an Iceberg table

```
ALTER TABLE myTable  
  ADD COLUMNS (address VARCHAR);  

```

Drop a column

```
ALTER TABLE customer1  
  DROP COLUMN SSN;  

```

Alter a column

```
ALTER TABLE customer1  
  ALTER COLUMN SSN CHAR(11);  

```

Modify a column

```
ALTER TABLE services  
  MODIFY COLUMN tip_amount tip_amount DECIMAL;  

```

Modify a column for a struct table

```
ALTER TABLE struct_type  
  MODIFY COLUMN a  a struct<x: varchar, y: bigint>;  

```

Modify clustering keys

```
ALTER TABLE clustered_table  
  CLUSTER BY (Col_one, Col_two, Col_three);  

```

Drop clustering keys

```
ALTER TABLE clustered_table  
  DROP CLUSTERING KEY;  

```

Change the data type of a column to BIGINT for an Iceberg table

```
ALTER TABLE myTable  
  ALTER COLUMN id id BIGINT;  

```

Rename a column

```
ALTER TABLE services  
  MODIFY COLUMN tip_amount gratuity_amount DECIMAL;  

```

Change a column to allow `NULL` values

```
ALTER TABLE age_table   
  CHANGE age age INT DROP NOT NULL;  

```

Add a new `NULL` column to an existing table

```
ALTER TABLE my_table   
  ADD COLUMNS ( email VARCHAR NULL, date_of_birth DATE );  

```

Set a column-masking policy that takes multiple columns

```
ALTER TABLE e.employees  
    MODIFY COLUMN ssn_col  
    SET MASKING POLICY protect_ssn (ssn_col, region);  

```

Unset a column-masking policy

```
ALTER TABLE e.employees  
    MODIFY COLUMN ssn_col  
    UNSET MASKING POLICY protect_ssn;  

```

Add a row-access policy to a table

```
ALTER TABLE e.employees  
  ADD ROW ACCESS POLICY state_policy ( state_col );  

```

Remove a row-access policy from a table

```
ALTER TABLE employees  
  DROP ROW ACCESS POLICY state_policy (ssn_col, region);  

```

Refresh all the metadata for a table

```
ALTER TABLE customer1  
  REFRESH METADATA;  

```

Refresh all the metadata for a table

```
ALTER TABLE services  
  REFRESH METADATA;  

```

Refresh all the metadata for a table using optional clauses

```
ALTER TABLE services  
  REFRESH METADATA  
    AUTO PROMOTION  
    LAZY UPDATE  
    MAINTAIN WHEN MISSING;  

```

Refresh metadata for a single partition

```
ALTER TABLE customer1  
  REFRESH METADATA  
    FOR PARTITIONS ( "dir0" = 'a');  

```

Refresh the metadata for a single partition

```
ALTER TABLE Samples."samples.dremio.com"."zips.json"    
  REFRESH METADATA  
    FOR PARTITIONS (state = 'TX');  

```

Refresh the metadata for a single partition using optional clauses

```
ALTER TABLE Samples."samples.dremio.com"."zips.json"    
  REFRESH METADATA  
      FOR PARTITIONS (state = 'TX')  
      AUTO PROMOTION  
      LAZY UPDATE  
      MAINTAIN WHEN MISSING;  

```

Forget the metadata for a table

```
ALTER TABLE Samples."samples.dremio.com"."zips.json"  
  FORGET METADATA;  

```

Create a raw Reflection that sorts customers by last name and partitions them by country

```
ALTER TABLE "@user1"."customers"  
  CREATE RAW REFLECTION customers_by_country USING  
    DISPLAY (id,lastName,firstName,address,country)  
    PARTITION BY (country)  
    LOCALSORT BY (lastName);  

```

Create an aggregate Reflection that counts the cities per state and sorts by state

```
ALTER TABLE Samples."samples.dremio.com"."zips.json"  
  CREATE AGGREGATE REFLECTION per_state USING  
    DIMENSIONS (state)  
    MEASURES (city (COUNT))  
    LOCALSORT BY (state);  

```

Route Reflections to queues

```
ALTER TABLE "Table 1"  
  ROUTE REFLECTIONS TO QUEUE "QUEUE 1";  
ALTER TABLE "Table 2"  
  ROUTE REFLECTIONS TO QUEUE "QUEUE 1";  
ALTER TABLE "Table 3"  
  ROUTE REFLECTIONS TO DEFAULT QUEUE;  

```

Enable default raw acceleration on a table

```
ALTER TABLE sales_data  
  ENABLE RAW ACCELERATION;  

```

Disable default aggregate acceleration on a table

```
ALTER TABLE sales_data  
  DISABLE AGGREGATE ACCELERATION;  

```

Was this page helpful?
[Previous ALTER SPACE](/reference/sql/commands/alter-space)[Next ALTER VIEW](/reference/sql/commands/alter-view)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ALTER SPACE](/reference/sql/commands/alter-space)[Next ALTER VIEW](/reference/sql/commands/alter-view)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Falter-table%2F&_biz_t=1777950569849&_biz_i=ALTER%20TABLE%20%7C%20Dremio%20Documentation&_biz_n=483&rnd=962572&cdn_o=a&_biz_z=1777950569850)
