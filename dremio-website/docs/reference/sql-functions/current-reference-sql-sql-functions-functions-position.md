---
url: /reference/sql/sql-functions/functions/POSITION
title: "POSITION | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64344.804439083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * POSITION

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# POSITION
Returns the position of the first occurrence of a substring within another string
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### POSITION(_substr_ string IN _expression_ string) → integer[​](/reference/sql/sql-functions#positionsubstr-string-in-expression-string--integer "Direct link to positionsubstr-string-in-expression-string--integer")
  * substr: The substring to search for in the expression
  * expression: The input expression to search


**Examples**
POSITION example

```
select position('an' in 'banana')  
-- 2  

```

POSITION example

```
select position('no' in 'banana')  
-- 0  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
Searches for the first occurrence of the first argument in the second argument and if found, returns the position of the first argument in the second argument. The first character in a string is position 1. Returns 0 if the substring is not found in the expression.
Was this page helpful?
[Previous PMOD](/reference/sql/sql-functions)[Next POW__POWER](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous PMOD](/reference/sql/sql-functions)[Next POW__POWER](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FPOSITION%2F&_biz_t=1777950664262&_biz_i=POSITION%20%7C%20Dremio%20Documentation&_biz_n=662&rnd=470929&cdn_o=a&_biz_z=1777950664263)
