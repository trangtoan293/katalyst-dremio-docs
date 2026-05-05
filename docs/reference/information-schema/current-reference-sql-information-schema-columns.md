---
url: /reference/sql/information-schema/columns
slug: /reference/sql/information-schema/columns
title: "INFORMATION_SCHEMA.COLUMNS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64264.137057333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [Information Schema](/reference/sql/information-schema)
  * INFORMATION_SCHEMA.COLUMNS

Version: current [26.x]
On this page
# INFORMATION_SCHEMA.COLUMNS
The INFORMATION_SCHEMA.COLUMNS view contains metadata for all the columns within the tables and views in a project.
Syntax

```
SELECT *   
FROM INFORMATION_SCHEMA.COLUMNS  

```

The list of columns for tables is determined by the metadata caching policy on individual sources. The columns are not refreshed if the data is expired.
## Example Output​  
| TABLE_CATALOG  | TABLE_SCHEMA  | TABLE_NAME  | COLUMN_NAME  | ORDINAL_POSITION  | COLUMN_DEFAULT  | IS_NULLABLE  | DATA_TYPE  | COLUMN_SIZE  | CHARACTER_MAXIMUM_LENGTH  | CHARACTER_OCTET_LENGTH  | NUMERIC_PRECISION  | NUMERIC_PRECISION_RADIX  | NUMERIC_SCALE  | DATETIME_PRECISION  | INTERVAL_TYPE  | INTERVAL_PRECISION  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| DREMIO  | INFORMATION_SCHEMA  | CATALOGS  | CATALOG_NAME  | 1  | null  | YES  | CHARACTER VARYING  | 65536  | 65536  | 262144  | null  | null  | null  | null  | null  | null  |  
| DREMIO  | INFORMATION_SCHEMA  | CATALOGS  | CATALOG_DESCRIPTION  | 2  | null  | YES  | CHARACTER VARYING  | 65536  | 65536  | 262144  | null  | null  | null  | null  | null  | null  |  
| DREMIO  | INFORMATION_SCHEMA  | CATALOGS  | CATALOG_CONNECT  | 3  | null  | YES  | CHARACTER VARYING  | 65536  | 65536  | 262144  | null  | null  | null  | null  | null  | null  |  
| DREMIO  | INFORMATION_SCHEMA  | COLUMNS  | TABLE_CATALOG  | 1  | null  | YES  | CHARACTER VARYING  | 65536  | 65536  | 262144  | null  | null  | null  | null  | null  | null  |  
| DREMIO  | INFORMATION_SCHEMA  | COLUMNS  | TABLE_SCHEMA  | 2  | null  | YES  | CHARACTER VARYING  | 65536  | 65536  | 262144  | null  | null  | null  | null  | null  | null  |  
| DREMIO  | INFORMATION_SCHEMA  | COLUMNS  | TABLE_NAME  | 3  | null  | YES  | CHARACTER VARYING  | 65536  | 65536  | 262144  | null  | null  | null  | null  | null  | null  |  
| DREMIO  | INFORMATION_SCHEMA  | COLUMNS  | COLUMN_NAME  | 4  | null  | YES  | CHARACTER VARYING  | 65536  | 65536  | 262144  | null  | null  | null  | null  | null  | null  |  
| DREMIO  | INFORMATION_SCHEMA  | COLUMNS  | ORDINAL_POSITION  | 5  | null  | YES  | INTEGER  | 32  | null  | null  | 32  | 2  | 0  | null  | null  | null  |  
| DREMIO  | INFORMATION_SCHEMA  | COLUMNS  | COLUMN_DEFAULT  | 6  | null  | YES  | CHARACTER VARYING  | 65536  | 65536  | 262144  | null  | null  | null  | null  | null  | null  |  
| DREMIO  | INFORMATION_SCHEMA  | COLUMNS  | IS_NULLABLE  | 7  | null  | YES  | CHARACTER  | VARYING  | 65536  | 65536  | 262144  | null  | null  | null  | null  | null  |  
## Fields​  
| Field  | Data Type  | Description  |  
| --- | --- | --- |  
| TABLE_CATALOG  | varchar  | The name of the catalog, which is always DREMIO.  |  
| TABLE_SCHEMA  | varchar  | The path (source, space, folders) to the table or view.  |  
| TABLE_NAME  | varchar  | The name of the table or view that the column belongs to.  |  
| COLUMN_NAME  | varchar  | The name of the column in the table or view.  |  
| ORDINAL_POSITION  | integer  | This represents the position at which the column appears in the table or view.  |  
| COLUMN_DEFAULT  | varchar  | The default value of the column.  |  
| IS_NULLABLE  | varchar  | The value is YES if null values can be stored in the column and the value is NO if null values cannot be stored in the column.  |  
| DATA_TYPE  | varchar  | The system-defined data type of the column in the table or view. You can also view that specific dataset to see the data types for all columns.  |  
| COLUMN_SIZE  | integer  | The size of the table or view column in bytes.  |  
| CHARACTER_MAXIMUM_LENGTH  | integer  | The maximum length in characters for binary data, character data, or text and image data. Otherwise, null is returned.  |  
| CHARACTER_OCTET_LENGTH  | integer  | The maximum length in bytes for binary data, character data, or text and image data. Otherwise, null is returned.  |  
| NUMERIC_PRECISION  | integer  | The precision of approximate numeric data, exact numeric data, integer data, or monetary data. Otherwise, null is returned.  |  
| NUMERIC_PRECISION_RADIX  | integer  | The precision radix of approximate numeric data, exact numeric data, integer data, or monetary data. Otherwise, null is returned.  |  
| NUMERIC_SCALE  | integer  | The scale of approximate numeric data, exact numeric data, integer data, or monetary data. Otherwise, null is returned.  |  
| DATETIME_PRECISION  | integer  | The supported precision for datetime and interval data types. For other data types, null is returned.  |  
| INTERVAL_TYPE  | integer  | If the data type is interval, then specified fields (year) are returned. Otherwise null is returned.  |  
| INTERVAL_PRECISION  | integer  | If the data type is interval, then the declared precision is displayed. Otherwise null is returned.  |  
Was this page helpful?
[Previous INFORMATION_SCHEMA.CATALOGS](/reference/sql/information-schema/catalogs)[Next INFORMATION_SCHEMA.SCHEMATA](/reference/sql/information-schema/schemata)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous INFORMATION_SCHEMA.CATALOGS](/reference/sql/information-schema/catalogs)[Next INFORMATION_SCHEMA.SCHEMATA](/reference/sql/information-schema/schemata)
!!
