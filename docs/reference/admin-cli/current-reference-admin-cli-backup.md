---
url: /reference/admin-cli/backup
slug: /reference/admin-cli/backup
title: "Back up Dremio | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64229.998719833
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [Admin CLI](/reference/admin-cli)
  * Back up Dremio

Version: current [26.x]
On this page
# Back up Dremio
You can use the CLI to back up Dremio metadata and user-uploaded files on demand.
In Enterprise edition, Dremio supports [automated backups](/admin/automated-backups) created on a daily schedule.
The backup does not include the contents of the distributed cache such as acceleration cache, downloaded files and query results.
Be sure you read [Using the Dremio Admin CLI on Kubernetes](/admin/admin-dremio-kubernetes/) before putting anything learned on this page into practice on such a deployment.
## Requirements​
  * The Dremio daemon is running.
  * The backup command is run on the coordinator node.
  * The backup path is writable by the user running Dremio daemon.


You can only restore a backup using the same version of Dremio that was used to create the backup.
## Syntax​
Backup syntax

```
<dremio_home>/bin/dremio-admin backup  
    -u <DREMIO_ADMIN_USER> \  
    -p <DREMIO_ADMIN_PASS> \  
    -d <BACKUP_PATH>  

```

## Options​
To obtain a list of backup options on the command line:
Get a list of backup options

```
./dremio-admin backup -h  

```

Backup options command output

```
    -a, --accept-all  
      accept all ssl certificates  
      Default: false  
  * -d, --backupdir  
      backup directory path. for example, /mnt/dremio/backups or  
      hdfs://$namenode:8020/dremio/backups  
    -h, --help  
      show usage  
    -i, --include-profiles  
      include profiles in backup.  
      Default: false  
    -j, --json  
      Use a json formatted backup (default binary).  
      Default: false  
    -l, --local-attach  
        Attach locally to Dremio JVM to authenticate user.  
        Not compatible with user/password options.  
    -p, --password  
      password  
    -u, --user  
      username (admin)  

```

If the `--password` option is specified without a value, the utility prompts for one interactively.
## Example: Basic Backup​
This following example backs up Dremio to the **/tmp/backup** directory:
Back up to /tmp/backup

```
/dremio-admin backup -u dremio -p dremio123 -d /tmp/backup  

```

A confirmation message is displayed when the backup is complete.
## Example: Backup with local-attach mode​
The following example backs up Dremio to the **/tmp/backup** directory in local attach mode.
Back up to /tmp/backup in local attach mode

```
./dremio-admin backup -d /tmp/backup -l  

```

**output message**  
The output message in `server.out`.
Output for backup to /tmp/backup in local attach mode

```
Backup created at /tmp/dremio_backup_2017-02-23_18.25, dremio tables 1400, uploaded files 150  

```

## Backing Up Dremio Step-by-Step​
  1. Ensure that the Dremio daemon is running, on the main node.
  2. On the main node, run the following command:
Backup command

```
 <dremio_home>/bin/dremio-admin backup \  
  -u <DREMIO_ADMIN_USER> \  
  -p <DREMIO_ADMIN_PASS> \  
  -d <BACKUP_PATH>  

```

  3. To confirm that your backup is complete, look for the following confirmation message:
Backup confirmation message

```
Backup created at /tmp/dremio_backup_2017-02-23_18.25, dremio tables 1400, uploaded files 150  

```



Was this page helpful?
[Previous Admin CLI](/reference/admin-cli)[Next Encrypt Credentials](/reference/admin-cli/encryption)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Admin CLI](/reference/admin-cli)[Next Encrypt Credentials](/reference/admin-cli/encryption)
!
