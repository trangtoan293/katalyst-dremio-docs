---
url: /reference/sql/sql-functions/functions/CONTAINS
slug: /reference/sql/sql-functions/functions/CONTAINS
title: "CONTAINS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64302.140908125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CONTAINS

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# CONTAINS
Returns documents matching the provided Lucene expression.
## Syntax
### CONTAINS(_luceneExpression_ varchar) → dataset[​](/reference/sql/sql-functions)
  * luceneExpression: The Lucene expression to use as a search term.


**Examples**
CONTAINS example

```
SELECT column1 from ElasticSearchSource.index1."_doc" WHERE CONTAINS('dremio')  
-- All documents that contain the word "dremio".  

```

CONTAINS example

```
SELECT column1 from ElasticSearchSource.index1."_doc" WHERE CONTAINS(column1:dremio AND column2:lakehouse)  
-- All documents that contain the word "dremio" in column1 and "lakehouse" in column2.  

```

## Usage Notes[​](/reference/sql/sql-functions)
This function can only be used with [Elasticsearch](/data-sources/databases/elasticsearch) sources. At its simplest, the Lucene expression can be a list of words, such as `CONTAINS( dremio sql)`. If no field names are specified, Dremio searches across all the fields in the document. To specify field names, use `CONTAINS(`col1`:`search_term` AND `col2`:`search_term`)`.
Was this page helpful?
[Previous CONCAT_WS](/reference/sql/sql-functions)[Next CONVERT_FROM](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CONCAT_WS](/reference/sql/sql-functions)[Next CONVERT_FROM](/reference/sql/sql-functions)
