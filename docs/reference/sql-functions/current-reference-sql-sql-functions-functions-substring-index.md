---
url: /reference/sql/sql-functions/functions/SUBSTRING_INDEX
slug: /reference/sql/sql-functions/functions/SUBSTRING_INDEX
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
## Syntax
### SUBSTRING_INDEX(_expression_ varchar, _delimiter_ varchar, _count_ integer) → varchar[​](/reference/sql/sql-functions)
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

## Usage Notes[​](/reference/sql/sql-functions)
This function performs a case-sensitive match when searching for the delimiter. The `count` expression can be a positive or negative number. If positive, this function returns the characters from the left of the expression up to the `count` of occurrences of the delimiter. If negative, this function returns the characters from the right of the expression up to the `count` of occurrences of the delimiter.
Was this page helpful?
[Previous SUBSTRING](/reference/sql/sql-functions)[Next SUM](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SUBSTRING](/reference/sql/sql-functions)[Next SUM](/reference/sql/sql-functions)
!
