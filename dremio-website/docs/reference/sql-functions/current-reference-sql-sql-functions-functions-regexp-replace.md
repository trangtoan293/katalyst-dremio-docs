---
url: /reference/sql/sql-functions/functions/REGEXP_REPLACE
title: "REGEXP_REPLACE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64345.10255925
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * REGEXP_REPLACE

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions), [Regular Expressions](/reference/sql/sql-functions)
# REGEXP_REPLACE
Finds strings that match the given regular expression and replaces the strings with the given string.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### REGEXP_REPLACE(_input_ string, _regex_ string, _replacement_string_ string) → string[​](/reference/sql/sql-functions#regexp_replaceinput-string-regex-string-replacement_string-string--string "Direct link to regexp_replaceinput-string-regex-string-replacement_string-string--string")
  * input: The expression to search for a matching string.
  * regex: The Perl-compatible regular expression (PCRE) to match against.
  * replacement_string: The string with which to replace the matching string.


**Examples**
REGEXP_REPLACE example

```
SELECT REGEXP_REPLACE('8AM-4PM', '\Q-\E', ' to ')  
-- 8AM to 4PM  

```

REGEXP_REPLACE example

```
SELECT REGEXP_REPLACE(Address, '\QST\E', 'STREET')   
FROM Samples."samples.dremio.com"."SF_incidents2016.json"   
LIMIT 3  
-- Raw data  
  -- 800 Block of BRYANT ST  
  -- 800 Block of BRYANT ST  
  -- KEITH ST / SHAFTER AV  
  
-- Returned data  
  -- 800 Block of BRYANT STREET  
  -- 800 Block of BRYANT STREET  
  -- KEITH STREET / SHAFTER AV  

```

Was this page helpful?
[Previous REGEXP_MATCHES](/reference/sql/sql-functions)[Next REGEXP_SPLIT](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous REGEXP_MATCHES](/reference/sql/sql-functions)[Next REGEXP_SPLIT](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FREGEXP_REPLACE%2F&_biz_t=1777950665870&_biz_i=REGEXP_REPLACE%20%7C%20Dremio%20Documentation&_biz_n=665&rnd=833536&cdn_o=a&_biz_z=1777950665870)
