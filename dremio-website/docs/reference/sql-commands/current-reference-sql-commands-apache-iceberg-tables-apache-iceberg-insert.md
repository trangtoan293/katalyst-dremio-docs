---
url: /reference/sql/commands/apache-iceberg-tables/apache-iceberg-insert
title: "INSERT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64250.622320333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * [SQL Commands for Apache Iceberg Tables](/reference/sql/commands/apache-iceberg-tables)
  * INSERT

Version: current [26.x]
On this page
# INSERT
Inserts records into a table, either from values provided in the SQL command or from rows returned by a `SELECT` statement.
If the table does not exist or the schema does not match, the `INSERT` operation fails.
Syntax

```
INSERT INTO <table_name>  
[ AT { REF[ERENCE] | BRANCH } <reference_name> ]  
[ ( <column_name> [, <column_name> ...]) ]  
{ <select_statement>  
   | VALUES (value [, value ...]) [, (value [, value ...]) ...]  
}  

```

## Parameters[​](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-insert#parameters "Direct link to Parameters")
`table_name` String
The name of the table that you want to insert data into.
* * *
AT {'{'})'{'{'})'{'}'}) REF[ERENCE] | BRANCH {'{'})'{'}'}'{'}'} `reference_name` String Optional
Only for Nessie sources. Specifies the reference of the table that you want to insert data into. When this parameter is omitted, the current branch is used.
REF: Identifies the specific reference.
BRANCH: Identifies the specific branch.
* * *
( `column_name1` [, `column_name2` ...] ) String Optional
The name of the column or columns that you want to insert data into.
  * If column names are specified, data is inserted in the given column order, and columns not listed are populated as `NULL`.
  * If column names are not specified, data is inserted in the column order of the table.
  * Make sure the columns adhere to `NOT NULL` constraints specified in the table definition, or else the `INSERT` command fails with an error message.


* * *
`select_statement` String Optional
The query that you want to use to insert into the current table data from another table.
* * *
VALUES (value [, value ...]) [, (value [, value ...]) ...] String Optional
The value or values that you want to insert, if you specified the names of one or more columns. You can insert one or more sets of values, each set corresponding to a record to insert into the table.
## Example[​](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-insert#example "Direct link to Example")
Inserts three records

```
INSERT INTO myTable VALUES  
    (21, 'Ruth Asawa', 'American, 1926–2013', 'American', 'Female', 1926, 2013, 'Q7382874', '500077806'),  
    (38, 'Magdalena Abakanowicz', 'Polish, 1930–2017', 'Polish', 'Female', 1930, 2017, 'Q158080', '500084577'),  
    (56, 'Luis Alberto Acuña', 'Colombian, 1904–1994', 'Colombian', 'Male', 1904, 1994, null, null)  

```

Was this page helpful?
[Previous DROP](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-drop)[Next MERGE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-merge)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DROP](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-drop)[Next MERGE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-merge)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fapache-iceberg-tables%2Fapache-iceberg-insert%2F&_biz_t=1777950570631&_biz_i=Dremio%20Documentation&_biz_n=487&rnd=70570&cdn_o=a&_biz_z=1777950570631)
