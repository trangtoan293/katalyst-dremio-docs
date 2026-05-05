---
url: /reference/sql/sql-functions/functions/REGEXP_SPLIT
slug: /reference/sql/sql-functions/functions/REGEXP_SPLIT
title: "REGEXP_SPLIT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64345.065375625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * REGEXP_SPLIT

Version: current [26.x]
On this page
**Categories** : [String](/reference/sql/sql-functions), [Regular Expressions](/reference/sql/sql-functions)
# REGEXP_SPLIT
Splits an input string by using a regular expression according to a keyword and an integer value.
## Syntax
### REGEXP_SPLIT(_input_ string, _regex_ string, _keyword_ string, _integer_ integer) → array[​](/reference/sql/sql-functions)
  * input: The string that you want to split by means of the regular expression.
  * regex: The regular expression to use to split the string.
  * keyword: The keyword that determines where or how many times to use the regular expression to split the string. Can be FIRST, LAST, INDEX, or ALL.
  * integer: The value specified for the keyword.


**Examples**
REGEXP_SPLIT example

```
SELECT REGEXP_SPLIT('REGULAR AIR', 'R', 'FIRST', -1) AS R_LESS_SHIPMENT_TYPE  
-- ['', 'EGULAR AIR']  

```

REGEXP_SPLIT example

```
SELECT REGEXP_SPLIT('REGULAR AIR', 'R', 'LAST', -1) AS R_LESS_SHIPMENT_TYPE  
-- ['REGULAR AI', '']  

```

REGEXP_SPLIT example

```
SELECT REGEXP_SPLIT('REGULAR AIR', 'R', 'INDEX', 1) AS R_LESS_SHIPMENT_TYPE  
-- ['REGULA', ' AIR']  

```

REGEXP_SPLIT example

```
SELECT REGEXP_SPLIT('REGULAR AIR', 'R', 'ALL', 1) AS R_LESS_SHIPMENT_TYPE  
-- ['']  

```

REGEXP_SPLIT example

```
SELECT REGEXP_SPLIT('REGULAR AIR', 'R', 'ALL', 2) AS R_LESS_SHIPMENT_TYPE  
-- ['', 'EGULA']  

```

REGEXP_SPLIT example

```
SELECT REGEXP_SPLIT('REGULAR AIR', 'R', 'ALL', 3) AS R_LESS_SHIPMENT_TYPE  
-- ['', 'EGULA', ' AI']  

```

REGEXP_SPLIT example

```
SELECT REGEXP_SPLIT('REGULAR AIR', 'R', 'ALL', 4) AS R_LESS_SHIPMENT_TYPE  
-- ['', 'EGULA', ' AI', '']  

```

## Usage Notes[​](/reference/sql/sql-functions)
You can choose from these keywords: 

FIRST
    Specifies to split the string at the first match of the regular expression. The integer value is not used and must always be -1. 

LAST
    Specifies to split the string at the last match of the regular expression. The integer value is not used and must always be -1. 

INDEX
    Specifies to start finding matches for the regular expression at the specified character position (indicated by the integer value) in the string. Then, split the string at every subsequent match of the regular expression. 

ALL
    Specifies to split the string as many times as indicated by the integer value. All subsequent matches of the regular expression are ignored.
Was this page helpful?
[Previous REGEXP_REPLACE](/reference/sql/sql-functions)[Next REPEAT](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous REGEXP_REPLACE](/reference/sql/sql-functions)[Next REPEAT](/reference/sql/sql-functions)
