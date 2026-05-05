---
url: /reference/sql/commands/create-view
title: "CREATE VIEW | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64250.700456625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * CREATE VIEW

Version: current [26.x]
On this page
# CREATE VIEW
Create or replace a view.
`CREATE VIEW` will parse and validate the SQL but does not fully plan the query or re-validate access control for any nested views. Full query planning and access control are only performed when the view is queried. If the view requires schema learning, the schema might be outdated at creation time but it will automatically update the first time the view is queried through the Dremio console.
Syntax

```
CREATE [ OR REPLACE ] VIEW <view_name> AS  
  <select_statement> FROM <table_name>  

```

## Parameters[​](/reference/sql/commands/create-view#parameters "Direct link to Parameters")
OR REPLACE String Optional
If specified, any table/view with the same name will be replaced. This is primarily used to create new tables/views with security policies applied for restricted access. You cannot specify this parameter with the `IF NOT EXISTS` qualifier.
* * *
`view_name` String
The path of the view that you want to create. The name of the view should be unique and cannot include the following special characters: `/`, `:`, `[`, or `]`.
* * *
`select_statement` String
The query used to populate the view.
If the query refers to a table in a remote catalog, then that table must be fully qualified with an `AT` specification. For example:

```
CREATE VIEW StudentCatalog.first quarter  
AS SELECT * FROM StudentCatalog.studentName  
JOIN EnrollmentCatalog.sourceName AT BRANCH firstQuarter  
ON TRUE  

```

* * *
`table_name` String
The name of the object. Object names within a project must be unique, cannot conflict with system-defined objects, and are case-insensitive.
## Examples[​](/reference/sql/commands/create-view#examples "Direct link to Examples")
Create a view

```
CREATE VIEW demo.jobs_view as SELECT * FROM "oracle_e2e".DREMIO.JOBS  

```

Replace a view

```
CREATE OR REPLACE VIEW demo.jobs_view as SELECT * FROM "oracle_e2e".DREMIO.JOBS  

```

Was this page helpful?
[Previous CREATE TABLE AS](/reference/sql/commands/create-table-as)[Next DESCRIBE PIPE](/reference/sql/commands/describe-pipe)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CREATE TABLE AS](/reference/sql/commands/create-table-as)[Next DESCRIBE PIPE](/reference/sql/commands/describe-pipe)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fcreate-view%2F&_biz_t=1777950571125&_biz_i=CREATE%20VIEW%20%7C%20Dremio%20Documentation&_biz_n=492&rnd=768696&cdn_o=a&_biz_z=1777950571126)
