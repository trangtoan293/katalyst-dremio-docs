---
url: /reference/sql/sql-functions/functions/ARRAY_AGG
title: "ARRAY_AGG | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64279.472678125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_AGG

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions), [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_AGG
Aggregates the provided expression into an array.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### ARRAY_AGG ( [ DISTINCT ] _expression_ ) → array[​](/reference/sql/sql-functions#array_agg---distinct--expression---array "Direct link to array_agg---distinct--expression---array")
  * expression: An expression of any primitive type to aggregate into an array.


**Examples**
ARRAY_AGG example

```
CREATE TABLE <catalog-name>.people (name) AS VALUES ('Bob'), ('Charlie'), ('Alice');  
SELECT ARRAY_AGG(name) FROM <catalog-name>.people;  
-- ['Bob', 'Charlie', 'Alice']  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
• ARRAY_AGG is similar to PIVOT in the SELECT command but for a single column.  
  
• The `DISTINCT` keyword removes duplicate values from _expression_.  
  
• If the input is empty, then an empty array is returned.  
  
• Dremio field size limits apply for ARRAY_AGG output. Queries will fail if the size of accumulated data exceeds a system field size limit. For Dremio Cloud, the limit is 32KB.  
  
• ARRAY_AGG is not supported for complex types like STRUCT, MAP, and LIST.  
  
• The elements in the returned array are not listed in any particular order.
Was this page helpful?
[Previous ARRAYS_OVERLAP](/reference/sql/sql-functions)[Next ARRAY_APPEND](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAYS_OVERLAP](/reference/sql/sql-functions)[Next ARRAY_APPEND](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FARRAY_AGG%2F&_biz_t=1777950598924&_biz_i=ARRAY_AGG%20%7C%20Dremio%20Documentation&_biz_n=545&rnd=981301&cdn_o=a&_biz_z=1777950598925)
