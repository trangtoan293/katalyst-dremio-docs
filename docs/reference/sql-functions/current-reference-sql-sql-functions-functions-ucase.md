---
url: /reference/sql/sql-functions/functions/UCASE
title: "UCASE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.970663625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * UCASE

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# UCASE
Returns the input expression with all the characters converted to uppercase.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### UCASE(_expression_ varchar) → varchar[​](/reference/sql/sql-functions#ucaseexpression-varchar--varchar "Direct link to ucaseexpression-varchar--varchar")
  * expression: String to convert to uppercase.


**Examples**
UCASE example

```
SELECT UCASE('a guide to data lakehouses')  
-- A GUIDE TO DATA LAKEHOUSES  

```

UCASE example

```
SELECT DayOfWeek, UCASE(DayOfWeek)   
  FROM Samples."samples.dremio.com"."SF_incidents2016.json"   
  LIMIT 3  
-- DayOfWeek, EXPR$1  
-- Friday, FRIDAY  
-- Friday, FRIDAY  
-- Monday, MONDAY  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
`UCASE` is a synonym for [`UPPER`](/reference/sql/sql-functions).
Was this page helpful?
[Previous TYPEOF](/reference/sql/sql-functions)[Next UNBASE64](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TYPEOF](/reference/sql/sql-functions)[Next UNBASE64](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FUNIX_TIMESTAMP%2F&_biz_t=1777950686228&_biz_i=Dremio%20Documentation&_biz_n=713&rnd=716315&cdn_o=a&_biz_z=1777950686243)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FUCASE%2F&_biz_t=1777950686242&_biz_i=UCASE%20%7C%20Dremio%20Documentation&_biz_n=714&rnd=729674&cdn_o=a&_biz_z=1777950686243)
