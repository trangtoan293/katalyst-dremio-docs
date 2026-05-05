---
url: /developer/data-formats/delta-lake
slug: /developer/data-formats/delta-lake
title: "Delta Lake | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64216.6960325
---

  * [Dremio Enterprise Home](/)
  * [Developer Guide](/developer)
  * [File and Table Formats](/developer/data-formats)
  * Delta Lake

Version: current [26.x]
On this page
# Delta Lake
Dremio version 14.0.0 and later provides read-only support for the Delta Lake table format.
## Overview​
Delta Lake is an open source table format that provides transactional consistency and increased scale for datasets by creating a consistent definition of datasets and including schema evolution changes and data mutations. With Delta Lake, updates to the datasets are viewed in a consistent manner across any application consuming the datasets, and users are kept from seeing an inconsistent view of data during transformation. This creates a consistent and reliable view of datasets in the data lake as they are updated and evolved.
Data consistency is enabled by creating a series of manifest files which define the schema and data for a given point in time as well as a transaction log that defines an ordered record of every transaction on the dataset. By reading the transaction log and manifest files, applications are guaranteed to see a consistent view of data at any point in time and users can ensure intermediate changes are invisible until a write operation is complete.
Delta Lake provides the following benefits:
  * Large-scale support: Efficient metadata handling enables applications to readily process petabyte-sized datasets with millions of files
  * Schema consistency: All applications processing a dataset operate on a consistent and shared definition of the dataset metadata such as columns, data types, partitions.


## Supported Data Sources​
The Delta Lake table format is supported with the following sources in the Parquet file format:
  * [Amazon S3](/data-sources/object/s3)
  * [AWS Glue](/data-sources/lakehouse-catalogs/aws-glue-catalog)
  * [Azure Storage](/data-sources/object/azure-storage)
  * [HDFS](/data-sources/object/hdfs)
  * [Hive](/data-sources/lakehouse-catalogs/hive) (supported in Dremio 24.0 and later)
  * [NAS](/data-sources/object/nas)


## Analyzing Delta Lake Datasets​
Dremio supports analyzing Delta Lake datasets on the sources listed above through a native and high-performance reader. It automatically identifies which datasets are saved in the Delta Lake format, and imports table information from the Delta Lake manifest files. Dataset promotion is seamless and operates the same as any other data format in Dremio, where users can promote file system directories containing a Delta Lake dataset to a table manually or automatically by querying the directory. When using Delta Lake format, Dremio supports datasets of any size including petabyte-sized datasets with billions of files.
Dremio reads Delta Lake tables created or updated by another engine such as Spark and others with transactional consistency.Dremio automatically identifies tables that are in the Delta Lake format and selects the appropriate format for the user.
### Refreshing Metadata​
Metadata refresh is required to query the latest version of a Delta Lake table. You can wait for an automatic refresh of metadata or manually refresh it.
#### Example of Querying a Delta Lake Table​
Perform the following steps to query a Delta Lake table:
  1. In Dremio, open the **Datasets** page.
  2. Go to the data source that contains the Delta Lake table.
  3. If the data source is not AWS Glue or Hive, follow these steps:
    1. Hover over the row for the table and click ![The Format Folder icon](https://docs.dremio.com/images/cloud/format-data.png) to the right. Dremio automatically identifies tables that are in the Delta Lake format and selects the appropriate format.
    2. Click **Save**.
  4. If the data source is AWS Glue or Hive, hover over the row for the table and click ![The Go To Table icon](https://docs.dremio.com/images/cloud/go-to-table.png) to the right.
  5. Run a query on the Delta Lake table to see the results.
  6. Update the Delta Lake table in the data source.
  7. Go back to the **Datasets** UI and wait for the table metadata to refresh or manually refresh it using the syntax below.
Syntax to manually refresh table metadata

```
ALTER TABLE <path_of_the_dataset>  
REFRESH METADATA  

```

The following statement shows refreshing metadata of a Delta Lake table.
Example command to manually refresh table metadata

```
 ALTER TABLE s3."data.dremio.com".data.deltalake."tpcds10_delta"."call_center"  
 REFRESH METADATA  

```

  8. Run the previous query on the Delta Lake table to retrieve the results from the updated Delta Lake table.


#### Table metadata and time travel queries​
Dremio supports time travel on Delta lake tables from 24.2.0. You can query a Delta table's history using the following SQL commands:

```
SELECT * FROM TABLE(table_history('<full path of the table>'));  
SELECT * FROM TABLE(table_snapshot('<full path of the table>'));  

```

And get the data from a specific timestamp with the following SQL:

```
SELECT * FROM <table> AT TIMESTAMP '2019-10-07 18:13:16.852';  

```

## Limitations​
  * Creating Delta Lake tables is not supported.
  * DML operations are not supported.
  * Incremental Reflections are not supported.
  * Metadata refresh is required to query the latest version of a Delta Lake table.
  * Only Delta Lake tables with minReaderVersion 1 or 2 can be read. Column Mapping is supported with minReaderVersion 2.


Was this page helpful?
[Previous Parquet](/developer/data-formats/parquet)[Next Formatting Data to a Table](/developer/data-formats/table)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Parquet](/developer/data-formats/parquet)[Next Formatting Data to a Table](/developer/data-formats/table)
!
