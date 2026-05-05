---
url: /reference/sql/commands/tables
slug: /reference/sql/commands/tables
title: "Tables | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64068.397851666
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * Tables

Version: current [26.x]
On this page
# Table SQL Statements
Tables can be created in filesystem sources types. In addition, if tables are created in a source, they can also be altered and dropped.
The following SQL commands are documented on this page:
  * DESCRIBE TABLE
  * DROP TABLE


## Querying Tables​
Querying a source table

```
SELECT count(*) FROM s3.upload.lineitem2  

```

If you specify an alias for a column or an expression in the SELECT clause, you can refer to that alias elsewhere in the query, including in the SELECT list or in the WHERE clause.
Example 1

```
SELECT c_custkey AS c, lower(c)  
FROM "customer.parquet"  

```

Example 2

```
SELECT c_custkey AS c, lower(c)  
FROM (  
  SELECT c_custkey, c_mktsegment AS c    
  FROM "customer.parquet")  

```

Example 3

```
SELECT  c_name AS n, n  
FROM (  
  SELECT c_mktsegment AS n, c_name  
  FROM "customer.parquet")  
AS MY_TABLE  
WHERE n = 'BUILDING'  

```

Example 4

```
SELECT c_custkey  
FROM (  
  SELECT c_custkey, c_name AS c  
  FROM "customer.parquet" )  
WHERE c = 'aa'  

```

Example 5

```
SELECT *  
FROM (  
  SELECT c_custkey AS c, c_name  
  FROM "customer.parquet" )  
JOIN "orders.parquet" ON c = o_orderkey  

```

Example 6

```
SELECT c_custkey AS c  
FROM "customer.parquet"  
JOIN "orders.parquet" ON c = o_orderkey  

```

## DESCRIBE TABLE​
The `DESCRIBE TABLE` command is used to provide high-level information regarding the overall column properties of an existing dataset.
Dremio `DESCRIBE` supports all filesystem source types and relies upon a user's existing privileges to access and describe a table or view.
DESCRIBE TABLE syntax

```
DESCRIBE TABLE table_name;  

```

### Example​
Describing a table

```
DESCRIBE TABLE taxistats  

```
  
| COLUMN_NAME  | DATA_TYPE  | IS_NULLABLE  | NUMERIC_PRECISION  | NUMERIC_SCALE  | EXTENDED_PROPERTIES  | MASKING_POLICY  | SORT_ORDER_PRIORITY  |  
| --- | --- | --- | --- | --- | --- | --- | --- |  
| pickup_datetime  | TIMESTAMP  | YES  | null  | null  | []  | []  | 1  |  
| passenger_count  | BIGINT  | YES  | 64  | 0  | []  | count_hide  | null  |  
| trip_distance_mi  | DOUBLE  | YES  | 53  | null  | []  | []  | null  |  
| fare_amount  | DOUBLE  | YES  | 53  | null  | []  | []  | null  |  
| tip_amount  | DOUBLE  | YES  | 53  | null  | []  | []  | null  |  
| total_amount  | DOUBLE  | YES  | 53  | null  | []  | []  | null  |  
The cells containing a '[]' indicate "empty" values.
### Columns​  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| COLUMN_NAME  | string  | The name of the column in the table.  |  
| DATA_TYPE  | string  | The data type allowed for values in the column.  |  
| IS_NULLABLE  | boolean  | Indicates whether values in the column can be null.  |  
| NUMERIC_PRECISION  | integer  | The maximum number of digits allowed in a value.  |  
| NUMERIC_SCALE  | integer  | The maximum number of digits allowed to the right of the decimal point.  |  
| EXTENDED_PROPERTIES  | array  | Additional properties, if any, that have been set on the column.  |  
| MASKING_POLICY  | string  | The masking policy, if any, that is set on the column.  |  
| SORT_ORDER_PRIORITY  | integer  | Indicates the sort order of the columns that are used for sorting, if the CREATE TABLE command that created the table used the LOCALSORT BY clause or if the table was altered by an ALTER TABLE command that used the LOCALSORT BY clause. For example, if a table was altered, and the clause `LOCALSORT BY (colA, colB)` was used, the table is sorted by colA and then by colB, the value for colA is 1, while the value for colB is 2. The lower the number, the higher the priority.  |  
## DROP TABLE​
Tables can be dropped _only_ if they have been created on a filesystem source and if you have permission.
Syntax

```
DROP TABLE <source>.<tableName>  

```

Example

```
DROP TABLE s3.upload.lineitem2  

```

**Impersonation**
For sources that support impersonation (HDFS) and if impersonation is enabled, Dremio executes the CTAS and DROP TABLE operations as the user running the command. This requires that the user have the appropriate permissions (read, execute, and/or write) for the operation. If impersonation is _**not**_ enabled, the operation is executed as the user running the Dremio service user.
For additional security, access can be further controlled by selecting specifically restricted filesystem sub-directories when you initially create your Dremio source.
Limitations include:
  * Views can be exported to their respective sources via standard SQL-based commands ONLY.
  * DROP TABLE functionality on S3 or Azure Storage source datasets is slow when working with very large tables.


Was this page helpful?
[Previous Sources](/reference/sql/commands/sources)[Next User-Defined Functions](/reference/sql/commands/functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Sources](/reference/sql/commands/sources)[Next User-Defined Functions](/reference/sql/commands/functions)
