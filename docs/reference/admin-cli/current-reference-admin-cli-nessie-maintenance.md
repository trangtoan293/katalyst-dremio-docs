---
url: /reference/admin-cli/nessie-maintenance
slug: /reference/admin-cli/nessie-maintenance
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
Automatic Nessie maintenance and the manual CLI command are available in Dremio 21.4.0+ and 22.1.1+. Because Nessie maintenance is performed automatically, it is not likely that you will need to run the CLI command unless advised by Dremio Support. You can change the automatic maintenance interval with the `nessie.kvversionstore.maintenance.period_minutes` [support key](/help-support/support-settings/).
Be sure you read [Using the Dremio Admin CLI on Kubernetes](/admin/admin-dremio-kubernetes/) before putting anything learned on this page into practice on such a deployment.
## Requirements​
  * Perform a backup before running the command (see [Backup](/reference/admin-cli/backup) for more information).
  * Shut down all cluster nodes completely before running the command.


## Syntax​
Syntax for Nessie maintenance command

```
dremio-admin nessie-maintenance [args...]  

```

## Arguments​
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

## Examples​
This section provides examples for performing Nessie maintenance.
### Compact Global Log​
Compacts embedded Nessie's global log file.
Compact Global Log

```
dremio-admin nessie-maintenance --compact-global-log  

```

### Purge Obsolete Key Lists​
Purges key-value entries that are no longer used.
Purge Key Lists

```
dremio-admin nessie-maintenance --purge-key-lists  

```

Was this page helpful?
Previous Clean Metadata[Next Remove Duplicate Roles](/reference/admin-cli/remove-roles)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
Previous Clean Metadata[Next Remove Duplicate Roles](/reference/admin-cli/remove-roles)
