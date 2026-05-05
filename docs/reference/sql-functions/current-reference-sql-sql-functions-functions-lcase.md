---
url: /reference/sql/sql-functions/functions/LCASE
title: "LCASE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.277103583
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LCASE

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# LCASE
Returns the input expression with all the characters converted to lowercase.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### LCASE(_expression_ varchar) → varchar[​](/reference/sql/sql-functions#lcaseexpression-varchar--varchar "Direct link to lcaseexpression-varchar--varchar")
  * expression: String to convert to lowercase.


**Examples**
LCASE example

```
SELECT LCASE('A GUIDE to data Lakehouses')  
-- a guide to data lakehouses  

```

LCASE example

```
SELECT Category, LCASE(Category)   
  FROM Samples."samples.dremio.com"."SF_incidents2016.json"   
  LIMIT 3  
-- Category, EXPR$1  
-- WEAPON LAWS, weapon laws  
-- WEAPON LAWS, weapon laws  
-- WARRANTS, warrants  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
`LCASE` is a synonym for [`LOWER`](/reference/sql/sql-functions).
Was this page helpful?
[Previous LAST_VALUE](/reference/sql/sql-functions)[Next LEAD](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LAST_VALUE](/reference/sql/sql-functions)[Next LEAD](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FLCASE%2F&_biz_t=1777950644251&_biz_i=LCASE%20%7C%20Dremio%20Documentation&_biz_n=622&rnd=795799&cdn_o=a&_biz_z=1777950644251)
