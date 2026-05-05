---
url: /reference/sql/commands/show-table-properties
title: "SHOW TBLPROPERTIES | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64256.905307208
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * SHOW TBLPROPERTIES

Version: current [26.x]
On this page
# SHOW TBLPROPERTIES
Displays the table properties that are set for an Apache Iceberg table.
See [Properties of Apache Iceberg Tables](/developer/data-formats/apache-iceberg/table-properties) for a list of the supported properties.
## Syntax[​](/reference/sql/commands/show-table-properties#syntax "Direct link to Syntax")

```
SHOW TBLPROPERTIES <table_name>  

```

## Parameter[​](/reference/sql/commands/show-table-properties#parameter "Direct link to Parameter")
`table_name` String
The path and name of the Iceberg table with the properties that you want to display.
## Output[​](/reference/sql/commands/show-table-properties#output "Direct link to Output")
The output displays a table composed of these two columns:  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| table_property_name  | CHARACTER VARYING  | The name of the property  |  
| table_property_value  | CHARACTER VARYING  | The value of the property  |  
Was this page helpful?
[Previous SHOW CREATE VIEW](/reference/sql/commands/show-create-view)[Next Sources](/reference/sql/commands/sources)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SHOW CREATE VIEW](/reference/sql/commands/show-create-view)[Next Sources](/reference/sql/commands/sources)
