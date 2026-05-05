---
url: /reference/sql/sql-functions/functions/TIMESTAMPTYPE
slug: /reference/sql/sql-functions/functions/TIMESTAMPTYPE
title: "TIMESTAMPTYPE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64358.823194375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TIMESTAMPTYPE

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# TIMESTAMPTYPE
Constructs a timestamp using the values provided for year, month, day, hour, minute, second, and millisecond parameters.
## Syntax
### TIMESTAMPTYPE(_year_ NUMERIC, _month_ NUMERIC, _day_ NUMERIC, _hour_ NUMERIC, _minute_ NUMERIC, _second_ NUMERIC, _millisecond_ NUMERIC) → DATE[​](/reference/sql/sql-functions)
  * year: Year value.
  * month: Month value.
  * day: Day value.
  * hour: Hour value.
  * minute: Minute value.
  * second: Second value.
  * millisecond: Millisecond value.


**Examples**
TIMESTAMPTYPE example

```
SELECT TIMESTAMPTYPE(2020,10,5,1,2,3,500)  
-- 2020-10-05 01:02:03.500  

```

Was this page helpful?
[Previous TIMESTAMPDIFF](/reference/sql/sql-functions)[Next TOASCII](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TIMESTAMPDIFF](/reference/sql/sql-functions)[Next TOASCII](/reference/sql/sql-functions)
!
