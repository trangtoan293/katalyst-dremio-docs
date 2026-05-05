---
url: /reference/sql/commands/alter-source
slug: /reference/sql/commands/alter-source
title: "ALTER SOURCE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64248.903521458
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * ALTER SOURCE

Version: current [26.x]
On this page
# ALTER SOURCE
Change the source.
Syntax

```
ALTER SOURCE <source_name>  
  { CLEAR PERMISSION CACHE | REFRESH STATUS }  

```

To run ALTER SOURCE, you need the [MODIFY privilege](/security/rbac/privileges) on the source.
## Parameters​
`source_name` String
The name of the source to alter.
* * *
CLEAR PERMISSION CACHE Optional
Clears the [AWS Lake Formation](/data-sources/lakehouse-catalogs/aws-glue-catalog) permission cache and applies only to the AWS Glue Data Catalog.
Dremio keeps a cache of permissions defined in AWS Lake Formation with a one-hour expiry time. When the cache for the queried table expires, Dremio requests permission information from AWS Lake Formation. After changing permissions on the AWS Lake Formation side, use CLEAR PERMISSION CACHE to immediately invalidate Dremio's AWS Lake Formation permission cache.
Any changes made to the AWS Glue Data Catalog settings also clears the Lake Formation permission cache.
* * *
REFRESH STATUS Optional
Refreshes the status for a given source.
## Examples​
Clear the Lake Formation permission cache for an AWS Glue source

```
ALTER SOURCE glue1  
  CLEAR PERMISSION CACHE  

```

Refresh the status for an Amazon S3 source

```
ALTER SOURCE S3  
  REFRESH STATUS  

```

Was this page helpful?
[Previous ALTER PIPE](/reference/sql/commands/alter-pipe)[Next ALTER SPACE](/reference/sql/commands/alter-space)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ALTER PIPE](/reference/sql/commands/alter-pipe)[Next ALTER SPACE](/reference/sql/commands/alter-space)
