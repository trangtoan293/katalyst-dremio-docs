---
url: /reference/sql/sql-functions/functions/MINDIR
slug: /reference/sql/sql-functions/functions/MINDIR
title: "MINDIR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64337.715617041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * MINDIR

Version: current [26.x]
On this page
**Categories** : [Directory](/reference/sql/sql-functions)
# MINDIR
Returns the name of a subdirectory of a table in HDFS. The subdirectory has the name that ranks lowest in case-sensitive alphanumeric order.
## Syntax
### MINDIR('dfs', '`path_of_parent_directory`') → `name_of_subdirectory`[​](/reference/sql/sql-functions) → `name_of_subdirectory`")
  * dfs: Specifies that the table data is in an HDFS filesystem.
  * `path_of_parent_directory`: The full path of the directory in which the table data is stored.
  * `name_of_subdirectory`: The name of the subdirectory.


**Examples**
**Example 1:** Suppose that there is a directory named `querylogs` in the `/tmp` directory. In the `querylogs` directory, there are three subdirectories:
  * `2019`
  * `2020`
  * `2021`


In each subdirectory, there is a CSV file that contains log data. You can use MINDIR to query the data that is in the `2019` subdirectory. The result is the same as if you used the IMINDIR function.

```
SELECT * FROM dfs."/tmp/querylogs" WHERE dir0 = MINDIR('dfs','/tmp/querylogs')  
-- 2019  

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


In each subdirectory, there is a CSV file that contains product data. When the query runs, the names of the subdirectories are sorted into case-sensitive order:
  * `A`
  * `B`
  * `C`
  * `D`
  * `a`
  * `b`
  * `c`
  * `d`


Because the Unicode values of upper-case letters are lower than the Unicode values of lower-case letters, the lower-case letters follow the upper-case ones. The letter with the lowest Unicode value in this example is `A`, and that is the name returned in `dir0`.
Use `dir0` to retrieve the name of a subdirectory one level below the parent directory, `dir1` to retrieve the name of a subdirectory two levels below, and so on.

```
SELECT * FROM dfs."/tmp/querylogs" WHERE dir0 = MINDIR('dfs','/tmp/querylogs')  
-- A  

```

Was this page helpful?
[Previous MIN](/reference/sql/sql-functions)[Next MINUTE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MIN](/reference/sql/sql-functions)[Next MINUTE](/reference/sql/sql-functions)
