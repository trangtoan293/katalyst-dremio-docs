---
url: /reference/sql/sql-functions/functions/USER
title: "USER | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.859512625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * USER

Version: current [26.x]
On this page
**Categories** : [System](/reference/sql/sql-functions)
# USER
Returns the user that is currently logged into the system. This function cannot be used in a Reflection.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### USER() → varchar[​](/reference/sql/sql-functions#user--varchar "Direct link to USER\(\) → varchar")
**Examples**
USER example

```
SELECT USER()  
-- user.name@example.com  

```

USER example

```
SELECT USER  
-- user.name@example.com  

```

USER example

```
SELECT "USER"()  
-- user.name@example.com  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
This function can be called without the parentheses. This function is identical to the functions [`SESSION_USER`](/reference/sql/sql-functions) and [`SYSTEM_USER`](/reference/sql/sql-functions).
Was this page helpful?
[Previous UPPER](/reference/sql/sql-functions)[Next VAR_POP](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous UPPER](/reference/sql/sql-functions)[Next VAR_POP](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FUSER%2F&_biz_t=1777950687073&_biz_i=USER%20%7C%20Dremio%20Documentation&_biz_n=717&rnd=685117&cdn_o=a&_biz_z=1777950687073)
