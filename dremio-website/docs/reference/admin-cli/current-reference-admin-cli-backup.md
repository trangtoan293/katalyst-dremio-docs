---
url: /reference/admin-cli/backup
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
Be sure you read [Using the Dremio Admin CLI on Kubernetes](/admin/admin-dremio-kubernetes/#using-the-dremio-admin-cli-on-kubernetes) before putting anything learned on this page into practice on such a deployment.
## Requirements[​](/reference/admin-cli/backup#requirements "Direct link to Requirements")
  * The Dremio daemon is running.
  * The backup command is run on the coordinator node.
  * The backup path is writable by the user running Dremio daemon.


You can only restore a backup using the same version of Dremio that was used to create the backup.
## Syntax[​](/reference/admin-cli/backup#syntax "Direct link to Syntax")
Backup syntax

```
<dremio_home>/bin/dremio-admin backup  
    -u <DREMIO_ADMIN_USER> \  
    -p <DREMIO_ADMIN_PASS> \  
    -d <BACKUP_PATH>  

```

## Options[​](/reference/admin-cli/backup#options "Direct link to Options")
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
## Example: Basic Backup[​](/reference/admin-cli/backup#example-basic-backup "Direct link to Example: Basic Backup")
This following example backs up Dremio to the **/tmp/backup** directory:
Back up to /tmp/backup

```
/dremio-admin backup -u dremio -p dremio123 -d /tmp/backup  

```

A confirmation message is displayed when the backup is complete.
## Example: Backup with local-attach mode[​](/reference/admin-cli/backup#example-backup-with-local-attach-mode "Direct link to Example: Backup with local-attach mode")
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

## Backing Up Dremio Step-by-Step[​](/reference/admin-cli/backup#backing-up-dremio-step-by-step "Direct link to Backing Up Dremio Step-by-Step")
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Admin CLI](/reference/admin-cli)[Next Encrypt Credentials](/reference/admin-cli/encryption)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fadmin-cli%2Fbackup%2F&_biz_t=1777950550545&_biz_i=Back%20up%20Dremio%20%7C%20Dremio%20Documentation&_biz_n=445&rnd=136122&cdn_o=a&_biz_z=1777950550545)
