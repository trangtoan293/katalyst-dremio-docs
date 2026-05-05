---
url: /reference/sql/sql-functions/functions/POSITION
slug: /reference/sql/sql-functions/functions/POSITION
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
## Syntax
### POSITION(_substr_ string IN _expression_ string) → integer[​](/reference/sql/sql-functions)
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

## Usage Notes[​](/reference/sql/sql-functions)
Searches for the first occurrence of the first argument in the second argument and if found, returns the position of the first argument in the second argument. The first character in a string is position 1. Returns 0 if the substring is not found in the expression.
Was this page helpful?
[Previous PMOD](/reference/sql/sql-functions)[Next POW__POWER](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous PMOD](/reference/sql/sql-functions)[Next POW__POWER](/reference/sql/sql-functions)
!
