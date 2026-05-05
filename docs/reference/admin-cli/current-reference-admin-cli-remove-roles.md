---
url: /reference/admin-cli/remove-roles
slug: /reference/admin-cli/remove-roles
title: "Remove Duplicate Roles | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64231.844693625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [Admin CLI](/reference/admin-cli)
  * Remove Duplicate Roles

Version: current [26.x]
On this page
# Remove Duplicate Roles
If you have found duplicate LDAP groups or local roles in Dremio, you can safely remove the duplicates using the admin utility.
This topic provides usage information for the `dremio-admin remove-duplicate-roles` CLI command.
The `dremio-admin remove-duplicate-roles` CLI command is available in Dremio 20.5.0+.
Be sure you read [Using the Dremio Admin CLI on Kubernetes](/admin/admin-dremio-kubernetes/) before putting anything learned on this page into practice on such a deployment.
## Requirements​
  * Perform a backup before running the command (see [Backup](/reference/admin-cli/backup) for more information).
  * Shut down all cluster nodes completely before running the command.


## Syntax​
Syntax for remove-duplicate-roles command

```
./dremio-admin remove-duplicate-roles [args...]  

```

## Options​
Options for remove-duplicate-roles command

```
-r  
  
Perform a test run of the removal, providing a summary report of the roles that are duplicated and associated members, parents, ACLs, etc.  

```

## Examples​
This section provides examples of using the `dremio-admin remove-duplicate-roles` CLI command.
### Remove Duplicate Roles: Test Run​
Remove duplicate roles test run command

```
./dremio-admin remove-duplicate-roles -r  

```

The test prints out the duplicates and related information such as associated members, parents, ACLs, etc. If the test run results are acceptable, you can run the command without the `-r` argument.
### Remove Duplicate Roles​
Remove duplicate roles command

```
./dremio-admin remove-duplicate-roles  

```

Running this command will remove duplicate roles as described in the test run. The command will consolidate all characteristics of the duplicated roles into a single retained role.
Was this page helpful?
[Previous Perform Nessie Maintenance](/reference/admin-cli/nessie-maintenance)[Next Repair ACLS](/reference/admin-cli/repair-acls)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Perform Nessie Maintenance](/reference/admin-cli/nessie-maintenance)[Next Repair ACLS](/reference/admin-cli/repair-acls)
