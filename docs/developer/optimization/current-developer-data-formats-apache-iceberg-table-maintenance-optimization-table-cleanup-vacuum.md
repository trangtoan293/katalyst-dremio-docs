---
url: /developer/data-formats/apache-iceberg/table-maintenance-optimization/table-cleanup-vacuum
slug: /developer/data-formats/apache-iceberg/table-maintenance-optimization/table-cleanup-vacuum
title: "Table Cleanup with Vacuum | Dremio Documentation"
depth: 4
crawled_at: 64777.176171541
---

  * [Dremio Enterprise Home](/)
  * [Developer Guide](/developer)
  * [File and Table Formats](/developer/data-formats)
  * [Apache Iceberg](/developer/data-formats/apache-iceberg)
  * [Table Maintenance and Optimization](/developer/data-formats/apache-iceberg/table-maintenance-optimization)
  * Table Cleanup with Vacuum

Version: current [26.x]
On this page
# Table Cleanup with Vacuum
Query performance may be affected as you ingest and make changes to data. For example, small files produced by data ingestion jobs result in slower queries because the query engine needs to read more files.
Use the [VACUUM CATALOG](/reference/sql/commands/nessie/vacuum-catalog) command to delete expired snapshots and orphaned metadata files for Iceberg tables in Nessie catalog sources.
  * You must be the catalog owner or a member of the ADMIN role to manage run the VACUUM CATALOG command for Nessie catalog sources.
  * For more details on how Dremio optimizes Iceberg tables, see [Optimizing Tables](/developer/data-formats/apache-iceberg/table-maintenance-optimization/optimizing).


## Prerequisites​
Before you can manually run the VACUUM CATALOG command, you must complete the following tasks:
  1. [Add the Nessie catalog as a source](/data-sources/lakehouse-catalogs/nessie) in Dremio.
  2. Set the cutoff policy for the Nessie catalog source.


You must be the catalog owner or a member of the ADMIN role to manually run the VACUUM CATALOG command, and the vacuum operation is only supported for Nessie sources. Read [Configuring Nessie as a Source](/data-sources/lakehouse-catalogs/nessie) for more information.
## Setting the Cutoff Policy​
Dremio uses the cutoff policy for the Nessie catalog source to determine which snapshots and associated files to expire and delete. For example, if the cutoff policy is set to 5 days, Dremio expires and deletes snapshots that are older than 5 days. For details about how Dremio executes cutoff policies, see the [VACUUM CATALOG examples](/reference/sql/commands/nessie/vacuum-catalog).
Dremio applies a 5-day cutoff policy for table cleanup by default. Use the duration-based or time-based cutoff policy, with or without a grace period.
The new snapshots and metadata files that are introduced during Iceberg write operations are unreferenced until the write operation is committed. A short-duration cutoff policy could delete these new files in their intermediate state, possibly corrupting the table. To prevent this, you can specify a grace period in your Nessie catalog source configuration. Dremio will not delete any files written during the grace period. If you set a grace period, the duration must be at least 24 hours to prevent table corruption and loss of information about queries.
Cutoff policies that are set with the Nessie v2 REST API take precedence over the default value of 5 days.
For requests to the Nessie v2 REST API to set the cutoff policy and grace period, the request URL is the IP address and port that you have set up for your Nessie server, appended with `/config/repository`:
Method and Example URL

```
POST http://localhost:19120/api/v2/config/repository  

```

#### Parameters​
config Body Object
Container for the configuration parameters for the cutoff policy.
#####  `config` Parameters​
type Body String
The type of repository configuration for the request. For requests to set the cutoff policy, the type is `GARBAGE_COLLECTOR`.
* * *
defaultCutoffPolicy Body String
The cutoff policy to use for the Nessie catalog source. You can set a duration-based or time-based cutoff policy.
  * Duration-based: Dremio deletes snapshots that are older than the specified duration each time you run the VACUUM CATALOG command.
    * Specify duration-based cutoff policies in Java duration format according to the `PT(n)H(n)M(n)S`. The duration string starts with `PT`, followed by the duration value and the unit of time: `H` for hours, `M` for minutes, and `S` for seconds.
    * Example: `PT24H` is a duration of 24 hours.
  * Time-based: Dremio deletes snapshots that are older than the specified date and time. Time-based cutoff policies apply only for a single run of the VACUUM CATALOG command; subsequent runs are treated as NoOp instructions.
    * Specify time-based cutoff policies in Java instant time format, `YYYY-MM-DD HH:MM:SS.MMMMZ`.
    * Example: `2023-12-01T18:00:00.0000Z` means that Dremio will delete snapshots that were created before 6:00 p.m. on December 1, 2023.


* * *
newFilesGracePeriod Body String Optional
Grace period to use for the Nessie catalog source. Use Java duration format, `PT(n)H(n)M(n)S`, to specify the grace period. The duration string starts with `PT`, followed by the duration value and `H` for hours, `M` for minutes, or `S` for seconds to indicate the unit of time. For example, `PT24H` means 24 hours. The grace period duration must be at least 24 hours to prevent table corruption and loss of information about queries.
### Setting a Duration-Based Cutoff Policy​
With a duration-based cutoff policy, Dremio deletes snapshots that are older than the specified duration each time you run the VACUUM CATALOG command.
The following examples demonstrate how to send requests via the Nessie v2 REST API to set a duration-based cutoff policy with a grace period:
Example Request

```
curl -X 'POST' \  
  'http://localhost:19120/api/v2/config/repository' \  
  --header 'accept: application/json' \  
  --header 'Content-Type: application/json' \  
  --data-raw '{  
  "config": {  
    "type": "GARBAGE_COLLECTOR",  
    "defaultCutoffPolicy": "PT48H",  
    "newFilesGracePeriod": "PT24H"  
  }  
}'  

```

The response lists the previously configured cutoff policy for the Nessie catalog source:
Example Response

```
{  
  "previous" : {  
    "type" : "GARBAGE_COLLECTOR",  
    "defaultCutoffPolicy" : "PT24H"  
  }  
}  

```

### Setting a Time-Based Cutoff Policy​
With a time-based cutoff policy, Dremio deletes snapshots that are older than the specified date and time.
The following examples demonstrate how to send requests via the Nessie v2 REST API to set a time-based cutoff policy with a grace period:
Example Request

```
curl -X 'POST' \  
  'http://localhost:19120/api/v2/config/repository' \  
  --header 'accept: application/json' \  
  --header 'Content-Type: application/json' \  
  --data-raw '{  
  "config": {  
    "type": "GARBAGE_COLLECTOR",  
    "defaultCutoffPolicy": "2023-12-01T18:00:00.0000Z",  
    "newFilesGracePeriod": "PT24H"  
  }  
}'  

```

The response lists the previously configured cutoff policy for the Nessie catalog source:
Example Response

```
{  
  "previous" : {  
    "type" : "GARBAGE_COLLECTOR",  
    "defaultCutoffPolicy" : "PT24H"  
  }  
}  

```

### Updating the Cutoff Policy​
To update the cutoff policy for a Nessie catalog source, send a new request to the same POST endpoint you use to set the cutoff policy. If you previously set a grace period for the Nessie catalog source, the update request body must include the `newFilesGracePeriod` parameter and the duration you want to use, even if you don't want to change the grace period.
For example, suppose you previously set a cutoff policy of `PT48H` and a grace period of `PT24H`. If you want to change the cutoff policy to `PT24H` without changing the grace period, the update request should look like this:
Example Request to Update Cutoff Policy

```
curl -X 'POST' \  
  'http://localhost:19120/api/v2/config/repository' \  
  --header 'accept: application/json' \  
  --header 'Content-Type: application/json' \  
  --data-raw '{  
  "config": {  
    "type": "GARBAGE_COLLECTOR",  
    "defaultCutoffPolicy": "PT24H",  
    "newFilesGracePeriod": "PT24H"  
  }  
}'  

```

### Removing the Cutoff Policy​
To remove the cutoff policy for the Nessie catalog source and disable table cleanup, set the `defaultCutoffPolicy` to `NONE`:

```
curl -X 'POST' \  
  'http://localhost:19120/api/v2/config/repository' \  
  --header 'accept: application/json' \  
  --header 'Content-Type: application/json' \  
  --data-raw '{  
  "config": {  
    "type": "GARBAGE_COLLECTOR",  
    "defaultCutoffPolicy": "NONE"  
  }  
}'  

```

## Overrides and Exclusions​
You can use override properties to specify cutoff policies for individual tables in Nessie catalog sources, overriding catalog-level cutoff policies.
Use these 
  * `history.expire.max-snapshot-age-ms`
  * `history.expire.min-snapshots-to-keep`


Table-level overrides with `history.expire.max-snapshot-age-ms` can lengthen but not shorten the cutoff policy for individual tables. When a table's properties include an override for the cutoff policy, Dremio compares the table-level and catalog-level cutoff policy values and applies the larger value. For example, if the Nessie catalog source's cutoff policy value is 5 days and you set a table-level override of 10 days for Table1, Dremio retains Table1 snapshots and files for 10 days.
With overrides, you can set different cutoff policies for tables on different branches in the Nessie catalog source. For example, suppose Table1 at branch `main` has 11 snapshots, and you set the `history.expire.min-snapshots-to-keep` table-level property to keep at least 5 snapshots. At the same time, Table1 at branch `newBranch` also has 11 snapshots, but you set the table-level property to keep 2 snapshots. After the VACUUM CATALOG command runs, Table1 at `main` will retain 5 snapshots, and Table1 at `newBranch` will retain 2 snapshots.
You can also exclude specific tables directly in the catalog source when running the [`VACUUM CATALOG`](/reference/sql/commands/nessie/vacuum-catalog) SQL command.
## Results and Output​
When the VACUUM CATALOG command runs, Dremio removes expired snapshots and orphaned metadata files for tables in the catalog if the following conditions are met:
  * The snapshot is older than the number of days specified in the defaultCutoffPolicy parameter.
  * The snapshot is not in the branch or tag head. Dremio always retains the branch or tag head, even if it was created before the specified cutoff policy.


For example, suppose you set a Nessie catalog source's cutoff policy so that Dremio retains 7 days of table history for each table in the catalog. Queries that use commits that are less than 7 days old succeed unless the query refers to the history of a table before the cutoff policy. Users can roll back the Nessie catalog source to any commit that is less than 7 days old. Users should not create tags or branches using a commit that is more than 7 days old.
In the Dremio console, if you run the VACUUM CATALOG command manually in the SQL Runner, the output is a table that includes two columns:  
| Column Name  | Data Type  | Description  |  
| --- | --- | --- |  
| deleted_files_count  | Integer  | The number of files the VACUUM CATALOG command removed.  |  
| deleted_files_total_size_mb  | Integer  | The total size of the files the VACUUM CATALOG command removed in megabytes.  |  
You can also use the [Job API](/reference/api/job) to retrieve the number of files removed by the VACUUM CATALOG command.
After Dremio runs the VACUUM CATALOG command, users cannot roll back to the previous table state for expired commits. Users can still view the commit tree and metadata for expired commits.
## Common Scenarios​
This section describes the results of the VACUUM CATALOG command in several common scenarios. In the images that illustrate the scenarios, each square represents a commit, and the dotted line represents the cutoff policy. Gray commits are older than the cutoff policy, and green commits were created after the cutoff policy. Red snapshot numbers indicate that the snapshots are expired and deleted according to the cutoff policy.
### Snapshots Older than the Cutoff Policy​
The image below depicts how the VACUUM CATALOG command affects snapsots that are older than the cutoff policy. In this scenario, snapshots S1 and S2 are older than the cutoff policy. After Dremio runs the VACUUM CATALOG command, users cannot query these snapshots. Only snapshots that are not expired according to the cutoff policy are available. Queries on Table 1 at commit C1 or C2 will result in an error, but queries on Table 1 at commit C3 or C4 will run.
![This image demonstrates the VACUUM CATALOG results for snapshots that are older than the cutoff policy.](https://docs.dremio.com/images/vacuum-catalog_snapshots-created-before-retention-cutoff.png)
### Branch Older than the Cutoff Policy​
The image below depicts how the VACUUM CATALOG command affects branches and commits that are older than the cutoff policy. In this scenario, branch D1 is older than the cutoff policy. After Dremio runs the VACUUM CATALOG command, the latest snapshot on the table in branch D1 remains: snapshot S2. As a result, users can query snapshot S2 on all commits beyond commit C1.
Tables in commits that are created after the cutoff policy retain their snapshots until their snapshots are expired according to the cutoff policy. For commits C3 and C4, snapshots S3 and S4 are retained. Users cannot query snapshot S1 on commit C1, and queries that reference snapshot S1 fail.
![This image shows results of VACUUM CATALOG on branches that are older than the cutoff policy.](https://docs.dremio.com/images/vacuum-catalog_branch-created-before-retention-cutoff.png)
### Commit Created After the Cutoff Policy​
The image below depicts how the VACUUM CATALOG command affects commits created after the cutoff policy. In this scenario, Table 1 was deleted from the main branch but exists on commit D2, which is older than the cutoff policy. After Dremio runs the VACUUM CATALOG command, users can query Table 1 on commit D2. Any orphaned metadata files for Table 1 on the main branch are removed.
![This image demonstrates the VACUUM CATALOG results for branches created after the cutoff policy.](https://docs.dremio.com/images/vacuum-catalog_branch-created-after-retention-cutoff.png)
## Viewing Table Cleanup Jobs​
Table cleanup job records are stored on the [Jobs](/admin/monitoring/jobs) page. The owners of table cleanup jobs can see their own job history. Owners of a Nessie catalog source can see all table cleanup jobs for the source.
You can view the details of a specific table cleanup job on the [Job Overview](/admin/monitoring/jobs/overview) page.
## Limitations​
The VACUUM CATALOG command has the following limitations:
  * It is only supported for Iceberg tables in Nessie catalog sources that use Amazon S3 for storage. VACUUM CATALOG is not supported for Nessie catalog sources that use Azure Storage or Google Cloud Storage (GCS).
  * It does not remove snapshots and files for tables that are deleted before the cutoff policy or for tables that exist only on a deleted branch or tag in a Nessie catalog source.


There are several limitations that affect the outcome of VACUUM CATALOG jobs:
  * Dremio does not prevent users from creating branches and tags from expired commits, which should be avoided because branches and tags based on expired commits may be invalid.
  * Dremio does not group expiry on all tables in a single commit. VACUUM CATALOG creates a single expiry commit for each table.
  * Historical commits are immutable. Iceberg metadata queries on historical commits will continue to show all snapshots after the VACUUM CATALOG command runs, including snapshots that VACUUM CATALOG cleaned up. However, SELECT queries may fail if the requested version of the data is no longer available.
  * The Nessie web UI and SQL commit logs do not demarcate the expiry cut-off in the commit log history.


## Troubleshooting Table Cleanup Jobs​
To investigate and resolve issues related to table cleanup jobs, run the [VACUUM CATALOG](/reference/sql/commands/nessie/vacuum-catalog) command manually. Then, refer to the troubleshooting instructions below to interpret the results from the VACUUM CATALOG command and resolve the problem.
### Validation Errors​
If you see any of the following validation errors, vacuum is misconfigured.
Validation Errors

```
Default cut-off-policy cannot be empty or null  
Please reconfigure the GC policy without PerRefCutoffPolicies and retry.  
VACUUM command cannot continue because the cut-off policy is set to NONE  
Only duration and timestamp based cut-offs are supported. Kindly reconfigure with a duration or time based policy and retry  

```

To resolve these errors, update the cutoff policy for the Nessie catalog source.
### File Not Found Exception​
FileNotFoundException Error

```
FileNotFoundException: No such file or directory <file_directory_path>  

```

This error means that at least one table in the Nessie catalog source is not queryable because the live snapshot of the table or the table itself is corrupted. To resolve the problem, re-instantiate the missing files to fix the corruption, set the cutoff policy so that it excludes the corrupted snapshot, or drop the corrupted table.
### Vacuum Runs but Does Not Delete Any Files​
If the VACUUM CATALOG command runs but no files are deleted, it's possible that there are no expired files to delete. Check your cutoff policy to make sure that it is set to your desired value. Check the table history against the cutoff policy to confirm whether there are any snapshots that should have been expired and deleted according to your cutoff policy.
### Vacuum Runs but Does Not Delete Expired Files​
If the `VACUUM CATALOG` command runs but does not delete files that are expired according to your cutoff policy, check the `newFilesGracePeriod` and `defaultCutoffPolicy` parameters in your Nessie catalog source configuration. If the `newFilesGracePeriod` value is higher than the `defaultCutoffPolicy` value, the `VACUUM CATALOG` command will not delete any files.
### Vacuum Does Not Run​
If your cutoff policy is set correctly but the VACUUM CATALOG command does not execute after you run it with the [SQL API](/reference/api/sql) or the SQL Runner, inspect the job profile for errors. Also, check the job profile metrics for more information about the number of files considered for deletion, any files that Dremio could not delete, the total number of tables and files scanned, and the total number of live references identified. This information can help you understand why a specific manual vacuum job did not run.
Helpful metrics include the following:  
| Metric  | Description  | Operator  |  
| --- | --- | --- |  
| COMMIT_SCAN_TIME  | Time taken by the Nessie identification phase to identify the catalog's live contents.  | NESSIE_COMMITS_SUB_SCAN (NessieCommitsRecordReader)  |  
| ICEBERG_COMMIT_TIME  | Time taken to commit expired snapshot operations.  | ICEBERG_SNAPSHOTS_SUB_SCAN (IcebergExpirySnapshotReader)  |  
| NUM_ACCESS_DENIED  | Number of "access denied" errors for metadata files while running the VACUUM CATALOG command. The `NUM_ACCESS_DENIED` count is included in the `NUM_PARTIAL_FAILURES` count.  | NESSIE_COMMITS_SUB_SCAN (NessieCommitsRecordReader)  
ICEBERG_SNAPSHOTS_SUB_SCAN (IcebergExpirySnapshotReader)  |  
| NUM_EXPIRED_SNAPSHOTS  | Total number of snapshots expired by the VACUUM CATALOG command.  | ICEBERG_SNAPSHOTS_SUB_SCAN (IcebergExpirySnapshotReader)  |  
| NUM_NOT_FOUND  | Number of "file not found" errors for metadata files while running the VACUUM CATALOG command. The `NUM_NOT_FOUND` count is included in the `NUM_PARTIAL_FAILURES` count.  | NESSIE_COMMITS_SUB_SCAN (NessieCommitsRecordReader)  
ICEBERG_SNAPSHOTS_SUB_SCAN (IcebergExpirySnapshotReader)  |  
| NUM_PARTIAL_FAILURES  | Number of partial failures while running the VACUUM CATALOG command, including failures because Dremio could not access metadata and therefore skipped the affected tables during the operation.  | NESSIE_COMMITS_SUB_SCAN (NessieCommitsRecordReader)  
ICEBERG_SNAPSHOTS_SUB_SCAN (IcebergExpirySnapshotReader)  |  
| NUM_TABLE_EXPIRY  | Number of tables expired by the VACUUM CATALOG command.  | ICEBERG_SNAPSHOTS_SUB_SCAN (IcebergExpirySnapshotReader)  |  
| NUM_TABLES  | Number of total live tables.  | NESSIE_COMMITS_SUB_SCAN (NessieCommitsRecordReader)  |  
| NUM_TOTAL_SNAPSHOTS  | Number of total snapshots for all live tables.  | ICEBERG_SNAPSHOTS_SUB_SCAN (IcebergExpirySnapshotReader)  |  
### Missing Intermediate Files​
Errors related to ManifestListScanTableFunction, ManifestScanTableFunction, and PartitionStatsScanTableFunction typically mean that an intermediate manifest or partition stats file is missing, and the table is therefore corrupted. To resolve the problem, re-instantiate the missing files to fix the corruption, set the cutoff policy so that it excludes the corrupted snapshot, or drop the corrupted table.
You may also see these errors if you do not have sufficient permissions to read the intermediate files.
### Error While Expiring Snapshots​
The 
### Long-Running Vacuum​
When Dremio runs VACUUM CATALOG on a Nessie catalog source for the first time, it may take a long time if there are many expired files to delete. To help reduce the amount of time it takes to run VACUUM CATALOG, use the job profile to identify bottlenecks and confirm whether the VACUUM CATALOG command is using all available execution resources. Consider scaling up the cluster with more executors to increase vacuum performance.
### Number of Files Increases after VACUUM CATALOG Runs​
The number of files may increase after VACUUM CATALOG runs because the VACUUM CATALOG command rewrites table metadata without using expired snapshots. The new metadata files are introduced post-vacuum, which allows cleanup of the expired snapshots and related files in subsequent runs and enables efficient storage sizes.
Was this page helpful?
[Previous Automated Maintenance with the Open Catalog](/developer/data-formats/apache-iceberg/table-maintenance-optimization/automated-maintenance)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Automated Maintenance with the Open Catalog](/developer/data-formats/apache-iceberg/table-maintenance-optimization/automated-maintenance)
!
