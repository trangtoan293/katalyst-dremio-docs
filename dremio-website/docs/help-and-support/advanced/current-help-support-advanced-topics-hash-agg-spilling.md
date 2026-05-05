---
url: /help-support/advanced-topics/hash-agg-spilling
title: "Hash Aggregation Spilling | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64222.407305
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Advanced Topics](/help-support/advanced-topics)
  * Hash Aggregation Spilling

Version: current [26.x]
On this page
# Hash Aggregation Spilling
Dremio implements hash aggregation spilling. When memory limits are reached, Dremio spills the data to disk as and when necessary. The query tries to complete within the memory envelope under which Dremio operates.
This feature is useful for the following:
  * Memory-intensive hash aggregation queries (GROUP BY queries) that process large datasets.
  * Limited memory environments


A bare minimum amount of memory is needed by the hash aggregation operator to even start processing the first batch of data. As long as the memory given to hash aggregation is equal to or more than the minimum, Dremio can complete the query.
If the minimum memory is unavailable when the query is submitted, the job fails immediately (prior to starting the job) with an "Error: Failed to preallocate memory for single batch in partitions" message. This error message is shown in the exception stack details.
Based on the amount of system memory that you have provisioned, Dremio automatically determines the memory envelope for memory intensive operators that can spill.
## Hash Aggregation Spilling[​](/help-support/advanced-topics/hash-agg-spilling/#hash-aggregation-spilling-1 "Direct link to Hash Aggregation Spilling")
Hash aggregation spilling is enabled by default. To fine-tune hash aggregation spilling performance, Contact Dremio Support at 
## Limitations[​](/help-support/advanced-topics/hash-agg-spilling/#limitations "Direct link to Limitations")
Hash aggregation queries complete successfully regardless of the amount of data being sent to the operator, as long as:
  * There is a minimal amount of memory available to the hash aggregation operator. Note that it is highly likely that a bare minimum of memory will be available.
  * There is sufficient disk space available for the spilled data.
  * The worst-case row of the incoming data can be stored within this initial memory allocation.


For hash aggregation spilling information, go to **Jobs &gt; Details** or **Jobs &gt; Profile &gt; HASH_AGGREGATE_OPERATOR &gt; Operator Metrics**.
Was this page helpful?
[Previous Gandiva-based Execution](/help-support/advanced-topics/gandiva)[Next Querying Relational-Database Sources Directly](/help-support/advanced-topics/external-queries)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Gandiva-based Execution](/help-support/advanced-topics/gandiva)[Next Querying Relational-Database Sources Directly](/help-support/advanced-topics/external-queries)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fhelp-support%2Fadvanced-topics%2Fhash-agg-spilling%2F&_biz_t=1777950542054&_biz_i=Hash%20Aggregation%20Spilling%20%7C%20Dremio%20Documentation&_biz_n=424&rnd=643367&cdn_o=a&_biz_z=1777950542054)
