---
url: /reference/admin-cli
slug: /reference/admin-cli
title: "Admin CLI | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64062.171779291
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * Admin CLI

Version: current [26.x]
On this page
# Admin CLI
This topic summarizes the `dremio-admin` CLI commands.
## Syntax​
Syntax for dremio-admin commands

```
dremio-admin [--config <conf-dir>] (encrypt|set-password|upgrade|recommend-reflections|delete-user-homespace|optimize-acls|export-profiles|remove-duplicate-users|clean|remove-duplicate-roles|reset-catalog-search|backup|delete-all-users|restore|repair-acls|nessie-maintenance) [args...]  

```

## Options​  
| Option  | Description  |  
| --- | --- |  
| `--help, -h`  | Displays usage information for the CLI commands.  |  
| `--config <conf-dir>`  | Used when the configuration file location is different than the `/opt/dremio/conf` default directory.  
  
For example, if `dremio.conf`, `dremio-env`, `logbook.xml`, and `logbook-admin.xml` are located in `/etc/dremio`, you will have to run all of the `dremio-admin` commands as `./dremio-admin --config /etc/dremio `command` `arguments``.  |  
## Commands​  
| Command  | Description  |  
| --- | --- |  
| `backup`  | Backs up Dremio metadata and user-uploaded files.  |  
| `clean`  | Cleans Dremio metadata.  |  
| `delete-all-users`  | Deletes all internal Dremio users.  |  
| `delete-user-homespace`  | Deletes the user's home space.  |  
| `encrypt`  |  [Encrypt](/reference/admin-cli/encryption) a user-supplied string.  |  
| `export-pats`  | Exports personal access tokens (PATs).  |  
| `export-profiles`  | Exports profiles of jobs from Dremio.  |  
| `import-pats`  | Imports personal access tokens (PATs).  |  
| `nessie-maintenance`  | Runs embedded Nessie repository maintenance tasks.  |  
| `optimize-acls`  | Optimizes access control lists of sources, spaces, and datasets.  |  
| `recommend-reflections`  | Recommend Reflections.  |  
| `remove-duplicate-roles`  | Removes duplicate roles from Dremio.  |  
| `remove-duplicate-users`  | Removes duplicate users from Dremio.  |  
| `reset-catalog-search`  | Resets index to recover catalog search.  |  
| `repair-acls`  | Repairs access control lists of sources, spaces, and datasets.  |  
| `restore`  | Restores Dremio metadata and user-uploaded files.  |  
| `set-password`  | Sets passwords for Dremio users (non-LDAP).  |  
| `upgrade`  | Upgrades the KV store version. There are no options available for this command.  |  
## Log Directory​
The default value for `DREMIO_ADMIN_LOG_DIR` is null (not set). When this parameter is _not_ set, log files are _not_ created.
To set the log directory, provide the log directory path by running the following:
Set log directory

```
export DREMIO_ADMIN_LOG_DIR=<path>  

```

The export option must be set and access must be available for the user running the `dremio-admin` command.
## Log Verbosity​
Log verbosity is used in conjunction with `DREMIO_ADMIN_LOG_DIR`. Otherwise, all the output is printed to `stdout`; there is no control on setting verbosity for `stdout`.
Verbosity options include:
  * TRACE
  * DEBUG
  * INFO (default)
  * WARN
  * ERROR


To set the log verbosity (default: INFO), provide the verbose level by running the following:
Set log verbosity

```
export DREMIO_ADMIN_LOG_VERBOSITY=<value>  

```

## For More Information​
  * [Backup](/reference/admin-cli/backup)
  * Clean Metadata
  * [Encrypt Credentials](/reference/admin-cli/encryption)
  * [Export and Import Personal Access Tokens (PATs)](/reference/admin-cli/export-import-pat)
  * [Export Profiles](/reference/admin-cli/export-profiles)
  * [Perform Nessie Maintenance](/reference/admin-cli/nessie-maintenance)
  * [Remove Duplicate Roles](/reference/admin-cli/remove-roles)
  * [Repair ACLs](/reference/admin-cli/repair-acls)
  * [Restore](/reference/admin-cli/restore)
  * [Reset Password](/reference/admin-cli/reset-password)
  * Upgrade KV Store


Was this page helpful?
[Previous Dremio on Kubernetes](/admin/admin-dremio-kubernetes)[Next Back up Dremio](/reference/admin-cli/backup)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Dremio on Kubernetes](/admin/admin-dremio-kubernetes)[Next Back up Dremio](/reference/admin-cli/backup)
