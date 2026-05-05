---
url: /reference/sql/commands/show-create-table
title: "SHOW CREATE TABLE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64256.840695875
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * SHOW CREATE TABLE

Version: current [26.x]
On this page
# SHOW CREATE TABLE
Show the definition that creates the specified Nessie table. The output includes two columns:
`path`: The path to the specified table.
`sql_definition`: The definition for the specified table.
You need the `SELECT` privilege on the table to retrieve the definition.
Syntax

```
SHOW CREATE TABLE <table_name>  
  [ AT { REF[ERENCE] | BRANCH | TAG | COMMIT } <reference_name> ]  

```

## Parameters[​](/reference/sql/commands/show-create-table#parameters "Direct link to Parameters")
`table_name` String
The name of the table whose definition you want to see.
* * *
AT {'{'})'{'{'})'{'}'}) REF[ERENCE] | BRANCH | TAG | COMMIT {'{'})'{'}'}'{'}'} `reference_name` String Optional
Specify the reference for which you want to show the table definition:
  * `REF`: Identifies the branch, tag, or commit for the table for which you want to show the available definition.
  * `BRANCH`: Identifies the branch for the table for which you want to show the available definition.
  * `TAG`: Identifies the tag for the table for which you want to show the available definition.
  * `COMMIT`: Identifies the commit for the table for which you want to show the available definition. Commit hashes must be enclosed in double quotes (for example, `“ff2fe50fef5a030c4fc8e61b252bdc33c72e2b6f929d813833d998b8368302e2”`).


## Examples[​](/reference/sql/commands/show-create-table#examples "Direct link to Examples")
Show the definition of a Nessie table in a specified branch

```
SHOW CREATE TABLE "company_data".employees  
  AT BRANCH "main"  

```

Was this page helpful?
[Previous Row-Access & Column-Masking](/reference/sql/commands/row-column-policies)[Next SHOW CREATE VIEW](/reference/sql/commands/show-create-view)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Row-Access & Column-Masking](/reference/sql/commands/row-column-policies)[Next SHOW CREATE VIEW](/reference/sql/commands/show-create-view)
