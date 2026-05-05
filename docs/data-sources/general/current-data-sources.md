---
url: /data-sources
title: "Manage Sources | Dremio Enterprise Documentation"
depth: 1
crawled_at: 64000.105749
---

  * [Dremio Enterprise Home](/)
  * Manage Sources

Version: current [26.x]
On this page
# Manage Sources
Dremio supports a variety of data sources, including lakehouse catalogs, object storage, and databases.
As the [Dremio Shared Responsibility Models](/responsibility) outline, metadata is a shared responsibility between Dremio and you. The Shared Responsibility Models lay out Dremio's responsibilities for enabling data source configurations and your responsibilities for managing metadata.
## Open Catalog[​](/data-sources#open-catalog "Direct link to Open Catalog")
Dremio comes with a built-in lakehouse catalog, built on 
  * [Open Catalog](/data-sources/open-catalog)


## Lakehouse Catalogs[​](/data-sources#lakehouse-catalogs "Direct link to Lakehouse Catalogs")
Lakehouse catalogs provide you with the ability to connect to centralized catalogs. The Open Catalog, Snowflake Open Catalog, Unity Catalog, and Iceberg REST Catalog all connect to the destination sources over the Apache Iceberg REST API.
  * [AWS Glue Data Catalog](/data-sources/lakehouse-catalogs/aws-glue-catalog)
  * [Open Catalog (External)](/data-sources/lakehouse-catalogs/open-catalog-external)
  * [Hive](/data-sources/lakehouse-catalogs/hive)
  * [Iceberg REST Catalog](/data-sources/lakehouse-catalogs/iceberg-rest-catalog)
  * [Nessie](/data-sources/lakehouse-catalogs/nessie)
  * [Snowflake Open Catalog](/data-sources/lakehouse-catalogs/snowflake-open)
  * [Unity Catalog](/data-sources/lakehouse-catalogs/unity)
  * [Microsoft OneLake](/data-sources/lakehouse-catalogs/onelake)


## Object Storage[​](/data-sources#object-storage "Direct link to Object Storage")
  * [Amazon S3](/data-sources/object/s3)
  * [Azure Storage](/data-sources/object/azure-storage)
  * [Google Cloud Storage](/data-sources/object/gcs)
  * [HDFS](/data-sources/object/hdfs)
  * [NAS](/data-sources/object/nas)


## Databases[​](/data-sources#databases "Direct link to Databases")
  * [Amazon OpenSearch Service](/data-sources/databases/opensearch)
  * [Amazon Redshift](/data-sources/databases/redshift)
  * [Apache Druid](/data-sources/databases/apache-druid)
  * [Dremio Cluster](/data-sources/databases/dremio) (you can connect to one or more other Dremio Enterprise clusters and run queries on the data sources to which they are connected, and you can run queries that federate data across connected clusters)
  * [Google BigQuery](/data-sources/databases/google-bigquery)
  * [Elasticsearch](/data-sources/databases/elasticsearch)
  * [IBM Db2](/data-sources/databases/ibm-db2)
  * [Microsoft Azure Data Explorer](/data-sources/databases/azure-data-explorer)
  * [Microsoft Azure Synapse Analytics](/data-sources/databases/azure-synapse-analytics)
  * [Microsoft SQL Server](/data-sources/databases/sql-server)
  * [MongoDB](/data-sources/databases/mongo)
  * [MySQL](/data-sources/databases/mysql)
  * [Oracle](/data-sources/databases/oracle)
  * [PostgreSQL](/data-sources/databases/postgres)
  * [SAP HANA](/data-sources/databases/sap-hana)
  * [Snowflake](/data-sources/databases/snowflake)
  * [Teradata](/data-sources/databases/teradata)
  * [Vertica](/data-sources/databases/vertica)


Dremio enables users to run external queries, queries that use the native syntax of the relational database, to process SQL statements that are not yet supported by Dremio or are too complex to convert. Dremio administrators enable the feature for each data source and specify which Dremio users can edit that source. See [Querying Relational-Database Sources Directly](/help-support/advanced-topics/external-queries) for more information.
Dremio improves query performance for relational database datasets with [Runtime Filtering](/help-support/advanced-topics/runtime-filtering), which applies dimension table filters to joined fact tables at runtime.
  * **Decimal Support:** Decimal-to-decimal mappings are supported for relational database sources.
  * **Collation:** Relational database sources must have a collation equivalent to `LATIN1_GENERAL_BIN2` to ensure consistent results when operations are pushed down. For non-equivalent collations, create a view that coerces the collation to one that is equivalent to `LATIN1_GENERAL_BIN2` and access that view.
  * For all sources, case-sensitive source data file/table names are not supported. In Dremio, case is ignored in the names of data files. `file1.parquet`, `File1.parquet`, and `FILE1.parquet` are considered to be equivalent names. Therefore, searching on one of these names can result in unanticipated results.  
In addition, columns in a table that have the same name with different cases are not supported. For example, if two columns named `Trip_Pickup_DateTime` and `trip_pickup_datetime` exist in the same table, one of the columns may disappear when the header is extracted.


## Files and Folders[​](/data-sources#files-and-folders "Direct link to Files and Folders")
  * [Formatting Data to a Table](/developer/data-formats/table)
  * [Upload Files](/data-sources/file-upload)
note Case-sensitive source data file/table names are not supported. In Dremio, data filenames in your data source are "seen" in a case-insensitive manner. So, if you have three file names with difference cases (for example, `JOE` `Joe`, and `joe`), Dremio "sees" the files as having the same name. Thus, searching on `Joe`, `JOE`, or `joe`, can result in unanticipated data results.  
  
In addition, columns in a table that have the same name with different cases are not supported. For example, if two columns named `Trip_Pickup_DateTime` and `trip_pickup_datetime` exist in the same table, one of the columns may disappear when the header is extracted.


Was this page helpful?
[Previous AWS Edition (Deprecated)](/deploy-dremio/other-options/aws-edition)[Next Open Catalog](/data-sources/open-catalog)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous AWS Edition (Deprecated)](/deploy-dremio/other-options/aws-edition)[Next Open Catalog](/data-sources/open-catalog)
