---
url: /reference/sql/sql-functions/functions/LAST_QUERY_ID
title: "LAST_QUERY_ID | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.251877416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LAST_QUERY_ID

Version: current [26.x]
On this page
**Categories** : [System](/reference/sql/sql-functions)
# LAST_QUERY_ID
Returns the ID for the most recently executed query in the current session. This function cannot be used in a Reflection.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### LAST_QUERY_ID() → varchar[​](/reference/sql/sql-functions#last_query_id--varchar "Direct link to LAST_QUERY_ID\(\) → varchar")
**Examples**
LAST_QUERY_ID example

```
SELECT LAST_QUERY_ID()  
-- 1f1ae232-55c0-9df3-caa9-2c52deecf300  

```

LAST_QUERY_ID example

```
SELECT LAST_QUERY_ID  
-- 1f1ae232-55c0-9df3-caa9-2c52deecf300  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
This function can be called without the parentheses. For prepared statements, `LAST_QUERY_ID` is only updated after the statement has been executed.
Was this page helpful?
[Previous LAST_DAY](/reference/sql/sql-functions)[Next LAST_VALUE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LAST_DAY](/reference/sql/sql-functions)[Next LAST_VALUE](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FLAST_QUERY_ID%2F&_biz_t=1777950643743&_biz_i=LAST_QUERY_ID%20%7C%20Dremio%20Documentation&_biz_n=618&rnd=622702&cdn_o=a&_biz_z=1777950643743)
