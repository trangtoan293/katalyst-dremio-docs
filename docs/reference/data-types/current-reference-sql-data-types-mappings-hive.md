---
url: /reference/sql/data-types/mappings/hive
title: "Hive Data Types | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64264.1651015
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [Data Types](/reference/sql/data-types)
  * [Mappings for External Sources](/reference/sql/data-types/mappings)
  * Hive Data Types

Version: current [26.x]
On this page
# Hive Data Types
The following table shows the mappings from Hive to Dremio data types. If there are additional Hive types not listed in the table, then those types are not supported in Dremio.
## Data Type Mappings[​](/reference/sql/data-types/mappings/hive#data-type-mappings "Direct link to Data Type Mappings")  
| Hive Database Type  | Dremio Type  |  
| --- | --- |  
| BINARY  | VARBINARY  |  
| BOOLEAN  | BOOLEAN  |  
| BYTE  | INTEGER  |  
| CHAR  | VARCHAR  |  
| DATE  | DATE  |  
| DECIMAL  | DECIMAL  |  
| DOUBLE  | DOUBLE  |  
| FLOAT  | FLOAT  |  
| INT  | INTEGER  |  
| LONG  | BIGINT  |  
| SHORT  | INTEGER  |  
| STRING  | VARCHAR  |  
| TIMESTAMP  | TIMESTAMP  |  
| VARCHAR  | VARCHAR  |  
## Complex Data Types[​](/reference/sql/data-types/mappings/hive#complex-data-types "Direct link to Complex Data Types")
Dremio supports LIST, MAP, and STRUCT complex data types in source files that are in these formats:
  * Apache Iceberg
  * Apache Parquet
  * Delta Lake
  * ORC
  * RCFile
  * SequenceFile
  * Text


Dremio supports the UNION data type in source files that are in these formats:
  * Apache Iceberg
  * Apache Parquet
  * Delta Lake
  * SequenceFile


Dremio does not support the UNION data type in source files that are in ORC, RCFile, or text format.
For descriptions of these data types, see [Summary of Supported Data Types in Dremio](/reference/sql/data-types#summary-of-supported-data-types-in-dremio).
### Complex Data Type Mapping[​](/reference/sql/data-types/mappings/hive#complex-data-type-mapping "Direct link to Complex Data Type Mapping")  
| Hive Database Type  | Dremio Type  |  
| --- | --- |  
| ARRAY  | LIST  |  
| STRUCT  | STRUCT  |  
### Examples for LIST, STRUCT, and UNION[​](/reference/sql/data-types/mappings/hive#examples-for-list-struct-and-union "Direct link to Examples for LIST, STRUCT, and UNION")
The following examples assume that the table, HiveOrcTable, exists in Hive and has the following structure:
**HiveOrcTable Table Structure**  
| Column Name  | Hive Data Type  |  
| --- | --- |  
| list_field  | `ARRAY`INT``  |  
| struct_field  | `STRUCT<field_name:INT, field_name2:STRING>`  |  
#### LIST example[​](/reference/sql/data-types/mappings/hive#list-example "Direct link to LIST example")
In this example, `list_field` is the column name whose data type is ARRAY in Hive:
Query a column containing a LIST

```
SELECT list_field[0] from HiveOrcTable  

```

#### STRUCT example[​](/reference/sql/data-types/mappings/hive#struct-example "Direct link to STRUCT example")
In this example, `struct_field` is the column name whose data type is STRUCT in Hive:
Query a column containing STRUCT fields

```
SELECT struct_field['field_name'] from HiveOrcTable  

```

### Implicit Type Casting for Parquet-formatted Files[​](/reference/sql/data-types/mappings/hive#implicit-type-casting-for-parquet-formatted-files "Direct link to Implicit Type Casting for Parquet-formatted Files")
Dremio implicitly casts data types from Parquet-formatted files that differ from the defined schema of a Hive table. Each row in the table below represents the data type in a Parquet-formatted file, and the columns represent the data types defined in the schema of the Hive table. For example, if the data type of a named column in the Parquet file is INT and the data type of the column with the same name in the Hive table is either INT or BIGINT, Dremio will implicitly cast to that data type.  
|   | BOOLEAN  | INT  | BIGINT  | FLOAT  | DOUBLE  | DECIMAL  | DATE  | TIMESTAMP  | VARBINARY  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| BOOLEAN to  | Yes  |   |   |   |   |   |   |   |   |  
| INT to  |   | Yes  | Yes  |   |   |   |   |   |   |  
| BIGINT to  |   |   | Yes  |   |   |   |   |   |   |  
| FLOAT to  |   |   |   | Yes  | Yes  |   |   |   |   |  
| DOUBLE to  |   |   |   |   | Yes  |   |   |   |   |  
| DECIMAL to  |   |   |   |   |   | Yes  |   |   |   |  
| DATE to  |   |   |   |   |   |   | Yes  |   |   |  
| TIMESTAMP to  |   |   |   |   |   |   |   | Yes  |   |  
| VARBINARY to  |   |   |   |   |   |   |   |   | Yes  |  
In addition, Dremio can implicitly cast VARCHAR to VARCHAR. However, this conversion is not enabled by default. To enable implicit casting of VARCHAR to VARCHAR, run the following command on the Hive table:
Enable implicit casting of VARCHAR to VARCHAR

```
alter table <tableName> set enable_varchar_truncation=true  

```

To disable implicit casting of VARCHAR to VARCHAR, run the following command on the Hive table:
Disable implicit casting of VARCHAR to VARCHAR

```
alter table <tableName> set enable_varchar_truncation=false  

```

Dremio applies the following rules for numerical conversions:
  * Dremio returns null if a conversion results in overflow during runtime.
  * Dremio truncates data and proceeds with a query if a conversion results in truncation.
  * Dremio implicitly converts differences of precision, scale, and length for DECIMAL and VARCHAR data types.


Was this page helpful?
[Previous Elasticsearch Data Types](/reference/sql/data-types/mappings/elasticsearch)[Next Microsoft SQL Server Data Types](/reference/sql/data-types/mappings/microsoft-sql-server)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Elasticsearch Data Types](/reference/sql/data-types/mappings/elasticsearch)[Next Microsoft SQL Server Data Types](/reference/sql/data-types/mappings/microsoft-sql-server)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fdata-types%2Fmappings%2Fhive%2F&_biz_t=1777950583568&_biz_i=Hive%20Data%20Types%20%7C%20Dremio%20Documentation&_biz_n=515&rnd=92400&cdn_o=a&_biz_z=1777950583568)
