---
url: /reference/sql/table-functions
slug: /reference/sql/table-functions
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
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.VIEWS](/reference/sql/system-tables/views)[Next SYS.RECOMMEND_REFLECTIONS](/reference/sql/table-functions/recommend-reflections)
!!
