---
url: /acceleration/manual-reflections/info-about-queries
slug: /acceleration/manual-reflections/info-about-queries
title: "View Whether Queries Used Reflections | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64188.220412291
---

  * [Dremio Enterprise Home](/)
  * [Accelerate Queries](/acceleration)
  * [Manually Manage Reflections](/acceleration/manual-reflections)
  * View Whether Queries Used Reflections

Version: current [26.x]
On this page
# View Whether Queries Used Reflections
You can view the list of jobs on the Jobs page to find out whether queries were accelerated by Reflections. The Jobs page lists the jobs that ran queries, both queries from your data consumers and queries run within the Dremio user interface.
## Procedure​
To find whether a query used a Reflection:
  1. Find the job that ran the query by looking below the details in each row.
  2. Look for the indicator that one or more Reflections were used. A lightning-bolt icon appears next to the job to indicate that a query was accelerated.
  3. View the job summary by clicking the row that represents the job that ran the query. The job summary appears in the pane to the right of the list of jobs.


## Relationships between Reflections and Jobs​
The relationship between a job and a Reflection can be one of the following types:
  * CONSIDERED: the Reflection is defined on a dataset that is used in the query but was determined to not cover the query (for example the Reflection did not have a field that is used by the query).
  * MATCHED: a Reflection could have been used to accelerate the query but Dremio determined that it would not provide any benefits or another Reflection was determined to be a better choice.
  * CHOSEN: a Reflection is used to accelerate the query. Note that multiple Reflections can be used to accelerate queries.


Was this page helpful?
[Previous Manually Manage Reflections](/acceleration/manual-reflections)[Next Use Reflection Hints](/acceleration/manual-reflections/using-reflection-hints)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Manually Manage Reflections](/acceleration/manual-reflections)[Next Use Reflection Hints](/acceleration/manual-reflections/using-reflection-hints)
