---
url: /reference/admin-cli/restore
title: "Restore Dremio | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64236.069614333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [Admin CLI](/reference/admin-cli)
  * Restore Dremio

Version: current [26.x]
On this page
# Restore Dremio
This page describes how to restore Dremio using an admin CLI command and other general information about restoring Dremio from a backup.
  * Dremio metadata (view definitions, source settings, spaces, RBAC, local user accounts) and user uploaded files can be backed up and restored.
  * The restore CLI command doesn't restore Apache Iceberg metadata stored in distributed storage.
  * Performing a restore doesn't restore the contents of the distributed cache, such as acceleration cache, downloaded files, and query results.


## Restoring with the Admin CLI[​](/reference/admin-cli/restore#restoring-with-the-admin-cli "Direct link to Restoring with the Admin CLI")
This section provides details about restoring Dremio using the `dremio-admin restore` CLI command.
Be sure you read [Using the Dremio Admin CLI on Kubernetes](/admin/admin-dremio-kubernetes/#using-the-dremio-admin-cli-on-kubernetes) before putting anything learned on this page into practice on such a deployment.
### Requirements[​](/reference/admin-cli/restore#requirements "Direct link to Requirements")
  * Ensure that the `dremio` service is shut down on all nodes of your Dremio cluster.
  * The `restore` command must be run on the main node.
A backup can only be restored using the same version of Dremio that the backup was created on.


### Syntax[​](/reference/admin-cli/restore#syntax "Direct link to Syntax")
Syntax for restore command

```
<dremio_home>/bin/dremio-admin restore -d <BACKUP_PATH> [additional options]  

```

### Options[​](/reference/admin-cli/restore#options "Direct link to Options")
To obtain a list of restore options on the command line:
Get options for restore command

```
./bin/dremio-admin restore -h  

```

Restore command options

```
  * -d, --backupdir  
      backup directory path. for example, /mnt/dremio/backups or  
      hdfs://$namenode:8020/dremio/backups  
    -h, --help  
      show usage  
    -r, --restore  
      restore dremio metadata (deprecated, always true)  
      Default: false  
    -v, --verify  
      verify backup contents (deprecated, noop)  
      Default: false  

```

### Example[​](/reference/admin-cli/restore#example "Direct link to Example")
Restore from a backup

```
./bin/dremio-admin restore -d /tmp/dremio_backup_05august/dremio_backup_2022-08-05_13.41  

```

### Restoring a Dremio backup step-by-step[​](/reference/admin-cli/restore#restoring-a-dremio-backup-step-by-step "Direct link to Restoring a Dremio backup step-by-step")
The following are step-by-step instructions for restoring Dremio from a backup.
  1. Ensure that the `dremio` service is shut down on all nodes of your Dremio cluster. See [Startup/Shutdown](/help-support/advanced-topics/start-stop) for more information.
  2. On the main node, create a copy of ``DREMIO_LOCAL_DATA_PATH``. Check the [default location](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/metadata-store-config#default-location) for your deployment model.
  3. Prepare ``DREMIO_LOCAL_DATA_PATH``.
     * If you are restoring Dremio in-place (in other words, backing up and restoring within the same Dremio instance):
a. If you want to keep your original data, make a copy of ``DREMIO_LOCAL_DATA_PATH`` with a different name.
b. Create an empty directory under ``DREMIO_LOCAL_DATA_PATH`` named `db` that's readable and writable by the user running restore and by the Dremio daemon.
Secret decryption relies on the contents of the `security` folder. If you delete the `security` folder (for in-place restore), source connection will fail during Dremio startup.
  4. Run the following command located in ``DREMIO_HOME`/bin/`.
Run restore command

```
./dremio-admin restore -d <BACKUP_FOLDER_PATH>  

```

  5. Look for the confirmation message. For example:
Example confirmation message

```
...  
Restored from backup at /tmp/dremio_backup_2017-02-23_18.25, dremio tables 14, uploaded files 1  

```



After restoring the backup, engines will remain stopped, which you can verify on the [Engines page](/deploy-dremio/managing-engines-kubernetes#monitoring-engines). For engines to start again, it will depend on your configuration in each engine:  
| Automatic Start/Stop  | Before Backup  | Post Restore  | Action  |  
| --- | --- | --- | --- |  
| Disabled  | RUNNING or STOPPED  | STOPPED  |  **You must start the engine manually** for it to process queries. See [start an engine](/deploy-dremio/managing-engines-kubernetes#stoppingstarting-an-engine).  |  
| Enabled  | RUNNING or STOPPED  | STOPPED  |  **The engine starts automatically** once a new query arrives for it to process. But, you can also start it manually. See [start an engine](/deploy-dremio/managing-engines-kubernetes#stoppingstarting-an-engine).  |  
If you enabled unlimited splits before creating a backup, and the backup stored metadata about your tables in distributed storage, you must fix sources after restoring the backup through one of the following ways:
  * Forget and refresh the metadata by running SQL for each table. Learn about the SQL commands in [Managing Tables](/reference/sql/commands/tables).
  * Copy the `/metadata` folder to the new cluster. Learn more about it in [Relocating Distributed Storage and Metadata](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/dist-store-config#relocating-distributed-storage-and-metadata).


## Troubleshooting[​](/reference/admin-cli/restore#troubleshooting "Direct link to Troubleshooting")
### Enable verbose logging[​](/reference/admin-cli/restore#enable-verbose-logging "Direct link to Enable verbose logging")
If you encounter any error messages during restore, enable verbose logging by following the instructions in [the "Log Directory" section of the "Admin CLI" topic](/reference/admin-cli#log-directory) and run the command again.
### Dremio on Edge Nodes[​](/reference/admin-cli/restore#dremio-on-edge-nodes "Direct link to Dremio on Edge Nodes")
**Problem**  
When Dremio is running on a edge node (Hadoop client installed) and a `dremio-admin restore` is performed, by default, it looks at HDFS and comes back with file doesn't exist. The folder/file obviously doesn't exist is Hadoop.
Restore fails with the following stack:
Restore failure output

```
Error Message: java.io.FileNotFoundException: File /tmp/dremiobackup does not exist.  
at org.apache.hadoop.hdfs.DistributedFileSystem.listStatusInternal(DistributedFileSystem.java:901)  
at org.apache.hadoop.hdfs.DistributedFileSystem.access$600(DistributedFileSystem.java:112)  
at org.apache.hadoop.hdfs.DistributedFileSystem$22.doCall(DistributedFileSystem.java:961)  
at org.apache.hadoop.hdfs.DistributedFileSystem$22.doCall(DistributedFileSystem.java:958)  
at org.apache.hadoop.fs.FileSystemLinkResolver.resolve(FileSystemLinkResolver.java:81)  
at org.apache.hadoop.hdfs.DistributedFileSystem.listStatus(DistributedFileSystem.java:958)  
at org.apache.hadoop.fs.FileSystem.listStatus(FileSystem.java:1537)  
at org.apache.hadoop.fs.FileSystem.listStatus(FileSystem.java:1580)  
at com.dremio.dac.util.BackupRestoreUtil.scanInfoFiles(BackupRestoreUtil.java:191)  
at com.dremio.dac.util.BackupRestoreUtil.validateBackupDir(BackupRestoreUtil.java:230)  
at com.dremio.dac.cmd.Restore.main(Restore.java:81)  
verify failed java.io.FileNotFoundException: File /tmp/dremiobackup does not exist  

```

**Workaround**  
Use `file:///` to direct to local. For example, use the following command instead:
Example command for workaround

```
./bin/dremio-admin restore -d file:///tmp/dremiobackup/dremio_backup_2019-04-22_20.30  

```

## For More Information[​](/reference/admin-cli/restore#for-more-information "Direct link to For More Information")
  * [Creating a Backup](/reference/admin-cli/backup) for getting started with backups.


Was this page helpful?
[Previous Reset Password](/reference/admin-cli/reset-password)[Next Upgrade KV Store](/reference/admin-cli)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Reset Password](/reference/admin-cli/reset-password)[Next Upgrade KV Store](/reference/admin-cli)
