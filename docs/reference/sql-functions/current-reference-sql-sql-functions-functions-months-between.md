---
url: /reference/sql/sql-functions/functions/MONTHS_BETWEEN
slug: /reference/sql/sql-functions/functions/MONTHS_BETWEEN
title: "MONTHS_BETWEEN | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64338.230787083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * MONTHS_BETWEEN

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# MONTHS_BETWEEN
Returns the number of months between two date or timestamp values.
## Syntax
### MONTHS_BETWEEN(_date_timestamp_expression1_ string, _date_timestamp_expression2_ string) → float[​](/reference/sql/sql-functions)
  * date_timestamp_expression1: The `DATE` or `TIMESTAMP` to subtract from.
  * date_timestamp_expression2: The `DATE` or `TIMESTAMP` to subtract.


**Examples**
MONTHS_BETWEEN example

```
SELECT MONTHS_BETWEEN('2018-11-01 10:30:00', '2019-02-28')  
-- -3.870967741935484  

```

## Usage Notes[​](/reference/sql/sql-functions)
If date or timestamp `date_timestamp_expression1` represents an earlier point in time than `date_timestamp_expression2`, then `MONTHS_BETWEEN(date_timestamp_expression1, date_timestamp_expression2)` returns a negative value; otherwise it returns a positive value. You can use a date value for one input parameter and a timestamp for the other.
Was this page helpful?
[Previous MONTH](/reference/sql/sql-functions)[Next NDV](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MONTH](/reference/sql/sql-functions)[Next NDV](/reference/sql/sql-functions)
