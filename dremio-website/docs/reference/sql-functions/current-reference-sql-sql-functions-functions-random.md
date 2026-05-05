---
url: /reference/sql/sql-functions/functions/RANDOM
title: "RANDOM | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64344.921659041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * RANDOM

Version: current [26.x]
On this page
**Categories** : [Math](/reference/sql/sql-functions)
# RANDOM
Each call returns a random generated number between 0 and 1 for each row.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### RANDOM([_seed_ int32]) → double[​](/reference/sql/sql-functions#randomseed-int32--double "Direct link to randomseed-int32--double")
  * seed (optional): Seed value. Specify a seed value to return a repeatable sequence of random numbers.


**Examples**
RANDOM example

```
SELECT RANDOM()  
-- 0.24943567857336457  

```

RANDOM example

```
SELECT RANDOM(4000)  
-- 0.18633151868393985  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
If a seed value is specified, `RANDOM` generates a unique number for each row. If the same seed is used to call `RANDOM` on the same row multiple times, the same generated number will be returned each time.
Was this page helpful?
[Previous RADIANS](/reference/sql/sql-functions)[Next RANK](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous RADIANS](/reference/sql/sql-functions)[Next RANK](/reference/sql/sql-functions)
