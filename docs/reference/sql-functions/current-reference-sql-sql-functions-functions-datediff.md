---
url: /reference/sql/sql-functions/functions/DATEDIFF
slug: /reference/sql/sql-functions/functions/DATEDIFF
title: "DATEDIFF | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64304.346166416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * DATEDIFF

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# DATEDIFF
Compares two dates or timestamps and returns the difference in days.
## Syntax
### DATEDIFF(_endDate_ string, _startDate_ string) → integer[​](/reference/sql/sql-functions)
  * endDate: A `DATE` or `TIMESTAMP` expression.
  * startDate: A `DATE` or `TIMESTAMP` expression.


**Examples**
DATEDIFF example

```
SELECT DATEDIFF('2021-02-28', '2021-01-01')  
-- 58  

```

DATEDIFF example

```
SELECT DATEDIFF('2005-04-09 12:05:55', '2003-02-01 11:43:22')  
-- 798  

```

## Usage Notes[​](/reference/sql/sql-functions)
If `endDate` is before `startDate` the result is negative.
Was this page helpful?
[Previous CURRENT_TIMESTAMP](/reference/sql/sql-functions)[Next DATETYPE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CURRENT_TIMESTAMP](/reference/sql/sql-functions)[Next DATETYPE](/reference/sql/sql-functions)
