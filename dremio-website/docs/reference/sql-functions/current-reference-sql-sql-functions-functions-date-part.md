---
url: /reference/sql/sql-functions/functions/DATE_PART
title: "DATE_PART | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64310.107851375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * DATE_PART

Version: current [26.x]
On this page
**Categories** : [Date/Time](/reference/sql/sql-functions)
# DATE_PART
Return subfields such as year or hour from date or timestamp values.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### DATE_PART(_field_ string, _source_ date or timestamp) → integer[​](/reference/sql/sql-functions#date_partfield-string-source-date-or-timestamp--integer "Direct link to date_partfield-string-source-date-or-timestamp--integer")
  * field: Must be one of the following: YEAR, QUARTER, MONTH, WEEK, DAY, HOUR, MINUTE, SECOND.
  * source: The value from which to extract the subfield


**Examples**
DATE_PART example

```
select date_part('year', timestamp '2021-04-01 15:27:32')  
-- 2021  

```

DATE_PART example

```
select date_part('month', date '2021-04-01')  
-- 4  

```

Was this page helpful?
[Previous DATE_DIFF](/reference/sql/sql-functions)[Next DATE_SUB](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DATE_DIFF](/reference/sql/sql-functions)[Next DATE_SUB](/reference/sql/sql-functions)
