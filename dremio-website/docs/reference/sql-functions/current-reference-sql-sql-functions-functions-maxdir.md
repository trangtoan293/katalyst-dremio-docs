---
url: /reference/sql/sql-functions/functions/MAXDIR
title: "MAXDIR | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64330.985544708
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * MAXDIR

Version: current [26.x]
On this page
**Categories** : [Directory](/reference/sql/sql-functions)
# MAXDIR
Returns the name of a subdirectory of a table in HDFS. The subdirectory has the name that ranks highest in case-sensitive alphanumeric order.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### MAXDIR('dfs', '`path_of_parent_directory`') → `name_of_subdirectory`[​](/reference/sql/sql-functions#maxdirdfs-path_of_parent_directory--name_of_subdirectory "Direct link to MAXDIR\('dfs', '`path_of_parent_directory`'\) → `name_of_subdirectory`")
  * dfs: Specifies that the table data is in an HDFS filesystem.
  * `path_of_parent_directory`: The full path of the directory in which the table data is stored.
  * `name_of_subdirectory`: The name of the subdirectory.


**Examples**
**Example 1:** Suppose that there is a directory named `querylogs` in the `/tmp` directory. In the `querylogs` directory, there are three subdirectories:
  * `2019`
  * `2020`
  * `2021`


In each subdirectory, there is a CSV file that contains log data. You can use IMAXDIR to query the data that is in the `2021` subdirectory. The result is the same as if you used the IMAXDIR function.

```
SELECT * FROM dfs."/tmp/querylogs" WHERE dir0 = MAXDIR('dfs','/tmp/querylogs')  
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


In each subdirectory, there is a CSV file that contains product data. When the query runs, the names of the subdirectories are sorted into case-sensitive order:
  * `A`
  * `B`
  * `C`
  * `D`
  * `a`
  * `b`
  * `c`
  * `d`


Because the Unicode values of upper-case letters are lower than the Unicode values of lower-case letters, the lower-case letters follow the upper-case ones. The letter with the highest Unicode value in this example is `d`, and that is the name returned in `dir0`.
Use `dir0` to retrieve the name of a subdirectory one level below the parent directory, `dir1` to retrieve the name of a subdirectory two levels below, and so on.

```
SELECT * FROM dfs."/tmp/querylogs" WHERE dir0 = MAXDIR('dfs','/tmp/querylogs')  
-- d  

```

Was this page helpful?
[Previous MAX](/reference/sql/sql-functions)[Next MD5](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MAX](/reference/sql/sql-functions)[Next MD5](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FMAXDIR%2F&_biz_t=1777950652861&_biz_i=MAXDIR%20%7C%20Dremio%20Documentation&_biz_n=647&rnd=790403&cdn_o=a&_biz_z=1777950652861)
