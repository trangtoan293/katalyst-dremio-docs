---
url: /reference/sql/commands/apache-iceberg-tables/optimize-table
slug: /reference/sql/commands/apache-iceberg-tables/optimize-table
title: "OPTIMIZE TABLE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64250.47739425
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * [SQL Commands for Apache Iceberg Tables](/reference/sql/commands/apache-iceberg-tables)
  * OPTIMIZE TABLE

Version: current [26.x]
On this page
# OPTIMIZE TABLE
Rewrites data and manifest files to provide peak performance. For more information, see [Optimize Tables](/developer/data-formats/apache-iceberg/table-maintenance-optimization/optimizing).
To run `OPTIMIZE TABLE`, you must meet one of the following requirements:
  * Membership in the `ADMIN` role
  * Grants of `SELECT` and `UPDATE` privileges on the table
  * Table ownership

Syntax

```
OPTIMIZE TABLE <table_name>  
   [ REWRITE DATA [ USING BIN_PACK ]  
      [ ( { TARGET_FILE_SIZE_MB | MIN_FILE_SIZE_MB | MAX_FILE_SIZE_MB | MIN_INPUT_FILES } = <value> [, ... ] ) ]   
         [ FOR PARTITIONS <predicate> ] ]  
   [ REWRITE MANIFESTS ]  

```

## Parameters​
`table_name` String
The path of the Iceberg table that you want to optimize.
* * *
REWRITE DATA [ USING BIN_PACK ] Optional
For partitioned tables, this parameter compacts smaller files or splits larger ones to the optimal file size using the bin-pack strategy. This parameter is used by default to optimize a table, but you can optionally include it in your query to specify additional options to control the file sizes in your selected table. Additionally, since optimization uses only the bin-pack strategy, including the `USING BIN_PACK` clause is optional. Dremio also optimizes Iceberg v2 tables containing position delete files.
* * *
[ ( {'{'})'{'{'})'{'}'}) TARGET_FILE_SIZE_MB | MIN_FILE_SIZE_MB | MAX_FILE_SIZE_MB | MIN_INPUT_FILES {'{'})'{'}'}'{'}'} = `value` [, ... ] ) ] Number Optional
The options available for partitioned tables with `REWRITE DATA USING BIN_PACK`:  
| Property Name  | Default Value  | Description  |  
| --- | --- | --- |  
| `TARGET_FILE_SIZE_MB`  |  `write.target-file-size-bytes` [table property](/developer/data-formats/apache-iceberg/table-properties), or 512 MB as defined by   | Controls the target size of the files that are generated.  |  
| `MIN_FILE_SIZE_MB`  | 0.24x `TARGET_FILE_SIZE_MB` (123 MB at the default `TARGET_FILE_SIZE_MB`)  | Files smaller than `MIN_FILE_SIZE_MB` qualify for compaction.  |  
| `MAX_FILE_SIZE_MB`  | 1.8x `TARGET_FILE_SIZE_MB` (922 MB at the default `TARGET_FILE_SIZE_MB`)  | Files larger than `MAX_FILE_SIZE_MB` qualify for compaction.  |  
| `MIN_INPUT_FILES`  | 5  | The minimum number of qualified files for a compaction operation. When a table is partitioned, `MIN_INPUT_FILES` specifies the minimum number of qualified files that must be present per partition.  |  
The command analyzes file groups or partitions in parallel across available engine executors to identify optimization candidates and then performs optimization when at least `MIN_INPUT_FILES` candidates are present.
* * *
FOR PARTITIONS `predicate` Optional
Selects specific partitions for optimizing data files when using `REWRITE DATA`. Consider using this filter when:
  * Selected partitions are queried more often or are of higher importance.
  * Selected partitions are more active and are constantly being updated.
  * You want to avoid optimizing the entire table.


The ``predicate`` can be any combination of logical and mathematical conditions. However, the supported predicate syntax differs depending on whether the table uses identity or non-identity partitions.
### Identity Partitions​
For tables using identity partitions (partitioned directly on a column, such as `PARTITION BY name`), you can use equality conditions and expressions:
  * `column_1=1`: Optimizes all data files in the partition where `column_1` equals 1.
  * `column_2 LIKE 'a%'`: Optimizes all data files in the partition where `column_2` values start with the letter "a".
  * `date_column >= '2024-01-01'`: Optimizes the `date_column` partition with dates on or after January 1, 2024.


### Non-Identity Partitions​
For tables using non-identity partitions (partitioned using a transformation on a column, such as `PARTITION BY (MONTH(ts))`), only equality conditions on the source column are supported. Expressions that reference the partition transformation directly are not allowed and will result in an error.
**Supported equality conditions:**  
| Partition Definition  | Supported Predicate  | Description  |  
| --- | --- | --- |  
| `PARTITION BY (MONTH(ts))`  | `ts >= TIMESTAMP '2025-06-01'`  | Filters based on the source timestamp column  |  
| `PARTITION BY (MONTH(ts))`  | `ts = TIMESTAMP '2025-06-15'`  | Exact match on source column  |  
| `PARTITION BY (TRUNCATE(1, name))`  | `name = 'Alice'`  | Equality on the source column  |  
| `PARTITION BY (YEAR(date_col))`  | `date_col > '2024-01-01'`  | Range condition on source column  |  
**Unsupported expressions (will error):**  
| Partition Definition  | Unsupported Predicate  | Why It Fails  |  
| --- | --- | --- |  
| `PARTITION BY (MONTH(ts))`  | `MONTH(ts) = 6`  | Cannot use transformation function in predicate  |  
| `PARTITION BY (TRUNCATE(1, name))`  | `name LIKE 'A%'`  |  `LIKE` expressions not supported for non-identity partitions  |  
| `PARTITION BY (YEAR(date_col))`  | `YEAR(date_col) = 2020`  | Cannot reference partition transformation directly  |  
| `PARTITION BY (TRUNCATE(10, amount))`  | `amount / 10 = 5`  | Arithmetic expressions not supported  |  
If the specified column is not partitioned, Dremio will display an error message. If a relevant partition cannot be found, Dremio will not optimize any files. When no partition filters are specified, all data files will be candidates for optimization. The command does not include sorting within partitions.
* * *
REWRITE MANIFESTS Optional
Optimizes the size of Iceberg manifest files when optimizing clustered or partitioned data. When this clause is used, the command must not contain the `REWRITE DATA` clause.
Dremio's manifest file sizing:
  * Default target size: [`commit.manifest.target-size-bytes`](/developer/data-formats/apache-iceberg/table-properties) or 8 MB if the table property is not present.
  * Optimal range: 0.75x to 1.8x the target size
  * Files smaller than the minimum range: Will be compacted together
  * Files larger than the maximum range: Will be split into smaller files


## Optimizing Clustered Data Tables​
When working with clustered data tables, you may need to run multiple `OPTIMIZE TABLE` operations to achieve optimal data layout.
  * Start with `OPTIMIZE TABLE` to initiate reclustering of all records.
  * Use `SELECT * FROM TABLE(clustering_information('table_name'))` to check the resulting clustering depth.
  * Since Dremio optimization works incrementally to reduce the current clustering depth toward the target (default: 3), you may need to run `OPTIMIZE TABLE` multiple times, checking the `clustering_information()` function after each run to monitor progress.
  * Continue this process until the clustering depth falls below your target threshold or until successive runs show minimal improvement.


### Data Table Parameters​
To optimize the logical data layout of the table, `OPTIMIZE TABLE` uses the `dremio.clustering` [table properties](/developer/data-formats/apache-iceberg/table-properties) from the target table. The default values can be overridden by [support keys](/help-support/support-settings/) of the same names.
### Configuring Compaction​
To optimize physical file management and compaction, `OPTIMIZE TABLE` also uses the `dremio.iceberg.auto.clustering.compact.files.enabled` [support key](/help-support/support-settings/) to control file compaction. When true (the default), small files are combined with their closest cluster, and large files are rewritten into appropriate sizes while maintaining proper data organization according to the clustering keys.
## Examples​
Rewrite data files and manifests to Dremio's optimal size

```
OPTIMIZE TABLE demo.example_table  

```

Rewrite partitioned data files meeting the minimum file count

```
OPTIMIZE TABLE demo.example_table  
   REWRITE DATA USING BIN_PACK (TARGET_FILE_SIZE_MB=512, MIN_INPUT_FILES=10)  

```

Rewrite data files in the selected partition if the minimum file count is met

```
OPTIMIZE TABLE demo.example_table  
   REWRITE DATA USING BIN_PACK (MIN_INPUT_FILES=10)  
      FOR PARTITIONS state='NEBRASKA'    

```

Rewrite only manifest files

```
OPTIMIZE TABLE demo.example_table  
   REWRITE MANIFESTS  

```

Was this page helpful?
Previous MERGE[Next ROLLBACK](/reference/sql/commands/apache-iceberg-tables/rollback-table)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
Previous MERGE[Next ROLLBACK](/reference/sql/commands/apache-iceberg-tables/rollback-table)
!
