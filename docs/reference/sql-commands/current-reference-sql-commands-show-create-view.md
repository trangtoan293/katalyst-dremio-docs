---
url: /reference/sql/commands/show-create-view
slug: /reference/sql/commands/show-create-view
title: "SHOW CREATE VIEW | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64068.325650041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * SHOW CREATE VIEW

Version: current [26.x]
On this page
# SHOW CREATE VIEW
Show the definition for a view. The output includes two columns:
`path`: The path to the specified view.
`sql_definition`: The definition for the specified view.
You need the `SELECT` privilege on the view to retrieve the definition.
Syntax

```
SHOW CREATE VIEW <view_name>  
  [ AT { REF[ERENCE] | BRANCH | TAG | COMMIT } <reference_name> ]  

```

## Parameters​
`view_name` String
The name of the view whose definition you want to see.
* * *
AT {'{'})'{'{'})'{'}'}) REF[ERENCE] | BRANCH | TAG | COMMIT {'{'})'{'}'}'{'}'} `reference_name` String Optional
Specify the reference for which you want to show the view definition:
  * `REF`: Identifies the branch, tag, or commit for the view for which you want to show the available definition.
  * `BRANCH`: Identifies the branch for the view for which you want to show the available definition.
  * `TAG`: Identifies the tag for the the view for which you want to show the available definition.
  * `COMMIT`: Identifies the commit for the view for which you want to show the available definition. Commit hashes must be enclosed in double quotes (for example, `“ff2fe50fef5a030c4fc8e61b252bdc33c72e2b6f929d813833d998b8368302e2”`).


## Examples​
Show the definition of a view in a specified reference

```
SHOW CREATE VIEW "company_data".Locations."offices_by_region"  
   AT REF "myBranch"  

```

Was this page helpful?
[Previous SHOW CREATE TABLE](/reference/sql/commands/show-create-table)[Next SHOW TBLPROPERTIES](/reference/sql/commands/show-table-properties)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SHOW CREATE TABLE](/reference/sql/commands/show-create-table)[Next SHOW TBLPROPERTIES](/reference/sql/commands/show-table-properties)
