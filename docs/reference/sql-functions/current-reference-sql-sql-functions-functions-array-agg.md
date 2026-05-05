---
url: /reference/sql/sql-functions/functions/ARRAY_AGG
slug: /reference/sql/sql-functions/functions/ARRAY_AGG
title: "ARRAY_AGG | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64279.472678125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * ARRAY_AGG

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions), [Semi-Structured Data](/reference/sql/sql-functions)
# ARRAY_AGG
Aggregates the provided expression into an array.
## Syntax
### ARRAY_AGG ( [ DISTINCT ] _expression_ ) → array[​](/reference/sql/sql-functions)
  * expression: An expression of any primitive type to aggregate into an array.


**Examples**
ARRAY_AGG example

```
CREATE TABLE <catalog-name>.people (name) AS VALUES ('Bob'), ('Charlie'), ('Alice');  
SELECT ARRAY_AGG(name) FROM <catalog-name>.people;  
-- ['Bob', 'Charlie', 'Alice']  

```

## Usage Notes[​](/reference/sql/sql-functions)
• ARRAY_AGG is similar to PIVOT in the SELECT command but for a single column.  
  
• The `DISTINCT` keyword removes duplicate values from _expression_.  
  
• If the input is empty, then an empty array is returned.  
  
• Dremio field size limits apply for ARRAY_AGG output. Queries will fail if the size of accumulated data exceeds a system field size limit. For Dremio Cloud, the limit is 32KB.  
  
• ARRAY_AGG is not supported for complex types like STRUCT, MAP, and LIST.  
  
• The elements in the returned array are not listed in any particular order.
Was this page helpful?
[Previous ARRAYS_OVERLAP](/reference/sql/sql-functions)[Next ARRAY_APPEND](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ARRAYS_OVERLAP](/reference/sql/sql-functions)[Next ARRAY_APPEND](/reference/sql/sql-functions)
!
