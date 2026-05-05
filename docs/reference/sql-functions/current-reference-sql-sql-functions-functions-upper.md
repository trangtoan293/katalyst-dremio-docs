---
url: /reference/sql/sql-functions/functions/UPPER
title: "UPPER | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.84118925
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * UPPER

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# UPPER
Returns the input expression with all the characters converted to uppercase.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### UPPER(_expression_ varchar) → varchar[​](/reference/sql/sql-functions#upperexpression-varchar--varchar "Direct link to upperexpression-varchar--varchar")
  * expression: String to convert to uppercase.


**Examples**
UPPER example

```
SELECT UPPER('a guide to data lakehouses')  
-- A GUIDE TO DATA LAKEHOUSES  

```

UPPER example

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
`UPPER` is a synonym for [`UCASE`](/reference/sql/sql-functions).
Was this page helpful?
[Previous UNIX_TIMESTAMP](/reference/sql/sql-functions)[Next USER](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous UNIX_TIMESTAMP](/reference/sql/sql-functions)[Next USER](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FUPPER%2F&_biz_t=1777950686171&_biz_i=UPPER%20%7C%20Dremio%20Documentation&_biz_n=712&rnd=100557&cdn_o=a&_biz_z=1777950686171)
