---
url: /reference/sql/commands/apache-iceberg-tables/copy-into-table
slug: /reference/sql/commands/apache-iceberg-tables/copy-into-table
title: "COPY INTO | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64250.808176333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * [SQL Commands for Apache Iceberg Tables](/reference/sql/commands/apache-iceberg-tables)
  * COPY INTO

Version: current [26.x]
On this page
# COPY INTO
You can load data from CSV, JSON, or Parquet files that are in a source into an existing Apache Iceberg table.
For information about how the `COPY INTO `table`` operation works, as well as the supported storage locations and requirements, see [Copying Data Into Apache Iceberg Tables](/developer/data-formats/apache-iceberg/copying-data-into-tables).
## Syntax​
Syntax

```
/*Data load*/  
COPY INTO <table_name>  
  [ AT { REF[ERENCE] | BRANCH } <reference_name> ]  
  FROM '@<storage_location_name>[/<path>[/<file_name>] ]'  
  [ FILES ( '<file_name>' [ , ... ] ) |  
    REGEX '<regex_pattern>' ]  
[ FILE_FORMAT 'csv' | 'json' | 'parquet' ]  
[ ( [csv_options] | [json_options] | [parquet_options] ) ]  
  
/*Data load with transformations*/  
COPY INTO <table_name>  
    FROM ( SELECT [ $<file_column_number> | <file_column_name> ] [ , ... ]  
      FROM '@<storage_location_name>[/<path>[/<file_name>] ]')  
      [ FILES ( '<file_name>' [ , ... ] ) | REGEX '<regex_pattern>' ]  
[ FILE_FORMAT 'csv' | 'parquet' ]  
[ ( [csv_options] | [parquet_options] ) ]  

```

csv_options

```
[ DATE_FORMAT '<string>' ]  
[ EMPTY_AS_NULL [ '<boolean>' ]  [, ...] ]  
[ ESCAPE_CHAR '<escape_character>' ]  
[ EXTRACT_HEADER '<boolean>' ]  
[ FIELD_DELIMITER '<character>' ]  
[ NULL_IF ( '<string>' [, ...] ) ]  
[ ON_ERROR { 'abort' | 'continue' | 'skip_file' } ]  
[ QUOTE_CHAR '<character>' ]  
[ RECORD_DELIMITER '<character>' ]  
[ SKIP_LINES <n> ]  
[ TIME_FORMAT '<string>' ]  
[ TIMESTAMP_FORMAT '<string>' ]  
[ TRIM_SPACE [ '<boolean>' ] ]  

```

json_options

```
[ DATE_FORMAT '<string>' ]  
[ EMPTY_AS_NULL [ '<boolean>' ]  [, ...] ]  
[ NULL_IF ( '<string>' [, ...] )[, ...] ]  
[ ON_ERROR { 'abort' | 'continue' | 'skip_file' } ]  
[ TIME_FORMAT '<string>' ]  
[ TIMESTAMP_FORMAT '<string>' ]  
[ TRIM_SPACE [ '<boolean>' ] ]  

```

parquet_options

```
[ ON_ERROR { 'abort' | 'skip_file' } ]  

```

## Parameters​
`table_name` String
The name of the table, which can also include the necessary qualifier if the table is not in the current context. Example: `Samples.'samples.dremio.com'.'NYC-taxi-trips'`
* * *
AT {'{'})'{'{'})'{'}'}) REF[ERENCE] | BRANCH {'{'})'{'}'}'{'}'} `reference_name` String Optional
(Applicable only to Nessie catalogs) Specifies the reference at which the table exists. When this parameter is omitted, the current reference is used.
  * `REF` or `REFERENCE`: Identifies the specific reference.
  * `BRANCH`: Identifies the specific branch.


* * *
SELECT '[$`file_column_number` | `file_column_name`] [ , ... ] ' String Optional
Within the `SELECT` subquery, you can reference columns from the source file using either:
  * ``file_column_number``: Specifies the positional number (1-based) of the column in the file. Applies only to CSV files without headers.
  * ``file_column_name``: Specifies the column name from the source file. Applies to CSV and Parquet files.


* * *
'@`storage_location_name`[/`path`[/`filename`] ]' String
Specifies the file system location to load files from. The location provided must be a preconfigured Dremio Source such that only the storage location name and file path need to be provided.
  * The location path can be a directory or a specific file name.
  * If a specific file is provided then the `COPY INTO` operation works only on that file.
  * If instead a directory path is provided without a file name then the operation operates on all files in the directory including subdirectories recursively.


* * *
[ FILES ( '`file_name`' [ , ... ] ) | REGEX '`regex_pattern`' ] String Optional
Specifies a list of files to be loaded in the `FILES` clause. The files must already have been staged in the storage location specified in the FROM clause. The statement will error when one or more file specified is not found or not accessible. ``file_name`` is of format `[`directory_name`]/`file_name``.
Alternatively, specifies a regular expression pattern string in the `REGEX` clause, enclosed in single quotes, specifying the file names, paths, or both to match. Path is matched relative to the storage location. The expression must be in a Perl-compatible format.
For best performance, avoid applying patterns that filter on a large number of files.
You can use either `FILES` or `REGEX`, but not both.
  * The maximum number of file names that can be specified is 1000.
  * This clause is mutually exclusive with the `[/`file_name`]` option in the previous clause.


* * *
[ FILE_FORMAT 'csv' | 'json' | 'parquet' ] String Optional
The format of the file or files to copy data from.
  * If not specified, the file format is determined based upon the file extension, which means that the file extension is required if `FILE_FORMAT` is not specified.
  * To load files that do not have an extension, `FILE_FORMAT` must be specified.
  * All files loaded in a `COPY INTO` operation must be of the same file format.


You can use uncompressed or compressed CSV and JSON files. Compressed files must be in the gzip format, using the .gz extension, or in the bzip2 format, using the .bz2 extension.
* * *
csv_options String
Options that describe the formats and other characteristics of the source `CSV` file or files.
* * *
json_options String
Options that describe the formats and other characteristics of the source `JSON` file or files.
* * *
parquet_options String
Options that describe the formats and other characteristics of the source `PARQUET` file or files.
Only the `ON ERROR` option is supported for Parquet source files.
### CSV Format Options​
DATE_FORMAT '`string`' String Optional
String that defines the format of date values in the data files to be loaded. If a value is not specified, YYYY-MM-DD is used. See [Date/Time Formatting](/reference/sql/sql-functions) for additional formatting options.
* * *
EMPTY_AS_NULL [ '`boolean`' ] String Optional
Boolean that specifies whether an empty string is considered a NULL field or an empty string. If a value is not specified, `TRUE` is used.
* * *
ESCAPE_CHAR '`escape_character`' String Optional
A single character used as the escape character for the character specified by `QUOTE_CHAR`. The escape character provides a way to include the QUOTE_CHAR character inside a string literal by modifying the meaning of that character in the string. If a value is not specified, `"` is used.
* * *
EXTRACT_HEADER '`boolean`' String Optional
Boolean that specifies if the first line in the CSV is a header. If a value is not specified, `TRUE` is used. If SKIP_LINES `n` is also specified and EXTRACT_HEADER is set to `TRUE`, the n+1 line in the file is considered to be the header.
* * *
FIELD_DELIMITER '`character`' String Optional
The single character used to separate fields in the file. If a value is not specified, `,` is used.
* * *
NULL_IF ( '`string`' [, ...] ) String Optional
Replace strings in the data load source with `NULL`.
* * *
ON_ERROR {'{'})'{'{'})'{'}'}) 'abort' | 'continue' | 'skip_file' {'{'})'{'}'}'{'}'} String Optional
Specifies what to do if an error is encountered during the loading process.
  * 'abort'  
Specifies that the COPY INTO operation should immediately abort if it encounters an error. This is the default option.
  * 'continue'  
Specifies that the COPY INTO operation should continue if it encounters an error.
Every record that cannot be parsed in a CSV file is rejected; however, all records that can be parsed in the file are processed. The exception is that, if the currently parsed element exceeds the configured field size limit (which is configured by `limits.single_field_size_bytes`), the rest of the file is rejected.
When the copy operation is complete, the output displays the number of records loaded into the Iceberg table and the number of rejected records.
If there is at least one rejected record, you can query the system table [`sys.copy_errors_history`](/reference/sql/system-tables/copy-errors-history) to find out information about the job that ran the COPY INTO operation.
To obtain information about rejected records in particular files, query the `sys.copy_errors_history` system table to obtain the ID of the job that ran the COPY INTO operation. Then, use the [`copy_errors()` function](/reference/sql/commands) in a `SELECT` command, specifying the job ID and the name of the target table.
  * 'skip_file'  
Specifies that the COPY INTO operation should stop processing the input file at the first error it encounters.
The 'skip_file' option requires extra processing on the input files, regardless of the number of errors the input files contain. As a result, the 'skip_file' option is slower than the 'abort' and 'continue' options. Skipping large files due to a small number of errors can delay the COPY INTO operation.
The first potential error is registered in the [`sys.copy_errors_history`](/reference/sql/system-tables/copy-errors-history) system table, which you can query to get information about the job that ran the COPY INTO operation.
To get information about rejected records in particular files, query the `sys.copy_errors_history` system table to obtain the ID of the job that ran the COPY INTO operation. Then, use the [`copy_errors()` function](/reference/sql/commands) in a `SELECT` command, specifying the job ID and the name of the target table.
The 'skip_file' option differs from the 'continue' option as follows:
    * The 'skip_file' option does not insert any rows from an input file that contains an error, whereas the 'continue' option may insert correct rows.
    * The 'skip_file' option only registers the first error in an input file and stops processing, whereas the 'continue' option may register several errors in the same file.


* * *
QUOTE_CHAR '`character`' String Optional
The single character used to quote field data within a record. The default is a double-quotation mark.
* * *
RECORD_DELIMITER '`character`' String Optional
One or more characters that separate records in an input file. Accepts common escape sequences. If a value is not specified, \r\n is used.
* * *
SKIP_LINES `n` Integer Optional
Number of lines to ignore at the beginning of each input file. If no value is given, no lines are skipped. Must be a non-negative integer. If SKIP_LINES `n` is specified and EXTRACT_HEADER is also set to `TRUE`, the n+1 line in the file is considered to be the header.
* * *
TIME_FORMAT '`string`' String Optional
String that defines the format of time values in the data files to be loaded. If a value is not specified, HH24:MI:SS.FFF is used. See [Date/Time Formatting](/reference/sql/sql-functions) for additional formatting options.
* * *
TIMESTAMP_FORMAT '`string`' String Optional
String that defines the format of timestamp values in the data files to be loaded. If a value is not specified, YYYY-MM-DD HH24:MI:SS.FFF is used. See [Date/Time Formatting](/reference/sql/sql-functions) for additional formatting options.
* * *
TRIM_SPACE [ '`boolean`' ] String Optional
Boolean that specifies whether or not to remove leading and trailing white space from strings. The default is FALSE.
### JSON Format Options​
DATE_FORMAT '`string`' String Optional
String that defines the format of date values in the data files to be loaded. If a value is not specified, YYYY-MM-DD is used. See [Date/Time Formatting](/reference/sql/sql-functions) for additional formatting options.
* * *
EMPTY_AS_NULL [ '`boolean`' ] String Optional
Boolean that specifies whether an empty string is considered a NULL field or an empty string. If a value is not specified, `TRUE` is used.
* * *
NULL_IF ( '`string`' [, ...] ) String Optional
Replace strings in the data load source with NULL.
* * *
ON_ERROR {'{'})'{'{'})'{'}'}) 'abort' | 'continue' | 'skip_file' {'{'})'{'}'}'{'}'} String Optional
Specifies what to do if an error is encountered during the loading process.
  * 'abort'  
Specifies that the COPY INTO operation should immediately abort if it encounters an error. This is the default option.
  * 'continue'  
Specifies that the COPY INTO operation should continue if it encounters an error.
If a record in a JSON file cannot be parsed, that record and all subsequent records in the file are rejected.
When the copy operation is complete, the output displays the number of records loaded into the Iceberg table and the number of rejected records.
If there is at least one rejected record, you can query the system table [`sys.copy_errors_history`](/reference/sql/system-tables/copy-errors-history) to find out information about the job that ran the COPY INTO operation.
To obtain information about rejected records in particular files, query the `sys.copy_errors_history` system table to obtain the ID of the job that ran the COPY INTO operation. Then, use [the `copy_errors()` function](/reference/sql/commands) in a `SELECT` command, specifying the job ID and the name of the target table.
  * 'skip_file'  
Specifies that the COPY INTO operation should stop processing the input file at the first error it encounters.
The 'skip_file' option requires extra processing on the input files, regardless of the number of errors the input files contain. As a result, the 'skip_file' option is slower than the 'abort' and 'continue' options. Skipping large files due to a small number of errors can delay the COPY INTO operation.
The first potential error is registered in the [`sys.copy_errors_history`](/reference/sql/system-tables/copy-errors-history) system table, which you can query to get information about the job that ran the COPY INTO operation.
To get information about rejected records in particular files, query the `sys.copy_errors_history` system table to obtain the ID of the job that ran the COPY INTO operation. Then, use the [`copy_errors()` function](/reference/sql/commands) in a `SELECT` command, specifying the job ID and the name of the target table.
The 'skip_file' option differs from the 'continue' option as follows:
    * The 'skip_file' option does not insert any rows from an input file that contains an error, whereas the 'continue' option may insert correct rows.
    * The 'skip_file' option only registers the first error in an input file and stops processing, whereas the 'continue' option may register several errors in the same file.


* * *
TIME_FORMAT '`string`' String Optional
String that defines the format of time values in the data files to be loaded. If a value is not specified, HH24:MI:SS.FFF is used. See [Date/Time Formatting](/reference/sql/sql-functions) for additional formatting options.
* * *
TIMESTAMP_FORMAT '`string`' String Optional
String that defines the format of timestamp values in the data files to be loaded. If a value is not specified, YYYY-MM-DD HH24:MI:SS.FFF is used. See [Date/Time Formatting](/reference/sql/sql-functions) for additional formatting options.
* * *
TRIM_SPACE [ '`boolean`' ] String Optional
Boolean that specifies whether or not to remove leading and trailing white space from strings. The default is `FALSE`.
* * *
### PARQUET Format Options​
ON_ERROR {'{'})'{'{'})'{'}'}) 'abort' | 'skip_file' {'{'})'{'}'}'{'}'} String Optional
Specifies what to do if an error is encountered during the loading process.
  * 'abort'  
Specifies that the COPY INTO operation should immediately abort if it encounters an error. This is the default option.
  * 'skip_file'  
Specifies that the COPY INTO operation should stop processing the input file at the first error it encounters.
The 'skip_file' option requires extra processing on the input files, regardless of the number of errors the input files contain. As a result, the 'skip_file' option is slower than the 'abort' option. Skipping large files due to a small number of errors can delay the COPY INTO operation.
The first potential error is registered in the [`sys.copy_errors_history`](/reference/sql/system-tables/copy-errors-history) system table, which you can query to get information about the job that ran the COPY INTO operation.
To get information about rejected records in particular files, query the `sys.copy_errors_history` system table to obtain the ID of the job that ran the COPY INTO operation. Then, use the [`copy_errors()` function](/reference/sql/commands) in a `SELECT` command, specifying the job ID and the name of the target table.


## Output​
The command returns this output:  
| Column name  | Description  |  
| --- | --- |  
| Rows Inserted  | The number of rows loaded from the source data files.  |  
## Examples​
Copying the data from all files present in a folder

```
COPY INTO context.MyTable  
  FROM '@SOURCE/bucket/path/folder/'  
  FILE_FORMAT 'json'  

```

Copying the data from a specific file in a directory

```
COPY INTO context.myTable  
  FROM '@SOURCE/bucket/path/folder/file1.json'  

```

Copying the data from files by using a regular expression pattern string matching filename

```
COPY INTO context.myTable  
  FROM '@SOURCE/bucket/path/folder'  
  REGEX '.*.csv'  

```

Copying the data from files by using a regular expression pattern string matching filename and path

```
COPY INTO 'context.myTable'  
  FROM '@SOURCE/bucket/path/folder'  
  REGEX '^2020-11-1[2-3]/.*/'  
  FILE_FORMAT 'json'  

```

Copying the data from files by using a regular expression pattern string in the specified file format

```
COPY INTO context.myTable  
  FROM '@SOURCE/bucket/path/folder'  
  REGEX 'part.*'  
  FILE_FORMAT 'json'  

```

Copying the data from a list of files present on a Dremio source

```
COPY INTO context.myTable  
  FROM '@SOURCE/bucket/path/folder'  
  FILES ('foo.csv', 'dir/bar.csv')  

```

Copying the data from files that contain DATE and TIME types

```
COPY INTO context.myTable  
  FROM '@SOURCE/bucket/path/folder'  
  FILES ('date_time_data_file1.csv', 'date_time_data_file2.csv')  
  (DATE_FORMAT 'DD-MM-YYYY', TIME_FORMAT 'HH24:MI:SS')  

```

Copying the data from CSV files and replacing certain entries with NULL, if encountered

```
COPY INTO context.myTable  
  FROM '@SOURCE/bucket/path/folder'  
  FILES ('file1.csv', 'file2.csv', 'file3.csv')  
  (NULL_IF ('None', 'NA'))  

```

Copying data and making the following transformations: Trimming any leading and trailing whitespaces for each entry, and treating empty values as NULL

```
COPY INTO context.myTable  
  FROM '@SOURCE/bucket/path/folder'  
  (TRIM_SPACE 'true', EMPTY_AS_NULL 'true')  

```

Copying the data from CSV files into a table with RECORD_DELIMITER and FIELD DELIMITER clauses

```
COPY INTO context.myTable  
  FROM '@SOURCE/bucket/path/folder'  
  FILE_FORMAT 'csv'  
  (RECORD_DELIMITER '\n', FIELD_DELIMITER '\t')  

```

Copying the data from a CSV file into a table with an ESCAPE_CHAR clause

```
COPY INTO context.myTable  
  FROM '@SOURCE/bucket/path/folder'  
  FILES ('fileName.csv')  
  (ESCAPE_CHAR '|')  

```

Copying a CSV file into a table and using an ON_ERROR clause

```
COPY INTO context.myTable  
  FROM '@SOURCE/bucket/path/folder'  
  FILES ('fileName.csv')  
  (ON_ERROR 'continue')  

```

Copying the data from all of the Parquet files that are in a folder

```
COPY INTO context.myTable  
FROM '@SOURCE/bucket/path/folder'  
FILE_FORMAT 'parquet'  

```

Copying the data from two Parquet files that are in a folder

```
COPY INTO context.myTable  
FROM '@SOURCE/bucket/path/folder'  
FILES ('file1.parquet', 'file2.parquet')  

```

Reordering columns while copying the data into a table from a CSV file without headers

```
COPY INTO home_sales(city, zip, sale_date, price)  
    FROM (SELECT SUBSTR($2,4), $1, $5, $4 FROM '@mystage/sales.csv');  
FILE_FORMAT   'csv'  
(EXTRACT_HEADER FALSE)  
  

```

Converting data types of columns while copying the data into a table

```
COPY INTO cast_tb(col1, col2, col3)  
    FROM ( SELECT CONVERT_TO(col1, ‘utf-8’) ,  CONVERT_TO(col2, ‘double’), to_timestamp(col3) FROM '@mystage/datafile.csv')  
    FILE_FORMAT  'csv';  

```

Was this page helpful?
[Previous SQL Commands for Apache Iceberg Tables](/reference/sql/commands/apache-iceberg-tables)Next DELETE
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SQL Commands for Apache Iceberg Tables](/reference/sql/commands/apache-iceberg-tables)Next DELETE
!!
