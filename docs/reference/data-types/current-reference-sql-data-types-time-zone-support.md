---
url: /reference/sql/data-types/time-zone-support
slug: /reference/sql/data-types/time-zone-support
title: "Time Zone Support | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64068.444393083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [Data Types](/reference/sql/data-types)
  * Time Zone Support

Version: current [26.x]
On this page
# Time Zone Support
Dremio does _not_ apply any conversions to the `TIME` or `TIMESTAMP` entry that is in the datasource table. Dremio retrieves the time or timestamp value with the assumption that the time zone is in Coordinated Universal Time (UTC).
For Parquet datasets where the time zone is specified in the Parquet file (for example, Pacific Standard Time or PST), Dremio automatically converts the value of the timestamp to UTC.
## Time Zone Limitation​
For JSON files where the time zone for the time or timestamp values are not in UTC time, Dremio assumes and processes the values as in UTC time. For such files, we recommend that you convert these values to the UTC time zone before using in Dremio.
Was this page helpful?
[Previous Mappings for External Sources](/reference/sql/data-types/mappings)[Next Coercions](/reference/sql/data-types/coercions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Mappings for External Sources](/reference/sql/data-types/mappings)[Next Coercions](/reference/sql/data-types/coercions)
