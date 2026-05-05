---
url: /developer/data-formats/apache-iceberg/copy-into-transformations
slug: /developer/data-formats/apache-iceberg/copy-into-transformations
title: "Transforming Data on Load | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64216.564800708
---

  * [Dremio Enterprise Home](/)
  * [Developer Guide](/developer)
  * [File and Table Formats](/developer/data-formats)
  * [Apache Iceberg](/developer/data-formats/apache-iceberg)
  * Transforming Data on Load

Version: current [26.x]
On this page
# Transforming Data on Load
Dremio allows data transformations during loading with the `COPY INTO` SQL command, simplifying the ETL process by enabling simple transformations as data is ingested.
Common use cases for this functionality include:
  * Selecting a subset of columns from source files to write into the target table.
  * Reordering columns in source files to match the order in the target table.
  * Converting data types from source files into target table type, which is most common with CSVs.
  * Applying simple elementwise functions, which would require additional processing later.


## Supported File Formats​
Dremio's `COPY INTO` SQL command with transformations supports Parquet and CSV file formats.
# Select a Subset of Columns
Imagine we receive a file that contains the available inventory in each store every day; however, the file also includes item details that we don't need. We need to load only a subset of the data and exclude information that does not help build our data product. Since the provided CSV file does not include headers, we must set `EXTRACT_HEADER` to `FALSE` (see [file_column_number](/reference/sql/commands/apache-iceberg-tables/copy-into-table) for more information). This then allows us to reference the columns by their order in the file using the following query:

```
COPY INTO inventory(store_id, stock_date,  item_id, amount)  
    FROM (SELECT $1, $5, $2, $6 FROM '@mystage/storeinfo.csv')  
    FILE_FORMAT   'csv'  
    (EXTRACT_HEADER FALSE);  

```

# Reorder Columns
Sometimes, the data in the underlying file does not match how you want to materialize the data in Dremio. In the example below, we have a CSV snapshot of our customer data, and the `cust_id` column is the fifth column in the file. As a best practice, we want to move the table's primary key to the first column of the table. Because the CSV file includes headers, we must reference the columns by their header names as defined in the file. To achieve this, we load the data with the following:

```
COPY INTO dim_customer(cust_id, name, address, age)  
    FROM (SELECT cust_id, name, address, age FROM '@mystage/customer.csv')  
    FILE_FORMAT   'csv';  
  

```

# Convert Data Types
If you want to convert the source data types of your files into target types, you can add that to your `SELECT` statement as well.

```
COPY INTO dim_customer(cust_id, name, address, age)  
    FROM (SELECT CAST(cust_id AS INTEGER), name, address, age FROM '@mystage/customer.csv')  
    FILE_FORMAT   'csv';  
  

```

## Supported Functions​
  * [ARRAY_APPEND](/reference/sql/sql-functions)
  * [ARRAY_CAT](/reference/sql/sql-functions)
  * [ARRAY_COMPACT](/reference/sql/sql-functions)
  * [ARRAY_DISTINCT](/reference/sql/sql-functions)
  * [ARRAY_INSERT](/reference/sql/sql-functions)
  * [ARRAY_PREPEND](/reference/sql/sql-functions)
  * [ARRAY_REMOVE](/reference/sql/sql-functions)
  * [ARRAY_REMOVE_AT](/reference/sql/sql-functions)
  * [ARRAY_SIZE](/reference/sql/sql-functions)
  * [ARRAY_SLICE](/reference/sql/sql-functions)
  * [ARRAY_TO_STRING](/reference/sql/sql-functions)
  * [ASCII](/reference/sql/sql-functions)
  * [BASE64](/reference/sql/sql-functions)
  * [BIN](/reference/sql/sql-functions)
  * [BINARY_STRING](/reference/sql/sql-functions)
  * [BROUND](/reference/sql/sql-functions)
  * [BTRIM](/reference/sql/sql-functions)
  * [CASE](/reference/sql/sql-functions)
  * [CAST](/reference/sql/sql-functions)
  * [CEILING](/reference/sql/sql-functions)
  * [CHARACTER_LENGTH](/reference/sql/sql-functions)
  * [CHAR_LENGTH](/reference/sql/sql-functions)
  * [CHR](/reference/sql/sql-functions)
  * [COALESCE](/reference/sql/sql-functions)
  * [CONCAT](/reference/sql/sql-functions)
  * [CONCAT_WS](/reference/sql/sql-functions)
  * [CONVERT_FROM](/reference/sql/sql-functions)
  * [CONVERT_REPLACEUTF8](/reference/sql/sql-functions)
  * [CONVERT_TIMEZONE](/reference/sql/sql-functions)
  * [CONVERT_TO](/reference/sql/sql-functions)
  * [CURRENT_DATE](/reference/sql/sql-functions)
  * [CURRENT_DATE_UTC](/reference/sql/sql-functions)
  * [CURRENT_SCHEMA](/reference/sql/sql-functions)
  * [CURRENT_TIME](/reference/sql/sql-functions)
  * [CURRENT_TIMESTAMP](/reference/sql/sql-functions)
  * [DATEDIFF](/reference/sql/sql-functions)
  * [DATETYPE](/reference/sql/sql-functions)
  * [DATE_ADD](/reference/sql/sql-functions)
  * [DATE_DIFF](/reference/sql/sql-functions)
  * [DATE_PART](/reference/sql/sql-functions)
  * [DATE_SUB](/reference/sql/sql-functions)
  * [DATE_TRUNC](/reference/sql/sql-functions)
  * [DAY](/reference/sql/sql-functions)
  * [DAYOFMONTH](/reference/sql/sql-functions)
  * [DAYOFWEEK](/reference/sql/sql-functions)
  * [DAYOFYEAR](/reference/sql/sql-functions)
  * [ENCODE](/reference/sql/sql-functions)
  * [EXTRACT](/reference/sql/sql-functions)
  * [FLOOR](/reference/sql/sql-functions)
  * [FROM_HEX](/reference/sql/sql-functions)
  * [HASH](/reference/sql/sql-functions)
  * [HASH64](/reference/sql/sql-functions)
  * [HEX](/reference/sql/sql-functions)
  * [HOUR](/reference/sql/sql-functions)
  * [ILIKE](/reference/sql/sql-functions)
  * [INITCAP](/reference/sql/sql-functions)
  * [ISDATE](/reference/sql/sql-functions)
  * [IS [NOT] FALSE](/reference/sql/sql-functions)
  * [IS [NOT] NULL](/reference/sql/sql-functions)
  * [ISNUMERIC](/reference/sql/sql-functions)
  * [IS [NOT] TRUE](/reference/sql/sql-functions)
  * [IS_BIGINT](/reference/sql/sql-functions)
  * [IS_INT](/reference/sql/sql-functions)
  * [IS_MEMBER](/reference/sql/sql-functions)
  * [IS_SUBSTR](/reference/sql/sql-functions)
  * [IS_UTF8](/reference/sql/sql-functions)
  * [IS_VARCHAR](/reference/sql/sql-functions)
  * [LAST_DAY](/reference/sql/sql-functions)
  * [LCASE](/reference/sql/sql-functions)
  * [LEFT](/reference/sql/sql-functions)
  * [LENGTH](/reference/sql/sql-functions)
  * [LIKE](/reference/sql/sql-functions)
  * [LOCALTIME](/reference/sql/sql-functions)
  * [LOCALTIMESTAMP](/reference/sql/sql-functions)
  * [LOWER](/reference/sql/sql-functions)
  * [LPAD](/reference/sql/sql-functions)
  * [LTRIM](/reference/sql/sql-functions)
  * [MASK](/reference/sql/sql-functions)
  * [MASK_FIRST_N](/reference/sql/sql-functions)
  * [MASK_HASH](/reference/sql/sql-functions)
  * [MASK_LAST_N](/reference/sql/sql-functions)
  * [MASK_SHOW_FIRST_N](/reference/sql/sql-functions)
  * [MASK_SHOW_LAST_N](/reference/sql/sql-functions)
  * [MD5](/reference/sql/sql-functions)
  * [MINUTE](/reference/sql/sql-functions)
  * [MONTH](/reference/sql/sql-functions)
  * [MONTHS_BETWEEN](/reference/sql/sql-functions)
  * [NEXT_DAY](/reference/sql/sql-functions)
  * [NORMALIZE_STRING](/reference/sql/sql-functions)
  * [NOW](/reference/sql/sql-functions)
  * [NULLIF](/reference/sql/sql-functions)
  * [OCTET_LENGTH](/reference/sql/sql-functions)
  * [PARSE_URL](/reference/sql/sql-functions)
  * [QUARTER](/reference/sql/sql-functions)
  * [REGEXP_COL_LIKE](/reference/sql/sql-functions)
  * [REGEXP_EXTRACT](/reference/sql/sql-functions)
  * [REGEXP_REPLACE](/reference/sql/sql-functions)
  * [REPLACE](/reference/sql/sql-functions)
  * [REVERSE](/reference/sql/sql-functions)
  * [RIGHT](/reference/sql/sql-functions)
  * [ROUND](/reference/sql/sql-functions)
  * [RPAD](/reference/sql/sql-functions)
  * [RTRIM](/reference/sql/sql-functions)
  * [SECOND](/reference/sql/sql-functions)
  * [SET_UNION](/reference/sql/sql-functions)
  * [SHA, SHA1](/reference/sql/sql-functions)
  * [SHA256](/reference/sql/sql-functions)
  * [SHA512](/reference/sql/sql-functions)
  * [SPLIT_PART](/reference/sql/sql-functions)
  * [STARTS_WITH](/reference/sql/sql-functions)
  * [STRING_BINARY](/reference/sql/sql-functions)
  * [SUBLIST](/reference/sql/sql-functions)
  * [SUBSTR](/reference/sql/sql-functions)
  * [SUBSTRING](/reference/sql/sql-functions)
  * [SUBSTRING_INDEX](/reference/sql/sql-functions)
  * [TIMESTAMPADD](/reference/sql/sql-functions)
  * [TIMESTAMPDIFF](/reference/sql/sql-functions)
  * [TIMESTAMPTYPE](/reference/sql/sql-functions)
  * [TOASCII](/reference/sql/sql-functions)
  * [TO_CHAR](/reference/sql/sql-functions)
  * [TO_DATE](/reference/sql/sql-functions)
  * [TO_HEX](/reference/sql/sql-functions)
  * [TO_NUMBER](/reference/sql/sql-functions)
  * [TO_TIME](/reference/sql/sql-functions)
  * [TO_TIMESTAMP](/reference/sql/sql-functions)
  * [TRIM](/reference/sql/sql-functions)
  * [TRUNCATE](/reference/sql/sql-functions)
  * [TYPEOF](/reference/sql/sql-functions)
  * [UCASE](/reference/sql/sql-functions)
  * [UNBASE64](/reference/sql/sql-functions)
  * [UNHEX](/reference/sql/sql-functions)
  * [UNIX_TIMESTAMP](/reference/sql/sql-functions)
  * [UPPER](/reference/sql/sql-functions)
  * [WEEK](/reference/sql/sql-functions)
  * [WEEKOFYEAR](/reference/sql/sql-functions)
  * [YEAR](/reference/sql/sql-functions)


## Unsupported Capabilities​
The `SELECT` statement used for transforming data in the `COPY INTO` SQL command has the following restrictions:
  * `WHERE` clause
  * `ORDER BY` statement
  * `GROUP BY` statement
  * `JOIN`
  * aggregate and window functions


## Unsupported file types​
The `COPY INTO` with transformations capability does not support JSON, AVRO, or ORC file types.
Was this page helpful?
[Previous Optimize Tables](/developer/data-formats/apache-iceberg/table-maintenance-optimization/optimizing)[Next Parquet](/developer/data-formats/parquet)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Optimize Tables](/developer/data-formats/apache-iceberg/table-maintenance-optimization/optimizing)[Next Parquet](/developer/data-formats/parquet)
!!
