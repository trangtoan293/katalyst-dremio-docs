---
url: /reference/sql/commands/apache-iceberg-tables/vacuum-table
title: "VACUUM TABLE | Dremio Documentation"
depth: 4
crawled_at: 64798.170020208
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * [SQL Commands for Apache Iceberg Tables](/reference/sql/commands/apache-iceberg-tables)
  * VACUUM TABLE

Version: current [26.x]
On this page
# VACUUM TABLE
When you are working with Apache Iceberg tables, you can use the `VACUUM TABLE` command to remove older table snapshots that you no longer need and the files (data files, the manifest file, manifest list file, and partition stats files) that are associated only with them. See [Expiring Snapshots of Apache Iceberg Tables](/developer/data-formats/apache-iceberg/expiring-snapshots) for more information. Additionally, `VACUUM TABLE` can clean up orphaned files that may have been left behind in the table location due to failed operations.
To run `VACUUM TABLE`, users need the OWNERSHIP [privilege](/security/rbac/privileges) on the table or must be members of the ADMIN role.
Syntax

```
VACUUM TABLE <table_name>   
    { EXPIRE SNAPSHOTS [ older_than = <value> ]  [ retain_last = <value> ]  
    | REMOVE ORPHAN FILES  [ older_than = <value> ]  [ location = <value> ] }  

```

## Parameters[​](/reference/sql/commands/apache-iceberg-tables/vacuum-table#parameters "Direct link to Parameters")
`table_name` String
The path and name of the table to which the snapshots to expire belong.
* * *
EXPIRE SNAPSHOTS [ older_than = `value` ] [ retain_last = `value` ] String Optional
Options for specifying which snapshots to expire.
  * `older_than`: Timestamp that marks the lower boundary of the snapshots to keep. Snapshots with timestamps earlier than the specified timestamp are deleted. The default timestamp is five days before the date and time at which the command is run. Only works with UTC timestamps.
  * `retain_last`: Minimum number of snapshots to retain, starting with the current timestamp.


* * *
REMOVE ORPHAN FILES [ older_than = `value` ] [ location = `value` ] String Optional
Options for specifying which orphan files to remove.
  * `older_than`: Orphan files with creation timestamps earlier than the specified `older_than` timestamp are deleted. If no value is provided or the value is less than 3 days, the command defaults to deleting files older than 3 days from the time of execution.
  * `location`: Specifies the directory to search for orphaned files; defaults to the table’s root location. The location option is not supported for tables stored on HDFS. The specified location must be a subdirectory of the table’s root location.


On HDFS, if Dremio users do not have the necessary permissions to access orphaned files, the `VACUUM TABLE` command will not be able to remove them.
## Examples[​](/reference/sql/commands/apache-iceberg-tables/vacuum-table#examples "Direct link to Examples")
### Example 1[​](/reference/sql/commands/apache-iceberg-tables/vacuum-table#example-1 "Direct link to Example 1")
Remove snapshots older than specific day and time, but retain a minimum of 20 snapshots

```
VACUUM TABLE s3.SF_Incidents2016  
    EXPIRE SNAPSHOTS older_than = '2023-04-20 00:00:00.000' retain_last = 20;  

```

#### Result[​](/reference/sql/commands/apache-iceberg-tables/vacuum-table#result "Direct link to Result")
The most recent twenty snapshots are retained. For example, suppose that eleven snapshots are created after the date and time represented by the timestamp. Eight snapshots older than the timestamp are retained, so as to retain the minimum amount of twenty.
![This image demonstrates the result of this example.](https://docs.dremio.com/images/expire-snapshots-example-a.png)
### Example 2[​](/reference/sql/commands/apache-iceberg-tables/vacuum-table#example-2 "Direct link to Example 2")
Remove snapshots older than 5 days, but retain a minimum of 100 snapshots

```
VACUUM TABLE s3.SF_Incidents2016 EXPIRE SNAPSHOTS retain_last = 100;  

```

#### Result[​](/reference/sql/commands/apache-iceberg-tables/vacuum-table#result-1 "Direct link to Result")
The most recent one hundred snapshots are retained, even among snapshots that are older than five days. After the 100 snapshots, any snapshots older than 5 days are deleted. For example, suppose that eleven snapshots were created in the past five days. When the command is run, the most recent one hundred snapshots are retained, even though the majority of them were created further back in the past than five days ago.
![This image demonstrates the result of this example.](https://docs.dremio.com/images/expire-snapshots-example-c.png)
### Example 3[​](/reference/sql/commands/apache-iceberg-tables/vacuum-table#example-3 "Direct link to Example 3")
Remove snapshots older than 5 days, but retain a minimum of 1 snapshot

```
VACUUM TABLE s3.SF_Incidents2016 EXPIRE SNAPSHOTS;  

```

#### Result[​](/reference/sql/commands/apache-iceberg-tables/vacuum-table#result-2 "Direct link to Result")
The snapshots created within the last five days are retained. For example, suppose that eleven snapshots were created in the last five days. Only those snapshots would be retained.
![This image demonstrates the result of this example.](https://docs.dremio.com/images/expire-snapshots-example-d.png)
### Example 4[​](/reference/sql/commands/apache-iceberg-tables/vacuum-table#example-4 "Direct link to Example 4")
Remove orphan files 

```
VACUUM TABLE s3.SF_Incidents2016   
   REMOVE ORPHAN FILES OLDER_THAN = '2024-02-15 19:43:53.812';  

```

#### Result[​](/reference/sql/commands/apache-iceberg-tables/vacuum-table#result-3 "Direct link to Result")
  * The orphan files in the table location that were created before the timestamp specified above are removed.


## Limitations[​](/reference/sql/commands/apache-iceberg-tables/vacuum-table#limitations "Direct link to Limitations")
  * The `VACUUM TABLE` command does not support Iceberg tables where file paths in metadata use mixed URI schemes or authorities (e.g., a mix of s3a://, s3n://, s3:// or different Azure schemes like abfss://, wasb://)


Was this page helpful?
[Previous UPDATE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-update)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous UPDATE](/reference/sql/commands/apache-iceberg-tables/apache-iceberg-update)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Fapache-iceberg-tables%2Fvacuum-table%2F&_biz_t=1777951119040&_biz_i=VACUUM%20TABLE%20%7C%20Dremio%20Documentation&_biz_n=1566&rnd=315480&cdn_o=a&_biz_z=1777951119041)
