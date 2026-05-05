---
url: /reference/sql/sql-functions/functions/DATETYPE
slug: /reference/sql/sql-functions/functions/DATETYPE
title: "DATETYPE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64309.66252025
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * DATETYPE

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# DATETYPE
Constructs DATE using the values provided for year, month, and day parameters.
## Syntax
### DATETYPE(_year_ NUMERIC, _month_ NUMERIC, _day_ NUMERIC) → DATE[​](/reference/sql/sql-functions)
  * year: Year value.
  * month: Month value.
  * day: Day value.


**Examples**
DATETYPE example

```
SELECT DATETYPE(2020,1,2)  
-- 2020-01-02  

```

Was this page helpful?
[Previous DATEDIFF](/reference/sql/sql-functions)[Next DATE_ADD](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DATEDIFF](/reference/sql/sql-functions)[Next DATE_ADD](/reference/sql/sql-functions)
