---
url: /reference/sql/sql-functions/functions/IMAXDIR
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
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### IMAXDIR('dfs', '`path_of_parent_directory`') → `name_of_subdirectory`[​](/reference/sql/sql-functions#imaxdirdfs-path_of_parent_directory--name_of_subdirectory "Direct link to IMAXDIR\('dfs', '`path_of_parent_directory`'\) → `name_of_subdirectory`")
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ILIKE](/reference/sql/sql-functions)[Next IMINDIR](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FIMAXDIR%2F&_biz_t=1777950638023&_biz_i=IMAXDIR%20%7C%20Dremio%20Documentation&_biz_n=609&rnd=731141&cdn_o=a&_biz_z=1777950638024)
