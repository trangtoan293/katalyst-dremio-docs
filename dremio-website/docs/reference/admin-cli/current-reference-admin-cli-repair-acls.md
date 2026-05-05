---
url: /reference/admin-cli/repair-acls
title: "Repair ACLS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64234.950411333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [Admin CLI](/reference/admin-cli)
  * Repair ACLS

Version: current [26.x]
On this page
# Repair ACLS
This topic describes the Dremio CLI command, `dremio-admin repair-acls` which is used to repair access control lists of sources, spaces, and datasets.
This command identifies and outputs entities that are missing ACLs.
Be sure you read [Using the Dremio Admin CLI on Kubernetes](/admin/admin-dremio-kubernetes/#using-the-dremio-admin-cli-on-kubernetes) before putting anything learned on this page into practice on such a deployment.
## Requirements[​](/reference/admin-cli/repair-acls#requirements "Direct link to Requirements")
  * Shut down all cluster nodes completely before running the command.
  * the `repair-acls` command is run on the main node.


## Syntax[​](/reference/admin-cli/repair-acls#syntax "Direct link to Syntax")
Syntax for repair-acls command

```
<dremio_home>/bin/dremio-admin repair-acls [options]  

```

## Options[​](/reference/admin-cli/repair-acls#options "Direct link to Options")
To obtain a list of restore options on the command line:
Get a list of options for repair-acls command

```
./dremio-admin repair-acls -h  

```

Output for repair-acls options

```
    -h, --help  
        show usage  
  
    -d, --set-defaults  
        if ACLs are missing on entities, set to defaults  
        Default: false  

```

## Example: Show Entities with Missing ACLs[​](/reference/admin-cli/repair-acls#example-show-entities-with-missing-acls "Direct link to Example: Show Entities with Missing ACLs")
The following example shows 3 entities with missing ACLs.
Example command for entities with missing ACLs

```
./dremio-admin repair-acls  
  
    Entity with path '[test1, consumer123]' (type: DATASET) is missing an ACL  
    Entity with path '[test1, view112123]' (type: DATASET) is missing an ACL  
    Entity with path '[test1, view1123]' (type: DATASET) is missing an ACL  
  
Found 3 datasets with no default ACL configured.  

```

## Example: Set Default ACLs[​](/reference/admin-cli/repair-acls#example-set-default-acls "Direct link to Example: Set Default ACLs")
The following example sets default ACLs for entities that are missing an ACL.
Example command for setting default ACLs

```
./dremio-admin repair-acls -d  

```

Was this page helpful?
[Previous Remove Duplicate Roles](/reference/admin-cli/remove-roles)[Next Reset Password](/reference/admin-cli/reset-password)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Remove Duplicate Roles](/reference/admin-cli/remove-roles)[Next Reset Password](/reference/admin-cli/reset-password)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fadmin-cli%2Frepair-acls%2F&_biz_t=1777950554653&_biz_i=Repair%20ACLS%20%7C%20Dremio%20Documentation&_biz_n=450&rnd=425714&cdn_o=a&_biz_z=1777950554653)
