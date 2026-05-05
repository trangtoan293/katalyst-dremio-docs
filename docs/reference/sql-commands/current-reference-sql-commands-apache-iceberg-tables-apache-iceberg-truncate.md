---
url: /reference/sql/commands/apache-iceberg-tables/apache-iceberg-truncate
slug: /reference/sql/commands/apache-iceberg-tables/apache-iceberg-truncate
title: "TRUNCATE | Dremio Documentation"
depth: 4
crawled_at: 64798.101611583
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * [SQL Commands for Apache Iceberg Tables](/reference/sql/commands/apache-iceberg-tables)
  * TRUNCATE

Version: current [26.x]
On this page
# TRUNCATE
The TRUNCATE command deletes all rows from a table with minimal computation by restating the table with no data files.
Syntax

```
TRUNCATE [ TABLE ] [ IF EXISTS ] <table_path>.<table_name>  

```

## Parameters​
TABLE String Optional
Specifies that the object to be truncated is a table. If not used, the Dremio Cloud still recognizes that the object is a table. This option is for consistency with other query engines that can truncate the same tables that Dremio Cloud has access to on the datasource.
* * *
[ IF EXISTS ] String Optional
Prevents the datasource from returning an error message if a table with the same definition does not exist in the specified location.
* * *
`table_name` String
The name of the table that you want to truncate.
* * *
AT BRANCH `branch_name` String Optional
Specifies the branch of the table that you want to truncate. When this parameter is omitted, the current branch is used.
Was this page helpful?
[Previous ROLLBACK](/reference/sql/commands/apache-iceberg-tables/rollback-table)Next UPDATE
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ROLLBACK](/reference/sql/commands/apache-iceberg-tables/rollback-table)Next UPDATE
!!
