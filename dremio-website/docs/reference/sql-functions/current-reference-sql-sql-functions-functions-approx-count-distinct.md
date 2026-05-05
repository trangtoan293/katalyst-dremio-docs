---
url: /reference/sql/sql-functions/functions/APPROX_COUNT_DISTINCT
title: "APPROX_COUNT_DISTINCT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64279.324238
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * APPROX_COUNT_DISTINCT

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions)
# APPROX_COUNT_DISTINCT
Returns the approximate number of unique, non-null values in a column.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### APPROX_COUNT_DISTINCT(_column_name_ any primitive) → BIGINT[​](/reference/sql/sql-functions#approx_count_distinctcolumn_name-any-primitive--bigint "Direct link to approx_count_distinctcolumn_name-any-primitive--bigint")
  * column_name: You can specify a column of any primitive data type.


**Examples**
APPROX_COUNT_DISTINCT example

```
SELECT APPROX_COUNT_DISTINCT(IncidntNum) FROM Samples."samples.dremio.com"."SF_incidents2016.json"  
-- 116696  

```

Was this page helpful?
[Previous AI_GENERATE](/reference/sql/sql-functions)[Next APPROX_PERCENTILE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous AI_GENERATE](/reference/sql/sql-functions)[Next APPROX_PERCENTILE](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAY_FREQUENCY%2F&_biz_t=1777950598728&_biz_i=Dremio%20Documentation&_biz_n=542&rnd=354065&cdn_o=a&_biz_z=1777950598772)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FAPPROX_COUNT_DISTINCT%2F&_biz_t=1777950598772&_biz_i=APPROX_COUNT_DISTINCT%20%7C%20Dremio%20Documentation&_biz_n=543&rnd=450645&cdn_o=a&_biz_z=1777950598772)
