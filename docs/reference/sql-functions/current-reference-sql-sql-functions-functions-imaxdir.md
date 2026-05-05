---
url: /reference/sql/sql-functions/functions/IMAXDIR
slug: /reference/sql/sql-functions/functions/IMAXDIR
title: "IMAXDIR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64317.552654708
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * IMAXDIR

Version: current [26.x]
On this page
**Categories** : [Directory](/reference/sql/sql-functions)
# IMAXDIR
Returns the name of a subdirectory of a table in HDFS. The subdirectory has the name that ranks highest in case-insensitive alphanumeric order.
## Syntax
### IMAXDIR('dfs', '`path_of_parent_directory`') → `name_of_subdirectory`[​](/reference/sql/sql-functions) → `name_of_subdirectory`")
  * dfs: Specifies that the table data is in an HDFS filesystem.
  * `path_of_parent_directory`: The full path of the directory in which the table data is stored.
  * `name_of_subdirectory`: The name of the subdirectory.


**Examples**
**Example 1:** Suppose that there is a directory named `querylogs` in the `/tmp` directory. In the `querylogs` directory, there are three subdirectories:
  * `2019`
  * `2020`
  * `2021`


In each subdirectory, there is a CSV file that contains log data. You can use IMAXDIR to query the data that is in the `2021` subdirectory. The result is the same as if you used the MAXDIR function.

```
SELECT * FROM dfs."/tmp/querylogs" WHERE dir0 = IMAXDIR('dfs','/tmp/querylogs')  
-- 2021  

```

**Example 2:** Suppose that there is a directory named `products` in the `/tmp` directory. In the `products` directory, there are these subdirectories in this order:
  * `a`
  * `A`
  * `B`
  * `b`
  * `c`
  * `C`
  * `d`
  * `D`


In each subdirectory, there is a CSV file that contains product data.
Use `dir0` to retrieve the name of a subdirectory one level below the parent directory, `dir1` to retrieve the name of a subdirectory two levels below, and so on.

```
SELECT * FROM dfs."/tmp/querylogs" WHERE dir0 = IMAXDIR('dfs','/tmp/querylogs')  
-- D  

```

Was this page helpful?
[Previous ILIKE](/reference/sql/sql-functions)[Next IMINDIR](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ILIKE](/reference/sql/sql-functions)[Next IMINDIR](/reference/sql/sql-functions)
!
