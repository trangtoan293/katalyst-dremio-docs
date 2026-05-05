---
url: /reference/sql/sql-functions/functions/PARSE_URL
slug: /reference/sql/sql-functions/functions/PARSE_URL
title: "PARSE_URL | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64338.402754625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * PARSE_URL

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions)
# PARSE_URL
Returns the specified part of the URL or the value for the specified QUERY key.
## Syntax
### PARSE_URL(_urlToParse_ VARCHAR, _urlPartToExtract_ STRING [, _queryKeyToExtract_ STRING]) → STRING[​](/reference/sql/sql-functions)
  * urlToParse: Input URL to parse.
  * urlPartToExtract: String that specifies the part of the URL to extract. Available values are HOST, PATH, QUERY, REF, PROTOCOL, AUTHORITY, FILE, and USERINFO.
  * queryKeyToExtract (optional): Optional QUERY key to extract. If specified and the given QUERY key is found, the QUERY key value is returned. Otherwise, returns null.


**Examples**
PARSE_URL example

```
SELECT parse_url('http://dremio.com/path/p1.php?query=1', 'QUERY')  
-- query=1  

```

PARSE_URL example

```
SELECT parse_url('http://dremio.com/path/p1.php?query=1&k1=v1', 'QUERY', 'k1')  
-- v1  

```

PARSE_URL example

```
SELECT parse_url('http://dremio.com/path/p1.php?query=1&k1=v1', 'QUERY', 'k2')  
-- null  

```

PARSE_URL example

```
SELECT parse_url('https://www.dremio.com/path/page.html', 'HOST')  
-- www.dremio.com  

```

PARSE_URL example

```
SELECT parse_url('https://www.dremio.com/path/page.html?id=123', 'FILE')  
-- /path/page.html?id=123  

```

Was this page helpful?
[Previous OVERLAPS](/reference/sql/sql-functions)[Next PERCENTILE_CONT](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous OVERLAPS](/reference/sql/sql-functions)[Next PERCENTILE_CONT](/reference/sql/sql-functions)
!
