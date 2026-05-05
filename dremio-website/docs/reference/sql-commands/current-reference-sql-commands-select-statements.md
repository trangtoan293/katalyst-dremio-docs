---
url: /reference/sql/commands/SELECT-statements
title: "SELECT | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64244.477173583
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * SELECT

Version: current [26.x]
On this page
# SELECT
Dremio supports querying using standard `SELECT` statements. You can query tables and views that are contained in Dremio's [space](/what-is-dremio/key-concepts#spaces-and-folders) entity (including your home space) and in the sources that are connected to Dremio (such as Amazon S3 and Oracle).
When working with Apache Iceberg tables, you can query a table's metadata as well as run queries by snapshot ID.
Dremio supports reading positional deletes and equality deletes for Apache Iceberg v2 tables. Dremio performs writes using copy-on-write by default and supports writes using merge-on-read if specified in the [Iceberg table properties](/developer/data-formats/apache-iceberg/table-properties).
## Querying a Table's Data[​](/reference/sql/commands#querying-a-tables-data "Direct link to Querying a Table's Data")
Syntax

```
[ WITH ... ]  
SELECT [ ALL | DISTINCT ]  
  
  {  
    { * | <column_name1>, <column_name2>, ... }  
    FROM { <table_name> | <view_name> | TABLE( <iceberg_metadata> ( '<table_name>' ) ) | UNNEST( <list_expression> ) [ WITH ORDINALITY ] }  
    [ AT { REF[ERENCE] | BRANCH } <reference_name> ]  
    [ { PIVOT | UNPIVOT } ( <expression> ) ]  
    [ JOIN <expression> ]  
    [ WHERE <condition> ]  
    [ GROUP BY <expression> ]  
    [ QUALIFY <expression> ]  
    [ ORDER BY <column_name1>, <column_name2>, ... [ DESC ] ]  
    [ LIMIT <count> ]  
    [ AT { SNAPSHOT '<snapshot_id>' | <timestamp> } ]  
  }  

```

### Parameters[​](/reference/sql/commands#parameters "Direct link to Parameters")
[ WITH ... ] String Optional
Defines a common table expression (CTE), which is a named subquery. For more information, read [WITH](/reference/sql/commands/with).
* * *
[ ALL | DISTINCT ] String Optional
Specifies the result set that is returned. Similar to the asterisk (*), `ALL` returns all the values in the result set. `DISTINCT` eliminates duplicates from the result set. If you do not specify an option, the default is `ALL`.
* * *
*
Indicates that you want to query all columns in the table.
* * *
`column_name1`, `column_name2`, ... String
The name of the column(s) that you want to query.
* * *
{'{'})'{'{'})'{'}'}) `table_name` | `view_name` | TABLE( `iceberg_metadata` ( '`table_name`' ) ) {'{'})'{'}'}'{'}'} String
The path to the source that you want to query a table in. The source can be in a space, an Arctic catalog, or a data source. For ``iceberg_metadata``, Iceberg includes helpful system-table references which provide easy access to Iceberg-specific information on tables, including:
  * The data files for a table
  * The history of a table
  * The manifest files for a table
  * The partition-related statistics for a table
  * The snapshots for a table


Supported Iceberg metadata clauses include:
  * `TABLE( table_files( '`table_name`' ) )`: Query an Iceberg table's data file metadata using the table_files() function. Dremio returns records that have these fields:  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| file_path  | VARCHAR  | Full file path and name  |  
| file_format  | VARCHAR  | Format, for example, PARQUET  |  
| partition  | VARCHAR  | Partition information  |  
| record_count  | BIGINT  | Number of rows  |  
| file_size_in_bytes  | BIGINT  | Size of the file  |  
| column_sizes  | VARCHAR  | List of columns with the size of each column  |  
| value_counts  | VARCHAR  | List of columns with the number of records with a value  |  
| null_value_counts  | VARCHAR  | List of columns with the number of records as NULL  |  
| nan_value_counts  | VARCHAR  | List of columns with the number of records as NaN  |  
| lower_bounds  | VARCHAR  | List of columns with the lower bound of each  |  
| upper_bounds  | VARCHAR  | List of columns with the upper bound of each  |  
| key_metadata  | VARCHAR  | Key metrics  |  
| split_offsets  | VARCHAR  | Split offsets  |  
  * `TABLE( table_history( '`table_name`' ) )`: Query the history metadata of an Iceberg table or a Delta Lake table by using the table_history() function. Dremio returns records that have these fields:  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| made_current_at  | TIMESTAMP  | The timestamp the snapshot was made at  |  
| snapshot_id  | VARCHAR  | The ID of the snapshot  |  
| parent_id  | VARCHAR  | The parent snapshot ID. The value is null if the ID does not exist. If there is no corresponding value in a Delta Lake table, the returned value is NULL.  |  
| is_current_ancestor  | BOOLEAN  | If the snapshot is part of the current history, shows abandoned snapshots. If there is no corresponding value in a Delta Lake table, the returned value is NULL.  |  
  * `TABLE( table_manifests( '`table_name`' ) )`: Query an Iceberg table's manifest file metadata using the table_manifests() function. Dremio returns records that have these fields:  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| path  | VARCHAR  | Full path and name of the manifest file  |  
| length  | BIGINT  | Size in bytes  |  
| partition_spec_id  | VARCHAR  | ID of the partition  |  
| added_snapshot_id  | VARCHAR  | ID of the snapshot added to the manifest  |  
| added_data_files_count  | BIGINT  | Number of new data files added  |  
| existing_data_files_count  | BIGINT  | Number of existing data files  |  
| deleted_data_files_count  | BIGINT  | Number of files removed  |  
| partition_summaries  | VARCHAR  | Partition information  |  
  * `TABLE( table_partitions( '`table_name`' ) )`: Query statistics related to the partitions of an Iceberg table.  
| Column Name  | Data Type  | Description  |  
| --- | --- | --- |  
| partition  | CHARACTER VARYING  | The partition key  |  
| record_count  | INTEGER  | The number of records in the partition  |  
| file_count  | INTEGER  | The number of data files in the partition  |  
| spec_id  | INTEGER  | The ID of the partition specification on which partition is based.  |  
  * `TABLE( table_snapshot( '`table_name`' ) )`: Query the snapshot metadata of an Iceberg table or a Delta Lake table by using the table_snapshot() function. Dremio returns records that have these fields:  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| committed_at  | TIMESTAMP  | The timestamp the snapshot was committed  |  
| snapshot_id  | VARCHAR  | The snapshot ID  |  
| parent_id  | VARCHAR  | The parent snapshot ID. The value is null if the ID does not exist. If there is no corresponding value in a Delta Lake table, the returned value is NULL.  |  
| operation  | VARCHAR  | The operation (for example, append)  |  
| manifest_list  | VARCHAR  | List of manifest files for the snapshot. If there is no corresponding value in a Delta Lake table, the returned value is NULL.  |  
| summary  | VARCHAR  | Additional attributes (records added, etc.) If there is no corresponding value in a Delta Lake table, the returned value is NULL.  |  
  * `TABLE ( clustering_information ( '`table_name`' ) )`: Query the clustering metadata to determine the clustering health. With repeated `OPTIMIZE TABLE` runs, the `clustering_depth` will approach 1. However, it is important not to overindex on the value of this number, as various other factors dictate performance. Dremio returns records that have these fields:  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| table_name  | VARCHAR  | The name of the table provided  |  
| clustering_keys  | VARCHAR  | A comma-separated list of clustered columns in the order specified by the table definition  |  
| clustering_depth  | DOUBLE  | A numerical representation of the cluster health that defaults to 3, although values approach 1 for perfectly clustered tables, which is a theoretical value depending on several factors  |  
| last_clustering_timestamp  | VARCHAR  | The last time that an `OPTIMIZE TABLE` command was run on the table  |  


* * *
UNNEST( `list_expression` ) [ WITH ORDINALITY ] String Optional
Expands a LIST into a table with a single row for each element in the LIST. WITH ORDINALITY returns an additional column with the offset of each element, which can be used with the ORDER BY clause to order the rows by their offsets. UNNEST cannot unnest a correlated variable.
* * *
AT {'{'})'{'{'})'{'}'}) REF[ERENCE] | BRANCH {'{'})'{'}'}'{'}'} `reference_name` String Optional
Only for tables or views in Nessie sources. Specifies a reference to run the query against. When this parameter is omitted, the current reference is used.
`REF[ERENCE]`: Identifies the specific reference.
`BRANCH`: Identifies the specific branch.
* * *
{'{'})'{'{'})'{'}'}) PIVOT | UNPIVOT {'{'})'{'}'}'{'}'} ( `expression` ) String Optional
PIVOT converts a set of data from rows into columns. UNPIVOT converts a set of data from columns into rows. The expression can be one of the following:
  * **pivot_clause** : The query to aggregate the data on.
  * **pivot_for_clause** : Which columns to group and pivot on.
  * **pivot_in_clause** : Filters the values for the columns pivot_for_clause. Each of the values in this clause will be a separate column.


This keyword is applied to a `SELECT` statement. The syntax does not support an alias between the table/subquery and either the `PIVOT` or `UNPIVOT` clause. For example, `SELECT name, dept FROM employees) `alias` PIVOT `query`` is not supported.
* * *
JOIN `expression` Boolean Optional
Combines rows from two tables or views to create a new combined row that can be used in the query. Supported expressions are `LEFT [OUTER] JOIN`, `RIGHT [OUTER] JOIN`, `FULL [OUTER] JOIN`, `INNER JOIN`, `CROSS JOIN`.
* * *
WHERE `condition` String Optional
Use the `WHERE` clause to filter your query and extract only the records that fulfill a specified condition. The following operators can be used: `+`, `>`, `<`, `>=`, `<=`, `{ <> | != }`, `BETWEEN`, `LIKE`, `IN`. Additionally, ``condition`` can include logical operators, such as `AND`, `OR`, and `NOT`.
* * *
GROUP BY `expression` String Optional
Groups rows with the same group-by-item expressions and computes aggregate functions (such as `COUNT()`, `MAX()`, `MIN()`, `SUM()`, `AVG()` ) for the resulting group. A `GROUP BY` expression can be one or more column names, a number referencing a position in the `SELECT` list, or a general expression.
* * *
QUALIFY `expression` Boolean Optional
Filters the results of window functions. To use `QUALIFY`, at least one window function must be present in either the `SELECT` statement or within the `QUALIFY` expression. The expression filters the result after aggregates and window functions are computed; it can also contain window functions. The boolean expression can be the result of a subquery.
* * *
ORDER BY `column_name1`, `column_name2`, … [ DESC ] String Optional
Sort the result by a specific column. By default, the records are sorted in ascending order. Use `DESC` to sort the records in descending order.
* * *
LIMIT `count` Integer Optional
Constrains the maximum number of rows returned by the query. Must be a non-negative integer.
* * *
AT {'{'})'{'{'})'{'}'}) SNAPSHOT '`snapshot_id`' | `timestamp` {'{'})'{'}'}'{'}'} String Optional
Specifies a reference for the current SQL session. When this parameter is omitted, the current reference is used.
  * `SNAPSHOT '`snapshot_id`'`: Applies to Apache Iceberg tables only. A time-travel query that enables you to specify an earlier version of a table to read. A snapshot ID is obtained either through the table_history() or table_snapshot() metadata function.
  * ``timestamp``: Available for Iceberg table queries only. Changes the commit reference point to the most recent Iceberg snapshot as of the provided timestamp. ``timestamp`` may be any SQL expression that resolves to a single timestamp type value, for example: `CAST( DATE_SUB(CURRENT_DATE,1) AS TIMESTAMP )` or `TIMESTAMP '2022-07-001:30:00.000'`.


### Examples[​](/reference/sql/commands#examples "Direct link to Examples")
Query an existing table in a data lake source

```
SELECT *  
FROM Samples."samples.dremio.com"."zips.json"  

```

Query a specified column in an existing table

```
SELECT city  
FROM Samples."samples.dremio.com"."zips.json"  

```

Query a table using the DISTINCT option to eliminate duplicates from the result set

```
SELECT DISTINCT city  
FROM Samples."samples.dremio.com"."zips.json"  

```

Query a table and filter the results using the WHERE clause

```
SELECT *  
FROM Samples."samples.dremio.com"."zips.json"  
WHERE state = 'MA' AND city = 'AGAWAM'  

```

Query a table and group and order the result by the specified expression

```
SELECT COUNT(city), city, state  
FROM Samples."samples.dremio.com"."zips.json"  
GROUP BY state, CITY  
ORDER BY COUNT(city) DESC  

```

Query a table and filter the result using QUALIFY with window functions in the SELECT list

```
SELECT passenger_count, trip_distance_mi, fare_amount,  
RANK() OVER (PARTITION BY passenger_count ORDER BY trip_distance_mi) AS pc_rank  
FROM "NYC-taxi-trips"  
QUALIFY pc_rank = 1  

```

Query a table and filter the result using QUALIFY with window functions in the QUALIFY clause

```
SELECT passenger_count, trip_distance_mi, fare_amount  
FROM "NYC-taxi-trips"  
QUALIFY RANK() OVER (PARTITION BY passenger_count ORDER BY trip_distance_mi) = 1  

```

Query a table using the PIVOT and UNPIVOT clauses

```
ALTER DATASET Samples."samples.dremio.com"."SF weather 2018-2019.csv" REFRESH METADATA auto promotion FORCE UPDATE;  
  
SELECT * FROM (  
    SELECT  EXTRACT(YEAR FROM CAST(F AS DATE)) as "YEAR",  
            EXTRACT(MONTH FROM CAST(F AS DATE)) as "MONTH",  
            K as MAX_TEMP  
    FROM Samples."samples.dremio.com"."SF weather 2018-2019.csv"  
    where F <> 'DATE'  
)  
PIVOT (  
    max(MAX_TEMP) for "MONTH" in (1 as JAN, 2 as FEB, 3 as MAR, 4 as APR, 5 as MAY, 6 as JUN, 7 as JUL, 8 as AUG, 9 as SEP, 10 as OCT, 11 as NOV, 12 as "DEC")  
)  
UNPIVOT (  
    GLOBAL_MAX_TEMP for "MONTH" in (JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, "DEC")  
)  
ORDER BY "YEAR", "MONTH";  

```

Return a table with a single row for each element in a LIST

```
SELECT   index,  
         UPPER(array_item)  
FROM     UNNEST ( ARRAY [ 'a', 'b', 'c' ]) WITH ORDINALITY AS my_table ( array_item, index)  
ORDER BY index;  

```

Left join

```
SELECT  
  c.c_nationkey,  
  o.o_orderdate,  
  o.o_shippriority  
FROM  
  (NAS2."customer.parquet" c  
  left join  
  NAS2."orders.parquet" as o  
ON c.c_custkey = o.o_custkey)  

```

Right join

```
SELECT  
  c.c_nationkey,  
  o.o_orderdate,  
  o.o_shippriority  
FROM  
  (NAS2."customer.parquet" c  
  right join  
  NAS2."orders.parquet" as o  
ON c.c_custkey = o.o_custkey)  

```

Full join

```
SELECT  
  c.c_nationkey,  
  o.o_orderdate,  
  o.o_shippriority  
FROM  
  (NAS2."customer.parquet" c  
  full join  
  NAS2."orders.parquet" as o  
ON c.c_custkey = o.o_custkey)  

```

Inner join

```
SELECT  
  c.c_nationkey,  
  o.o_orderdate,  
  o.o_shippriority  
FROM  
  (NAS2."customer.parquet" c  
  inner join  
  NAS2."orders.parquet" as o  
ON c.c_custkey = o.o_custkey)  

```

Cross join

```
SELECT  
  c.c_nationkey,  
  o.o_orderdate,  
  o.o_shippriority  
FROM  
  (NAS2."customer.parquet" c  
  cross join  
  NAS2."orders.parquet" as o)  

```

Select a dataset at a specified branch

```
SELECT *  
FROM nessiesource.orders at branch devbranch;  

```

### Examples for Iceberg Tables[​](/reference/sql/commands#examples-for-iceberg-tables "Direct link to Examples for Iceberg Tables")
Time travel query on an Iceberg table using a timestamp

```
SELECT count(*)  
FROM my_table AT TIMESTAMP '2022-07-01 01:30:00.000'  

```

Time travel query on an Iceberg table using a snapshot ID

```
SELECT *  
FROM myTable AT SNAPSHOT '5393090506354317772'  

```

Query an Iceberg table using the table's history metadata and a snapshot ID

```
SELECT *  
FROM TABLE(table_history('myTable'))  
WHERE snapshot_id = 4593468819579153853  

```

Query an Iceberg table to find the number of snapshots for a table

```
SELECT count(*)  
FROM TABLE(table_snapshot('myTable'))  
GROUP BY snapshot_id  

```

## Forcing an Even Distribution of Build-Side Join Data Across All Executor Nodes[​](/reference/sql/commands#forcing-an-even-distribution-of-build-side-join-data-across-all-executor-nodes "Direct link to Forcing an Even Distribution of Build-Side Join Data Across All Executor Nodes")
SQL hints generally are instructions to the query planner about how to execute queries. You can use a `BROADCAST` SQL hint if a query profile indicates that data involved in a join of two tables is heavily skewed and overloading one or more executor nodes. The hint forces an even distribution of the build-side join data across all executor nodes.
These hints are ignored for nested-loop joins and are not supported on views.
A `BROADCAST` hint must be used immediately after the name of a table.
Syntax of a BROADCAST hint

```
/*+ BROADCAST */  

```

Example 1

```
SELECT *  
  FROM T1 /*+ BROADCAST */  
  INNER JOIN t2 ON t1.key = t2.key  
  INNER JOIN t3 ON t2.key = t3.key  

```

Example 2

```
SELECT *  
  FROM T1  
  INNER JOIN (select key, max(cost) cost from t2 /*+ BROADCAST */) T2 ON t1.key = t2.key  
  INNER JOIN t3 ON t2.key = t3.key  

```

## Querying Relational-Database Sources with External Queries[​](/reference/sql/commands#querying-relational-database-sources-with-external-queries "Direct link to Querying Relational-Database Sources with External Queries")
For information about what external queries are and the privilege needed to run them, see [Querying Relational-Database Sources Directly](/help-support/advanced-topics/external-queries).
External queries use the following syntax:
Syntax of external queries

```
SELECT * FROM table(<datasource-name>.external_query('<source-query'))  

```

If an external query contains a string literal, surround the string literal with double single quotation marks, rather than with double quotation marks:
Example of an external query that includes a string literal

```
SELECT * FROM table(postgresql.external_query('SELECT string_col FROM tbl WHERE string_col = ''test'''))  

```

To escape a single quotation mark, use four consecutive quotation marks:
Example of an external query that includes an escaped single quotation mark

```
SELECT * FROM table(postgresql.external_query('SELECT string_col from tbl where string_col = ''john''''s car'''))  

```

Dremio does not support moving virtual data sources created from external queries until after Dremio performs the first refresh of the data source. For example, if you save the results of an external query as MyView in space MySpace_1, you cannot move the view to another space until after the first metadata refresh of the relational-database source.
You can use the results of external queries in joins:
Example of a join of the results of an external query with a Dremio table

```
SELECT b.customer_id, a.product_id, a.price  
FROM table(postgresql.external_query( source_a,  
'SELECT product_id, price  
FROM products' )) AS a,  
source_b.sales AS b  
	WHERE b.product_id = a.product_id  

```

  

## Querying information about rejected records in files used by a COPY INTO operation for which ON_ERROR was set to 'continue' or 'skip_file'[​](/reference/sql/commands#querying-information-about-rejected-records-in-files-used-by-a-copy-into-operation-for-which-on_error-was-set-to-continue-or-skip_file "Direct link to Querying information about rejected records in files used by a COPY INTO operation for which ON_ERROR was set to 'continue' or 'skip_file'")
Queries use the `copy_errors()` function.
Syntax

```
SELECT *  
FROM TABLE(copy_errors(‘<table_name>’, [‘<query_id>’])  

```

* * *
`table_name` String
The name of the target table on which the COPY INTO operation was performed.
* * *
`query_id` String Optional
The ID of the job that ran the COPY INTO operation. You can obtain this ID from the [`sys.copy_errors_history`](/reference/sql/system-tables/copy-errors-history) system table. If you do not specify an ID, the default value is the ID of the last job started by the current user to run COPY INTO on the target table.
* * *
The records returned consist of these fields:  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| job_id  | string  | The ID of the job that ran the COPY INTO operation.  |  
| file_name  | string  | The full path of the file where the validation error was encountered.  |  
| line_number  | long  | The number of the line (physical position) in the file where the error was encountered.  |  
| row_number  | long  | The row (record) number in input file.  |  
| column_name  | string  | The name of the column where the error was encountered.  |  
| error  | string  | A message describing the error.  |  
Was this page helpful?
[Previous SQL Commands for Nessie](/reference/sql/commands/nessie)[Next ALTER FOLDER](/reference/sql/commands/alter-folder)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SQL Commands for Nessie](/reference/sql/commands/nessie)[Next ALTER FOLDER](/reference/sql/commands/alter-folder)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2FSELECT-statements%2F&_biz_t=1777950564909&_biz_i=SELECT%20%7C%20Dremio%20Documentation&_biz_n=476&rnd=539491&cdn_o=a&_biz_z=1777950564909)
