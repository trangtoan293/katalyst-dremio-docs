---
url: /reference/sql/sql-functions/functions/NDV
title: "NDV | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64337.922170291
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * NDV

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions), [Window](/reference/sql/sql-functions)
# NDV
Returns an approximate distinct value number, similar to `COUNT(DISTINCT col)`. NDV can return results faster than using the combination of COUNT and DISTINCT while using a constant amount of memory, resulting in less memory usage for columns with high cardinality.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### NDV(_expression_ numeric [, _scale_ numeric]) → bigint[​](/reference/sql/sql-functions#ndvexpression-numeric--scale-numeric--bigint "Direct link to ndvexpression-numeric--scale-numeric--bigint")
  * expression: The name of the column whose records you wish to evaluate.
  * scale (optional): Argument that maps to a precision used by the HyperLogLog (HLL) algorithm based on the mapping formula: `precision = scale +8`. Enter an integer in the range from 1 to 10.


**Examples**
NDV example

```
SELECT NDV(column_name)  
-- 163  

```

NDV example

```
SELECT NDV(column_name, 1)  
-- 162  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
The NDV function is used internally by the `COMPUTE STATS` statement for computing the number of distinct values in a column. This function might not reflect the precise number of different values in the column, especially if the cardinality is very low or very high. This function accepts the DISTINCT and ALL keywords: `NDV([DISTINCT | ALL] expression)`.
Was this page helpful?
[Previous MONTHS_BETWEEN](/reference/sql/sql-functions)[Next NEXT_DAY](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MONTHS_BETWEEN](/reference/sql/sql-functions)[Next NEXT_DAY](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FMONTH%2F&_biz_t=1777950657850&_biz_i=MONTH%20%7C%20Dremio%20Documentation&_biz_n=648&rnd=135955&cdn_o=a&_biz_z=1777950657873)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FNOW%2F&_biz_t=1777950657863&_biz_i=NOW%20%7C%20Dremio%20Documentation&_biz_n=649&rnd=929630&cdn_o=a&_biz_z=1777950657873)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FNDV%2F&_biz_t=1777950657873&_biz_i=NDV%20%7C%20Dremio%20Documentation&_biz_n=650&rnd=492896&cdn_o=a&_biz_z=1777950657874)
