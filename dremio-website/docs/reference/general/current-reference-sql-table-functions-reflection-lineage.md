---
url: /reference/sql/table-functions/reflection-lineage
title: "SYS.REFLECTION_LINEAGE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64379.180744083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [Table Functions](/reference/sql/table-functions)
  * SYS.REFLECTION_LINEAGE

Version: current [26.x]
On this page
# SYS.REFLECTION_LINEAGE
Returns a list of the Reflections that will also be refreshed if a refresh is triggered for a particular Reflection. For more information about which Reflections are listed, see [Triggering Refreshes by Using the Reflection API, the Catalog API, or an SQL Command](/acceleration/manual-reflections/refreshing-reflections#triggering-refreshes-by-using-the-reflection-api-the-catalog-api-or-an-sql-command).
Syntax

```
SELECT * FROM TABLE(sys.reflection_lineage('<reflection_id>'))  

```

## Parameter[​](/reference/sql/table-functions/reflection-lineage#parameter "Direct link to Parameter")
`reflection_id` String
The ID of the Reflection. If you need to find a Reflection ID, see [Obtaining Reflection IDs](/acceleration/manual-reflections/using-reflection-hints#obtaining-reflection-ids).
## Example[​](/reference/sql/table-functions/reflection-lineage#example "Direct link to Example")
Return a list of Reflections that will be refreshed

```
SELECT * FROM TABLE(sys.reflection_lineage('ebb8350d-9906-4345-ba19-7ad1da2a3cab'));  

```

Example of a query result

```
batch_number	reflection_id	                         reflection_name     dataset_name  
           0	4a33df7c-be91-4c78-ba20-9cafc98a4a1d	 R_P3_web_sales      "@dremio"."P3_web_sales"  
           1	82c32002-5040-4c2a-9430-36320b47b038	 R_V6                s3."store_sales"."V6"  
           2	2f039cd7-8bf7-468e-8d76-d9bf949d94db	 R_V11               "@dremio"."V11"  
           2	3e9b03b8-6964-45b6-bab5-534088cfcff1	 R_V10               hive."catalog_sales"."V10"  

```

## Columns[​](/reference/sql/table-functions/reflection-lineage#columns "Direct link to Columns")  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| batch_number  | integer  | For the Reflection that will also be refreshed if the Reflection in the query is refreshed, the depth from its upstream base tables is indicated in the Dependency Graph. If a Reflection depends on other Reflections, it has a larger batch number and is refreshed later than the Reflections on which it depends. Reflections with the same batch number do not depend on each other, and their refreshes occur simultaneously in parallel.  |  
| reflection_id  | varchar  | The ID of the Reflection that will also be refreshed if the Reflection in the query is refreshed.  |  
| reflection_name  | varchar  | The name of the Reflection that will also be refreshed if the Reflection in the query is refreshed.  |  
| dataset_name  | varchar  | The path and name of the dataset that the Reflection is on.  |  
Was this page helpful?
[Previous SYS.RECOMMEND_REFLECTIONS](/reference/sql/table-functions/recommend-reflections)[Next SYS.REFLECTION_REFRESH_SETTINGS](/reference/sql/table-functions/reflection-refresh-settings)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.RECOMMEND_REFLECTIONS](/reference/sql/table-functions/recommend-reflections)[Next SYS.REFLECTION_REFRESH_SETTINGS](/reference/sql/table-functions/reflection-refresh-settings)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsystem-tables%2Fviews%2F&_biz_t=1777950699512&_biz_i=SYS.VIEWS%20%7C%20Dremio%20Documentation&_biz_n=733&rnd=229988&cdn_o=a&_biz_z=1777950699527)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Ftable-functions%2Freflection-lineage%2F&_biz_t=1777950699527&_biz_i=SYS.REFLECTION_LINEAGE%20%7C%20Dremio%20Documentation&_biz_n=734&rnd=480415&cdn_o=a&_biz_z=1777950699527)
