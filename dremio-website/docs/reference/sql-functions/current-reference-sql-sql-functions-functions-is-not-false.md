---
url: /reference/sql/sql-functions/functions/IS__NOT__FALSE
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### IS [NOT] FALSE(_boolean_expression_ boolean) → boolean[​](/reference/sql/sql-functions#is-not-falseboolean_expression-boolean--boolean "Direct link to is-not-falseboolean_expression-boolean--boolean")
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous IS__NOT__DISTINCT_FROM](/reference/sql/sql-functions)[Next IS__NOT__NULL](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FIS__NOT__FALSE%2F&_biz_t=1777950644044&_biz_i=Dremio%20Documentation&_biz_n=619&rnd=871633&cdn_o=a&_biz_z=1777950644044)
