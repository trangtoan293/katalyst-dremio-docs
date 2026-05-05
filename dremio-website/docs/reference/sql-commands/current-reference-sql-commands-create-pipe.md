---
url: /reference/sql/commands/create-pipe
title: "CREATE PIPE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64250.840281375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * CREATE PIPE

Version: current [26.x]
On this page
# CREATE PIPE Enterprise
Create a pipe object that automatically ingests files from a cloud storage location. This command only applies to Apache Iceberg tables.
Syntax

```
CREATE PIPE [ IF NOT EXISTS ] <pipe_name>  
  [ DEDUPE_LOOKBACK_PERIOD <number_of_days> ]  
  NOTIFICATION_PROVIDER <notification_provider>  
  NOTIFICATION_QUEUE_REFERENCE <notification_queue_ref>  
    AS COPY INTO <table_name>  
      [ AT BRANCH <branch_name> ]  
      FROM '@<storage_location_name>'  
      [ FILE_FORMAT 'csv' | 'json' | 'parquet']  
      [ ( [csv_format_options] | [json_format_options] | [parquet_format_options] ) ]  

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

## Parameters[​](/reference/sql/commands/create-pipe#parameters "Direct link to Parameters")
[ IF NOT EXISTS ] String Optional
If you include this clause, the command runs regardless of whether the pipe exists and you receive a summary indicating whether the pipe could be created. If this clause is not specified, the command fails if the pipe to be created already exists.
* * *
`pipe_name` String
The unique name of the autoingest pipe that you are creating.
* * *
DEDUPE_LOOKBACK_PERIOD `number_of_days` Integer Optional
The number of days that Dremio should look back when checking for file deduplication. The default is 14 days, but you can set the number between 0 to 90 days. If you set the parameter to 0 days, Dremio does not perform file deduplication.
If two files with the same name are written to the specified storage location within the DEDUPE_LOOKBACK_PERIOD, then the second file is considered a duplicate record and is not loaded, even if you explicitly delete and reupload a file of the same name.
* * *
NOTIFICATION_PROVIDER `notification_provider`
The provider of event notification queue. For an Amazon S3 source, the provider is `AWS_SQS`.
* * *
NOTIFICATION_QUEUE_REFERENCE `notification_queue_ref`
The unique identifier of the event notification queue. For an Amazon S3 source, an example is `arn:aws:sqs:us-east-2:444455556666:queue1`.
* * *
AS COPY INTO `table_name` String
Use the COPY INTO command to specify the target table. The name of the target Iceberg table should include the necessary qualifier if the table is not in the current context. Example: `catalog.salesschema.table2`.
* * *
AT BRANCH `branch_name` String Optional
The reference at which you want the new autoingest pipe to be created. When this parameter is omitted, the current reference is used. The default branch is main.
* * *
@`storage_location_name` String
The storage location that you want to load files from. The location must be a preconfigured Dremio source.
Autoingest pipes can only ingest data from Amazon S3 sources in Dremio.
* * *
/`folder_name` String Optional
The folder and subfolders that you want to load files from. Add `/`folder_name`` to `@`storage_location_name``.
* * *
FILE_FORMAT 'csv' | 'json' | 'parquet' String
The format of the file or files to copy data from. FILE_FORMAT must be specified, and all files loaded in a COPY INTO operation must be of the same file format.
You can use uncompressed or compressed CSV and JSON files. Compressed files must be in the gzip format, using the .gz extension, or in the bzip2 format, using the .bz2 extension.
* * *
[csv_format_options](/reference/sql/commands/create-pipe#csv-format-options) String
Options that describe the formats and other characteristics of the source `CSV` file or files.
* * *
[json_format_options](/reference/sql/commands/create-pipe#json-format-options) String
Options that describe the formats and other characteristics of the source `JSON` file or files.
* * *
[parquet_options](/reference/sql/commands/create-pipe#parquet-format-options) String
Options that describe the formats and other characteristics of the source `PARQUET` file or files.
Only the `ON ERROR` option is supported for Parquet source files.
### CSV Format Options[​](/reference/sql/commands/create-pipe#csv-format-options "Direct link to CSV Format Options")
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
### JSON Format Options[​](/reference/sql/commands/create-pipe#json-format-options "Direct link to JSON Format Options")
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
### Parquet Format Options[​](/reference/sql/commands/create-pipe#parquet-format-options "Direct link to Parquet Format Options")
ON_ERROR 'skip_file' String Optional
Specifies that the COPY INTO operation should stop processing the input file at the first error it encounters during the loading process.
ON_ERROR 'skip_file' is on by default for all autoingest pipes. No other ON_ERROR options are supported.
The first potential error is registered in the [`sys.copy_errors_history`](/reference/sql/system-tables/copy-errors-history) table, which you can query to get information about the job that ran the COPY INTO operation.
To get information about rejected records in particular files, query the `sys.copy_errors_history` table to obtain the ID of the job that ran the COPY INTO operation. Then, use the [`copy_errors()` function](/reference/sql/commands#querying-information-about-rejected-records-in-files-used-by-a-copy-into-operation-for-which-on_error-was-set-to-continue-or-skip_file) in a `SELECT` command, specifying the job ID and the name of the target table.
## Examples[​](/reference/sql/commands/create-pipe#examples "Direct link to Examples")
Create an autoingest pipe from an Amazon S3 source

```
CREATE PIPE Example_pipe  
  NOTIFICATION_PROVIDER AWS_SQS  
  NOTIFICATION_QUEUE_REFERENCE "arn:aws:sqs:us-east-2:444455556666:queue1"  
  AS COPY INTO Table_one  
    FROM '@s3_source/folder'  
    FILE_FORMAT 'csv'  

```

Create an autoingest pipe with a custom lookback period

```
CREATE PIPE Example_pipe  
  DEDUPE_LOOKBACK_PERIOD 5  
  NOTIFICATION_PROVIDER AWS_SQS  
  NOTIFICATION_QUEUE_REFERENCE "arn:aws:sqs:us-east-2:444455556666:queue1"  
  AS COPY INTO Table_one  
    FROM '@<storage_location_name>/files'  
    FILE_FORMAT 'csv'  

```

Was this page helpful?
[Previous ANALYZE TABLE](/reference/sql/commands/analyze-table)[Next CREATE SPACE](/reference/sql/commands/create-space)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ANALYZE TABLE](/reference/sql/commands/analyze-table)[Next CREATE SPACE](/reference/sql/commands/create-space)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fcreate-pipe%2F&_biz_t=1777950570860&_biz_i=CREATE%20PIPE%20%7C%20Dremio%20Documentation&_biz_n=488&rnd=163725&cdn_o=a&_biz_z=1777950570860)
