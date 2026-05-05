---
url: /reference/sql/sql-functions/functions/SESSION_USER
title: "SESSION_USER | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64351.831133416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SESSION_USER

Version: current [26.x]
On this page
**Categories** : [System](/reference/sql/sql-functions)
# SESSION_USER
Returns the user that created the current session. This function cannot be used in a Reflection.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### SESSION_USER → varchar[​](/reference/sql/sql-functions#session_user--varchar "Direct link to SESSION_USER → varchar")
**Examples**
SESSION_USER example

```
SELECT SESSION_USER  
-- user.name@example.com  

```

SESSION_USER example

```
SELECT "SESSION_USER"()  
-- user.name@example.com  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
This function is identical to the functions [`SYSTEM_USER`](/reference/sql/sql-functions) and [`USER`](/reference/sql/sql-functions).
Was this page helpful?
[Previous SECOND](/reference/sql/sql-functions)[Next SET_UNION](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SECOND](/reference/sql/sql-functions)[Next SET_UNION](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FSESSION_USER%2F&_biz_t=1777950671491&_biz_i=SESSION_USER%20%7C%20Dremio%20Documentation&_biz_n=670&rnd=302933&cdn_o=a&_biz_z=1777950671491)
