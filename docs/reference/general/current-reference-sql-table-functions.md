---
url: /reference/sql/table-functions
title: "Table Functions | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64075.111224583
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * Table Functions

Version: current [26.x]
# Table Functions
Table functions are special SQL functions that return tabular data and can be used in the `FROM` clause of a query, similar to querying a table or view. All table functions in Dremio are part of the `sys` schema and are read-only.
Unlike [system tables](/reference/sql/system-tables), which are tables in Dremio's system-created catalog containing metadata about Dremio objects, table functions can accept parameters and perform computations to return customized result sets.
Table functions are particularly useful for analyzing relationships between objects in Dremio, such as Reflection dependencies and refresh settings. See below for a list of available table functions.  
| Table Function  | Description  |  
| --- | --- |  
| [sys.recommend_reflections](/reference/sql/table-functions/recommend-reflections)  | Returns a table of one or more Reflection recommendations for a given set of job IDs.  |  
| [sys.reflection_lineage](/reference/sql/table-functions/reflection-lineage)  | The Reflections that will also be refreshed if a refresh is triggered for a particular Reflection.  |  
| [sys.reflection_refresh_settings](/reference/sql/table-functions/reflection-refresh-settings)  | Returns the refresh settings for a Reflection, including settings inherited from the datasets that the Reflection depends on.  |  
Was this page helpful?
[Previous SYS.VIEWS](/reference/sql/system-tables/views)[Next SYS.RECOMMEND_REFLECTIONS](/reference/sql/table-functions/recommend-reflections)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.VIEWS](/reference/sql/system-tables/views)[Next SYS.RECOMMEND_REFLECTIONS](/reference/sql/table-functions/recommend-reflections)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsystem-tables%2Fjobs_recent%2F&_biz_t=1777950395022&_biz_i=SYS.JOBS_RECENT%20%7C%20Dremio%20Documentation&_biz_n=153&rnd=684241&cdn_o=a&_biz_z=1777950395033)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Ftable-functions%2F&_biz_t=1777950395032&_biz_i=Table%20Functions%20%7C%20Dremio%20Documentation&_biz_n=154&rnd=854402&cdn_o=a&_biz_z=1777950395033)
