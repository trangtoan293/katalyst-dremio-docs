---
url: /reference/admin-cli/nessie-maintenance
title: "Perform Nessie Maintenance | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64234.456504125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [Admin CLI](/reference/admin-cli)
  * Perform Nessie Maintenance

Version: current [26.x]
On this page
# Perform Nessie Maintenance
This topic provides usage information for the `dremio-admin nessie-maintenance` CLI command.
Automatic Nessie maintenance and the manual CLI command are available in Dremio 21.4.0+ and 22.1.1+. Because Nessie maintenance is performed automatically, it is not likely that you will need to run the CLI command unless advised by Dremio Support. You can change the automatic maintenance interval with the `nessie.kvversionstore.maintenance.period_minutes` [support key](/help-support/support-settings/#support-keys).
Be sure you read [Using the Dremio Admin CLI on Kubernetes](/admin/admin-dremio-kubernetes/#using-the-dremio-admin-cli-on-kubernetes) before putting anything learned on this page into practice on such a deployment.
## Requirements[​](/reference/admin-cli/nessie-maintenance#requirements "Direct link to Requirements")
  * Perform a backup before running the command (see [Backup](/reference/admin-cli/backup) for more information).
  * Shut down all cluster nodes completely before running the command.


## Syntax[​](/reference/admin-cli/nessie-maintenance#syntax "Direct link to Syntax")
Syntax for Nessie maintenance command

```
dremio-admin nessie-maintenance [args...]  

```

## Arguments[​](/reference/admin-cli/nessie-maintenance#arguments "Direct link to Arguments")
Arguments for Nessie maintenance command

```
--compact-global-log  
Compact Nessie's global log file (legacy data).  
  
--dry-run  
Test repository maintenance activities without making any changes. This is useful for estimating the amount of maintenance work that would be performed.  
  
-h, --help  
Show usage and exit.  
  
--list-keys  
List live keys without making any changes or performing any maintenance.  
  
--progress  
Report process every Nth maintenance event, such as deleting an entity. This entry is ignored if not a positive integer value.  
Default: 0 (ignored)  
  
--purge-key-lists  
Purge obsolete key lists.  

```

## Examples[​](/reference/admin-cli/nessie-maintenance#examples "Direct link to Examples")
This section provides examples for performing Nessie maintenance.
### Compact Global Log[​](/reference/admin-cli/nessie-maintenance#compact-global-log "Direct link to Compact Global Log")
Compacts embedded Nessie's global log file.
Compact Global Log

```
dremio-admin nessie-maintenance --compact-global-log  

```

### Purge Obsolete Key Lists[​](/reference/admin-cli/nessie-maintenance#purge-obsolete-key-lists "Direct link to Purge Obsolete Key Lists")
Purges key-value entries that are no longer used.
Purge Key Lists

```
dremio-admin nessie-maintenance --purge-key-lists  

```

Was this page helpful?
[Previous Clean Metadata](/reference/admin-cli/metadata-cleanup)[Next Remove Duplicate Roles](/reference/admin-cli/remove-roles)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Clean Metadata](/reference/admin-cli/metadata-cleanup)[Next Remove Duplicate Roles](/reference/admin-cli/remove-roles)
