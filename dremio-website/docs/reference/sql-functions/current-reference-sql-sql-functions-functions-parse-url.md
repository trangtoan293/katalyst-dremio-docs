---
url: /reference/sql/sql-functions/functions/PARSE_URL
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### PARSE_URL(_urlToParse_ VARCHAR, _urlPartToExtract_ STRING [, _queryKeyToExtract_ STRING]) → STRING[​](/reference/sql/sql-functions#parse_urlurltoparse-varchar-urlparttoextract-string--querykeytoextract-string--string "Direct link to parse_urlurltoparse-varchar-urlparttoextract-string--querykeytoextract-string--string")
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous OVERLAPS](/reference/sql/sql-functions)[Next PERCENTILE_CONT](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FPARSE_URL%2F&_biz_t=1777950658783&_biz_i=PARSE_URL%20%7C%20Dremio%20Documentation&_biz_n=657&rnd=973725&cdn_o=a&_biz_z=1777950658784)
