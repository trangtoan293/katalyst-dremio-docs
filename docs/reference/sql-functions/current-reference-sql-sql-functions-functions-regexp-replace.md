---
url: /reference/sql/sql-functions/functions/REGEXP_REPLACE
slug: /reference/sql/sql-functions/functions/REGEXP_REPLACE
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
## Syntax
### REGEXP_REPLACE(_input_ string, _regex_ string, _replacement_string_ string) → string[​](/reference/sql/sql-functions)
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
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous REGEXP_MATCHES](/reference/sql/sql-functions)[Next REGEXP_SPLIT](/reference/sql/sql-functions)
!
