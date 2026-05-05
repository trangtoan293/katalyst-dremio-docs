---
url: /reference/sql/information-schema/schemata
title: "INFORMATION_SCHEMA.SCHEMATA | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64264.020319208
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [Information Schema](/reference/sql/information-schema)
  * INFORMATION_SCHEMA.SCHEMATA

Version: current [26.x]
On this page
# INFORMATION_SCHEMA.SCHEMATA
The INFORMATION_SCHEMA.SCHEMATA view contains metadata for the sources, spaces in a project. Embedded folders within a space, for example, Samples.samples.dremio.com, which contain datasets are also represented as a schema.
Syntax

```
SELECT *   
FROM INFORMATION_SCHEMA.SCHEMATA  

```

## Example Output[​](/reference/sql/information-schema/schemata#example-output "Direct link to Example Output")  
| CATALOG_NAME  | SCHEMA_NAME  | SCHEMA_OWNER  | TYPE  | IS_MUTABLE  |  
| --- | --- | --- | --- | --- |  
| DREMIO  | $scratch  | `owner`  | SIMPLE  | NO  |  
| DREMIO  | @  | `owner`  | SIMPLE  | NO  |  
| DREMIO  | INFORMATION_SCHEMA  | `owner`  | SIMPLE  | NO  |  
| DREMIO  | Samples  | `owner`  | SIMPLE  | NO  |  
| DREMIO  | Samples.samples.dremio.com  | `owner`  | SIMPLE  | NO  |  
| DREMIO  | Samples.samples.Dremio University  | `owner`  | SIMPLE  | NO  |  
| DREMIO  | sys  | `owner`  | SIMPLE  | NO  |  
| DREMIO  | sys.cache  | `owner`  | SIMPLE  | NO  |  
| DREMIO  | test  | `owner`  | SIMPLE  | NO  |  
| DREMIO  | Weather  | `owner`  | SIMPLE  | NO  |  
## Fields[​](/reference/sql/information-schema/schemata#fields "Direct link to Fields")  
| Field  | Data Type  | Description  |  
| --- | --- | --- |  
| CATALOG_NAME  | varchar  | Name of the catalog, which is always DREMIO.  |  
| SCHEMA_NAME  | varchar  | Path (source, space, folders) that contains datasets.  |  
| SCHEMA_OWNER  | varchar  | Owner of the schema. This is an inherited field and `owner` is always returned.  |  
| TYPE  | varchar  | Type of the schema, which is always SIMPLE.  |  
| IS_MUTABLE  | varchar  | The value in this column is YES if the schema can be modified. NO if it's immutable.  |  
Was this page helpful?
[Previous INFORMATION_SCHEMA.COLUMNS](/reference/sql/information-schema/columns)[Next INFORMATION_SCHEMA."TABLES"](/reference/sql/information-schema/tables)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous INFORMATION_SCHEMA.COLUMNS](/reference/sql/information-schema/columns)[Next INFORMATION_SCHEMA."TABLES"](/reference/sql/information-schema/tables)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Finformation-schema%2Fschemata%2F&_biz_t=1777950583628&_biz_i=INFORMATION_SCHEMA.SCHEMATA%20%7C%20Dremio%20Documentation&_biz_n=517&rnd=561613&cdn_o=a&_biz_z=1777950583628)
