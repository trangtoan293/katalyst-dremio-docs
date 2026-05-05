---
url: /load-data/autoingestion
slug: /load-data/autoingestion
title: "Autoingest Data into Apache Iceberg | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64061.346273875
---

  * [Dremio Enterprise Home](/)
  * [Load Data](/load-data)
  * Autoingest Data into Apache Iceberg

Version: current [26.x]
On this page
# Autoingest Data into Apache Iceberg Enterprise
You can use autoingest pipes to automatically ingest data into Apache Iceberg tables.
Autoingest pipes are objects in Dremio that represent event-driven [ingestion pipelines](https://www.dremio.com/wiki/ingestion-pipelines/), which collect and load data into a centralized data repository for further analysis and utilization. Event-driven ingestion, or autoingestion, occurs when a new file is added to a specified cloud storage location, which sets off an event in Dremio to copy the new file into an Iceberg table. Dremio automatically ingests the file with [micro-batch processing](https://www.dremio.com/wiki/micro-batch-processing/), loading files in small, predefined batches at regular intervals.
  * **File Deduplication** : [File deduplication](https://www.dremio.com/wiki/deduplication/) eliminates copies of files and enhances storage utilization. Dremio's autoingest pipes provide file deduplication by ensuring that your pipe loads semantics only once and preventing files with the same name from loading in a given time period (the DEDUPE_LOOKBACK_PERIOD).
  * **Event-Based Execution of COPY INTO** : After a new file is added in the source location, an event is sent to Dremio to run a [COPY INTO](/reference/sql/commands/apache-iceberg-tables/copy-into-table) statement. Ingested files are processed in [micro-batches](https://www.dremio.com/wiki/micro-batch-processing/) to optimize user resources and ensure that the data is efficiently loaded into Dremio.
  * **Execution Monitoring and Error Handling** : For common issues that can occur with data pipelines, such as single rows that do not conform to the target table schema or read permissions being revoked on the source, Dremio takes the appropriate action to alert the user and suggest potential solutions.
  * **Efficient Batching for Optimal Engine Utilization** : When implementing an event-based loading system, users often execute a load command for every file immediately after the file is added to cloud storage. This frequent loading increases the likelihood that Iceberg file sizes will be smaller than the optimal size and the engine will be overutilized. Both of these issues result in higher total cost of ownership because they require running [OPTIMIZE TABLE](/reference/sql/commands/apache-iceberg-tables/optimize-table) jobs more frequently to compact Iceberg tables, which uses engine resources inefficiently. Dremio’s autoingest pipes efficiently organize requests into micro-batches that minimize the cost of loading data and maintain acceptable [latency](https://www.dremio.com/wiki/latency/) in a data lifecycle.


Autoingest pipes can only ingest data from Amazon S3 sources in Dremio.
## Autoingest Pipe Operation​
When you use the [CREATE PIPE](/reference/sql/commands/create-pipe) SQL command to create an autoingest pipe, use the following parameters to define the pipe's behavior. Read Configuring an Autoingest Pipe for examples that show how to use these parameters.
Syntax for CREATE PIPE

```
CREATE PIPE [ IF NOT EXISTS ] <pipe_name>  
  [ DEDUPE_LOOKBACK_PERIOD <number_of_days> ]  
  NOTIFICATION_PROVIDER <notification_provider>  
  NOTIFICATION_QUEUE_REFERENCE <notification_queue_ref>  
  AS COPY INTO <table_name>  
    [ AT BRANCH <branch_name> ]  
    FROM '@<storage_location_name>/[ /<folder_name> ]'  
    [ FILE_FORMAT 'csv' | 'json' | 'parquet']  
    [ ( [csv_format_options] | [json_format_options] | [parquet_format_options]) ]  

```
  
| Parameter  | Description  |  
| --- | --- |  
| DEDUPE_LOOKBACK_PERIOD  | Optional parameter that specifies how many days to look back when comparing incoming files to previously loaded files. If the autoingest pipe writes two files with the same name to the storage location within the lookback period, Dremio considers the second file a duplicate record and does not load it, even if a user explicitly deletes and reuploads a file with the same name. The default value is 14 days. You can set the DEDUPE_LOOKBACK_PERIOD parameter to any value from 0 to 90 days. If you set the parameter to 0 days, Dremio does not perform file deduplication.  |  
| NOTIFICATION_PROVIDER  | Required parameter that specifies the provider of the event notification queue.  |  
| NOTIFICATION_QUEUE_REFERENCE  | Required parameter that specifies the unique identifier of the event notification queue.  |  
| [COPY INTO](/reference/sql/commands/apache-iceberg-tables/copy-into-table)  | Required parameter that specifies the target table and expected file format.  |  
| @&lt;storage-location-name&gt;  | Required parameter that specifies the storage directory where new files are loaded. Autoingest pipes can load from a hierarchical directory structure, but they do not load file paths or Hive partition columns that are embedded in the file paths.  |  
## Configuring an Autoingest Pipe​
Follow the steps in this section to configure an autoingest pipe.
### Prerequisites​
For the configuration, you will need to address the following prerequisites:
  * Use an [Amazon S3 bucket](/data-sources/object/s3)
  * Enable 
  * Route event notifications to an 


### Step 1: Create an Iceberg Table​
You can create the table in any catalog, although the table schema must match the expected schema for all files in the cloud storage source. See the example below:
Example of creating an Iceberg table

```
CREATE TABLE Pipe_sink  
  (Col_one int, Col_two varchar)  

```

If a file has at least one record that does not match the schema, Dremio skips the entire file. To check the file load status, see [`sys.copy_file_history`](/reference/sql/system-tables/copy-file-history).
### Step 2: Create an Autoingest Pipe​
When you use the CREATE PIPE command to create an autoingest pipe, you must use a preconfigured data source in Dremio that allows for ingesting files, which is used as the `@`storage_location_name`` in the COPY INTO statement. In this source, you can specify the folder or its subfolders by adding `/`folder_name``. Any new files that are added to the specified folder or its subdirectories are loaded into the target table.
The following example shows how to create an autoingest pipe for an Amazon S3 source:
Example of creating a pipe

```
CREATE PIPE Example_pipe  
  NOTIFICATION_PROVIDER AWS_SQS  
  NOTIFICATION_QUEUE_REFERENCE "arn:aws:sqs:us-east-2:444455556666:queue1"  
  AS COPY INTO Pipe_sink  
    FROM '@s3_source/folder'  
    FILE_FORMAT 'csv'  

```

The `NOTIFICATION_QUEUE_REFERENCE` is the Amazon Resource Name (ARN) of the SQS queue where S3 event notifications are sent.
### Step 3: Add New Files to Your Amazon S3 Source​
Now that you have established connectivity between your SQS queue and Dremio, the autoingest pipe will run every time you add new files to the source.
For other autoingest pipe commands, see [ALTER PIPE](/reference/sql/commands/alter-pipe), [DESCRIBE PIPE](/reference/sql/commands/describe-pipe), and [DROP PIPE](/reference/sql/commands/drop-pipe).
## Recommendations​
### Iceberg Optimization​
If a pipe is operating frequently, you may need to run [OPTIMIZE TABLE](/reference/sql/commands/apache-iceberg-tables/optimize-table) to compact small data files in your Iceberg table. The frequency of maintenance depends on the incoming file size and load frequency.
Was this page helpful?
[Previous Load Data](/load-data)[Next Clustering](/load-data/clustering)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Load Data](/load-data)[Next Clustering](/load-data/clustering)
!
