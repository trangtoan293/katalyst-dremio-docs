---
url: /reference/sql/sql-functions/functions/SUBSTRING_INDEX
title: "SUBSTRING_INDEX | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.669372125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * SUBSTRING_INDEX

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# SUBSTRING_INDEX
Returns a substring of an expression before the specified number of delimiter occurs.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### SUBSTRING_INDEX(_expression_ varchar, _delimiter_ varchar, _count_ integer) → varchar[​](/reference/sql/sql-functions#substring_indexexpression-varchar-delimiter-varchar-count-integer--varchar "Direct link to substring_indexexpression-varchar-delimiter-varchar-count-integer--varchar")
  * expression: Base expression to extract substring from.
  * delimiter: The string to search for.
  * count: An `INTEGER` expression to count the delimiters.


**Examples**
SUBSTRING_INDEX example

```
SELECT SUBSTRING_INDEX('www.dremio.com', '.', 2)  
-- www.dremio  

```

SUBSTRING_INDEX example

```
SELECT SUBSTRING_INDEX('www.dremio.com', '.', -2)  
-- dremio.com  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
This function performs a case-sensitive match when searching for the delimiter. The `count` expression can be a positive or negative number. If positive, this function returns the characters from the left of the expression up to the `count` of occurrences of the delimiter. If negative, this function returns the characters from the right of the expression up to the `count` of occurrences of the delimiter.
Was this page helpful?
[Previous SUBSTRING](/reference/sql/sql-functions)[Next SUM](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SUBSTRING](/reference/sql/sql-functions)[Next SUM](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FSUBSTRING_INDEX%2F&_biz_t=1777950678469&_biz_i=SUBSTRING_INDEX%20%7C%20Dremio%20Documentation&_biz_n=689&rnd=435019&cdn_o=a&_biz_z=1777950678469)
