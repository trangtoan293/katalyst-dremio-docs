---
url: /help-support/advanced-topics/hive-s3
slug: /help-support/advanced-topics/hive-s3
title: "S3 on Amazon EMR Configuration | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64222.930723
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Advanced Topics](/help-support/advanced-topics)
  * S3 on Amazon EMR Configuration

Version: current [26.x]
# S3 on Amazon EMR Configuration
When working with S3-backed Hive tables on Amazon EMR, you need to configure Hive with an additional property for that Hive source.  
| Property Name  | Value  |  
| --- | --- |  
| fs.s3.impl  | org.apache.hadoop.fs.s3a.S3AFileSystem  |  
To configure for S3-backed Hive tables on Amazon EMR:
  1. Select `Advanced Options`.
  2. Set the `fs.s3.impl` Hive connection property to `org.apache.hadoop.fs.s3a.S3AFileSystem`.
  3. Restart your coordinator nodes.


Was this page helpful?
[Previous Runtime Filtering](/help-support/advanced-topics/runtime-filtering)[Next Start, Stop, and Status](/help-support/advanced-topics/start-stop)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Runtime Filtering](/help-support/advanced-topics/runtime-filtering)[Next Start, Stop, and Status](/help-support/advanced-topics/start-stop)
!
