---
url: /help-support/advanced-topics/hive-s3
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Runtime Filtering](/help-support/advanced-topics/runtime-filtering)[Next Start, Stop, and Status](/help-support/advanced-topics/start-stop)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fhelp-support%2Fadvanced-topics%2Fhive-s3%2F&_biz_t=1777950543160&_biz_i=S3%20on%20Amazon%20EMR%20Configuration%20%7C%20Dremio%20Documentation&_biz_n=429&rnd=563282&cdn_o=a&_biz_z=1777950543161)
