---
url: /reference/sql/sql-functions/functions/DAYOFMONTH
slug: /reference/sql/sql-functions/functions/DAYOFMONTH
title: "DAYOFMONTH | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64310.212042416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * DAYOFMONTH

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# DAYOFMONTH
Returns the day of month of the date or timestamp.
## Syntax
### DAYOFMONTH(_date_timestamp_expression_ string) → bigint[​](/reference/sql/sql-functions)
  * date_timestamp_expression: A `DATE` or `TIMESTAMP` expression.


**Examples**
DAYOFMONTH example

```
SELECT DAYOFMONTH(DATE '2021-02-28')  
-- 28  

```

DAYOFMONTH example

```
SELECT DAYOFMONTH(TIMESTAMP '2021-02-28 11:43:22')  
-- 28  

```

## Usage Notes[​](/reference/sql/sql-functions)
This function is identical to the function [`DAY`](/reference/sql/sql-functions).
Was this page helpful?
[Previous DAY](/reference/sql/sql-functions)[Next DAYOFWEEK](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DAY](/reference/sql/sql-functions)[Next DAYOFWEEK](/reference/sql/sql-functions)
