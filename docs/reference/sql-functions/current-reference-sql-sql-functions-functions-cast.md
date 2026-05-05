---
url: /reference/sql/sql-functions/functions/CAST
title: "CAST | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64294.772179416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CAST

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions)
# CAST
Converts a value of one data type to another data type. This function behaves similarly to the TO_`data_type` (i.e. TO_TIMESTAMP) functions.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### CAST(_expression_ Any type, _data_type_ Any type) → Type specified as data_type parameter[​](/reference/sql/sql-functions#castexpression-any-type-data_type-any-type--type-specified-as-data_type-parameter "Direct link to castexpression-any-type-data_type-any-type--type-specified-as-data_type-parameter")
  * expression: The expression that you want to convert
  * data_type: The name of the data type that you want to convert the input expression to.


**Examples**
CAST example

```
SELECT CAST(3.14150 AS INTEGER)  
-- 3  

```

CAST example

```
SELECT CAST(.167 AS INTEGER)  
-- 0  

```

CAST example

```
SELECT CAST('2021-04-03' AS DATE)  
-- 2021-04-03  

```

Was this page helpful?
[Previous CASE](/reference/sql/sql-functions)[Next CBRT](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CASE](/reference/sql/sql-functions)[Next CBRT](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FBOOL_OR%2F&_biz_t=1777950614089&_biz_i=BOOL_OR%20%7C%20Dremio%20Documentation&_biz_n=567&rnd=370325&cdn_o=a&_biz_z=1777950614151)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCARDINALITY%2F&_biz_t=1777950614119&_biz_i=Dremio%20Documentation&_biz_n=568&rnd=900143&cdn_o=a&_biz_z=1777950614151)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCAST%2F&_biz_t=1777950614151&_biz_i=CAST%20%7C%20Dremio%20Documentation&_biz_n=569&rnd=486023&cdn_o=a&_biz_z=1777950614151)
