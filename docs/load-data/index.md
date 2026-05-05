---
url: /load-data
title: "Load Data | Dremio Enterprise Documentation"
depth: 1
crawled_at: 64004.319550375
---

  * [Dremio Enterprise Home](/)
  * Load Data

Version: current [26.x]
On this page
# Load Data
Dremio provides the following features to load data into Apache Iceberg tables:
  * [**Autoingest Data into Apache Iceberg**](/load-data/autoingestion) - Use autoingest pipes to automatically ingest data into Iceberg tables.
  * [**Clustering**](/load-data/clustering) - Cluster your Iceberg tables for a more intuitive data layout that enables both efficient reads and writes.


## Process Unstructured Data[​](/load-data#process-unstructured-data "Direct link to Process Unstructured Data")
Dremio allows you to process and combine structured, semi-structured, and unstructured data. Examples of unstructured data include PDFs, images, and videos that are stored in object storage.
Dremio natively offers [AI functions](/reference/sql/sql-functions) to enable you to extract and process unstructured data:
  * [`AI_GENERATE`](/reference/sql/sql-functions) – Process unstructured data, primarily for complex data extraction requiring multiple fields from source files.
  * [`AI_CLASSIFY`](/reference/sql/sql-functions) – Categorize documents or analyze sentiment as `VARCHAR` values, using a provided classification list.
  * [`AI_COMPLETE`](/reference/sql/sql-functions) – Generate text or create summaries as `VARCHAR` values.


These functions are processed using Dremio's Query Engine and the AI model provider of your choice. For more information on how to configure your model provider, see [Configure Model Providers](/admin/model-providers).
Was this page helpful?
[Previous Upload Files](/data-sources/file-upload)[Next Autoingest Data into Apache Iceberg](/load-data/autoingestion)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Upload Files](/data-sources/file-upload)[Next Autoingest Data into Apache Iceberg](/load-data/autoingestion)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fload-data%2F&_biz_t=1777950325267&_biz_i=Load%20Data%20%7C%20Dremio%20Documentation&_biz_n=12&rnd=807662&cdn_o=a&_biz_z=1777950325267)
