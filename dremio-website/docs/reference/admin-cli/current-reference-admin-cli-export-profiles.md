---
url: /reference/admin-cli/export-profiles
title: "Export Profiles | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64230.021263583
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [Admin CLI](/reference/admin-cli)
  * Export Profiles

Version: current [26.x]
On this page
# Export Profiles
The Dremio administration `export-profiles` command allows you to export Job profiles to the specified location.
The export-profiles option supports 3 modes:
  * Default (requires dremio to be running)
  * Local-attach (requires dremio to be running)
  * Offline (dremio should not be running)


Be sure you read [Using the Dremio Admin CLI on Kubernetes](/admin/admin-dremio-kubernetes/#using-the-dremio-admin-cli-on-kubernetes) before putting anything learned on this page into practice on such a deployment.
## Syntax[​](/reference/admin-cli/export-profiles#syntax "Direct link to Syntax")
Syntax for export-profiles command

```
./dremio-admin export-profiles --output <options>  

```

## Options[​](/reference/admin-cli/export-profiles#options "Direct link to Options")  
| Parameter  | Description  |  
| --- | --- |  
| -h, --help  | Shows usage.  |  
| --output  | (Required) Path to generate profile chunks. Example: `/tmp/profiles/`  |  
| --write-mode  | Specifies how we should handle a case, when target file already exists. Valid values are `[FAIL_IF_EXISTS` (default), `OVERWRITE` and `SKIP`.  |  
| --from  | Export profiles beginning from this date inclusively (job_end_time &gt;= toDate). Example: 2011-12-03T10:15:30  |  
| --to  | Export profiles ending by this date exclusively (job_end_time &lt; toDate). Example: 2011-12-03T10:15:30  |  
| -u, --user  | Username (administrator). Is required for online mode [--online].  |  
| -p, --password  | Password. Required for online mode [--online].  |  
| -a, --accept-all  | Accept all ssl certificates. Default value is `false`.  |  
| --size  | Chunk size for each zip file. hidden = true  |  
| --local-path  | Default local path to export. hidden = true  |  
| --format  | Format in which profiles should be exported. `.json` and `.zip` (default) are supported.  |  
| -l, --local-attach  | Attach locally to Dremio JVM to authenticate user. Not compatible with user/password options. Default value is `false`.  |  
| -o, --offline  | Append this option to use offline export. Default value is `false`.  |  
## Examples[​](/reference/admin-cli/export-profiles#examples "Direct link to Examples")
The following examples show default, local-attach, and offline mode usage.
### Default mode[​](/reference/admin-cli/export-profiles#default-mode "Direct link to Default mode")
The default mode requires the following:
  * Dremio is running
  * user & password are required. If not provided in cli, will be prompted.

Export profiles in default mode

```
./dremio-admin export-profiles --output /tmp/profiles -u user -p password  

```

**output message**  
The output message is available on console. If no jobs are processed, then the output path is not provided.
The following output shows 50 jobs processed and the output path:
Export profiles command output example for 50 jobs

```
Export completed. Jobs processed: 50, profiles processed: 34, profiles skipped: 0  
Output path: /tmp/profiles/14581e7c-0302-474e-aaef-5667051e345b  

```

The following output shows 0 jobs process:
Export profiles command output example for 0 jobs

```
Export completed. Jobs processed: 0, profiles processed: 0, profiles skipped: 0  

```

### Local-attach mode[​](/reference/admin-cli/export-profiles#local-attach-mode "Direct link to Local-attach mode")
The local-attach mode requires the following:
  * Dremio is running. (the user & password are not required)
  * The `-l` or `--local-attach` option is required.
  * The command should be run by the same local user who started the Dremio cluster.

Local-attach mode command

```
./dremio-admin export-profiles --output ~/tmp/profiles -l  

```

**output message**  
The output message is available in `server.out` since in local attach mode we attach to main process.
### Offline mode[​](/reference/admin-cli/export-profiles#offline-mode "Direct link to Offline mode")
The offline mode requires the following:
  * Dremio is _**not**_ running (the user & password are not required)
  * The `-o` or `--offline` option is required

Offline mode command

```
./dremio-admin export-profiles --output ~/temp/profiles -o  

```

**output message**  
The output message is available on console.
Was this page helpful?
[Previous Export and Import PATs](/reference/admin-cli/export-import-pat)[Next Clean Metadata](/reference/admin-cli/metadata-cleanup)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Export and Import PATs](/reference/admin-cli/export-import-pat)[Next Clean Metadata](/reference/admin-cli/metadata-cleanup)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fadmin-cli%2Fexport-profiles%2F&_biz_t=1777950551267&_biz_i=Export%20Profiles%20%7C%20Dremio%20Documentation&_biz_n=448&rnd=215979&cdn_o=a&_biz_z=1777950551268)
