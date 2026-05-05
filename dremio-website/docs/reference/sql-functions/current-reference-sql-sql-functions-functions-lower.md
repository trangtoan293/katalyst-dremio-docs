---
url: /reference/sql/sql-functions/functions/LOWER
title: "LOWER | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64331.20892675
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LOWER

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# LOWER
Returns the input expression with all the characters converted to lowercase.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### LOWER(_expression_ varchar) → varchar[​](/reference/sql/sql-functions#lowerexpression-varchar--varchar "Direct link to lowerexpression-varchar--varchar")
  * expression: String to convert to lowercase.


**Examples**
LOWER example

```
SELECT LOWER('A GUIDE to data Lakehouses')  
-- a guide to data lakehouses  

```

LOWER example

```
SELECT Category, LOWER(Category)   
  FROM Samples."samples.dremio.com"."SF_incidents2016.json"   
  LIMIT 3  
-- Category, EXPR$1  
-- WEAPON LAWS, weapon laws  
-- WEAPON LAWS, weapon laws  
-- WARRANTS, warrants  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
`LOWER` is a synonym for [`LCASE`](/reference/sql/sql-functions).
Was this page helpful?
[Previous LOG10](/reference/sql/sql-functions)[Next LPAD](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LOG10](/reference/sql/sql-functions)[Next LPAD](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FMAP_VALUES%2F&_biz_t=1777950651143&_biz_i=MAP_VALUES%20%7C%20Dremio%20Documentation&_biz_n=636&rnd=776921&cdn_o=a&_biz_z=1777950651151)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FLOWER%2F&_biz_t=1777950651150&_biz_i=LOWER%20%7C%20Dremio%20Documentation&_biz_n=637&rnd=947512&cdn_o=a&_biz_z=1777950651151)
