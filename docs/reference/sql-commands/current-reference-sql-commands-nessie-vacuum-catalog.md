---
url: /reference/sql/commands/nessie/vacuum-catalog
slug: /reference/sql/commands/nessie/vacuum-catalog
title: "VACUUM CATALOG | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64254.646432666
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * [SQL Commands for Nessie](/reference/sql/commands/nessie)
  * VACUUM CATALOG

Version: current [26.x]
On this page
# VACUUM CATALOG
Remove expired snapshots and orphaned metadata files for all Iceberg tables in the specified Nessie catalog source.
For Nessie catalog sources, catalog owners and members of the `ADMIN` role may manually run the `VACUUM CATALOG` SQL command in the [SQL API](/reference/api/sql) or the SQL Runner to start a vacuum job.
Syntax

```
VACUUM CATALOG <source_name>   
    [ { INCLUDE | EXCLUDE } ( <table_name>   
        [ AT { REF[ERENCE] | BRANCH | TAG | COMMIT | SNAPSHOT | TIMESTAMP } <reference_name> ]  
        [ AS OF <timestamp> ]   
    [ , ... ] ) ]  

```

Before you can manually run the `VACUUM CATALOG` SQL command, you must complete the prerequisite tasks listed in [Table Cleanup with Vacuum](/developer/data-formats/apache-iceberg/table-maintenance-optimization/table-cleanup-vacuum).
## Parameters​
`source_name` String
The name of the Nessie catalog source to vacuum.
* * *
{'{'})'{'{'})'{'}'}) INCLUDE | EXCLUDE {'{'})'{'}'}'{'}'} `table_name` String Optional
The name of the table that you want to include or exclude in the catalog source. Use `INCLUDE` to whitelist a table that the vacuum catalog should process. Note that `INCLUDE` and `EXCLUDE` cannot be used together. To specify multiple tables, separate them with commas.
* * *
AT {'{'})'{'{'})'{'}'}) REF[ERENCE] | BRANCH | TAG | COMMIT | SNAPSHOT | TIMESTAMP {'{'})'{'}'}'{'}'} `reference_name` String Optional
Specifies the table that you want to exclude. When this parameter is omitted, the current reference is used.
`reference_name` is the name of the reference to be used with one of the following:
  * `REF[ERENCE]`: Identifies a specific branch, tag, or commit.
  * `BRANCH`: Identifies a specific branch.
  * `TAG`: Identifies a specific tag.
  * `COMMIT`: Identifies a specific commit. Commit hashes must be enclosed in double quotes. For example, `“ff2fe50fef5a030c4fc8e61b252bdc33c72e2b6f929d813833d998b8368302e2”`.
  * `SNAPSHOT`: Identifies an earlier version of a table to read.
  * `TIMESTAMP`: Identifies a specific timestamp.


References help identify the table. After the table is identified, the exclusion applies to this table across all branches, commits, and other references. Using a reference does not exclude the table only at that reference.
* * *
AS OF `timestamp` String Optional
Available for Iceberg table queries only. Changes the commit reference point to the most recent Iceberg snapshot as of the provided timestamp. ``timestamp`` may be any SQL expression that resolves to a single timestamp type value. For example, `CAST( DATE_SUB(CURRENT_DATE,1) AS TIMESTAMP )` or `TIMESTAMP '2022-07-01 01:30:00.000'`.
## Examples​
Vacuum a catalog

```
VACUUM CATALOG myNessieCatalog;  

```

Vacuum a catalog and exclude a table 

```
VACUUM CATALOG myNessieCatalog   
    EXCLUDE (t1);  

```

Vacuum a catalog and exclude a table referenced at a branch

```
VACUUM CATALOG myNessieCatalog   
    EXCLUDE (t1 AT BRANCH dev);  

```

Vacuum a catalog and exclude multiple tables with one referenced at a tag and the other at a branch

```
VACUUM CATALOG myNessieCatalog   
    EXCLUDE (t1 AT BRANCH dev, t2);  

```

Vacuum a catalog and exclude multiple tables with one referenced at a tag and the other at a branch

```
VACUUM CATALOG myNessieCatalog   
    EXCLUDE (t1 AT TAG namedTag, t2 AT BRANCH dev);  

```

Vacuum a catalog and include a table 

```
VACUUM CATALOG arctic_catalog   
    INCLUDE (t1);  

```

Vacuum a catalog and include a table referenced at a branch

```
VACUUM CATALOG arctic_catalog   
    INCLUDE (t1 AT BRANCH dev);  

```

Vacuum a catalog and include multiple tables with one of them referenced at a branch

```
VACUUM CATALOG arctic_catalog   
    INCLUDE (t1 AT BRANCH dev, t2);  

```

Vacuum a catalog and include multiple tables with one referenced at a tag and the other at a branch

```
VACUUM CATALOG arctic_catalog   
    INCLUDE (t1 AT TAG namedTag, t2 AT BRANCH dev);  

```

Was this page helpful?
[Previous SHOW TAGS](/reference/sql/commands/nessie/show-tags)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SHOW TAGS](/reference/sql/commands/nessie/show-tags)
!
