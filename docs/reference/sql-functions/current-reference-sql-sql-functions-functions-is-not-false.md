---
url: /reference/sql/sql-functions/functions/IS__NOT__FALSE
slug: /reference/sql/sql-functions/functions/IS__NOT__FALSE
title: "IS__NOT__FALSE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.310934958
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * IS__NOT__FALSE

Version: current [26.x]
On this page
**Categories** : [Boolean](/reference/sql/sql-functions), [Datatype](/reference/sql/sql-functions)
# IS [NOT] FALSE
Tests whether the input expression is either false or not false. If true in either case, returns a value of `true`. Alias for the function `ISFALSE`/`ISNOTFALSE`.
## Syntax
### IS [NOT] FALSE(_boolean_expression_ boolean) → boolean[​](/reference/sql/sql-functions)
  * boolean_expression: The input expression, which must be of type `BOOLEAN`.


**Examples**
Create a table containing one column of boolean data type

```
CREATE TABLE <catalog-name>.test_table   
  (  
    test_column BOOLEAN  
  )  
-- true, Table created  

```

Create two rows containing boolean values

```
INSERT INTO <catalog-name>.test_table   
VALUES  (true),   
        (false)  
-- Fragment, Records, Path, Metadata, Partition, FileSize, IcebergMetadata, fileschema, PartitionData  
-- 0_0, 1, s3://<s3-bucket-path>, , 0, <file-size>, <iceberg-metadata>, <file-schema>, null  

```

Run the ISFALSE query

```
SELECT ISFALSE(test_column)  
FROM <catalog-name>.test_table  
-- false   
-- true  

```

Run the ISNOTFALSE query

```
SELECT ISNOTFALSE(test_column)  
FROM <catalog-name>.test_table  
-- true   
-- false  

```

Was this page helpful?
[Previous IS__NOT__DISTINCT_FROM](/reference/sql/sql-functions)[Next IS__NOT__NULL](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous IS__NOT__DISTINCT_FROM](/reference/sql/sql-functions)[Next IS__NOT__NULL](/reference/sql/sql-functions)
!
