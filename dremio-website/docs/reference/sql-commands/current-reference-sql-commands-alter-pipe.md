---
url: /reference/sql/commands/alter-pipe
title: "ALTER PIPE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64248.86099375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * ALTER PIPE

Version: current [26.x]
On this page
# ALTER PIPE Enterprise
Changes an existing autoingest pipe. This command only applies to Apache Iceberg tables.
Syntax

```
ALTER PIPE <pipe_name>  
  { SET PIPE_EXECUTION_RUNNING = { TRUE | FALSE }  
    | [ DEDUPE_LOOKBACK_PERIOD <number_of_days> ]  
      AS COPY INTO <table_name>  
      [ AT BRANCH <branch_name> ]  
      FROM '@<storage_location_name>'                                   
        [ FILE_FORMAT 'csv' | 'json' | 'parquet']  
        [ ( [csv_format_options] | [json_format_options] | [parquet_format_options]) ]  
  }  

```

csv_format_options

```
[ DATE_FORMAT '<string>' ]  
[ EMPTY_AS_NULL [ '<boolean>' ]  [, ...] ]  
[ ESCAPE_CHAR '<escape_character>' ]  
[ EXTRACT_HEADER '<boolean>' ]  
[ FIELD_DELIMITER '<character>' ]  
[ NULL_IF ( '<string>' [, ...] ) ]  
[ ON_ERROR 'skip_file' ]  
[ QUOTE_CHAR '<character>' ]  
[ RECORD_DELIMITER '<character>' ]  
[ SKIP_LINES <n> ]  
[ TIME_FORMAT '<string>' ]  
[ TIMESTAMP_FORMAT '<string>' ]  
[ TRIM_SPACE [ '<boolean>' ] ]  

```

json_format_options

```
[ DATE_FORMAT '<string>' ]  
[ EMPTY_AS_NULL [ '<boolean>' ]  [, ...] ]  
[ NULL_IF ( '<string>' [, ...] ) [, ...] ]  
[ ON_ERROR 'skip_file' ]  
[ TIME_FORMAT '<string>' ]  
[ TIMESTAMP_FORMAT '<string>' ]  
[ TRIM_SPACE [ '<boolean>' ] ]  

```

parquet_format_options

```
[ ON_ERROR 'skip_file' ]  

```

## Parameters[​](/reference/sql/commands/alter-pipe#parameters "Direct link to Parameters")
`pipe_name` String
The unique name of the autoingest pipe that you are altering. The name cannot be modified.
* * *
SET PIPE_EXECUTION_RUNNING = {'{'})'{'{'})'{'}'}) TRUE | FALSE {'{'})'{'}'}'{'}'} Optional
Determines whether a pipe triggers a COPY INTO statement when Dremio receives a notification. If set to `FALSE`, the pipe is paused. Default is `TRUE`.
* * *
DEDUPE_LOOKBACK_PERIOD String Optional
The number of days that Dremio should look back when checking for file deduplication. The default is 14 days, but you can set the number between 0 to 90 days. If you set the parameter to 0 days, Dremio does not perform file deduplication.
If two files with the same name are written to specified storage location within the DEDUPE_LOOKBACK_PERIOD, then the second file is considered a duplicate record and is not loaded, even if you explicitly delete and reupload a file of the same name.
* * *
AS COPY INTO `table_name` String
Use the COPY INTO command to specify the target table. The name of the target Iceberg table should include the necessary qualifier if the table is not in the current context. Example: `catalog.salesschema.table2`. Updating the target table is not supported in the ALTER PIPE command.
If you're trying to set a password for an external user via the ALTER USER command, Dremio will return with an error message. Password changes may not be done for external users with Dremio.
* * *
AT BRANCH `branch_name` String Optional
The reference at which you want the new autoingest pipe to be created. When this parameter is omitted, the current reference is used. The default branch is main. Updating the target branch is not supported in the ALTER PIPE command.
The ``branch_name`` cannot be modified.
* * *
@`storage_location_name` String
The storage location that you want to load files from. The location must be a preconfigured Dremio source. Changing the source name is not supported in the ALTER PIPE command.
Autoingest pipes can only ingest data from Amazon S3 sources in Dremio.
* * *
[ FILE_FORMAT 'csv' | 'json' | 'parquet' ] String Optional
The format of the file or files to copy data from. FILE_FORMAT must be specified, and all files loaded in the COPY INTO operation must be of the same file format.
You can use uncompressed or compressed CSV and JSON files. Compressed files must be in the gzip format, using the .gz extension, or in the bzip2 format, using the .bz2 extension.
* * *
[csv_format_options](/reference/sql/commands/alter-pipe#csv-format-options) String
Options that describe the formats and other characteristics of the source `CSV` file or files.
* * *
[json_format_options](/reference/sql/commands/alter-pipe#json-format-options) String
Options that describe the formats and other characteristics of the source `JSON` file or files.
* * *
[parquet_options](/reference/sql/commands/alter-pipe#parquet-format-options) String
Options that describe the formats and other characteristics of the source `PARQUET` file or files.
Only the `ON ERROR` option is supported for Parquet source files.
* * *
### CSV Format Options[​](/reference/sql/commands/alter-pipe#csv-format-options "Direct link to CSV Format Options")
DATE_FORMAT '`string`' String Optional
String that defines the format of date values in the data files to be loaded. If a value is not specified, YYYY-MM-DD is used. See [Date/Time Formatting](/reference/sql/sql-functions) for more format elements.
* * *
EMPTY_AS_NULL [ '`boolean`' ] String Optional
Boolean that specifies whether an empty string is considered a `NULL` field or an empty string. If a value is not specified, `TRUE` is used.
* * *
ESCAPE_CHAR '`escape_character`' String Optional
A single character used as the escape character for the character specified by QUOTE_CHAR. The escape character provides a way to include the QUOTE_CHAR character inside a string literal by modifying the meaning of that character in the string. If a value is not specified, `"` is used.
* * *
EXTRACT_HEADER '`boolean`' String Optional
Boolean that specifies if the first line in the CSV is a header. If a value is not specified, `TRUE` is used. If SKIP_LINES `n` is also specified and EXTRACT_HEADER is set to `TRUE`, the n+1 line in the file is considered the header.
* * *
FIELD_DELIMITER '`character`' String Optional
The single character used to separate fields in the file. If a value is not specified, "," is used.
* * *
NULL_IF ( '`string`' [, ...] ) String Optional
Replace strings in the data load source with `NULL`.
* * *
ON_ERROR 'skip_file' String Optional
Specifies that the COPY INTO operation should stop processing the input file at the first error it encounters during the loading process.
ON_ERROR 'skip_file' is on by default for all autoingest pipes. No other ON_ERROR options are supported.
The first potential error is registered in the [`sys.copy_errors_history`](/reference/sql/system-tables/copy-errors-history) table, which you can query to get information about the job that ran the COPY INTO operation.
To get information about rejected records in particular files, query the `sys.copy_errors_history` table to obtain the ID of the job that ran the COPY INTO operation. Then, use the [`copy_errors()` function](/reference/sql/commands#querying-information-about-rejected-records-in-files-used-by-a-copy-into-operation-for-which-on_error-was-set-to-continue-or-skip_file) in a `SELECT` command, specifying the job ID and the name of the target table.
The 'skip_file' option does not insert any rows from an input file that contains an error and only registers the first error in an input file and stops processing. As a result, the 'skip_file' option requires extra processing on the input files, regardless of the number of errors the input files contain. Skipping large files due to a small number of errors can delay the COPY INTO operation.
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
String that defines the format of time values in the data files to be loaded. If a value is not specified, HH24:MI:SS.FFF is used. See [Date/Time Formatting](/reference/sql/sql-functions) for more format elements.
* * *
TIMESTAMP_FORMAT '`string`' String Optional
String that defines the format of timestamp values in the data files to be loaded. If a value is not specified, YYYY-MM-DD HH24:MI:SS.FFF is used. See [Date/Time Formatting](/reference/sql/sql-functions) for more format elements.
* * *
TRIM_SPACE [ '`boolean`' ] String Optional
Boolean that specifies whether or not to remove leading and trailing white space from strings. The default is FALSE.
### JSON Format Options[​](/reference/sql/commands/alter-pipe#json-format-options "Direct link to JSON Format Options")
DATE_FORMAT '`string`' String Optional
String that defines the format of date values in the data files to be loaded. If a value is not specified, YYYY-MM-DD is used. See [Date/Time Formatting](/reference/sql/sql-functions) for more format elements.
* * *
EMPTY_AS_NULL [ '`boolean`' ] String Optional
Boolean that specifies whether an empty string is considered a `NULL` field or an empty string. If a value is not specified, `TRUE` is used.
* * *
NULL_IF ( '`string`' [, ...] ) String Optional
Replace strings in the data load source with `NULL`.
* * *
ON_ERROR 'skip_file' String Optional
Specifies that the COPY INTO operation should stop processing the input file at the first error it encounters during the loading process.
ON_ERROR 'skip_file' is on by default for all autoingest pipes. No other ON_ERROR options are supported.
The first potential error is registered in the [`sys.copy_errors_history`](/reference/sql/system-tables/copy-errors-history) table, which you can query to get information about the job that ran the COPY INTO operation.
To get information about rejected records in particular files, query the `sys.copy_errors_history` table to obtain the ID of the job that ran the COPY INTO operation. Then, use the [`copy_errors()` function](/reference/sql/commands#querying-information-about-rejected-records-in-files-used-by-a-copy-into-operation-for-which-on_error-was-set-to-continue-or-skip_file) in a `SELECT` command, specifying the job ID and the name of the target table.
The 'skip_file' option does not insert any rows from an input file that contains an error and only registers the first error in an input file and stops processing. As a result, the 'skip_file' option requires extra processing on the input files, regardless of the number of errors the input files contain. Skipping large files due to a small number of errors can delay the COPY INTO operation.
* * *
TIME_FORMAT '`string`' String Optional
String that defines the format of time values in the data files to be loaded. If a value is not specified, HH24:MI:SS.FFF is used. See [Date/Time Formatting](/reference/sql/sql-functions) for more format elements.
* * *
TIMESTAMP_FORMAT '`string`' String Optional
String that defines the format of timestamp values in the data files to be loaded. If a value is not specified, YYYY-MM-DD HH24:MI:SS.FFF is used. See [Date/Time Formatting](/reference/sql/sql-functions) for more format elements.
* * *
TRIM_SPACE [ '`boolean`' ] String Optional
Boolean that specifies whether or not to remove leading and trailing white space from strings. The default is FALSE.
### Parquet Format Options[​](/reference/sql/commands/alter-pipe#parquet-format-options "Direct link to Parquet Format Options")
ON_ERROR 'skip_file' String Optional
Specifies that the COPY INTO operation should stop processing the input file at the first error it encounters during the loading process.
ON_ERROR 'skip_file' is on by default for all autoingest pipes. No other ON_ERROR options are supported.
The first potential error is registered in the [`sys.copy_errors_history`](/reference/sql/system-tables/copy-errors-history) table, which you can query to get information about the job that ran the COPY INTO operation.
To get information about rejected records in particular files, query the `sys.copy_errors_history` table to obtain the ID of the job that ran the COPY INTO operation. Then, use the [`copy_errors()` function](/reference/sql/commands#querying-information-about-rejected-records-in-files-used-by-a-copy-into-operation-for-which-on_error-was-set-to-continue-or-skip_file) in a `SELECT` command, specifying the job ID and the name of the target table.
The 'skip_file' option does not insert any rows from an input file that contains an error and only registers the first error in an input file and stops processing. As a result, the 'skip_file' option requires extra processing on the input files, regardless of the number of errors the input files contain. Skipping large files due to a small number of errors can delay the COPY INTO operation.
## Examples[​](/reference/sql/commands/alter-pipe#examples "Direct link to Examples")
Pause the autoingest pipe to send a COPY INTO statement

```
ALTER PIPE test_pipe    
  SET PIPE_EXECUTION_RUNNING = FALSE  

```

Alter the autoingest pipe by changing the storage location

```
ALTER PIPE test_pipe    
  AS COPY INTO Table_one  
    FROM ‘@s3_source’  
    FILE_FORMAT 'json'  

```

Was this page helpful?
[Previous ALTER FOLDER](/reference/sql/commands/alter-folder)[Next ALTER SOURCE](/reference/sql/commands/alter-source)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ALTER FOLDER](/reference/sql/commands/alter-folder)[Next ALTER SOURCE](/reference/sql/commands/alter-source)
