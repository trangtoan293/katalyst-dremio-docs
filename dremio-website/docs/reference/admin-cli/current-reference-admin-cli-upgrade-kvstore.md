---
url: /reference/admin-cli/upgrade-KVstore
title: "Upgrade KV Store | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64236.27215275
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [Admin CLI](/reference/admin-cli)
  * Upgrade KV Store

Version: current [26.x]
On this page
# Upgrade KV Store
This topic describes the Dremio CLI command, `dremio-admin upgrade` which upgrades Dremio's KV store.
Be sure you read [Using the Dremio Admin CLI on Kubernetes](/admin/admin-dremio-kubernetes/#using-the-dremio-admin-cli-on-kubernetes) before putting anything learned on this page into practice on such a deployment.
## Requirements[​](/reference/admin-cli#requirements "Direct link to Requirements")
  * A backup must be done _before_ performing the `dremio-admin` command. See [Backup](/reference/admin-cli/backup) for more information.
  * Shut down all cluster nodes completely before running the command.
  * This command is run on the main node.


## Syntax[​](/reference/admin-cli#syntax "Direct link to Syntax")
Syntax for upgrade KV store command

```
<DREMIO_HOME>/bin/dremio-admin upgrade  

```

## Options[​](/reference/admin-cli#options "Direct link to Options")
There are no options available for this command.
Was this page helpful?
[Previous Restore Dremio](/reference/admin-cli/restore)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Restore Dremio](/reference/admin-cli/restore)
