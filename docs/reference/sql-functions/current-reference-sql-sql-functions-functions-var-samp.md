---
url: /reference/sql/sql-functions/functions/VAR_SAMP
slug: /reference/sql/sql-functions/functions/VAR_SAMP
title: "VAR_SAMP | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64367.164012875
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * VAR_SAMP

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions), [Window](/reference/sql/sql-functions)
# VAR_SAMP
Returns the sample variance of non-NULL records.
## Syntax
### VAR_SAMP(_col_name_ NUMERIC) → NUMERIC[​](/reference/sql/sql-functions)
  * col_name: The name of the column for which to return the sample variance. The values in the column must be numbers, such as INT, DOUBLE, or FLOAT.


**Examples**
VAR_SAMP example

```
SELECT VAR_SAMP(passenger_count) FROM Samples."samples.dremio.com"."NYC-taxi-trips";  
-- 1.868747683518558  

```

VAR_SAMP example

```
SELECT VAR_SAMP(tip_amount) FROM Samples."samples.dremio.com"."NYC-taxi-trips";  
-- 5.106086065187043  

```

VAR_SAMP example: Window function with sliding window frame

```
SELECT city, state, pop, VAR_SAMP(pop)  
  OVER (PARTITION BY state ORDER BY city ROWS BETWEEN 1 PRECEDING AND 2 FOLLOWING)  
FROM Samples."samples.dremio.com"."zips.json";  
-- city, state, pop, EXPR$3  
-- 98791, AK, 5345, 4.1940229333333336E7  
-- AKHIOK, AK, 13309, 3.7242330666666664E7  
-- AKIACHAK, AK, 481, 4.1343588E7  
-- ...  

```

## Usage Notes[​](/reference/sql/sql-functions)
For single input records, VAR_SAMP returns NULL.  
  
The VAR_SAMP function supports optional `PARTITION BY`, `ORDER_BY`, and sliding window frame subclauses. See [Window Functions](/reference/sql/sql-functions) for more information and syntax.
Was this page helpful?
[Previous VAR_POP](/reference/sql/sql-functions)[Next WEEK](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous VAR_POP](/reference/sql/sql-functions)[Next WEEK](/reference/sql/sql-functions)
