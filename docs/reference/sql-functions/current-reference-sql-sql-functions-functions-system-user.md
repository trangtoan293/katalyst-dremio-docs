---
url: /reference/sql/sql-functions/functions/SYSTEM_USER
title: "SYSTEM_USER | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.620968708
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SYSTEM_USER

Version: current [26.x]
On this page
**Categories** : [System](/reference/sql/sql-functions)
# SYSTEM_USER
Returns the name of the current user. This function cannot be used in a Reflection.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### SYSTEM_USER → varchar[​](/reference/sql/sql-functions#system_user--varchar "Direct link to SYSTEM_USER → varchar")
**Examples**
SYSTEM_USER example

```
SELECT SYSTEM_USER  
-- user.name  

```

SYSTEM_USER example

```
SELECT SYSTEM_USER  
-- user.name@example.com  

```

SYSTEM_USER example

```
SELECT "SYSTEM_USER"()  
-- user.name@example.com  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
This function is identical to the functions [`SESSION_USER`](/reference/sql/sql-functions) and [`USER`](/reference/sql/sql-functions).
Was this page helpful?
[Previous SUM](/reference/sql/sql-functions)[Next TAN](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SUM](/reference/sql/sql-functions)[Next TAN](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FST_GEOHASH%2F&_biz_t=1777950678692&_biz_i=ST_GEOHASH%20%7C%20Dremio%20Documentation&_biz_n=690&rnd=684851&cdn_o=a&_biz_z=1777950678734)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FSYSTEM_USER%2F&_biz_t=1777950678734&_biz_i=SYSTEM_USER%20%7C%20Dremio%20Documentation&_biz_n=691&rnd=683547&cdn_o=a&_biz_z=1777950678734)
