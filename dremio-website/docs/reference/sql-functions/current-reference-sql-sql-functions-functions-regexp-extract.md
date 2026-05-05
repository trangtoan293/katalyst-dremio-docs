---
url: /reference/sql/sql-functions/functions/REGEXP_EXTRACT
title: "REGEXP_EXTRACT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64345.082324416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * REGEXP_EXTRACT

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions), [Regular Expressions](/reference/sql/sql-functions)
# REGEXP_EXTRACT
Extracts the first string in expression that matches the `REGEXP` expression and corresponds to the `REGEX` group index.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### REGEXP_EXTRACT(_input_ string, _regex_ string [, _expr_group_index_ integer]) → string[​](/reference/sql/sql-functions#regexp_extractinput-string-regex-string--expr_group_index-integer--string "Direct link to regexp_extractinput-string-regex-string--expr_group_index-integer--string")
  * input: The expression to search for a matching string.
  * regex: The Perl-compatible regular expression (PCRE) to match against.
  * expr_group_index (optional): A regular expression group number, defining which portion of the matching string will be returned.


**Examples**
REGEXP_EXTRACT example

```
SELECT REGEXP_EXTRACT('100-500', '(\d+)-(\d+)', 1)  
-- 100  

```

REGEXP_EXTRACT example

```
SELECT REGEXP_EXTRACT('100-500', '(\d+)-(\d+)', 0)  
-- 100-500  

```

REGEXP_EXTRACT example

```
SELECT REGEXP_EXTRACT('user@example.com', '([a-zA-Z0-9]+)@([a-zA-Z0-9.]+)', 2)  
-- example.com  

```

REGEXP_EXTRACT example

```
SELECT REGEXP_EXTRACT('(555) 123-4567', '(\d{3})-(\d{4})', 2)  
-- 4567  

```

Was this page helpful?
[Previous REGEXP_COL_LIKE](/reference/sql/sql-functions)[Next REGEXP_LIKE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous REGEXP_COL_LIKE](/reference/sql/sql-functions)[Next REGEXP_LIKE](/reference/sql/sql-functions)
